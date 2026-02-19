/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "8-4-7",
    grade: "8th Grade",
    bimester: "4",
    chapter: "7",
    chapterTitle: "The Color of Your Feelings",
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "In this lesson, you will learn to:<br><br>• Describe emotions and feelings.<br>• Use facial expressions to understand others.<br>• Differentiate adjectives ending in -ED and -ING.<br>• Use Present Perfect with \"Just\", \"Already\", and \"Yet\".<br>• Compare Present Perfect with Simple Past.<br>• Express agreement and confusion politely.",
            welcome: "Hello, Emotion Explorers! It's Mr. D!<br><br>Welcome to \"The Color of Your Feelings\"! Today, we're diving deep into our hearts and minds. We'll learn how to talk about how we feel—are you excited or bored? Surprised or confused? We'll master the tricky difference between \"boring\" and \"bored\" and use the Present Perfect to talk about things that just happened or haven't happened yet. Let's learn to express ourselves!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe emotions and feelings. Use facial expressions to understand others. Differentiate adjectives ending in E D and I N G. Use Present Perfect with Just, Already, and Yet. Compare Present Perfect with Simple Past. And express agreement and confusion politely.",
                welcome: "TTS: Hello, Emotion Explorers! It's Mr. D! Welcome to The Color of Your Feelings! Today, we're diving deep into our hearts and minds. We'll learn how to talk about how we feel—are you excited or bored? Surprised or confused? We'll master the tricky difference between boring and bored and use the Present Perfect to talk about things that just happened or haven't happened yet. Let's learn to express ourselves!"
            }
        },

        // ======================================================
        // STEP 1: WHAT'S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of a school bell and students chatting. Celine looks very happy and is holding a letter.", 
            contextAudio: "audio/8-4-7/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Hi Celine! You look [excited](tooltip:excited)! What happened?" 
                },
                { 
                    speaker: "Celine", 
                    text: "I [have just received](tooltip:have just received) a letter from my cousin. She is coming to visit!" 
                },
                { 
                    speaker: "Albert", 
                    text: "That is [amazing](tooltip:amazing)! When is she arriving?" 
                },
                { 
                    speaker: "Celine", 
                    text: "She [has already arrived](tooltip:has already arrived) in the city, but she [hasn't called me yet](tooltip:hasn't called me yet)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I saw her last year. She was very [funny](tooltip:funny)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Yes! I am so happy. I [feel great](tooltip:feel-great)." 
                },
                { 
                    speaker: "Albert", 
                    text: "[I'm not sure I agree](tooltip:not-sure-i-agree) with the weather though. It looks [boring](tooltip:boring) and grey." 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "", // Will be provided in the next part
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Emotions & Feelings",
                    audio: "TTS: Happy. Sad. Angry. Tired. Excited. Interested. Confused. Surprised. Scared. Afraid. Worried. Bored. Calm.",
                    items: [
                        { term: "Happy", trans: "Feliz / Contente" },
                        { term: "Sad", trans: "Triste" },
                        { term: "Angry", trans: "Bravo(a) / Irritado(a)" },
                        { term: "Tired", trans: "Cansado(a)" },
                        { term: "Excited", trans: "Animado(a) / Empolgado(a)" },
                        { term: "Interested", trans: "Interessado(a)" },
                        { term: "Confused", trans: "Confuso(a)" },
                        { term: "Surprised", trans: "Surpreeso(a)" },
                        { term: "Scared / Afraid", trans: "Assustado(a) / Com medo" },
                        { term: "Worried", trans: "Preocupado(a)" },
                        { term: "Bored", trans: "Entediado(a)" },
                        { term: "Calm", trans: "Calmo(a)" }
                    ]
                },
                {
                    title: "Expressions & Verbs",
                    audio: "TTS: To Smile. To Laugh. To Cry. To Frown. A Smile. A Tear. To Feel. To Express. To Worry. To Agree. To Disagree. To Understand. To Love. To Hate.",
                    items: [
                        { term: "To Smile", trans: "Sorrir" },
                        { term: "To Laugh", trans: "Rir / Dar risada" },
                        { term: "To Cry", trans: "Chorar" },
                        { term: "To Frown", trans: "Franzir a testa" },
                        { term: "A Smile", trans: "Um sorriso" },
                        { term: "A Tear", trans: "Uma lágrima" },
                        { term: "To Feel", trans: "Sentir(-se)" },
                        { term: "To Express", trans: "Expressar" },
                        { term: "To Worry", trans: "Preocupar-se" },
                        { term: "To Agree / Disagree", trans: "Concordar / Discordar" },
                        { term: "To Understand", trans: "Entender" },
                        { term: "To Love / To Hate", trans: "Amar / Odiar" }
                    ]
                },
                {
                    title: "Polite Disagreement",
                    audio: "TTS: I don't get it. I'm not sure I agree. Sorry, what did you say? I see your point, but... Can you explain that again?",
                    items: [
                        { term: "I don't get it.", trans: "Eu não entendi. / Não saquei." },
                        { term: "I'm not sure I agree.", trans: "Não tenho certeza se concordo." },
                        { term: "Sorry, what did you say?", trans: "Desculpe, o que você disse?" },
                        { term: "I see your point, but...", trans: "Eu entendo seu ponto de vista, mas..." },
                        { term: "Can you explain that again?", trans: "Você pode explicar isso de novo?" }
                    ]
                },
                {
                    title: "Time Expressions",
                    audio: "TTS: Yesterday. Last week. In two thousand and ten. Just. Already. Yet. Ever. Never.",
                    items: [
                        { term: "Yesterday", trans: "Ontem" },
                        { term: "Last week", trans: "Semana passada" },
                        { term: "In [year]", trans: "Em [ano]" },
                        { term: "Just", trans: "Acabou de (recentemente)" },
                        { term: "Already", trans: "Já (antes do esperado)" },
                        { term: "Yet", trans: "Ainda / Já (perguntas/negativas)" },
                        { term: "Ever / Never", trans: "Alguma vez / Nunca" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Emotions & Feelings",
                    audio: "TTS: I am happy with my grades. The movie was sad. He was angry about the traffic. She is tired after running. We are excited for the trip. I am interested in science. The math problem made me confused. They were surprised by the party. The dog was scared of the thunder. Mom is worried about you. I am bored with this game. Stay calm and breathe.",
                    items: [
                        { term: "Happy", sent: "I am happy with my grades.", trans: "<span style='color:#0077b6'>Estou feliz com minhas notas.</span>" },
                        { term: "Sad", sent: "The movie was sad.", trans: "<span style='color:#0077b6'>O filme foi triste.</span>" },
                        { term: "Angry", sent: "He was angry about the traffic.", trans: "<span style='color:#0077b6'>Ele estava bravo com o trânsito.</span>" },
                        { term: "Tired", sent: "She is tired after running.", trans: "<span style='color:#0077b6'>Ela está cansada depois de correr.</span>" },
                        { term: "Excited", sent: "We are excited for the trip.", trans: "<span style='color:#0077b6'>Estamos animados para a viagem.</span>" },
                        { term: "Interested", sent: "I am interested in science.", trans: "<span style='color:#0077b6'>Estou interessado em ciência.</span>" },
                        { term: "Confused", sent: "The math problem made me confused.", trans: "<span style='color:#0077b6'>O problema de matemática me deixou confuso.</span>" },
                        { term: "Surprised", sent: "They were surprised by the party.", trans: "<span style='color:#0077b6'>Eles ficaram surpresos com a festa.</span>" },
                        { term: "Scared", sent: "The dog was scared of the thunder.", trans: "<span style='color:#0077b6'>O cachorro estava com medo do trovão.</span>" },
                        { term: "Worried", sent: "Mom is worried about you.", trans: "<span style='color:#0077b6'>Mamãe está preocupada com você.</span>" },
                        { term: "Bored", sent: "I am bored with this game.", trans: "<span style='color:#0077b6'>Estou entediado com este jogo.</span>" },
                        { term: "Calm", sent: "Stay calm and breathe.", trans: "<span style='color:#0077b6'>Fique calmo e respire.</span>" }
                    ]
                },
                {
                    title: "Expressions & Verbs",
                    audio: "TTS: She has a beautiful smile. The joke made me laugh. Don't cry, it's okay. He frowned when he was confused. How do you feel? Art helps us express emotions. I agree with you. Do you understand the lesson?",
                    items: [
                        { term: "Smile", sent: "She has a beautiful smile.", trans: "<span style='color:#0077b6'>Ela tem um sorriso lindo.</span>" },
                        { term: "Laugh", sent: "The joke made me laugh.", trans: "<span style='color:#0077b6'>A piada me fez rir.</span>" },
                        { term: "Cry", sent: "Don't cry, it's okay.", trans: "<span style='color:#0077b6'>Não chore, está tudo bem.</span>" },
                        { term: "Frown", sent: "He frowned when he was confused.", trans: "<span style='color:#0077b6'>Ele franziu a testa quando estava confuso.</span>" },
                        { term: "Feel", sent: "How do you feel?", trans: "<span style='color:#0077b6'>Como você se sente?</span>" },
                        { term: "Express", sent: "Art helps us express emotions.", trans: "<span style='color:#0077b6'>A arte nos ajuda a expressar emoções.</span>" },
                        { term: "Agree", sent: "I agree with you.", trans: "<span style='color:#0077b6'>Eu concordo com você.</span>" },
                        { term: "Understand", sent: "Do you understand the lesson?", trans: "<span style='color:#0077b6'>Você entende a lição?</span>" }
                    ]
                },
                {
                    title: "Polite Disagreement",
                    audio: "TTS: I don't get it. Can you help? I am not sure I agree. I think differently. Sorry, what did you say? I didn't hear. Can you explain that again?",
                    items: [
                        { term: "I don't get it", sent: "I don't get it. Can you help?", trans: "<span style='color:#0077b6'>Eu não entendi. Pode ajudar?</span>" },
                        { term: "Not sure I agree", sent: "I'm not sure I agree. I think differently.", trans: "<span style='color:#0077b6'>Não tenho certeza se concordo. Eu penso diferente.</span>" },
                        { term: "What did you say?", sent: "Sorry, what did you say? I didn't hear.", trans: "<span style='color:#0077b6'>Desculpe, o que você disse? Eu não ouvi.</span>" },
                        { term: "Explain again", sent: "Can you explain that again?", trans: "<span style='color:#0077b6'>Você pode explicar isso de novo?</span>" }
                    ]
                },
                {
                    title: "Time Expressions",
                    audio: "TTS: He has just arrived. I have already finished. Have you eaten yet? I saw him yesterday.",
                    items: [
                        { term: "Just", sent: "He has just arrived.", trans: "<span style='color:#0077b6'>Ele acabou de chegar.</span>" },
                        { term: "Already", sent: "I have already finished.", trans: "<span style='color:#0077b6'>Eu já terminei.</span>" },
                        { term: "Yet", sent: "Have you eaten yet?", trans: "<span style='color:#0077b6'>Você já comeu?</span>" },
                        { term: "Yesterday", sent: "I saw him yesterday.", trans: "<span style='color:#0077b6'>Eu o vi ontem.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                {
                    type: "mcq",
                    q: "Choose the opposite of 'Happy':",
                    options: [
                        { t: "Excited", c: false },
                        { t: "Sad", c: true },
                        { t: "Calm", c: false },
                        { t: "Proud", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you don't have anything to do, you feel...",
                    options: [
                        { t: "Interested", c: false },
                        { t: "Bored", c: true },
                        { t: "Scared", c: false },
                        { t: "Surprised", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When something is funny, you...",
                    options: [
                        { t: "Cry", c: false },
                        { t: "Frown", c: false },
                        { t: "Laugh", c: true },
                        { t: "Worry", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"The movie was _______ (bore).\"",
                    options: [
                        { t: "bored", c: false },
                        { t: "boring", c: true },
                        { t: "bores", c: false },
                        { t: "bore", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I was _______ (interest) in the book.\"",
                    options: [
                        { t: "interesting", c: false },
                        { t: "interested", c: true },
                        { t: "interests", c: false },
                        { t: "interest", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I have _______ finished my homework.\" (A short time ago).",
                    options: [
                        { t: "yet", c: false },
                        { t: "just", c: true },
                        { t: "yesterday", c: false },
                        { t: "ever", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"She hasn't arrived _______.\"",
                    options: [
                        { t: "already", c: false },
                        { t: "just", c: false },
                        { t: "yet", c: true },
                        { t: "ago", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I _______ (não entendi). Please repeat.\"",
                    options: [
                        { t: "don't get it", c: true },
                        { t: "agree", c: false },
                        { t: "am happy", c: false },
                        { t: "know", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I _______ (see) that movie yesterday.\"",
                    options: [
                        { t: "have seen", c: false },
                        { t: "saw", c: true },
                        { t: "see", c: false },
                        { t: "seen", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "\"I _______ (see) that movie already.\"",
                    options: [
                        { t: "saw", c: false },
                        { t: "have seen", c: true },
                        { t: "see", c: false },
                        { t: "seen", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When you are afraid of something, you feel...",
                    options: [
                        { t: "Angry", c: false },
                        { t: "Calm", c: false },
                        { t: "Scared", c: true },
                        { t: "Tired", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To show that you have the same opinion as someone:",
                    options: [
                        { t: "Disagree", c: false },
                        { t: "Agree", c: true },
                        { t: "Frown", c: false },
                        { t: "Cry", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The long walk was _______. I need to rest.",
                    options: [
                        { t: "tired", c: false },
                        { t: "tiring", c: true },
                        { t: "tire", c: false },
                        { t: "tires", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I was _______ when I won the prize!",
                    options: [
                        { t: "excited", c: true },
                        { t: "exciting", c: false },
                        { t: "excite", c: false },
                        { t: "excites", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which verb describes the action of the eyes when you are sad?",
                    options: [
                        { t: "Smile", c: false },
                        { t: "Laugh", c: false },
                        { t: "Cry", c: true },
                        { t: "Agree", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I feel _______ because I didn't sleep well.",
                    options: [
                        { t: "Tired", c: true },
                        { t: "Happy", c: false },
                        { t: "Interested", c: false },
                        { t: "Calm", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The situation was very _______. No one knew what to do.",
                    options: [
                        { t: "confused", c: false },
                        { t: "confusing", c: true },
                        { t: "confuse", c: false },
                        { t: "confuses", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Have you _______ been to the United States?",
                    options: [
                        { t: "never", c: false },
                        { t: "yet", c: false },
                        { t: "already", c: false },
                        { t: "ever", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "I feel _______ before a big test.",
                    options: [
                        { t: "Worried", c: true },
                        { t: "Bored", c: false },
                        { t: "Calm", c: false },
                        { t: "Tired", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Art helps us _______ our feelings.",
                    options: [
                        { t: "Express", c: true },
                        { t: "Smile", c: false },
                        { t: "Frown", c: false },
                        { t: "Laugh", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The teacher was _______ because the students were late.",
                    options: [
                        { t: "Happy", c: false },
                        { t: "Calm", c: false },
                        { t: "Angry", c: true },
                        { t: "Interested", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The news was _______! Everyone was talking about it.",
                    options: [
                        { t: "surprised", c: false },
                        { t: "surprising", c: true },
                        { t: "surprise", c: false },
                        { t: "surprises", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ understand why you are angry.",
                    options: [
                        { t: "get", c: false },
                        { t: "frown", c: false },
                        { t: "don't", c: true },
                        { t: "smile", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Yoga helps me feel _______ and relaxed.",
                    options: [
                        { t: "Calm", c: true },
                        { t: "Angry", c: false },
                        { t: "Scared", c: false },
                        { t: "Bored", c: false }
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
                    title: "Adjectives: -ED vs. -ING",
                    audio: "TTS: We use both endings to describe things, but they have a key difference. Adjectives with E D, like bored or excited, describe a person's feeling. Adjectives with I N G, like boring or exciting, describe the thing or situation that causes the feeling. For example, I am excited because the news is exciting.",
                    explanation: "We use both endings to describe things, but they have a key difference related to feelings and causes.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos ambas as terminações para descrever coisas, mas elas têm uma diferença fundamental relacionada a sentimentos e causas.)</span>",
                    samples: [
                        { en: "<b>-ED (Feeling):</b> I am bored. (How I feel).", pt: "<span style='color:#0077b6'>Estou entediado. (Como eu me sinto).</span>" },
                        { en: "<b>-ING (Cause):</b> The movie is boring. (The cause).", pt: "<span style='color:#0077b6'>O filme é entediante. (A causa).</span>" },
                        { en: "I am excited because the news is exciting.", pt: "<span style='color:#0077b6'>Estou empolgado porque a notícia é empolgante.</span>" }
                    ]
                },
                {
                    title: "Common Adjective Pairs",
                    audio: "TTS: Here is a list of common adjectives. Remember, ED is for the feeling, and ING is for the cause. Amaze, amazed, amazing. Annoy, annoyed, annoying. Bore, bored, boring. Confuse, confused, confusing. Disappoint, disappointed, disappointing. Excite, excited, exciting. Exhaust, exhausted, exhausting. Fascinate, fascinated, fascinating. Frighten, frightened, frightening. Interest, interested, interesting. Relax, relaxed, relaxing. Satisfy, satisfied, satisfying. Shock, shocked, shocking. Surprise, surprised, surprising. Tire, tired, tiring. Terrify, terrified, terrifying. Embarrass, embarrassed, embarrassing. Worry, worried, worrying. Depress, depressed, depressing. Challenge, challenged, challenging.",
                    explanation: "Compare how the same base word changes meaning with different endings. <br><br> <span style='color:#0077b6; font-style:italic;'>(Compare como a mesma palavra base muda de significado com terminações diferentes.)</span>",
                    samples: [
                        { en: "1. <b>Amaze</b> - <span style='color:#FF8C42'><b>Amazed</b></span> - <span style='color:#28a745'><b>Amazing</b></span> <br><span style='color:#0077b6'>(Maravilhar - Maravilhado - Maravilhoso)</span>", pt: "" },
                        { en: "2. <b>Annoy</b> - <span style='color:#FF8C42'><b>Annoyed</b></span> - <span style='color:#28a745'><b>Annoying</b></span> <br><span style='color:#0077b6'>(Irritar - Irritado - Irritante)</span>", pt: "" },
                        { en: "3. <b>Bore</b> - <span style='color:#FF8C42'><b>Bored</b></span> - <span style='color:#28a745'><b>Boring</b></span> <br><span style='color:#0077b6'>(Entediar - Entediado - Entediante)</span>", pt: "" },
                        { en: "4. <b>Confuse</b> - <span style='color:#FF8C42'><b>Confused</b></span> - <span style='color:#28a745'><b>Confusing</b></span> <br><span style='color:#0077b6'>(Confundir - Confuso - Confuso)</span>", pt: "" },
                        { en: "5. <b>Disappoint</b> - <span style='color:#FF8C42'><b>Disappointed</b></span> - <span style='color:#28a745'><b>Disappointing</b></span> <br><span style='color:#0077b6'>(Decepcionar - Decepcionado - Decepcionante)</span>", pt: "" },
                        { en: "6. <b>Excite</b> - <span style='color:#FF8C42'><b>Excited</b></span> - <span style='color:#28a745'><b>Exciting</b></span> <br><span style='color:#0077b6'>(Emocionar - Animado - Emocionante)</span>", pt: "" },
                        { en: "7. <b>Exhaust</b> - <span style='color:#FF8C42'><b>Exhausted</b></span> - <span style='color:#28a745'><b>Exhausting</b></span> <br><span style='color:#0077b6'>(Exaurir - Exausto - Exaustivo)</span>", pt: "" },
                        { en: "8. <b>Fascinate</b> - <span style='color:#FF8C42'><b>Fascinated</b></span> - <span style='color:#28a745'><b>Fascinating</b></span> <br><span style='color:#0077b6'>(Fascinar - Fascinado - Fascinante)</span>", pt: "" },
                        { en: "9. <b>Frighten</b> - <span style='color:#FF8C42'><b>Frightened</b></span> - <span style='color:#28a745'><b>Frightening</b></span> <br><span style='color:#0077b6'>(Assustar - Assustado - Assustador)</span>", pt: "" },
                        { en: "10. <b>Interest</b> - <span style='color:#FF8C42'><b>Interested</b></span> - <span style='color:#28a745'><b>Interesting</b></span> <br><span style='color:#0077b6'>(Interessar - Interessado - Interessante)</span>", pt: "" },
                        { en: "11. <b>Relax</b> - <span style='color:#FF8C42'><b>Relaxed</b></span> - <span style='color:#28a745'><b>Relaxing</b></span> <br><span style='color:#0077b6'>(Relaxar - Relaxado - Relaxante)</span>", pt: "" },
                        { en: "12. <b>Satisfy</b> - <span style='color:#FF8C42'><b>Satisfied</b></span> - <span style='color:#28a745'><b>Satisfying</b></span> <br><span style='color:#0077b6'>(Satisfazer - Satisfeito - Satisfatório)</span>", pt: "" },
                        { en: "13. <b>Shock</b> - <span style='color:#FF8C42'><b>Shocked</b></span> - <span style='color:#28a745'><b>Shocking</b></span> <br><span style='color:#0077b6'>(Chocar - Chocado - Chocante)</span>", pt: "" },
                        { en: "14. <b>Surprise</b> - <span style='color:#FF8C42'><b>Surprised</b></span> - <span style='color:#28a745'><b>Surprising</b></span> <br><span style='color:#0077b6'>(Surpreender - Surpreendido - Surpreendente)</span>", pt: "" },
                        { en: "15. <b>Tire</b> - <span style='color:#FF8C42'><b>Tired</b></span> - <span style='color:#28a745'><b>Tiring</b></span> <br><span style='color:#0077b6'>(Cansar - Cansado - Cansativo)</span>", pt: "" },
                        { en: "16. <b>Terrify</b> - <span style='color:#FF8C42'><b>Terrified</b></span> - <span style='color:#28a745'><b>Terrifying</b></span> <br><span style='color:#0077b6'>(Aterrorizar - Aterrorizado - Aterrorizante)</span>", pt: "" },
                        { en: "17. <b>Embarrass</b> - <span style='color:#FF8C42'><b>Embarrassed</b></span> - <span style='color:#28a745'><b>Embarrassing</b></span> <br><span style='color:#0077b6'>(Envergonhar - Envergonhado - Embaraçoso)</span>", pt: "" },
                        { en: "18. <b>Worry</b> - <span style='color:#FF8C42'><b>Worried</b></span> - <span style='color:#28a745'><b>Worrying</b></span> <br><span style='color:#0077b6'>(Preocupar - Preocupado - Preocupante)</span>", pt: "" },
                        { en: "19. <b>Depress</b> - <span style='color:#FF8C42'><b>Depressed</b></span> - <span style='color:#28a745'><b>Depressing</b></span> <br><span style='color:#0077b6'>(Deprimir - Deprimido - Deprimente)</span>", pt: "" },
                        { en: "20. <b>Challenge</b> - <span style='color:#FF8C42'><b>Challenged</b></span> - <span style='color:#28a745'><b>Challenging</b></span> <br><span style='color:#0077b6'>(Desafiar - Desafiado - Desafiador)</span>", pt: "" }
                    ]
                },
                {
                    title: "Present Perfect + Adverbs",
                    audio: "TTS: We use these adverbs to give more detail about when an action happened. Just is for a very recent action. I have just arrived. Already is for an action that happened sooner than expected. We have already finished. Yet is for an action we expect to happen, used in negatives and questions. Have you eaten yet?",
                    explanation: "We use these adverbs to give more detail about when an action happened relative to now.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos estes advérbios com o Present Perfect para dar mais detalhes sobre 'quando' uma ação aconteceu em relação ao agora.)</span>",
                    samples: [
                    { en: "<b>JUST:</b> Very recent action <span style='color:#0077b6'>(Ação muito recente - acabou de)</span>. <br>I have just arrived.", pt: "<span style='color:#0077b6'>Eu acabei de chegar.</span>" },
                        { en: "<b>ALREADY:</b> Sooner than expected <span style='color:#0077b6'>(Mais cedo do que era esperado - já)</span>. <br>We have already finished.", pt: "<span style='color:#0077b6'>Nós já terminamos.</span>" },
                        { en: "<b>YET:</b> Until now <span style='color:#0077b6'>(até o momento atual - 'negativas' ainda / 'interrogativas' já)</span>. Used at the end.<span style='color:#0077b6'>(Usado no final)</span> <br>Have you eaten yet? / They haven't called yet.", pt: "<span style='color:#0077b6'>Você já comeu? / Eles ainda não ligaram.</span>" }
                    ]
                },
                {
                    title: "Simple Past vs. Present Perfect",
                    audio: "TTS: The most important difference is about time. Simple Past is for actions in a finished time period, like yesterday or last week. For example, I saw the movie yesterday. Present Perfect is for actions in an unfinished time period or when the result is important now. For example, I have seen the movie.",
                    explanation: "The most important difference is about <b>TIME</b>.<br><br><span style='color:#0077b6; font-style:italic;'>(A diferença mais importante é sobre o TEMPO.)</span>",
                    samples: [
                        { en: "<b>Simple Past (Finished):</b> I saw the movie yesterday.", pt: "<span style='color:#0077b6'>Eu vi o filme ontem. (Tempo acabado).</span>" },
                        { en: "<b>Present Perfect (Unfinished/Result):</b> I have seen the movie.", pt: "<span style='color:#0077b6'>Eu vi o filme. (Eu conheço a história agora).</span>" },
                        { en: "Time Words: today, this week, just, already, yet.", pt: "<span style='color:#0077b6'>Palavras de tempo: hoje, esta semana, acabou de, já, ainda.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Adjectives (-ED vs -ING)",
                    audio: "audio/8-4-7/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "This movie is so boring. Nothing happens!", 
                            pt: "<span style='color:#0077b6'>Este filme é tão chato. Nada acontece! (-ING descreve o filme)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Really? I am fascinated. I think the story is very interesting.", 
                            pt: "<span style='color:#0077b6'>Sério? Eu estou fascinada. Acho a história muito interessante.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Well, I am bored and tired.", 
                            pt: "<span style='color:#0077b6'>Bem, eu estou entediado e cansado. (-ED descreve como ele se sente)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Present Perfect Adverbs",
                    audio: "audio/8-4-7/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Have you done your homework yet?", 
                            pt: "<span style='color:#0077b6'>Você já fez sua lição de casa? (YET no final da pergunta)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes! I have just finished it. I have already sent it to the teacher.", 
                            pt: "<span style='color:#0077b6'>Sim! Eu acabei de terminar. Eu já enviei para a professora. (JUST e ALREADY antes do verbo)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Simple Past vs. Present Perfect",
                    audio: "audio/8-4-7/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Did you go to the party yesterday?", 
                            pt: "<span style='color:#0077b6'>Você foi à festa ontem? (Simple Past para tempo acabado)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I didn't. I have been very busy this week. I have just arrived home from school.", 
                            pt: "<span style='color:#0077b6'>Não, não fui. Eu estive muito ocupada esta semana. Acabei de chegar da escola. (Present Perfect para tempo não acabado)</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar Practice Drills
            grammarDrills: [
                {
                    type: "mcq",
                    q: "I was _______ because the ghost story was _______.",
                    options: [
                        {t: "frightening / frightened", c: false},
                        {t: "frightened / frightening", c: true},
                        {t: "frightened / frightened", c: false},
                        {t: "frightening / frightening", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The long walk was _______. Now we are _______.",
                    options: [
                        {t: "tiring / tired", c: true},
                        {t: "tired / tiring", c: false},
                        {t: "tired / tired", c: false},
                        {t: "tiring / tiring", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Don't come in! I haven't cleaned the room _______.",
                    options: [
                        {t: "just", c: false},
                        {t: "already", c: false},
                        {t: "yet", c: true},
                        {t: "ever", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She is very fast. She has _______ finished the test.",
                    options: [
                        {t: "yet", c: false},
                        {t: "already", c: true},
                        {t: "since", c: false},
                        {t: "ago", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Look at his wet hair! He has _______ taken a shower.",
                    options: [
                        {t: "just", c: true},
                        {t: "yet", c: false},
                        {t: "ever", c: false},
                        {t: "never", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ you see the moon last night?",
                    options: [
                        {t: "Have you seen", c: false},
                        {t: "Did you see", c: true},
                        {t: "Do you see", c: false},
                        {t: "Has you seen", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ my keys. I can't open the door now.",
                    options: [
                        {t: "lost", c: false},
                        {t: "did lose", c: false},
                        {t: "have lost", c: true},
                        {t: "has lost", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Pronouns: \"_______ (The students) were bored.\"",
                    options: [
                        {t: "They", c: true},
                        {t: "He", c: false},
                        {t: "She", c: false},
                        {t: "It", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "This lesson is _______. I am _______.",
                    options: [
                        {t: "confused / confusing", c: false},
                        {t: "confusing / confused", c: true},
                        {t: "confused / confused", c: false},
                        {t: "confusing / confusing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which sentence uses the correct tense for a finished action?",
                    options: [
                        {t: "I have played soccer yesterday.", c: false},
                        {t: "I played soccer yesterday.", c: true},
                        {t: "I play soccer yesterday.", c: false},
                        {t: "I has played soccer yesterday.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Are you _______? This game is really _______.",
                    options: [
                        {t: "exciting / excited", c: false},
                        {t: "excited / exciting", c: true},
                        {t: "exciting / exciting", c: false},
                        {t: "excited / excited", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The roller coaster was _______! I was so _______.",
                    options: [
                        {t: "terrifying / terrified", c: true},
                        {t: "terrified / terrifying", c: false},
                        {t: "terrifying / terrifying", c: false},
                        {t: "terrified / terrified", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Have they announced the results _______?",
                    options: [
                        {t: "already", c: false},
                        {t: "just", c: false},
                        {t: "yet", c: true},
                        {t: "ever", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I _______ (just/receive) an amazing gift!",
                    options: [
                        {t: "have just received", c: true},
                        {t: "has just received", c: false},
                        {t: "just received", c: false},
                        {t: "am just receiving", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We _______ (visit) our grandparents last weekend.",
                    options: [
                        {t: "have visited", c: false},
                        {t: "visit", c: false},
                        {t: "visited", c: true},
                        {t: "has visited", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I'm not _______ (interest) in this topic. It's _______ (bore).",
                    options: [
                        {t: "interesting / bored", c: false},
                        {t: "interested / boring", c: true},
                        {t: "interested / bored", c: false},
                        {t: "interesting / boring", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "He _______ (already/watch) that movie three times.",
                    options: [
                        {t: "watched already", c: false},
                        {t: "has already watched", c: true},
                        {t: "have already watched", c: false},
                        {t: "already has watched", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Why are you _______? Was the news _______?",
                    options: [
                        {t: "surprising / surprised", c: false},
                        {t: "surprised / surprising", c: true},
                        {t: "surprised / surprised", c: false},
                        {t: "surprising / surprising", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Did you _______ (finish) your lunch 5 minutes ago?",
                    options: [
                        {t: "finished", c: false},
                        {t: "have finished", c: false},
                        {t: "finish", c: true},
                        {t: "has finished", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I haven't seen the new teacher _______.",
                    options: [
                        {t: "already", c: false},
                        {t: "just", c: false},
                        {t: "since", c: false},
                        {t: "yet", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "The book I'm reading is _______. I feel _______.",
                    options: [
                        {t: "fascinated / fascinating", c: false},
                        {t: "fascinating / fascinated", c: true},
                        {t: "fascinated / fascinated", c: false},
                        {t: "fascinating / fascinating", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She _______ (not/call) me yet.",
                    options: [
                        {t: "didn't call", c: false},
                        {t: "hasn't called", c: true},
                        {t: "haven't called", c: false},
                        {t: "don't call", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We _______ (see) a very funny show last night.",
                    options: [
                        {t: "have seen", c: false},
                        {t: "saw", c: true},
                        {t: "see", c: false},
                        {t: "seed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I have _______ (just/hear) the bad news.",
                    options: [
                        {t: "heard", c: true},
                        {t: "hear", c: false},
                        {t: "heared", c: false},
                        {t: "hearing", c: false}
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
                    text: "I am so excited!<br><small style='color:#0077b6'>(Eu estou tão animado!)</small>", 
                    audio: "TTS: I am so excited!", 
                    arrow: "↘" 
                },
                { 
                    text: "The movie was boring.<br><small style='color:#0077b6'>(O filme foi chato.)</small>", 
                    audio: "TTS: The movie was boring.", 
                    arrow: "↘" 
                },
                { 
                    text: "I have just arrived.<br><small style='color:#0077b6'>(Eu acabei de chegar.)</small>", 
                    audio: "TTS: I have just arrived.", 
                    arrow: "↘" 
                },
                { 
                    text: "Have you seen it yet?<br><small style='color:#0077b6'>(Você já viu?)</small>", 
                    audio: "TTS: Have you seen it yet?", 
                    arrow: "↗" 
                },
                { 
                    text: "I'm not sure I agree.<br><small style='color:#0077b6'>(Não tenho certeza se concordo.)</small>", 
                    audio: "TTS: I'm not sure I agree.", 
                    arrow: "↘" 
                },
                { 
                    text: "She felt surprised.<br><small style='color:#0077b6'>(Ela se sentiu surpresa.)</small>", 
                    audio: "TTS: She felt surprised.", 
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
                    instruction: "Listen to Albert talking about a book. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre um livro. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I have just finished a book. It was very interesting. I feel happy because I learned a lot.",
                    text: "I have [just] finished a book. It was very [interesting]. I feel [happy] because I learned a lot."
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a movie. Choose the correct option.<br><small style='color:#0077b6'>(Ouça a conversa sobre um filme. Escolha a opção correta.)</small>",
                    audio: "audio/8-4-7/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Have you seen the new movie [yet | just]?", a: "yet" },
                        { q: "Albert: No, I [haven't | have]. Was it good?", a: "haven't" },
                        { q: "Celine: No, it was [boring | bored]. I was [bored | boring] the whole time.", a: "boring" } // Celine says it was boring (cause) and she was bored (feeling)
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the statement and choose the correct emotion.<br><small style='color:#0077b6'>(Ouça a afirmação e escolha a emoção correta.)</small>",
                    audio: "TTS: I don't understand this math problem. It is very difficult and nothing makes sense.",
                    options: [
                        { t: "He is excited.", c: false },
                        { t: "He is confused.", c: true },
                        { t: "He is happy.", c: false },
                        { t: "He is calm.", c: false }
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
                    title: "Narration: The Surprise Party",
                    audio: "TTS: The Surprise Party. Last Saturday, my friends organized a party for me. I was completely surprised! I thought we were just studying. When I opened the door, everyone shouted \"Happy Birthday!\". I felt so happy and excited. I have never had a surprise party before. It was the most amazing night of my life. I haven't opened all the gifts yet, but I have already thanked everyone. || audio/8-4-7/p6_text1.mp3",
                    body: "Last Saturday, my friends organized a party for me. I was completely surprised! I thought we were just studying. When I opened the door, everyone shouted \"Happy Birthday!\". I felt so happy and excited. I have never had a surprise party before. It was the most amazing night of my life. I haven't opened all the gifts yet, but I have already thanked everyone.",
                    questions: [
                        { 
                            q: "How did the writer feel?", 
                            options: [ 
                                {t: "Bored and tired", c: false}, 
                                {t: "Surprised and happy", c: true}, 
                                {t: "Angry and confused", c: false},
                                {t: "Sad and lonely", c: false}
                            ] 
                        },
                        { 
                            q: "When was the party?", 
                            options: [ 
                                {t: "Next week", c: false}, 
                                {t: "Last Saturday", c: true}, 
                                {t: "Today", c: false},
                                {t: "In 2010", c: false}
                            ] 
                        },
                        { 
                            q: "Has the writer opened all the gifts?", 
                            options: [ 
                                {t: "Yes, he has.", c: false}, 
                                {t: "No, not yet.", c: true}, 
                                {t: "He opened them yesterday.", c: false},
                                {t: "He doesn't like gifts.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: The Debate",
                    audio: "audio/8-4-7/p6_text2.mp3",
                    body: "<b>Albert:</b> I think video games are good for learning. They are very interesting.<br><b>Celine:</b> I see your point, but I'm not sure I agree. Sometimes they are just a distraction.<br><b>Albert:</b> Can you explain that again?<br><b>Celine:</b> I mean, some games are educational, but others are just tiring. You play for hours and feel tired.<br><b>Albert:</b> I agree. But I feel excited when I win!",
                    questions: [
                        { 
                            q: "What does Albert think about video games?", 
                            options: [ 
                                {t: "They are boring.", c: false}, 
                                {t: "They are interesting.", c: true}, 
                                {t: "They are tiring.", c: false},
                                {t: "They are sad.", c: false}
                            ] 
                        },
                        { 
                            q: "Does Celine agree completely?", 
                            options: [ 
                                {t: "Yes, she does.", c: false}, 
                                {t: "No, she isn't sure she agrees.", c: true}, 
                                {t: "She loves games.", c: false},
                                {t: "She doesn't understand.", c: false}
                            ] 
                        },
                        { 
                            q: "How does Albert feel when he wins?", 
                            options: [ 
                                {t: "Tired", c: false}, 
                                {t: "Confused", c: false}, 
                                {t: "Excited", c: true},
                                {t: "Worried", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: My Feelings Journal",
                    audio: "TTS: My Feelings Journal. This week has been a roller coaster of emotions. On Monday, I was worried about my math test. I studied hard. On Tuesday, I took the test. It was confusing! I felt frustrated. But on Wednesday, I got my results. I passed! I was so relieved and happy. I have already told my parents. They are proud of me. Now, it is Friday and I am tired, but calm. || audio/8-4-7/p6_text3.mp3",
                    body: "This week has been a roller coaster of emotions. On Monday, I was worried about my math test. I studied hard. On Tuesday, I took the test. It was confusing! I felt frustrated. But on Wednesday, I got my results. I passed! I was so relieved and happy. I have already told my parents. They are proud of me. Now, it is Friday and I am tired, but calm.",
                    questions: [
                        { 
                            q: "How was the math test?", 
                            options: [ 
                                {t: "Easy", c: false}, 
                                {t: "Confusing", c: true}, 
                                {t: "Exciting", c: false},
                                {t: "Boring", c: false}
                            ] 
                        },
                        { 
                            q: "How did the writer feel on Wednesday?", 
                            options: [ 
                                {t: "Worried", c: false}, 
                                {t: "Frustrated", c: false}, 
                                {t: "Relieved and happy", c: true},
                                {t: "Sad", c: false}
                            ] 
                        },
                        { 
                            q: "Who is proud of the writer?", 
                            options: [ 
                                {t: "The teacher", c: false}, 
                                {t: "His parents", c: true}, 
                                {t: "His friends", c: false},
                                {t: "Nobody", c: false}
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
                // Drill 1: Matching the Meanings (-ED vs -ING)
                {
                    type: "matching",
                    instruction: "Match the adjective to its definition.<br><small style='color:#0077b6'>(Combine o adjetivo com sua definição.)</small>",
                    pairs: [
                        { left: "Bored", right: "How you feel", val: "1" },
                        { left: "Boring", right: "What causes the feeling", val: "2" },
                        { left: "Excited", right: "Feeling enthusiasm", val: "3" },
                        { left: "Exciting", right: "Causing enthusiasm", val: "4" }
                    ]
                },
                // Drill 2: Unscramble the Sentences
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase.)</small>",
                    sentence: "just / arrived / He / has / .",
                    correct: "He has just arrived ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "homework / done / Have / your / you / yet / ?",
                    correct: "Have you done your homework yet ?"
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "movie / This / interesting / is / .",
                    correct: "This movie is interesting ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "not / agree / I / sure / am / I / .",
                    correct: "I am not sure I agree ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Happy", c: false },
                        { t: "Sad", c: false },
                        { t: "Tired", c: false },
                        { t: "Table", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Boring", c: false },
                        { t: "Interesting", c: false },
                        { t: "Exciting", c: false },
                        { t: "Bored", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Just", c: false },
                        { t: "Already", c: false },
                        { t: "Yet", c: false },
                        { t: "Yesterday", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Smile", c: false },
                        { t: "Frown", c: false },
                        { t: "Cry", c: false },
                        { t: "Book", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Drag and Drop)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "I haven't finished [yet | already | just | saw].", a: "yet" },
                        { q: "She has [already | yet | just | saw] seen this movie.", a: "already" },
                        { q: "The bus has [just | yet | already | saw] left.", a: "just" },
                        { q: "I [saw | yet | already | just] him yesterday.", a: "saw" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Topic: A Recent Experience. Now it's your turn! Write about a recent experience and how you felt.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Tópico: Uma Experiência Recente. Agora é sua vez! Escreva sobre uma experiência recente e como você se sentiu.)</span></small>",
            example: "\"Yesterday, I watched a horror movie. It was very frightening. I was scared, but also excited. I have never screamed so much in my life!\"<br><br><small><span style='color:#0077b6'>(\"Ontem, eu assisti a um filme de terror. Foi muito assustador. Eu estava com medo, mas também empolgado. Eu nunca gritei tanto na minha vida!\")</span></small>",
            prompts: [
                "What happened? (I watched a movie / I took a test...). <br><small><span style='color:#0077b6'>(O que aconteceu? Eu assisti a um filme / fiz um teste...)</span></small>",
                "When did it happen? (Yesterday / Last week...). <br><small><span style='color:#0077b6'>(Quando aconteceu? Ontem / Semana passada...)</span></small>",
                "How did you feel? (I was excited / bored / worried...). <br><small><span style='color:#0077b6'>(Como você se sentiu? Eu estava empolgado / entediado / preocupado...)</span></small>",
                "Use one -ING adjective to describe the situation (It was exciting / boring...). <br><small><span style='color:#0077b6'>(Use um adjetivo terminado em -ING para descrever a situação. Foi empolgante / entediante...)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Emotions & Expressions)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- TOPIC 1: EMOTIONS & FEELINGS ---
                { 
                    term: "Happy", 
                    definition: "Feeling or showing pleasure or contentment.", 
                    defTrans: "Feliz / Contente",
                    example: "I feel happy today.", 
                    audioFront: "TTS: Happy",
                    audioBack: "TTS: I feel happy today." 
                },
                { 
                    term: "Sad", 
                    definition: "Feeling or showing sorrow; unhappy.", 
                    defTrans: "Triste",
                    example: "The news made me sad.", 
                    audioFront: "TTS: Sad",
                    audioBack: "TTS: The news made me sad." 
                },
                { 
                    term: "Angry", 
                    definition: "Having a strong feeling of annoyance or hostility.", 
                    defTrans: "Bravo(a) / Irritado(a)",
                    example: "He is angry about the delay.", 
                    audioFront: "TTS: Angry",
                    audioBack: "TTS: He is angry about the delay." 
                },
                { 
                    term: "Tired", 
                    definition: "In need of sleep or rest; weary.", 
                    defTrans: "Cansado(a)",
                    example: "I am tired after school.", 
                    audioFront: "TTS: Tired",
                    audioBack: "TTS: I am tired after school." 
                },
                { 
                    term: "Excited", 
                    definition: "Very enthusiastic and eager.", 
                    defTrans: "Animado(a) / Empolgado(a)",
                    example: "She is excited about the party.", 
                    audioFront: "TTS: Excited",
                    audioBack: "TTS: She is excited about the party." 
                },
                { 
                    term: "Interested", 
                    definition: "Showing curiosity or concern about something.", 
                    defTrans: "Interessado(a)",
                    example: "I am interested in art.", 
                    audioFront: "TTS: Interested",
                    audioBack: "TTS: I am interested in art." 
                },
                { 
                    term: "Confused", 
                    definition: "Unable to think clearly; bewildered.", 
                    defTrans: "Confuso(a)",
                    example: "The instructions made me confused.", 
                    audioFront: "TTS: Confused",
                    audioBack: "TTS: The instructions made me confused." 
                },
                { 
                    term: "Surprised", 
                    definition: "Feeling or showing surprise.", 
                    defTrans: "Surpreso(a)",
                    example: "We were surprised by the gift.", 
                    audioFront: "TTS: Surprised",
                    audioBack: "TTS: We were surprised by the gift." 
                },
                { 
                    term: "Scared / Afraid", 
                    definition: "Fearful; frightened.", 
                    defTrans: "Assustado(a) / Com medo",
                    example: "Are you afraid of ghosts?", 
                    audioFront: "TTS: Scared. Afraid.",
                    audioBack: "TTS: Are you afraid of ghosts?" 
                },
                { 
                    term: "Worried", 
                    definition: "Anxious or troubled about potential problems.", 
                    defTrans: "Preocupado(a)",
                    example: "She is worried about the test.", 
                    audioFront: "TTS: Worried",
                    audioBack: "TTS: She is worried about the test." 
                },
                { 
                    term: "Bored", 
                    definition: "Feeling weary because one lacks interest in an activity.", 
                    defTrans: "Entediado(a)",
                    example: "I am bored with this movie.", 
                    audioFront: "TTS: Bored",
                    audioBack: "TTS: I am bored with this movie." 
                },
                { 
                    term: "Calm", 
                    definition: "Not showing or feeling nervousness or anger.", 
                    defTrans: "Calmo(a)",
                    example: "Stay calm and relax.", 
                    audioFront: "TTS: Calm",
                    audioBack: "TTS: Stay calm and relax." 
                },

                // --- TOPIC 2: FACIAL EXPRESSIONS & VERBS ---
                { 
                    term: "To Smile", 
                    definition: "To form one's features into a pleased expression.", 
                    defTrans: "Sorrir",
                    example: "Please smile for the photo.", 
                    audioFront: "TTS: To Smile",
                    audioBack: "TTS: Please smile for the photo." 
                },
                { 
                    term: "To Laugh", 
                    definition: "To make spontaneous sounds of lively amusement.", 
                    defTrans: "Rir / Dar risada",
                    example: "The joke made us laugh.", 
                    audioFront: "TTS: To Laugh",
                    audioBack: "TTS: The joke made us laugh." 
                },
                { 
                    term: "To Cry", 
                    definition: "To shed tears as an expression of distress or pain.", 
                    defTrans: "Chorar",
                    example: "Don't cry, be happy.", 
                    audioFront: "TTS: To Cry",
                    audioBack: "TTS: Don't cry, be happy." 
                },
                { 
                    term: "To Frown", 
                    definition: "To furrow one's brow in disapproval or concentration.", 
                    defTrans: "Franzir a testa",
                    example: "He frowns when he is angry.", 
                    audioFront: "TTS: To Frown",
                    audioBack: "TTS: He frowns when he is angry." 
                },
                { 
                    term: "To Feel", 
                    definition: "To experience an emotion or sensation.", 
                    defTrans: "Sentir(-se)",
                    example: "I feel great today.", 
                    audioFront: "TTS: To Feel",
                    audioBack: "TTS: I feel great today." 
                },
                { 
                    term: "To Express", 
                    definition: "To convey a thought or feeling in words or gestures.", 
                    defTrans: "Expressar",
                    example: "Express your feelings.", 
                    audioFront: "TTS: To Express",
                    audioBack: "TTS: Express your feelings." 
                },
                { 
                    term: "To Agree", 
                    definition: "To have the same opinion about something.", 
                    defTrans: "Concordar",
                    example: "I agree with you.", 
                    audioFront: "TTS: To Agree",
                    audioBack: "TTS: I agree with you." 
                },
                { 
                    term: "To Disagree", 
                    definition: "To have or express a different opinion.", 
                    defTrans: "Discordar",
                    example: "It is okay to disagree.", 
                    audioFront: "TTS: To Disagree",
                    audioBack: "TTS: It is okay to disagree." 
                },
                { 
                    term: "To Understand", 
                    definition: "To perceive the intended meaning of something.", 
                    defTrans: "Entender",
                    example: "Do you understand the lesson?", 
                    audioFront: "TTS: To Understand",
                    audioBack: "TTS: Do you understand the lesson?" 
                },

                // --- TOPIC 3: COMMON EXPRESSIONS ---
                { 
                    term: "I don't get it", 
                    definition: "Informal way to say 'I don't understand'.", 
                    defTrans: "Eu não entendi / Não saquei",
                    example: "I don't get it, can you repeat?", 
                    audioFront: "TTS: I don't get it",
                    audioBack: "TTS: I don't get it, can you repeat?" 
                },
                { 
                    term: "I'm not sure I agree", 
                    definition: "Polite way to express disagreement.", 
                    defTrans: "Não tenho certeza se concordo",
                    example: "I'm not sure I agree with that idea.", 
                    audioFront: "TTS: I'm not sure I agree",
                    audioBack: "TTS: I'm not sure I agree with that idea." 
                },
                { 
                    term: "I see your point", 
                    definition: "Phrase used to acknowledge someone's argument.", 
                    defTrans: "Eu entendo seu ponto de vista",
                    example: "I see your point, but I think differently.", 
                    audioFront: "TTS: I see your point",
                    audioBack: "TTS: I see your point, but I think differently." 
                },
                // --- TOPIC 4: GRAMMAR POINTS ---
                { 
                    term: "Adjectives -ED", 
                    definition: "Adjectives describing how a person feels (e.g., bored).", 
                    defTrans: "Adjetivos com -ED (Sentimento)",
                    example: "I am bored.", 
                    audioFront: "TTS: Adjectives with E D",
                    audioBack: "TTS: I am bored." 
                },
                { 
                    term: "Adjectives -ING", 
                    definition: "Adjectives describing the cause of a feeling (e.g., boring).", 
                    defTrans: "Adjetivos com -ING (Causa)",
                    example: "The movie is boring.", 
                    audioFront: "TTS: Adjectives with I N G",
                    audioBack: "TTS: The movie is boring." 
                },
                { 
                    term: "Just", 
                    definition: "Used for actions that happened a very short time ago.", 
                    defTrans: "Acabou de (ação muito recente)",
                    example: "I have just finished.", 
                    audioFront: "TTS: Just",
                    audioBack: "TTS: I have just finished." 
                },
                { 
                    term: "Already", 
                    definition: "Used for actions that happened sooner than expected.", 
                    defTrans: "Já (antes do esperado)",
                    example: "She has already arrived.", 
                    audioFront: "TTS: Already",
                    audioBack: "TTS: She has already arrived." 
                },
                { 
                    term: "Yet", 
                    definition: "Used in negative sentences and questions to mean 'until now'.", 
                    defTrans: "Ainda / Já (final da frase)",
                    example: "Have you eaten yet?", 
                    audioFront: "TTS: Yet",
                    audioBack: "TTS: Have you eaten yet?" 
                },
                { 
                    term: "Past vs. Perfect", 
                    definition: "Simple Past is for finished time; Present Perfect for unfinished time.", 
                    defTrans: "Tempo definido vs. Tempo indefinido",
                    example: "I saw it yesterday. / I have seen it.", 
                    audioFront: "TTS: Simple Past versus Present Perfect",
                    audioBack: "TTS: I saw it yesterday. I have seen it." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // --- CONTEXT ---
        { topic: "Context", term: "have just received", definition: "To get something recently. Present Perfect with 'just'.", translation: "ACABEI DE receber (Presente Perfeito + just)" },
        { topic: "Context", term: "amazing", definition: "Extremely good or impressive.", translation: "incrível" },
        { topic: "Context", term: "has already arrived", definition: "To have come to a place before now. Present Perfect with 'already'.", translation: "JÁ chegou (Presente Perfeito + already)" },
        { topic: "Context", term: "hasn't called me yet", definition: "To not have made a phone call to someone up until now. Present Perfect with 'yet'.", translation: "AINDA NÃO me ligou (Presente Perfeito negativo + yet)" },
        { topic: "Context", term: "funny", definition: "Causing laughter or amusement; humorous.", translation: "engraçado" },
        { topic: "Context", term: "boring", definition: "Not interesting; tedious.", translation: "entediante" },
        { topic: "Context", term: "feel-great", definition: "To experience a very good feeling.", translation: "sentir-se ótimo" },
        
        // --- TOPIC 1: EMOTIONS ---
        { topic: "Emotions", term: "happy", definition: "Feeling or showing pleasure or contentment.", translation: "feliz / contente" },
        { topic: "Emotions", term: "sad", definition: "Feeling or showing sorrow; unhappy.", translation: "triste" },
        { topic: "Emotions", term: "angry", definition: "Having a strong feeling of annoyance or hostility.", translation: "bravo / irritado" },
        { topic: "Emotions", term: "tired", definition: "In need of sleep or rest; weary.", translation: "cansado" },
        { topic: "Emotions", term: "excited", definition: "Very enthusiastic and eager.", translation: "animado / empolgado" },
        { topic: "Emotions", term: "interested", definition: "Showing curiosity or concern about something.", translation: "interessado" },
        { topic: "Emotions", term: "confused", definition: "Unable to think clearly; bewildered.", translation: "confuso" },
        { topic: "Emotions", term: "surprised", definition: "Feeling or showing surprise.", translation: "surpreso" },
        { topic: "Emotions", term: "scared-afraid", definition: "Fearful; frightened.", translation: "assustado / com medo" },
        { topic: "Emotions", term: "worried", definition: "Anxious or troubled about potential problems.", translation: "preocupado" },
        { topic: "Emotions", term: "bored", definition: "Feeling weary because one lacks interest in an activity.", translation: "entediado" },
        { topic: "Emotions", term: "calm", definition: "Not showing or feeling nervousness or anger.", translation: "calmo" },

        // --- TOPIC 2: EXPRESSIONS & VERBS ---
        { topic: "Facial & Verbs", term: "to-smile", definition: "To form one's features into a pleased expression.", translation: "sorrir" },
        { topic: "Facial & Verbs", term: "to-laugh", definition: "To make sounds of lively amusement.", translation: "rir / dar risada" },
        { topic: "Facial & Verbs", term: "to-cry", definition: "To shed tears as an expression of distress.", translation: "chorar" },
        { topic: "Facial & Verbs", term: "to-frown", definition: "To furrow one's brow in disapproval.", translation: "franzir a testa" },
        { topic: "Facial & Verbs", term: "smile-noun", definition: "A pleased, kind, or amused facial expression.", translation: "um sorriso" },
        { topic: "Facial & Verbs", term: "tear-noun", definition: "A drop of salty liquid secreted from the eye.", translation: "uma lágrima" },
        { topic: "Facial & Verbs", term: "to-feel", definition: "To experience an emotion or sensation.", translation: "sentir-se" },
        { topic: "Facial & Verbs", term: "to-express", definition: "To convey a thought or feeling in words.", translation: "expressar" },
        { topic: "Facial & Verbs", term: "to-worry", definition: "To allow one's mind to dwell on difficulty.", translation: "preocupar-se" },
        { topic: "Facial & Verbs", term: "to-agree", definition: "To have the same opinion about something.", translation: "concordar" },
        { topic: "Facial & Verbs", term: "to-disagree", definition: "To have or express a different opinion.", translation: "discordar" },
        { topic: "Facial & Verbs", term: "to-understand", definition: "To perceive the intended meaning.", translation: "entender" },
        { topic: "Facial & Verbs", term: "to-love", definition: "To feel deep affection for someone.", translation: "amar" },
        { topic: "Facial & Verbs", term: "to-hate", definition: "To feel intense dislike for.", translation: "odiar" },

        // --- TOPIC 3: POLITE EXPRESSIONS ---
        { topic: "Polite Expressions", term: "dont-get-it", definition: "Informal way to say 'I don't understand'.", translation: "não entendi / não saquei" },
        { topic: "Polite Expressions", term: "not-sure-i-agree", definition: "Polite way to express disagreement or doubt.", translation: "não tenho certeza se concordo" },
        { topic: "Polite Expressions", term: "sorry-what", definition: "Polite way to ask someone to repeat what they said.", translation: "desculpe, o que você disse?" },
        { topic: "Polite Expressions", term: "see-your-point", definition: "Phrase used to acknowledge an argument before disagreeing.", translation: "eu entendo seu ponto de vista" },
        { topic: "Polite Expressions", term: "explain-again", definition: "Request for clarification.", translation: "explicar isso de novo" },

        // --- TOPIC 4: TIME EXPRESSIONS ---
        { topic: "Time Words", term: "yesterday", definition: "On the day before today.", translation: "ontem" },
        { topic: "Time Words", term: "last-week", definition: "The week before the current one.", translation: "semana passada" },
        { topic: "Time Words", term: "just", definition: "Very recently; in the immediate past.", translation: "acabou de" },
        { topic: "Time Words", term: "already", definition: "Before the time in question; sooner than expected.", translation: "já" },
        { topic: "Time Words", term: "yet", definition: "Up until the present time.", translation: "ainda / já" },
        { topic: "Time Words", term: "ever", definition: "At any time.", translation: "alguma vez / já" },
        { topic: "Time Words", term: "never", definition: "At no time in the past.", translation: "nunca" },

        // --- TOPIC 5: GRAMMAR ---
        { topic: "Grammar Points", term: "adj-ed", definition: "Adjectives describing how a person feels.", translation: "Adjetivos -ED (Sentimento)" },
        { topic: "Grammar Points", term: "adj-ing", definition: "Adjectives describing the cause of a feeling.", translation: "Adjetivos -ING (Causa)" },
        { topic: "Grammar Points", term: "present-perfect", definition: "Verb tense linking the past to the present.", translation: "Presente Perfeito" },
        { topic: "Grammar Points", term: "simple-past", definition: "Verb tense for finished actions at a specific time.", translation: "Passado Simples" }
    ]
});