/*/**
 * REACH English - LESSON DATA em2-3-7
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-3-7",
    grade: "High School 2nd Grade",
    bimester: "3",
    chapter: "7",
    chapterTitle: "Editing the Code: Science, Ethics, and the Future of Life",

    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss [breakthroughs](tooltip:breakthrough) in [gene editing](tooltip:gene-editing) and [cloning](tooltip:cloning).<br>• Use [phrasal verbs](tooltip:phrasal-verb) with BREAK and CARRY.<br>• Identify words derived from phrasal verbs like [breakdown](tooltip:breakdown) and [breakup](tooltip:breakup).<br>• Master [verb patterns](tooltip:verb-patterns): [Infinitive](tooltip:infinitive) vs. [Gerund](tooltip:gerund).<br>• Evaluate the [ethical](tooltip:ethical) consequences of [resurrecting](tooltip:resurrect) extinct species.",
            welcome: "Hello, future scientists and thinkers! I'm Mr. D!<br>Welcome to a journey into the very building blocks of life! Today, we are opening the door to the world of [genetics](tooltip:genetics). Have you ever imagined [resurrecting](tooltip:resurrect) a [mammoth](tooltip:mammoth)? With technologies like [CRISPR](tooltip:crispr), science fiction is turning into science fact right before our eyes! We will learn how to [discuss](tooltip:discuss) these [controversial](tooltip:controversial) topics using advanced grammar. You’ll learn which verbs need an \"-ing\" and which need a \"to\". It’s time to decode the future! Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss breakthroughs in gene editing and cloning. Use phrasal verbs with BREAK and CARRY in scientific contexts. Identify words derived from phrasal verbs like breakdown and breakup. Master verb patterns: Infinitive vs. Gerund. Evaluate the ethical consequences of resurrecting extinct species.",
                welcome: "TTS: Hello, future scientists and thinkers! I'm Mr. D! Welcome to a journey into the very building blocks of life! Today, we are opening the door to the world of genetics. Have you ever imagined resurrecting a mammoth? With technologies like CRISPR, science fiction is turning into science fact right before our eyes! We will learn how to discuss these controversial topics using advanced grammar. You’ll learn which verbs need an -ing and which need a to. It’s time to decode the future! Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "(Albert and Celine are in the school biology lab. They are looking at a digital simulation of a DNA strand.)",
            contextAudio: "audio/em2-3-7/step1.mp3",
            dialogue: [
                { speaker: "Celine", text: "Albert, look at this simulation! It shows how [CRISPR](tooltip:crispr) [breaks into](tooltip:break-into) a [gene](tooltip:gene) to [modify](tooltip:modify) it. It’s a major [breakthrough](tooltip:breakthrough) in [science](tooltip:science)." },
                { speaker: "Albert", text: "It’s incredible. I [remember reading](tooltip:remember-gerund) about this in a [research](tooltip:research) paper. Scientists [hope to cure](tooltip:hope-to-cure) many [diseases](tooltip:disease) by [cloning](tooltip:cloning) [healthy](tooltip:healthy) [cells](tooltip:cell)." },
                { speaker: "Celine", text: "True, but we need to [stop imagining](tooltip:stop-gerund) only the benefits. We must consider the [ethical](tooltip:ethical) risks. If a new [disease](tooltip:disease) [breaks out](tooltip:break-out) because of a [mutation](tooltip:mutation), what will we do?" },
                { speaker: "Albert", text: "I [agree](tooltip:agree). Some [critics](tooltip:critic) [advise](tooltip:advise) [scientists](tooltip:scientist) to stop and think. We can't just [carry on](tooltip:carry-on) [experimenting](tooltip:experiment) without a detailed [breakdown](tooltip:breakdown) of the [potential](tooltip:potential) [consequences](tooltip:consequence)." },
                { speaker: "Celine", text: "Exactly! Would you like to see a [mammoth](tooltip:mammoth) in real life? Some labs are [trying](tooltip:try-infinitive) to [resurrect](tooltip:resurrect) them using [de-extinction](tooltip:de-extinction) [technology](tooltip:technology)." },
                { speaker: "Albert", text: "I [enjoy thinking](tooltip:enjoy-thinking) about it, but is it [moral](tooltip:moral)? We [forgot to ask](tooltip:forget-infinitive) the teacher if [species](tooltip:species) [cloning](tooltip:cloning) is [considered to be](tooltip:consider-to-be) safe yet." },
                { speaker: "Celine", text: "Let’s [carry out](tooltip:carry-out) more [research](tooltip:research). Their [determination](tooltip:determination) [carried them through](tooltip:carry-through) the first phase of the project, so let's see what happens next!" }
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
            areas: [
                {
                    title: "Science & Genetics",
                    audio: "TTS: Gene. Genome. DNA. CRISPR. Science. Scientist. Extinction. Extinct. Experiment. Breakthrough. Technology. Advance. Fact. Fiction. Benefit. Disease. Illness. Edit. Modify. Research. Develop. Development. Clone. Cloning. Cure. Resurrect. De-extinction. Species. Mammoth. Ethics. Ethical. Moral. Potential. Consequence. Controversial. Risk. Danger.",
                    items: [
                        { term: "Gene / Genome", trans: "gene / genoma" },
                        { term: "DNA", trans: "DNA / ADN" },
                        { term: "CRISPR", trans: "CRISPR (técnica de edição)" },
                        { term: "Science / Scientist", trans: "ciência / cientista" },
                        { term: "Extinction / Extinct", trans: "extinção / extinto(a)" },
                        { term: "Experiment", trans: "experimento / experiência" },
                        { term: "Breakthrough", trans: "avanço / descoberta importante" },
                        { term: "Technology", trans: "tecnologia" },
                        { term: "Advance(ment)", trans: "avanço" },
                        { term: "Fact / Fiction", trans: "fato / ficção" },
                        { term: "Benefit", trans: "benefício" },
                        { term: "Disease / Illness", trans: "doença" },
                        { term: "Edit / Modify", trans: "editar / modificar" },
                        { term: "Research", trans: "pesquisa / pesquisar" },
                        { term: "Develop / Development", trans: "desenvolver / desenvolvimento" },
                        { term: "Clone / Cloning", trans: "clonar / clonagem" },
                        { term: "Cure", trans: "cura / curar" },
                        { term: "Resurrect / De-extinction", trans: "ressuscitar / desextinção" },
                        { term: "Species", trans: "espécie(s)" },
                        { term: "Mammoth", trans: "mamute" },
                        { term: "Ethics / Ethical", trans: "ética / ético(a)" },
                        { term: "Moral", trans: "moral" },
                        { term: "Potential", trans: "potencial" },
                        { term: "Consequence", trans: "consequência" },
                        { term: "Controversial", trans: "controverso(a) / polêmico(a)" },
                        { term: "Risk / Danger", trans: "risco / perigo" }
                    ]
                },
                {
                    title: "Phrasal Verbs (BREAK & CARRY)",
                    audio: "TTS: Break down. Break up. Break through. Break into. Break out. Carry on. Carry out. Carry through. Carry over.",
                    items: [
                        { term: "Break down", trans: "analisar / parar de funcionar / desabar" },
                        { term: "Break up", trans: "separar / terminar relacionamento" },
                        { term: "Break through", trans: "fazer descoberta / romper barreira" },
                        { term: "Break into", trans: "invadir / começar algo de repente" },
                        { term: "Break out", trans: "eclodir (guerra/doença) / escapar" },
                        { term: "Carry on", trans: "continuar" },
                        { term: "Carry out", trans: "realizar / conduzir" },
                        { term: "Carry through", trans: "levar a cabo / concluir com sucesso" },
                        { term: "Carry over", trans: "permanecer / continuar existindo em nova situação" }
                    ]
                }
            ],
            // 2B: Context Examples
            exampleGroups: [
                {
                    title: "Science & Genetics",
                    audio: "TTS: We must map the whole genome to find the answer. The DNA structure was discovered many years ago. CRISPR technology allows for precise changes. Every scientist needs to follow strict rules. Many birds are facing extinction due to climate change. Please do not touch the experiment in the lab. The new vaccine is a medical breakthrough. We use technology to improve our lives. This is a huge advancement for medicine. Sometimes it is hard to separate fact from fiction. This new treatment provides a huge benefit. Doctors are fighting a new disease. We can modify the plant to resist insects. Clinical research takes many years. They want to develop a cure for cancer. Cloning animals is a complex process. Scientists hope to cure rare illnesses. Is it right to resurrect ancient species? There are millions of species on Earth. The mammoth lived during the Ice Age. We must discuss the ethics of gene editing. Is this a moral decision for humanity? The project has the potential to change everything. Every action has a consequence. This topic is very controversial in the news. There is always a risk with new technology.",
                    items: [
                        { term: "Gene / Genome", sent: "We must map the whole genome to find the answer.", trans: "Precisamos mapear todo o genoma para encontrar a resposta." },
                        { term: "DNA", sent: "The DNA structure was discovered many years ago.", trans: "A estrutura do DNA foi descoberta há muitos anos." },
                        { term: "CRISPR", sent: "CRISPR technology allows for precise changes.", trans: "A tecnologia CRISPR permite mudanças precisas." },
                        { term: "Science / Scientist", sent: "Every scientist needs to follow strict rules.", trans: "Todo cientista precisa seguir regras rígidas." },
                        { term: "Extinction / Extinct", sent: "Many birds are facing extinction due to climate change.", trans: "Muitas aves estão enfrentando a extinção devido à mudança climática." },
                        { term: "Experiment", sent: "Please do not touch the experiment in the lab.", trans: "Por favor, não toque no experimento no laboratório." },
                        { term: "Breakthrough", sent: "The new vaccine is a medical breakthrough.", trans: "A nova vacina é um avanço médico." },
                        { term: "Technology", sent: "We use technology to improve our lives.", trans: "Usamos a tecnologia para melhorar nossas vidas." },
                        { term: "Advance(ment)", sent: "This is a huge advancement for medicine.", trans: "Este é um enorme avanço para a medicina." },
                        { term: "Fact / Fiction", sent: "Sometimes it is hard to separate fact from fiction.", trans: "Às vezes é difícil separar fato de ficção." },
                        { term: "Benefit", sent: "This new treatment provides a huge benefit.", trans: "Este novo tratamento oferece um enorme benefício." },
                        { term: "Disease / Illness", sent: "Doctors are fighting a new disease.", trans: "Médicos estão combatendo uma nova doença." },
                        { term: "Edit / Modify", sent: "We can modify the plant to resist insects.", trans: "Podemos modificar a planta para resistir a insetos." },
                        { term: "Research", sent: "Clinical research takes many years.", trans: "A pesquisa clínica leva muitos anos." },
                        { term: "Develop / Development", sent: "They want to develop a cure for cancer.", trans: "Eles querem desenvolver uma cura para o câncer." },
                        { term: "Clone / Cloning", sent: "Cloning animals is a complex process.", trans: "Clonar animais é um processo complexo." },
                        { term: "Cure", sent: "Scientists hope to cure rare illnesses.", trans: "Cientistas esperam curar doenças raras." },
                        { term: "Resurrect / De-extinction", sent: "Is it right to resurrect ancient species?", trans: "É certo ressuscitar espécies antigas?" },
                        { term: "Species", sent: "There are millions of species on Earth.", trans: "Existem milhões de espécies na Terra." },
                        { term: "Mammoth", sent: "The mammoth lived during the Ice Age.", trans: "O mamute viveu durante a Era do Gelo." },
                        { term: "Ethics / Ethical", sent: "We must discuss the ethics of gene editing.", trans: "Devemos discutir a ética da edição genética." },
                        { term: "Moral", sent: "Is this a moral decision for humanity?", trans: "Esta é uma decisão moral para a humanidade?" },
                        { term: "Potential", sent: "The project has the potential to change everything.", trans: "O projeto tem o potencial de mudar tudo." },
                        { term: "Consequence", sent: "Every action has a consequence.", trans: "Toda ação tem uma consequência." },
                        { term: "Controversial", sent: "This topic is very controversial in the news.", trans: "Este tópico é muito polêmico nas notícias." },
                        { term: "Risk / Danger", sent: "There is always a risk with new technology.", trans: "Sempre há um risco com novas tecnologias." }
                    ]
                },
                {
                    title: "Phrasal Verbs (BREAK & CARRY)",
                    audio: "TTS: Scientists break down complex structures. The team broke up after the project failed. We hope to break through the barriers of science. New ideas break into the market every day. A debate broke out in the classroom. You must carry on even when it's hard. They need to carry out the test again. Her courage carried her through the crisis. The rules carry over to the next experiment.",
                    items: [
                        { term: "Break down", sent: "Scientists break down complex structures.", trans: "Cientistas analisam estruturas complexas." },
                        { term: "Break up", sent: "The team broke up after the project failed.", trans: "A equipe se separou após o projeto falhar." },
                        { term: "Break through", sent: "We hope to break through the barriers of science.", trans: "Esperamos romper as barreiras da ciência." },
                        { term: "Break into", sent: "New ideas break into the market every day.", trans: "Novas ideias entram no mercado todos os dias." },
                        { term: "Break out", sent: "A debate broke out in the classroom.", trans: "Um debate eclodiu na sala de aula." },
                        { term: "Carry on", sent: "You must carry on even when it's hard.", trans: "Você deve continuar mesmo quando for difícil." },
                        { term: "Carry out", sent: "They need to carry out the test again.", trans: "Eles precisam realizar o teste novamente." },
                        { term: "Carry through", sent: "Her courage carried her through the crisis.", trans: "A coragem dela a ajudou a superar a crise." },
                        { term: "Carry over", sent: "The rules carry over to the next experiment.", trans: "As regras permanecem para o próximo experimento." }
                    ]
                }
            ],
            // 2C: Practice Drills
            drillGroups: [
                {
                    title: "Science & Genetics",
                    drills: [
                        { q: "We must map the whole _______ to find the answer.", options: [{t: "genome", c: true}, {t: "breakthrough", c: false}, {t: "fiction", c: false}, {t: "risk", c: false}], type: "mcq" },
                        { q: "The _______ structure was discovered many years ago.", options: [{t: "DNA", c: true}, {t: "experiment", c: false}, {t: "benefit", c: false}, {t: "disease", c: false}], type: "mcq" },
                        { q: "_______ technology allows for precise genetic changes.", options: [{t: "CRISPR", c: true}, {t: "Science", c: false}, {t: "Ethics", c: false}, {t: "Moral", c: false}], type: "mcq" },
                        { q: "Every _______ needs to follow strict lab rules.", options: [{t: "scientist", c: true}, {t: "potential", c: false}, {t: "consequence", c: false}, {t: "species", c: false}], type: "mcq" },
                        { q: "Many animals are facing _______ due to climate change.", options: [{t: "extinction", c: true}, {t: "benefit", c: false}, {t: "research", c: false}, {t: "moral", c: false}], type: "mcq" },
                        { q: "Please do not touch the _______ in the lab.", options: [{t: "experiment", c: true}, {t: "DNA", c: false}, {t: "genome", c: false}, {t: "risk", c: false}], type: "mcq" },
                        { q: "The new vaccine is a medical _______.", options: [{t: "breakthrough", c: true}, {t: "fact", c: false}, {t: "fiction", c: false}, {t: "danger", c: false}], type: "mcq" },
                        { q: "We use _______ to improve our quality of life.", options: [{t: "technology", c: true}, {t: "ethics", c: false}, {t: "species", c: false}, {t: "moral", c: false}], type: "mcq" },
                        { q: "This is a huge _______ for medical science.", options: [{t: "advancement", c: true}, {t: "risk", c: false}, {t: "experiment", c: false}, {t: "extinction", c: false}], type: "mcq" },
                        { q: "Sometimes it is hard to separate _______ from fiction.", options: [{t: "fact", c: true}, {t: "benefit", c: false}, {t: "disease", c: false}, {t: "potential", c: false}], type: "mcq" },
                        { q: "This new treatment provides a huge _______ to patients.", options: [{t: "benefit", c: true}, {t: "danger", c: false}, {t: "extinction", c: false}, {t: "research", c: false}], type: "mcq" },
                        { q: "Doctors are fighting a new _______ in the hospital.", options: [{t: "disease", c: true}, {t: "fact", c: false}, {t: "breakthrough", c: false}, {t: "mammoth", c: false}], type: "mcq" },
                        { q: "We can _______ the plant to make it resist insects.", options: [{t: "modify", c: true}, {t: "resurrect", c: false}, {t: "clone", c: false}, {t: "cure", c: false}], type: "mcq" },
                        { q: "Clinical _______ takes many years to complete.", options: [{t: "research", c: true}, {t: "experiment", c: false}, {t: "fact", c: false}, {t: "mammoth", c: false}], type: "mcq" },
                        { q: "They want to _______ a cure for cancer soon.", options: [{t: "develop", c: true}, {t: "edit", c: false}, {t: "resurrect", c: false}, {t: "clone", c: false}], type: "mcq" },
                        { q: "_______ animals is a very complex process.", options: [{t: "Cloning", c: true}, {t: "Resurrecting", c: false}, {t: "Modifying", c: false}, {t: "Developing", c: false}], type: "mcq" },
                        { q: "Scientists hope to _______ rare and deadly illnesses.", options: [{t: "cure", c: true}, {t: "edit", c: false}, {t: "clone", c: false}, {t: "resurrect", c: false}], type: "mcq" },
                        { q: "Is it right to _______ ancient and long-lost species?", options: [{t: "resurrect", c: true}, {t: "clone", c: false}, {t: "develop", c: false}, {t: "modify", c: false}], type: "mcq" },
                        { q: "There are millions of different _______ on Earth.", options: [{t: "species", c: true}, {t: "genomes", c: false}, {t: "risks", c: false}, {t: "facts", c: false}], type: "mcq" },
                        { q: "The _______ lived during the cold Ice Age.", options: [{t: "mammoth", c: true}, {t: "scientist", c: false}, {t: "DNA", c: false}, {t: "genome", c: false}], type: "mcq" },
                        { q: "We must always discuss the _______ of gene editing.", options: [{t: "ethics", c: true}, {t: "potential", c: false}, {t: "fact", c: false}, {t: "risk", c: false}], type: "mcq" },
                        { q: "Is this a _______ decision for all of humanity?", options: [{t: "moral", c: true}, {t: "controversial", c: false}, {t: "ethical", c: false}, {t: "scientific", c: false}], type: "mcq" },
                        { q: "The new project has the _______ to change everything.", options: [{t: "potential", c: true}, {t: "benefit", c: false}, {t: "consequence", c: false}, {t: "risk", c: false}], type: "mcq" },
                        { q: "Every action in the lab has a _______.", options: [{t: "consequence", c: true}, {t: "potential", c: false}, {t: "fact", c: false}, {t: "benefit", c: false}], type: "mcq" },
                        { q: "This topic is very _______ in the news lately.", options: [{t: "controversial", c: true}, {t: "moral", c: false}, {t: "ethical", c: false}, {t: "potential", c: false}], type: "mcq" },
                        { q: "There is always a _______ when using new technology.", options: [{t: "risk", c: true}, {t: "benefit", c: false}, {t: "consequence", c: false}, {t: "fact", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Phrasal Verbs (BREAK & CARRY)",
                    drills: [
                        { q: "Scientists need to _______ complex structures to understand them.", options: [{t: "break down", c: true}, {t: "break up", c: false}, {t: "break out", c: false}, {t: "carry on", c: false}], type: "mcq" },
                        { q: "The research team decided to _______ after the project failed.", options: [{t: "break up", c: true}, {t: "carry out", c: false}, {t: "break down", c: false}, {t: "carry on", c: false}], type: "mcq" },
                        { q: "We hope to _______ the barriers of science soon.", options: [{t: "break through", c: true}, {t: "carry through", c: false}, {t: "break into", c: false}, {t: "carry over", c: false}], type: "mcq" },
                        { q: "New scientific ideas _______ the market every day.", options: [{t: "break into", c: true}, {t: "carry on", c: false}, {t: "break out", c: false}, {t: "carry out", c: false}], type: "mcq" },
                        { q: "A serious debate _______ in the classroom yesterday.", options: [{t: "broke out", c: true}, {t: "carried out", c: false}, {t: "broke down", c: false}, {t: "carried on", c: false}], type: "mcq" },
                        { q: "You must _______ even when the experiments get hard.", options: [{t: "carry on", c: true}, {t: "break up", c: false}, {t: "break down", c: false}, {t: "carry over", c: false}], type: "mcq" },
                        { q: "They need to _______ the test again to verify the results.", options: [{t: "carry out", c: true}, {t: "carry on", c: false}, {t: "break into", c: false}, {t: "break through", c: false}], type: "mcq" },
                        { q: "Her courage _______ her through the difficult crisis.", options: [{t: "carried", c: true}, {t: "broke", c: false}, {t: "carried over", c: false}, {t: "broke down", c: false}], type: "mcq" },
                        { q: "The safety rules _______ to the next experiment.", options: [{t: "carry over", c: true}, {t: "carry out", c: false}, {t: "break out", c: false}, {t: "break through", c: false}], type: "mcq" },
                        { q: "We must _______ our research until it is complete.", options: [{t: "carry on", c: true}, {t: "break up", c: false}, {t: "break down", c: false}, {t: "break into", c: false}], type: "mcq" },
                        { q: "Can you _______ the data to show what happened?", options: [{t: "break down", c: true}, {t: "break through", c: false}, {t: "carry out", c: false}, {t: "carry on", c: false}], type: "mcq" },
                        { q: "The computer _______ because it was too old.", options: [{t: "broke down", c: true}, {t: "broke up", c: false}, {t: "broke out", c: false}, {t: "carried on", c: false}], type: "mcq" },
                        { q: "The scientists finally _______ the barrier of the problem.", options: [{t: "broke through", c: true}, {t: "carried through", c: false}, {t: "broke into", c: false}, {t: "carried out", c: false}], type: "mcq" },
                        { q: "The thief _______ the digital system.", options: [{t: "broke into", c: true}, {t: "carried on", c: false}, {t: "broke out", c: false}, {t: "carried out", c: false}], type: "mcq" }
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
            patterns: [
                {
    title: "Words Derived from Phrasal Verbs",
    audio: "TTS: Sometimes, we combine the parts of a phrasal verb to create a noun or an adjective. The meaning is usually very similar to the original verb.",
    explanation: "Sometimes, we combine the parts of a phrasal verb to create a noun or an adjective. <br><span style='color:#0077b6; font-style:italic;'>(Às vezes, combinamos as partes de um verbo frasal para criar um substantivo ou adjetivo.)</span>",
    samples: [
        { en: "<b>Breakthrough</b> (break + through): A major discovery.", pt: "<span style='color:#0077b6'>(Avanço: Uma grande descoberta.)</span>" },
        { en: "<b>Breakdown</b> (break + down): A detailed analysis or failure.", pt: "<span style='color:#0077b6'>(Análise/Falha: Uma análise detalhada ou falha.)</span>" },
        { en: "<b>Breakup</b> (break + up): The end of a relationship or group.", pt: "<span style='color:#0077b6'>(Separação: O fim de um relacionamento ou grupo.)</span>" },
        { en: "<b>Carry-on</b> (carry + on): Luggage you take on a plane.", pt: "<span style='color:#0077b6'>(Bagagem de mão: Bagagem que você leva no avião.)</span>" },
        { en: "<b>Carryover</b> (carry + over): Something left over from a previous time.", pt: "<span style='color:#0077b6'>(Resíduo: Algo que sobrou de um período anterior.)</span>" },
        { en: "<b>Handout</b> (hand + out): Papers given to a class.", pt: "<span style='color:#0077b6'>(Folheto: Papéis entregues a uma classe.)</span>" },
        { en: "<b>Checkout</b> (check + out): The place where you pay.", pt: "<span style='color:#0077b6'>(Caixa: O local onde você paga.)</span>" },
        { en: "<b>Feedback</b> (feed + back): Response or criticism.", pt: "<span style='color:#0077b6'>(Retorno/Feedback: Resposta ou crítica.)</span>" },
        { en: "<b>Setup</b> (set + up): The arrangement of equipment.", pt: "<span style='color:#0077b6'>(Configuração: O arranjo de equipamentos.)</span>" },
        { en: "<b>Layout</b> (lay + out): The way something is arranged.", pt: "<span style='color:#0077b6'>(Estrutura/Layout: A maneira como algo está organizado.)</span>" }
    ]
},
{
    title: "Verb Pattern A: Verb + Infinitive",
    audio: "TTS: Pattern A is used when a verb is followed by the infinitive with to. Common verbs include want, hope, plan, decide, need, agree, promise, refuse, seem, learn, and choose.",
    explanation: "Verb + Infinitive (to + verb). <br><span style='color:#0077b6; font-style:italic;'>(Verbo + Infinitivo com 'to'.)</span>",
    samples: [
        { en: "Common verbs: want, hope, plan, decide, need, agree, promise, refuse, seem, learn, choose.", pt: "<span style='color:#0077b6'>(Verbos comuns: querer, esperar, planejar, decidir, precisar, concordar, prometer, recusar, parecer, aprender, escolher.)</span>" },
        { en: "Ex 1: They <b>hope to cure</b> genetic diseases.", pt: "<span style='color:#0077b6'>(Eles esperam curar doenças.)</span>" },
        { en: "Ex 2: She <b>plans to finish</b> the lab report.", pt: "<span style='color:#0077b6'>(Ela planeja terminar o relatório do laboratório.)</span>" },
        { en: "Ex 3: I <b>decided to study</b> biotechnology.", pt: "<span style='color:#0077b6'>(Eu decidi estudar biotecnologia.)</span>" },
        { en: "Ex 4: We <b>need to protect</b> our rivers.", pt: "<span style='color:#0077b6'>(Nós precisamos proteger nossos rios.)</span>" },
        { en: "Ex 5: He <b>agreed to help</b> with the experiment.", pt: "<span style='color:#0077b6'>(Ele concordou em ajudar com o experimento.)</span>" }
    ]
},
{
    title: "Verb Pattern B: Verb + Gerund",
    audio: "TTS: Pattern B is used when a verb is followed by the gerund form, which is the verb plus ing. Common verbs include enjoy, finish, stop, avoid, suggest, recommend, keep, mind, consider, and imagine.",
    explanation: "Verb + Gerund (verb + -ing). <br><span style='color:#0077b6; font-style:italic;'>(Verbo + Gerúndio (verbo + -ing).)</span>",
    samples: [
        { en: "Common verbs: enjoy, finish, stop, avoid, suggest, recommend, keep, mind, consider, imagine.", pt: "<span style='color:#0077b6'>(Verbos comuns: curtir/aproveitar, terminar, parar, evitar, sugerir, recomendar, manter, importar-se, considerar, imaginar.)</span>" },
        { en: "Ex 1: We <b>enjoy learning</b> about cloning.", pt: "<span style='color:#0077b6'>(Nós curtimos aprender sobre clonagem.)</span>" },
        { en: "Ex 2: Have you <b>finished writing</b> the article?", pt: "<span style='color:#0077b6'>(Você terminou de escrever o artigo?)</span>" },
        { en: "Ex 3: We should <b>avoid polluting</b> the river.", pt: "<span style='color:#0077b6'>(Devemos evitar poluir o rio.)</span>" },
        { en: "Ex 4: They <b>suggested watching</b> the documentary.", pt: "<span style='color:#0077b6'>(Eles sugeriram assistir ao documentário.)</span>" },
        { en: "Ex 5: Please <b>keep working</b> on the simulation.", pt: "<span style='color:#0077b6'>(Por favor, continue trabalhando na simulação.)</span>" }
    ]
},
{
    title: "Verb Pattern C: Verb + Object + Infinitive",
    audio: "TTS: Pattern C is used when we have a verb, followed by an object, and then an infinitive with to. Common verbs include allow, force, encourage, advise, remind, tell, and teach.",
    explanation: "Verb + Object + Infinitive (with 'to'). <br><span style='color:#0077b6; font-style:italic;'>(Verbo + Objeto + Infinitivo com 'to'.)</span>",
    samples: [
        { en: "Common verbs: allow, force, encourage, advise, remind, tell, teach.", pt: "<span style='color:#0077b6'>(Verbos comuns: permitir, forçar, encorajar, aconselhar, lembrar, contar/dizer, ensinar.)</span>" },
        { en: "Ex 1: Ethics <b>allows us to consider</b> the risks.", pt: "<span style='color:#0077b6'>(A ética nos permite considerar os riscos.)</span>" },
        { en: "Ex 2: The teacher <b>advised them to do</b> more research.", pt: "<span style='color:#0077b6'>(A professora os aconselhou a fazer mais pesquisa.)</span>" },
        { en: "Ex 3: Science <b>encourages students to ask</b> difficult questions.", pt: "<span style='color:#0077b6'>(A ciência encoraja os alunos a fazer perguntas difíceis.)</span>" },
        { en: "Ex 4: They <b>reminded me to check</b> the cooling system.", pt: "<span style='color:#0077b6'>(Eles me lembraram de checar o sistema de resfriamento.)</span>" },
        { en: "Ex 5: The discovery <b>encouraged him to carry out</b> more experiments.", pt: "<span style='color:#0077b6'>(A descoberta o encorajou a realizar mais experimentos.)</span>" }
    ]
},
{
    title: "Verb Pattern C (Special): Verbs without 'to'",
    audio: "TTS: Some verbs, like let, make, and help, follow Pattern C but do not use 'to' after the object. These are known as base verbs.",
    explanation: "Verb + Object + Base Verb (No 'to'). <br><span style='color:#0077b6; font-style:italic;'>(Verbo + Objeto + Forma base do verbo - sem o 'to'.)</span>",
    samples: [
        { en: "<b>Verbs:</b> Let, Make, Help.", pt: "<span style='color:#0077b6'>(Verbos: deixar, fazer, ajudar.)</span>" },
        { en: "Ex 1: They <b>made me understand</b> the logic.", pt: "<span style='color:#0077b6'>(Eles me fizeram entender a lógica.)</span>" },
        { en: "Ex 2: <b>Let me go</b> to the lab.", pt: "<span style='color:#0077b6'>(Deixe-me ir ao laboratório.)</span>" },
        { en: "Ex 3: Scientists <b>help us learn</b> about genetics.", pt: "<span style='color:#0077b6'>(Cientistas nos ajudam a aprender sobre genética.)</span>" },
        { en: "Ex 4: Don't <b>let the water run</b> unnecessarily.", pt: "<span style='color:#0077b6'>(Não deixe a água correr desnecessariamente.)</span>" },
        { en: "Ex 5: This simulation <b>helps us see</b> the gene.", pt: "<span style='color:#0077b6'>(Esta simulação nos ajuda a ver o gene.)</span>" }
    ]
},
{
    title: "Verbs with Different Meaning",
    audio: "TTS: Some verbs change their meaning depending on whether they are followed by a gerund or an infinitive. Key examples include stop, remember, forget, try, and regret.",
    explanation: "Some verbs change their meaning depending on whether they are followed by a gerund or an infinitive.<br><span style='color:#0077b6; font-style:italic;'>(Alguns verbos mudam de significado dependendo se são seguidos por gerúndio ou infinitivo.)</span>",
    samples: [
        { en: "<b>1. STOP + Gerund</b>: To cease an activity. Ex: They <b>stopped cloning</b> animals.", pt: "<span style='color:#0077b6'>(Parar uma atividade. Ex: Eles pararam de clonar animais.)</span>" },
        { en: "<b>Stop + Infinitive</b>: To pause in order to do something else. Ex: He <b>stopped to research</b> the mammoth.", pt: "<span style='color:#0077b6'>(Parar para fazer algo. Ex: Ele parou para pesquisar o mamute.)</span>" },
        { en: "<b>2. REMEMBER + Gerund</b>: To have a memory of a past action. Ex: I <b>remember reading</b> about Dolly.", pt: "<span style='color:#0077b6'>(Lembrar de algo que já aconteceu. Ex: Eu lembro de ter lido sobre a Dolly.)</span>" },
        { en: "<b>Remember + Infinitive</b>: Don't forget to perform a task. Ex: Remember <b>to check</b> the DNA samples.", pt: "<span style='color:#0077b6'>(Lembrar de fazer uma tarefa. Ex: Lembre-se de checar as amostras de DNA.)</span>" },
        { en: "<b>3. FORGET + Gerund</b>: To lose the memory of a past event. Ex: I'll never <b>forget seeing</b> the lab.", pt: "<span style='color:#0077b6'>(Esquecer uma memória passada. Ex: Nunca esquecerei de ter visto o laboratório.)</span>" },
        { en: "<b>Forget + Infinitive</b>: To fail to do a task. Ex: He <b>forgot to mention</b> the risks.", pt: "<span style='color:#0077b6'>(Esquecer de realizar uma tarefa. Ex: Ele esqueceu de mencionar os riscos.)</span>" },
        { en: "<b>4. TRY + Gerund</b>: To test something as an experiment. Ex: <b>Try editing</b> the gene sequence.", pt: "<span style='color:#0077b6'>(Tentar/testar como um experimento. Ex: Tente editar a sequência genética.)</span>" },
        { en: "<b>Try + Infinitive</b>: To make an effort to do something difficult. Ex: We are <b>trying to resurrect</b> the mammoth.", pt: "<span style='color:#0077b6'>(Fazer um esforço para algo difícil. Ex: Estamos tentando ressuscitar o mamute.)</span>" },
        { en: "<b>5. REGRET + Gerund</b>: Be sorry for something done in the past. Ex: He <b>regretted wasting</b> water.", pt: "<span style='color:#0077b6'>(Arrepender-se de algo feito. Ex: Ele se arrependeu de ter desperdiçado água.)</span>" },
        { en: "<b>Regret + Infinitive</b>: Be sorry to announce bad news. Ex: I <b>regret to inform</b> you that the project failed.", pt: "<span style='color:#0077b6'>(Lamentar (anunciar). Ex: Lamento informar que o projeto falhou.)</span>" }
    ]
}

            ],
            dialogueGroups: // --- 3B: DialogueGroups (Expanded) ---
[
    {
        title: "Dialogue 1: Lab Decisions",
        lines: [
            { speaker: "Mrs. Canales", text: "Albert, did you finish writing the report?" },
            { speaker: "Albert", text: "Not yet. I stopped to check the breakdown of the costs first. I plan to finish it tonight." }
        ]
    },
    {
        title: "Dialogue 2: Ethical Advice",
        lines: [
            { speaker: "Celine", text: "The teacher advised us to be careful with our opinions." },
            { speaker: "Albert", text: "I agree. We must avoid making moral mistakes. I remember hearing that gene editing is very controversial." }
        ]
    },
    {
        title: "Dialogue 3: Lab Safety & Future Goals",
        lines: [
            { speaker: "Albert", text: "Do you think science will carry us through the climate crisis?" },
            { speaker: "Celine", text: "I hope so! We need to keep researching new solutions every day." }
        ]
    },
    {
        title: "Dialogue 4: Looking Back",
        lines: [
            { speaker: "Celine", text: "I wish the scientists had stopped to consider the risks earlier." },
            { speaker: "Albert", text: "True, but they were so eager to break through barriers that they didn't look back." }
        ]
    }
]
,
            grammarDrillGroups: [
 {
            title: "1. Derived Nouns (From Phrasal Verbs)",
            drills: [
                { q: "CRISPR is a major scientific _______.", options: [{t: "breakthrough", c: true}, {t: "breakdown", c: false}, {t: "breakup", c: false}, {t: "layout", c: false}], type: "mcq" },
                { q: "We need a detailed _______ of the DNA sequence.", options: [{t: "breakdown", c: true}, {t: "breakthrough", c: false}, {t: "setup", c: false}, {t: "checkout", c: false}], type: "mcq" },
                { q: "The team _______ happened after the experiment failed.", options: [{t: "breakup", c: true}, {t: "feedback", c: false}, {t: "handout", c: false}, {t: "breakdown", c: false}], type: "mcq" },
                { q: "Don't forget your _______ when you board the plane.", options: [{t: "carry-on", c: true}, {t: "breakthrough", c: false}, {t: "setup", c: false}, {t: "checkout", c: false}], type: "mcq" },
                { q: "The debt _______ from last year is quite large.", options: [{t: "carryover", c: true}, {t: "breakdown", c: false}, {t: "breakup", c: false}, {t: "breakthrough", c: false}], type: "mcq" },
                { q: "Please read the _______ provided by the teacher.", options: [{t: "handout", c: true}, {t: "breakthrough", c: false}, {t: "setup", c: false}, {t: "feedback", c: false}], type: "mcq" },
                { q: "The hotel _______ is at 11 AM.", options: [{t: "checkout", c: true}, {t: "breakdown", c: false}, {t: "carryover", c: false}, {t: "breakup", c: false}], type: "mcq" },
                { q: "We appreciate your _______ on the new project.", options: [{t: "feedback", c: true}, {t: "layout", c: false}, {t: "handout", c: false}, {t: "breakthrough", c: false}], type: "mcq" },
                { q: "The laboratory _______ takes a lot of time.", options: [{t: "setup", c: true}, {t: "checkout", c: false}, {t: "breakup", c: false}, {t: "carry-on", c: false}], type: "mcq" },
                { q: "I like the _______ of this science magazine.", options: [{t: "layout", c: true}, {t: "breakdown", c: false}, {t: "handout", c: false}, {t: "breakthrough", c: false}], type: "mcq" }
            ]
        },
        {
            title: "2. Verb Patterns (Infinitive vs. Gerund)",
            drills: [
                { q: "Scientists hope _______ a cure for diseases.", options: [{t: "to find", c: true}, {t: "finding", c: false}, {t: "find", c: false}, {t: "to finding", c: false}], type: "mcq" },
                { q: "We enjoy _______ about cloning in class.", options: [{t: "learning", c: true}, {t: "to learn", c: false}, {t: "learn", c: false}, {t: "to learning", c: false}], type: "mcq" },
                { q: "Ethics allows us _______ the risks of technology.", options: [{t: "to consider", c: true}, {t: "considering", c: false}, {t: "consider", c: false}, {t: "to considering", c: false}], type: "mcq" },
                { q: "They plan _______ the lab project tonight.", options: [{t: "to finish", c: true}, {t: "finishing", c: false}, {t: "finish", c: false}, {t: "to finishing", c: false}], type: "mcq" },
                { q: "You should avoid _______ during the presentation.", options: [{t: "talking", c: true}, {t: "to talk", c: false}, {t: "talk", c: false}, {t: "to talking", c: false}], type: "mcq" },
                { q: "The teacher advised them _______ more research.", options: [{t: "to do", c: true}, {t: "doing", c: false}, {t: "do", c: false}, {t: "to doing", c: false}], type: "mcq" },
                { q: "I decided _______ a scientist when I grow up.", options: [{t: "to become", c: true}, {t: "becoming", c: false}, {t: "become", c: false}, {t: "to becoming", c: false}], type: "mcq" },
                { q: "Does your team suggest _______ the deadline?", options: [{t: "extending", c: true}, {t: "to extend", c: false}, {t: "extend", c: false}, {t: "to extending", c: false}], type: "mcq" },
                { q: "They need _______ the DNA sequences carefully.", options: [{t: "to edit", c: true}, {t: "editing", c: false}, {t: "edit", c: false}, {t: "to editing", c: false}], type: "mcq" },
                { q: "Please keep _______ the cooling system.", options: [{t: "monitoring", c: true}, {t: "to monitor", c: false}, {t: "monitor", c: false}, {t: "to monitoring", c: false}], type: "mcq" },
                { q: "The government helped us _______ the laboratory.", options: [{t: "build", c: true}, {t: "to build", c: false}, {t: "building", c: false}, {t: "to building", c: false}], type: "mcq" },
                { q: "We recommend _______ the ethics committee today.", options: [{t: "contacting", c: true}, {t: "to contact", c: false}, {t: "contact", c: false}, {t: "to contacting", c: false}], type: "mcq" },
                { q: "She wants _______ a difference in the world.", options: [{t: "to make", c: true}, {t: "making", c: false}, {t: "make", c: false}, {t: "to making", c: false}], type: "mcq" },
                { q: "Do you mind _______ the door?", options: [{t: "opening", c: true}, {t: "to open", c: false}, {t: "open", c: false}, {t: "to opening", c: false}], type: "mcq" },
                { q: "They promised _______ back by noon.", options: [{t: "to come", c: true}, {t: "coming", c: false}, {t: "come", c: false}, {t: "to coming", c: false}], type: "mcq" }
            ]
        },
        {
            title: "3. Verbs with Different Meaning",
            drills: [
                { q: "He stopped _______ his notes because he finished.", options: [{t: "taking", c: true}, {t: "to take", c: false}, {t: "take", c: false}, {t: "to taking", c: false}], type: "mcq" },
                { q: "He stopped _______ his notes because he realized he forgot them.", options: [{t: "to take", c: true}, {t: "taking", c: false}, {t: "take", c: false}, {t: "to taking", c: false}], type: "mcq" },
                { q: "I remember _______ Dolly the sheep years ago.", options: [{t: "seeing", c: true}, {t: "to see", c: false}, {t: "see", c: false}, {t: "to seeing", c: false}], type: "mcq" },
                { q: "Remember _______ the samples to the lab tomorrow.", options: [{t: "to bring", c: true}, {t: "bringing", c: false}, {t: "bring", c: false}, {t: "to bringing", c: false}], type: "mcq" },
                { q: "I will never forget _______ this lab for the first time.", options: [{t: "entering", c: true}, {t: "to enter", c: false}, {t: "enter", c: false}, {t: "to entering", c: false}], type: "mcq" },
                { q: "He forgot _______ the lab, so he couldn't get in.", options: [{t: "to lock", c: true}, {t: "locking", c: false}, {t: "lock", c: false}, {t: "to locking", c: false}], type: "mcq" },
                { q: "Try _______ the computer if it doesn't work.", options: [{t: "restarting", c: true}, {t: "to restart", c: false}, {t: "restart", c: false}, {t: "to restarting", c: false}], type: "mcq" },
                { q: "We are trying _______ the ancient mammoth DNA.", options: [{t: "to decode", c: true}, {t: "decoding", c: false}, {t: "decode", c: false}, {t: "to decoding", c: false}], type: "mcq" },
                { q: "I regret _______ that I couldn't attend the lecture.", options: [{t: "to say", c: true}, {t: "saying", c: false}, {t: "say", c: false}, {t: "to saying", c: false}], type: "mcq" },
                { q: "I regret _______ such a controversial thing.", options: [{t: "saying", c: true}, {t: "to say", c: false}, {t: "say", c: false}, {t: "to saying", c: false}], type: "mcq" },
                { q: "She stopped _______ because she was crying.", options: [{t: "talking", c: true}, {t: "to talk", c: false}, {t: "talk", c: false}, {t: "to talking", c: false}], type: "mcq" },
                { q: "She stopped _______ to her teacher.", options: [{t: "to talk", c: true}, {t: "talking", c: false}, {t: "talk", c: false}, {t: "to talking", c: false}], type: "mcq" },
                { q: "I remember _______ the lightbulb experiment.", options: [{t: "doing", c: true}, {t: "to do", c: false}, {t: "do", c: false}, {t: "to doing", c: false}], type: "mcq" },
                { q: "Remember _______ the power before starting.", options: [{t: "to turn off", c: true}, {t: "turning off", c: false}, {t: "turn off", c: false}, {t: "to turning off", c: false}], type: "mcq" },
                { q: "I forgot _______ the research paper.", options: [{t: "to read", c: true}, {t: "reading", c: false}, {t: "read", c: false}, {t: "to reading", c: false}], type: "mcq" }
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
        { text: "Scientists hope to cure genetic diseases. ↘", audio: "TTS: Scientists hope to cure genetic diseases." },
        { text: "They decided to carry out the experiment tomorrow. ↘", audio: "TTS: They decided to carry out the experiment tomorrow." },
        { text: "We enjoy learning about science every day. ↘", audio: "TTS: We enjoy learning about science every day." },
        { text: "Stop imagining science fiction scenarios! ↘", audio: "TTS: Stop imagining science fiction scenarios!" },
        { text: "They want scientists to explain the risks. ↘", audio: "TTS: They want scientists to explain the risks." },
        { text: "Do you remember reading about cloning? ↗", audio: "TTS: Do you remember reading about cloning?" },
        { text: "He forgot to mention the ethical issues. ↘", audio: "TTS: He forgot to mention the ethical issues." },
        { text: "She stopped to think about the consequences. ↘", audio: "TTS: She stopped to think about the consequences." },
        { text: "Would you like to see an extinct animal? ↗", audio: "TTS: Would you like to see an extinct animal?" },
        { text: "Is gene editing considered to be safe? ↗", audio: "TTS: Is gene editing considered to be safe?" }
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
            instruction: "Listen to Albert describing a lab breakdown and type the missing words.",
            audio: "TTS: Yesterday, we decided to carry out a new experiment. Everything was fine, but then the technology stopped working. We had a major breakdown in the DNA sequencing machine. I forgot to check the cooling system! Now we must try to fix it before the samples break down completely.",
            text: "Yesterday, we decided [to carry out] a new [experiment]. Everything was fine, but then the [technology] stopped [working]. We had a major [breakdown] in the [DNA] [sequencing] machine. I forgot [to check] the cooling system! Now we must try [to fix] it before the samples break down completely."
        },
        // Drill 2: Dropdown
        {
            type: "dropdown",
            instruction: "Listen to the dialogue between Celine and a Water Expert and choose the correct options.",
            audio: "TTS: Albert: Sir, do we have to worry about water scarcity? Expert: Yes. You must be aware of your water footprint. Albert: I see. Should people take shorter showers? Expert: Definitely. You had better start today in order to save our natural resources.",
            questions: [
                { q: "Albert: Sir, do we [have to* | should | needn't] worry about [water scarcity* | flood | rain]?", a: "have to" },
                { q: "Expert: You [must* | don't have to | may] be aware of your [water footprint* | bill | tap].", a: "must" },
                { q: "Albert: Should people [take* | drink | waste] shorter showers?", a: "take" },
                { q: "Expert: You [had better* | needn't | used to] start today [in order to* | so that | because] save our natural resources.", a: "had better" }
            ]
        },
        // Drill 3: Audio Choice
        {
            type: "audio-choice",
            instruction: "Listen and choose the logical response based on the lesson logic.",
            audio: "TTS: Why did the research team break up last month?",
            options: [
                { t: "Because they hope to find a cure.", c: false },
                { t: "Because of a financial breakdown and ethical disagreements.", c: true },
                { t: "They enjoy working on gene editing.", c: false },
                { t: "Remember to turn off the technology.", c: false }
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
            title: "Narration - The CRISPR Revolution",
            audio: "audio/em2-3-7/p6_text1.mp3",
            body: "The discovery of [CRISPR](tooltip:crispr) was a major [breakthrough](tooltip:breakthrough) that changed [science](tooltip:science) forever. It allows [scientists](tooltip:scientist) to [modify](tooltip:modify) [DNA](tooltip:dna) with incredible precision. Many [researchers](tooltip:research) [hope to eliminate](tooltip:hope-to-eliminate) deadly [diseases](tooltip:disease) by [editing](tooltip:edit) the human [genome](tooltip:genome). However, this [technology](tooltip:technology) also forces us [to ask](tooltip:ask) difficult questions. We must [stop to evaluate](tooltip:stop-evaluate) the [risks](tooltip:risk) before we [carry on](tooltip:carry-on) [experimenting](tooltip:experiment) on humans. If we forget [to prioritize](tooltip:prioritize-infinitive) [ethics](tooltip:ethics), the [consequences](tooltip:consequence) could be dangerous.",
            questions: [
                { q: "What is CRISPR used for according to the text?", options: [{t: "To resurrect the mammoth.", c: false}, {t: "To modify DNA with high precision.", c: true}, {t: "To create science fiction movies.", c: false}], type: "mcq" },
                { q: "What is the goal of editing the human genome?", options: [{t: "To eliminate deadly illnesses.", c: true}, {t: "To break up research teams.", c: false}, {t: "To increase the risk of mutations.", c: false}], type: "mcq" },
                { q: "What must be prioritized in gene editing?", options: [{t: "Breakthroughs.", c: false}, {t: "Ethics.", c: true}, {t: "Fiction.", c: false}], type: "mcq" }
            ]
        },
        {
            title: "Dialogue - De-extinction Debate",
            audio: "audio/em2-3-7/p6_text2.mp3",
            body: "<b>Albert:</b> Celine, did you [finish watching](tooltip:finish-gerund) that [documentary](tooltip:documentary) about [cloning](tooltip:cloning)?<br><b>Celine:</b> Yes! I'll never [forget seeing](tooltip:forget-gerund) the animation of the resurrected [mammoth](tooltip:mammoth).<br><b>Albert:</b> Do you think it’s [moral](tooltip:moral) [to bring back](tooltip:bring-back) a [species](tooltip:species) that is already [extinct](tooltip:extinct)?<br><b>Celine:</b> It’s a [controversial](tooltip:controversial) [issue](tooltip:issue). Some experts [suggest focusing](tooltip:suggest-focusing) on living animals instead.<br><b>Albert:</b> I agree. We [need to protect](tooltip:need-to-protect) our current [biodiversity](tooltip:biodiversity).",
            questions: [
                { q: "What did Celine see in the documentary?", options: [{t: "A real mammoth in a zoo.", c: false}, {t: "An animation of a resurrected mammoth.", c: true}, {t: "A breakdown of DNA costs.", c: false}], type: "mcq" },
                { q: "What do some experts suggest?", options: [{t: "Cloning every extinct animal.", c: false}, {t: "Focusing on the protection of living animals.", c: true}, {t: "Starting a breakup in the NGO.", c: false}], type: "mcq" },
                { q: "What is Albert’s main concern?", options: [{t: "The potential of the software.", c: false}, {t: "If it is moral to bring back extinct species.", c: true}, {t: "If he remembered to study for the test.", c: false}], type: "mcq" }
            ]
        },
        {
            title: "Description - The Geneticist's Day",
            audio: "audio/em2-3-7/p6_text3.mp3",
            body: "Dr. Aris is a [scientist](tooltip:scientist) who [enjoys working](tooltip:enjoy-working) on complex genetic [research](tooltip:research). Every morning, he [remembers](tooltip:remember-infinitive) to check the temperature of the [DNA](tooltip:dna) samples. He [carries out](tooltip:carry-out) [experiments](tooltip:experiment) to see if [CRISPR](tooltip:crispr) can [modify](tooltip:modify) cells without [risks](tooltip:risk). Sometimes, he [stops](tooltip:stop-infinitive) to discuss the [ethical](tooltip:ethical) [breakdown](tooltip:breakdown) of his work with a committee. He [hopes to develop](tooltip:hope-to-develop) a [cure](tooltip:cure) for a rare [disease](tooltip:disease) soon. Although the work is hard, he [refuses to give up](tooltip:refuse-to-give-up).",
            questions: [
                { q: "What is Dr. Aris's primary field of work?", options: [{t: "Climate research.", c: false}, {t: "Complex genetic research.", c: true}, {t: "Building turbines.", c: false}], type: "mcq" },
                { q: "What does he do every morning?", options: [{t: "He forgets to check the samples.", c: false}, {t: "He checks the temperature of the DNA samples.", c: true}, {t: "He tries cloning a mammoth.", c: false}], type: "mcq" },
                { q: "What is his ultimate goal?", options: [{t: "To develop a cure for a rare disease.", c: true}, {t: "To stop researching genetics.", c: false}, {t: "To break into a new market.", c: false}], type: "mcq" }
            ]
        }
    ]
},

        // ======================================================
        // STEP 7: MONKEY SEE, MONKEY DO (30+ Exercises)
        // ======================================================
        {
            title: "Monkey see, Monkey do",
            drills: [
                // 1-4: Matching Phrasal Verbs
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Relacione o verbo frasal com seu significado.)</small>", pairs: [
                    { left: "Break down", right: "Analisar / Parar de funcionar", val: "1" },
                    { left: "Break up", right: "Separar / Terminar relacionamento", val: "2" },
                    { left: "Carry out", right: "Realizar / Conduzir", val: "3" },
                    { left: "Carry on", right: "Continuar / Persistir", val: "4" }
                ]},
                // 5-6: Matching Definitions
                { type: "matching", instruction: "Match the phrasal verb with its meaning.<br><small style='color:#0077b6'>(Relacione o verbo frasal com seu significado.)</small>", pairs: [
                    { left: "Break through", right: "Romper barreira / Fazer descoberta", val: "5" },
                    { left: "Carry through", right: "Levar a cabo / Concluir com sucesso", val: "6" }
                ]},
                // 7-11: Word Order
                { type: "word-order", instruction: "Put the words in order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "to / hope / cure / diseases / Scientists / .", correct: "Scientists hope to cure diseases ." },
                { type: "word-order", instruction: "Put the words in order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "discussing / enjoy / We / ethics / science / .", correct: "We enjoy discussing science ethics ." },
                { type: "word-order", instruction: "Put the words in order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "made / understand / The / teacher / me / the / logic / .", correct: "The teacher made me understand the logic ." },
                { type: "word-order", instruction: "Put the words in order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "better / waste / not / had / You / water / .", correct: "You had better not waste water ." },
                { type: "word-order", instruction: "Put the words in order.<br><small style='color:#0077b6'>(Coloque as palavras na ordem correta.)</small>", sentence: "part / play / Everyone / should / their / .", correct: "Everyone should play their part ." },
                // 12-16: Clickable Error
                { type: "clickable-error", instruction: "Click the incorrect verb pattern.<br><small style='color:#0077b6'>(Clique no padrão verbal incorreto.)</small>", sentence: "I enjoy [to](error:) [read](error:reading) research papers." },
                { type: "clickable-error", instruction: "Click the incorrect verb pattern.<br><small style='color:#0077b6'>(Clique no padrão verbal incorreto.)</small>", sentence: "They plan [studying](error:to_study) cloning." },
                { type: "clickable-error", instruction: "Click the error in the phrasal verb.<br><small style='color:#0077b6'>(Clique no erro do verbo frasal.)</small>", sentence: "We must carry [in](error:on) working hard." },
                { type: "clickable-error", instruction: "Click the error in the sentence.<br><small style='color:#0077b6'>(Clique no erro na frase.)</small>", sentence: "She stopped [to](error:) [talk](error:talking) because she was tired." },
                { type: "clickable-error", instruction: "Click the error in the sentence.<br><small style='color:#0077b6'>(Clique no erro na frase.)</small>", sentence: "Remember [checking](error:to_check) the DNA sample." },
                // 17-21: Odd One Out
                { type: "odd-one-out", instruction: "Odd one out: Science.<br><small style='color:#0077b6'>(Qual não pertence à Ciência?)</small>", options: [{t: "Gene", c: false}, {t: "DNA", c: false}, {t: "CRISPR", c: false}, {t: "Politics", c: true}] },
                { type: "odd-one-out", instruction: "Odd one out: Phrasal Verb (BREAK).<br><small style='color:#0077b6'>(Qual não pertence ao verbo BREAK?)</small>", options: [{t: "Break down", c: false}, {t: "Break up", c: false}, {t: "Break at", c: true}, {t: "Break out", c: false}] },
                { type: "odd-one-out", instruction: "Odd one out: Verb Pattern (Infinitive).<br><small style='color:#0077b6'>(Qual não usa Infinitivo?)</small>", options: [{t: "Enjoy", c: true}, {t: "Hope", c: false}, {t: "Decide", c: false}, {t: "Plan", c: false}] },
                { type: "odd-one-out", instruction: "Odd one out: Ethics/Society.<br><small style='color:#0077b6'>(Qual não pertence a Ética/Sociedade?)</small>", options: [{t: "Moral", c: false}, {t: "Ethics", c: false}, {t: "Controversial", c: false}, {t: "Cell", c: true}] },
                { type: "odd-one-out", instruction: "Odd one out: Phrasal Verb (CARRY).<br><small style='color:#0077b6'>(Qual não pertence ao verbo CARRY?)</small>", options: [{t: "Carry out", c: false}, {t: "Carry on", c: false}, {t: "Carry to", c: true}, {t: "Carry through", c: false}] },
                // 22-26: Multiple Choice
                { type: "mcq", instruction: "Choose the correct derived noun.<br><small style='color:#0077b6'>(Escolha o substantivo derivado correto.)</small><br>The discovery of a new _______ will change science.", options: [{t: "breakthrough", c: true}, {t: "breakdown", c: false}, {t: "breakup", c: false}, {t: "handout", c: false}] },
                { type: "mcq", instruction: "Choose the correct term.<br><small style='color:#0077b6'>(Escolha o termo correto.)</small><br>An animal that no longer exists is _______.", options: [{t: "extinct", c: true}, {t: "cloned", c: false}, {t: "genomic", c: false}, {t: "moral", c: false}] },
                { type: "mcq", instruction: "Choose the correct term.<br><small style='color:#0077b6'>(Escolha o termo correto.)</small><br>The study of right and wrong in science is _______.", options: [{t: "ethics", c: true}, {t: "science", c: false}, {t: "fact", c: false}, {t: "fiction", c: false}] },
                { type: "mcq", instruction: "Phrasal Verb meaning.<br><small style='color:#0077b6'>(Qual o significado do verbo frasal?)</small><br>To continue an activity is to _______.", options: [{t: "carry on", c: true}, {t: "break out", c: false}, {t: "break through", c: false}, {t: "carry off", c: false}] },
                { type: "mcq", instruction: "Grammar check.<br><small style='color:#0077b6'>(Verificação gramatical.)</small><br>She suggested _______ a new research paper.", options: [{t: "writing", c: true}, {t: "to write", c: false}, {t: "write", c: false}, {t: "to writing", c: false}] },
                // 27-32: True/False & Categorize
                { type: "true-false", instruction: "Are these statements True or False?<br><small style='color:#0077b6'>(Verdadeiro ou Falso?)</small>", questions: [{text: "CRISPR can modify DNA.", correct: "true"}, {text: "Mammoths are alive.", correct: "false"}] },
                { type: "categorize", instruction: "Sort the terms by Category.<br><small style='color:#0077b6'>(Classifique os termos.)</small>", 
                    categories: [{id: "sci", name: "Science"}, {id: "soc", name: "Society"}],
                    items: [{text: "DNA", catId: "sci"}, {text: "Genome", catId: "sci"}, {text: "Equality", catId: "soc"}, {text: "Activists", catId: "soc"}] 
                },
                { type: "mcq", instruction: "Grammar check.<br><small style='color:#0077b6'>(Verificação gramatical.)</small><br>They want _______ a difference.", options: [{t: "to make", c: true}, {t: "making", c: false}, {t: "make", c: false}, {t: "to making", c: false}] },
                { type: "mcq", instruction: "Vocabulary.<br><small style='color:#0077b6'>(Vocabulário.)</small><br>A detailed analysis is a _______.", options: [{t: "breakdown", c: true}, {t: "breakthrough", c: false}, {t: "breakup", c: false}, {t: "breakout", c: false}] },
                { type: "mcq", instruction: "Grammar check.<br><small style='color:#0077b6'>(Verificação gramatical.)</small><br>Remember _______ the power before starting.", options: [{t: "to turn off", c: true}, {t: "turning off", c: false}, {t: "turn off", c: false}, {t: "to turning off", c: false}] },
                { type: "mcq", instruction: "Grammar check.<br><small style='color:#0077b6'>(Verificação gramatical.)</small><br>He forgot _______ the lab work.", options: [{t: "to finish", c: true}, {t: "finishing", c: false}, {t: "finish", c: false}, {t: "to finishing", c: false}] }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
    title: "Tell your story",
    instruction: "Language Island: Now it's your turn to be the ethicist! Write a short paragraph (5-7 sentences) about your opinion on gene editing or cloning. Do you think it is beneficial or dangerous? Mention something you remember learning and what you hope to see in the future. Use at least two different Verb Patterns (e.g., Verb + Infinitive / Verb + Gerund) and one Derived Noun.",
    example: "\"I believe [gene editing] is a major scientific <b>breakthrough</b>. I remember <b>reading</b> about how [CRISPR] can [modify] [DNA] to stop [diseases]. However, we must avoid <b>acting</b> without considering the [risks]. I hope <b>to see</b> a world where we use this [technology] responsibly. It is an [ethical] [challenge], but we should keep <b>studying</b> its [potential]!\"",
    prompts: [
        "Use at least two [Verb Patterns] (Gerund or Infinitive).",
        "Include one [Derived Noun] (e.g., breakthrough, breakdown).",
        "State your opinion on whether the technology is beneficial or dangerous."
    ]
},

        /// ======================================================
        // STEP 9: WRAP IT UP (FLASHCARDS - PART 1: SCIENCE & GENETICS)
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                { term: "Gene / Genome", definition: "A unit of heredity; the complete set of genetic material in an organism.", defTrans: "Gene / Genoma", example: "We must map the whole genome to find the answer.", exTrans: "<span style='color:#0077b6'>(Precisamos mapear todo o genoma para encontrar a resposta.)</span>", audioFront: "TTS: Gene or Genome", audioBack: "TTS: We must map the whole genome to find the answer." },
                { term: "DNA", definition: "Deoxyribonucleic acid; the carrier of genetic information.", defTrans: "DNA / ADN", example: "The DNA structure was discovered many years ago.", exTrans: "<span style='color:#0077b6'>(A estrutura do DNA foi descoberta há muitos anos.)</span>", audioFront: "TTS: DNA", audioBack: "TTS: The DNA structure was discovered many years ago." },
                { term: "CRISPR", definition: "A powerful tool for editing genomes; molecular scissors for DNA.", defTrans: "CRISPR (técnica de edição)", example: "CRISPR technology allows for precise changes.", exTrans: "<span style='color:#0077b6'>(A tecnologia CRISPR permite mudanças precisas.)</span>", audioFront: "TTS: CRISPR", audioBack: "TTS: CRISPR technology allows for precise changes." },
                { term: "Science / Scientist", definition: "The intellectual activity encompassing the study of the physical world.", defTrans: "Ciência / Cientista", example: "Every scientist needs to follow strict rules.", exTrans: "<span style='color:#0077b6'>(Todo cientista precisa seguir regras rígidas.)</span>", audioFront: "TTS: Science and Scientist", audioBack: "TTS: Every scientist needs to follow strict rules." },
                { term: "Extinction", definition: "The state or process of a species having no living members.", defTrans: "Extinção", example: "Many birds are facing extinction due to climate change.", exTrans: "<span style='color:#0077b6'>(Muitas aves estão enfrentando a extinção devido à mudança climática.)</span>", audioFront: "TTS: Extinction", audioBack: "TTS: Many birds are facing extinction due to climate change." },
                { term: "Extinct", definition: "No longer in existence.", defTrans: "Extinto(a)", example: "The dodo is a famous extinct bird.", exTrans: "<span style='color:#0077b6'>(O dodô é uma ave extinta famosa.)</span>", audioFront: "TTS: Extinct", audioBack: "TTS: The dodo is a famous extinct bird." },
                { term: "Experiment", definition: "A scientific procedure undertaken to make a discovery or test a hypothesis.", defTrans: "Experimento / Experiência", example: "Please do not touch the experiment in the lab.", exTrans: "<span style='color:#0077b6'>(Por favor, não toque no experimento no laboratório.)</span>", audioFront: "TTS: Experiment", audioBack: "TTS: Please do not touch the experiment in the lab." },
                { term: "Breakthrough", definition: "A significant development or discovery.", defTrans: "Avanço / Descoberta importante", example: "The new vaccine is a medical breakthrough.", exTrans: "<span style='color:#0077b6'>(A nova vacina é um avanço médico.)</span>", audioFront: "TTS: Breakthrough", audioBack: "TTS: The new vaccine is a medical breakthrough." },
                { term: "Technology", definition: "The application of scientific knowledge for practical purposes.", defTrans: "Tecnologia", example: "We use technology to improve our lives.", exTrans: "<span style='color:#0077b6'>(Usamos a tecnologia para melhorar nossas vidas.)</span>", audioFront: "TTS: Technology", audioBack: "TTS: We use technology to improve our lives." },
                { term: "Advancement", definition: "A development or improvement in a specific field.", defTrans: "Avanço", example: "This is a huge advancement for medicine.", exTrans: "<span style='color:#0077b6'>(Este é um enorme avanço para a medicina.)</span>", audioFront: "TTS: Advancement", audioBack: "TTS: This is a huge advancement for medicine." },
                { term: "Fact", definition: "A thing that is known or proved to be true.", defTrans: "Fato", example: "It is a scientific fact that species adapt.", exTrans: "<span style='color:#0077b6'>(É um fato científico que as espécies se adaptam.)</span>", audioFront: "TTS: Fact", audioBack: "TTS: It is a scientific fact that species adapt." },
                { term: "Fiction", definition: "Something that is invented or untrue; not based on reality.", defTrans: "Ficção", example: "Is de-extinction science or fiction?", exTrans: "<span style='color:#0077b6'>(A desextinção é ciência ou ficção?)</span>", audioFront: "TTS: Fiction", audioBack: "TTS: Is de-extinction science or fiction?" },
                { term: "Benefit", definition: "An advantage or profit gained from something.", defTrans: "Benefício", example: "This new treatment provides a huge benefit.", exTrans: "<span style='color:#0077b6'>(Este novo tratamento oferece um enorme benefício.)</span>", audioFront: "TTS: Benefit", audioBack: "TTS: This new treatment provides a huge benefit." },
                { term: "Disease", definition: "A disorder of structure or function in a human, animal, or plant.", defTrans: "Doença", example: "Doctors are fighting a new disease.", exTrans: "<span style='color:#0077b6'>(Médicos estão combatendo uma nova doença.)</span>", audioFront: "TTS: Disease", audioBack: "TTS: Doctors are fighting a new disease." },
                { term: "Modify", definition: "To change the structure or character of something.", defTrans: "Modificar", example: "We can modify the plant to resist insects.", exTrans: "<span style='color:#0077b6'>(Podemos modificar a planta para resistir a insetos.)</span>", audioFront: "TTS: Modify", audioBack: "TTS: We can modify the plant to resist insects." },
                { term: "Research", definition: "The systematic investigation into a study of materials and sources.", defTrans: "Pesquisa", example: "Clinical research takes many years.", exTrans: "<span style='color:#0077b6'>(A pesquisa clínica leva muitos anos.)</span>", audioFront: "TTS: Research", audioBack: "TTS: Clinical research takes many years." },
                { term: "Develop", definition: "To grow or cause to grow and become more mature.", defTrans: "Desenvolver", example: "They want to develop a cure for cancer.", exTrans: "<span style='color:#0077b6'>(Eles querem desenvolver uma cura para o câncer.)</span>", audioFront: "TTS: Develop", audioBack: "TTS: They want to develop a cure for cancer." },
                { term: "Clone", definition: "The process of creating an identical copy of a biological entity.", defTrans: "Clonar / Clonagem", example: "Cloning animals is a complex process.", exTrans: "<span style='color:#0077b6'>(Clonar animais é um processo complexo.)</span>", audioFront: "TTS: Clone", audioBack: "TTS: Cloning animals is a complex process." },
                { term: "Cure", definition: "A substance or treatment that ends a disease or condition.", defTrans: "Cura / Curar", example: "Scientists hope to cure rare illnesses.", exTrans: "<span style='color:#0077b6'>(Cientistas esperam curar doenças raras.)</span>", audioFront: "TTS: Cure", audioBack: "TTS: Scientists hope to cure rare illnesses." },
                { term: "Resurrect", definition: "To restore a dead person or extinct species to life.", defTrans: "Ressuscitar", example: "Is it right to resurrect ancient species?", exTrans: "<span style='color:#0077b6'>(É certo ressuscitar espécies antigas?)</span>", audioFront: "TTS: Resurrect", audioBack: "TTS: Is it right to resurrect ancient species?" },
                { term: "Species", definition: "A group of living organisms consisting of similar individuals.", defTrans: "Espécie(s)", example: "There are millions of species on Earth.", exTrans: "<span style='color:#0077b6'>(Existem milhões de espécies na Terra.)</span>", audioFront: "TTS: Species", audioBack: "TTS: There are millions of species on Earth." },
                { term: "Mammoth", definition: "A large, hairy, extinct elephant with long tusks.", defTrans: "Mamute", example: "The mammoth lived during the Ice Age.", exTrans: "<span style='color:#0077b6'>(O mamute viveu durante a Era do Gelo.)</span>", audioFront: "TTS: Mammoth", audioBack: "TTS: The mammoth lived during the Ice Age." },
                { term: "Ethics", definition: "Moral principles that govern a person's behavior.", defTrans: "Ética", example: "We must discuss the ethics of gene editing.", exTrans: "<span style='color:#0077b6'>(Devemos discutir a ética da edição genética.)</span>", audioFront: "TTS: Ethics", audioBack: "TTS: We must discuss the ethics of gene editing." },
                { term: "Moral", definition: "Concerned with the principles of right and wrong behavior.", defTrans: "Moral", example: "Is this a moral decision for humanity?", exTrans: "<span style='color:#0077b6'>(Esta é uma decisão moral para a humanidade?)</span>", audioFront: "TTS: Moral", audioBack: "TTS: Is this a moral decision for humanity?" },
                { term: "Potential", definition: "Having the capacity to become or develop into something in the future.", defTrans: "Potencial", example: "The project has the potential to change everything.", exTrans: "<span style='color:#0077b6'>(O projeto tem o potencial de mudar tudo.)</span>", audioFront: "TTS: Potential", audioBack: "TTS: The project has the potential to change everything." },
                { term: "Consequence", definition: "A result or effect of an action or condition.", defTrans: "Consequência", example: "Every action has a consequence.", exTrans: "<span style='color:#0077b6'>(Toda ação tem uma consequência.)</span>", audioFront: "TTS: Consequence", audioBack: "TTS: Every action has a consequence." },
                { term: "Controversial", definition: "Something likely to give rise to public disagreement.", defTrans: "Controverso / Polêmico", example: "This topic is very controversial in the news.", exTrans: "<span style='color:#0077b6'>(Este tópico é muito polêmico nas notícias.)</span>", audioFront: "TTS: Controversial", audioBack: "TTS: This topic is very controversial in the news." },
                { term: "Risk", definition: "A situation involving exposure to danger.", defTrans: "Risco / Perigo", example: "There is always a risk with new technology.", exTrans: "<span style='color:#0077b6'>(Sempre há um risco com novas tecnologias.)</span>", audioFront: "TTS: Risk", audioBack: "TTS: There is always a risk with new technology." },

                { term: "Break down", definition: "To analyze a system or to stop functioning.", defTrans: "Analisar / Parar de funcionar", example: "Scientists break down complex structures.", exTrans: "<span style='color:#0077b6'>(Cientistas analisam estruturas complexas.)</span>", audioFront: "TTS: Break down", audioBack: "TTS: Scientists break down complex structures." },
                { term: "Break up", definition: "To separate or end a relationship.", defTrans: "Separar / Terminar relacionamento", example: "The team broke up after the project failed.", exTrans: "<span style='color:#0077b6'>(A equipe se separou após o projeto falhar.)</span>", audioFront: "TTS: Break up", audioBack: "TTS: The team broke up after the project failed." },
                { term: "Break through", definition: "To overcome an obstacle or make a discovery.", defTrans: "Romper barreira / Fazer descoberta", example: "We hope to break through the barriers of science.", exTrans: "<span style='color:#0077b6'>(Esperamos romper as barreiras da ciência.)</span>", audioFront: "TTS: Break through", audioBack: "TTS: We hope to break through the barriers of science." },
                { term: "Break into", definition: "To enter a field or start an activity suddenly.", defTrans: "Invadir / Começar algo de repente", example: "New technology breaks into ethical debates.", exTrans: "<span style='color:#0077b6'>(Nova tecnologia entra em debates éticos.)</span>", audioFront: "TTS: Break into", audioBack: "TTS: New technology breaks into ethical debates." },
                { term: "Break out", definition: "Sudden start of a war, disease, or fire.", defTrans: "Eclodir / Escapar", example: "If a new disease breaks out, science must act.", exTrans: "<span style='color:#0077b6'>(Se uma nova doença eclodir, a ciência deve agir.)</span>", audioFront: "TTS: Break out", audioBack: "TTS: If a new disease breaks out, science must act." },
                { term: "Carry on", definition: "To persist in an activity.", defTrans: "Continuar", example: "You must carry on even when it's hard.", exTrans: "<span style='color:#0077b6'>(Você deve continuar mesmo quando for difícil.)</span>", audioFront: "TTS: Carry on", audioBack: "TTS: You must carry on even when it's hard." },
                { term: "Carry out", definition: "To perform a task, experiment, or research.", defTrans: "Realizar / Conduzir", example: "They need to carry out the test again.", exTrans: "<span style='color:#0077b6'>(Eles precisam realizar o teste novamente.)</span>", audioFront: "TTS: Carry out", audioBack: "TTS: They need to carry out the test again." },
                { term: "Carry through", definition: "To complete a project or support someone through a crisis.", defTrans: "Concluir com sucesso / Ajudar a superar", example: "Her courage carried her through the crisis.", exTrans: "<span style='color:#0077b6'>(A coragem dela a ajudou a superar a crise.)</span>", audioFront: "TTS: Carry through", audioBack: "TTS: Her courage carried her through the crisis." },
                { term: "Carry over", definition: "To continue to exist in a new situation.", defTrans: "Permanecer / Continuar existindo", example: "The rules carry over to the next experiment.", exTrans: "<span style='color:#0077b6'>(As regras permanecem para o próximo experimento.)</span>", audioFront: "TTS: Carry over", audioBack: "TTS: The rules carry over to the next experiment." },
                // --- DERIVED NOUNS ---
                { term: "Breakthrough (Noun)", definition: "A major discovery or advance.", defTrans: "Avanço / Descoberta importante", example: "CRISPR is a major scientific breakthrough.", exTrans: "<span style='color:#0077b6'>(O CRISPR é um grande avanço científico.)</span>", audioFront: "TTS: Breakthrough", audioBack: "TTS: CRISPR is a major scientific breakthrough." },
                { term: "Breakdown (Noun)", definition: "A detailed analysis or system failure.", defTrans: "Análise / Detalhamento", example: "We need a breakdown of the DNA sequence.", exTrans: "<span style='color:#0077b6'>(Precisamos de uma análise da sequência de DNA.)</span>", audioFront: "TTS: Breakdown", audioBack: "TTS: We need a breakdown of the DNA sequence." },
                { term: "Breakup (Noun)", definition: "The end of a relationship or group.", defTrans: "Separação / Fim", example: "The team breakup happened after the experiment failed.", exTrans: "<span style='color:#0077b6'>(A separação da equipe aconteceu após o experimento falhar.)</span>", audioFront: "TTS: Breakup", audioBack: "TTS: The team breakup happened after the experiment failed." },
                { term: "Carry-on (Noun/Adj)", definition: "Something you take with you.", defTrans: "Bagagem de mão", example: "The carry-on limit is 10kg.", exTrans: "<span style='color:#0077b6'>(O limite da bagagem de mão é 10kg.)</span>", audioFront: "TTS: Carry-on", audioBack: "TTS: The carry-on limit is 10kg." },
                { term: "Carryover (Noun)", definition: "Something left from a previous time.", defTrans: "Resíduo / Sobra", example: "The carryover budget helps the next project.", exTrans: "<span style='color:#0077b6'>(O orçamento restante ajuda o próximo projeto.)</span>", audioFront: "TTS: Carryover", audioBack: "TTS: The carryover budget helps the next project." },
                { term: "Handout (Noun)", definition: "Papers given to a class.", defTrans: "Folheto / Material distribuído", example: "The teacher gave a handout about CRISPR.", exTrans: "<span style='color:#0077b6'>(O professor deu um folheto sobre CRISPR.)</span>", audioFront: "TTS: Handout", audioBack: "TTS: The teacher gave a handout about CRISPR." },
                { term: "Checkout (Noun)", definition: "The place where you pay.", defTrans: "Caixa / Pagamento", example: "Go to the checkout to pay for your gear.", exTrans: "<span style='color:#0077b6'>(Vá ao caixa para pagar seu equipamento.)</span>", audioFront: "TTS: Checkout", audioBack: "TTS: Go to the checkout to pay for your gear." },
                { term: "Feedback (Noun)", definition: "Response or criticism.", defTrans: "Retorno / Avaliação", example: "We need feedback on our research.", exTrans: "<span style='color:#0077b6'>(Precisamos de retorno sobre nossa pesquisa.)</span>", audioFront: "TTS: Feedback", audioBack: "TTS: We need feedback on our research." },
                { term: "Setup (Noun)", definition: "The arrangement of equipment.", defTrans: "Configuração / Montagem", example: "The lab setup is very modern.", exTrans: "<span style='color:#0077b6'>(A montagem do laboratório é muito moderna.)</span>", audioFront: "TTS: Setup", audioBack: "TTS: The lab setup is very modern." },
                { term: "Layout (Noun)", definition: "The way something is arranged.", defTrans: "Layout / Estrutura", example: "The layout of the lab is efficient.", exTrans: "<span style='color:#0077b6'>(A estrutura do laboratório é eficiente.)</span>", audioFront: "TTS: Layout", audioBack: "TTS: The layout of the lab is efficient." },

                // --- VERB PATTERNS ---
                { term: "Pattern A: Infinitive", definition: "Used after: want, hope, plan, decide, etc.", defTrans: "Verbo + Infinitivo", example: "They hope to cure diseases.", exTrans: "<span style='color:#0077b6'>(Eles esperam curar doenças.)</span>", audioFront: "TTS: Pattern A Verb plus Infinitive", audioBack: "TTS: They hope to cure diseases." },
                { term: "Pattern B: Gerund", definition: "Used after: enjoy, finish, stop, avoid, etc.", defTrans: "Verbo + Gerúndio", example: "We enjoy learning about cloning.", exTrans: "<span style='color:#0077b6'>(Nós curtimos aprender sobre clonagem.)</span>", audioFront: "TTS: Pattern B Verb plus Gerund", audioBack: "TTS: We enjoy learning about cloning." },
                { term: "Pattern C: Object + Infinitive", definition: "Used after: allow, force, encourage, advise, etc.", defTrans: "Verbo + Objeto + Infinitivo", example: "Ethics allows us to consider the risks.", exTrans: "<span style='color:#0077b6'>(A ética nos permite considerar os riscos.)</span>", audioFront: "TTS: Pattern C Verb plus Object plus Infinitive", audioBack: "TTS: Ethics allows us to consider the risks." },
                { term: "Let/Make/Help (Special)", definition: "Followed by Base Verb (No 'to').", defTrans: "Verbos especiais (Sem 'to')", example: "They made me understand the logic.", exTrans: "<span style='color:#0077b6'>(Eles me fizeram entender a lógica.)</span>", audioFront: "TTS: Special patterns", audioBack: "TTS: They made me understand the logic." },

                // --- VERBS WITH SHIFTING MEANING ---
                { term: "Stop + Gerund", definition: "To end an activity.", defTrans: "Parar uma atividade", example: "They stopped cloning animals.", exTrans: "<span style='color:#0077b6'>(Eles pararam de clonar animais.)</span>", audioFront: "TTS: Stop plus Gerund", audioBack: "TTS: They stopped cloning animals." },
                { term: "Stop + Infinitive", definition: "To pause to do something.", defTrans: "Parar para fazer algo", example: "He stopped to research the mammoth.", exTrans: "<span style='color:#0077b6'>(Ele parou para pesquisar o mamute.)</span>", audioFront: "TTS: Stop plus Infinitive", audioBack: "TTS: He stopped to research the mammoth." },
                { term: "Remember + Gerund", definition: "To have a past memory.", defTrans: "Lembrar de uma lembrança", example: "I remember reading about Dolly.", exTrans: "<span style='color:#0077b6'>(Eu lembro de ter lido sobre a Dolly.)</span>", audioFront: "TTS: Remember plus Gerund", audioBack: "TTS: I remember reading about Dolly." },
                { term: "Remember + Infinitive", definition: "Don't forget a task.", defTrans: "Lembrar de fazer uma tarefa", example: "Remember to check the DNA samples.", exTrans: "<span style='color:#0077b6'>(Lembre-se de checar as amostras de DNA.)</span>", audioFront: "TTS: Remember plus Infinitive", audioBack: "TTS: Remember to check the DNA samples." },
                { term: "Try + Gerund", definition: "To test as an experiment.", defTrans: "Tentar como experimento", example: "Try editing the gene sequence.", exTrans: "<span style='color:#0077b6'>(Tente editar a sequência genética.)</span>", audioFront: "TTS: Try plus Gerund", audioBack: "TTS: Try editing the gene sequence." },
                { term: "Try + Infinitive", definition: "To make an effort to do something difficult.", defTrans: "Fazer um esforço", example: "We are trying to resurrect the mammoth.", exTrans: "<span style='color:#0077b6'>(Estamos tentando ressuscitar o mamute.)</span>", audioFront: "TTS: Try plus Infinitive", audioBack: "TTS: We are trying to resurrect the mammoth." },
                { term: "Forget + Gerund", definition: "Forget a past memory.", defTrans: "Esquecer uma lembrança", example: "I'll never forget seeing the lab.", exTrans: "<span style='color:#0077b6'>(Nunca esquecerei de ter visto o laboratório.)</span>", audioFront: "TTS: Forget plus Gerund", audioBack: "TTS: I'll never forget seeing the lab." },
                { term: "Forget + Infinitive", definition: "Fail to do a task.", defTrans: "Esquecer de realizar uma tarefa", example: "He forgot to mention the risks.", exTrans: "<span style='color:#0077b6'>(Ele esqueceu de mencionar os riscos.)</span>", audioFront: "TTS: Forget plus Infinitive", audioBack: "TTS: He forgot to mention the risks." },
                { term: "Regret + Gerund", definition: "Be sorry for past action.", defTrans: "Arrepender-se de algo feito", example: "He regretted wasting water.", exTrans: "<span style='color:#0077b6'>(Ele se arrependeu de ter desperdiçado água.)</span>", audioFront: "TTS: Regret plus Gerund", audioBack: "TTS: He regretted wasting water." },
                { term: "Regret + Infinitive", definition: "Be sorry to announce bad news.", defTrans: "Lamentar (anunciar)", example: "I regret to inform you that the project failed.", exTrans: "<span style='color:#0077b6'>(Lamento informar que o projeto falhou.)</span>", audioFront: "TTS: Regret plus Infinitive", audioBack: "TTS: I regret to inform you that the project failed." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Part 1: Vocabulary & Concepts)
    // ======================================================
    glossary: [
    // Context & Tooltips - Chapter 7)
    { topic: "Context", term: "genetics", definition: "The study of heredity and the variation of inherited characteristics.", translation: "Genética" },
    { topic: "Context", term: "de-extinction", definition: "The process of reviving extinct species.", translation: "Desextinção" },
    { topic: "Context", term: "gene", definition: "A unit of heredity; a section of DNA.", translation: "Gene" },
    { topic: "Context", term: "genome", definition: "The complete set of genetic material in an organism.", translation: "Genoma" },
    { topic: "Context", term: "gene-editing", definition: "The process of altering the DNA of an organism.", translation: "Edição genética" },
    { topic: "Context", term: "cloning", definition: "The process of creating an identical copy of a biological entity.", translation: "Clonagem" },
    { topic: "Context", term: "ethics", definition: "Moral principles that govern a person's behavior.", translation: "Ética" },
    { topic: "Context", term: "ethical", definition: "Relating to moral principles.", translation: "Ético" },
    { topic: "Context", term: "resurrect", definition: "To restore a dead person or extinct species to life.", translation: "Ressuscitar" },
    { topic: "Context", term: "extinct", definition: "No longer in existence.", translation: "Extinto(a)" },
    { topic: "Context", term: "disease", definition: "A disorder of structure or function in a human, animal, or plant.", translation: "Doença" },
    { topic: "Context", term: "biodiversity", definition: "The variety of life in the world or in a particular habitat.", translation: "Biodiversidade" },
    { topic: "Context", term: "modify", definition: "To change the structure or character of something.", translation: "Modificar" },
    { topic: "Context", term: "edit", definition: "To make changes to a text or genetic material.", translation: "Editar" },
    { topic: "Context", term: "discuss", definition: "To talk about a topic in detail.", translation: "Discutir" },
    { topic: "Context", term: "advise", definition: "To offer suggestions about the best course of action.", translation: "Aconselhar" },
    { topic: "Context", term: "ask", definition: "To request information or an answer to a question.", translation: "Perguntar" },
    { topic: "Context", term: "issue", definition: "An important topic or problem for debate or discussion.", translation: "Questão / Assunto" },
    { topic: "Context", term: "research", definition: "The systematic investigation into a study of materials and sources.", translation: "Pesquisa" },
    { topic: "Context", term: "science", definition: "The study of the physical and natural world through observation.", translation: "Ciência" },
    { topic: "Context", term: "scientist", definition: "A person who is studying or has expert knowledge of one or more of the natural or physical sciences.", translation: "Cientista" },
    { topic: "Context", term: "risk", definition: "The possibility of suffering harm or loss; danger.", translation: "Risco" },
    { topic: "Context", term: "healthy", definition: "In a good physical or mental condition.", translation: "Saudável" },
    { topic: "Context", term: "cell", definition: "The smallest structural and functional unit of an organism.", translation: "Célula" },
    { topic: "Context", term: "mutation", definition: "A permanent alteration in the DNA sequence.", translation: "Mutação" },
    { topic: "Context", term: "documentary", definition: "A film or program that provides a factual record.", translation: "Documentário" },
    { topic: "Context", term: "dna", definition: "Deoxyribonucleic acid; the carrier of genetic information.", translation: "DNA" },
    { topic: "Context", term: "agree", definition: "To have the same opinion.", translation: "Concordar" },
    { topic: "Context", term: "critic", definition: "A person who expresses disapproval.", translation: "Crítico" },
    { topic: "Context", term: "determination", definition: "Firmness of purpose.", translation: "Determinação" },
    { topic: "Context", term: "prioritize-infinitive", definition: "Infinitive form indicating prioritization.", translation: "Priorizar" },
    { topic: "Context", term: "hope-to-cure", definition: "Verb pattern expressing desire.", translation: "Esperar curar" },
    { topic: "Context", term: "stop-imagining", definition: "Verb pattern (stop + gerund).", translation: "Parar de imaginar" },
    { topic: "Context", term: "to-stop", definition: "Infinitive form (purpose).", translation: "Parar para" },
    { topic: "Context", term: "consider-to-be", definition: "Verb pattern (consider + infinitive).", translation: "Considerar como" },
    { topic: "Context", term: "enjoy-thinking", definition: "Verb pattern (enjoy + gerund).", translation: "Gostar de pensar" },
    { topic: "Context", term: "enjoy-working", definition: "Verb pattern (enjoy + gerund).", translation: "Gostar de trabalhar" },
    { topic: "Context", term: "stop-evaluate", definition: "Pause to assess a situation.", translation: "Parar para avaliar" },
    { topic: "Context", term: "finish-gerund", definition: "Verb pattern (finish + gerund).", translation: "Terminar de" },
    { topic: "Context", term: "bring-back", definition: "To cause someone to remember.", translation: "Trazer de volta" },
    { topic: "Context", term: "need-to-protect", definition: "Necessity pattern.", translation: "Precisar proteger" },
    { topic: "Context", term: "suggest-focusing", definition: "Verb pattern (suggest + gerund).", translation: "Sugerir focar" },
    { topic: "Context", term: "hope-to-develop", definition: "Hope + infinitive pattern.", translation: "Esperar desenvolver" },
    { topic: "Context", term: "hope-to-eliminate", definition: "Hope + infinitive pattern.", translation: "Esperar eliminar" },
    { topic: "Context", term: "refuse-to-give-up", definition: "Refusal to stop trying.", translation: "Recusar desistir" },
    { topic: "Context", term: "give-up-infinitive", definition: "Refusal to stop trying.", translation: "Desistir" },

        { topic: "Science & Genetics", term: "gene-genome", definition: "A unit of heredity; the complete set of genetic material in an organism.", translation: "Gene / Genoma" },
        { topic: "Science & Genetics", term: "dna", definition: "Deoxyribonucleic acid; the carrier of genetic information.", translation: "DNA / ADN" },
        { topic: "Science & Genetics", term: "crispr", definition: "A powerful tool for editing genomes; molecular scissors for DNA.", translation: "CRISPR (técnica de edição)" },
        { topic: "Science & Genetics", term: "science-scientist", definition: "The intellectual activity encompassing the study of the physical world.", translation: "Ciência / Cientista" },
        { topic: "Science & Genetics", term: "extinction-extinct", definition: "The state of a species having no living members.", translation: "Extinção / Extinto(a)" },
        { topic: "Science & Genetics", term: "experiment", definition: "A scientific procedure undertaken to make a discovery or test a hypothesis.", translation: "Experimento / Experiência" },
        { topic: "Science & Genetics", term: "breakthrough", definition: "A significant development or discovery.", translation: "Avanço / Descoberta importante" },
        { topic: "Science & Genetics", term: "technology", definition: "The application of scientific knowledge for practical purposes.", translation: "Tecnologia" },
        { topic: "Science & Genetics", term: "advancement", definition: "A development or improvement in a specific field.", translation: "Avanço" },
        { topic: "Science & Genetics", term: "fact-fiction", definition: "Something known to be true vs. something invented.", translation: "Fato / Ficção" },
        { topic: "Science & Genetics", term: "benefit", definition: "An advantage or profit gained from something.", translation: "Benefício" },
        { topic: "Science & Genetics", term: "disease-illness", definition: "A disorder of structure or function in an organism.", translation: "Doença" },
        { topic: "Science & Genetics", term: "edit-modify", definition: "To change the structure or character of something.", translation: "Editar / Modificar" },
        { topic: "Science & Genetics", term: "research", definition: "The systematic investigation into a study of materials.", translation: "Pesquisa / Pesquisar" },
        { topic: "Science & Genetics", term: "develop", definition: "To grow or cause to grow and become more mature.", translation: "Desenvolver / Desenvolvimento" },
        { topic: "Science & Genetics", term: "clone-cloning", definition: "The process of creating an identical copy of a biological entity.", translation: "Clonar / Clonagem" },
        { topic: "Science & Genetics", term: "cure", definition: "A substance or treatment that ends a disease or condition.", translation: "Cura / Curar" },
        { topic: "Science & Genetics", term: "resurrect-de-extinction", definition: "The process of generating an organism that resembles an extinct species.", translation: "Ressuscitar / Desextinção" },
        { topic: "Science & Genetics", term: "species", definition: "A group of living organisms consisting of similar individuals.", translation: "Espécie(s)" },
        { topic: "Science & Genetics", term: "mammoth", definition: "A large, hairy, extinct elephant with long tusks.", translation: "Mamute" },
        { topic: "Science & Genetics", term: "ethics-ethical", definition: "Moral principles that govern a person's behavior.", translation: "Ética / Ético(a)" },
        { topic: "Science & Genetics", term: "moral", definition: "Concerned with the principles of right and wrong behavior.", translation: "Moral" },
        { topic: "Science & Genetics", term: "potential", definition: "Having the capacity to become or develop into something in the future.", translation: "Potencial" },
        { topic: "Science & Genetics", term: "consequence", definition: "A result or effect of an action or condition.", translation: "Consequência" },
        { topic: "Science & Genetics", term: "controversial", definition: "Something likely to give rise to public disagreement.", translation: "Controverso(a) / Polêmico(a)" },
        { topic: "Science & Genetics", term: "risk-danger", definition: "A situation involving exposure to danger.", translation: "Risco / Perigo" },
        
        // Phrasal Verbs (BREAK & CARRY)
        { topic: "Phrasal Verbs", term: "phrasal-verb", definition: "A verb combined with a preposition or adverb that creates a new meaning.", translation: "Verbo frasal" },
        { topic: "Phrasal Verbs", term: "break-down", definition: "To analyze a system or to stop functioning.", translation: "Analisar / Parar de funcionar / Desabar" },
        { topic: "Phrasal Verbs", term: "break-up", definition: "To separate or end a relationship.", translation: "Separar / Terminar relacionamento" },
        { topic: "Phrasal Verbs", term: "break-through", definition: "To overcome an obstacle or make a discovery.", translation: "Fazer descoberta / Romper barreira" },
        { topic: "Phrasal Verbs", term: "break-into", definition: "To enter a field or start an activity suddenly.", translation: "Invadir / Começar algo de repente" },
        { topic: "Phrasal Verbs", term: "break-out", definition: "Sudden start of a war, disease, or fire.", translation: "Eclodir / Escapar" },
        { topic: "Phrasal Verbs", term: "carry-on", definition: "To persist in an activity.", translation: "Continuar" },
        { topic: "Phrasal Verbs", term: "carry-out", definition: "To perform a task, experiment, or research.", translation: "Realizar / Conduzir" },
        { topic: "Phrasal Verbs", term: "carry-through", definition: "To complete a project or support someone through a crisis.", translation: "Levar a cabo / Concluir com sucesso" },
        { topic: "Phrasal Verbs", term: "carry-over", definition: "To continue to exist in a new situation.", translation: "Permanecer / Continuar existindo em nova situação" },

            // 1. Words Derived from Phrasal Verbs
        { topic: "Derived Nouns", term: "breakthrough", definition: "A significant development or discovery.", translation: "Avanço / Descoberta importante" },
        { topic: "Derived Nouns", term: "breakdown", definition: "A detailed analysis or a system failure.", translation: "Análise / Detalhamento" },
        { topic: "Derived Nouns", term: "breakup", definition: "The end of a partnership, relationship, or group.", translation: "Separação / Fim" },
        { topic: "Derived Nouns", term: "carry-on", definition: "Something you take with you on a trip.", translation: "Bagagem de mão" },
        { topic: "Derived Nouns", term: "carryover", definition: "Something left over from a previous time.", translation: "Resíduo / Sobra" },
        { topic: "Derived Nouns", term: "handout", definition: "Papers given to a class.", translation: "Folheto / Material distribuído" },
        { topic: "Derived Nouns", term: "checkout", definition: "The place where you pay.", translation: "Caixa / Pagamento" },
        { topic: "Derived Nouns", term: "feedback", definition: "Response or criticism.", translation: "Retorno / Avaliação" },
        { topic: "Derived Nouns", term: "setup", definition: "The arrangement of equipment.", translation: "Configuração / Montagem" },
        { topic: "Derived Nouns", term: "layout", definition: "The way something is arranged.", translation: "Layout / Estrutura" },

        // 2. Verb Patterns
        { topic: "Verb Patterns", term: "verb-patterns", definition: "Rules determining if a verb is followed by an infinitive, gerund, or object.", translation: "Padrões verbais" },
        { topic: "Verb Patterns", term: "infinitive", definition: "The basic form of a verb, usually preceded by 'to'.", translation: "Infinitivo" },
        { topic: "Verb Patterns", term: "gerund", definition: "The -ing form of a verb acting as a noun or part of a verb pattern.", translation: "Gerúndio" },
        { topic: "Verb Patterns", term: "pattern-a", definition: "Verb + Infinitive (want, hope, plan, decide, etc.).", translation: "Padrão A: Verbo + Infinitivo" },
        { topic: "Verb Patterns", term: "pattern-b", definition: "Verb + Gerund (enjoy, finish, avoid, suggest, etc.).", translation: "Padrão B: Verbo + Gerúndio" },
        { topic: "Verb Patterns", term: "pattern-c", definition: "Verb + Object + Infinitive (allow, force, advise, etc.).", translation: "Padrão C: Verbo + Objeto + Infinitivo" },
        { topic: "Verb Patterns", term: "base-verb", definition: "The verb without 'to' used after let, make, or help.", translation: "Forma base do verbo (sem 'to')" },

        // 3. Verbs with Different Meaning
        { topic: "Verbs with Different Meaning", term: "stop-gerund", definition: "To cease an activity.", translation: "Parar uma atividade" },
        { topic: "Verbs with Different Meaning", term: "stop-infinitive", definition: "To pause in order to do something else.", translation: "Parar para fazer algo" },
        { topic: "Verbs with Different Meaning", term: "remember-gerund", definition: "To have a memory of a past action.", translation: "Lembrar de algo que já aconteceu" },
        { topic: "Verbs with Different Meaning", term: "remember-infinitive", definition: "Don't forget to perform a task.", translation: "Lembrar de fazer uma tarefa" },
        { topic: "Verbs with Different Meaning", term: "forget-gerund", definition: "To lose the memory of a past event.", translation: "Esquecer uma memória passada" },
        { topic: "Verbs with Different Meaning", term: "forget-infinitive", definition: "To fail to do a task.", translation: "Esquecer de realizar uma tarefa" },
        { topic: "Verbs with Different Meaning", term: "try-gerund", definition: "To test something as an experiment.", translation: "Tentar/testar como um experimento" },
        { topic: "Verbs with Different Meaning", term: "try-infinitive", definition: "To make an effort to do something difficult.", translation: "Fazer um esforço para algo difícil" },
        { topic: "Verbs with Different Meaning", term: "regret-gerund", definition: "Be sorry for something done in the past.", translation: "Arrepender-se de algo feito" },
        { topic: "Verbs with Different Meaning", term: "regret-infinitive", definition: "Be sorry to announce bad news.", translation: "Lamentar (anunciar)" }

    ]
});
