/**
 * REACH English - LESSON DATA em2-1-3
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "em2-1-3", 
    grade: "High School 2nd Grade",       
    bimester: "1",   
    chapter: "3",    
    chapterTitle: "Sustainability and Green Energy", 
    
    steps: [
        // ======================================================
        // STEP 0: UNIT COVER
        // ======================================================
        {
            title: "Unit Cover",
            objectives: "• Discuss renewable energy and global sustainability.<br>• Use the Passive Voice across multiple tenses (Present, Past, Future, Continuous, Perfect).<br>• Link causes and consequences using Discourse Markers (Due to, therefore, as a result).<br>• Describe environmental impacts and conservation efforts.",
            welcome: "Hello, planet protectors! I'm Mr. D!<br>Welcome to a journey into the future of our world! Today, we are opening the door to the green revolution. Have you ever wondered how a city is powered by the wind? Or why climate change is being seriously discussed by every nation? We will explore how to talk about the earth using the Passive Voice. This grammar tool helps us focus on the big results and the actions that save our environment. It's time to tackle the challenges of our carbon footprint. Let's go green together!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss renewable energy and global sustainability. Use the Passive Voice across multiple tenses. Link causes and consequences using Discourse Markers. Describe environmental impacts and conservation efforts.",
                welcome: "TTS: Hello, planet protectors! I'm Mr. D! Welcome to a journey into the future of our world! Today, we are opening the door to the green revolution. Have you ever wondered how a city is powered by the wind? Or why climate change is being seriously discussed by every nation? We will explore how to talk about the earth using the Passive Voice. This grammar tool helps us focus on the big results and the actions that save our environment. It's time to tackle the challenges of our carbon footprint. Let's go green together!"
            }
        },

        // ======================================================
        // STEP 1: WHAT’S UP TODAY? (Context)
        // ======================================================
        {
            title: "What’s up today?",
            context: "Celine and Albert are at a regional Innovation Fair. They are standing in front of a giant map showing a new sustainable project.", 
            contextAudio: "audio/em2-1-3/step1.mp3",
            dialogue: [
                { 
                    speaker: "Celine", 
                    text: "Albert, look! This whole project [is powered by](tooltip:Is Powered By) [wind power](tooltip:Wind Power). The [turbines](tooltip:Turbine) [were installed](tooltip:Were Installed) last year on the coast." 
                },
                { 
                    speaker: "Albert", 
                    text: "It's incredible. In fact, I [read](tooltip:Read) that [renewable energy](tooltip:Renewable Energy) [is being seriously discussed](tooltip:Is Being Seriously Discussed) by our city council [right now](tooltip:Right Now)." 
                },
                { 
                    speaker: "Celine", 
                    text: "I believe so. [Due to](tooltip:Due To) the high [environmental impact](tooltip:Environmental Impact) of [fossil fuels](tooltip:Fossil Fuel), the old coal plants [must be abandoned](tooltip:Must Be Abandoned)." 
                },
                { 
                    speaker: "Albert", 
                    text: "Exactly. [Because of](tooltip:Because Of) the [greenhouse gas](tooltip:Greenhouse Gas) emissions, [climate change](tooltip:Climate Change) [has been accelerated](tooltip:Has Been Accelerated). [Therefore](tooltip:Therefore), a [solution](tooltip:Solution) [has to be implemented](tooltip:Has To Be Implemented) immediately." 
                },
                { 
                    speaker: "Celine", 
                    text: "Look at this section about [biomass](tooltip:Biomass). It says energy [is produced using](tooltip:Is Produced Using) organic [waste](tooltip:Waste). I [wonder](tooltip:Wonder) if this [can be achieved by](tooltip:Can Be Achieved By) our school." 
                },
                { 
                    speaker: "Albert", 
                    text: "We should try! [As a result](tooltip:As A Result) of better [recycling](tooltip:Recycling) and [conservation](tooltip:Conservation), we will [reduce](tooltip:Reduce) our [carbon footprint](tooltip:Carbon Footprint)." 
                },
                { 
                    speaker: "Celine", 
                    text: "True. Our [fauna](tooltip:Fauna) and [flora](tooltip:Flora) [will be protected](tooltip:Will Be Protected) if we [act](tooltip:Act) now. Let's [dive in](tooltip:Dive In) and ask the [expert](tooltip:Expert) how it [works](tooltip:Works)!" 
                }
            ]
        },

        // ======================================================
        // STEP 2: SAY THE WORD (Vocabulary)
        // ======================================================
        {
            title: "Say the word",
            audio2b: "",            
            subPages: [
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],

            // 2A: Vocabulary Lists (Tabbed)
            areas: [
                {
                    title: "Verbs (A-L)",
                    audio: "TTS: Achieve. Act. Add. Automate. Be. Believe. Change. Consider. Continue. Control. Could. Create. Develop. Did. Discuss. Do. Enjoy. Evolve. Exist. Explore. Fall down. Focus. Get. Give. Go. Happen. Have. Help. Imagine. Impact. Implement. Improve. Increase. Invest. Keep. Know. Lay off. Leave. Look. Lose.",
                    items: [
                        { term: "Abandon", trans: "Abandonar" },
                        { term: "Achieve", trans: "Alcançar / Conquistar" },
                        { term: "Act", trans: "Agir" },
                        { term: "Add", trans: "Adicionar" },
                        { term: "Automate", trans: "Automatizar" },
                        { term: "Be", trans: "Ser / Estar" },
                        { term: "Believe", trans: "Acreditar" },
                        { term: "Change", trans: "Mudar" },
                        { term: "Consider", trans: "Considerar" },
                        { term: "Continue", trans: "Continuar" },
                        { term: "Control", trans: "Controlar" },
                        { term: "Could", trans: "Poderia" },
                        { term: "Create", trans: "Criar" },
                        { term: "Defend", trans: "Defender" },
                        { term: "Destroy", trans: "Destruir" },
                        { term: "Develop", trans: "Desenvolver" },
                        { term: "Diminish", trans: "Diminuir" },
                        { term: "Discuss", trans: "Discutir" },
                        { term: "Dive in", trans: "Mergulhar (entrar de cabeça)" },
                        { term: "Do", trans: "Fazer" },
                        { term: "Enjoy", trans: "Curtir / Desfrutar" },
                        { term: "Explore", trans: "Explorar" },
                        { term: "Fall down", trans: "Cair / Fracassar" },
                        { term: "Focus", trans: "Focar" },
                        { term: "Generate", trans: "Gerar" },
                        { term: "Implement", trans: "Implementar" },
                        { term: "Impact", trans: "Impactar" },
                        { term: "Improve", trans: "Melhorar" },
                        { term: "Increase", trans: "Aumentar" },
                        { term: "Install", trans: "Instalar" },
                        { term: "Investigate", trans: "Investigar" },
                        { term: "Invest", trans: "Investir" }
                    ]
                },
                {
                    title: "Verbs (M-W)",
                    audio: "TTS: Keep. Know. Lay off. Leave. Look. Lose. Modify. Overheat. Play. Pollute. Power. Prefer. Produce. Promote. Protect. Provide. Read. Reduce. Recycle. Reform. Regenerate. Regulate. Solve. Stop. Study. Suppose. Tackle. Take. Think. Transform. Turbine. Use. Wonder. Would.",
                    items: [
                        { term: "Keep", trans: "Manter / Guardar" },
                        { term: "Know", trans: "Saber / Conhecer" },
                        { term: "Lay off", trans: "Demitir" },
                        { term: "Leave", trans: "Sair / Deixar" },
                        { term: "Look", trans: "Olhar / Parecer" },
                        { term: "Lose", trans: "Perder" },
                        { term: "Modify", trans: "Modificar" },
                        { term: "Overheat", trans: "Superaquecer" },
                        { term: "Play", trans: "Jogar / Brincar" },
                        { term: "Pollute", trans: "Poluir" },
                        { term: "Power", trans: "Alimentar (energia)" },
                        { term: "Prefer", trans: "Preferir" },
                        { term: "Produce", trans: "Produzir" },
                        { term: "Promote", trans: "Promover" },
                        { term: "Protect", trans: "Proteger" },
                        { term: "Provide", trans: "Fornecer" },
                        { term: "Read", trans: "Ler" },
                        { term: "Reduce", trans: "Reduzir" },
                        { term: "Recycle", trans: "Reciclar" },
                        { term: "Reform", trans: "Reformar" },
                        { term: "Regenerate", trans: "Regenerar" },
                        { term: "Regulate", trans: "Regular / Controlar" },
                        { term: "Solve", trans: "Resolver" },
                        { term: "Stop", trans: "Parar" },
                        { term: "Study", trans: "Estudar" },
                        { term: "Suppose", trans: "Supor" },
                        { term: "Tackle", trans: "Enfrentar / Lidar com" },
                        { term: "Take", trans: "Tomar / Pegar / Assumir" },
                        { term: "Think", trans: "Pensar" },
                        { term: "Transform", trans: "Transformar" },
                        { term: "Turbine", trans: "Turbina" },
                        { term: "Use", trans: "Usar" },
                        { term: "Wonder", trans: "Imaginar / Perguntar-se" },
                        { term: "Would", trans: "Iria / Faria" }
                    ]
                },
                {
                    title: "Robotics & AI Vocab",
                    audio: "TTS: Renewable energy. Sustainability. Solar power. Wind power. Hydropower. Geothermal energy. Biomass. Carbon footprint. Greenhouse gas. Climate change. Environmental impact. Conservation. Recycling. Fossil fuel. Petroleum. Turbine. Fauna. Flora.",
                    items: [
                        { term: "Renewable energy", trans: "Energia renovável" },
                        { term: "Sustainability", trans: "Sustentabilidade" },
                        { term: "Solar power", trans: "Energia solar" },
                        { term: "Wind power", trans: "Energia eólica" },
                        { term: "Hydropower", trans: "Energia hidrelétrica" },
                        { term: "Geothermal energy", trans: "Energia geotérmica" },
                        { term: "Biomass", trans: "Biomassa" },
                        { term: "Carbon footprint", trans: "Pegada de carbono" },
                        { term: "Greenhouse gas", trans: "Gás do efeito estufa" },
                        { term: "Climate change", trans: "Mudança climática" },
                        { term: "Environmental impact", trans: "Impacto ambiental" },
                        { term: "Conservation", trans: "Conservação" },
                        { term: "Recycling", trans: "Reciclagem" },
                        { term: "Fossil fuel", trans: "Combustível fóssil" },
                        { term: "Petroleum", trans: "Petróleo" },
                        { term: "Turbine", trans: "Turbina" },
                        { term: "Fauna", trans: "Fauna" },
                        { term: "Flora", trans: "Flora" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: Is powered by. Is produced using. Has to be implemented. Must be taken. It's generated through. It can be achieved by. Is being seriously discussed. Has ever been tried. To solve problems.",
                    items: [
                        { term: "Is powered by", trans: "É alimentado por" },
                        { term: "Is produced using", trans: "É produzido usando" },
                        { term: "Has to be implemented", trans: "Tem que ser implementado" },
                        { term: "Must be taken", trans: "Deve ser tomado" },
                        { term: "It's generated through", trans: "É gerado através de" },
                        { term: "It can be achieved by", trans: "Pode ser alcançado por" },
                        { term: "Is being seriously discussed", trans: "Está sendo seriamente discutido" },
                        { term: "Has ever been tried", trans: "Já foi testado" },
                        { term: "To solve problems", trans: "Para resolver problemas" }
                    ]
                }
            ], // This closes the areas array

            // 2B: Context Examples (Grouped & Tabbed)
            exampleGroups: [
                {
                    title: "Verbs",
                    audio: "TTS: We must abandon old coal plants. Can we achieve a cleaner future? It is vital to act before it's too late. They will build a new wind farm. The government cancelled the harmful project. We need to change our habits today. Please continue to recycle plastic. Scientists create new ways to save energy. We must defend the Amazon forest. Pollution can destroy entire ecosystems. Engineers develop efficient turbines. Our resources are diminishing. They will discuss the green plan. Let's dive in and start the research! We should explore solar options. Windmills generate clean electricity. The city implemented a new law. How does plastic impact the ocean? Technology helps to improve life. Global temperatures increase every year. He will install the panels on the roof. Experts investigate climate changes. Factories shouldn't pollute the air. Solar energy can power your house. Trees produce fresh oxygen for us. The school promotes a green week. We must protect the local fauna. You can recycle paper and glass. We need to reform the energy system. Nature has the power to regenerate. How can we solve the water crisis? Let's tackle the pollution problem. Solar rays are transformed into energy. I wonder if we can save the planet.",
                    items: [
                        { term: "Abandon", sent: "We must abandon old coal plants.", trans: "<span style='color:#0077b6'>Devemos abandonar velhas usinas de carvão.</span>" },
                        { term: "Achieve", sent: "Can we achieve a cleaner future?", trans: "<span style='color:#0077b6'>Podemos alcançar um futuro mais limpo?</span>" },
                        { term: "Act", sent: "It is vital to act before it's too late.", trans: "<span style='color:#0077b6'>É vital agir antes que seja tarde demais.</span>" },
                        { term: "Build", sent: "They will build a new wind farm.", trans: "<span style='color:#0077b6'>Eles construirão um novo parque eólico.</span>" },
                        { term: "Cancel", sent: "The government cancelled the harmful project.", trans: "<span style='color:#0077b6'>O governo cancelou o projeto prejudicial.</span>" },
                        { term: "Change", sent: "We need to change our habits today.", trans: "<span style='color:#0077b6'>Precisamos mudar nossos hábitos hoje.</span>" },
                        { term: "Continue", sent: "Please continue to recycle plastic.", trans: "<span style='color:#0077b6'>Por favor, continue a reciclar plástico.</span>" },
                        { term: "Create", sent: "Scientists create new ways to save energy.", trans: "<span style='color:#0077b6'>Cientistas criam novas formas de economizar energia.</span>" },
                        { term: "Defend", sent: "We must defend the Amazon forest.", trans: "<span style='color:#0077b6'>Devemos defender a floresta amazônica.</span>" },
                        { term: "Destroy", sent: "Pollution can destroy entire ecosystems.", trans: "<span style='color:#0077b6'>A poluição pode destruir ecossistemas inteiros.</span>" },
                        { term: "Develop", sent: "Engineers develop efficient turbines.", trans: "<span style='color:#0077b6'>Engenheiros desenvolvem turbinas eficientes.</span>" },
                        { term: "Diminish", sent: "Our resources are diminishing.", trans: "<span style='color:#0077b6'>Nossos recursos estão diminuindo.</span>" },
                        { term: "Discuss", sent: "They will discuss the green plan.", trans: "<span style='color:#0077b6'>Eles discutirão o plano verde.</span>" },
                        { term: "Dive in", sent: "Let's dive in and start the research!", trans: "<span style='color:#0077b6'>Vamos mergulhar e começar a pesquisa!</span>" },
                        { term: "Explore", sent: "We should explore solar options.", trans: "<span style='color:#0077b6'>Deveríamos explorar opções solares.</span>" },
                        { term: "Generate", sent: "Windmills generate clean electricity.", trans: "<span style='color:#0077b6'>Moinhos de vento geram eletricidade limpa.</span>" },
                        { term: "Implement", sent: "The city implemented a new law.", trans: "<span style='color:#0077b6'>A cidade implementou uma nova lei.</span>" },
                        { term: "Impact", sent: "How does plastic impact the ocean?", trans: "<span style='color:#0077b6'>Como o plástico impacta o oceano?</span>" },
                        { term: "Improve", sent: "Technology helps to improve life.", trans: "<span style='color:#0077b6'>A tecnologia ajuda a melhorar a vida.</span>" },
                        { term: "Increase", sent: "Global temperatures increase every year.", trans: "<span style='color:#0077b6'>As temperaturas globais aumentam todo ano.</span>" },
                        { term: "Install", sent: "He will install the panels on the roof.", trans: "<span style='color:#0077b6'>Ele instalará os painéis no telhado.</span>" },
                        { term: "Investigate", sent: "Experts investigate climate changes.", trans: "<span style='color:#0077b6'>Especialistas investigam mudanças climáticas.</span>" },
                        { term: "Pollute", sent: "Factories shouldn't pollute the air.", trans: "<span style='color:#0077b6'>Fábricas não deveriam poluir o ar.</span>" },
                        { term: "Power", sent: "Solar energy can power your house.", trans: "<span style='color:#0077b6'>A energia solar pode alimentar sua casa.</span>" },
                        { term: "Produce", sent: "Trees produce fresh oxygen for us.", trans: "<span style='color:#0077b6'>Árvores produzem oxigênio puro para nós.</span>" },
                        { term: "Promote", sent: "The school promotes a green week.", trans: "<span style='color:#0077b6'>A escola promove uma semana verde.</span>" },
                        { term: "Protect", sent: "We must protect the local fauna.", trans: "<span style='color:#0077b6'>Devemos proteger a fauna local.</span>" },
                        { term: "Recycle", sent: "You can recycle paper and glass.", trans: "<span style='color:#0077b6'>Você pode reciclar papel e vidro.</span>" },
                        { term: "Reform", sent: "We need to reform the energy system.", trans: "<span style='color:#0077b6'>Precisamos reformar o sistema de energia.</span>" },
                        { term: "Regenerate", sent: "Nature has the power to regenerate.", trans: "<span style='color:#0077b6'>A natureza tem o poder de se regenerar.</span>" },
                        { term: "Solve", sent: "How can we solve the water crisis?", trans: "<span style='color:#0077b6'>Como podemos resolver a crise da água?</span>" },
                        { term: "Tackle", sent: "Let's tackle the pollution problem.", trans: "<span style='color:#0077b6'>Vamos enfrentar o problema da poluição.</span>" },
                        { term: "Transform", sent: "Solar rays are transformed into energy.", trans: "<span style='color:#0077b6'>Raios solares são transformados em energia.</span>" },
                        { term: "Wonder", sent: "I wonder if we can save the planet.", trans: "<span style='color:#0077b6'>Eu me pergunto se podemos salvar o planeta.</span>" }
                    ]
                },
                {
                    title: "Vocabularies",
                    audio: "TTS: Renewable energy is our best hope. We practice sustainability at home. Solar power works even on cloudy days. This region is perfect for wind power. Hydropower is very common in Brazil. Geothermal energy comes from the earth. Biomass uses organic materials. I want to reduce my carbon footprint. CO2 is a dangerous greenhouse gas. Climate change affects world weather. Consider the environmental impact. Water conservation is essential now. Recycling starts in your kitchen. Coal is a type of fossil fuel. Petroleum is used to make plastic. The turbine spins very fast today. We must protect the Amazon fauna. The local flora is disappearing.",
                    items: [
                        { term: "Renewable energy", sent: "Renewable energy is our best hope.", trans: "<span style='color:#0077b6'>Energia renovável é nossa melhor esperança.</span>" },
                        { term: "Sustainability", sent: "We practice sustainability at home.", trans: "<span style='color:#0077b6'>Praticamos sustentabilidade em casa.</span>" },
                        { term: "Solar power", sent: "Solar power works even on cloudy days.", trans: "<span style='color:#0077b6'>Energia solar funciona até em dias nublados.</span>" },
                        { term: "Wind power", sent: "This region is perfect for wind power.", trans: "<span style='color:#0077b6'>Esta região é perfeita para energia eólica.</span>" },
                        { term: "Hydropower", sent: "Hydropower is very common in Brazil.", trans: "<span style='color:#0077b6'>A energia hidrelétrica é muito comum no Brasil.</span>" },
                        { term: "Geothermal energy", sent: "Geothermal energy comes from the earth.", trans: "<span style='color:#0077b6'>A energia geotérmica vem da terra.</span>" },
                        { term: "Biomass", sent: "Biomass uses organic materials.", trans: "<span style='color:#0077b6'>A biomassa usa materiais orgânicos.</span>" },
                        { term: "Carbon footprint", sent: "I want to reduce my carbon footprint.", trans: "<span style='color:#0077b6'>Quero reduzir minha pegada de carbono.</span>" },
                        { term: "Greenhouse gas", sent: "CO2 is a dangerous greenhouse gas.", trans: "<span style='color:#0077b6'>O CO2 é um gás do efeito estufa perigoso.</span>" },
                        { term: "Climate change", sent: "Climate change affects world weather.", trans: "<span style='color:#0077b6'>A mudança climática afeta o clima mundial.</span>" },
                        { term: "Environmental impact", sent: "Consider the environmental impact.", trans: "<span style='color:#0077b6'>Considere o impacto ambiental.</span>" },
                        { term: "Conservation", sent: "Water conservation is essential now.", trans: "<span style='color:#0077b6'>A conservação da água é essencial agora.</span>" },
                        { term: "Recycling", sent: "Recycling starts in your kitchen.", trans: "<span style='color:#0077b6'>A reciclagem começa na sua cozinha.</span>" },
                        { term: "Fossil fuel", sent: "Coal is a type of fossil fuel.", trans: "<span style='color:#0077b6'>O carvão é um tipo de combustível fóssil.</span>" },
                        { term: "Petroleum", sent: "Petroleum is used to make plastic.", trans: "<span style='color:#0077b6'>O petróleo é usado para fazer plástico.</span>" },
                        { term: "Turbine", sent: "The turbine spins very fast today.", trans: "<span style='color:#0077b6'>A turbina gira muito rápido hoje.</span>" },
                        { term: "Fauna", sent: "We must protect the Amazon fauna.", trans: "<span style='color:#0077b6'>Devemos proteger a fauna da Amazônia.</span>" },
                        { term: "Flora", sent: "The local flora is disappearing.", trans: "<span style='color:#0077b6'>A flora local está desaparecendo.</span>" }
                    ]
                },
                {
                    title: "Phrases & Expressions",
                    audio: "TTS: The light is powered by solar energy. This bag is produced using plastic waste. A new plan has to be implemented now. Serious action must be taken. Energy is generated through wind. Change can be achieved by us. The law is being seriously discussed. This method has never been tried here. We use science to solve problems.",
                    items: [
                        { term: "Is powered by", sent: "The light is powered by solar energy.", trans: "<span style='color:#0077b6'>É alimentado por energia solar.</span>" },
                        { term: "Is produced using", sent: "This bag is produced using plastic waste.", trans: "<span style='color:#0077b6'>É produzido usando lixo plástico.</span>" },
                        { term: "Has to be implemented", sent: "A new plan has to be implemented now.", trans: "<span style='color:#0077b6'>Um novo plano tem que ser implementado agora.</span>" },
                        { term: "Must be taken", sent: "Serious action must be taken.", trans: "<span style='color:#0077b6'>Ação séria deve ser tomada.</span>" },
                        { term: "It's generated through", sent: "Energy is generated through wind.", trans: "<span style='color:#0077b6'>É gerado através do vento.</span>" },
                        { term: "It can be achieved by", sent: "Change can be achieved by us.", trans: "<span style='color:#0077b6'>A mudança pode ser alcançada por nós.</span>" },
                        { term: "Is being seriously discussed", sent: "The law is being seriously discussed.", trans: "<span style='color:#0077b6'>A lei está sendo seriamente discutida.</span>" },
                        { term: "Has ever been tried", sent: "This method has never been tried here.", trans: "<span style='color:#0077b6'>Este método nunca foi testado aqui.</span>" },
                        { term: "To solve problems", sent: "We use science to solve problems.", trans: "<span style='color:#0077b6'>Usamos a ciência para resolver problemas.</span>" }
                    ]
                }
            ],

            // 2C: Practice Drills
            drills: [
                // Exercise Set 1: Verbs (Passive/Active)
                {
                    type: "mcq",
                    q: "We must _______ (abandonar) the use of coal.",
                    options: [
                        { t: "Build", c: false },
                        { t: "Abandon", c: true },
                        { t: "Create", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Can we _______ (alcançar) our goals by 2030?",
                    options: [
                        { t: "Achieve", c: true },
                        { t: "Destroy", c: false },
                        { t: "Pollute", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Scientists _______ (criam) new technologies every day.",
                    options: [
                        { t: "Cancel", c: false },
                        { t: "Improve", c: false },
                        { t: "Create", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Pollution _______ (destrói) the natural habitats.",
                    options: [
                        { t: "Protects", c: false },
                        { t: "Destroys", c: true },
                        { t: "Regenerates", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Let's _______ (enfrentar) the climate crisis together!",
                    options: [
                        { t: "Tackle", c: true },
                        { t: "Avoid", c: false },
                        { t: "Forget", c: false }
                    ]
                },

                // Exercise Set 2: Vocabularies (MCQ)
                {
                    type: "mcq",
                    q: "Solar and wind are types of _______ (energia renovável).",
                    options: [
                        { t: "Petroleum", c: false },
                        { t: "Renewable energy", c: true },
                        { t: "Waste", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "CO2 is a common _______ (gás do efeito estufa).",
                    options: [
                        { t: "Greenhouse gas", c: true },
                        { t: "Flora", c: false },
                        { t: "Biomass", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Reducing your _______ (pegada de carbono) helps the earth.",
                    options: [
                        { t: "Sustainability", c: false },
                        { t: "Carbon footprint", c: true },
                        { t: "Turbine", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The protection of plants and flowers is the protection of the _______ (flora).",
                    options: [
                        { t: "Fauna", c: false },
                        { t: "Flora", c: true },
                        { t: "Fossil fuel", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "_______ (Reciclagem) is the process of reusing materials.",
                    options: [
                        { t: "Recycling", c: true },
                        { t: "Consumption", c: false },
                        { t: "Petroleum", c: false }
                    ]
                },

                // Exercise Set 3: Expressions (Passive Voice & Linking)
                {
                    type: "mcq",
                    q: "The new dam _______ (é alimentado por) water pressure.",
                    options: [
                        { t: "a) is powered by", c: true },
                        { t: "b) gives off", c: false },
                        { t: "c) looks after", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "This material _______ (é produzido usando) plastic bottles.",
                    options: [
                        { t: "a) is generated through", c: false },
                        { t: "b) is produced using", c: true },
                        { t: "c) has ever been tried", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Strong measures _______ (devem ser tomadas) by the government.",
                    options: [
                        { t: "a) has to be implemented", c: false },
                        { t: "b) must be taken", c: true },
                        { t: "c) is being discussed", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "This new system _______ (tem que ser implementado) next month.",
                    options: [
                        { t: "a) has to be implemented", c: true },
                        { t: "b) is being discussed", c: false },
                        { t: "c) was built", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The ocean is polluted _______ plastic waste.",
                    options: [
                        { t: "a) as a result of", c: true },
                        { t: "b) for this reason", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We want a sustainable city. _______, we must invest in green tech.",
                    options: [
                        { t: "a) Because of", c: false },
                        { t: "b) Therefore", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the Passive sentence:",
                    options: [
                        { t: "a) Scientists study the fauna.", c: false },
                        { t: "b) The fauna is studied by scientists.", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the Future Passive sentence:",
                    options: [
                        { t: "a) We will clean the river.", c: false },
                        { t: "b) The river will be cleaned.", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "I missed the class, _______ I didn't see the video about biomass.",
                    options: [
                        { t: "a) so", c: true },
                        { t: "b) therefore", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The carbon footprint is high _______ excessive consumption.",
                    options: [
                        { t: "a) so", c: false },
                        { t: "b) due to", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "This goal _______ (pode ser alcançado por) cooperation.",
                    options: [
                        { t: "a) can be achieved by", c: true },
                        { t: "b) is powered by", c: false },
                        { t: "c) gives off", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: FOLLOW THE PATTERN (Grammar)
        // ======================================================
        {
            title: "Follow the Pattern",
            audio3b: "", 
            subPages: [
                { id: "step3a", label: "3A: Patterns" },
                { id: "step3b", label: "3B: Examples" },
                { id: "step3c", label: "3C: Practice" }
            ],

            // 3A: Explanations (Tabbed)
            patterns: [
                {
                    title: "The Passive Voice",
                    audio: "TTS: The Passive Voice focuses on the action or the receiver of the action. Present Simple Passive: The materials are recycled every month. Future Simple Passive: More panels will be installed soon. Present Perfect Passive: The best system has been created. Passive with Modals: Climate change must be solved.",
                    explanation: "We use the passive voice to focus on the action or the receiver of the action, rather than who performed it. The focus moves from the subject to the object of the active sentence.<br><br><span style='color:#0077b6; font-style:italic;'>(Usamos a voz passiva para focar na ação ou no receptor da ação, e não em quem a realizou. O foco muda do sujeito para o objeto da frase ativa.)</span>",
                    samples: [
                        { en: "<b>Present Simple:</b> The materials are recycled every month.", pt: "<span style='color:#0077b6'>Os materiais são reciclados todos os meses.</span>" },
                        { en: "<b>Past Simple:</b> The plan was implemented last year.", pt: "<span style='color:#0077b6'>O plano foi implementado no ano passado.</span>" },
                        { en: "<b>Future Simple:</b> More solar panels will be installed.", pt: "<span style='color:#0077b6'>Mais painéis solares serão instalados.</span>" },
                        { en: "<b>Present Continuous:</b> Many habitats are being destroyed right now.", pt: "<span style='color:#0077b6'>Muitos habitats estão sendo destruídos agora mesmo.</span>" },
                        { en: "<b>Past Continuous:</b> Turbines were being built all day.", pt: "<span style='color:#0077b6'>Novas turbinas estavam sendo construídas o dia todo.</span>" },
                        { en: "<b>Present Perfect:</b> The best system has been created.", pt: "<span style='color:#0077b6'>O melhor sistema foi criado.</span>" },
                        { en: "<b>Past Perfect:</b> The area had been explored before.", pt: "<span style='color:#0077b6'>A área já tinha sido explorada antes.</span>" },
                        { en: "<b>Passive with Modals:</b> Climate change must be solved.", pt: "<span style='color:#0077b6'>A mudança climática deve ser resolvida.</span>" }
                    ]
                },
                {
                    title: "Linking Words (Cause & Consequence)",
                    audio: "TTS: Linking words join a reason with its result. Cause: Due to, Because of, As a result of. Consequence: Therefore, As a consequence, Consequently, So.",
                    explanation: "These words help join a reason (cause) with its result (consequence) to make arguments clearer.<br><br><span style='color:#0077b6; font-style:italic;'>(Estas palavras ajudam a unir um motivo (causa) ao seu resultado (consequência) para tornar os argumentos mais claros.)</span>",
                    samples: [
                        { en: "<b>CAUSE:</b> The project was successful <b>due to</b> the new energy source.", pt: "<span style='color:#0077b6'>O projeto teve sucesso devido à nova fonte de energia.</span>" },
                        { en: "<b>CAUSE:</b> Many animals are losing their homes <b>because of</b> deforestation.", pt: "<span style='color:#0077b6'>Muitos animais estão perdendo seus lares por causa do desmatamento.</span>" },
                        { en: "<b>CONSEQUENCE:</b> Solar power is clean; <b>therefore</b>, it helps the planet.", pt: "<span style='color:#0077b6'>A energia solar é limpa; portanto, ajuda o planeta.</span>" },
                        { en: "<b>CONSEQUENCE:</b> We lost the data. <b>As a consequence</b>, the experiment failed.", pt: "<span style='color:#0077b6'>Perdemos os dados. Como consequência, o experimento falhou.</span>" }
                    ]
                }
            ],

            // 3B: Short Dialogues (Grouped in Boxes)
            dialogueGroups: [
                {
                    title: "Dialogue 1: Passive Voice & Cause/Effect",
                    audio: "audio/em2-1-3/step3_dialogue1.mp3",
                    lines: [
                        { 
                            speaker: "Albert", 
                            text: "Celine, I read that the new dam was built last year.", 
                            pt: "<span style='color:#0077b6'>Celine, eu li que a nova barragem foi construída no ano passado.</span>" 
                        },
                        { 
                            speaker: "Celine", 
                            text: "Yes! Energy is generated through the water flow. Because of this project, our community is safer.", 
                            pt: "<span style='color:#0077b6'>Sim! A energia é gerada através do fluxo de água. Por causa deste projeto, nossa comunidade é mais segura.</span>" 
                        }
                    ]
                },
                {
                    title: "Dialogue 2: Linking Words (Consequence)",
                    audio: "audio/em2-1-3/step3_dialogue2.mp3",
                    lines: [
                        { 
                            speaker: "Celine", 
                            text: "Solar panels have been installed in the neighborhood recently.", 
                            pt: "<span style='color:#0077b6'>Painéis solares foram instalados no bairro recentemente.</span>" 
                        },
                        { 
                            speaker: "Albert", 
                            text: "That's great! Therefore, our reliance on oil will diminish. We must act for the Earth!", 
                            pt: "<span style='color:#0077b6'>Que ótimo! Portanto, nossa dependência de petróleo vai diminuir. Devemos agir pela Terra!</span>" 
                        }
                    ]
                }
            ],

            // 3C: Grammar MCQ
            grammarDrills: [
                // Exercise Set 1: Passive Voice Tense Selection
                {
                    type: "mcq",
                    q: "New wind power projects _______ (implement) next year.",
                    options: [
                        { t: "were implemented", c: false },
                        { t: "will be implemented", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "At this moment, the environmental impact _______ (discuss) by experts.",
                    options: [
                        { t: "is being discussed", c: true },
                        { t: "was discussed", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The common chunks of data _______ (collect) by the team yesterday.",
                    options: [
                        { t: "are collected", c: false },
                        { t: "were collected", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "The best system _______ (create) already.",
                    options: [
                        { t: "has been created", c: true },
                        { t: "will be created", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "Our flora _______ (protect) if we follow the law.",
                    options: [
                        { t: "will be protected", c: true },
                        { t: "is protected", c: false }
                    ]
                },

                // Exercise Set 2: Linking Words (Cause/Consequence)
                {
                    type: "mcq",
                    q: "We need to recycle; _______, we will reduce waste.",
                    options: [
                        { t: "because of", c: false },
                        { t: "consequently", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "I missed the class, _______ I didn't see the video about biomass.",
                    options: [
                        { t: "so", c: true },
                        { t: "therefore", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "The ocean is polluted _______ plastic waste.",
                    options: [
                        { t: "as a result of", c: true },
                        { t: "for this reason", c: false }
                    ]
                },
                {
                    type: "mcq",
                    q: "We want a sustainable city. _______, we must invest in green tech.",
                    options: [
                        { t: "Because of", c: false },
                        { t: "Therefore", c: true }
                    ]
                },

                // Exercise Set 3: Passive vs Active Sentence Selection
                {
                    type: "mcq",
                    q: "Choose the Passive sentence:",
                    options: [
                        { t: "Scientists study the fauna.", c: false },
                        { t: "The fauna is studied by scientists.", c: true }
                    ]
                },
                {
                    type: "mcq",
                    q: "Choose the Future Passive sentence:",
                    options: [
                        { t: "We will clean the river.", c: false },
                        { t: "The river will be cleaned.", c: true }
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
                    text: "Renewable energy is being seriously discussed.<br><small style='color:#0077b6'>(A energia renovável está sendo seriamente discutida.)</small>", 
                    audio: "TTS: Renewable energy is being seriously discussed.", 
                    arrow: "↘" 
                },
                { 
                    text: "A lot of research has been done on this topic.<br><small style='color:#0077b6'>(Muitas pesquisas foram feitas sobre este tópico.)</small>", 
                    audio: "TTS: A lot of research has been done on this topic.", 
                    arrow: "↘" 
                },
                { 
                    text: "Can pollution be reduced by the community?<br><small style='color:#0077b6'>(A poluição pode ser reduzida pela comunidade?)</small>", 
                    audio: "TTS: Can pollution be reduced by the community?", 
                    arrow: "↗" 
                },
                { 
                    text: "The plan had been implemented before the meeting.<br><small style='color:#0077b6'>(O plano tinha sido implementado antes da reunião.)</small>", 
                    audio: "TTS: The plan had been implemented before the meeting.", 
                    arrow: "↘" 
                },
                { 
                    text: "More panels will be installed on the roof.<br><small style='color:#0077b6'>(Mais painéis serão instalados no telhado.)</small>", 
                    audio: "TTS: More panels will be installed on the roof.", 
                    arrow: "↘" 
                },
                { 
                    text: "The fauna and flora must be protected by us.<br><small style='color:#0077b6'>(A fauna e a flora devem ser protegidas por nós.)</small>", 
                    audio: "TTS: The fauna and flora must be protected by us.", 
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
                    instruction: "Listen to Albert describing a green project at his school and type the missing words.<br><small style='color:#0077b6'>(Ouça Albert descrevendo um projeto verde em sua escola e digite as palavras que faltam.)</small>",
                    audio: "TTS: Hi! In our school, a new sustainability project is being developed. Last year, the old fossil fuel system was abandoned. Now, electricity is generated through solar power. Therefore, our carbon footprint has been reduced significantly!",
                    text: "Hi! In our school, a new [sustainability] project [is being] developed. Last year, the old [fossil fuel] system was [abandoned]. Now, electricity [is generated] through [solar power]. [Therefore], our [carbon footprint] has been [reduced] significantly!"
                },
                // Drill 2: Dropdown (MP3)
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue between Albert and Celine and choose the correct options.<br><small style='color:#0077b6'>(Ouça o diálogo entre Albert e Celine e escolha as opções corretas.)</small>",
                    audio: "audio/em2-1-3/step5_drill2.mp3",
                    questions: [
                        // Passive Voice & Perfect Tenses
                        { q: "Celine: Albert, [has*|had|will] the new [biomass*|oil|petroleum] plant been [built*|achieved|explored] yet?", a: "has" },
                        // Linking Words
                        { q: "Albert: Yes! It was [implemented*|produced|installed] [because of*|therefore|consequently] the new environmental laws.", a: "implemented" },
                        // Vocabulary & Consequence
                        { q: "Celine: That's great! [As a consequence*|Due to|Besides], more [renewable energy*|waste|gasoline] will be used by the community.", a: "As a consequence" }
                    ]
                },
                // Drill 3: Audio Choice (TTS)
                {
                    type: "audio-choice",
                    instruction: "Listen to the audio question and choose the logical response.<br><small style='color:#0077b6'>(Ouça a pergunta em áudio e escolha a resposta lógica correta.)</small>",
                    audio: "TTS: How is the local river being protected from pollution?",
                    options: [
                        { t: "The turbines were installed yesterday.", c: false },
                        { t: "It is being cleaned by a group of volunteers every week.", c: true },
                        { t: "Because of the fossil fuels, it is dirty.", c: false },
                        { t: "It can be achieved by 2030.", c: false }
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
                    title: "6a: Narration - The Island of El Hierro",
                    audio: "TTS: El Hierro is a small island where sustainability is a reality. For several years, a project has been developed to make the island 100% green. Electricity is generated through a combination of wind power and hydropower. Due to this system, the use of petroleum was almost entirely abandoned. Therefore, the local environment is much cleaner now. This successful model is being seriously discussed by other islands. It is believed that a zero-carbon future can be achieved by small communities first.",
                    body: "El Hierro is a small island where sustainability is a reality. For several years, a project has been developed to make the island 100% green. Electricity is generated through a combination of wind power and hydropower. Due to this system, the use of petroleum was almost entirely abandoned. Therefore, the local environment is much cleaner now. This successful model is being seriously discussed by other islands. It is believed that a zero-carbon future can be achieved by small communities first.",
                    questions: [
                        { q: "How is electricity produced on El Hierro?", options: [ {t:"Using only solar panels.", c:false}, {t:"Through wind and hydropower.", c:true}, {t:"By burning organic waste.", c:false} ] },
                        { q: "What was the consequence of the new energy system?", options: [ {t:"Petroleum was abandoned.", c:true}, {t:"The carbon footprint increased.", c:false}, {t:"The project was cancelled.", c:false} ] },
                        { q: "What is being discussed by other islands?", options: [ {t:"The high cost of gasoline.", c:false}, {t:"The successful green model of El Hierro.", c:true}, {t:"How to destroy the flora.", c:false} ] }
                    ]
                },
                {
                    title: "6b: Dialogue - The Solar Debate",
                    audio: "audio/em2-1-3/p6_text2.mp3",
                    body: "<b>Albert:</b> Celine, I heard that new solar panels will be installed in the school past the gym.<br><b>Celine:</b> Finally! The project had been delayed because of the budget, but it was finally approved.<br><b>Albert:</b> Consequently, our school will be powered by renewable energy.<br><b>Celine:</b> Exactly. Moreover, the environmental impact is being analyzed by the students in science class.<br><b>Albert:</b> That's perfect. Tackling climate change starts with small steps.<br><b>Celine:</b> I agree. The flora in our garden will also be protected better with this new plan.",
                    questions: [
                        { q: "Where will the solar panels be installed?", options: [ {t:"On the roof of the library.", c:false}, {t:"Past the school gym.", c:true}, {t:"Near the river.", c:false} ] },
                        { q: "Why was the project delayed in the past?", options: [ {t:"Due to the weather.", c:false}, {t:"Because of budget issues.", c:true}, {t:"Because the turbines were broken.", c:false} ] },
                        { q: "What are the students doing in science class?", options: [ {t:"Building a dam.", c:false}, {t:"Analyzing the environmental impact.", c:true}, {t:"Planting new species of fauna.", c:false} ] }
                    ]
                },
                {
                    title: "6c: Description - A Sustainable Startup",
                    audio: "TTS: 'GreenFuture' is a startup that was created to solve problems related to waste. Their main product is produced using 100% recycled plastic. As a result of their innovation, thousands of tons of waste are being transformed into durable furniture. Every year, new methods are implemented to improve efficiency. The founders believe that sustainability must be prioritized by every business. Since they started, their carbon footprint has been kept very low.",
                    body: "'GreenFuture' is a startup that was created to solve problems related to waste. Their main product is produced using 100% recycled plastic. As a result of their innovation, thousands of tons of waste are being transformed into durable furniture. Every year, new methods are implemented to improve efficiency. The founders believe that sustainability must be prioritized by every business. Since they started, their carbon footprint has been kept very low.",
                    questions: [
                        { q: "What is the goal of the startup 'GreenFuture'?", options: [ {t:"To produce more petroleum.", c:false}, {t:"To solve waste-related problems.", c:true}, {t:"To build a new hospital.", c:false} ] },
                        { q: "How are their products made?", options: [ {t:"Using organic biomass.", c:false}, {t:"Using 100% recycled plastic.", c:true}, {t:"They are powered by wind.", c:false} ] },
                        { q: "What is prioritized by this business?", options: [ {t:"Sustainability.", c:true}, {t:"High prices.", c:false}, {t:"Traditional energy.", c:false} ] }
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
                // Drill 1: Matching (Vocab -> Translation)
                {
                    type: "matching",
                    instruction: "Match the environmental term with its Portuguese meaning.",
                    pairs: [
                        { left: "Greenhouse gas", right: "Gás do efeito estufa", val: "1" },
                        { left: "Carbon footprint", right: "Pegada de carbono", val: "2" },
                        { left: "Natural resource", right: "Recurso natural", val: "3" },
                        { left: "Climate change", right: "Mudança climática", val: "4" }
                    ]
                },
                // Drill 2: Word Order (Passive Voice)
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct Passive Voice sentence.",
                    sentence: "installed / The / were / panels / week / last / .",
                    correct: "The panels were installed last week ."
                },
                {
                    type: "word-order",
                    instruction: "Put the words in order to form a correct Passive Voice sentence.",
                    sentence: "be / protected / planet / The / must / .",
                    correct: "The planet must be protected ."
                },
                // Drill 3: Odd One Out
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does NOT belong to the group.",
                    options: [
                        { t: "Solar power", c: false },
                        { t: "Wind power", c: false },
                        { t: "Petroleum", c: true },
                        { t: "Hydropower", c: false }
                    ]
                },
                {
                    type: "odd-one-out",
                    instruction: "Choose the word that does NOT belong.<br><small>(It shows cause, the others show consequence.)</small>",
                    options: [
                        { t: "Therefore", c: false },
                        { t: "Consequently", c: false },
                        { t: "As a result", c: false },
                        { t: "Because of", c: true }
                    ]
                },
                // Drill 4: Clickable Error (Discourse Markers & Verbs)
                {
                    type: "clickable-error",
                    instruction: "Identify the incorrect word in bold and choose the correct option.",
                    sentence: "The project failed [therefore](error:due to) the lack of invest."
                },
                {
                    type: "clickable-error",
                    instruction: "Identify the incorrect word in bold and choose the correct option.",
                    sentence: "We recycle often [as a result](error:so) we save the Earth."
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING
        // ======================================================
        {
            title: "Tell your story",
            instruction: "Now it's your turn to be an environmentalist! Write a short text (5-7 sentences) about a [renewable energy] source you think is important. Explain why it should be [implemented] and what the [impact] will be.<br><br><small><span style='color:#0077b6'>(Agora é a sua vez de ser um ambientalista! Escreva um pequeno texto (5-7 frases) sobre uma fonte de energia renovável que você considera importante. Explique por que ela deve ser implementada e qual será o impacto.)</span></small>",
            example: "\"I believe solar power is the best solution. Due to the sun's energy, it is infinite. In my city, more panels must be on public buildings. Consequently, less oil will be consumed by our community. As a result, the environment will stay healthy. We need this change so that we can protect our planet!\"<br><br><small><span style='color:#0077b6'>(\"Eu acredito que a energia solar é a melhor solução. Devido à energia do sol, ela é infinita. Na minha cidade, mais painéis devem ser colocados em edifícios públicos. Consequentemente, menos petróleo será consumido pela nossa comunidade. Como resultado, o meio ambiente permanecerá saudável. Precisamos dessa mudança para que possamos proteger nosso planeta!\")</span></small>",
            prompts: [
                "Use at least two [Passive Voice] sentences.<br><small><span style='color:#0077b6'>(Use pelo menos duas frases na Voz Passiva.)</span></small>",
                "Use at least two [Linking Words] for cause and consequence.<br><small><span style='color:#0077b6'>(Use pelo menos dois Conectivos de causa e consequência.)</span></small>"
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Wrap it up",
            items: [
                // --- Verbs (A-L) ---
                { term: "Abandon", definition: "To stop doing something or using something completely.", defTrans: "Abandonar", example: "We must abandon the use of fossil fuels.", audioFront: "TTS: Abandon", audioBack: "TTS: We must abandon the use of fossil fuels." },
                { term: "Achieve", definition: "To successfully finish or reach a goal through effort.", defTrans: "Alcançar / Atingir", example: "Sustainability can be achieved by everyone.", audioFront: "TTS: Achieve", audioBack: "TTS: Sustainability can be achieved by everyone." },
                { term: "Act", definition: "To take action or do something for a particular purpose.", defTrans: "Agir", example: "It is time to act for a greener future.", audioFront: "TTS: Act", audioBack: "TTS: It is time to act for a greener future." },
                { term: "Build", definition: "To make something by putting parts together.", defTrans: "Construir", example: "They will build a new wind farm.", audioFront: "TTS: Build", audioBack: "TTS: They will build a new wind farm." },
                { term: "Cancel", definition: "To decide that a planned event will not take place.", defTrans: "Cancelar", example: "The project was cancelled due to the costs.", audioFront: "TTS: Cancel", audioBack: "TTS: The project was cancelled due to the costs." },
                { term: "Change", definition: "To make or become different.", defTrans: "Mudar", example: "We need to change our consumption habits.", audioFront: "TTS: Change", audioBack: "TTS: We need to change our consumption habits." },
                { term: "Continue", definition: "To keep happening or existing without stopping.", defTrans: "Continuar", example: "We must continue to protect the forest.", audioFront: "TTS: Continue", audioBack: "TTS: We must continue to protect the forest." },
                { term: "Create", definition: "To make something new or invent something.", defTrans: "Criar", example: "Innovation creates new solutions for waste.", audioFront: "TTS: Create", audioBack: "TTS: Innovation creates new solutions for waste." },
                { term: "Defend", definition: "To protect someone or something from attack or harm.", defTrans: "Defender", example: "Activists defend the rights of nature.", audioFront: "TTS: Defend", audioBack: "TTS: Activists defend the rights of nature." },
                { term: "Destroy", definition: "To damage something so badly that it cannot be used or no longer exists.", defTrans: "Destruir", example: "Pollution destroys local ecosystems.", audioFront: "TTS: Destroy", audioBack: "TTS: Pollution destroys local ecosystems." },
                { term: "Develop", definition: "To invent something or bring something new into existence.", defTrans: "Desenvolver", example: "Engineers develop sustainable materials.", audioFront: "TTS: Develop", audioBack: "TTS: Engineers develop sustainable materials." },
                { term: "Diminish", definition: "To reduce or be reduced in size or importance.", defTrans: "Diminuir", example: "Natural resources are diminishing fast.", audioFront: "TTS: Diminish", audioBack: "TTS: Natural resources are diminishing fast." },
                { term: "Discuss", definition: "To talk about a subject with someone and tell each other your ideas or opinions.", defTrans: "Discutir", example: "They discussed the impact of solar power.", audioFront: "TTS: Discuss", audioBack: "TTS: They discussed the impact of solar power." },
                { term: "Dive in", definition: "To start doing something suddenly and with a lot of energy.", defTrans: "Mergulhar (entrar de cabeça)", example: "Let's dive in to the green project!", audioFront: "TTS: Dive in", audioBack: "TTS: Let's dive in to the green project!" },
                { term: "Explore", definition: "To search and discover about something or a place.", defTrans: "Explorar", example: "We should explore new energy sources.", audioFront: "TTS: Explore", audioBack: "TTS: We should explore new energy sources." },
                { term: "Generate", definition: "To produce energy or create a specific result.", defTrans: "Gerar", example: "Turbines generate clean electricity.", audioFront: "TTS: Generate", audioBack: "TTS: Turbines generate clean electricity." },
                { term: "Implement", definition: "To start using a plan or system.", defTrans: "Implementar", example: "The law was implemented last month.", audioFront: "TTS: Implement", audioBack: "TTS: The law was implemented last month." },
                { term: "Impact", definition: "To have a strong effect or influence on a situation.", defTrans: "Impactar", example: "Our choices impact the whole planet.", audioFront: "TTS: Impact", audioBack: "TTS: Our choices impact the whole planet." },
                { term: "Improve", definition: "To make something better than before.", defTrans: "Melhorar", example: "Technology helps improve air quality.", audioFront: "TTS: Improve", audioBack: "TTS: Technology helps improve air quality." },
                { term: "Increase", definition: "To become or make something larger in amount or size.", defTrans: "Aumentar", example: "Global temperatures increase every year.", audioFront: "TTS: Increase", audioBack: "TTS: Global temperatures increase every year." },
                { term: "Install", definition: "To put a piece of equipment in place so that it is ready to use.", defTrans: "Instalar", example: "We will install panels on the school roof.", audioFront: "TTS: Install", audioBack: "TTS: We will install panels on the school roof." },
                { term: "Investigate", definition: "To examine a problem, or statement carefully.", defTrans: "Investigar", example: "Experts investigate the causes of the flood.", audioFront: "TTS: Investigate", audioBack: "TTS: Experts investigate the causes of the flood." },
                { term: "Pollute", definition: "To make land, water, or air dirty and not safe to use.", defTrans: "Poluir", example: "Factories should not pollute the rivers.", audioFront: "TTS: Pollute", audioBack: "TTS: Factories should not pollute the rivers." },
                { term: "Power", definition: "To provide a machine or device with the energy it needs to work.", defTrans: "Alimentar (energia)", example: "The sun powers our city model.", audioFront: "TTS: Power", audioBack: "TTS: The sun powers our city model." },
                // --- Verbs (P-W) ---
                { term: "Produce", definition: "To make or manufacture from components or raw materials.", defTrans: "Produzir", example: "Trees produce the oxygen we breathe.", audioFront: "TTS: Produce", audioBack: "TTS: Trees produce the oxygen we breathe." },
                { term: "Promote", definition: "To encourage people to like, buy, use, do, or support something.", defTrans: "Promover", example: "Let's promote a zero-waste lifestyle.", audioFront: "TTS: Promote", audioBack: "TTS: Let's promote a zero-waste lifestyle." },
                { term: "Protect", definition: "To keep someone or something safe from harm, damage, or illness.", defTrans: "Proteger", example: "We must protect the local fauna.", audioFront: "TTS: Protect", audioBack: "TTS: We must protect the local fauna." },
                { term: "Provide", definition: "To make available for use; supply.", defTrans: "Fornecer", example: "AI provides personalized learning for students.", audioFront: "TTS: Provide", audioBack: "TTS: AI provides personalized learning for students." },
                { term: "Read", definition: "To look at and comprehend the meaning of written matter.", defTrans: "Ler", example: "A computer can read a book in seconds.", audioFront: "TTS: Read", audioBack: "TTS: A computer can read a book in seconds." },
                { term: "Reduce", definition: "To make smaller or less in amount, degree, or size.", defTrans: "Reduzir", example: "Automation will reduce the cost of production.", audioFront: "TTS: Reduce", audioBack: "TTS: Automation will reduce the cost of production." },
                { term: "Recycle", definition: "To collect and treat trash in order to produce useful materials.", defTrans: "Reciclar", example: "You can recycle paper and glass.", audioFront: "TTS: Recycle", audioBack: "TTS: You can recycle paper and glass." },
                { term: "Reform", definition: "To make an improvement, especially by changing the structure of something.", defTrans: "Reformar", example: "We need to reform the energy system.", audioFront: "TTS: Reform", audioBack: "TTS: We need to reform the energy system." },
                { term: "Regenerate", definition: "To grow again, or to make something grow again.", defTrans: "Regenerar", example: "The forest is starting to regenerate.", audioFront: "TTS: Regenerate", audioBack: "TTS: The forest is starting to regenerate." },
                { term: "Solve", definition: "To find an answer to a problem.", defTrans: "Resolver", example: "How can we solve the water crisis?", audioFront: "TTS: Solve", audioBack: "TTS: How can we solve the water crisis?" },
                { term: "Tackle", definition: "To try to deal with a difficult problem or situation.", defTrans: "Enfrentar / Lidar com", example: "It's time to tackle climate change.", audioFront: "TTS: Tackle", audioBack: "TTS: It's time to tackle climate change." },
                { term: "Transform", definition: "To change the form of something completely.", defTrans: "Transformar", example: "Waste is transformed into energy.", audioFront: "TTS: Transform", audioBack: "TTS: Waste is transformed into energy." },
                { term: "Use", definition: "To take, hold, or deploy something as a means of accomplishing a purpose.", defTrans: "Usar", example: "Everyone will use AI in the future.", audioFront: "TTS: Use", audioBack: "TTS: Everyone will use AI in the future." },
                { term: "Wonder", definition: "To ask yourself questions or express a wish to know about something.", defTrans: "Imaginar / Perguntar-se", example: "I wonder if we can save the ocean.", audioFront: "TTS: Wonder", audioBack: "TTS: I wonder if we can save the ocean." },
                { term: "Regulate", definition: "To control or maintain the rate or speed of a machine or process.", defTrans: "Regular / Controlar", example: "Laws must regulate tech advancements.", audioFront: "TTS: Regulate", audioBack: "TTS: Laws must regulate tech advancements." },
                { term: "Stop", definition: "To come to an end; cease to happen.", defTrans: "Parar", example: "We cannot stop the digital revolution.", audioFront: "TTS: Stop", audioBack: "TTS: We cannot stop the digital revolution." },
                
                // --- Vocabularies (Nouns & Concepts) ---
                { term: "Renewable energy", definition: "Energy that is produced using natural resources that will not run out.", defTrans: "Energia renovável", example: "Renewable energy is our best hope.", audioFront: "TTS: Renewable energy", audioBack: "TTS: Renewable energy is our best hope." },
                { term: "Sustainability", definition: "The quality of being able to continue over a period of time with little damage to the environment.", defTrans: "Sustentabilidade", example: "Our goal is global sustainability.", audioFront: "TTS: Sustainability", audioBack: "TTS: Our goal is global sustainability." },
                { term: "Solar power", definition: "Electricity used from the energy of the sun.", defTrans: "Energia solar", example: "Solar power is generated by panels.", audioFront: "TTS: Solar power", audioBack: "TTS: Solar power is generated by panels." },
                { term: "Wind power", definition: "Electricity produced by using the force of the wind.", defTrans: "Energia eólica", example: "Wind power uses giant turbines.", audioFront: "TTS: Wind power", audioBack: "TTS: Wind power uses giant turbines." },
                { term: "Hydropower", definition: "Production of electricity by the force of fast-moving water.", defTrans: "Energia hidrelétrica", example: "Hydropower comes from moving water.", audioFront: "TTS: Hydropower", audioBack: "TTS: Hydropower comes from moving water." },
                { term: "Geothermal energy", definition: "Energy that can be used from the heat inside the earth.", defTrans: "Energia geotérmica", example: "Geothermal energy uses heat from the earth.", audioFront: "TTS: Geothermal energy", audioBack: "TTS: Geothermal energy uses heat from the earth." },
                { term: "Biomass", definition: "Organic matter used as a fuel, especially in a power station.", defTrans: "Biomassa", example: "Biomass uses organic waste.", audioFront: "TTS: Biomass", audioBack: "TTS: Biomass uses organic waste." },
                { term: "Carbon footprint", definition: "The amount of carbon dioxide released into the atmosphere.", defTrans: "Pegada de carbono", example: "Try to reduce your carbon footprint.", audioFront: "TTS: Carbon footprint", audioBack: "TTS: Try to reduce your carbon footprint." },
                { term: "Greenhouse gas", definition: "A gas that causes the greenhouse effect, especially carbon dioxide.", defTrans: "Gás do efeito estufa", example: "CO2 is a common greenhouse gas.", audioFront: "TTS: Greenhouse gas", audioBack: "TTS: CO2 is a common greenhouse gas." },
                { term: "Climate change", definition: "A long-term change in the earth's climate.", defTrans: "Mudança climática", example: "Climate change affects the weather.", audioFront: "TTS: Climate change", audioBack: "TTS: Climate change affects the weather." },
                { term: "Environmental impact", definition: "The effect that the activities of people and businesses have on the environment.", defTrans: "Impacto ambiental", example: "Consider the environmental impact first.", audioFront: "TTS: Environmental impact", audioBack: "TTS: Consider the environmental impact first." },
                { term: "Conservation", definition: "The protection of plants and animals, natural areas, and interesting and important structures.", defTrans: "Conservação", example: "Water conservation is necessary.", audioFront: "TTS: Conservation", audioBack: "TTS: Water conservation is necessary." },
                { term: "Recycling", definition: "The process of collecting and changing old paper, glass, plastic, etc. so that it can be used again.", defTrans: "Reciclagem", example: "Recycling helps to reduce landfills.", audioFront: "TTS: Recycling", audioBack: "TTS: Recycling helps to reduce landfills." },
                { term: "Fossil fuel", definition: "Fuels, such as gas, coal, and oil, that were formed underground from dead plants or animals.", defTrans: "Combustível fóssil", example: "Coal is a dangerous fossil fuel.", audioFront: "TTS: Fossil fuel", audioBack: "TTS: Coal is a dangerous fossil fuel." },
                { term: "Petroleum", definition: "A dark, thick oil obtained from under the ground, used for making gasoline.", defTrans: "Petróleo", example: "Petroleum is used to make gasoline.", audioFront: "TTS: Petroleum", audioBack: "TTS: Petroleum is used to make gasoline." },
                { term: "Turbine", definition: "A large machine that uses the pressure of air, steam, or water to spin and generate power.", defTrans: "Turbina", example: "The turbine creates a lot of power.", audioFront: "TTS: Turbine", audioBack: "TTS: The turbine creates a lot of power." },
                { term: "Fauna", definition: "All the animals that live in a particular area, time, or environment.", defTrans: "Fauna", example: "Protect the fauna of the rainforest.", audioFront: "TTS: Fauna", audioBack: "TTS: Protect the fauna of the rainforest." },
                { term: "Flora", definition: "All the plants that live in a particular area, time, or environment.", defTrans: "Flora", example: "The flora here is very diverse.", audioFront: "TTS: Flora", audioBack: "TTS: The flora here is very diverse." },

                // --- Phrases & Expressions ---
                { term: "Is powered by", definition: "Used to indicate the energy source of a machine or system.", defTrans: "É alimentado por", example: "The light is powered by solar energy.", audioFront: "TTS: Is powered by", audioBack: "TTS: The light is powered by solar energy." },
                { term: "Is produced using", definition: "Used to describe the method of manufacturing.", defTrans: "É produzido usando", example: "This bag is produced using plastic waste.", audioFront: "TTS: Is produced using", audioBack: "TTS: This bag is produced using plastic waste." },
                { term: "Has to be implemented", definition: "Used to state a necessity or obligation for a plan.", defTrans: "Tem que ser implementado", example: "A new plan has to be implemented now.", audioFront: "TTS: Has to be implemented", audioBack: "TTS: A new plan has to be implemented now." },
                { term: "Must be taken", definition: "Used for mandatory actions or decisions.", defTrans: "Deve ser tomado", example: "Serious action must be taken.", audioFront: "TTS: Must be taken", audioBack: "TTS: Serious action must be taken." },
                { term: "It's generated through", definition: "Used to explain the source of energy/power.", defTrans: "É gerado através de", example: "Energy is generated through wind.", audioFront: "TTS: It's generated through", audioBack: "TTS: Energy is generated through wind." },
                { term: "It can be achieved by", definition: "Used to show the possibility of reaching a goal.", defTrans: "Pode ser alcançado por", example: "Change can be achieved by us.", audioFront: "TTS: It can be achieved by", audioBack: "TTS: Change can be achieved by us." },
                { term: "Is being seriously discussed", definition: "Used for ongoing current debates.", defTrans: "Está sendo seriamente discutido", example: "The law is being seriously discussed.", audioFront: "TTS: Is being seriously discussed", audioBack: "TTS: The law is being seriously discussed." },
                { term: "Has ever been tried", definition: "Used to ask about past experiences or experiments.", defTrans: "Já foi testado", example: "This method has never been tried here.", audioFront: "TTS: Has ever been tried", audioBack: "TTS: This method has never been tried here." },
                { term: "To solve problems", definition: "Phrase used to indicate the objective of an effort.", defTrans: "Para resolver problemas", example: "We use science to solve problems.", audioFront: "TTS: To solve problems", audioBack: "TTS: We use science to solve problems." },

                // --- Grammar Flashcards ---
                { term: "Present Simple Passive", definition: "am/is/are + Past Participle (Focus: receiver of action).", defTrans: "Voz Passiva Presente Simples", example: "The materials are recycled every month.", audioFront: "TTS: Present Simple Passive", audioBack: "TTS: The materials are recycled every month." },
                { term: "Past Simple Passive", definition: "was/were + Past Participle (Focus: action finalized in the past).", defTrans: "Voz Passiva Passado Simples", example: "The plan was implemented last year.", audioFront: "TTS: Past Simple Passive", audioBack: "TTS: The plan was implemented last year." },
                { term: "Future Simple Passive", definition: "will be + Past Participle (Focus: action to occur in the future).", defTrans: "Voz Passiva Futuro Simples", example: "More panels will be installed soon.", audioFront: "TTS: Future Simple Passive", audioBack: "TTS: More panels will be installed soon." },
                { term: "Present Continuous Passive", definition: "am/is/are + being + P.P. (Focus: action happening now).", defTrans: "Voz Passiva Presente Contínuo", example: "Habitats are being destroyed right now.", audioFront: "TTS: Present Continuous Passive", audioBack: "TTS: Habitats are being destroyed right now." },
                { term: "Past Continuous Passive", definition: "was/were + being + P.P. (Focus: action in progress in the past).", defTrans: "Voz Passiva Passado Contínuo", example: "Turbines were being built all year.", audioFront: "TTS: Past Continuous Passive", audioBack: "TTS: Turbines were being built all year." },
                { term: "Present Perfect Passive", definition: "have/has been + P.P. (Focus: action with present relevance).", defTrans: "Voz Passiva Presente Perfeito", example: "The system has been created.", audioFront: "TTS: Present Perfect Passive", audioBack: "TTS: The system has been created." },
                { term: "Past Perfect Passive", definition: "had been + P.P. (Focus: past of the past).", defTrans: "Voz Passiva Passado Perfeito", example: "The area had been explored before.", audioFront: "TTS: Past Perfect Passive", audioBack: "TTS: The area had been explored before." },
                { term: "Passive with Modals", definition: "modal + be + P.P. (Usage: obligation, ability, etc.).", defTrans: "Voz Passiva com Modais", example: "Climate change must be solved.", audioFront: "TTS: Passive with Modals", audioBack: "TTS: Climate change must be solved." },
                { term: "Linking Words - Cause", definition: "Due to, Because of, As a result of (Usage: explain the motive).", defTrans: "Conectivos - Causa", example: "It failed due to lack of energy.", audioFront: "TTS: Linking Words Cause", audioBack: "TTS: It failed due to lack of energy." },
                { term: "Linking Words - Consequence", definition: "Therefore, Consequently, So, etc. (Usage: explain the result).", defTrans: "Conectivos - Consequência", example: "We recycle; therefore, we save money.", audioFront: "TTS: Linking Words Consequence", audioBack: "TTS: We recycle; therefore, we save money." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (Complete & Paginated)
    // ======================================================
    glossary: [
        // --- TOPIC 1: CONTEXT (Step 1 Tooltips) ---
        { topic: "Context", term: "is powered by", definition: "Expression used to indicate the energy source of a machine or system.", translation: "É alimentado por" },
        { topic: "Context", term: "wind power", definition: "Electricity produced by using the force of the wind.", translation: "Energia eólica" },
        { topic: "Context", term: "turbine", definition: "A large machine that uses the pressure of air, steam, or water to spin and generate power.", translation: "Turbina" },
        { topic: "Context", term: "past simple passive", definition: "Grammar: The passive form of the Past Simple [was/were + P.P.], focusing on an action finalized in the past.", translation: "Voz Passiva Passado Simples" },
        { topic: "Context", term: "read", definition: "To look at and comprehend the meaning of written matter.", translation: "Ler" },
        { topic: "Context", term: "renewable energy", definition: "Energy that is produced using natural resources that will not run out.", translation: "Energia renovável" },
        { topic: "Context", term: "is being seriously discussed", definition: "Grammar: The passive form of the Present Continuous [am/is/are + being + P.P.], focusing on an action happening now.", translation: "Está sendo seriamente discutido" },
        { topic: "Context", term: "right now", definition: "At this exact moment.", translation: "Agora mesmo" },
        { topic: "Context", term: "due to", definition: "A linking phrase used to explain why something happened.", translation: "Devido a" },
        { topic: "Context", term: "environmental impact", definition: "The effect that the activities of people and businesses have on the environment.", translation: "Impacto ambiental" },
        { topic: "Context", term: "fossil fuel", definition: "Fuels, such as gas, coal, and oil, that were formed underground from dead plants or animals.", translation: "Combustível fóssil" },
        { topic: "Context", term: "must be abandoned", definition: "Grammar: Passive Voice with Modal [must + be + P.P.], stating a mandatory action.", translation: "Deve ser abandonado" },
        { topic: "Context", term: "because of", definition: "A linking word used to introduce a reason or cause.", translation: "Por causa de" },
        { topic: "Context", term: "greenhouse gas", definition: "A gas that causes the greenhouse effect, especially carbon dioxide.", translation: "Gás do efeito estufa" },
        { topic: "Context", term: "climate change", definition: "A long-term change in the earth's climate.", translation: "Mudança climática" },
        { topic: "Context", term: "has been accelerated", definition: "Grammar: The passive form of the Present Perfect [have/has been + P.P.], for an action with present relevance.", translation: "Foi acelerada" },
        { topic: "Context", term: "therefore", definition: "A formal linking word used to introduce the result of something.", translation: "Portanto" },
        { topic: "Context", term: "solution", definition: "An answer to a problem.", translation: "Solução" },
        { topic: "Context", term: "has to be implemented", definition: "Grammar: Passive Voice with Modal [has to be + P.P.], stating a necessity for a plan.", translation: "Tem que ser implementado" },
        { topic: "Context", term: "biomass", definition: "Organic matter used as a fuel, especially in a power station for the generation of electricity.", translation: "Biomassa" },
        { topic: "Context", term: "is produced using", definition: "Expression used to describe the method of manufacturing.", translation: "É produzido usando" },
        { topic: "Context", term: "waste", definition: "Materials that are not needed and are thrown away.", translation: "Desperdício / Lixo" },
        { topic: "Context", term: "wonder", definition: "To ask yourself questions or express a wish to know about something.", translation: "Imaginar / Perguntar-se" },
        { topic: "Context", term: "can be achieved by", definition: "Expression used to show the possibility of reaching a goal.", translation: "Pode ser alcançado por" },
        { topic: "Context", term: "as a result", definition: "A linking phrase used to introduce the consequence of a previous action.", translation: "Como resultado" },
        { topic: "Context", term: "recycling", definition: "The process of collecting and changing old paper, glass, plastic, etc. so that it can be used again.", translation: "Reciclagem" },
        { topic: "Context", term: "conservation", definition: "The protection of plants and animals, natural areas, and interesting and important structures.", translation: "Conservação" },
        { topic: "Context", term: "reduce", definition: "To make smaller or less in amount, degree, or size.", translation: "Reduzir" },
        { topic: "Context", term: "carbon footprint", definition: "The amount of carbon dioxide released into the atmosphere as a result of the activities of a particular individual or group.", translation: "Pegada de carbono" },
        { topic: "Context", term: "fauna", definition: "All the animals that live in a particular area, time, or environment.", translation: "Fauna" },
        { topic: "Context", term: "flora", definition: "All the plants that live in a particular area, time, or environment.", translation: "Flora" },
        { topic: "Context", term: "were installed", definition: "Grammar: The passive form of the Past Simple [was/were + P.P.], focusing on an action finalized in the past.", translation: "Foram instalados"},
        { topic: "Context", term: "will be protected", definition: "Grammar: The passive form of the Future Simple [will be + P.P.], stating an action to occur in the future.", translation: "Será protegido" },
        { topic: "Context", term: "oil", definition: "A thick, black, flammable liquid used as a fuel (Petroleum).", translation: "Petróleo / Óleo"},
        { topic: "Context", term: "act", definition: "To take action or do something for a particular purpose or in response to a situation.", translation: "Agir" },
        { topic: "Context", term: "dive in", definition: "To start doing something suddenly and with a lot of energy.", translation: "Mergulhar (entrar de cabeça)" },
        { topic: "Context", term: "expert", definition: "A person who has a comprehensive and authoritative knowledge of or skill in a particular area.", translation: "Especialista" },
        { topic: "Context", term: "works", definition: "To operate or proceed successfully.", translation: "Funciona" },
        
        // --- TOPIC 2: VERBS (A-L) ---
        { topic: "Verbs (A-L)", term: "Abandon", definition: "To stop doing something or using something completely.", translation: "Abandonar" },
        { topic: "Verbs (A-L)", term: "Achieve", definition: "To successfully finish or reach a goal through effort or skill.", translation: "Alcançar / Atingir" },
        { topic: "Verbs (A-L)", term: "Act", definition: "To take action or do something for a particular purpose.", translation: "Agir" },
        { topic: "Verbs (A-L)", term: "Build", definition: "To make something by putting parts together.", translation: "Construir" },
        { topic: "Verbs (A-L)", term: "Cancel", definition: "To decide that a planned event will not take place.", translation: "Cancelar" },
        { topic: "Verbs (A-L)", term: "Change", definition: "To make or become different over time.", translation: "Mudar" },
        { topic: "Verbs (A-L)", term: "Continue", definition: "To keep happening or existing without stopping.", translation: "Continuar" },
        { topic: "Verbs (A-L)", term: "Create", definition: "To make something new or invent something.", translation: "Criar" },
        { topic: "Verbs (A-L)", term: "Defend", definition: "To protect someone or something from attack or harm.", translation: "Defender" },
        { topic: "Verbs (A-L)", term: "Destroy", definition: "To damage something so badly that it cannot be used or no longer exists.", translation: "Destruir" },
        { topic: "Verbs (A-L)", term: "Develop", definition: "To invent something or bring something new into existence.", translation: "Desenvolver" },
        { topic: "Verbs (A-L)", term: "Diminish", definition: "To reduce or be reduced in size or importance.", translation: "Diminuir" },
        { topic: "Verbs (A-L)", term: "Discuss", definition: "To talk about a subject with someone and tell each other your ideas or opinions.", translation: "Discutir" },
        { topic: "Verbs (A-L)", term: "Dive in", definition: "To start doing something suddenly and with a lot of energy.", translation: "Mergulhar (entrar de cabeça)" },
        { topic: "Verbs (A-L)", term: "Explore", definition: "To search and discover about something or a place.", translation: "Explorar" },
        { topic: "Verbs (A-L)", term: "Generate", definition: "To produce energy or create a specific result.", translation: "Gerar" },
        { topic: "Verbs (A-L)", term: "Implement", definition: "To start using a plan or system.", translation: "Implementar" },
        { topic: "Verbs (A-L)", term: "Impact", definition: "To have a strong effect or influence on a situation.", translation: "Impactar" },
        { topic: "Verbs (A-L)", term: "Improve", definition: "To make something better than before.", translation: "Melhorar" },
        { topic: "Verbs (A-L)", term: "Increase", definition: "To become or make something larger in amount or size.", translation: "Aumentar" },
        { topic: "Verbs (A-L)", term: "Install", definition: "To put a piece of equipment in place so that it is ready to use.", translation: "Instalar" },
        { topic: "Verbs (A-L)", term: "Investigate", definition: "To examine a problem, or statement carefully.", translation: "Investigar" },
        
        // --- TOPIC 3: VERBS (M-W) ---
        { topic: "Verbs (M-W)", term: "Pollute", definition: "To make land, water, or air dirty and not safe to use.", translation: "Poluir" },
        { topic: "Verbs (M-W)", term: "Power", definition: "To provide a machine or device with the energy it needs to work.", translation: "Alimentar (energia)" },
        { topic: "Verbs (M-W)", term: "Produce", definition: "To make or manufacture from components or raw materials.", translation: "Produzir" },
        { topic: "Verbs (M-W)", term: "Promote", definition: "To encourage people to like, buy, use, do, or support something.", translation: "Promover" },
        { topic: "Verbs (M-W)", term: "Protect", definition: "To keep someone or something safe from harm, damage, or illness.", translation: "Proteger" },
        { topic: "Verbs (M-W)", term: "Provide", definition: "To make available for use; supply.", translation: "Fornecer" },
        { topic: "Verbs (M-W)", term: "Read", definition: "To look at and comprehend the meaning of written matter.", translation: "Ler" },
        { topic: "Verbs (M-W)", term: "Reduce", definition: "To make smaller or less in amount, degree, or size.", translation: "Reduzir" },
        { topic: "Verbs (M-W)", term: "Recycle", definition: "To collect and treat trash in order to produce useful materials.", translation: "Reciclar" },
        { topic: "Verbs (M-W)", term: "Reform", definition: "To make an improvement, especially by changing the structure of something.", translation: "Reformar" },
        { topic: "Verbs (M-W)", term: "Regenerate", definition: "To grow again, or to make something grow again.", translation: "Regenerar" },
        { topic: "Verbs (M-W)", term: "Solve", definition: "To find an answer to a problem.", translation: "Resolver" },
        { topic: "Verbs (M-W)", term: "Tackle", definition: "To try to deal with a difficult problem or situation.", translation: "Enfrentar / Lidar com" },
        { topic: "Verbs (M-W)", term: "Transform", definition: "To change the form of something completely.", translation: "Transformar" },
        { topic: "Verbs (M-W)", term: "Wonder", definition: "To ask yourself questions or express a wish to know about something.", translation: "Imaginar / Perguntar-se" },
        { topic: "Verbs (M-W)", term: "Regulate", definition: "To control or maintain the rate or speed of a machine or process.", translation: "Regular / Controlar" },
        { topic: "Verbs (M-W)", term: "Stop", definition: "To come to an end; cease to happen.", translation: "Parar" },
        // --- TOPIC 4: SCIENTIFIC NOUNS & CONCEPTS ---
        { topic: "Nouns & Concepts", term: "Renewable energy", definition: "Energy that is produced using natural resources that will not run out.", translation: "Energia renovável" },
        { topic: "Nouns & Concepts", term: "Sustainability", definition: "The quality of being able to continue over a period of time with little damage to the environment.", translation: "Sustentabilidade" },
        { topic: "Nouns & Concepts", term: "Solar power", definition: "Electricity used from the energy of the sun.", translation: "Energia solar" },
        { topic: "Nouns & Concepts", term: "Hydropower", definition: "Production of electricity by the force of fast-moving water.", translation: "Energia hidrelétrica" },
        { topic: "Nouns & Concepts", term: "Geothermal energy", definition: "Energy that can be used from the heat inside the earth.", translation: "Energia geotérmica" },
        { topic: "Nouns & Concepts", term: "Biomass", definition: "Organic matter used as a fuel, especially in a power station for the generation of electricity.", translation: "Biomassa" },
        { topic: "Nouns & Concepts", term: "Carbon footprint", definition: "The amount of carbon dioxide released into the atmosphere as a result of the activities of a particular individual or group.", translation: "Pegada de carbono" },
        { topic: "Nouns & Concepts", term: "Greenhouse gas", definition: "A gas that causes the greenhouse effect, especially carbon dioxide.", translation: "Gás do efeito estufa" },
        { topic: "Nouns & Concepts", term: "Climate change", definition: "A long-term change in the earth's climate.", translation: "Mudança climática" },
        { topic: "Nouns & Concepts", term: "Environmental impact", definition: "The effect that the activities of people and businesses have on the environment.", translation: "Impacto ambiental" },
        { topic: "Nouns & Concepts", term: "Conservation", definition: "The protection of plants and animals, natural areas, and interesting and important structures.", translation: "Conservação" },
        { topic: "Nouns & Concepts", term: "Recycling", definition: "The process of collecting and changing old paper, glass, plastic, etc. so that it can be used again.", translation: "Reciclagem" },
        { topic: "Nouns & Concepts", term: "Fossil fuel", definition: "Fuels, such as gas, coal, and oil, that were formed underground from dead plants or animals.", translation: "Combustível fóssil" },
        { topic: "Nouns & Concepts", term: "Petroleum", definition: "A dark, thick oil obtained from under the ground, used for making gasoline.", translation: "Petróleo" },
        { topic: "Nouns & Concepts", term: "Turbine", definition: "A large machine that uses the pressure of air, steam, or water to spin and generate power.", translation: "Turbina" },
        { topic: "Nouns & Concepts", term: "Fauna", definition: "All the animals that live in a particular area, time, or environment.", translation: "Fauna" },
        { topic: "Nouns & Concepts", term: "Flora", definition: "All the plants that live in a particular area, time, or environment.", translation: "Flora" },

        // --- TOPIC 5: PHRASES & EXPRESSIONS ---
        { topic: "Phrases & Expressions", term: "It's generated through", definition: "Phrase used to explain the source of energy/power.", translation: "É gerado através de" },
        { topic: "Phrases & Expressions", term: "It can be achieved by", definition: "Phrase used to show the possibility of reaching a goal.", translation: "Pode ser alcançado por" },
        { topic: "Phrases & Expressions", term: "Is being seriously discussed", definition: "Expression used for ongoing current debates.", translation: "Está sendo seriamente discutido" },
        { topic: "Phrases & Expressions", term: "Has ever been tried", definition: "Expression used to ask about past experiences or experiments.", translation: "Já foi testado" },
        { topic: "Phrases & Expressions", term: "To solve problems", definition: "Phrase used to indicate the objective of an effort.", translation: "Para resolver problemas" },
        { topic: "Phrases & Expressions", term: "Has rapidly increased", definition: "Phrase used to describe a fast growth in numbers or intensity.", translation: "Aumentou rapidamente" },
        { topic: "Phrases & Expressions", term: "In fact", definition: "Used to add emphasis or more information to a statement.", translation: "Na verdade" },
        
        // --- TOPIC 6: GRAMMAR & LINKS ---
        { topic: "Grammar & Links", term: "Passive Voice", definition: "A grammar structure where the object of an action becomes the subject of the sentence.", translation: "Voz Passiva" },
        { topic: "Grammar & Links", term: "Due to", definition: "A linking phrase used to explain why something happened.", translation: "Devido a" },
        { topic: "Grammar & Links", term: "Because of", definition: "A linking word used to introduce a reason or cause.", translation: "Por causa de" },
        { topic: "Grammar & Links", term: "As a result of", definition: "A linking phrase used to explain the cause of something.", translation: "Como resultado de" },
        { topic: "Grammar & Links", term: "Therefore", definition: "A formal linking word used to introduce the result of something.", translation: "Portanto" },
        { topic: "Grammar & Links", term: "As a consequence", definition: "A linking phrase used to introduce the result of an action.", translation: "Como consequência" },
        { topic: "Grammar & Links", term: "So", definition: "A linking word used to show a consequence.", translation: "Então / Assim" },
        { topic: "Grammar & Links", term: "For this reason", definition: "A linking phrase used to connect a cause to its logical result.", translation: "Por esta razão" }
    ]
});