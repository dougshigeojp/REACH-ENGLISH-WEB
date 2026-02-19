/**
 * REACH English - LESSON DATA 9-2-4
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "9-2-4", 
    grade: "9th Grade",       
    bimester: "2",   
    chapter: "4",    
    chapterTitle: "Have You Heard That Rumor?", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss gossip, rumors, and fake news.<br>• Use vocabulary for spreading information (spread, whisper, confirm).<br>• Use Reported Speech (Indirect Speech) to say what someone else said.<br>• Change verb tenses and pronouns in Reported Speech.<br>• Report questions and commands.",
            welcome: "Hello, Truth Seekers! It's Mr. D!<br><br>Welcome to \"Have You Heard That Rumor?\"! Today, we are going to talk about how information travels. Sometimes it is true, but sometimes it is just gossip or fake news! We will learn how to be smart about what we hear and how to tell others about conversations using Reported Speech. Did he say he was coming? Let's find out!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss gossip, rumors, and fake news. Use vocabulary for spreading information. Use Reported Speech to say what someone else said. Change verb tenses and pronouns in Reported Speech. Report questions and commands.",
                welcome: "TTS: Hello, Truth Seekers! It's Mr. D! Welcome to Have You Heard That Rumor! Today, we are going to talk about how information travels. Sometimes it is true, but sometimes it is just gossip or fake news! We will learn how to be smart about what we hear and how to tell others about conversations using Reported Speech. Did he say he was coming? Let's find out!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Sound of whispering and low chatter in a school hallway. Albert looks shocked looking at his phone.", 
            contextAudio: "audio/9-2-4/step1.mp3",
            dialogue: [
                { 
                    speaker: "Albert", 
                    text: "Celine! [Guess what I heard](tooltip:guess-what-i-heard)!" 
                },
                { 
                    speaker: "Celine", 
                    text: "What? Is it about the [gossip](tooltip:gossip) regarding the new teacher?" 
                },
                { 
                    speaker: "Albert", 
                    text: "No! They say that the school is closing next week!" 
                },
                { 
                    speaker: "Celine", 
                    text: "That sounds like [fake news](tooltip:fake-news). [Who told you that](tooltip:who-told-you-that)?" 
                },
                { 
                    speaker: "Albert", 
                    text: "I saw a post online. It [claimed](tooltip:claimed) there is a problem with the building." 
                },
                { 
                    speaker: "Celine", 
                    text: "You should check your [sources](tooltip:sources). I don't believe it." 
                },
                { 
                    speaker: "Albert", 
                    text: "Maybe you are right. I heard that many [rumors](tooltip:rumors) are [spreading](tooltip:spreading) today." 
                },
                { 
                    speaker: "Celine", 
                    text: "Don't spread rumors, Albert. It might be [misleading](tooltip:misleading)." 
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
                    title: "Gossip, Rumors & News",
                    audio: "TTS: Gossip. Rumor. Fake News. Source. Secret. Truth. Lie. Evidence. Fact.",
                    items: [
                        { term: "Gossip", trans: "Fofoca / Fofocar" },
                        { term: "Rumor", trans: "Rumor / Boato" },
                        { term: "Fake News", trans: "Notícias Falsas" },
                        { term: "Source", trans: "Fonte" },
                        { term: "Secret", trans: "Segredo" },
                        { term: "Truth", trans: "Verdade" },
                        { term: "Lie", trans: "Mentira" },
                        { term: "Evidence", trans: "Evidência" },
                        { term: "Fact", trans: "Fato" }
                    ]
                },
                {
                    title: "Verbs (Communication)",
                    audio: "TTS: Spread. Whisper. Confirm. Deny. Claim. Believe. Doubt. Check. Verify. Tell. Say.",
                    items: [
                        { term: "Spread", trans: "Espalhar / Divulgar" },
                        { term: "Whisper", trans: "Sussurrar" },
                        { term: "Confirm", trans: "Confirmar" },
                        { term: "Deny", trans: "Negar" },
                        { term: "Claim", trans: "Alegar / Afirmar" },
                        { term: "Believe", trans: "Acreditar / Crer" },
                        { term: "Doubt", trans: "Duvidar" },
                        { term: "Check / Verify", trans: "Verificar" },
                        { term: "Tell", trans: "Contar / Dizer (para alguém)" },
                        { term: "Say", trans: "Dizer" }
                    ]
                },
                {
                    title: "Adjectives (Reliability)",
                    audio: "TTS: Reliable. Trustworthy. Unreliable. Misleading. Shocking. Viral. True. False. Verified. Unverified.",
                    items: [
                        { term: "Reliable / Trustworthy", trans: "Confiável" },
                        { term: "Unreliable", trans: "Não confiável" },
                        { term: "Misleading", trans: "Enganoso(a)" },
                        { term: "Shocking", trans: "Chocante" },
                        { term: "Viral", trans: "Viral" },
                        { term: "True", trans: "Verdadeiro(a)" },
                        { term: "False", trans: "Falso(a)" },
                        { term: "Verified", trans: "Verificado / Confirmado" },
                        { term: "Unverified", trans: "Não verificado" }
                    ]
                },
                {
                    title: "Reporting Verbs",
                    audio: "TTS: Mention. Reply. Add. Explain. Announce. Admit.",
                    items: [
                        { term: "Mention", trans: "Mencionar" },
                        { term: "Reply", trans: "Responder" },
                        { term: "Add", trans: "Adicionar / Acrescentar" },
                        { term: "Explain", trans: "Explicar" },
                        { term: "Announce", trans: "Anunciar" },
                        { term: "Admit", trans: "Admitir" }
                    ]
                },
                {
                    title: "Expressions & Idioms",
                    audio: "TTS: Did you hear about? Guess what I heard! They say that. I heard that. Apparently. Is it true that? I don't believe it! Don't spread rumors! Check your sources! That sounds like fake news.",
                    items: [
                        { term: "Did you hear about...?", trans: "Você ouviu sobre...? / Ficou sabendo de...?" },
                        { term: "Guess what I heard!", trans: "Adivinha o que eu ouvi!" },
                        { term: "They say that...", trans: "Dizem que... / O pessoal diz que..." },
                        { term: "I heard that...", trans: "Eu ouvi (dizer) que..." },
                        { term: "Apparently...", trans: "Aparentemente..." },
                        { term: "Is it true that...?", trans: "É verdade que...?" },
                        { term: "I don't believe it!", trans: "Eu não acredito!" },
                        { term: "Don't spread rumors!", trans: "Não espalhe rumores!" },
                        { term: "Check your sources!", trans: "Verifique suas fontes!" },
                        { term: "That sounds like fake news.", trans: "Isso parece fake news." }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Gossip & News",
                    audio: "TTS: She loves to gossip about celebrities. I heard a rumor that he is leaving. Don't share fake news on the internet. What is the source of this information? Can you keep a secret? Tell me the truth. He told a lie. There is no evidence for that claim. It is a scientific fact.",
                    items: [
                        { term: "Gossip", sent: "She loves to gossip about celebrities.", trans: "<span style='color:#0077b6'>Ela adora fofocar sobre celebridades.</span>" },
                        { term: "Rumor", sent: "I heard a rumor that he is leaving.", trans: "<span style='color:#0077b6'>Eu ouvi um boato de que ele vai embora.</span>" },
                        { term: "Fake News", sent: "Don't share fake news on the internet.", trans: "<span style='color:#0077b6'>Não compartilhe notícias falsas na internet.</span>" },
                        { term: "Source", sent: "What is the source of this information?", trans: "<span style='color:#0077b6'>Qual é a fonte desta informação?</span>" },
                        { term: "Secret", sent: "Can you keep a secret?", trans: "<span style='color:#0077b6'>Você consegue guardar um segredo?</span>" },
                        { term: "Truth", sent: "Tell me the truth.", trans: "<span style='color:#0077b6'>Me diga a verdade.</span>" },
                        { term: "Lie", sent: "He told a lie.", trans: "<span style='color:#0077b6'>Ele contou uma mentira.</span>" },
                        { term: "Evidence", sent: "There is no evidence for that claim.", trans: "<span style='color:#0077b6'>Não há evidência para essa alegação.</span>" },
                        { term: "Fact", sent: "It is a scientific fact.", trans: "<span style='color:#0077b6'>É um fato científico.</span>" }
                    ]
                },
                {
                    title: "Communication Verbs",
                    audio: "TTS: The news spread quickly. She whispered the answer to me. The school confirmed the holiday. He denied the accusation. The article claims to have the answer. I believe what you say. I doubt that is true. Always check the facts. Tell me a story. Say hello to him.",
                    items: [
                        { term: "Spread", sent: "The news spread quickly.", trans: "<span style='color:#0077b6'>A notícia se espalhou rapidamente.</span>" },
                        { term: "Whisper", sent: "She whispered the answer to me.", trans: "<span style='color:#0077b6'>Ela sussurrou a resposta para mim.</span>" },
                        { term: "Confirm", sent: "The school confirmed the holiday.", trans: "<span style='color:#0077b6'>A escola confirmou o feriado.</span>" },
                        { term: "Deny", sent: "He denied the accusation.", trans: "<span style='color:#0077b6'>Ele negou a acusação.</span>" },
                        { term: "Claim", sent: "The article claims to have the answer.", trans: "<span style='color:#0077b6'>O artigo alega ter a resposta.</span>" },
                        { term: "Believe", sent: "I believe what you say.", trans: "<span style='color:#0077b6'>Eu acredito no que você diz.</span>" },
                        { term: "Doubt", sent: "I doubt that is true.", trans: "<span style='color:#0077b6'>Eu duvido que isso seja verdade.</span>" },
                        { term: "Check", sent: "Always check the facts.", trans: "<span style='color:#0077b6'>Sempre verifique os fatos.</span>" },
                        { term: "Tell", sent: "Tell me a story.", trans: "<span style='color:#0077b6'>Me conte uma história.</span>" },
                        { term: "Say", sent: "Say hello to him.", trans: "<span style='color:#0077b6'>Diga olá para ele.</span>" }
                    ]
                },
                {
                    title: "Adjectives",
                    audio: "TTS: This website is a reliable source. Gossip is often unreliable. The headline was misleading. The video was shocking. The cat video went viral. Is the story true? That information is false. Look for the verified badge. Ignore unverified rumors.",
                    items: [
                        { term: "Reliable", sent: "This website is a reliable source.", trans: "<span style='color:#0077b6'>Este site é uma fonte confiável.</span>" },
                        { term: "Unreliable", sent: "Gossip is often unreliable.", trans: "<span style='color:#0077b6'>Fofoca é frequentemente não confiável.</span>" },
                        { term: "Misleading", sent: "The headline was misleading.", trans: "<span style='color:#0077b6'>A manchete era enganosa.</span>" },
                        { term: "Shocking", sent: "The video was shocking.", trans: "<span style='color:#0077b6'>O vídeo foi chocante.</span>" },
                        { term: "Viral", sent: "The cat video went viral.", trans: "<span style='color:#0077b6'>O vídeo do gato viralizou.</span>" },
                        { term: "True", sent: "Is the story true?", trans: "<span style='color:#0077b6'>A história é verdadeira?</span>" },
                        { term: "False", sent: "That information is false.", trans: "<span style='color:#0077b6'>Aquela informação é falsa.</span>" },
                        { term: "Verified", sent: "Look for the verified badge.", trans: "<span style='color:#0077b6'>Procure pelo selo verificado.</span>" },
                        { term: "Unverified", sent: "Ignore unverified rumors.", trans: "<span style='color:#0077b6'>Ignore rumores não verificados.</span>" }
                    ]
                },
                {
                    title: "Reporting Verbs",
                    audio: "TTS: He mentioned your name. She replied to my email. I would like to add something. Can you explain why? They announced the winner. He admitted his mistake.",
                    items: [
                        { term: "Mention", sent: "He mentioned your name.", trans: "<span style='color:#0077b6'>Ele mencionou seu nome.</span>" },
                        { term: "Reply", sent: "She replied to my email.", trans: "<span style='color:#0077b6'>Ela respondeu ao meu e-mail.</span>" },
                        { term: "Add", sent: "I would like to add something.", trans: "<span style='color:#0077b6'>Eu gostaria de acrescentar algo.</span>" },
                        { term: "Explain", sent: "Can you explain why?", trans: "<span style='color:#0077b6'>Você pode explicar por quê?</span>" },
                        { term: "Announce", sent: "They announced the winner.", trans: "<span style='color:#0077b6'>Eles anunciaram o vencedor.</span>" },
                        { term: "Admit", sent: "He admitted his mistake.", trans: "<span style='color:#0077b6'>Ele admitiu o erro dele.</span>" }
                    ]
                },
                {
                    title: "Expressions",
                    audio: "TTS: Did you hear about the party? Guess what I heard! No homework today! They say that it will rain. I heard that she won the prize. Apparently, the store is closed. Is it true that you are moving? I don't believe it! Are you serious? Don't spread rumors about people. Before you share, check your sources. That sounds like fake news to me.",
                    items: [
                        { term: "Did you hear...?", sent: "\"Did you hear about the party?\"", trans: "<span style='color:#0077b6'>\"Você ficou sabendo da festa?\"</span>" },
                        { term: "Guess what...?", sent: "\"Guess what I heard! No homework today!\"", trans: "<span style='color:#0077b6'>\"Adivinha o que eu ouvi! Sem lição de casa hoje!\"</span>" },
                        { term: "They say that...", sent: "\"They say that it will rain.\"", trans: "<span style='color:#0077b6'>\"Dizem que vai chover.\"</span>" },
                        { term: "I heard that...", sent: "\"I heard that she won the prize.\"", trans: "<span style='color:#0077b6'>\"Eu ouvi dizer que ela ganhou o prêmio.\"</span>" },
                        { term: "Apparently", sent: "\"Apparently, the store is closed.\"", trans: "<span style='color:#0077b6'>\"Aparentemente, a loja está fechada.\"</span>" },
                        { term: "Is it true...?", sent: "\"Is it true that you are moving?\"", trans: "<span style='color:#0077b6'>\"É verdade que você vai se mudar?\"</span>" },
                        { term: "I don't believe it!", sent: "\"I don't believe it! Are you serious?\"", trans: "<span style='color:#0077b6'>\"Eu não acredito! Você está falando sério?\"</span>" },
                        { term: "Don't spread...", sent: "\"Don't spread rumors about people.\"", trans: "<span style='color:#0077b6'>\"Não espalhe boatos sobre as pessoas.\"</span>" },
                        { term: "Check your...", sent: "\"Before you share, check your sources.\"", trans: "<span style='color:#0077b6'>\"Antes de compartilhar, verifique suas fontes.\"</span>" },
                        { term: "That sounds like...", sent: "\"That sounds like fake news to me.\"", trans: "<span style='color:#0077b6'>\"Isso parece fake news para mim.\"</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 24 Questions)
            drills: [
                // NOUNS: GOSSIP, TRUTH & NEWS (1-6)
                {
                    type: "mcq",
                    q: "Stories that are not true and spread online are often called:",
                    options: [
                        { t: "Reliable news", c: false },
                        { t: "Fact sheets", c: false },
                        { t: "Fake news", c: true },
                        { t: "Evidence", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Where information comes from is its:",
                    options: [
                        { t: "Source", c: true },
                        { t: "Secret", c: false },
                        { t: "Gossip", c: false },
                        { t: "Rumor", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Something that is kept unknown or unseen by others is a:",
                    options: [
                        { t: "Fact", c: false },
                        { t: "Truth", c: false },
                        { t: "Evidence", c: false },
                        { t: "Secret", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "A thing that is known or proved to be true is a:",
                    options: [
                        { t: "Lie", c: false },
                        { t: "Rumor", c: false },
                        { t: "Gossip", c: false },
                        { t: "Fact", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "The available body of facts indicating whether a belief is true is:",
                    options: [
                        { t: "Source", c: false },
                        { t: "Evidence", c: true },
                        { t: "Lie", c: false },
                        { t: "Secret", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "An intentionally false statement is a:",
                    options: [
                        { t: "Fact", c: false },
                        { t: "Truth", c: false },
                        { t: "Lie", c: true },
                        { t: "Evidence", c: false }
                    ]
                },

                // VERBS: COMMUNICATION & SPREADING (7-12)
                {
                    type: "mcq",
                    q: "To speak very quietly in someone's ear is to:",
                    options: [
                        { t: "Shout", c: false },
                        { t: "Whisper", c: true },
                        { t: "Claim", c: false },
                        { t: "Deny", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If you tell a rumor to many people, you are _________ it.",
                    options: [
                        { t: "Verifying", c: false },
                        { t: "Spreading", c: true },
                        { t: "Stopping", c: false },
                        { t: "Denying", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "If something is true, you can _________ it with evidence.",
                    options: [
                        { t: "Doubt", c: false },
                        { t: "Whisper", c: false },
                        { t: "Confirm", c: true },
                        { t: "Deny", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To say that you don't believe something is true is to:",
                    options: [
                        { t: "Confirm", c: false },
                        { t: "Add", c: false },
                        { t: "Believe", c: false },
                        { t: "Doubt", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "To state that something is the case, even without proof, is to:",
                    options: [
                        { t: "Claim", c: true },
                        { t: "Verify", c: false },
                        { t: "Silence", c: false },
                        { t: "Hide", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To state that you refuse to admit the truth of something is to:",
                    options: [
                        { t: "Confirm", c: false },
                        { t: "Deny", c: true },
                        { t: "Tell", c: false },
                        { t: "Add", c: false }
                    ]
                },

                // ADJECTIVES: RELIABILITY & VIRAL (13-18)
                {
                    type: "mcq",
                    q: "A news source that you can trust completely is:",
                    options: [
                        { t: "Misleading", c: false },
                        { t: "Shocking", c: false },
                        { t: "Reliable", c: true },
                        { t: "Unverified", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Information that gives the wrong idea or impression is:",
                    options: [
                        { t: "Misleading", c: true },
                        { t: "True", c: false },
                        { t: "Verified", c: false },
                        { t: "Fact", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "When a video becomes popular very quickly on the internet, it goes:",
                    options: [
                        { t: "Viral", c: true },
                        { t: "Slow", c: false },
                        { t: "Secret", c: false },
                        { t: "Offline", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "An account that hasn't been checked for accuracy is:",
                    options: [
                        { t: "Verified", c: false },
                        { t: "Unverified", c: true },
                        { t: "Reliable", c: false },
                        { t: "True", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "News that causes a feeling of surprise and dismay is:",
                    options: [
                        { t: "Quiet", c: false },
                        { t: "Boring", c: false },
                        { t: "Expected", c: false },
                        { t: "Shocking", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Information that is not according with the truth is:",
                    options: [
                        { t: "Verified", c: false },
                        { t: "False", c: true },
                        { t: "Reliable", c: false },
                        { t: "Source", c: false }
                    ]
                },

                // REPORTING VERBS & EXPRESSIONS (19-24)
                {
                    type: "mcq",
                    q: "To say you are sorry or that you did something wrong is to:",
                    options: [
                        { t: "Announce", c: false },
                        { t: "Admit", c: true },
                        { t: "Whisper", c: false },
                        { t: "Reply", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To make a public or formal declaration is to:",
                    options: [
                        { t: "Announce", c: true },
                        { t: "Secret", c: false },
                        { t: "Whisper", c: false },
                        { t: "Doubt", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To say something in response to a question or email is to:",
                    options: [
                        { t: "Mention", c: false },
                        { t: "Spread", c: false },
                        { t: "Reply", c: true },
                        { t: "Deny", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "To refer to something briefly without going into detail is to:",
                    options: [
                        { t: "Explain", c: false },
                        { t: "Mention", c: true },
                        { t: "Verify", c: false },
                        { t: "Confirm", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which expression is used to introduce surprising news?",
                    options: [
                        { t: "Check your sources!", c: false },
                        { t: "Guess what I heard!", c: true },
                        { t: "It's a secret.", c: false },
                        { t: "Say hello.", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Which expression is used to tell someone not to share rumors?",
                    options: [
                        { t: "Apparently...", c: false },
                        { t: "Don't spread rumors!", c: true },
                        { t: "Check the source.", c: false },
                        { t: "Is it true?", c: false }
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
                    title: "Intro & Reporting Verbs",
                    audio: "TTS: We use Reported Speech to tell someone what another person said without using their exact words. Use Say when we don't mention who was told. Use Tell when we mention who was told, it needs an object like me, you, or him. Other common verbs are explain, reply, and claim.",
                    explanation: "We use Reported Speech (Indirect Speech) to tell someone what another person said. We use specific verbs to introduce the report.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos o Discurso Indireto para contar a alguém o que outra pessoa disse. Usamos verbos específicos para introduzir o relato.)</span>",
                    samples: [
                        { en: "<b>SAY:</b> He <b>said</b> (that) he was tired.", pt: "<span style='color:#0077b6'>Ele disse que estava cansado.</span>" },
                        { en: "<b>TELL:</b> He <b>told me</b> (that) he was tired.", pt: "<span style='color:#0077b6'>Ele me disse que estava cansado.</span>" },
                        { en: "<b>CLAIM:</b> He <b>claimed</b> that it was true.", pt: "<span style='color:#0077b6'>Ele alegou que era verdade.</span>" }
                    ]
                },
                {
                    title: "Verb Tense Backshift",
                    audio: "TTS: When we report what someone said in the past, we move the verb tense one step back. Present Simple becomes Past Simple. Present Continuous becomes Past Continuous. Past Simple and Present Perfect become Past Perfect.",
                    explanation: "The Golden Rule: Move the verb tense one step back into the past.<br><br><span style='color:#0077b6; font-style:italic;'>(A Regra de Ouro: Movemos o tempo verbal um nível para o passado.)</span>",
                    samples: [
                        { en: "<b>Present Simple → Past Simple:</b> 'I like gossip' → He said he <b>liked</b> gossip.", pt: "<span style='color:#0077b6'>'Eu gosto de fofoca' → Ele disse que gostava de fofoca.</span>" },
                        { en: "<b>Present Cont. → Past Cont.:</b> 'She is spreading rumors' → He said she <b>was spreading</b> rumors.", pt: "<span style='color:#0077b6'>'Ela está espalhando boatos' → Ele disse que ela estava espalhando boatos.</span>" },
                        { en: "<b>Past Simple → Past Perfect:</b> 'We saw the news' → They said they <b>had seen</b> the news.", pt: "<span style='color:#0077b6'>'Nós vimos as notícias' → Eles disseram que tinham visto as notícias.</span>" }
                    ]
                },
                {
                    title: "Reported Modals",
                    audio: "TTS: Modal verbs also change. Can becomes could. Will becomes would. Must becomes had to. Note that should, could, might, and ought to do not change.",
                    explanation: "Modal verbs change form in Reported Speech to reflect the past perspective.<br><br><span style='color:#0077b6; font-style:italic;'>(Verbos modais mudam de forma no Discurso Indireto para refletir a perspectiva do passado.)</span>",
                    samples: [
                        { en: "<b>CAN → COULD:</b> 'It can be true' → He said it <b>could</b> be true.", pt: "<span style='color:#0077b6'>'Pode ser verdade' → Ele disse que poderia ser verdade.</span>" },
                        { en: "<b>WILL → WOULD:</b> 'I will check' → She said she <b>would</b> check.", pt: "<span style='color:#0077b6'>'Eu vou verificar' → Ela disse que verificaria.</span>" },
                        { en: "<b>MUST → HAD TO:</b> 'You must stop' → The teacher said we <b>had to</b> stop.", pt: "<span style='color:#0077b6'>'Você deve parar' → O professor disse que tínhamos que parar.</span>" }
                    ]
                },
                {
                    title: "Reported Questions",
                    audio: "TTS: In reported questions, the word order changes to Subject plus Verb. We do not use do, does, or did. For Wh questions, keep the question word. For Yes or No questions, use if or whether.",
                    explanation: "The word order changes to Subject + Verb. We do <b>NOT</b> use 'do, does, did'.<br><br><span style='color:#0077b6; font-style:italic;'>(A ordem das palavras muda para Sujeito + Verbo. NÃO usamos 'do, does, did'.)</span>",
                    samples: [
                        { en: "<b>WH- Question:</b> 'Where is the source?' → He asked where the source <b>was</b>.", pt: "<span style='color:#0077b6'>'Onde está a fonte?' → Ele perguntou onde a fonte estava.</span>" },
                        { en: "<b>YES/NO Question:</b> 'Do you believe it?' → She asked <b>if</b> I believed it.", pt: "<span style='color:#0077b6'>'Você acredita nisso?' → Ela perguntou se eu acreditava.</span>" }
                    ]
                },
                {
                    title: "Time & Place Changes",
                    audio: "TTS: Words about time and place change to match the new perspective. Now becomes then. Today becomes that day. Yesterday becomes the day before. Tomorrow becomes the next day. Here becomes there. This becomes that.",
                    explanation: "Specific words change to match the reporting time.<br><br><span style='color:#0077b6; font-style:italic;'>(Palavras específicas mudam para combinar com o momento do relato.)</span>",
                    samples: [
                        { en: "<b>NOW → THEN:</b> 'I am busy now' → He said he was busy <b>then</b>.", pt: "<span style='color:#0077b6'>'Estou ocupado agora' → Ele disse que estava ocupado naquele momento.</span>" },
                        { en: "<b>TODAY → THAT DAY:</b> 'I am busy today' → He said he was busy <b>that day</b>.", pt: "<span style='color:#0077b6'>'Estou ocupado hoje' → Ele disse que estava ocupado naquele dia.</span>" },
                        { en: "<b>HERE → THERE:</b> 'Sit here' → He told me to sit <b>there</b>.", pt: "<span style='color:#0077b6'>'Sente-se aqui' → Ele me disse para sentar lá.</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Reporting Verbs & Statements",
                    audio: "audio/9-2-4/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "I spoke to the principal. He told me the school was not closing. He explained that it was just a rumor.", 
                            pt: "<span style='color:#0077b6'>Falei com o diretor. Ele me disse que a escola não estava fechando. Ele explicou que era apenas um boato.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "That is good news! My friend claimed she had seen a post about it. She added that she would delete it.", 
                            pt: "<span style='color:#0077b6'>Isso é uma boa notícia! Minha amiga alegou que tinha visto uma postagem sobre isso. Ela acrescentou que iria deletá-la.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Reported Questions & Time Words",
                    audio: "audio/9-2-4/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Did your mom see the fake news?", 
                            pt: "<span style='color:#0077b6'>Sua mãe viu as notícias falsas?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Yes. She asked me if I knew who wrote it. She also asked why people spread lies there.", 
                            pt: "<span style='color:#0077b6'>Sim. Ela me perguntou se eu sabia quem escreveu. Ela também perguntou por que as pessoas espalhavam mentiras lá.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "My dad asked me what I was reading the day before. We should verify the information before we get excited.", 
                            pt: "<span style='color:#0077b6'>Meu pai me perguntou o que eu estava lendo no dia anterior. Devemos verificar as informações antes de ficarmos empolgados.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 24 Questions)
            grammarDrills: [
                // REPORTING VERBS (1-4)
                {
                    type: "mcq",
                    q: "Choose the correct verb: 'He _______ me the truth.'",
                    options: [
                        { t: "said", c: false },
                        { t: "told", c: true },
                        { t: "asked", c: false },
                        { t: "say", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the correct verb: 'Albert _______ that the school was closing.'",
                    options: [
                        { t: "said", c: true },
                        { t: "told", c: false },
                        { t: "replied me", c: false },
                        { t: "asked me that", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Reporting Verbs: 'He _______ his mistake after verifying the source.'",
                    options: [
                        { t: "announced", c: false },
                        { t: "admitted", c: true },
                        { t: "replied", c: false },
                        { t: "mentioned me", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Reporting Verbs: 'The post _______ that there was a problem with the building.'",
                    options: [
                        { t: "claimed", c: true },
                        { t: "told", c: false },
                        { t: "whispered", c: false },
                        { t: "admitted me", c: false }
                    ]
                },

                // TENSE BACKSHIFT (5-10)
                {
                    type: "mcq",
                    q: "Backshift: 'I am happy.' → He said he _______ happy.",
                    options: [
                        { t: "is", c: false },
                        { t: "was", c: true },
                        { t: "been", c: false },
                        { t: "were", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Backshift: 'We went to the park.' → They said they _______ to the park.",
                    options: [
                        { t: "went", c: false },
                        { t: "have gone", c: false },
                        { t: "had gone", c: true },
                        { t: "go", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Backshift: 'I like gossip.' → She said she _______ gossip.",
                    options: [
                        { t: "likes", c: false },
                        { t: "liked", c: true },
                        { t: "had liked", c: false },
                        { t: "was liking", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Backshift: 'She is spreading rumors.' → He said she _______ rumors.",
                    options: [
                        { t: "is spreading", c: false },
                        { t: "was spreading", c: true },
                        { t: "has spread", c: false },
                        { t: "spreads", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Backshift: 'We saw the news.' → They said they _______ the news.",
                    options: [
                        { t: "see", c: false },
                        { t: "was seeing", c: false },
                        { t: "had seen", c: true },
                        { t: "have seen", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Subject Nouns: 'The teacher is busy.' → He said the teacher _______ busy.",
                    options: [
                        { t: "is", c: false },
                        { t: "was", c: true },
                        { t: "were", c: false },
                        { t: "been", c: false }
                    ]
                },

                // MODALS (11-14)
                {
                    type: "mcq",
                    q: "Modals: 'I will call you.' → She said she _______ call me.",
                    options: [
                        { t: "will", c: false },
                        { t: "would", c: true },
                        { t: "can", c: false },
                        { t: "did", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals: 'You must study.' → He said I _______ study.",
                    options: [
                        { t: "must", c: false },
                        { t: "had to", c: true },
                        { t: "have to", c: false },
                        { t: "would", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals: 'It can be true.' → He said it _______ be true.",
                    options: [
                        { t: "could", c: true },
                        { t: "can", c: false },
                        { t: "will", c: false },
                        { t: "might", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Modals: 'I might go.' → Celine said she _______ go.",
                    options: [
                        { t: "may", c: false },
                        { t: "might", c: true },
                        { t: "must", c: false },
                        { t: "can", c: false }
                    ]
                },

                // REPORTED QUESTIONS (15-18)
                {
                    type: "mcq",
                    q: "Wh- Questions: 'Where is he?' → I asked where _______.",
                    options: [
                        { t: "he is", c: false },
                        { t: "is he", c: false },
                        { t: "he was", c: true },
                        { t: "was he", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Yes/No Questions: 'Are you okay?' → He asked _______ I was okay.",
                    options: [
                        { t: "that", c: false },
                        { t: "what", c: false },
                        { t: "if", c: true },
                        { t: "did", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Yes/No Questions: 'Do you believe it?' → She asked _______ I believed it.",
                    options: [
                        { t: "whether", c: true },
                        { t: "that", c: false },
                        { t: "what", c: false },
                        { t: "who", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Wh- Questions: 'What are you reading?' → He asked me what I _______.",
                    options: [
                        { t: "am reading", c: false },
                        { t: "was reading", c: true },
                        { t: "read", c: false },
                        { t: "had read", c: false }
                    ]
                },

                // TIME & PLACE CHANGES (19-24)
                {
                    type: "mcq",
                    q: "Time Words: 'I arrived yesterday.' → He said he had arrived _______.",
                    options: [
                        { t: "tomorrow", c: false },
                        { t: "the next day", c: false },
                        { t: "yesterday", c: false },
                        { t: "the day before", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Place Words: 'I live here.' → She said she lived _______.",
                    options: [
                        { t: "here", c: false },
                        { t: "there", c: true },
                        { t: "this", c: false },
                        { t: "that", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Words: 'I am busy now.' → He said he was busy _______.",
                    options: [
                        { t: "now", c: false },
                        { t: "then", c: true },
                        { t: "today", c: false },
                        { t: "tomorrow", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Words: 'I'll see you tomorrow.' → She said she'd see me _______.",
                    options: [
                        { t: "the day before", c: false },
                        { t: "yesterday", c: false },
                        { t: "the next day", c: true },
                        { t: "today", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "This/That: 'I like this post.' → Celine said she liked _______ post.",
                    options: [
                        { t: "this", c: false },
                        { t: "that", c: true },
                        { t: "these", c: false },
                        { t: "those", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Time Words: 'I'm busy today.' → Albert said he was busy _______.",
                    options: [
                        { t: "today", c: false },
                        { t: "then", c: false },
                        { t: "that day", c: true },
                        { t: "the day before", c: false }
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
                    text: "Did you hear the news?<br><small style='color:#0077b6'>(Você ouviu a notícia?)</small>", 
                    audio: "TTS: Did you hear the news?", 
                    arrow: "↗" 
                },
                { 
                    text: "He said he was tired.<br><small style='color:#0077b6'>(Ele disse que estava cansado.)</small>", 
                    audio: "TTS: He said he was tired.", 
                    arrow: "↘" 
                },
                { 
                    text: "Don't spread rumors.<br><small style='color:#0077b6'>(Não espalhe boatos.)</small>", 
                    audio: "TTS: Don't spread rumors.", 
                    arrow: "↘" 
                },
                { 
                    text: "She asked if I was ready.<br><small style='color:#0077b6'>(Ela perguntou se eu estava pronto.)</small>", 
                    audio: "TTS: She asked if I was ready.", 
                    arrow: "↘" 
                },
                { 
                    text: "I told him the truth.<br><small style='color:#0077b6'>(Eu disse a verdade a ele.)</small>", 
                    audio: "TTS: I told him the truth.", 
                    arrow: "↘" 
                },
                { 
                    text: "Is it true that she left?<br><small style='color:#0077b6'>(É verdade que ela foi embora?)</small>", 
                    audio: "TTS: Is it true that she left?", 
                    arrow: "↗" 
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
                    instruction: "Listen to Albert talking about a rumor. Type the missing words.<br><small style='color:#0077b6'>(Ouça Albert falando sobre um boato. Digite as palavras que faltam.)</small>",
                    audio: "TTS: I heard a rumor yesterday. Someone said that the math test is cancelled. But the teacher told us it is not true. We must study.",
                    text: "I heard a [rumor] yesterday. Someone [said] that the math test is [cancelled]. But the teacher [told] us it is not true. We must [study]."
                },
                // Drill 2: Listen and Complete (Dropdown) - MP3
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a news article and choose the correct options.<br><small style='color:#0077b6'>(Ouça a conversa sobre um artigo de notícias e escolha as opções corretas.)</small>",
                    audio: "audio/9-2-4/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Look at this [headline | photo], Albert.", a: "headline" },
                        { q: "Albert: It looks [fake | real]. The source is [unreliable | good].", a: "fake" }, // Note: Both dropdowns on same line works if structured correctly, but for engine safety we use two entries if needed.
                        { q: "Celine: It [claims | asks] that aliens landed in the park.", a: "claims" },
                        { q: "Albert: We shouldn't [share | read] it.", a: "share" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the direct speech and choose the correct reported speech.<br><small style='color:#0077b6'>(Ouça o discurso direto e escolha o discurso indireto correto.)</small>",
                    audio: "TTS: I am going to the party.",
                    options: [
                        { t: "He said he is going to the party.", c: false },
                        { t: "He said he was going to the party.", c: true },
                        { t: "He said I was going to the party.", c: false },
                        { t: "He asked if I was going to the party.", c: false }
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
                    title: "Narration: The Whispering Game",
                    audio: "TTS: In class today, we played a game called Telephone. The teacher whispered a secret sentence to the first student. It was, The purple elephant likes to dance in the rain. The first student told the second student, and so on. By the time it reached the last student, the message had changed completely. The last student announced, The purple egg likes to pants on the train. We all laughed. It showed us how easily rumors can change when they spread. || audio/9-2-4/p6_text1.mp3",
                    body: "In class today, we played a game called \"Telephone\". The teacher whispered a secret sentence to the first student. It was, \"The purple elephant likes to dance in the rain.\" The first student told the second student, and so on. By the time it reached the last student, the message had changed completely! The last student announced, \"The purple egg likes to pants on the train.\" We all laughed. It showed us how easily rumors can change when they spread.",
                    questions: [
                        { 
                            q: "What was the game called?", 
                            options: [ 
                                {t: "The Rumor Game", c: false}, 
                                {t: "Telephone", c: true}, 
                                {t: "Secrets", c: false},
                                {t: "Whisper", c: false}
                            ] 
                        },
                        { 
                            q: "What was the original subject of the sentence?", 
                            options: [ 
                                {t: "A purple egg", c: false}, 
                                {t: "A purple elephant", c: true}, 
                                {t: "A dancing dog", c: false},
                                {t: "A train", c: false}
                            ] 
                        },
                        { 
                            q: "What did the lesson show?", 
                            options: [ 
                                {t: "How elephants dance.", c: false}, 
                                {t: "How to whisper.", c: false}, 
                                {t: "How rumors change when they spread.", c: true},
                                {t: "How to play games.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Did You Hear?",
                    audio: "audio/9-2-4/p6_text2.mp3",
                    body: "<b>Celine:</b> Albert, did you hear about the new library?<br><b>Albert:</b> No. What did you hear?<br><b>Celine:</b> My sister told me that they were building a gaming room inside it!<br><b>Albert:</b> Really? That sounds amazing, but I doubt it is true.<br><b>Celine:</b> Why?<br><b>Albert:</b> Because libraries are for reading. Who told her that?<br><b>Celine:</b> She said she had read it on a blog.<br><b>Albert:</b> We should verify the information before we get excited.",
                    questions: [
                        { 
                            q: "What is the rumor about?", 
                            options: [ 
                                {t: "A new school", c: false}, 
                                {t: "A gaming room in the library", c: true}, 
                                {t: "A new park", c: false},
                                {t: "A cinema", c: false}
                            ] 
                        },
                        { 
                            q: "Where did Celine's sister read it?", 
                            options: [ 
                                {t: "In a newspaper", c: false}, 
                                {t: "On a blog", c: true}, 
                                {t: "On TV", c: false},
                                {t: "In a book", c: false}
                            ] 
                        },
                        { 
                            q: "What does Albert suggest doing?", 
                            options: [ 
                                {t: "Spreading the rumor.", c: false}, 
                                {t: "Getting excited.", c: false}, 
                                {t: "Verifying the information.", c: true},
                                {t: "Going to the library.", c: false}
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: How to Spot Fake News",
                    audio: "TTS: Fake news is information that is not true. It often spreads fast on social media. To stop it, you must be a detective. First, check the source. Is it a famous newspaper or a strange website? Second, look at the photos. Sometimes they are edited. Third, read the whole story, not just the headline. Finally, ask yourself: Is this too shocking to be true? If you doubt it, don't share it. || audio/9-2-4/p6_text3.mp3",
                    body: "Fake news is information that is not true. It often spreads fast on social media. To stop it, you must be a detective. First, check the source. Is it a famous newspaper or a strange website? Second, look at the photos. Sometimes they are edited. Third, read the whole story, not just the headline. Finally, ask yourself: \"Is this too shocking to be true?\" If you doubt it, don't share it.",
                    questions: [
                        { 
                            q: "What is fake news?", 
                            options: [ 
                                {t: "Information that is true.", c: false}, 
                                {t: "Information that is not true.", c: true}, 
                                {t: "Social media posts.", c: false},
                                {t: "Old news.", c: false}
                            ] 
                        },
                        { 
                            q: "What should you check first?", 
                            options: [ 
                                {t: "The comments", c: false}, 
                                {t: "The source", c: true}, 
                                {t: "The time", c: false},
                                {t: "The author's age", c: false}
                            ] 
                        },
                        { 
                            q: "What should you do if you doubt the news?", 
                            options: [ 
                                {t: "Share it immediately.", c: false}, 
                                {t: "Don't share it.", c: true}, 
                                {t: "Write a comment.", c: false},
                                {t: "Print it.", c: false}
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
                // Drill 1: Matching (Reporting Verbs)
                {
                    type: "matching",
                    instruction: "Match the reporting verb with its definition.<br><small style='color:#0077b6'>(Combine o verbo de relato com sua definição.)</small>",
                    pairs: [
                        { left: "Whisper", right: "Speak very softly", val: "1" },
                        { left: "Deny", right: "Say something is not true", val: "2" },
                        { left: "Claim", right: "State something without proof", val: "3" },
                        { left: "Reply", right: "To give an answer", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Reported Speech Sentences)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a reported speech sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta para formar uma frase no discurso indireto.)</small>",
                    sentence: "said / tired / He / was / he / .",
                    correct: "He said he was tired ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "asked / I / if / ready / she / was / .",
                    correct: "She asked if I was ready ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "told / me / They / truth / the / .",
                    correct: "They told me the truth ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order.",
                    sentence: "source / check / the / We / must / .",
                    correct: "We must check the source ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.<br><small style='color:#0077b6'>(Escolha a palavra que não pertence ao grupo.)</small>",
                    options: [
                        { t: "Said", c: false },
                        { t: "Told", c: false },
                        { t: "Asked", c: false },
                        { t: "Ate", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "True", c: false },
                        { t: "False", c: false },
                        { t: "Misleading", c: false },
                        { t: "Happy", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Gossip", c: false },
                        { t: "Rumor", c: false },
                        { t: "Lie", c: false },
                        { t: "Fact", c: true }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does not belong in the group.",
                    options: [
                        { t: "Tomorrow", c: false },
                        { t: "Yesterday", c: false },
                        { t: "Now", c: false },
                        { t: "The next day", c: true }
                    ]
                },
                // Drill 4: Fill in the Blanks (Dropdown)
                {
                    type: "dropdown",
                    instruction: "Select the correct word to complete the sentence.<br><small style='color:#0077b6'>(Selecione a palavra correta para completar a frase.)</small>",
                    questions: [
                        { q: "He [said | told | if | where] that he liked the movie.", a: "said" },
                        { q: "She [told | said | if | where] me the secret.", a: "told" },
                        { q: "I asked [if | said | told | where] they were coming.", a: "if" },
                        { q: "He asked [where | said | told | if] the station was.", a: "where" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Now it's your turn! Report a conversation you had recently. <br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Agora é a sua vez! Reporte uma conversa que você teve recentemente.)</span></small>",
            example: "\"Yesterday, I talked to my brother. He said that he was hungry. He asked me if I wanted to eat pizza. I told him that I loved pizza.\" <br><br><small><span style='color:#0077b6'>(\"Ontem, eu falei com o meu irmão. Ele disse que estava com fome. Ele me perguntou se eu queria comer pizza. Eu disse a ele que adorava pizza.\")</span></small>",
            prompts: [
                "Who did you talk to? (I talked to my mom/friend...) <br><small><span style='color:#0077b6'>(Com quem você falou?)</span></small>",
                "What did they say? (She said that...) <br><small><span style='color:#0077b6'>(O que eles disseram?)</span></small>",
                "What did they ask you? (He asked if...) <br><small><span style='color:#0077b6'>(O que eles te perguntaram?)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Gossip & Communication)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // Gossip & News Vocabulary
                { term: "Gossip", definition: "Casual conversation or reports about other people.", defTrans: "Fofoca / Fofocar", example: "She doesn't like to gossip.", audioFront: "TTS: Gossip", audioBack: "TTS: She doesn't like to gossip." },
                { term: "Rumor", definition: "A currently circulating story of uncertain truth.", defTrans: "Rumor / Boato", example: "I heard a rumor about the test.", audioFront: "TTS: Rumor", audioBack: "TTS: I heard a rumor about the test." },
                { term: "Fake News", definition: "False or misleading information presented as news.", defTrans: "Notícias Falsas", example: "Don't believe everything; it might be fake news.", audioFront: "TTS: Fake News", audioBack: "TTS: Don't believe everything; it might be fake news." },
                { term: "Source", definition: "A place, person, or thing from which something comes.", defTrans: "Fonte", example: "Check the source of the article.", audioFront: "TTS: Source", audioBack: "TTS: Check the source of the article." },
                { term: "Secret", definition: "Something that is kept unknown or unseen by others.", defTrans: "Segredo", example: "Can you keep a secret?", audioFront: "TTS: Secret", audioBack: "TTS: Can you keep a secret?" },
                { term: "Truth", definition: "The quality or state of being in accordance with fact.", defTrans: "Verdade", example: "Always tell the truth.", audioFront: "TTS: Truth", audioBack: "TTS: Always tell the truth." },
                { term: "Lie", definition: "An intentionally false statement.", defTrans: "Mentira", example: "That story is a lie.", audioFront: "TTS: Lie", audioBack: "TTS: That story is a lie." },
                { term: "Evidence", definition: "Facts indicating whether a belief or proposition is true.", defTrans: "Evidência", example: "There is no evidence for that.", audioFront: "TTS: Evidence", audioBack: "TTS: There is no evidence for that." },
                { term: "Fact", definition: "A thing that is known or proved to be true.", defTrans: "Fato", example: "It is a historical fact.", audioFront: "TTS: Fact", audioBack: "TTS: It is a historical fact." },

                // Communication Verbs
                { term: "Spread", definition: "To circulate news or information widely.", defTrans: "Espalhar / Divulgar", example: "Bad news spreads fast.", audioFront: "TTS: Spread", audioBack: "TTS: Bad news spreads fast." },
                { term: "Whisper", definition: "To speak very softly using one's breath.", defTrans: "Sussurrar", example: "She whispered in my ear.", audioFront: "TTS: Whisper", audioBack: "TTS: She whispered in my ear." },
                { term: "Confirm", definition: "To establish the truth or correctness of something.", defTrans: "Confirmar", example: "Please confirm your attendance.", audioFront: "TTS: Confirm", audioBack: "TTS: Please confirm your attendance." },
                { term: "Deny", definition: "To state that one refuses to admit the truth.", defTrans: "Negar", example: "He denied breaking the vase.", audioFront: "TTS: Deny", audioBack: "TTS: He denied breaking the vase." },
                { term: "Claim", definition: "To state that something is the case without proof.", defTrans: "Alegar / Afirmar", example: "They claim to know the answer.", audioFront: "TTS: Claim", audioBack: "TTS: They claim to know the answer." },
                { term: "Believe", definition: "To accept that something is true.", defTrans: "Acreditar / Crer", example: "I believe your story.", audioFront: "TTS: Believe", audioBack: "TTS: I believe your story." },
                { term: "Doubt", definition: "To feel uncertain about something.", defTrans: "Duvidar", example: "I doubt he will come.", audioFront: "TTS: Doubt", audioBack: "TTS: I doubt he will come." },
                { term: "Check / Verify", definition: "To examine something to determine its accuracy.", defTrans: "Verificar", example: "Check your sources before sharing.", audioFront: "TTS: Check or Verify", audioBack: "TTS: Check your sources before sharing." },
                { term: "Tell", definition: "To communicate information to someone.", defTrans: "Contar / Dizer (para alguém)", example: "Tell me what happened.", audioFront: "TTS: Tell", audioBack: "TTS: Tell me what happened." },
                { term: "Say", definition: "To utter words so as to convey information.", defTrans: "Dizer", example: "Say hello to your mom.", audioFront: "TTS: Say", audioBack: "TTS: Say hello to your mom." },
                // --- Topic 2: Reporting Verbs ---
                { term: "Mention", definition: "To refer to something briefly.", defTrans: "Mencionar", example: "He mentioned your name.", audioFront: "TTS: Mention", audioBack: "TTS: He mentioned your name." },
                { term: "Reply", definition: "To say something in response.", defTrans: "Responder", example: "She didn't reply to my text.", audioFront: "TTS: Reply", audioBack: "TTS: She didn't reply to my text." },
                { term: "Add", definition: "To say something further.", defTrans: "Adicionar / Acrescentar", example: "He added that he was late.", audioFront: "TTS: Add", audioBack: "TTS: He added that he was late." },
                { term: "Explain", definition: "To make an idea clear to someone.", defTrans: "Explicar", example: "Can you explain the rule?", audioFront: "TTS: Explain", audioBack: "TTS: Can you explain the rule?" },
                { term: "Announce", definition: "To make a public declaration.", defTrans: "Anunciar", example: "They announced the winner.", audioFront: "TTS: Announce", audioBack: "TTS: They announced the winner." },
                { term: "Admit", definition: "To confess to be true.", defTrans: "Admitir", example: "He admitted he was wrong.", audioFront: "TTS: Admit", audioBack: "TTS: He admitted he was wrong." },

                // --- Topic 3: Adjectives (Reliability) ---
                { term: "Reliable", definition: "Consistently good in quality; able to be trusted.", defTrans: "Confiável", example: "This is a reliable website.", audioFront: "TTS: Reliable", audioBack: "TTS: This is a reliable website." },
                { term: "Unreliable", definition: "Not able to be relied upon.", defTrans: "Não confiável", example: "Gossip is often unreliable.", audioFront: "TTS: Unreliable", audioBack: "TTS: Gossip is often unreliable." },
                { term: "Misleading", definition: "Giving the wrong idea or impression.", defTrans: "Enganoso(a)", example: "The headline was misleading.", audioFront: "TTS: Misleading", audioBack: "TTS: The headline was misleading." },
                { term: "Shocking", definition: "Causing a feeling of surprise and dismay.", defTrans: "Chocante", example: "The video was shocking.", audioFront: "TTS: Shocking", audioBack: "TTS: The video was shocking." },
                { term: "Viral", definition: "Circulated rapidly and widely on the internet.", defTrans: "Viral", example: "The video went viral.", audioFront: "TTS: Viral", audioBack: "TTS: The video went viral." },
                { term: "True", definition: "In accordance with fact or reality.", defTrans: "Verdadeiro(a)", example: "Is the story true?", audioFront: "TTS: True", audioBack: "TTS: Is the story true?" },
                { term: "False", definition: "Not according with truth or fact.", defTrans: "Falso(a)", example: "That information is false.", audioFront: "TTS: False", audioBack: "TTS: That information is false." },
                { term: "Verified", definition: "Demonstrated to be true or accurate.", defTrans: "Verificado", example: "Look for the verified badge.", audioFront: "TTS: Verified", audioBack: "TTS: Look for the verified badge." },
                { term: "Unverified", definition: "Not confirmed to be true.", defTrans: "Não verificado", example: "Ignore unverified rumors.", audioFront: "TTS: Unverified", audioBack: "TTS: Ignore unverified rumors." },

                // --- Topic 4: Expressions ---
                { term: "Did you hear...?", definition: "Used to start a conversation about news.", defTrans: "Você ouviu sobre...?", example: "Did you hear about the party?", audioFront: "TTS: Did you hear about...?", audioBack: "TTS: Did you hear about the party?" },
                { term: "Guess what...!", definition: "Used to introduce surprising news.", defTrans: "Adivinha o que eu ouvi!", example: "Guess what I heard!", audioFront: "TTS: Guess what I heard!", audioBack: "TTS: Guess what I heard!" },
                { term: "They say that...", definition: "Used to introduce a rumor.", defTrans: "Dizem que...", example: "They say that it will rain.", audioFront: "TTS: They say that...", audioBack: "TTS: They say that it will rain." },
                { term: "I heard that...", definition: "Used to report info received.", defTrans: "Eu ouvi (dizer) que...", example: "I heard that she is moving.", audioFront: "TTS: I heard that...", audioBack: "TTS: I heard that she is moving." },
                { term: "Apparently", definition: "As far as one knows or can see.", defTrans: "Aparentemente", example: "Apparently, the store is closed.", audioFront: "TTS: Apparently", audioBack: "TTS: Apparently, the store is closed." },
                { term: "Is it true...?", definition: "A question to verify info.", defTrans: "É verdade que...?", example: "Is it true that you won?", audioFront: "TTS: Is it true that...?", audioBack: "TTS: Is it true that you won?" },
                { term: "I don't believe it!", definition: "Expression of shock.", defTrans: "Eu não acredito!", example: "He passed? I don't believe it!", audioFront: "TTS: I don't believe it!", audioBack: "TTS: He passed? I don't believe it!" },
                { term: "Don't spread rumors!", definition: "Instruction to stop gossip.", defTrans: "Não espalhe rumores!", example: "Be kind, don't spread rumors!", audioFront: "TTS: Don't spread rumors!", audioBack: "TTS: Be kind, don't spread rumors!" },
                { term: "Check your sources!", definition: "Advice to verify info.", defTrans: "Verifique suas fontes!", example: "Check your sources before sharing.", audioFront: "TTS: Check your sources!", audioBack: "TTS: Check your sources before sharing." },
                { term: "That sounds like...", definition: "Expression of doubt.", defTrans: "Isso parece...", example: "That sounds like fake news.", audioFront: "TTS: That sounds like fake news.", audioBack: "TTS: That sounds like fake news." },
                // --- Topic 5: Grammar Points (Reported Speech) ---
                { term: "Reported Speech", definition: "A way of reporting what someone said without using exact words.", defTrans: "Discurso Indireto", example: "He said he was tired.", audioFront: "TTS: Reported Speech", audioBack: "TTS: He said he was tired." },
                { term: "Direct Speech", definition: "Quoting the exact words spoken by a person.", defTrans: "Discurso Direto", example: "\"I am tired,\" he said.", audioFront: "TTS: Direct Speech", audioBack: "TTS: \"I am tired,\" he said." },
                { term: "Backshift", definition: "The change of verb tense from present to past.", defTrans: "Recuo do tempo verbal", example: "Is → Was", audioFront: "TTS: Backshift", audioBack: "TTS: Is becomes Was." },
                { term: "If / Whether", definition: "Words used to introduce reported Yes/No questions.", defTrans: "Se", example: "She asked if I was okay.", audioFront: "TTS: If or Whether", audioBack: "TTS: She asked if I was okay." },
                { term: "Then", definition: "Time word change for \"Now\" in reported speech.", defTrans: "Então / Naquele momento", example: "He said he was busy then.", audioFront: "TTS: Then", audioBack: "TTS: He said he was busy then." },
                { term: "That day", definition: "Time word change for \"Today\" in reported speech.", defTrans: "Naquele dia", example: "He said he was busy that day.", audioFront: "TTS: That day", audioBack: "TTS: He said he was busy that day." },
                { term: "The day before", definition: "Time word change for \"Yesterday\" in reported speech.", defTrans: "No dia anterior", example: "He said he had arrived the day before.", audioFront: "TTS: The day before", audioBack: "TTS: He said he had arrived the day before." },
                { term: "The next day", definition: "Time word change for \"Tomorrow\" in reported speech.", defTrans: "No dia seguinte", example: "She said she would go the next day.", audioFront: "TTS: The next day", audioBack: "TTS: She said she would go the next day." }
            ]
        }
    ], // Closes steps array

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // PAGE 1: CONTEXT (Step 1 Tooltips)
        { topic: "Context", term: "guess-what-i-heard", definition: "An expression used to introduce surprising news.", translation: "Adivinha o que eu ouvi!" },
        { topic: "Context", term: "gossip", definition: "Casual conversation or reports about other people, typically not confirmed.", translation: "Fofoca" },
        { topic: "Context", term: "fake-news", definition: "False or misleading information presented as news.", translation: "Notícias Falsas" },
        { topic: "Context", term: "who-told-you-that", definition: "A question asking for the source of information.", translation: "Quem te contou isso?" },
        { topic: "Context", term: "claimed", definition: "Stated that something is the case, typically without proof.", translation: "Alegou / Afirmou" },
        { topic: "Context", term: "sources", definition: "Places, persons, or things from which information comes.", translation: "Fontes" },
        { topic: "Context", term: "rumors", definition: "Currently circulating stories of uncertain or doubtful truth.", translation: "Rumores / Boatos" },
        { topic: "Context", term: "spreading", definition: "To open out or circulate news widely.", translation: "Espalhando" },
        { topic: "Context", term: "misleading", definition: "Giving the wrong idea or impression.", translation: "Enganoso" },

        // PAGE 2: GOSSIP & NEWS
        { topic: "Gossip & News", term: "Secret", definition: "Something kept unknown or unseen by others.", translation: "Segredo" },
        { topic: "Gossip & News", term: "Truth", definition: "The quality or state of being in accordance with fact.", translation: "Verdade" },
        { topic: "Gossip & News", term: "Lie", definition: "An intentionally false statement.", translation: "Mentira" },
        { topic: "Gossip & News", term: "Evidence", definition: "Facts indicating whether a belief is true.", translation: "Evidência" },
        { topic: "Gossip & News", term: "Fact", definition: "A thing that is known or proved to be true.", translation: "Fato" },

        // PAGE 3: COMMUNICATION VERBS
        { topic: "Communication", term: "Spread", definition: "To circulate news widely.", translation: "Espalhar / Divulgar" },
        { topic: "Communication", term: "Whisper", definition: "To speak very softly.", translation: "Sussurrar" },
        { topic: "Communication", term: "Confirm", definition: "To establish the truth of something.", translation: "Confirmar" },
        { topic: "Communication", term: "Deny", definition: "To state that one refuses to admit the truth.", translation: "Negar" },
        { topic: "Communication", term: "Believe", definition: "To accept that something is true.", translation: "Acreditar" },
        { topic: "Communication", term: "Doubt", definition: "To feel uncertain about something.", translation: "Duvidar" },
        { topic: "Communication", term: "Check", definition: "To examine to determine accuracy.", translation: "Verificar / Checar" },

        // PAGE 4: ADJECTIVES (RELIABILITY)
        { topic: "Adjectives", term: "Reliable", definition: "Consistently good in quality; able to be trusted.", translation: "Confiável" },
        { topic: "Adjectives", term: "Unreliable", definition: "Not able to be relied upon.", translation: "Não confiável" },
        { topic: "Adjectives", term: "Shocking", definition: "Causing a feeling of surprise and dismay.", translation: "Chocante" },
        { topic: "Adjectives", term: "Viral", definition: "Circulated rapidly and widely on the internet.", translation: "Viral" },
        { topic: "Adjectives", term: "Verified", definition: "Demonstrated to be true or accurate.", translation: "Verificado" },
        { topic: "Adjectives", term: "Unverified", definition: "Not confirmed to be true.", translation: "Não verificado" },

        // PAGE 5: REPORTING VERBS
        { topic: "Reporting Verbs", term: "Say", definition: "To utter words (no object needed).", translation: "Dizer" },
        { topic: "Reporting Verbs", term: "Tell", definition: "To communicate info to someone (needs object).", translation: "Contar / Dizer a alguém" },
        { topic: "Reporting Verbs", term: "Mention", definition: "To refer to something briefly.", translation: "Mencionar" },
        { topic: "Reporting Verbs", term: "Reply", definition: "To say something in response.", translation: "Responder" },
        { topic: "Reporting Verbs", term: "Announce", definition: "To make a public declaration.", translation: "Anunciar" },
        { topic: "Reporting Verbs", term: "Admit", definition: "To confess to be true.", translation: "Admitir" },

        // PAGE 6: GRAMMAR
        { topic: "Grammar", term: "Reported Speech", definition: "Indirect speech.", translation: "Discurso Indireto" },
        { topic: "Grammar", term: "Direct Speech", definition: "Quoting exact words.", translation: "Discurso Direto" },
        { topic: "Grammar", term: "Backshift", definition: "Changing verb tense to the past.", translation: "Recuo do tempo verbal" },
        { topic: "Grammar", term: "If / Whether", definition: "Used for Yes/No questions.", translation: "Se" },
        { topic: "Grammar", term: "Then", definition: "Time change for 'Now'.", translation: "Então / Naquele momento" },
        { topic: "Grammar", term: "That day", definition: "Time change for 'Today'.", translation: "Naquele dia" },
        { topic: "Grammar", term: "The next day", definition: "Time change for 'Tomorrow'.", translation: "No dia seguinte" }
    ]
});