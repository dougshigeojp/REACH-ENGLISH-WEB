/**
 * REACH English - LESSON DATA TEMPLATE (Updated v2.0)
 * 1. Rename this file to match your lesson ID (e.g., "em1-1-2.js").
 * 2. Update the "lessonId" field below to match the filename.
 * 3. Fill in the "INSERT_..." fields.
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-2-4", 
    grade: "High School 2nd Grade",       
    bimester: "2",   
    chapter: "4",    
    chapterTitle: "Eye-Catching World: Photography, Vision, and Reporting Reality", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss the world of photography and its impact on social media.<br>• Identify and describe common vision problems and optical solutions.<br>• Use the Causative Passive (Have/Get something done) to talk about services.<br>• Use the Passive Voice with reporting verbs for general facts and beliefs.<br>• Master vocabulary for editing, composition, and eye exams.",
            welcome: "Hello, visual explorers! I'm Mr. D!<br>They say a picture is worth a thousand words, and today we’re going to open the door to the \"Eye-Catching World\"! We see the world through our eyes—our natural cameras—but how do we capture and share those moments? Today, we’ll explore how to talk about taking the perfect selfie, understand how lenses work, and learn the grammar used by journalists and professionals. Whether you are short-sighted or have perfect vision, get ready to see your English in high resolution! Let's get the picture!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss the world of photography and its impact on social media. Identify and describe common vision problems and optical solutions. Use the Causative Passive, Have or Get something done, to talk about services. Use the Passive Voice with reporting verbs for general facts and beliefs. Master vocabulary for editing, composition, and eye exams.",
                welcome: "TTS: Hello, visual explorers! I'm Mr. D! They say a picture is worth a thousand words, and today we’re going to open the door to the Eye-Catching World! We see the world through our eyes—our natural cameras—but how do we capture and share those moments? Today, we’ll explore how to talk about taking the perfect selfie, understand how lenses work, and learn the grammar used by journalists and professionals. Whether you are short-sighted or have perfect vision, get ready to see your English in high resolution! Let's get the picture!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Celine and Albert are at a local photography exhibition. Celine is holding a professional camera, and Albert is squinting at the descriptions on the wall.", 
            contextAudio: "audio/em2-2-4/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, look at this [portrait](tooltip:portrait)! The [composition](tooltip:composition) and the [lighting](tooltip:lighting) are absolutely [eye-catching](tooltip:eye-catching)." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [suppose](tooltip:suppose) so, but it looks a bit [blurry](tooltip:blurry) to me. I think I need to [get my eyes tested](tooltip:causative-passive) soon. My [vision](tooltip:vision-sight) isn't as [clear](tooltip:clear) as it used to be." 
                },
                { 
                    speaker: "Celine", 
                    text: "You probably need to [wear glasses](tooltip:wear-glasses). It [is said that](tooltip:reporting-passive) [short-sightedness](tooltip:short-sighted) is very common among students who spend a lot of time on screens. You should see an [optometrist](tooltip:optometrist)." 
                },
                { 
                    speaker: "Albert", 
                    text: "You're right. I'll ask my parents to [get an appointment made](tooltip:causative-passive). Anyway, did the [photographer](tooltip:photographer) [edit](tooltip:edit) this [photo](tooltip:photo-picture)? The colors are so [vibrant](tooltip:vibrant)." 
                },
                { 
                    speaker: "Celine", 
                    text: "It [is believed that](tooltip:reporting-passive) he used a special [filter](tooltip:filter). He is [known](tooltip:known) to [shoot](tooltip:shoot) with a high-quality [lens](tooltip:lens). He doesn't just take a picture; he creates art." 
                },
                { 
                    speaker: "Albert", 
                    text: "I [wish](tooltip:wish) I could take photos like that. I just take a [selfie](tooltip:selfie) and [upload](tooltip:upload) it to [social media](tooltip:social-media). My [profile](tooltip:profile) looks so [boring](tooltip:boring) compared to this." 
                },
                { 
                    speaker: "Celine", 
                    text: "Well, you can [have your photos printed](tooltip:causative-passive) and make an album! Or you could learn how to [zoom in](tooltip:zoom) and change the [angle](tooltip:angle). It [is reported that](tooltip:reporting-passive) even simple tips can improve your [digital content](tooltip:online-digital) massively." 
                },
                { 
                    speaker: "Albert", 
                    text: "That's a good idea. I'll [focus](tooltip:focus) on learning more about [photography](tooltip:photography) instead of just [scrolling](tooltip:scrolling) through my [feed](tooltip:feed)!" 
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
                    title: "Verbs (Vision & Photography)",
                    audio: "TTS: Edit. Focus. Zoom in. Zoom out. Develop. Print. Take a photo. Shoot. See. Look. Watch. Wear glasses. Post. Share. Upload. Download. Like. Comment. Tag.",
                    items: [
                        { term: "Edit (a photo)", trans: "Editar (uma foto)" },
                        { term: "Focus", trans: "Focar" },
                        { term: "Zoom (in/out)", trans: "Aproximar / Afastar" },
                        { term: "Develop (film)", trans: "Revelar (filme)" },
                        { term: "Print (a photo)", trans: "Imprimir (uma foto)" },
                        { term: "Take a photo/picture", trans: "Tirar uma foto" },
                        { term: "Shoot (a photo)", trans: "Fotografar / Tirar foto" },
                        { term: "See / Look / Watch", trans: "Ver / Olhar / Assistir" },
                        { term: "Wear glasses", trans: "Usar óculos" },
                        { term: "Post", trans: "Postar" },
                        { term: "Share", trans: "Compartilhar" },
                        { term: "Upload", trans: "Carregar / Fazer upload" },
                        { term: "Download", trans: "Baixar" },
                        { term: "Like", trans: "Curtir" },
                        { term: "Comment", trans: "Comentar" },
                        { term: "Tag", trans: "Marcar (pessoas)" }
                    ]
                },
                {
                    title: "Equipment & Vision Problems",
                    audio: "TTS: Photography. Photo. Picture. Camera. Lens. Flash. Photographer. Portrait. Landscape. Selfie. Filter. Eye-catching. Composition. Angle. Lighting. Eye. Vision. Sight. Contact lenses. Far-sighted. Short-sighted. Blurry. Clear. Eye exam. Optometrist. Prescription. Frame. Social media. Platform. Profile. Follower. Influencer. Hashtag. Story. Feed. Digital.",
                    items: [
                        { term: "Photography", trans: "Fotografia" },
                        { term: "Photo / Picture", trans: "Foto / Fotografia" },
                        { term: "Camera", trans: "Câmera" },
                        { term: "Lens", trans: "Lente" },
                        { term: "Flash", trans: "Flash" },
                        { term: "Photographer", trans: "Fotógrafo(a)" },
                        { term: "Portrait", trans: "Retrato" },
                        { term: "Landscape", trans: "Paisagem" },
                        { term: "Selfie", trans: "Selfie" },
                        { term: "Filter", trans: "Filtro" },
                        { term: "Eye-catching", trans: "Cativante / Chamativo" },
                        { term: "Composition", trans: "Composição" },
                        { term: "Angle", trans: "Ângulo" },
                        { term: "Lighting", trans: "Iluminação" },
                        { term: "Eye(s)", trans: "Olho(s)" },
                        { term: "Vision / Sight", trans: "Visão" },
                        { term: "Contact lenses", trans: "Lentes de contato" },
                        { term: "Far-sighted", trans: "Hipermetrope" },
                        { term: "Short-sighted", trans: "Míope" },
                        { term: "Blurry", trans: "Embaçado(a)" },
                        { term: "Clear", trans: "Nítido(a) / Claro(a)" },
                        { term: "Eye exam / Eye test", trans: "Exame de vista" },
                        { term: "Optometrist", trans: "Optometrista" },
                        { term: "Prescription", trans: "Prescrição / Receita" },
                        { term: "Frame", trans: "Armação" },
                        { term: "Social media", trans: "Mídia social" },
                        { term: "Platform", trans: "Plataforma" },
                        { term: "Profile", trans: "Perfil" },
                        { term: "Follower", trans: "Seguidor(a)" },
                        { term: "Influencer", trans: "Influenciador(a)" },
                        { term: "Hashtag (#)", trans: "Hashtag" },
                        { term: "Story / Stories", trans: "Story / Stories" },
                        { term: "Feed", trans: "Feed (linha do tempo)" },
                        { term: "Online / Digital", trans: "Online / Digital" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Can you take a picture of me? Let's take a selfie. This photo is eye-catching. My vision is a bit blurry. I need to get my eyes checked. He had his photo taken. She wears glasses because she's short-sighted. A picture is worth a thousand words. Social media affects self-esteem. How often do you post photos online? Is it known how the eye focuses? Where can I have good portraits taken?",
                    items: [
                        { term: "Can you take a picture of me?", trans: "Você pode tirar uma foto minha?" },
                        { term: "Let's take a selfie.", trans: "Vamos tirar uma selfie." },
                        { term: "This photo is eye-catching!", trans: "Esta foto é cativante!" },
                        { term: "My vision is a bit blurry.", trans: "Minha visão está um pouco embaçada." },
                        { term: "I need to get my eyes checked.", trans: "Preciso fazer um exame de vista." },
                        { term: "He had his photo taken.", trans: "Alguém tirou a foto dele." },
                        { term: "She wears glasses because she's short-sighted.", trans: "Ela usa óculos porque é míope." },
                        { term: "A picture is worth a thousand words.", trans: "Uma imagem vale mais que mil palavras." },
                        { term: "It is believed that social media affects self-esteem.", trans: "Acredita-se que a mídia social afeta a autoestima." },
                        { term: "How often do you post photos online?", trans: "Com que frequência você posta fotos online?" },
                        { term: "Is it known how the eye focuses?", trans: "Sabe-se como o olho foca?" },
                        { term: "Where can I have good portraits taken?", trans: "Onde posso tirar bons retratos?" }
                    ]
                }
            ],

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs",
                    audio: "TTS: You should edit the brightness before you post. The camera needs time to focus on the bird. Don't zoom in too much. My grandfather used to develop film. I will print these pictures for my album. Can you take a picture of me near the statue? Professional photographers shoot in RAW format. I can see the colors clearly now. I have to wear glasses for reading. How often do you post on Instagram? Share your best memories with us! It takes a few seconds to upload a selfie. You can download the digital copy here. I always like my friends' vacation photos. Please comment your thoughts on my profile. Tag your best friend in this meme!",
                    items: [
                        { term: "Edit", sent: "You should edit the brightness before you post.", trans: "<span style='color:#0077b6'>Você deve editar o brilho antes de postar.</span>" },
                        { term: "Focus", sent: "The camera needs time to focus on the bird.", trans: "<span style='color:#0077b6'>A câmera precisa de tempo para focar no pássaro.</span>" },
                        { term: "Zoom", sent: "Don't zoom in too much or the photo will be blurry.", trans: "<span style='color:#0077b6'>Não use o zoom demais ou a foto ficará embaçada.</span>" },
                        { term: "Develop", sent: "My grandfather used to develop film in his garage.", trans: "<span style='color:#0077b6'>Meu avô costumava revelar filmes na garagem dele.</span>" },
                        { term: "Print", sent: "I will print these pictures for my album.", trans: "<span style='color:#0077b6'>Vou imprimir estas fotos para o meu álbum.</span>" },
                        { term: "Take a photo", sent: "Can you take a picture of me near the statue?", trans: "<span style='color:#0077b6'>Pode tirar uma foto minha perto da estátua?</span>" },
                        { term: "Shoot", sent: "Professional photographers shoot in RAW format.", trans: "<span style='color:#0077b6'>Fotógrafos profissionais fotografam em formato RAW.</span>" },
                        { term: "See / Look / Watch", sent: "I can see the colors clearly now.", trans: "<span style='color:#0077b6'>Consigo ver as cores nitidamente agora.</span>" },
                        { term: "Wear glasses", sent: "I have to wear glasses for reading.", trans: "<span style='color:#0077b6'>Tenho que usar óculos para ler.</span>" },
                        { term: "Post", sent: "How often do you post on Instagram?", trans: "<span style='color:#0077b6'>Com que frequência você posta no Instagram?</span>" },
                        { term: "Share", sent: "Share your best memories with us!", trans: "<span style='color:#0077b6'>Compartilhe suas melhores memórias conosco!</span>" },
                        { term: "Upload", sent: "It takes a few seconds to upload a selfie.", trans: "<span style='color:#0077b6'>Leva alguns segundos para carregar uma selfie.</span>" },
                        { term: "Download", sent: "You can download the digital copy here.", trans: "<span style='color:#0077b6'>Você pode baixar a cópia digital aqui.</span>" },
                        { term: "Like", sent: "I always like my friends' vacation photos.", trans: "<span style='color:#0077b6'>Sempre curto as fotos de viagem dos meus amigos.</span>" },
                        { term: "Comment", sent: "Please comment your thoughts on my profile.", trans: "<span style='color:#0077b6'>Por favor, comente seus pensamentos no meu perfil.</span>" },
                        { term: "Tag", sent: "Tag your best friend in this meme!", trans: "<span style='color:#0077b6'>Marque seu melhor amigo neste meme!</span>" }
                    ]
                },
                {
                    title: "Vocabularies",
                    audio: "TTS: I am taking a course in photography. This picture is a bit blurry. My new camera has a very fast focus. You need a wide lens. The flash was too bright. The photographer used great lighting. I prefer taking portraits. This landscape photo is amazing. Let's take a selfie together! Which filter did you use? That red dress is very eye-catching. Good composition makes a photo better. Try a different angle. My eyes are tired. Her vision improved. I prefer contact lenses. My dad is far-sighted. I am short-sighted. The background is blurry. The image is very clear. I have an eye exam tomorrow. The optometrist checked my sight. My glasses are broken. Do you have your prescription? I like the blue frame. Social media is addictive. Youtube is a huge platform. Is your profile public? The influencer gained many followers. Don't forget a hashtag. I posted a video to my story. My feed is full. We live in a digital age.",
                    items: [
                        { term: "Photography", sent: "I am taking a course in photography.", trans: "<span style='color:#0077b6'>Estou fazendo um curso de fotografia.</span>" },
                        { term: "Photo / Picture", sent: "This picture is a bit blurry.", trans: "<span style='color:#0077b6'>Esta foto está um pouco embaçada.</span>" },
                        { term: "Camera", sent: "My new camera has a very fast focus.", trans: "<span style='color:#0077b6'>Minha câmera nova tem um foco muito rápido.</span>" },
                        { term: "Lens", sent: "You need a wide lens for landscape photography.", trans: "<span style='color:#0077b6'>Você precisa de uma lente grande angular para fotografia de paisagem.</span>" },
                        { term: "Flash", sent: "The flash was too bright in the selfie.", trans: "<span style='color:#0077b6'>O flash estava forte demais na selfie.</span>" },
                        { term: "Photographer", sent: "The photographer used great lighting.", trans: "<span style='color:#0077b6'>O fotógrafo usou uma ótima iluminação.</span>" },
                        { term: "Portrait", sent: "I prefer taking portraits of people.", trans: "<span style='color:#0077b6'>Prefiro tirar retratos de pessoas.</span>" },
                        { term: "Landscape", sent: "This landscape photo is amazing.", trans: "<span style='color:#0077b6'>Esta foto de paisagem é incrível.</span>" },
                        { term: "Selfie", sent: "Let's take a selfie together!", trans: "<span style='color:#0077b6'>Vamos tirar uma selfie juntos!</span>" },
                        { term: "Filter", sent: "Which filter did you use on this?", trans: "<span style='color:#0077b6'>Qual filtro você usou nesta aqui?</span>" },
                        { term: "Eye-catching", sent: "That red dress is very eye-catching.", trans: "<span style='color:#0077b6'>Aquele vestido vermelho chama muito a atenção.</span>" },
                        { term: "Composition", sent: "Good composition makes a photo better.", trans: "<span style='color:#0077b6'>Uma boa composição torna a foto melhor.</span>" },
                        { term: "Angle", sent: "Try a different angle for this shot.", trans: "<span style='color:#0077b6'>Tente um ângulo diferente para esta tomada.</span>" },
                        { term: "Lighting", sent: "The lighting in this studio is perfect.", trans: "<span style='color:#0077b6'>A iluminação neste estúdio é perfeita.</span>" },
                        { term: "Eye(s)", sent: "My eyes are tired from the screen.", trans: "<span style='color:#0077b6'>Meus olhos estão cansados da tela.</span>" },
                        { term: "Vision", sent: "Her vision improved after the surgery.", trans: "<span style='color:#0077b6'>A visão dela melhorou após a cirurgia.</span>" },
                        { term: "Contact lenses", sent: "I prefer contact lenses to glasses.", trans: "<span style='color:#0077b6'>Prefiro lentes de contato a óculos.</span>" },
                        { term: "Far-sighted", sent: "My dad is far-sighted; he needs reading glasses.", trans: "<span style='color:#0077b6'>Meu pai é hipermetrope; ele precisa de óculos de leitura.</span>" },
                        { term: "Short-sighted", sent: "I am short-sighted, so I can't see the board.", trans: "<span style='color:#0077b6'>Eu sou míope, então não consigo ver o quadro.</span>" },
                        { term: "Blurry", sent: "The background of the photo is blurry.", trans: "<span style='color:#0077b6'>O fundo da foto está embaçado.</span>" },
                        { term: "Clear", sent: "The image on this new monitor is very clear.", trans: "<span style='color:#0077b6'>A imagem neste monitor novo é muito nítida.</span>" },
                        { term: "Eye exam", sent: "I have an eye exam tomorrow morning.", trans: "<span style='color:#0077b6'>Tenho um exame de vista amanhã de manhã.</span>" },
                        { term: "Optometrist", sent: "The optometrist checked my sight.", trans: "<span style='color:#0077b6'>O optometrista checou minha visão.</span>" },
                        { term: "Glasses", sent: "My glasses are broken.", trans: "<span style='color:#0077b6'>Meus óculos estão quebrados.</span>" },
                        { term: "Prescription", sent: "Do you have your prescription with you?", trans: "<span style='color:#0077b6'>Você está com a sua receita aí?</span>" },
                        { term: "Frame", sent: "I like the blue frame of these glasses.", trans: "<span style='color:#0077b6'>Gosto da armação azul destes óculos.</span>" },
                        { term: "Social media", sent: "It is believed that social media is addictive.", trans: "<span style='color:#0077b6'>Acredita-se que a mídia social vicia.</span>" },
                        { term: "Platform", sent: "Youtube is a huge video platform.", trans: "<span style='color:#0077b6'>O Youtube é uma plataforma de vídeos imensa.</span>" },
                        { term: "Profile", sent: "Is your profile public or private?", trans: "<span style='color:#0077b6'>Seu perfil é público ou privado?</span>" },
                        { term: "Follower", sent: "He has over a million followers.", trans: "<span style='color:#0077b6'>Ele tem mais de um milhão de seguidores.</span>" },
                        { term: "Influencer", sent: "She is a famous digital influencer.", trans: "<span style='color:#0077b6'>Ela é uma influenciadora digital famosa.</span>" },
                        { term: "Hashtag", sent: "Don't forget to add a hashtag.", trans: "<span style='color:#0077b6'>Não esqueça de adicionar uma hashtag.</span>" },
                        { term: "Story", sent: "Did you see my story on Instagram?", trans: "<span style='color:#0077b6'>Você viu meu story no Instagram?</span>" },
                        { term: "Feed", sent: "My feed is full of advertisements.", trans: "<span style='color:#0077b6'>Meu feed está cheio de propagandas.</span>" },
                        { term: "Digital", sent: "We live in a digital age.", trans: "<span style='color:#0077b6'>Vivemos em uma era digital.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills (Expanded to 30 items)
            drills: [
                // --- Set 1: Verbs (10 items) ---
                {
                    type: "mcq",
                    q: "I need to _______ (focar) the camera on the flowers.",
                    options: [
                        {t: "Zoom", c: false}, {t: "Focus", c: true}, {t: "Edit", c: false}, {t: "Develop", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "He decided to _______ (revelar) the old film from the 70s.",
                    options: [
                        {t: "Develop", c: true}, {t: "Print", c: false}, {t: "Shoot", c: false}, {t: "Tag", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Don't forget to _______ (marcar) your friends in the photo!",
                    options: [
                        {t: "Comment", c: false}, {t: "Like", c: false}, {t: "Tag", c: true}, {t: "Post", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Professionals often _______ (fotografam) in natural light.",
                    options: [
                        {t: "See", c: false}, {t: "Shoot", c: true}, {t: "Zoom", c: false}, {t: "Watch", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You can _______ (baixar) the editing app for free.",
                    options: [
                        {t: "Upload", c: false}, {t: "Download", c: true}, {t: "Post", c: false}, {t: "Share", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "You should _______ (editar) the brightness before you post.",
                    options: [
                        {t: "Edit", c: true}, {t: "Develop", c: false}, {t: "Print", c: false}, {t: "Shoot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "It takes a few seconds to _______ (carregar) a selfie to the cloud.",
                    options: [
                        {t: "Download", c: false}, {t: "Upload", c: true}, {t: "Like", c: false}, {t: "Tag", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Please _______ (comentar) your thoughts on my profile.",
                    options: [
                        {t: "Post", c: false}, {t: "Comment", c: true}, {t: "Tag", c: false}, {t: "Share", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She likes to _______ (imprimir) her best photos for an album.",
                    options: [
                        {t: "Edit", c: false}, {t: "Print", c: true}, {t: "Develop", c: false}, {t: "Shoot", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I have to _______ (usar óculos) for reading.",
                    options: [
                        {t: "Wear glasses", c: true}, {t: "Watch screens", c: false}, {t: "Focus lens", c: false}, {t: "Print photos", c: false}
                    ]
                },

                // --- Set 2: Vocabularies (10 items) ---
                {
                    type: "mcq",
                    q: "My vision is _______ (embaçada). I can't read the sign.",
                    options: [
                        {t: "Clear", c: false}, {t: "Vibrant", c: false}, {t: "Blurry", c: true}, {t: "Digital", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I need a new _______ (armação) for my spectacles.",
                    options: [
                        {t: "Lens", c: false}, {t: "Frame", c: true}, {t: "Flash", c: false}, {t: "Angle", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "A person who is _______ (míope) cannot see far away.",
                    options: [
                        {t: "Far-sighted", c: false}, {t: "Clear-sighted", c: false}, {t: "Short-sighted", c: true}, {t: "Digital", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "That is a very _______ (chamativa) profile picture!",
                    options: [
                        {t: "Blurry", c: false}, {t: "Eye-catching", c: true}, {t: "Boring", c: false}, {t: "Digital", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ (iluminação) in the gallery was very dim.",
                    options: [
                        {t: "Lighting", c: true}, {t: "Composition", c: false}, {t: "Angle", c: false}, {t: "Flash", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I prefer taking _______ (retratos) of people.",
                    options: [
                        {t: "Landscapes", c: false}, {t: "Filters", c: false}, {t: "Portraits", c: true}, {t: "Snapshots", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The _______ checked my sight and gave me a prescription.",
                    options: [
                        {t: "Photographer", c: false}, {t: "Optometrist", c: true}, {t: "Influencer", c: false}, {t: "Expert", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Clean the _______ (lente) before you take the photo.",
                    options: [
                        {t: "Flash", c: false}, {t: "Frame", c: false}, {t: "Lens", c: true}, {t: "Angle", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Instagram is a visual _______ (plataforma).",
                    options: [
                        {t: "Platform", c: true}, {t: "Prescription", c: false}, {t: "Portrait", c: false}, {t: "Composition", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Do you have your _______ (receita) for your new glasses?",
                    options: [
                        {t: "Platform", c: false}, {t: "Frame", c: false}, {t: "Prescription", c: true}, {t: "Hashtag", c: false}
                    ]
                },

                // --- Set 3: Phrases & Expressions (10 items) ---
                {
                    type: "mcq",
                    q: "Choose the best translation: 'I need to get my eyes checked.'",
                    options: [
                        {t: "Eu preciso comprar óculos.", c: false}, {t: "Eu preciso fazer um exame de vista.", c: true}, {t: "Eu preciso lavar meus olhos.", c: false}, {t: "Eu vi um exame ontem.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the best translation: 'A picture is worth a thousand words.'",
                    options: [
                        {t: "Uma foto custa caro.", c: false}, {t: "Mil palavras em uma foto.", c: false}, {t: "Uma imagem vale mais que mil palavras.", c: true}, {t: "Escreva mil palavras sobre a foto.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "What does 'He had his photo taken' mean?",
                    options: [
                        {t: "Ele tirou a foto sozinho.", c: false}, {t: "Ele roubou uma foto.", c: false}, {t: "Alguém tirou a foto dele.", c: true}, {t: "Ele perdeu a foto.", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Complete: 'Good _______ (composição) makes a photo better.'",
                    options: [
                        {t: "Prescription", c: false}, {t: "Composition", c: true}, {t: "Lighting", c: false}, {t: "Angle", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "My _______ (linha do tempo) is full of advertisements.",
                    options: [
                        {t: "Profile", c: false}, {t: "Feed", c: true}, {t: "Story", c: false}, {t: "Digital", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She is a famous digital _______ (influenciadora).",
                    options: [
                        {t: "Follower", c: false}, {t: "Optometrist", c: false}, {t: "Influencer", c: true}, {t: "Photographer", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Don't forget to add a _______ (#) to your post.",
                    options: [
                        {t: "Link", c: false}, {t: "Filter", c: false}, {t: "Hashtag", c: true}, {t: "Portrait", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We live in a _______ (digital) age.",
                    options: [
                        {t: "Boring", c: false}, {t: "Digital", c: true}, {t: "Blurry", c: false}, {t: "Vibrant", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Translate: 'Where can I have good portraits taken?'",
                    options: [
                        {t: "Onde tiro boas fotos?", c: false}, {t: "Onde posso tirar bons retratos?", c: true}, {t: "Quem tem bons retratos?", c: false}, {t: "Onde estão os retratos?", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "It is believed that social media affects _______ (autoestima).",
                    options: [
                        {t: "Self-control", c: false}, {t: "Self-centered", c: false}, {t: "Self-esteem", c: true}, {t: "Self-service", c: false}
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
                    title: "Causative Passive (Have/Get)",
                    audio: "TTS: We use the causative passive when we arrange for someone else to do something for us. Have focuses on the arrangement. Get emphasizes the effort or completion.",
                    explanation: "We use the causative passive when we arrange for someone else (usually a professional) to do something for us. We don't do the action ourselves, but we cause it to happen.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a passiva causativa quando organizamos para que outra pessoa faça algo para nós. Não fazemos a ação sozinhos, mas causamos sua ocorrência.)</span>",
                    samples: [
                        { en: "<b>have + object + past participle</b>: I had my eyes tested yesterday. (More formal)", pt: "<span style='color:#0077b6'>Eu fiz um exame de vista ontem. (Arranjado com profissional)</span>" },
                        { en: "<b>get + object + past participle</b>: She got her camera fixed. (More informal/effort)", pt: "<span style='color:#0077b6'>Ela mandou consertar a câmera dela.</span>" }
                    ]
                },
                {
                    title: "Reporting Passive (Structure 1)",
                    audio: "TTS: Use It plus passive verb plus that to report general opinions or facts without saying who believes it. It is said that social media affects self-esteem.",
                    explanation: "Used to report general opinions, beliefs, or facts in an impersonal way. Very common in news.<br><br><span style='color:#0077b6; font-style:italic;'>(Usado para relatar opiniões gerais ou fatos de forma impessoal. Muito comum em notícias e escrita formal.)</span>",
                    samples: [
                        { en: "<b>It + passive verb (be + pastparticiple) + that + clause</b>", pt: "<span style='color:#0077b6'>Estrutura Impessoal</span>" },
                        { en: "It is said that a picture is worth a thousand words.", pt: "<span style='color:#0077b6'>Dizem que uma imagem vale mais que mil palavras.</span>" },
                        { en: "It is believed that he used a special filter.", pt: "<span style='color:#0077b6'>Acredita-se que ele usou um filtro especial.</span>" }
                    ]
                },
                {
                    title: "Reporting Passive (Structure 2)",
                    audio: "TTS: Use Subject plus passive verb plus to plus infinitive. The new lens is expected to be expensive.",
                    explanation: "A more personal structure focusing on the subject of the report.<br><br><span style='color:#0077b6; font-style:italic;'>(Uma estrutura que foca no sujeito sobre o qual se está relatando algo.)</span>",
                    samples: [
                        { en: "<b>Subject + passive verb (be + pastparticiple) + to + infinitive</b>", pt: "<span style='color:#0077b6'>Foco no Sujeito</span>" },
                        { en: "The new lens is expected to be expensive.", pt: "<span style='color:#0077b6'>Espera-se que a nova lente seja cara.</span>" },
                        { en: "My new glasses are said to reduce eye strain.", pt: "<span style='color:#0077b6'>Dizem que meus novos óculos reduzem o cansaço visual.</span>" }
                    ]
                }
            ],

            // 3B: Natural Examples (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: At the Studio (Causative)",
                    audio: "audio/em2-2-4/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Celine, did you take those portraits yourself?", 
                            pt: "<span style='color:#0077b6'>Celine, você mesma tirou esses retratos?</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "No, I had them taken by a professional. I also got them edited to improve the lighting.", 
                            pt: "<span style='color:#0077b6'>Não, eu mandei tirá-los por um profissional. Eu também os mandei editar para melhorar a iluminação.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Optical Science (Reporting)",
                    audio: "audio/em2-2-4/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Why are you going to the optician?", 
                            pt: "<span style='color:#0077b6'>Por que você vai ao oculista?</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "Well, it is known that staring at screens causes blurry vision. My new glasses are said to reduce eye strain.", 
                            pt: "<span style='color:#0077b6'>Bem, sabe-se que ficar olhando para telas causa visão embaçada. Dizem que meus novos óculos reduzem o cansaço visual.</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ (Expanded to 30 items)
            grammarDrills: [
                // --- Set 1: Causative Passive (HAVE / GET) ---
                {
                    type: "mcq",
                    q: "Albert couldn't see well, so he _______ (test) his eyes.",
                    options: [
                        {t: "had tested", c: false}, {t: "had his eyes tested", c: true}, 
                        {t: "has his eyes tested", c: false}, {t: "tests his eyes", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I need to _______ (print) this landscape photo for the exhibition.",
                    options: [
                        {t: "print", c: false}, {t: "have printed", c: false}, 
                        {t: "get this photo printed", c: true}, {t: "getting printed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "She _______ (develop) the old film from her camera last week.",
                    options: [
                        {t: "had the film developed", c: true}, {t: "developed the film", c: false}, 
                        {t: "has the film developed", c: false}, {t: "will have developed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "We are going to _______ (adjust) the frames of our glasses tomorrow.",
                    options: [
                        {t: "adjust", c: false}, {t: "have our frames adjusted", c: true}, 
                        {t: "having adjusted", c: false}, {t: "did adjusted", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The professional _______ (edit) Celine's portraits yesterday.",
                    options: [
                        {t: "gets them edited", c: false}, {t: "had them edited", c: true}, 
                        {t: "edited them", c: false}, {t: "have edited", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Albert decided to _______ (make) a professional appointment.",
                    options: [
                        {t: "get an appointment made", c: true}, {t: "make an appointment", c: false}, 
                        {t: "had make", c: false}, {t: "got make", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "He _______ (repair) his broken camera lens at the shop.",
                    options: [
                        {t: "repaired", c: false}, {t: "got his lens repaired", c: true}, 
                        {t: "get repaired", c: false}, {t: "has repaired", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "I will _______ (check) my vision as soon as possible.",
                    options: [
                        {t: "check my vision", c: false}, {t: "have my vision checked", c: true}, 
                        {t: "checked", c: false}, {t: "get check", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "They _______ (take) their family portrait by a famous photographer.",
                    options: [
                        {t: "took", c: false}, {t: "had their portrait taken", c: true}, 
                        {t: "have took", c: false}, {t: "get take", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Did you _______ (clean) your sensor professionally?",
                    options: [
                        {t: "get your sensor cleaned", c: true}, {t: "cleaned your sensor", c: false}, 
                        {t: "have clean", c: false}, {t: "get clean", c: false}
                    ]
                },

                // --- Set 2: Reporting Passive (Structure 1: IT IS...) ---
                {
                    type: "mcq",
                    q: "_______ (say) that social media affects how we see reality.",
                    options: [
                        {t: "It says", c: false}, {t: "It is said", c: true}, 
                        {t: "They are said", c: false}, {t: "He is said", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (believe) that he used a special filter for that vibrancy.",
                    options: [
                        {t: "It is believed", c: true}, {t: "He believes", c: false}, 
                        {t: "It believed", c: false}, {t: "There is believed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (report) that millions of selfies are taken every minute.",
                    options: [
                        {t: "It was reported", c: true}, {t: "He was reported", c: false}, 
                        {t: "Reporting", c: false}, {t: "Was reported", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (know) that staring at screens causes eye strain.",
                    options: [
                        {t: "It is known", c: true}, {t: "Knowing", c: false}, 
                        {t: "They know", c: false}, {t: "Is known", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (think) that photography is a form of modern art.",
                    options: [
                        {t: "It is thought", c: true}, {t: "People thought", c: false}, 
                        {t: "Thinking", c: false}, {t: "It think", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (expect) that the new exhibition will be a success.",
                    options: [
                        {t: "It is expected", c: true}, {t: "Expected", c: false}, 
                        {t: "They expect", c: false}, {t: "Its expected", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (claim) that digital content improves massively with simple tips.",
                    options: [
                        {t: "It is claimed", c: true}, {t: "Claiming", c: false}, 
                        {t: "It claims", c: false}, {t: "Claimed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (understand) that good lighting is essential for a portrait.",
                    options: [
                        {t: "Understanding", c: false}, {t: "It is understood", c: true}, 
                        {t: "It understands", c: false}, {t: "Is understood", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (rumor) that the photographer is very talented.",
                    options: [
                        {t: "It is rumored", c: true}, {t: "Is rumored", c: false}, 
                        {t: "They rumor", c: false}, {t: "Rumoring", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (suggest) that students should limit their screen time.",
                    options: [
                        {t: "Suggesting", c: false}, {t: "It is suggested", c: true}, 
                        {t: "It suggests", c: false}, {t: "Was suggest", c: false}
                    ]
                },

                // --- Set 3: Reporting Passive (Structure 2: Subject is...) ---
                {
                    type: "mcq",
                    q: "The photographer _______ (believe) to use a secret filter.",
                    options: [
                        {t: "believes", c: false}, {t: "is believing", c: false}, 
                        {t: "is believed", c: true}, {t: "it is believed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Good composition _______ (consider) to be the most important part.",
                    options: [
                        {t: "considers", c: false}, {t: "is considered", c: true}, 
                        {t: "it is considered", c: false}, {t: "are considered", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The new lens _______ (expect) to be expensive.",
                    options: [
                        {t: "is expected", c: true}, {t: "expects", c: false}, 
                        {t: "it is expected", c: false}, {t: "expected", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Modern frames _______ (say) to improve your overall look.",
                    options: [
                        {t: "is said", c: false}, {t: "say", c: false}, 
                        {t: "are said", c: true}, {t: "it is said", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Short-sightedness _______ (know) to be common among students.",
                    options: [
                        {t: "is known", c: true}, {t: "knows", c: false}, 
                        {t: "knowing", c: false}, {t: "are known", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Screens _______ (think) to cause blurry vision in the long term.",
                    options: [
                        {t: "thinks", c: false}, {t: "is thought", c: false}, 
                        {t: "are thought", c: true}, {t: "thought", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Professional cameras _______ (report) to have better sensors.",
                    options: [
                        {t: "are reported", c: true}, {t: "is reported", c: false}, 
                        {t: "report", c: false}, {t: "reporting", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "That digital exhibition _______ (claim) to be unique.",
                    options: [
                        {t: "claims", c: false}, {t: "is claimed", c: true}, 
                        {t: "are claimed", c: false}, {t: "it is claimed", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "Optometrists _______ (understand) to be eye experts.",
                    options: [
                        {t: "is understood", c: false}, {t: "understands", c: false}, 
                        {t: "are understood", c: true}, {t: "understood", c: false}
                    ]
                },
                {
                    type: "mcq",
                    q: "The colors in the photo _______ (said) to be vibrant.",
                    options: [
                        {t: "is said", c: false}, {t: "are said", c: true}, 
                        {t: "it is said", c: false}, {t: "says", c: false}
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
                    text: "I had my eyes checked yesterday.<br><small style='color:#0077b6'>(Eu fiz um exame de vista ontem.)</small>", 
                    audio: "TTS: I had my eyes checked yesterday.", 
                    arrow: "↘" 
                },
                { 
                    text: "It is said that a picture is worth a thousand words.<br><small style='color:#0077b6'>(Dizem que uma imagem vale mais que mil palavras.)</small>", 
                    audio: "TTS: It is said that a picture is worth a thousand words.", 
                    arrow: "↘" 
                },
                { 
                    text: "Can you take a picture of me?<br><small style='color:#0077b6'>(Você pode tirar uma foto minha?)</small>", 
                    audio: "TTS: Can you take a picture of me?", 
                    arrow: "↗" 
                },
                { 
                    text: "This photo is eye-catching, isn't it?<br><small style='color:#0077b6'>(Esta foto é cativante, não é?)</small>", 
                    audio: "TTS: This photo is eye-catching, isn't it?", 
                    arrow: "↗" 
                },
                { 
                    text: "I got my camera fixed at the mall.<br><small style='color:#0077b6'>(Eu mandei consertar minha câmera no shopping.)</small>", 
                    audio: "TTS: I got my camera fixed at the mall.", 
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
                    instruction: "Listen to Celine talking about her new photography hobby and type the missing words.<br><small style='color:#0077b6'>(Ouça Celine falando sobre seu novo hobby de fotografia e digite as palavras que faltam.)</small>",
                    audio: "TTS: I decided to start a photography course. Last week, I had my portrait taken by an expert. It is believed that having the right lighting is the most important part. I want to upload my best landscape photos to my profile to get more followers.",
                    text: "I decided to start a [photography] course. Last week, I had my portrait taken by an [expert]. It is believed that having the right [lighting] is the most important part. I want to [upload] my best [landscape] photos to my [profile] to get more [followers]."
                },
                // Drill 2: Dropdown (MP3) - Combined for Engine Safety
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo e escolha as opções corretas.)</small>",
                    audio: "audio/em2-2-4/step5_drill2.mp3",
                    questions: [
                        { 
                            q: "Albert: Celine, your vision looks [blurry | clear | digital].", 
                            a: "blurry" 
                        },
                        { 
                            q: "Albert: Have you [had your eyes tested | seen a camera | posted a story] recently?", 
                            a: "had your eyes tested" 
                        },
                        { 
                            q: "Celine: Not yet. I am [short-sighted | photographer | eye-catching], so I need to [wear glasses | edit photos | download apps].", 
                            a: "short-sighted" 
                        },
                        { 
                            q: "Albert: It is reported that the [optometrist | camera | flash] near the school is very good.", 
                            a: "optometrist" 
                        }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the question and choose the logical response based on the lesson.<br><small style='color:#0077b6'>(Ouça a pergunta e escolha a resposta lógica baseada na lição.)</small>",
                    audio: "TTS: Where did Albert have his camera fixed?",
                    options: [
                        { t: "He is believed to be a great photographer.", c: false },
                        { t: "He had it fixed at the specialized shop downtown.", c: true },
                        { t: "His vision is very clear.", c: false },
                        { t: "He took a selfie with Celine.", c: false }
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
                // 6a: Narration
                {
                    title: "Narration - The Professional’s Eye",
                    audio: "TTS: Isabela is a professional photographer. She is known to have a unique way with lighting. In her studio, she has amazing portraits taken for famous magazines. Before she delivers the work, she gets her photos edited meticulously. It is said that her passion started as a child when she had her first camera given to her by her parents. Now, she uses high-quality lenses and always checks the composition before she presses the button. || audio/em2-2-4/p6_text1.mp3",
                    body: "Isabela is a professional photographer. She is known to have a unique way with lighting. In her studio, she has amazing portraits taken for famous magazines. Before she delivers the work, she gets her photos edited meticulously. It is said that her passion started as a child when she had her first camera given to her by her parents. Now, she uses high-quality lenses and always checks the composition before she presses the button.",
                    questions: [
                        {
                            q: "How does Isabela prepare her photos before delivery?",
                            options: [
                                { t: "She takes a selfie.", c: false },
                                { t: "She gets them edited meticulously.", c: true },
                                { t: "She downloads them from social media.", c: false },
                                { t: "She buys new lenses.", c: false }
                            ]
                        },
                        {
                            q: "What is said about Isabela's professional skills?",
                            options: [
                                { t: "She has a unique way with lighting.", c: true },
                                { t: "She only uses digital filters.", c: false },
                                { t: "She is short-sighted.", c: false },
                                { t: "She doesn't check composition.", c: false }
                            ]
                        },
                        {
                            q: "When did her passion for photography begin?",
                            options: [
                                { t: "When she had her eyes tested.", c: false },
                                { t: "When she had her first camera given as a child.", c: true },
                                { t: "When she started using hashtags.", c: false },
                                { t: "When she moved to a studio.", c: false }
                            ]
                        }
                    ]
                },
                // 6b: Dialogue
                {
                    title: "Dialogue - Vision Problems",
                    audio: "audio/em2-2-4/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, can you read the hashtag on that advertisement? It looks so blurry to me.<br><b>Celine:</b> I can read it easily. It says #SaveThePlanet. You really need to get your eyes checked, Albert.<br><b>Albert:</b> I know. It is believed that too much screen time makes people short-sighted.<br><b>Celine:</b> Exactly. My sister had contact lenses prescribed last month, and now her vision is perfectly clear.<br><b>Albert:</b> I think I would rather wear glasses. I like the modern frames I saw online.<br><b>Celine:</b> Then you should have an eye exam done as soon as possible!",
                    questions: [
                        {
                            q: "Why can't Albert read the hashtag?",
                            options: [
                                { t: "Because the lighting is bad.", c: false },
                                { t: "Because his vision is blurry.", c: true },
                                { t: "Because he had his photo taken.", c: false },
                                { t: "Because he lost his glasses.", c: false }
                            ]
                        },
                        {
                            q: "What happened to Celine's sister?",
                            options: [
                                { t: "She became a photographer.", c: false },
                                { t: "She had contact lenses prescribed.", c: true },
                                { t: "She got her camera fixed.", c: false },
                                { t: "She bought modern frames.", c: false }
                            ]
                        },
                        {
                            q: "What is Albert's preference for correcting his vision?",
                            options: [
                                { t: "He wants to wear glasses.", c: true },
                                { t: "He wants contact lenses.", c: false },
                                { t: "He doesn't want to do anything.", c: false },
                                { t: "He wants to get a photo edited.", c: false }
                            ]
                        }
                    ]
                },
                // 6c: Description
                {
                    title: "Description - The Annual Check-up",
                    audio: "TTS: Every two years, it is recommended that adults have an eye exam taken. During the test, the optometrist checks if the patient is far-sighted or short-sighted. It is understood that good vision is essential for safety. If the vision isn't clear, the patient can have glasses prescribed. Many people also get special coatings put on their lenses to reduce glare from digital screens. || audio/em2-2-4/p6_text3.mp3",
                    body: "Every two years, it is recommended that adults have an eye exam taken. During the test, the optometrist checks if the patient is far-sighted or short-sighted. It is understood that good vision is essential for safety. If the vision isn't clear, the patient can have glasses prescribed. Many people also get special coatings put on their lenses to reduce glare from digital screens.",
                    questions: [
                        {
                            q: "How often should adults have an eye exam?",
                            options: [
                                { t: "Every week.", c: false },
                                { t: "Every two years.", c: true },
                                { t: "Once in their life.", c: false },
                                { t: "Every month.", c: false }
                            ]
                        },
                        {
                            q: "What can be done if a patient's vision is not clear?",
                            options: [
                                { t: "They can have glasses prescribed.", c: true },
                                { t: "They can edit a portrait.", c: false },
                                { t: "They can upload a story.", c: false },
                                { t: "They can buy a new camera.", c: false }
                            ]
                        },
                        {
                            q: "Why do people get special coatings on their lenses?",
                            options: [
                                { t: "To change the color of their eyes.", c: false },
                                { t: "To reduce glare from digital screens.", c: true },
                                { t: "To make the frames look better.", c: false },
                                { t: "To improve composition.", c: false }
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
                // Drill 1: Matching (Vocab)
                {
                    type: "matching",
                    instruction: "Match the term with its correct definition.<br><small style='color:#0077b6'>(Relacione o termo com sua definição correta.)</small>",
                    pairs: [
                        { left: "Short-sighted", right: "Cannot see things that are far away", val: "1" },
                        { left: "Far-sighted", right: "Cannot see things that are close", val: "2" },
                        { left: "Photographer", right: "A person who takes professional photos", val: "3" },
                        { left: "Composition", right: "The way objects are arranged in a photo", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Causative Passive)
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a Causative Passive sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "tested / had / yesterday / my / I / eyes / .",
                    correct: "I had my eyes tested yesterday ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in the correct order to form a Causative Passive sentence.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>",
                    sentence: "printed / photos / we / get / will / our / .",
                    correct: "We will get our photos printed ."
                },
                // Drill 3: Multiple Choice (Reporting Passive)
                {
                    type: "mcq",
                    instruction: "It is _______ that social media impacts our mental health.",
                    options: [
                        { t: "say", c: false },
                        { t: "said", c: true },
                        { t: "saying", c: false },
                        { t: "says", c: false }
                    ]
                },
                {
                    type: "mcq",
                    instruction: "The new camera is _______ to be the best on the market.",
                    options: [
                        { t: "expected", c: true },
                        { t: "expect", c: false },
                        { t: "expecting", c: false },
                        { t: "expects", c: false }
                    ]
                },
                // Drill 4: Clickable Error (Find the Mistake)
                {
                    type: "clickable-error",
                    instruction: "Find the grammatical mistake in each sentence.<br><small style='color:#0077b6'>(Encontre o erro gramatical em cada frase.)</small>",
                    sentence: "I [make](error:have) my hair cut every month.",
                },
                {
                    type: "clickable-error",
                    instruction: "Find the mistake.<br><small style='color:#0077b6'>(Encontre o erro.)</small>",
                    sentence: "The photo is [blur](error:blurry).",
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Language Island: Write a short paragraph (5-7 sentences) about a time you had something done (service) related to your vision or your photos.<br><br><small style='color:#0077b6'>(Agora é sua vez de ser um repórter visual! Escreva um pequeno parágrafo (5-7 frases) sobre uma vez que você mandou fazer algo (serviço) relacionado à sua visão ou às suas fotos.)</small>",
            example: "\"Last month, my vision was very blurry, so I had my eyes tested by an optometrist. I discovered I was short-sighted and had new glasses made. I chose a very stylish frame. It is said that a new pair of spectacles can change your look. Now, I feel clear and my photos look eye-catching because I can see the focus!\"",
            prompts: [
                "Mention if the result was [eye-catching] or [blurry]. <br><small style='color:#0077b6'>(Mencione se o resultado foi cativante ou embaçado.)</small>",
                "Use at least one [Reporting Passive] sentence (e.g., 'It is said that...'). <br><small style='color:#0077b6'>(Use pelo menos uma frase na Passiva de Relato.)</small>",
                "Describe the service using Have or Get. <br><small style='color:#0077b6'>(Descreva o serviço usando Have ou Get.)</small>"
            ]
        },

        // ======================================================
        // STEP 9: WRAP IT UP (Flashcards - Part 1)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Vocabulary Flashcards: Verbs (Step 2) ---
                { 
                    term: "Edit (a photo)", 
                    definition: "To alter or improve a digital image using software.", 
                    defTrans: "Editar (uma foto)",
                    example: "I need to edit the brightness of this portrait.", 
                    audioFront: "TTS: Edit a photo",
                    audioBack: "TTS: I need to edit the brightness of this portrait." 
                },
                { 
                    term: "Focus", 
                    definition: "To adjust the lens to make an image sharp and clear.", 
                    defTrans: "Focar",
                    example: "The camera needs to focus on the subject's eyes.", 
                    audioFront: "TTS: Focus",
                    audioBack: "TTS: The camera needs to focus on the subject's eyes." 
                },
                { 
                    term: "Zoom (in/out)", 
                    definition: "To make the subject appear closer or further away.", 
                    defTrans: "Aproximar / Afastar (zoom)",
                    example: "Can you zoom in to see the details of the flower?", 
                    audioFront: "TTS: Zoom in and out",
                    audioBack: "TTS: Can you zoom in to see the details of the flower?" 
                },
                { 
                    term: "Develop (film)", 
                    definition: "The chemical process used to make film images visible.", 
                    defTrans: "Revelar (filme)",
                    example: "He still knows how to develop film in a darkroom.", 
                    audioFront: "TTS: Develop film",
                    audioBack: "TTS: He still knows how to develop film in a darkroom." 
                },
                { 
                    term: "Print (a photo)", 
                    definition: "To produce a physical copy of a digital image on paper.", 
                    defTrans: "Imprimir (uma foto)",
                    example: "I will print my favorite landscape for the wall.", 
                    audioFront: "TTS: Print a photo",
                    audioBack: "TTS: I will print my favorite landscape for the wall." 
                },
                { 
                    term: "Take a photo/picture", 
                    definition: "The act of capturing an image using a device.", 
                    defTrans: "Tirar uma foto",
                    example: "Let's take a photo together near the lake.", 
                    audioFront: "TTS: Take a photo or picture",
                    audioBack: "TTS: Let's take a photo together near the lake." 
                },
                { 
                    term: "Shoot (a photo)", 
                    definition: "A term often used by professionals for the act of taking photos.", 
                    defTrans: "Fotografar / Tirar (uma foto)",
                    example: "I want to shoot some pictures during the golden hour.", 
                    audioFront: "TTS: Shoot a photo",
                    audioBack: "TTS: I want to shoot some pictures during the golden hour." 
                },
                { 
                    term: "See / Look / Watch", 
                    definition: "Different ways of using your vision to perceive things.", 
                    defTrans: "Ver / Olhar / Assistir",
                    example: "I can see the composition more clearly now.", 
                    audioFront: "TTS: See, Look, or Watch",
                    audioBack: "TTS: I can see the composition more clearly now." 
                },
                { 
                    term: "Wear glasses", 
                    definition: "Using corrective lenses in a frame to improve vision.", 
                    defTrans: "Usar óculos",
                    example: "She has to wear glasses to see the board.", 
                    audioFront: "TTS: Wear glasses",
                    audioBack: "TTS: She has to wear glasses to see the board." 
                },
                { 
                    term: "Post", 
                    definition: "To publish content or photos on a digital profile.", 
                    defTrans: "Postar",
                    example: "How often do you post updates on your profile?", 
                    audioFront: "TTS: Post",
                    audioBack: "TTS: How often do you post updates on your profile?" 
                },
                { 
                    term: "Share", 
                    definition: "To distribute content so others can see it.", 
                    defTrans: "Compartilhar",
                    example: "Please share that eye-catching photo with me.", 
                    audioFront: "TTS: Share",
                    audioBack: "TTS: Please share that eye-catching photo with me." 
                },
                { 
                    term: "Upload", 
                    definition: "To send files from your device to the internet.", 
                    defTrans: "Carregar / Fazer upload",
                    example: "It takes a few minutes to upload high-quality files.", 
                    audioFront: "TTS: Upload",
                    audioBack: "TTS: It takes a few minutes to upload high-quality files." 
                },
                { 
                    term: "Download", 
                    definition: "To receive files from the internet onto your device.", 
                    defTrans: "Baixar",
                    example: "You can download the digital album from this link.", 
                    audioFront: "TTS: Download",
                    audioBack: "TTS: You can download the digital album from this link." 
                },
                { 
                    term: "Like", 
                    definition: "To show approval of a post by clicking an icon.", 
                    defTrans: "Curtida / Curtir",
                    example: "I liked every photo from your trip to Brazil.", 
                    audioFront: "TTS: Like",
                    audioBack: "TTS: I liked every photo from your trip to Brazil." 
                },
                { 
                    term: "Comment", 
                    definition: "To write a response or opinion on a digital post.", 
                    defTrans: "Comentário / Comentar",
                    example: "Feel free to comment on my latest post.", 
                    audioFront: "TTS: Comment",
                    audioBack: "TTS: Feel free to comment on my latest post." 
                },
                { 
                    term: "Tag", 
                    definition: "To identify or label a specific person in a photo.", 
                    defTrans: "Marcar (pessoas)",
                    example: "Don't forget to tag Albert in the group photo.", 
                    audioFront: "TTS: Tag",
                    audioBack: "TTS: Don't forget to tag Albert in the group photo." 
                },

                // --- Vocabulary Flashcards: Nouns & Adjectives (Step 2) ---
                { 
                    term: "Photography", 
                    definition: "The art or process of producing images by the action of light.", 
                    defTrans: "Fotografia",
                    example: "Photography is a very popular hobby today.", 
                    audioFront: "TTS: Photography",
                    audioBack: "TTS: Photography is a very popular hobby today." 
                },
                { 
                    term: "Photo / Picture", 
                    definition: "An image captured by a camera.", 
                    defTrans: "Foto / Fotografia",
                    example: "This picture is a bit blurry.", 
                    audioFront: "TTS: Photo or Picture",
                    audioBack: "TTS: This picture is a bit blurry." 
                },
                { 
                    term: "Camera", 
                    definition: "A device used for capturing and recording images.", 
                    defTrans: "Câmera (fotográfica)",
                    example: "My new camera has a very fast focus.", 
                    audioFront: "TTS: Camera",
                    audioBack: "TTS: My new camera has a very fast focus." 
                },
                { 
                    term: "Lens", 
                    definition: "A curved piece of glass used to focus light.", 
                    defTrans: "Lente",
                    example: "You need a wide lens for landscape photography.", 
                    audioFront: "TTS: Lens",
                    audioBack: "TTS: You need a wide lens for landscape photography." 
                },
                { 
                    term: "Flash", 
                    definition: "A sudden bright light used to illuminate a photo.", 
                    defTrans: "Flash",
                    example: "The flash was too bright in the selfie.", 
                    audioFront: "TTS: Flash",
                    audioBack: "TTS: The flash was too bright in the selfie." 
                },
                { 
                    term: "Photographer", 
                    definition: "A person who takes photographs, especially as a profession.", 
                    defTrans: "Fotógrafo(a)",
                    example: "The photographer used great lighting.", 
                    audioFront: "TTS: Photographer",
                    audioBack: "TTS: The photographer used great lighting." 
                },
                { 
                    term: "Portrait", 
                    definition: "A photograph of a person, usually focusing on the face.", 
                    defTrans: "Retrato",
                    example: "This is a beautiful portrait of my grandmother.", 
                    audioFront: "TTS: Portrait",
                    audioBack: "TTS: This is a beautiful portrait of my grandmother." 
                },
                { 
                    term: "Landscape", 
                    definition: "A photograph of an extensive area of land or scenery.", 
                    defTrans: "Paisagem",
                    example: "I love taking landscape photos of the forest.", 
                    audioFront: "TTS: Landscape",
                    audioBack: "TTS: I love taking landscape photos of the forest." 
                },
                // --- Vocabulary Flashcards: Nouns & Adjectives (Step 2 Continued) ---
                { 
                    term: "Selfie", 
                    definition: "A photograph that one has taken of oneself, typically with a smartphone.", 
                    defTrans: "Selfie",
                    example: "Let's take a selfie with the teacher!", 
                    audioFront: "TTS: Selfie",
                    audioBack: "TTS: Let's take a selfie with the teacher!" 
                },
                { 
                    term: "Filter", 
                    definition: "A software effect applied to a photo to change its appearance.", 
                    defTrans: "Filtro",
                    example: "Which filter makes the colors look warmer?", 
                    audioFront: "TTS: Filter",
                    audioBack: "TTS: Which filter makes the colors look warmer?" 
                },
                { 
                    term: "Eye-catching", 
                    definition: "Immediately noticeable because it is particularly interesting or bright.", 
                    defTrans: "Cativante / Chamativo",
                    example: "That red frame is very eye-catching.", 
                    audioFront: "TTS: Eye-catching",
                    audioBack: "TTS: That red frame is very eye-catching." 
                },
                { 
                    term: "Composition", 
                    definition: "The way in which the different parts of a photo are arranged.", 
                    defTrans: "Composição",
                    example: "Think about the composition before you shoot.", 
                    audioFront: "TTS: Composition",
                    audioBack: "TTS: Think about the composition before you shoot." 
                },
                { 
                    term: "Angle", 
                    definition: "The position or direction from which a camera looks at a subject.", 
                    defTrans: "Ângulo",
                    example: "Try a lower angle to make the building look taller.", 
                    audioFront: "TTS: Angle",
                    audioBack: "TTS: Try a lower angle to make the building look taller." 
                },
                { 
                    term: "Lighting", 
                    definition: "The arrangement or type of light used in a photograph.", 
                    defTrans: "Iluminação",
                    example: "Natural lighting is usually the best for photos.", 
                    audioFront: "TTS: Lighting",
                    audioBack: "TTS: Natural lighting is usually the best for photos." 
                },
                { 
                    term: "Eye(s)", 
                    definition: "The organs of the body used for seeing.", 
                    defTrans: "Olho(s)",
                    example: "My eyes are tired from the screen light.", 
                    audioFront: "TTS: Eyes",
                    audioBack: "TTS: My eyes are tired from the screen light." 
                },
                { 
                    term: "Vision / Sight", 
                    definition: "The faculty or sense of seeing.", 
                    defTrans: "Visão",
                    example: "Good vision is important for a photographer.", 
                    audioFront: "TTS: Vision or Sight",
                    audioBack: "TTS: Good vision is important for a photographer." 
                },
                { 
                    term: "Contact lenses", 
                    definition: "Corrective lenses placed directly on the surface of the eye.", 
                    defTrans: "Lentes de contato",
                    example: "I find contact lenses more comfortable than glasses.", 
                    audioFront: "TTS: Contact lenses",
                    audioBack: "TTS: I find contact lenses more comfortable than glasses." 
                },
                { 
                    term: "Far-sighted (Hyperopia)", 
                    definition: "Dificulty in seeing objects that are close.", 
                    defTrans: "Hipermetrope",
                    example: "He is far-sighted, so he needs glasses to read.", 
                    audioFront: "TTS: Far-sighted",
                    audioBack: "TTS: He is far-sighted, so he needs glasses to read." 
                },
                { 
                    term: "Short-sighted (Myopia)", 
                    definition: "Difficulty in seeing objects that are far away.", 
                    defTrans: "Míope",
                    example: "I am short-sighted; things far away look blurry.", 
                    audioFront: "TTS: Short-sighted",
                    audioBack: "TTS: I am short-sighted; things far away look blurry." 
                },
                { 
                    term: "Blurry", 
                    definition: "An image or vision that is not sharp or clear.", 
                    defTrans: "Embaçado(a)",
                    example: "The background is blurry in this portrait.", 
                    audioFront: "TTS: Blurry",
                    audioBack: "TTS: The background is blurry in this portrait." 
                },
                { 
                    term: "Clear", 
                    definition: "Easy to perceive, understand, or see clearly.", 
                    defTrans: "Nítido(a) / Claro(a)",
                    example: "The image becomes clear when you adjust the focus.", 
                    audioFront: "TTS: Clear",
                    audioBack: "TTS: The image becomes clear when you adjust the focus." 
                },
                { 
                    term: "Eye exam / Eye test", 
                    definition: "A test performed by a professional to evaluate vision health.", 
                    defTrans: "Exame de vista",
                    example: "I have an eye exam at the clinic tomorrow.", 
                    audioFront: "TTS: Eye exam or Eye test",
                    audioBack: "TTS: I have an eye exam at the clinic tomorrow." 
                },
                { 
                    term: "Optometrist / Optician", 
                    definition: "Professionals specialized in eye care and prescribing lenses.", 
                    defTrans: "Optometrista / Óptico",
                    example: "The optometrist gave me a new prescription.", 
                    audioFront: "TTS: Optometrist or Optician",
                    audioBack: "TTS: The optometrist gave me a new prescription." 
                },
                { 
                    term: "Glasses / Spectacles", 
                    definition: "Lenses in a frame worn on the face to correct vision.", 
                    defTrans: "Óculos",
                    example: "I broke the frame of my glasses.", 
                    audioFront: "TTS: Glasses or Spectacles",
                    audioBack: "TTS: I broke the frame of my glasses." 
                },
                { 
                    term: "Prescription", 
                    definition: "A document indicating the lens power needed for glasses.", 
                    defTrans: "Prescrição / Receita (de óculos)",
                    example: "Did you bring your latest prescription?", 
                    audioFront: "TTS: Prescription",
                    audioBack: "TTS: Did you bring your latest prescription?" 
                },
                { 
                    term: "Frame", 
                    definition: "The plastic or metal structure that holds the lenses.", 
                    defTrans: "Armação (de óculos)",
                    example: "I want a modern frame for my new spectacles.", 
                    audioFront: "TTS: Frame",
                    audioBack: "TTS: I want a modern frame for my new spectacles." 
                },
                { 
                    term: "Social media", 
                    definition: "Websites and apps used to share content and interact.", 
                    defTrans: "Mídia social / Rede social",
                    example: "Photography is very important for social media.", 
                    audioFront: "TTS: Social media",
                    audioBack: "TTS: Photography is very important for social media." 
                },
                { 
                    term: "Platform", 
                    definition: "A specific digital system like Instagram or TikTok.", 
                    defTrans: "Plataforma",
                    example: "Instagram is a visual platform.", 
                    audioFront: "TTS: Platform",
                    audioBack: "TTS: Instagram is a visual platform." 
                },
                { 
                    term: "Profile", 
                    definition: "The personal page of a user on a social network.", 
                    defTrans: "Perfil",
                    example: "You should update your profile picture.", 
                    audioFront: "TTS: Profile",
                    audioBack: "TTS: You should update your profile picture." 
                },
                { 
                    term: "Follower", 
                    definition: "Someone who follows another person's posts online.", 
                    defTrans: "Seguidor(a)",
                    example: "The influencer gained many followers today.", 
                    audioFront: "TTS: Follower",
                    audioBack: "TTS: The influencer gained many followers today." 
                },
                { 
                    term: "Influencer", 
                    definition: "A person with many followers who influences behaviors.", 
                    defTrans: "Influenciador(a)",
                    example: "She is a famous digital influencer.", 
                    audioFront: "TTS: Influencer",
                    audioBack: "TTS: She is a famous digital influencer." 
                },
                { 
                    term: "Hashtag (#)", 
                    definition: "A label used to categorize topics on social media.", 
                    defTrans: "Hashtag (#)",
                    example: "Use a hashtag to find more landscape photos.", 
                    audioFront: "TTS: Hashtag",
                    audioBack: "TTS: Use a hashtag to find more landscape photos." 
                },
                { 
                    term: "Story / Stories", 
                    definition: "Posts that disappear after 24 hours.", 
                    defTrans: "Story / Stories",
                    example: "I posted a short video to my story.", 
                    audioFront: "TTS: Story or Stories",
                    audioBack: "TTS: I posted a short video to my story." 
                },
                { 
                    term: "Feed", 
                    definition: "A page where you see recent posts from those you follow.", 
                    defTrans: "Feed (linha do tempo)",
                    example: "My feed is full of eye-catching images.", 
                    audioFront: "TTS: Feed",
                    audioBack: "TTS: My feed is full of eye-catching images." 
                },
                { 
                    term: "Online / Digital", 
                    definition: "Related to computers, the internet, and modern technology.", 
                    defTrans: "Online / Digital",
                    example: "Most digital cameras are easy to use.", 
                    audioFront: "TTS: Online or Digital",
                    audioBack: "TTS: Most digital cameras are easy to use." 
                },
                // --- Vocabulary Flashcards: Expressions (Step 2) ---
                { 
                    term: "Can you take a picture of me?", 
                    definition: "A polite request for someone to photograph you.", 
                    defTrans: "Você pode tirar uma foto minha?",
                    example: "Excuse me, can you take a picture of me?", 
                    audioFront: "TTS: Can you take a picture of me?",
                    audioBack: "TTS: Excuse me, can you take a picture of me?" 
                },
                { 
                    term: "Let's take a selfie.", 
                    definition: "A suggestion to take a self-portrait together.", 
                    defTrans: "Vamos tirar uma selfie.",
                    example: "The lighting is perfect! Let's take a selfie.", 
                    audioFront: "TTS: Let's take a selfie.",
                    audioBack: "TTS: The lighting is perfect! Let's take a selfie." 
                },
                { 
                    term: "This photo is eye-catching!", 
                    definition: "Used to describe an image that immediately grabs attention.", 
                    defTrans: "Esta foto é cativante!",
                    example: "Wow, the colors are great! This photo is eye-catching!", 
                    audioFront: "TTS: This photo is eye-catching!",
                    audioBack: "TTS: Wow, the colors are great! This photo is eye-catching!" 
                },
                { 
                    term: "My vision is a bit blurry.", 
                    definition: "Used to say that you cannot see things clearly.", 
                    defTrans: "Minha visão está um pouco embaçada.",
                    example: "I can't read the screen; my vision is a bit blurry.", 
                    audioFront: "TTS: My vision is a bit blurry.",
                    audioBack: "TTS: I can't read the screen; my vision is a bit blurry." 
                },
                { 
                    term: "I need to get my eyes checked.", 
                    definition: "Expressing the intention to have a vision exam.", 
                    defTrans: "Preciso fazer um exame de vista.",
                    example: "I need to get my eyes checked because I have headaches.", 
                    audioFront: "TTS: I need to get my eyes checked.",
                    audioBack: "TTS: I need to get my eyes checked because I have headaches." 
                },
                { 
                    term: "He had his photo taken.", 
                    definition: "Structure indicating someone else performed the service of taking the photo.", 
                    defTrans: "Alguém tirou a foto dele.",
                    example: "Yesterday, he had his photo taken for his passport.", 
                    audioFront: "TTS: He had his photo taken.",
                    audioBack: "TTS: Yesterday, he had his photo taken for his passport." 
                },
                { 
                    term: "She's short-sighted.", 
                    definition: "Describing someone who cannot see objects that are far away.", 
                    defTrans: "Ela é míope.",
                    example: "She wears glasses because she's short-sighted.", 
                    audioFront: "TTS: She is short-sighted.",
                    audioBack: "TTS: She wears glasses because she is short-sighted." 
                },
                { 
                    term: "A picture is worth a thousand words.", 
                    definition: "A famous idiom meaning an image can convey complex ideas better than text.", 
                    defTrans: "Uma imagem vale mais que mil palavras.",
                    example: "It is said that a picture is worth a thousand words in journalism.", 
                    audioFront: "TTS: A picture is worth a thousand words.",
                    audioBack: "TTS: It is said that a picture is worth a thousand words in journalism." 
                },
                { 
                    term: "Social media affects self-esteem.", 
                    definition: "A common belief about the psychological impact of digital platforms.", 
                    defTrans: "A mídia social afeta a autoestima.",
                    example: "It is believed that social media affects self-esteem in teenagers.", 
                    audioFront: "TTS: Social media affects self-esteem.",
                    audioBack: "TTS: It is believed that social media affects self-esteem in teenagers." 
                },
                { 
                    term: "How often do you post photos online?", 
                    definition: "A question asking about the frequency of sharing digital content.", 
                    defTrans: "Com que frequência você posta fotos online?",
                    example: "How often do you post photos online? Every day?", 
                    audioFront: "TTS: How often do you post photos online?",
                    audioBack: "TTS: How often do you post photos online? Every day?" 
                },
                { 
                    term: "Where can I have good portraits taken?", 
                    definition: "Asking for a location or recommendation for professional photography services.", 
                    defTrans: "Onde posso tirar bons retratos?",
                    example: "I need a photo for my ID. Where can I have good portraits taken?", 
                    audioFront: "TTS: Where can I have good portraits taken?",
                    audioBack: "TTS: I need a photo for my ID. Where can I have good portraits taken?" 
                },

                // --- Grammar Flashcards: Step 3 ---
                { 
                    term: "Causative Passive (HAVE)", 
                    definition: "Structure: Subject + have + object + past participle.", 
                    defTrans: "Passiva Causativa (Ter)",
                    example: "I had my eyes tested by the optician.", 
                    audioFront: "TTS: Causative Passive with have.",
                    audioBack: "TTS: I had my eyes tested by the optician." 
                },
                { 
                    term: "Causative Passive (GET)", 
                    definition: "Structure: Subject + get + object + past participle.", 
                    defTrans: "Passiva Causativa (Obter/Conseguir)",
                    example: "Celine got her camera fixed at the mall.", 
                    audioFront: "TTS: Causative Passive with get.",
                    audioBack: "TTS: Celine got her camera fixed at the mall." 
                },
                { 
                    term: "Reporting Passive (IT)", 
                    definition: "Structure: It + passive verb + that + clause.", 
                    defTrans: "Passiva de Relato (Impessoal)",
                    example: "It is said that photography is an art.", 
                    audioFront: "TTS: Reporting Passive with it.",
                    audioBack: "TTS: It is said that photography is an art." 
                },
                { 
                    term: "Reporting Passive (Subject)", 
                    definition: "Structure: Subject + passive verb + to + infinitive.", 
                    defTrans: "Passiva de Relato (Pessoal)",
                    example: "The new lens is expected to be expensive.", 
                    audioFront: "TTS: Reporting Passive with a subject.",
                    audioBack: "TTS: The new lens is expected to be expensive." 
                }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Complete & Exhaustive)
    // ======================================================
    glossary: [
        // PAGE 1: PHOTOGRAPHY & COMPOSITION
        { topic: "Photography", term: "photography", definition: "The art or process of producing images by the action of light.", translation: "Fotografia" },
        { topic: "Photography", term: "photo-picture", definition: "An image captured by a camera.", translation: "Foto / Fotografia" },
        { topic: "Photography", term: "camera", definition: "A device used for capturing and recording images.", translation: "Câmera (fotográfica)" },
        { topic: "Photography", term: "lens", definition: "A curved piece of glass used in cameras to focus light.", translation: "Lente" },
        { topic: "Photography", term: "flash", definition: "A sudden bright light used to illuminate a photograph.", translation: "Flash" },
        { topic: "Photography", term: "photographer", definition: "A person who takes photos, especially as a profession.", translation: "Fotógrafo(a)" },
        { topic: "Photography", term: "portrait", definition: "A photograph of a person, usually focusing on the face.", translation: "Retrato" },
        { topic: "Photography", term: "landscape", definition: "A photograph of an extensive area of land or scenery.", translation: "Paisagem" },
        { topic: "Photography", term: "filter", definition: "An effect applied to a photo to change its colors or style.", translation: "Filtro" },
        { topic: "Photography", term: "eye-catching", definition: "Something that immediately attracts visual attention.", translation: "Cativante / Chamativo" },
        { topic: "Photography", term: "composition", definition: "The way elements are organized within a photo frame.", translation: "Composição" },
        { topic: "Photography", term: "angle", definition: "The position or direction from which the camera looks at a subject.", translation: "Ângulo" },
        { topic: "Photography", term: "lighting", definition: "The arrangement and quality of light in a photograph.", translation: "Iluminação" },
        { topic: "Photography", term: "vibrant", definition: "Bright, striking, and full of energy or color.", translation: "Vibrante" },

        // PAGE 2: VISION & OPTICS
        { topic: "Vision & Optics", term: "eye-s", definition: "The organs of the body used for seeing.", translation: "Olho(s)" },
        { topic: "Vision & Optics", term: "vision-sight", definition: "The faculty or sense of seeing.", translation: "Visão" },
        { topic: "Vision & Optics", term: "contact-lenses", definition: "Corrective lenses placed directly on the eye surface.", translation: "Lentes de contato" },
        { topic: "Vision & Optics", term: "far-sighted", definition: "Difficulty in seeing objects that are close.", translation: "Hipermetrope" },
        { topic: "Vision & Optics", term: "short-sighted", definition: "Difficulty in seeing objects that are far away.", translation: "Míope" },
        { topic: "Vision & Optics", term: "blurry", definition: "When an image or vision is not sharp or clear.", translation: "Embaçado(a)" },
        { topic: "Vision & Optics", term: "clear", definition: "Easy to see or perceive; sharp and distinct.", translation: "Nítido(a) / Claro(a)" },
        { topic: "Vision & Optics", term: "eye-exam", definition: "A test performed by a professional to evaluate vision.", translation: "Exame de vista" },
        { topic: "Vision & Optics", term: "optometrist", definition: "A professional specialized in eye care and prescribing lenses.", translation: "Optometrista / Óptico" },
        { topic: "Vision & Optics", term: "wear-glasses", definition: "The act of using corrective lenses in a frame.", translation: "Usar óculos" },
        { topic: "Vision & Optics", term: "prescription", definition: "A document indicating the lens power needed.", translation: "Prescrição / Receita" },
        { topic: "Vision & Optics", term: "frame", definition: "The structure that holds corrective lenses.", translation: "Armação" },

        // PAGE 3: DIGITAL & SOCIAL MEDIA
        { topic: "Digital Media", term: "social-media", definition: "Sites and apps used for sharing content and interacting.", translation: "Mídia social / Rede social" },
        { topic: "Digital Media", term: "platform", definition: "A specific digital system, such as Instagram or TikTok.", translation: "Plataforma" },
        { topic: "Digital Media", term: "profile", definition: "The personal page of a user on a social network.", translation: "Perfil" },
        { topic: "Digital Media", term: "follower", definition: "Someone who follows another person's digital content.", translation: "Seguidor(a)" },
        { topic: "Digital Media", term: "influencer", definition: "A person with many followers who influences others.", translation: "Influenciador(a)" },
        { topic: "Digital Media", term: "hashtag", definition: "A label (#) used to categorize topics on social media.", translation: "Hashtag" },
        { topic: "Digital Media", term: "story", definition: "Short-term digital posts that disappear after 24 hours.", translation: "Story / Stories" },
        { topic: "Digital Media", term: "feed", definition: "A page showing recent updates from those you follow.", translation: "Feed (linha do tempo)" },
        { topic: "Digital Media", term: "online-digital", definition: "Relating to computers and the internet.", translation: "Online / Digital" },
        { topic: "Digital Media", term: "scrolling", definition: "Moving through content on a digital screen.", translation: "Rolar / Deslizar a tela" },
        { topic: "Digital Media", term: "selfie", definition: "A photograph taken of oneself, usually with a smartphone.", translation: "Selfie" },
        { topic: "Digital Media", term: "boring", definition: "Not interesting; tedious.", translation: "Chato / Tedioso" },

        // PAGE 4: VERBS & ACTIONS
        { topic: "Verbs", term: "edit", definition: "To change or improve a photo using software.", translation: "Editar" },
        { topic: "Verbs", term: "focus", definition: "To adjust a lens to make an image sharp.", translation: "Focar" },
        { topic: "Verbs", term: "zoom", definition: "To make a subject appear closer or further away.", translation: "Zoom / Aproximar" },
        { topic: "Verbs", term: "develop", definition: "The process of making film images visible.", translation: "Revelar (filme)" },
        { topic: "Verbs", term: "print", definition: "To produce a physical copy of a digital photo.", translation: "Imprimir" },
        { topic: "Verbs", term: "shoot", definition: "The act of taking or 'shooting' a photograph.", translation: "Fotografar / Atirar" },
        { topic: "Verbs", term: "post", definition: "To publish content on a digital platform.", translation: "Postar" },
        { topic: "Verbs", term: "upload", definition: "To send files from a device to the internet.", translation: "Carregar / Fazer upload" },
        { topic: "Verbs", term: "download", definition: "To receive files from the internet onto a device.", translation: "Baixar / Fazer download" },
        { topic: "Verbs", term: "like", definition: "To show approval of a post.", translation: "Curtir" },
        { topic: "Verbs", term: "comment", definition: "To respond or give an opinion on a post.", translation: "Comentar" },
        { topic: "Verbs", term: "tag", definition: "To label or identify a person in a photo.", translation: "Marcar" },

        // PAGE 5: GRAMMAR & CONTEXT
        { topic: "Grammar & Logic", term: "causative-passive", definition: "Structure (have/get something done) used when arranging a service.", translation: "Passiva Causativa" },
        { topic: "Grammar & Logic", term: "passive-voice", definition: "Grammar structure that focuses on the object receiving the action.", translation: "Voz Passiva" },
        { topic: "Grammar & Logic", term: "reporting-passive", definition: "Using verbs like 'say' or 'believe' in passive to report facts.", translation: "Passiva de Relato" },
        { topic: "Grammar & Logic", term: "known", definition: "To be recognized for a specific quality or action.", translation: "Conhecido" },
        { topic: "Grammar & Logic", term: "suppose", definition: "To think or assume based on evidence.", translation: "Supor / Achar" },
        { topic: "Grammar & Logic", term: "wish", definition: "To express a desire for something to be different.", translation: "Desejar / Quisera" }
    ]
});