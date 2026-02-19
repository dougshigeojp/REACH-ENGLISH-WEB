/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em1-2-6", 
    grade: "High School 1st Grade",       
    bimester: "2",   
    chapter: "6",    
    chapterTitle: "Music Hits Different", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Share opinions and agree or disagree about music.<br>• Identify different music genres and their characteristics.<br>• Use the Past Perfect to order events in the past.<br>• Use Relative Clauses to add detail to your stories.<br>• Form abstract nouns using suffixes like -ness and -ship.<br>• Use linking words to show contrast (however, despite).",
            welcome: "Hey music lovers! I'm Mr. D!<br>Have you ever heard a song that completely changed your mood? Music isn't just sound; it has the power to connect us and tell our stories. Today, we're going on a rhythmic journey! We'll learn how to talk about our favorite artists, how music affects our well-being, and how to use advanced English to describe memories. Whether you love Rock or Samba, this lesson will hit all the right notes! Let's get the beat started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Share opinions and agree or disagree about music. Identify different music genres and their characteristics. Use the Past Perfect to order events in the past. Use Relative Clauses to add detail to your stories. Form abstract nouns using suffixes like ness and ship. Use linking words to show contrast like however and despite.",
                welcome: "TTS: Hey music lovers! I'm Mr. D! Have you ever heard a song that completely changed your mood? Music isn't just sound; it has the power to connect us and tell our stories. Today, we're going on a rhythmic journey! We'll learn how to talk about our favorite artists, how music affects our well-being, and how to use advanced English to describe memories. Whether you love Rock or Samba, this lesson will hit all the right notes! Let's get the beat started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Albert and Celine are walking home from school. Celine is wearing large headphones, and Albert is holding a vintage vinyl record.", 
            contextAudio: "audio/em1-2-6/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, is that a new [record](tooltip:album)? I [had already heard](tooltip:past-perfect) about that [band](tooltip:band), but I didn't know you liked [Blues](tooltip:blues)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Yeah! I [have been listening](tooltip:present-perfect-continuous) to [Jazz](tooltip:jazz) all week, and then I [found](tooltip:simple-past) this. [In my opinion](tooltip:in-my-opinion), the [rhythm](tooltip:rhythm) is amazing. This is the [album](tooltip:album) [which](tooltip:which) hits me hard." 
                },
                { 
                    speaker: "Celine", 
                    text: "[That's true](tooltip:that-s-true), the [melody](tooltip:melody) is very [nostalgic](tooltip:nostalgic). [Although](tooltip:although) I usually [prefer](tooltip:prefer) [Pop](tooltip:pop), I [believe](tooltip:believe) [classical instruments](tooltip:instrument) create a better [atmosphere](tooltip:mood)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [agree](tooltip:agree). Before I bought this, I [had been studying](tooltip:past-perfect-continuous) with silence, but it was boring. Music gives me [happiness](tooltip:happiness) while I work." 
                },
                { 
                    speaker: "Celine", 
                    text: "I [see your point](tooltip:i-see-your-point). But for me, [Rock](tooltip:rock) is more [energetic](tooltip:energetic). It's the [genre](tooltip:genre) [that](tooltip:that) [improves](tooltip:improve) my [well-being](tooltip:well-being)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [disagree](tooltip:disagree). Rock can be too loud! I like this [artist](tooltip:artist) [whose](tooltip:whose) [lyrics](tooltip:lyrics) are like [poetry](tooltip:poetry)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Maybe, but [Electronic music](tooltip:electronic) is great for a [concert](tooltip:concert). [Despite](tooltip:despite) our different tastes, we both know music is [therapy](tooltip:therapy), right?" 
                },
                { 
                    speaker: "Albert", 
                    text: "Exactly! [Shall we](tooltip:shall) [listen to](tooltip:listen-to) this track at my house? It marks the beginning of my musical [freedom](tooltip:freedom)." 
                },
                { 
                    speaker: "Celine", 
                    text: "Let's go! I [suppose](tooltip:suppose) I can [learn](tooltip:learn) to like it!" 
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
                    title: "Verbs (Opinions)",
                    audio: "TTS: Agree. Disagree. Believe. Think. Feel. Suppose. Remember. Forget. Affect. Influence. Express. Listen to.",
                    items: [
                        { term: "Agree", trans: "Concordar" },
                        { term: "Disagree", trans: "Discordar" },
                        { term: "Believe", trans: "Acreditar" },
                        { term: "Think", trans: "Pensar / Achar" },
                        { term: "Feel", trans: "Sentir" },
                        { term: "Suppose", trans: "Supor" },
                        { term: "Remember", trans: "Lembrar" },
                        { term: "Forget", trans: "Esquecer" },
                        { term: "Affect", trans: "Afetar" },
                        { term: "Influence", trans: "Influenciar" },
                        { term: "Express", trans: "Expressar" },
                        { term: "Listen (to)", trans: "Escutar / Ouvir" }
                    ]
                },
                {
                    title: "Music Vocabulary",
                    audio: "TTS: Music. Song. Artist. Band. Musician. Lyrics. Melody. Rhythm. Harmony. Instrument. Concert. Gig. Album.",
                    items: [
                        { term: "Music", trans: "Música" },
                        { term: "Song", trans: "Canção / Música (faixa)" },
                        { term: "Artist", trans: "Artista" },
                        { term: "Band", trans: "Banda" },
                        { term: "Musician", trans: "Músico(a)" },
                        { term: "Lyrics", trans: "Letra da música" },
                        { term: "Melody", trans: "Melodia" },
                        { term: "Rhythm", trans: "Ritmo" },
                        { term: "Harmony", trans: "Harmonia" },
                        { term: "Instrument", trans: "Instrumento" },
                        { term: "Concert / Gig", trans: "Concerto / Show" },
                        { term: "Album", trans: "Álbum" }
                    ]
                },
                {
                    title: "Music Genres",
                    audio: "TTS: Pop. Rock. Hip Hop. Rap. Electronic. EDM. Classical. Jazz. Blues. Country. Reggae. R&B. Soul. Funk. Samba. Bossa Nova. Indie. Metal.",
                    items: [
                        { term: "Pop", trans: "Pop" },
                        { term: "Rock", trans: "Rock" },
                        { term: "Hip Hop / Rap", trans: "Hip Hop / Rap" },
                        { term: "Electronic / EDM", trans: "Eletrônica" },
                        { term: "Classical", trans: "Clássica" },
                        { term: "Jazz", trans: "Jazz" },
                        { term: "Blues", trans: "Blues" },
                        { term: "Country", trans: "Country / Sertanejo" },
                        { term: "Reggae", trans: "Reggae" },
                        { term: "R&B", trans: "R&B" },
                        { term: "Soul", trans: "Soul" },
                        { term: "Funk", trans: "Funk" },
                        { term: "Samba", trans: "Samba" },
                        { term: "Bossa Nova", trans: "Bossa nova" },
                        { term: "Indie", trans: "Indie" },
                        { term: "Metal", trans: "Metal" }
                    ]
                },
                {
                    title: "Feelings & Well-being",
                    audio: "TTS: Relaxed. Energetic. Calm. Excited. Nostalgic. Benefit. Impact. Power. Well-being. Therapy. Emotion. Feeling. Mood. Happy. Happiness. Sad. Sadness.",
                    items: [
                        { term: "Relaxed", trans: "Relaxado(a)" },
                        { term: "Energetic", trans: "Energético(a)" },
                        { term: "Calm", trans: "Calmo(a)" },
                        { term: "Excited", trans: "Empolgado(a)" },
                        { term: "Nostalgic", trans: "Nostálgico(a)" },
                        { term: "Benefit", trans: "Benefício" },
                        { term: "Impact", trans: "Impacto" },
                        { term: "Power", trans: "Poder / Força" },
                        { term: "Well-being", trans: "Bem-estar" },
                        { term: "Therapy", trans: "Terapia" },
                        { term: "Emotion / Feeling", trans: "Emoção / Sentimento" },
                        { term: "Mood", trans: "Humor / Ânimo" },
                        { term: "Happy / Happiness", trans: "Feliz / Felicidade" },
                        { term: "Sad / Sadness", trans: "Triste / Tristeza" }
                    ]
                },
                {
                    title: "Abstract Suffixes",
                    audio: "TTS: ness. ship. hood. dom. ism.",
                    items: [
                        { term: "-ness", trans: "(Estado/Qualidade) Ex: Happiness, Sadness, Kindness" },
                        { term: "-ship", trans: "(Condição/Habilidade/Grupo) Ex: Friendship, Leadership, Partnership" },
                        { term: "-hood", trans: "(Período/Grupo) Ex: Childhood, Neighborhood, Motherhood" },
                        { term: "-dom", trans: "(Estado/Território) Ex: Freedom, Wisdom, Kingdom" },
                        { term: "-ism", trans: "(Doutrina/Prática) Ex: Realism, Criticism, Heroism" }
                    ]
                }
            ], // This closes the areas array for Step 2A

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs (Opinions)",
                    audio: "TTS: I agree that music helps us study. She disagrees with my opinion on Jazz. We believe music is the universal language. I think this melody is beautiful. Does this song make you feel sad? I suppose they will play their hit song. Do you remember that concert? Never forget the power of a good rhythm. Lyrics can affect our emotions. Use music to express your feelings. I listen to the radio every morning.",
                    items: [
                        { term: "Agree", sent: "I agree that music helps us study.", trans: "<span style='color:#0077b6'>Eu concordo que a música nos ajuda a estudar.</span>" },
                        { term: "Disagree", sent: "She disagrees with my opinion on Jazz.", trans: "<span style='color:#0077b6'>Ela discorda da minha opinião sobre Jazz.</span>" },
                        { term: "Believe", sent: "We believe music is the universal language.", trans: "<span style='color:#0077b6'>Acreditamos que a música é a linguagem universal.</span>" },
                        { term: "Think", sent: "I think this melody is beautiful.", trans: "<span style='color:#0077b6'>Eu acho que esta melodia é linda.</span>" },
                        { term: "Feel", sent: "Does this song make you feel sad?", trans: "<span style='color:#0077b6'>Esta música faz você se sentir triste?</span>" },
                        { term: "Suppose", sent: "I suppose they will play their hit song.", trans: "<span style='color:#0077b6'>Eu suponho que eles tocarão sua música de sucesso.</span>" },
                        { term: "Remember", sent: "Do you remember that concert?", trans: "<span style='color:#0077b6'>Você se lembra daquele show?</span>" },
                        { term: "Forget", sent: "Never forget the power of a good rhythm.", trans: "<span style='color:#0077b6'>Nunca esqueça o poder de um bom ritmo.</span>" },
                        { term: "Affect", sent: "Lyrics can affect our emotions.", trans: "<span style='color:#0077b6'>As letras podem afetar nossas emoções.</span>" },
                        { term: "Express", sent: "Use music to express your feelings.", trans: "<span style='color:#0077b6'>Use a música para expressar seus sentimentos.</span>" },
                        { term: "Listen", sent: "I listen to the radio every morning.", trans: "<span style='color:#0077b6'>Eu ouço rádio toda manhã.</span>" }
                    ]
                },
                {
                    title: "Music Vocab",
                    audio: "TTS: My favorite band is Starlight Echoes. These lyrics are very deep and poetic. The violin is a difficult instrument. I bought their first album yesterday.",
                    items: [
                        { term: "Band", sent: "My favorite band is Starlight Echoes.", trans: "<span style='color:#0077b6'>Minha banda favorita é Starlight Echoes.</span>" },
                        { term: "Lyrics", sent: "These lyrics are very deep and poetic.", trans: "<span style='color:#0077b6'>Estas letras são muito profundas e poéticas.</span>" },
                        { term: "Instrument", sent: "The violin is a difficult instrument.", trans: "<span style='color:#0077b6'>O violino é um instrumento difícil.</span>" },
                        { term: "Album", sent: "I bought their first album yesterday.", trans: "<span style='color:#0077b6'>Comprei o primeiro álbum deles ontem.</span>" }
                    ]
                },
                {
                    title: "Feelings & Suffixes",
                    audio: "TTS: Rock music makes me feel energetic. Music brings a lot of happiness to my life. Our friendship started at a music festival. This song reminds me of my childhood. We all want the freedom to choose our style.",
                    items: [
                        { term: "Energetic", sent: "Rock music makes me feel energetic.", trans: "<span style='color:#0077b6'>O rock me faz sentir energético.</span>" },
                        { term: "Happiness", sent: "Music brings a lot of happiness to my life.", trans: "<span style='color:#0077b6'>A música traz muita felicidade para minha vida.</span>" },
                        { term: "Friendship", sent: "Our friendship started at a music festival.", trans: "<span style='color:#0077b6'>Nossa amizade começou em um festival de música.</span>" },
                        { term: "Childhood", sent: "This song reminds me of my childhood.", trans: "<span style='color:#0077b6'>Esta música me lembra da minha infância.</span>" },
                        { term: "Freedom", sent: "We all want the freedom to choose our style.", trans: "<span style='color:#0077b6'>Todos queremos a liberdade de escolher nosso estilo.</span>" }
                    ]
                },
                {
                    title: "Conversational Phrases",
                    audio: "TTS: Celine: In my opinion, this singer is the best. Albert: I agree, her voice is incredible. Albert: Live music has a different energy. Celine: That's true, it hits much harder! Celine: Pop music is great for dancing. Albert: I see your point, but I prefer Jazz for relaxing. Albert: Classical music is too quiet. Celine: Maybe, but it requires great skill to play. Celine: Why are you crying? Albert: This song hits me hard; the lyrics are about my hometown. Albert: I feel much better after listening to Bossa Nova. Celine: Of course! Music improves well-being. Albert: Is your band ready for the gig? Celine: No, we still have a long way to go with our rehearsals.",
                    items: [
                        { 
                            term: "In my opinion", 
                            sent: "<b>Celine:</b> In my opinion, this singer is the best.<br><b>Albert:</b> I agree, her voice is incredible.", 
                            trans: "<span style='color:#0077b6'><b>Celine:</b> Na minha opinião, esta cantora é a melhor.<br><b>Albert:</b> Eu concordo, a voz dela é incrível.</span>" 
                        },
                        { 
                            term: "That's true", 
                            sent: "<b>Albert:</b> Live music has a different energy.<br><b>Celine:</b> That's true, it hits much harder!", 
                            trans: "<span style='color:#0077b6'><b>Albert:</b> Música ao vivo tem uma energia diferente.<br><b>Celine:</b> É verdade, atinge muito mais forte!</span>" 
                        },
                        { 
                            term: "I see your point", 
                            sent: "<b>Celine:</b> Pop music is great for dancing.<br><b>Albert:</b> I see your point, but I prefer Jazz for relaxing.", 
                            trans: "<span style='color:#0077b6'><b>Celine:</b> Música Pop é ótima para dançar.<br><b>Albert:</b> Entendo seu ponto, mas prefiro Jazz para relaxar.</span>" 
                        },
                        { 
                            term: "Maybe, but...", 
                            sent: "<b>Albert:</b> Classical music is too quiet.<br><b>Celine:</b> Maybe, but it requires great skill to play.", 
                            trans: "<span style='color:#0077b6'><b>Albert:</b> Música clássica é muito quieta.<br><b>Celine:</b> Talvez, mas requer grande habilidade para tocar.</span>" 
                        },
                        { 
                            term: "Hits me hard", 
                            sent: "<b>Celine:</b> Why are you crying?<br><b>Albert:</b> This song hits me hard; the lyrics are about my hometown.", 
                            trans: "<span style='color:#0077b6'><b>Celine:</b> Por que você está chorando?<br><b>Albert:</b> Esta música me atinge fortemente; a letra é sobre minha cidade natal.</span>" 
                        },
                        { 
                            term: "Improves well-being", 
                            sent: "<b>Albert:</b> I feel much better after listening to Bossa Nova.<br><b>Celine:</b> Of course! Music improves well-being.", 
                            trans: "<span style='color:#0077b6'><b>Albert:</b> Eu me sinto muito melhor depois de ouvir Bossa Nova.<br><b>Celine:</b> Com certeza! Música melhora o bem-estar.</span>" 
                        },
                        { 
                            term: "A long way to go", 
                            sent: "<b>Albert:</b> Is your band ready for the gig?<br><b>Celine:</b> No, we still have a long way to go with our rehearsals.", 
                            trans: "<span style='color:#0077b6'><b>Albert:</b> Sua banda está pronta para o show?<br><b>Celine:</b> Não, ainda temos um longo caminho a percorrer com nossos ensaios.</span>" 
                        }
                    ]
                }
            ], // This closes the exampleGroups array

            // 2C: Practice Drills (Expanded to 30 Vocabulary/Suffix Questions)
            drills: [
                {
                    type: "mcq",
                    q: "Do you _______ that music can be used as a form of therapy?",
                    options: [
                        {t: "Forget", c: false},
                        {t: "Believe", c: true},
                        {t: "Weigh", c: false},
                        {t: "Cost", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I often _______ to the lyrics very carefully before I judge a new song.",
                    options: [
                        {t: "Express", c: false},
                        {t: "Listen", c: true},
                        {t: "Affect", c: false},
                        {t: "Suppose", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She usually _______ with me; she thinks Heavy Metal is much too loud.",
                    options: [
                        {t: "Remembers", c: false},
                        {t: "Agrees", c: false},
                        {t: "Disagrees", c: true},
                        {t: "Forgets", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Please _______ about the artist's message in this specific track.",
                    options: [
                        {t: "Cost", c: false},
                        {t: "Think", c: true},
                        {t: "Weigh", c: false},
                        {t: "Supposing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A very good song can _______ your mood for the entire day.",
                    options: [
                        {t: "Affect", c: true},
                        {t: "Forget", c: false},
                        {t: "Believe", c: false},
                        {t: "Suppose", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ are the actual words that make up a song.",
                    options: [
                        {t: "Melodies", c: false},
                        {t: "Lyrics", c: true},
                        {t: "Instruments", c: false},
                        {t: "Albums", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ is a musical genre that originally started in New Orleans.",
                    options: [
                        {t: "Samba", c: false},
                        {t: "Pop", c: false},
                        {t: "Jazz", c: true},
                        {t: "Funk", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A large musical event where many people go to watch a band is a _______.",
                    options: [
                        {t: "Rhythm", c: false},
                        {t: "Concert", c: true},
                        {t: "Harmony", c: false},
                        {t: "Lyric", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The drum is considered a percussion _______.",
                    options: [
                        {t: "Genre", c: false},
                        {t: "Instrument", c: true},
                        {t: "Band", c: false},
                        {t: "Artist", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ music usually focuses on instruments and doesn't have a singer or lyrics.",
                    options: [
                        {t: "Hip Hop", c: false},
                        {t: "Rock", c: false},
                        {t: "Classical", c: true},
                        {t: "Reggae", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The state of being happy is called happi_______.",
                    options: [
                        {t: "-ship", c: false},
                        {t: "-ness", c: true},
                        {t: "-hood", c: false},
                        {t: "-dom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The period of time when you were a child is your child_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ism", c: false},
                        {t: "-hood", c: true},
                        {t: "-ship", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A good relationship between two friends is a friend_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ship", c: true},
                        {t: "-dom", c: false},
                        {t: "-ism", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The power or right to act, speak, or think freely is free_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-hood", c: false},
                        {t: "-ship", c: false},
                        {t: "-dom", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "A style of painting or literature that looks real is real_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ship", c: false},
                        {t: "-hood", c: false},
                        {t: "-ism", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "Which phrase expresses a strong emotional connection to a song?",
                    options: [
                        {t: "I suppose so.", c: false},
                        {t: "This song hits me hard.", c: true},
                        {t: "I disagree.", c: false},
                        {t: "Maybe, but...", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "What do you say when you partially agree but have a different idea?",
                    options: [
                        {t: "That's true.", c: false},
                        {t: "Maybe, but...", c: true},
                        {t: "I agree.", c: false},
                        {t: "In my opinion.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "If you want to say music is good for your health, you say: 'Music improves _______.'",
                    options: [
                        {t: "Nostalgia", c: false},
                        {t: "Well-being", c: true},
                        {t: "Boredom", c: false},
                        {t: "Lyrics", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "'In my _______, Rock is the best genre for a road trip.'",
                    options: [
                        {t: "Point", c: false},
                        {t: "Point of view", c: false},
                        {t: "Opinion", c: true},
                        {t: "Melody", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "When you want to say 'Eu entendo o que você quer dizer', you say:",
                    options: [
                        {t: "I forget you.", c: false},
                        {t: "I see your point.", c: true},
                        {t: "I believe you.", c: false},
                        {t: "That's true.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ music is known for having a very loud sound and heavy electric guitars.",
                    options: [
                        {t: "Classical", c: false},
                        {t: "Blues", c: false},
                        {t: "Metal", c: true},
                        {t: "Jazz", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who plays a musical instrument or is very good at music is a _______.",
                    options: [
                        {t: "Musician", c: true},
                        {t: "Band", c: false},
                        {t: "Lyricist", c: false},
                        {t: "Album", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The state of being sad is called sad_______.",
                    options: [
                        {t: "-ship", c: false},
                        {t: "-hood", c: false},
                        {t: "-ness", c: true},
                        {t: "-dom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A group of people living in the same place is a neighbor_______.",
                    options: [
                        {t: "-ship", c: false},
                        {t: "-hood", c: true},
                        {t: "-dom", c: false},
                        {t: "-ness", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The system of thoughts and work of a critic is called criti_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ship", c: false},
                        {t: "-ism", c: true},
                        {t: "-hood", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "If your band still needs many more rehearsals, you have 'A _______ way to go.'",
                    options: [
                        {t: "Short", c: false},
                        {t: "Long", c: true},
                        {t: "Fast", c: false},
                        {t: "Boring", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Listening to the Blues often makes me feel _______ and quiet.",
                    options: [
                        {t: "Excited", c: false},
                        {t: "Relaxed", c: true},
                        {t: "Energetic", c: false},
                        {t: "Loud", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A sequence of musical notes that are very satisfying to hear is the _______.",
                    options: [
                        {t: "Rhythm", c: false},
                        {t: "Harmony", c: false},
                        {t: "Melody", c: true},
                        {t: "Gig", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The state of being partners in a business or project is a partner_______.",
                    options: [
                        {t: "-ship", c: true},
                        {t: "-ness", c: false},
                        {t: "-hood", c: false},
                        {t: "-dom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A collection of several songs released together by an artist is an _______.",
                    options: [
                        {t: "Instrument", c: false},
                        {t: "Album", c: true},
                        {t: "Gig", c: false},
                        {t: "Rhythm", c: false}
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
                    title: "Past Perfect Simple",
                    audio: "TTS: We use the Past Perfect Simple to show that one action happened before another action in the past. Structure: had plus past participle. Example: When I arrived, the concert had already started.",
                    explanation: "Focuses on a finished action that occurred before another point in the past.<br><br><span style='color:#0077b6; font-style:italic;'>(Foca em uma ação concluída que ocorreu antes de outro ponto no passado. Estrutura: had + Particípio Passado.)</span>",
                    samples: [
                        { en: "When I arrived, the concert **had** already **started**.", pt: "<span style='color:#0077b6'>Quando cheguei, o show já tinha começado.</span>" },
                        { en: "The UN **had adopted** the SDGs before the summit ended.", pt: "<span style='color:#0077b6'>A ONU tinha adotado os ODS antes do fim da cúpula.</span>" },
                        { en: "Celine started the project because she **had seen** the results.", pt: "<span style='color:#0077b6'>Celine começou o projeto porque tinha visto os resultados.</span>" }
                    ]
                },
                {
                    title: "Past Perfect Continuous",
                    audio: "TTS: This tense focuses on the duration of an action before another past point. Structure: had been plus verb ing. Example: She had been listening to that album for hours before she fell asleep.",
                    explanation: "Emphasizes how long an action was in progress before another event happened. Structure: had + been + verb-ing.<br><br><span style='color:#0077b6; font-style:italic;'>(Enfatiza por quanto tempo uma ação esteve em progresso antes de outro evento. Estrutura: had + been + verbo com -ing.)</span>",
                    samples: [
                        { en: "She **had been listening** to that album for hours before she fell asleep.", pt: "<span style='color:#0077b6'>Ela estivera ouvindo aquele álbum por horas antes de cair no sono.</span>" },
                        { en: "Albert **had been studying** Jazz all week before he found the record.", pt: "<span style='color:#0077b6'>Albert estivera estudando Jazz a semana toda antes de encontrar o disco.</span>" },
                        { en: "Volunteers **had been cleaning** the park all morning when it rained.", pt: "<span style='color:#0077b6'>Os voluntários estiveram limpando o parque a manhã toda quando choveu.</span>" }
                    ]
                },
                {
                    title: "Relative Clauses (Who, Which, That)",
                    audio: "TTS: Relative clauses add detail without starting a new sentence. Use WHO for people. Use WHICH for things or animals. Use THAT for both people and things.",
                    explanation: "Used to provide essential information about a subject.<br><br><span style='color:#0077b6; font-style:italic;'>(Usado para fornecer informações essenciais sobre um sujeito sem começar uma nova frase.)</span>",
                    samples: [
                        { en: "He is the musician **who** plays the violin.", pt: "<span style='color:#0077b6'>Ele é o músico que toca violino. (Who - People)</span>" },
                        { en: "This is the song **which** hits me hard.", pt: "<span style='color:#0077b6'>Esta é a música que me atinge fortemente. (Which - Things)</span>" },
                        { en: "I like bands **that** write their own lyrics.", pt: "<span style='color:#0077b6'>Eu gosto de bandas que escrevem suas próprias letras. (That - Both)</span>" }
                    ]
                },
                {
                    title: "Relative Clauses (Whose, Where, When, Whom)",
                    audio: "TTS: Use WHOSE for possession. Use WHERE for places. Use WHEN for time. Use WHOM for people as a formal object.",
                    explanation: "Advanced relative pronouns for specific contexts.<br><br><span style='color:#0077b6; font-style:italic;'>(Pronomes relativos avançados para contextos específicos.)</span>",
                    samples: [
                        { en: "She is the artist **whose** voice is amazing.", pt: "<span style='color:#0077b6'>Ela é a artista cuja voz é incrível. (Whose - Possession)</span>" },
                        { en: "That’s the park **where** they had the concert.", pt: "<span style='color:#0077b6'>Aquele é o parque onde eles fizeram o show. (Where - Places)</span>" },
                        { en: "I remember the day **when** I first heard Jazz.", pt: "<span style='color:#0077b6'>Eu me lembro do dia quando ouvi Jazz pela primeira vez. (When - Time)</span>" },
                        { en: "The singer **whom** I admire is from Brazil.", pt: "<span style='color:#0077b6'>O cantor a quem admiro é do Brasil. (Whom - Formal Object)</span>" }
                    ]
                },
                 {
                    title: "Suffixes for Abstract Nouns",
                    audio: "TTS: Suffixes turn adjectives or nouns into abstract concepts. Use ness for state or quality, like happiness. Use ship for condition or skill, like friendship. Use hood for periods of time, like childhood. Use dom for status or territory, like freedom. Use ism for doctrines or practices, like realism.",
                    explanation: "Suffixes are added to the end of words to transform them into abstract concepts.<br><br><span style='color:#0077b6; font-style:italic;'>(Sufixos são adicionados ao final das palavras para transformá-las em conceitos abstratos.)</span>",
                    samples: [
                        { en: "Happy → Happi**ness**; Sad → Sad**ness**", pt: "<span style='color:#0077b6'>(Estado ou qualidade)</span>" },
                        { en: "Friend → Friend**ship**; Partner → Partner**ship**", pt: "<span style='color:#0077b6'>(Condição ou habilidade)</span>" },
                        { en: "Child → Child**hood**; Neighbor → Neighbor**hood**", pt: "<span style='color:#0077b6'>(Período de tempo ou grupo)</span>" },
                        { en: "Free → Free**dom**; Kingdom", pt: "<span style='color:#0077b6'>(Estado, classificação ou território)</span>" },
                        { en: "Real → Real**ism**; Critic → Critic**ism**", pt: "<span style='color:#0077b6'>(Doutrina, crença ou prática)</span>" }
                    ]
                },
                {
                    title: "Linking Words: Contrast",
                    audio: "TTS: Contrast words connect opposing ideas. Use BUT between clauses. Use ALTHOUGH at the start or middle. Use HOWEVER to start a new sentence. Use DESPITE before a noun or verb ing. Use UNLIKE to compare differences.",
                    explanation: "Used to connect opposing ideas or show unexpected results.<br><br><span style='color:#0077b6; font-style:italic;'>(Usados para conectar ideias opostas ou mostrar resultados inesperados.)</span>",
                    samples: [
                        { en: "I like Rock, **but** I prefer Samba.", pt: "<span style='color:#0077b6'>Eu gosto de Rock, mas prefiro Samba.</span>" },
                        { en: "**Although** it’s an old song, it’s still great.", pt: "<span style='color:#0077b6'>Embora seja uma música antiga, ainda é ótima.</span>" },
                        { en: "Jazz is complex. **However**, it is very relaxing.", pt: "<span style='color:#0077b6'>Jazz é complexo. No entanto, é muito relaxante.</span>" },
                        { en: "**Despite** the loud noise, I fell asleep.", pt: "<span style='color:#0077b6'>Apesar do barulho alto, eu caí no sono.</span>" },
                        { en: "**Unlike** Pop, Metal is often aggressive.", pt: "<span style='color:#0077b6'>Diferente do Pop, o Metal é frequentemente agressivo.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Concert Memories",
                    audio: "audio/em1-2-6/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "I had already bought the tickets when you called.", 
                            pt: "<span style='color:#0077b6'>Eu já tinha comprado os ingressos quando você ligou. (Past Perfect Simple)</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "I'm sorry! I had been waiting in line for hours before I gave up.", 
                            pt: "<span style='color:#0077b6'>Sinto muito! Eu estivera esperando na fila por horas antes de desistir. (Past Perfect Continuous)</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Describing Favorites",
                    audio: "audio/em1-2-6/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "This is the artist whose lyrics I love. He is the one who plays five instruments.", 
                            pt: "<span style='color:#0077b6'>Este é o artista cujas letras eu amo. Ele é aquele que toca cinco instrumentos. (Relative Clauses)</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "I know him! He played at the studio where my sister works.", 
                            pt: "<span style='color:#0077b6'>Eu o conheço! Ele tocou no estúdio onde minha irmã trabalha.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 3: Opinions and Feelings",
                    audio: "audio/em1-2-6/step3_dialogue3.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Rock music gives me a sense of freedom. However, it causes sadness for my neighbors!", 
                            pt: "<span style='color:#0077b6'>O rock me dá uma sensação de liberdade. No entanto, causa tristeza para meus vizinhos!</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Despite their complaints, you should keep playing! Musical happiness is important.", 
                            pt: "<span style='color:#0077b6'>Apesar das reclamações deles, você deveria continuar tocando! Felicidade musical é importante.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Practice (Expanded to 30 Grammar Questions)
            grammarDrills: [
                // --- Past Perfect Simple vs Continuous ---
                {
                    type: "mcq",
                    q: "(Past Perfect) By the time the concert finished, Celine _______ for three hours.",
                    options: [
                        {t: "had been singing", c: true},
                        {t: "sang", c: false},
                        {t: "has sung", c: false},
                        {t: "was singing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Past Perfect) The band _______ playing before we arrived at the venue.",
                    options: [
                        {t: "has stopped", c: false},
                        {t: "had stopped", c: true},
                        {t: "stops", c: false},
                        {t: "stopping", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Continuous Duration) I was tired because I _______ to Electronic music all night.",
                    options: [
                        {t: "listen", c: false},
                        {t: "had been listening", c: true},
                        {t: "have listened", c: false},
                        {t: "am listening", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Result in Past) When we met, I _______ already _______ the guitar for years.",
                    options: [
                        {t: "had / played", c: true},
                        {t: "have / played", c: false},
                        {t: "was / playing", c: false},
                        {t: "did / play", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She _______ the lyrics before the song started.",
                    options: [
                        {t: "had memorized", c: true},
                        {t: "memorizes", c: false},
                        {t: "has memorized", c: false},
                        {t: "was memorizing", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "They _______ for the gig all week when the singer got sick.",
                    options: [
                        {t: "had been rehearsing", c: true},
                        {t: "have rehearsed", c: false},
                        {t: "rehearse", c: false},
                        {t: "were rehearsed", c: false}
                    ]
                },

                // --- Relative Clauses ---
                {
                    type: "mcq",
                    q: "(Person) Starlight Echoes is the band _______ won the award.",
                    options: [
                        {t: "which", c: false},
                        {t: "who", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Possession) That is the girl _______ father is a famous musician.",
                    options: [
                        {t: "who", c: false},
                        {t: "whose", c: true},
                        {t: "which", c: false},
                        {t: "that", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Time) 1960 was the year _______ Bossa Nova became global.",
                    options: [
                        {t: "where", c: false},
                        {t: "when", c: true},
                        {t: "which", c: false},
                        {t: "who", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Place) Do you know the place _______ they record Indie music?",
                    options: [
                        {t: "where", c: true},
                        {t: "which", c: false},
                        {t: "who", c: false},
                        {t: "when", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Thing - Defining) I like songs _______ have a fast rhythm.",
                    options: [
                        {t: "who", c: false},
                        {t: "that", c: true},
                        {t: "where", c: false},
                        {t: "whose", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Thing) This is the album _______ changed my life.",
                    options: [
                        {t: "who", c: false},
                        {t: "where", c: false},
                        {t: "which", c: true},
                        {t: "whom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "(Formal Object) The singer _______ I admire is from Brazil.",
                    options: [
                        {t: "which", c: false},
                        {t: "whom", c: true},
                        {t: "whose", c: false},
                        {t: "where", c: false}
                    ]
                },

                // --- Suffixes ---
                {
                    type: "mcq",
                    q: "The state of being happy is called happi_______.",
                    options: [
                        {t: "-ship", c: false},
                        {t: "-ness", c: true},
                        {t: "-hood", c: false},
                        {t: "-dom", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The period when you were a child is your child_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ism", c: false},
                        {t: "-hood", c: true},
                        {t: "-ship", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A good relationship between friends is a friend_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ship", c: true},
                        {t: "-dom", c: false},
                        {t: "-ism", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The power to be free is your free_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-hood", c: false},
                        {t: "-ship", c: false},
                        {t: "-dom", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "A style of painting that looks real is real_______.",
                    options: [
                        {t: "-ness", c: false},
                        {t: "-ship", c: false},
                        {t: "-hood", c: false},
                        {t: "-ism", c: true}
                    ]
                },
                {
                    type: "mcq",
                    q: "The quality of being sad is sad_______.",
                    options: [
                        {t: "-ness", c: true},
                        {t: "-ship", c: false},
                        {t: "-dom", c: false},
                        {t: "-ism", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The practice of judging the merits of something is critic_______.",
                    options: [
                        {t: "-ism", c: true},
                        {t: "-hood", c: false},
                        {t: "-ship", c: false},
                        {t: "-ness", c: false}
                    ]
                },

                // --- Linking Words (Contrast) ---
                {
                    type: "mcq",
                    q: "_______ the melody is sad, I really like it.",
                    options: [
                        {t: "Although", c: true},
                        {t: "But", c: false},
                        {t: "However", c: false},
                        {t: "Unlike", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I enjoy Jazz. _______, my brother hates it.",
                    options: [
                        {t: "Despite", c: false},
                        {t: "However", c: true},
                        {t: "Although", c: false},
                        {t: "Unlike", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ classical music, Hip Hop is very fast.",
                    options: [
                        {t: "But", c: false},
                        {t: "Unlike", c: true},
                        {t: "However", c: false},
                        {t: "Although", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "They went to the gig _______ the rain.",
                    options: [
                        {t: "despite", c: true},
                        {t: "although", c: false},
                        {t: "however", c: false},
                        {t: "but", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I play the piano, _______ I don't sing.",
                    options: [
                        {t: "but", c: true},
                        {t: "despite", c: false},
                        {t: "unlike", c: false},
                        {t: "however", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ the loud noise, the baby slept.",
                    options: [
                        {t: "Despite", c: true},
                        {t: "Although", c: false},
                        {t: "However", c: false},
                        {t: "But", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The concert was long. _______, it was exciting.",
                    options: [
                        {t: "However", c: true},
                        {t: "Despite", c: false},
                        {t: "Although", c: false},
                        {t: "Unlike", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ my friends, I prefer staying home to listen to music.",
                    options: [
                        {t: "Unlike", c: true},
                        {t: "Although", c: false},
                        {t: "But", c: false},
                        {t: "However", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ he is a great musician, he is very shy.",
                    options: [
                        {t: "Although", c: true},
                        {t: "Despite", c: false},
                        {t: "However", c: false},
                        {t: "Unlike", c: false}
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
                    text: "Have you seen the musician who plays the saxophone?<br><small style='color:#0077b6'>(Você viu o músico que toca saxofone?)</small>", 
                    audio: "TTS: Have you seen the musician who plays the saxophone?", 
                    arrow: "↗" 
                },
                { 
                    text: "By the time I arrived, he had already finished his set.<br><small style='color:#0077b6'>(Quando eu cheguei, ele já tinha terminado a apresentação dele.)</small>", 
                    audio: "TTS: By the time I arrived, he had already finished his set.", 
                    arrow: "↘" 
                },
                { 
                    text: "Although I like the rhythm, I prefer the lyrics.<br><small style='color:#0077b6'>(Embora eu goste do ritmo, prefiro as letras.)</small>", 
                    audio: "TTS: Although I like the rhythm, I prefer the lyrics.", 
                    arrow: "↘" 
                },
                { 
                    text: "Despite the loud crowd, his performance was pure happiness.<br><small style='color:#0077b6'>(Apesar da multidão barulhenta, a performance dele foi pura felicidade.)</small>", 
                    audio: "TTS: Despite the loud crowd, his performance was pure happiness.", 
                    arrow: "↘" 
                },
                { 
                    text: "Is that the studio where they recorded the album?<br><small style='color:#0077b6'>(Aquele é o estúdio onde eles gravaram o álbum?)</small>", 
                    audio: "TTS: Is that the studio where they recorded the album?", 
                    arrow: "↗" 
                },
                { 
                    text: "It is! It’s the place that changed their childhood memories.<br><small style='color:#0077b6'>(É sim! É o lugar que mudou as memórias de infância deles.)</small>", 
                    audio: "TTS: It is! It’s the place that changed their childhood memories.", 
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
                    instruction: "Listen to Albert talking about his visit to a record store and type the missing words.",
                    audio: "TTS: I went to the store which sells vintage vinyl. I had been looking for that Indie album for weeks! However, when I found it, someone had already bought it. My sadness was huge, but I bought a Jazz record instead.",
                    text: "I went to the store [which] sells vintage vinyl. I [had been looking] for that Indie album for weeks! [However], when I found it, someone had [already] bought it. My [sadness] was huge, but I bought a Jazz record instead."
                },
                // Drill 2: Dropdown (MP3) - Combined context
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Celine and a Musician and choose the correct options.",
                    audio: "audio/em1-2-6/step5_drill2.mp3",
                    questions: [
                        { q: "Celine: Sir, [who | whose | which] wrote the lyrics for this song?", a: "who" },
                        { q: "Musician: I wrote them! I [had been studying | studied | have studied] poetry for years before I started the band.", a: "had been studying" },
                        { q: "Celine: It’s beautiful. [Although | Despite | But] the melody is simple, the impact is great.", a: "Although" },
                        { q: "Musician: Thank you! Musical [freedom | friendship | kingdom] is my goal.", a: "freedom" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the logical answer.",
                    audio: "TTS: Had the concert started when you reached the park?",
                    options: [
                        { t: "No, unlike Pop, I like Rock.", c: false },
                        { t: "Yes, the band had already played two songs.", c: true },
                        { t: "I see your point about the harmony.", c: false },
                        { t: "My childhood was full of music.", c: false }
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
                    title: "Narration: The Starlight Echoes",
                    audio: "TTS: The band Starlight Echoes had been playing in small clubs for a decade before they became famous. They are a group which blends Rock and Electronic music perfectly. Their lead singer, whose voice is very powerful, writes lyrics about freedom and friendship. Although they faced many challenges in the beginning, their dedication brought them happiness. Last night, they performed at the stadium where they had first seen a concert as children. || audio/em1-2-6/p6_text1.mp3",
                    body: "The band \"Starlight Echoes\" had been playing in small clubs for a decade before they became famous. They are a group which blends Rock and Electronic music perfectly. Their lead singer, whose voice is very powerful, writes lyrics about freedom and friendship. Although they faced many challenges in the beginning, their dedication brought them happiness. Last night, they performed at the stadium where they had first seen a concert as children.",
                    questions: [
                        { 
                            q: "How long had the band been playing before they were famous?", 
                            options: [ 
                                {t: "For one year.", c: false}, 
                                {t: "For ten years.", c: true}, 
                                {t: "Since last week.", c: false}, 
                                {t: "Since childhood.", c: false} 
                            ] 
                        },
                        { 
                            q: "What does the lead singer write about?", 
                            options: [ 
                                {t: "Only about electronic music.", c: false}, 
                                {t: "Freedom and friendship.", c: true}, 
                                {t: "How to play instruments.", c: false}, 
                                {t: "Sadness and pain.", c: false} 
                            ] 
                        },
                        { 
                            q: "Where did they perform last night?", 
                            options: [ 
                                {t: "In a small club.", c: false}, 
                                {t: "At the stadium where they saw their first concert.", c: true}, 
                                {t: "At a local school.", c: false}, 
                                {t: "In a park.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "Dialogue: Tastes and Contrast",
                    audio: "audio/em1-2-6/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, I had been listening to your Pop playlist for an hour before I changed it.<br><b>Celine:</b> Why? Did you forget how catchy the rhythm is?<br><b>Albert:</b> Maybe, but I prefer Jazz. Unlike Pop, Jazz has complex harmonies that help me relax.<br><b>Celine:</b> I understand your point of view. However, I find classical instruments a bit boring.<br><b>Albert:</b> That's because you had never heard this musician who plays the electric cello!<br><b>Celine:</b> That's true, I haven't. Despite my taste, I believe every genre has its benefit.",
                    questions: [
                        { 
                            q: "How long had Albert been listening to the playlist?", 
                            options: [ 
                                {t: "For one hour.", c: true}, 
                                {t: "Since this morning.", c: false}, 
                                {t: "He didn't listen to it.", c: false}, 
                                {t: "For ten minutes.", c: false} 
                            ] 
                        },
                        { 
                            q: "Why does Albert prefer Jazz?", 
                            options: [ 
                                {t: "Because it is faster than Pop.", c: false}, 
                                {t: "Because of its complex harmonies.", c: true}, 
                                {t: "Because he likes the singer.", c: false}, 
                                {t: "Because it is loud.", c: false} 
                            ] 
                        },
                        { 
                            q: "What is Celine's opinion on classical instruments?", 
                            options: [ 
                                {t: "She thinks they are energetic.", c: false}, 
                                {t: "She finds them a bit boring.", c: true}, 
                                {t: "She thinks they are the best.", c: false}, 
                                {t: "She loves the rhythm.", c: false} 
                            ] 
                        }
                    ]
                },
                {
                    title: "Description: A Nostalgic Night",
                    audio: "TTS: This is a photo of the place where I spent my childhood. It is a small neighborhood in Brazil. In the center, there is a square where a local band used to play Samba every Sunday. Before the digital age had changed everything, people had been gathering there to dance and share kindness. Although times are different now, the well-being of the people remains the same. It’s a memory that always brings me happiness. || audio/em1-2-6/p6_text3.mp3",
                    body: "This is a photo of the place where I spent my childhood. It is a small neighborhood in Brazil. In the center, there is a square where a local band used to play Samba every Sunday. Before the digital age had changed everything, people had been gathering there to dance and share kindness. Although times are different now, the well-being of the people remains the same. It’s a memory that always brings me happiness.",
                    questions: [
                        { 
                            q: "What genre of music used to play in the square?", 
                            options: [ 
                                {t: "Rock.", c: false}, 
                                {t: "Samba.", c: true}, 
                                {t: "Jazz.", c: false}, 
                                {t: "Pop.", c: false} 
                            ] 
                        },
                        { 
                            q: "What happened before the digital age changed things?", 
                            options: [ 
                                {t: "People had been gathering to dance.", c: true}, 
                                {t: "People had been buying vinyl records.", c: false}, 
                                {t: "The band had stopped playing.", c: false}, 
                                {t: "People stayed home.", c: false} 
                            ] 
                        },
                        { 
                            q: "What does the memory bring to the narrator?", 
                            options: [ 
                                {t: "Sadness.", c: false}, 
                                {t: "Happiness.", c: true}, 
                                {t: "Boredom.", c: false}, 
                                {t: "Anger.", c: false} 
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
                // Drill 1: Match the Meanings (Suffixes)
                {
                    type: "matching",
                    instruction: "Match the noun with its correct suffix meaning.<br><small style='color:#0077b6'>(Relacione o substantivo com o significado do seu sufixo.)</small>",
                    pairs: [
                        { left: "Kindness", right: "State or Quality", val: "1" },
                        { left: "Friendship", right: "Condition/Skill", val: "2" },
                        { left: "Childhood", right: "Period of time", val: "3" },
                        { left: "Freedom", right: "State or Rank", val: "4" }
                    ]
                },

                // Drill 2: Dropdown (Grammar: Relative Pronouns)
                {
                    type: "dropdown",
                    instruction: "Choose the correct pronoun to complete the sentence.<br><small style='color:#0077b6'>(Escolha o pronome correto para completar a frase.)</small>",
                    questions: [
                        { q: "That is the singer [who | which | where] wrote those poetic lyrics.", a: "who" },
                        { q: "I love the guitar [who | which | whose] my father gave me.", a: "which" },
                        { q: "This is the artist [who | whose | when] album reached number one.", a: "whose" },
                        { q: "1960 was the year [where | when | which] Bossa Nova became global.", a: "when" }
                    ]
                },

                // Drill 3: Dropdown (Linking Words)
                {
                    type: "dropdown",
                    instruction: "Choose the correct contrast word.<br><small style='color:#0077b6'>(Escolha a palavra de contraste correta.)</small>",
                    questions: [
                        { q: "[Unlike | However | Although] Pop music, Indie is often produced by small labels.", a: "Unlike" },
                        { q: "[Despite | However | But] the loud rhythm, I felt very relaxed.", a: "Despite" },
                        { q: "I like the song. [However | Although | Unlike], I don't agree with the message.", a: "However" },
                        { q: "[Although | But | Unlike] she was tired, she performed a great concert.", a: "Although" }
                    ]
                },

                // Drill 4: Word Order (Past Perfect)
                {
                    type: "word-order",
                    instruction: "Organize the words to form a correct Past Perfect sentence.<br><small style='color:#0077b6'>(Organize as palavras para formar uma frase correta no Past Perfect.)</small>",
                    sentence: "finished / They / had / recording / the / before / album / Monday / .",
                    correct: "They had finished recording the album before Monday ."
                },
                {
                    type: "word-order",
                    instruction: "Organize the words to form a correct Past Perfect sentence.<br><small style='color:#0077b6'>(Organize as palavras para formar uma frase correta no Past Perfect.)</small>",
                    sentence: "been / listening / I / for / had / hours / to / music / .",
                    correct: "I had been listening to music for hours ."
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island - Write a short paragraph (5-6 sentences) about a song or an artist that \"hits you hard\". Describe when you first heard it and why it's important for your well-being.<br><br><small><span style='color:#0077b6'>(Ilha de Idiomas - Escreva um pequeno parágrafo (5-6 frases) sobre uma música ou artista que \"te toca forte\". Descreva quando você ouviu pela primeira vez e por que é importante para o seu bem-estar.)</span></small>",
            example: "\"There is a song by Starlight Echoes which I love. I had never heard such a beautiful melody before. It gives me a sense of happiness every time I listen to it. I remember the day when I found their album. It improved my well-being during a difficult time in my childhood.\"<br><br><small><span style='color:#0077b6'>(\"Tem uma música do Starlight Echoes que eu amo. Eu nunca tinha ouvido uma melodia tão bonita antes. Ela me dá uma sensação de felicidade toda vez que a ouço. Lembro-me do dia em que encontrei o álbum deles. Melhorou meu bem-estar durante um período difícil da minha infância.\")</span></small>",
            prompts: [
                "Use at least one Relative Clause (who, which, when). <br><small><span style='color:#0077b6'>(Use pelo menos uma Oração Relativa).</span></small>",
                "Use one Past Perfect verb (had done, had been doing). <br><small><span style='color:#0077b6'>(Use um verbo no Past Perfect).</span></small>",
                "Use one Suffix word (-ness, -ship, -hood). <br><small><span style='color:#0077b6'>(Use uma palavra com sufixo).</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS (Part 1: Verbs, Music, Genres)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // Area 1: Verbs (Opinions)
                { term: "Agree", definition: "To have the same opinion.", defTrans: "Concordar", example: "I agree with your musical taste.", audioFront: "TTS: Agree", audioBack: "TTS: I agree with your musical taste." },
                { term: "Disagree", definition: "To have a different opinion.", defTrans: "Discordar", example: "He disagrees that Jazz is boring.", audioFront: "TTS: Disagree", audioBack: "TTS: He disagrees that Jazz is boring." },
                { term: "Believe", definition: "To accept something as true.", defTrans: "Acreditar", example: "We believe music can change the world.", audioFront: "TTS: Believe", audioBack: "TTS: We believe music can change the world." },
                { term: "Think", definition: "To have a particular opinion.", defTrans: "Pensar / Achar", example: "I think the rhythm is perfect.", audioFront: "TTS: Think", audioBack: "TTS: I think the rhythm is perfect." },
                { term: "Feel", definition: "To experience an emotion.", defTrans: "Sentir", example: "This melody makes me feel relaxed.", audioFront: "TTS: Feel", audioBack: "TTS: This melody makes me feel relaxed." },
                { term: "Suppose", definition: "To think that something is likely to be true.", defTrans: "Supor", example: "I suppose they will play an encore.", audioFront: "TTS: Suppose", audioBack: "TTS: I suppose they will play an encore." },
                { term: "Remember", definition: "To bring to one's mind.", defTrans: "Lembrar", example: "Do you remember our first gig?", audioFront: "TTS: Remember", audioBack: "TTS: Do you remember our first gig?" },
                { term: "Forget", definition: "To fail to remember.", defTrans: "Esquecer", example: "Don't forget to practice the guitar.", audioFront: "TTS: Forget", audioBack: "TTS: Don't forget to practice the guitar." },
                { term: "Affect", definition: "To make a difference to something.", defTrans: "Afetar", example: "Lyrics often affect our mood.", audioFront: "TTS: Affect", audioBack: "TTS: Lyrics often affect our mood." },
                { term: "Influence", definition: "To have an effect on character or behavior.", defTrans: "Influenciar", example: "Bossa Nova influenced many artists.", audioFront: "TTS: Influence", audioBack: "TTS: Bossa Nova influenced many artists." },
                { term: "Express", definition: "To convey a thought or feeling.", defTrans: "Expressar", example: "Singers express deep emotions.", audioFront: "TTS: Express", audioBack: "TTS: Singers express deep emotions." },
                { term: "Listen (to)", definition: "To give attention to sound.", defTrans: "Escutar / Ouvir", example: "I listen to music while studying.", audioFront: "TTS: Listen", audioBack: "TTS: I listen to music while studying." },

                // Area 2: Music Vocabulary
                { term: "Music", definition: "The art of sounds and silence.", defTrans: "Música", example: "Music is essential for well-being.", audioFront: "TTS: Music", audioBack: "TTS: Music is essential for well-being." },
                { term: "Song", definition: "A short piece of music with words.", defTrans: "Canção / Música", example: "This is my favorite song.", audioFront: "TTS: Song", audioBack: "TTS: This is my favorite song." },
                { term: "Artist", definition: "A person who creates music.", defTrans: "Artista", example: "The artist writes beautiful poetry.", audioFront: "TTS: Artist", audioBack: "TTS: The artist writes beautiful poetry." },
                { term: "Band", definition: "A group of musicians.", defTrans: "Banda", example: "The band is going on tour.", audioFront: "TTS: Band", audioBack: "TTS: The band is going on tour." },
                { term: "Musician", definition: "A person who plays an instrument.", defTrans: "Músico(a)", example: "He is a talented musician.", audioFront: "TTS: Musician", audioBack: "TTS: He is a talented musician." },
                { term: "Lyrics", definition: "The words of a song.", defTrans: "Letra da música", example: "I love the lyrics of this track.", audioFront: "TTS: Lyrics", audioBack: "TTS: I love the lyrics of this track." },
                { term: "Melody", definition: "A sequence of musical notes.", defTrans: "Melodia", example: "The melody is very catchy.", audioFront: "TTS: Melody", audioBack: "TTS: The melody is very catchy." },
                { term: "Rhythm", definition: "A repeated pattern of sound.", defTrans: "Ritmo", example: "The rhythm makes me dance.", audioFront: "TTS: Rhythm", audioBack: "TTS: The rhythm makes me dance." },
                { term: "Harmony", definition: "Combination of musical notes.", defTrans: "Harmonia", example: "The harmony in this choir is perfect.", audioFront: "TTS: Harmony", audioBack: "TTS: The harmony in this choir is perfect." },
                { term: "Instrument", definition: "An object used for making music.", defTrans: "Instrumento", example: "Which instrument do you play?", audioFront: "TTS: Instrument", audioBack: "TTS: Which instrument do you play?" },
                { term: "Concert / Gig", definition: "A live musical performance.", defTrans: "Concerto / Show", example: "The gig was sold out.", audioFront: "TTS: Concert or Gig", audioBack: "TTS: The gig was sold out." },
                { term: "Album", definition: "A collection of songs.", defTrans: "Álbum", example: "Their new album is number one.", audioFront: "TTS: Album", audioBack: "TTS: Their new album is number one." },

                // Area 3: Genres
                { term: "Pop", definition: "Modern popular music.", defTrans: "Pop", example: "Pop music is on every radio.", audioFront: "TTS: Pop", audioBack: "TTS: Pop music is on every radio." },
                { term: "Rock", definition: "Music with a strong beat and guitars.", defTrans: "Rock", example: "Rock has an energetic sound.", audioFront: "TTS: Rock", audioBack: "TTS: Rock has an energetic sound." },
                { term: "Hip Hop", definition: "Music with rhythmic speech.", defTrans: "Hip Hop", example: "Hip hop focuses on rhyme.", audioFront: "TTS: Hip Hop", audioBack: "TTS: Hip hop focuses on rhyme." },
                { term: "Electronic", definition: "Music produced by technology.", defTrans: "Eletrônica", example: "Electronic music uses computers.", audioFront: "TTS: Electronic", audioBack: "TTS: Electronic music uses computers." },
                { term: "Classical", definition: "Traditional, established music.", defTrans: "Clássica", example: "Mozart is a classical composer.", audioFront: "TTS: Classical", audioBack: "TTS: Mozart is a classical composer." },
                { term: "Jazz", definition: "Genre known for improvisation.", defTrans: "Jazz", example: "Jazz relies on improvisation.", audioFront: "TTS: Jazz", audioBack: "TTS: Jazz relies on improvisation." },
                { term: "Blues", definition: "Genre often expressing sadness.", defTrans: "Blues", example: "Blues expresses deep emotion.", audioFront: "TTS: Blues", audioBack: "TTS: Blues expresses deep emotion." },
                { term: "Country", definition: "Folk-based storytelling music.", defTrans: "Sertanejo / Country", example: "Country music tells stories.", audioFront: "TTS: Country", audioBack: "TTS: Country music tells stories." },
                { term: "Reggae", definition: "Music with a relaxed beat.", defTrans: "Reggae", example: "Reggae is very relaxed.", audioFront: "TTS: Reggae", audioBack: "TTS: Reggae is very relaxed." },
                { term: "R&B", definition: "Rhythm and Blues.", defTrans: "R&B", example: "R&B has a soulful sound.", audioFront: "TTS: R&B", audioBack: "TTS: R&B has a soulful sound." },
                { term: "Soul", definition: "Deeply emotional music.", defTrans: "Soul", example: "Soul music is powerful.", audioFront: "TTS: Soul", audioBack: "TTS: Soul music is powerful." },
                { term: "Funk", definition: "Music with a strong dance rhythm.", defTrans: "Funk", example: "Funk is great for dancing.", audioFront: "TTS: Funk", audioBack: "TTS: Funk is great for dancing." },
                { term: "Samba", definition: "Brazilian dance and music genre.", defTrans: "Samba", example: "Samba is the heart of Brazil.", audioFront: "TTS: Samba", audioBack: "TTS: Samba is the heart of Brazil." },
                { term: "Bossa Nova", definition: "Mix of samba and jazz.", defTrans: "Bossa Nova", example: "Bossa Nova is calm.", audioFront: "TTS: Bossa Nova", audioBack: "TTS: Bossa Nova is calm." },
                { term: "Indie", definition: "Independent music.", defTrans: "Indie", example: "Indie bands are independent.", audioFront: "TTS: Indie", audioBack: "TTS: Indie bands are independent." },
                { term: "Metal", definition: "Loud, aggressive rock music.", defTrans: "Metal", example: "Metal uses heavy guitars.", audioFront: "TTS: Metal", audioBack: "TTS: Metal uses heavy guitars." },
                { term: "Punk", definition: "Fast, rebellious rock music.", defTrans: "Punk", example: "Punk is rebellious.", audioFront: "TTS: Punk", audioBack: "TTS: Punk is rebellious." },
                // --- Area 4: Feelings & Well-being ---
                , { term: "Relaxed", definition: "Feeling free from tension or anxiety.", defTrans: "Relaxado(a)", example: "I feel relaxed listening to the blues.", audioFront: "TTS: Relaxed", audioBack: "TTS: I feel relaxed listening to the blues." },
                { term: "Energetic", definition: "Full of energy and excitement.", defTrans: "Energético(a)", example: "Fast rhythms make me feel energetic.", audioFront: "TTS: Energetic", audioBack: "TTS: Fast rhythms make me feel energetic." },
                { term: "Calm", definition: "Not showing or feeling nervousness.", defTrans: "Calmo(a)", example: "The melody is very calm.", audioFront: "TTS: Calm", audioBack: "TTS: The melody is very calm." },
                { term: "Excited", definition: "Very enthusiastic and eager.", defTrans: "Empolgado(a)", example: "She is excited for the concert.", audioFront: "TTS: Excited", audioBack: "TTS: She is excited for the concert." },
                { term: "Nostalgic", definition: "A feeling of pleasure and sadness about the past.", defTrans: "Nostálgico(a)", example: "Old songs make me feel nostalgic.", audioFront: "TTS: Nostalgic", audioBack: "TTS: Old songs make me feel nostalgic." },
                { term: "Benefit", definition: "An advantage or profit gained.", defTrans: "Benefício", example: "Better focus is a benefit of music.", audioFront: "TTS: Benefit", audioBack: "TTS: Better focus is a benefit of music." },
                { term: "Impact", definition: "A marked effect or influence.", defTrans: "Impacto", example: "The song had a big impact on me.", audioFront: "TTS: Impact", audioBack: "TTS: The song had a big impact on me." },
                { term: "Power", definition: "The ability to do something.", defTrans: "Poder / Força", example: "Music has the power to heal.", audioFront: "TTS: Power", audioBack: "TTS: Music has the power to heal." },
                { term: "Well-being", definition: "The state of being comfortable or happy.", defTrans: "Bem-estar", example: "Music is vital for my well-being.", audioFront: "TTS: Well-being", audioBack: "TTS: Music is vital for my well-being." },
                { term: "Therapy", definition: "Treatment to relieve a disorder.", defTrans: "Terapia", example: "Listening to music is therapy.", audioFront: "TTS: Therapy", audioBack: "TTS: Listening to music is therapy." },
                { term: "Emotion", definition: "A strong instinctive state of mind.", defTrans: "Emoção / Sentimento", example: "I express emotion through song.", audioFront: "TTS: Emotion", audioBack: "TTS: I express emotion through song." },
                { term: "Mood", definition: "A temporary state of mind.", defTrans: "Humor / Ânimo", example: "This rhythm improves my mood.", audioFront: "TTS: Mood", audioBack: "TTS: This rhythm improves my mood." },

                // --- Area 5: Suffixes (Abstract Nouns) ---
                { term: "-ness", definition: "Suffix indicating state or quality.", defTrans: "Estado ou Qualidade", example: "Happiness, Sadness, Kindness.", audioFront: "TTS: Suffix ness", audioBack: "TTS: Happiness. Sadness. Kindness." },
                { term: "-ship", definition: "Suffix indicating condition or skill.", defTrans: "Condição ou Habilidade", example: "Friendship, Leadership.", audioFront: "TTS: Suffix ship", audioBack: "TTS: Friendship. Leadership." },
                { term: "-hood", definition: "Suffix indicating a period of time or group.", defTrans: "Período de tempo", example: "Childhood, Neighborhood.", audioFront: "TTS: Suffix hood", audioBack: "TTS: Childhood. Neighborhood." },
                { term: "-dom", definition: "Suffix indicating state or rank.", defTrans: "Estado ou Território", example: "Freedom, Kingdom.", audioFront: "TTS: Suffix dom", audioBack: "TTS: Freedom. Kingdom." },
                { term: "-ism", definition: "Suffix indicating doctrine or practice.", defTrans: "Doutrina ou Prática", example: "Realism, Criticism.", audioFront: "TTS: Suffix ism", audioBack: "TTS: Realism. Criticism." },

                // --- Grammar: Past Perfect & Relatives ---
                { term: "Past Perfect Simple", definition: "Had + Past Participle (Finished before past).", defTrans: "Passado Perfeito Simples", example: "The concert had started when I arrived.", audioFront: "TTS: Past Perfect Simple", audioBack: "TTS: The concert had started when I arrived." },
                { term: "Past Perf. Continuous", definition: "Had been + Verb-ing (Duration before past).", defTrans: "Passado Perfeito Contínuo", example: "She had been listening all day.", audioFront: "TTS: Past Perfect Continuous", audioBack: "TTS: She had been listening all day." },
                { term: "Who / Whom", definition: "Relative pronouns for people.", defTrans: "Que / Quem (Pessoas)", example: "The musician who plays the cello.", audioFront: "TTS: Who and Whom", audioBack: "TTS: The musician who plays the cello." },
                { term: "Which", definition: "Relative pronoun for things.", defTrans: "Que / O qual (Coisas)", example: "The album which changed my life.", audioFront: "TTS: Which", audioBack: "TTS: The album which changed my life." },
                { term: "That", definition: "Relative pronoun for people or things.", defTrans: "Que (Pessoas/Coisas)", example: "I like bands that write lyrics.", audioFront: "TTS: That", audioBack: "TTS: I like bands that write lyrics." },
                { term: "Whose", definition: "Relative pronoun for possession.", defTrans: "Cujo / Cuja", example: "The artist whose voice is amazing.", audioFront: "TTS: Whose", audioBack: "TTS: The artist whose voice is amazing." },
                { term: "Where / When", definition: "Relative pronouns for place and time.", defTrans: "Onde / Quando", example: "The studio where we record.", audioFront: "TTS: Where and When", audioBack: "TTS: The studio where we record." },
                { term: "Contrast Words", definition: "Although, However, Despite, Unlike.", defTrans: "Conectivos de Contraste", example: "Although it's old, I like it.", audioFront: "TTS: Contrast Words", audioBack: "TTS: Although it's old, I like it." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Exhaustive & Paginated)
    // ======================================================
    glossary: [
        // Topic 1: Context
        { topic: "Context", term: "record", definition: "A music disc (vinyl).", translation: "Disco / Álbum" },
        { topic: "Context", term: "band", definition: "A group of musicians.", translation: "Banda" },
        { topic: "Context", term: "which", definition: "Used to refer to a thing mentioned previously.", translation: "Que / O qual" },
        { topic: "Context", term: "whose", definition: "Used to indicate possession.", translation: "Cujo / Cuja" },
        { topic: "Context", term: "that", definition: "Used to refer to a person or thing mentioned previously.", translation: "Quem / Que" },
        { topic: "Context", term: "in-my-opinion", definition: "Used to share a personal thought.", translation: "Na minha opinião" },
        { topic: "Context", term: "that-s-true", definition: "Used to agree with someone.", translation: "É verdade" },
        { topic: "Context", term: "atmosphere", definition: "The pervading tone or mood of a place.", translation: "Atmosfera / Clima" },
        { topic: "Context", term: "i-see-your-point", definition: "Expression used to acknowledge someone's perspective.", translation: "Entendo seu ponto" },
        { topic: "Context", term: "genre", definition: "A category of artistic composition, as in music.", translation: "Gênero" },
        { topic: "Context", term: "well-being", definition: "The state of being comfortable, healthy, or happy.", translation: "Bem-estar" },
        { topic: "Context", term: "concert", definition: "A live musical performance.", translation: "Concerto / Show" },
        { topic: "Context", term: "despite", definition: "Without being affected by; in spite of.", translation: "Apesar de" },
        { topic: "Context", term: "therapy", definition: "Treatment intended to relieve a disorder.", translation: "Terapia" },
        { topic: "Context", term: "poetry", definition: "Literary work in which the expression of feelings and ideas is given intensity by the use of distinctive style and rhythm.", translation: "Poesia" },
        { topic: "Context", term: "shall", definition: "A formal way to make a suggestion.", translation: "Vamos? / Deveríamos?" },
        { topic: "Context", term: "freedom", definition: "The power or right to act, speak, or think without restraint.", translation: "Liberdade" },

        // Topic 2: Verbs (Opinions)
        { topic: "Verbs", term: "agree", definition: "To have the same opinion.", translation: "Concordar" },
        { topic: "Verbs", term: "disagree", definition: "To have a different opinion.", translation: "Discordar" },
        { topic: "Verbs", term: "believe", definition: "To accept something as true.", translation: "Acreditar" },
        { topic: "Verbs", term: "think", definition: "To have a particular opinion.", translation: "Pensar / Achar" },
        { topic: "Verbs", term: "feel", definition: "To experience an emotion.", translation: "Sentir" },
        { topic: "Verbs", term: "suppose", definition: "To think that something is likely to be true.", translation: "Supor" },
        { topic: "Verbs", term: "remember", definition: "To bring to one's mind.", translation: "Lembrar" },
        { topic: "Verbs", term: "forget", definition: "To fail to remember.", translation: "Esquecer" },
        { topic: "Verbs", term: "affect", definition: "To make a difference to something.", translation: "Afetar" },
        { topic: "Verbs", term: "influence", definition: "To have an effect on character or behavior.", translation: "Influenciar" },
        { topic: "Verbs", term: "express", definition: "To convey a thought or feeling.", translation: "Expressar" },
        { topic: "Verbs", term: "improve", definition: "To make something better.", translation: "Melhorar" },
        { topic: "Verbs", term: "prefer", definition: "To like one thing more than another.", translation: "Preferir" },
        { topic: "Verbs", term: "learn", definition: "To gain knowledge or skill.", translation: "Aprender" },
        { topic: "Verbs", term: "listen-to", definition: "To give attention to sound.", translation: "Escutar / Ouvir" },

        // Topic 3: Music Vocab
        { topic: "Music Vocab", term: "music", definition: "The art of sounds and silence.", translation: "Música" },
        { topic: "Music Vocab", term: "song", definition: "A short piece of music with words.", translation: "Canção / Música" },
        { topic: "Music Vocab", term: "artist", definition: "A person who creates music.", translation: "Artista" },
        { topic: "Music Vocab", term: "musician", definition: "A person who plays an instrument.", translation: "Músico(a)" },
        { topic: "Music Vocab", term: "lyrics", definition: "The words of a song.", translation: "Letra da música" },
        { topic: "Music Vocab", term: "melody", definition: "A sequence of musical notes.", translation: "Melodia" },
        { topic: "Music Vocab", term: "rhythm", definition: "A repeated pattern of sound.", translation: "Ritmo" },
        { topic: "Music Vocab", term: "harmony", definition: "Combination of musical notes.", translation: "Harmonia" },
        { topic: "Music Vocab", term: "instrument", definition: "An object used for making music.", translation: "Instrumento" },
        { topic: "Music Vocab", term: "gig", definition: "A live musical performance (informal).", translation: "Show" },
        { topic: "Music Vocab", term: "album", definition: "A collection of songs.", translation: "Álbum" },

        // Topic 4: Genres
        { topic: "Genres", term: "pop", definition: "Modern popular music.", translation: "Pop" },
        { topic: "Genres", term: "rock", definition: "Music with a strong beat and guitars.", translation: "Rock" },
        { topic: "Genres", term: "hip-hop", definition: "Music with rhythmic speech.", translation: "Hip Hop" },
        { topic: "Genres", term: "electronic", definition: "Music produced by technology.", translation: "Eletrônica" },
        { topic: "Genres", term: "classical", definition: "Traditional, established music.", translation: "Clássica" },
        { topic: "Genres", term: "jazz", definition: "Genre known for improvisation.", translation: "Jazz" },
        { topic: "Genres", term: "blues", definition: "Genre often expressing sadness.", translation: "Blues" },
        { topic: "Genres", term: "country", definition: "Folk-based storytelling music.", translation: "Sertanejo" },
        { topic: "Genres", term: "reggae", definition: "Music with a relaxed beat.", translation: "Reggae" },
        { topic: "Genres", term: "r-b", definition: "Rhythm and Blues.", translation: "R&B" },
        { topic: "Genres", term: "soul", definition: "Deeply emotional music.", translation: "Soul" },
        { topic: "Genres", term: "funk", definition: "Music with a strong dance rhythm.", translation: "Funk" },
        { topic: "Genres", term: "samba", definition: "Brazilian dance and music genre.", translation: "Samba" },
        { topic: "Genres", term: "bossa-nova", definition: "Mix of samba and jazz.", translation: "Bossa Nova" },
        { topic: "Genres", term: "indie", definition: "Independent music.", translation: "Indie" },
        { topic: "Genres", term: "metal", definition: "Loud, aggressive rock music.", translation: "Metal" },

        // Topic 5: Feelings & Well-being
        { topic: "Feelings", term: "relaxed", definition: "Feeling free from tension.", translation: "Relaxado(a)" },
        { topic: "Feelings", term: "energetic", definition: "Full of energy.", translation: "Energético(a)" },
        { topic: "Feelings", term: "calm", definition: "Not showing nervousness.", translation: "Calmo(a)" },
        { topic: "Feelings", term: "excited", definition: "Very enthusiastic.", translation: "Empolgado(a)" },
        { topic: "Feelings", term: "nostalgic", definition: "Feeling pleasure and sadness about the past.", translation: "Nostálgico(a)" },
        { topic: "Feelings", term: "benefit", definition: "An advantage.", translation: "Benefício" },
        { topic: "Feelings", term: "impact", definition: "A marked effect.", translation: "Impacto" },
        { topic: "Feelings", term: "power", definition: "The ability to do something.", translation: "Poder / Força" },
        { topic: "Feelings", term: "therapy", definition: "Treatment to relieve a disorder.", translation: "Terapia" },
        { topic: "Feelings", term: "emotion", definition: "A strong instinctive state of mind.", translation: "Emoção" },
        { topic: "Feelings", term: "mood", definition: "A temporary state of mind.", translation: "Humor / Ânimo" },
        { topic: "Feelings", term: "happiness", definition: "The state of being happy.", translation: "Felicidade" },
        { topic: "Feelings", term: "sadness", definition: "The state of being sad.", translation: "Tristeza" },

        // Topic 6: Suffixes
        { topic: "Suffixes", term: "ness", definition: "Suffix: State or quality.", translation: "-dade / -ez" },
        { topic: "Suffixes", term: "ship", definition: "Suffix: Condition or skill.", translation: "-dade / -ia" },
        { topic: "Suffixes", term: "hood", definition: "Suffix: Period of time or group.", translation: "-dade (ex: infância)" },
        { topic: "Suffixes", term: "dom", definition: "Suffix: State or rank.", translation: "-dade (ex: liberdade)" },
        { topic: "Suffixes", term: "ism", definition: "Suffix: Doctrine or practice.", translation: "-ismo" },

        // Topic 7: Grammar
        { topic: "Grammar", term: "present-perfect-continuous", definition: "Have/has + been + verb-ing (Action in progress before past).", translation: "Presente Perfeito Contínuo" },
        { topic: "Grammar", term: "simple-past", definition: "Affirmative verb has a past form (Action finished at a specified time).", translation: "Pasado Simples" },
        { topic: "Grammar", term: "past-perfect", definition: "Action finished before another past action.", translation: "Passado Perfeito" },
        { topic: "Grammar", term: "past-perfect-continuous", definition: "Duration of an action before another past point.", translation: "Passado Perfeito Contínuo" },
        { topic: "Grammar", term: "relative-pronouns", definition: "Words like who, which, that used to connect clauses.", translation: "Pronomes Relativos" },
        { topic: "Grammar", term: "relative-clauses", definition: "Clauses starting with who, which, etc.", translation: "Orações Relativas" },
        { topic: "Grammar", term: "contrast-words", definition: "Words like however, although, despite.", translation: "Conectivos de Contraste" },
        { topic: "Grammar", term: "although", definition: "In spite of the fact that.", translation: "Embora" },
        { topic: "Grammar", term: "however", definition: "Used to introduce a statement that contrasts.", translation: "No entanto" },
        { topic: "Grammar", term: "unlike", definition: "Different from; not similar to.", translation: "Diferente de" }
    ]
});