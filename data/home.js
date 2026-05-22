/**
 * REACH English - HOME DASHBOARD DATA
 * location: data/home.js
 */

// ====================================================================================
// 1. HELPER FUNCTIONS (These do all the hard work automatically!)
// ====================================================================================

const formatChap = (topics, vocab, grammar) => `
    <h4 style="color:var(--primary-blue)">Lessons' Main Topics:</h4>
    <p>${topics}</p>
    
    <h4 style="color:var(--primary-blue); margin-top:15px;">Vocabulary Groups:</h4>
    <ul style="margin-left: 20px; line-height: 1.4;">
        ${vocab.map(v => `<li>${v}</li>`).join('')}
    </ul>
    
    <h4 style="color:var(--primary-blue); margin-top:15px;">Grammar Point Names:</h4>
    <ul style="margin-left: 20px; line-height: 1.4;">
        ${grammar.map(g => `<li>${g}</li>`).join('')}
    </ul>
`;

const parseIndexList = (rawText) => {
    let html = '<ul style="margin-left: 20px; line-height: 2;">';
    const lines = rawText.trim().split('\n');
    
    lines.forEach(line => {
        line = line.trim();
        if (!line) return;
        
        // If it's a category header (no dashes inside)
        if (!line.includes(' - ')) {
            html += `</ul><h4 style="color:var(--primary-blue); margin-top:20px;">${line}</h4><ul style="margin-left: 20px; line-height: 2;">`;
            return;
        }
        
        // Split text from references
        const lastDash = line.lastIndexOf(' - ');
        const term = line.substring(0, lastDash).replace(/^●\s*/, '').trim();
        const refsString = line.substring(lastDash + 3).trim();
        
        const refs = refsString.split(',').map(r => r.trim());
        const linksHtml = refs.map(ref => {
            const match = ref.match(/^(6th|7th|8th|9th|EM1|EM2)C(\d+)/i);
            if (!match) return `<span style="color:#888;">[${ref}]</span>`; 
            
            const rawGrade = match[1].toLowerCase();
            const chapter = parseInt(match[2], 10);
            
            let gradeId, gradeLabel, bimester;
            if (['6th','7th','8th','9th'].includes(rawGrade)) {
                gradeId = rawGrade.replace('th', '');
                gradeLabel = rawGrade === '6th' ? '6th Grade' : 
                             rawGrade === '7th' ? '7th Grade' : 
                             rawGrade === '8th' ? '8th Grade' : '9th Grade';
                bimester = Math.ceil(chapter / 2);
            } else {
                gradeId = rawGrade; // 'em1' or 'em2'
                gradeLabel = rawGrade === 'em1' ? 'EM 1st' : 'EM 2nd';
                bimester = Math.ceil(chapter / 3);
            }
            
            return `<a href="index.html?lesson=${gradeId}-${bimester}-${chapter}" class="summary-link" title="Go to ${gradeLabel}, Chapter ${chapter}">[${gradeLabel}, Ch ${chapter}]</a>`;
        }).join(' ');
        
        html += `<li><b>${term}</b> ${linksHtml}</li>`;
    });
    
    html += '</ul>';
    // Clean up empty lists created at the beginning
    html = html.replace(/<ul style="margin-left: 20px; line-height: 2;">\s*<\/ul>/g, '');
    return html;
};


// ====================================================================================
// 2. RAW TEXT LISTS (Just plain text! Easy to edit later.)
// ====================================================================================

const RAW_TOPICS = `
Identity, Daily Life, and Personal Growth
● Global Children & Introductions - 6thC1-A1
● Family & Friends - 6thC2-A1
● Personal Info & Hobbies - 6thC5-A1
● Daily Routine - 6thC6-A1
● Feelings & Body Language - 8thC7-B1
● Overcoming Difficulties & Biographies - 7thC6-A2
● Overcoming Adversity - EM1C10-B1/B2
● Types of Intelligence - EM1C9-B1
● Life Purpose & Generations - EM2C12-B1/B2

Social Life, Ethics, and Culture
● Bullying - 8thC2-A2
● Culture & Gestures - 8thC8-B1
● Travel & Culture - 7thC5-A1
● Global Diversity & Empathy - EM1C8-B1
● Gossip & Fake News - 9thC4-B1

Environment, Cities, and Sustainability
● Homes & Houses - 6thC3-A1
● City & Directions - 6thC8-A1
● Environment & Conservation - 6thC7-A1
● Environmental Action - 8thC3-A2
● Green Planet - 9thC8-B1
● Sustainable Cities - EM1C4-A2/B1
● Sustainable Development Goals - EM1C5-B1
● Clean Energy - EM2C3-B1/B2
● Water Conservation - EM2C9-B1/B2
● Plastics & 3D Printing - EM2C10-B1/B2

Science, Technology, Media, and History
● Online Life & Social Media - 7thC2-A1
● Internet Generation - 8thC5-B1
● Social Media & Internet Culture - EM1C7-B1
● Technology & Lifestyle - 8thC6-B1
● Inventions & Inventors - 9thC1-B1
● Genetics & Science - EM2C7-B1/B2
● DNA & Evolution - EM2C1-B1/B2
● AI & Robotics - EM2C2-B1/B2
● Mathematics in Life - EM2C11-B1/B2
● Globalization & Change - EM2C5-B1/B2
● Crises & Resilience - EM2C6-B1/B2
● 20th Century Transformations - EM2C8-B1/B2

Entertainment, Arts, Lifestyle, and Consumerism
● Holidays - 6thC4-A1
● Movies - 7thC4-A1
● Power of Music - EM1C6-B1
● Photography - EM2C4-B1/B2
● Talents & Skills - 7thC1-A1
● Sports & Olympics - 7thC7-A2
● Fitness & Health - EM1C11-B1/B2
● Food & Nutrition - 7thC8-A2
● Eating Out - 8thC4-A2
● Shopping - 8thC1-A2
● Smart Shopping - 9thC7-B1
● Conscious Consumerism - EM1C12-B1/B2
● Advertising & Campaigns - 9thC5-B1
● Vacations - 7thC3-A1
● Journeys & Wishes - 9thC2-B1
● Career & Professions - 9thC3-B1
● Mysteries & Enigmas - 9thC6-B1

Language and Learning
● Global English - EM1C1-A2/B1
● Language Learning - EM1C2-A2/B1
● Creativity & Innovation - EM1C3-A2/B1
`;

const RAW_VOCAB = `
People, Identity, and Personal Growth
● Introductions and first meetings - 6thC1-A1
● Family members - 6thC2-A1
● Professions - 6thC2-A1
● Jobs and Professions - 9thC3-B1
● Career and Work - 9thC3-B1
● Life Purpose and Vocation - EM2C12-B1/B2
● Skill and Personal Development - EM2C12-B1/B2
● Generations and Society - EM2C12-B1/B2
● Generations gap (Gen Z and Alpha x Millennials) - 8thC5-B1
● Nations and Nationalities - 6thC1-A1
● Elements of a Country - 8thC8-B1
● Culture and Traditions - 8thC8-B1
● Cultural customs - 7thC5-A1
● Gestures - 8thC8-B1
● Empathy descriptors - EM1C8-B1
● Diversity - Prejudice x Respect - EM1C8-B1
● Identity and Society - EM1C8-B1
● Migration and Refugees - 9thC2-B1
● Problems living abroad - 9thC2-B1

Daily Life, Time, and Routines
● Habits and Routines - 6thC6-A1, 8thC2-A2
● Habits for learning - EM1C2-A2/B1
● Time - 6thC6-A1
● Time expressions (Future) - 8thC2-A2
● Time expressions (past) - 7thC5-A1, 9thC1-B1
● Dates - 6thC4-A1
● Days of the week - 6thC6-A1, 8thC2-A2
● Months of the year - 6thC4-A1
● Holidays - 6thC4-A1
● Festivals and Events - 7thC5-A1

Home, City, and Travel
● Types of home - buildings' names - 6thC3-A1
● Rooms of the house - 6thC3-A1
● Parts of a house - 6thC3-A1
● Bedroom Objects - 6thC3-A1
● City and Infrastructure - EM1C4-A2/B1
● City problems, solutions, and sustainable urban living - EM1C4-A2/B1
● Places in the city - 6thC8-A1
● Places at the mall - 8thC1-A2
● Places to eat out - 8thC4-A2
● Places on a trip - 7thC5-A1
● Asking and giving directions - 6thC8-A1
● Means of transportation - 6thC8-A1
● Travel vocabulary - 7thC3-A1, 7thC5-A1
● Opportunities - 9thC2-B1

Shopping, Food, and Consumerism
● Shopping and Commerce - 9thC7-B1
● Shopping vocabulary - 8thC1-A2
● Expressions about Shopping - 9thC7-B1
● Items, Products, Goods - 9thC7-B1
● Business and Economy - EM1C12-B1/B2
● Food vocabulary - 7thC8-A2
● Foods, drinks, and desserts - 8thC4-A2
● Types of meat - 8thC4-A2
● Menu words - 8thC4-A2
● Ordering and Paying - 8thC4-A2
● Diets - 7thC8-A2
● American x British - 7thC8-A2
● Clothing - 8thC1-A2
● Accessories - 8thC1-A2
● Gadgets - 8thC1-A2

Health, Body, and Mind
● Parts of the body - 6thC5-A1
● Health and Body - 7thC8-A2
● Physical Health and Exercising - EM1C11-B1/B2
● Fitness - EM1C11-B1/B2
● Mental health and Well-being - EM1C11-B1/B2
● Intelligence and Cognition - EM1C9-B1
● Types of Intelligence - EM1C9-B1
● Learning and Education - EM1C9-B1
● Learning and School - EM1C2-A2/B1
● Emotions and feelings / Feelings and Emotions - 7thC6-A2, 8thC2-A2, 8thC7-B1, EM1C6-B1
● Expressions when you don’t understand - 8thC7-B1
● Disagreeing - 8thC7-B1
● Agreeing and Disagreeing - EM1C6-B1
● Opinion - EM1C6-B1
● Life and Challenge vocabulary - 7thC6-A2
● Challenges and Adversity - EM1C10-B1/B2
● Crisis / Crisis and Hardship - EM2C5-B1/B2, EM2C6-B1/B2
● Economy, Finances, and Financial Crises - EM2C6-B1/B2
● Optimism and Resilience - EM2C6-B1/B2

Nature, Environment, and Sustainability
● Environment and Pollution - EM2C10-B1/B2
● Environmental Problems / Environmental Problems and Solutions - 8thC3-A2, 9thC8-B1
● Green vocabulary - 6thC7-A1
● Green technology - 9thC8-B1
● Sustainability - 9thC8-B1, EM1C5-B1
● Sustainability and Environment / Sustainability and the Environment - EM1C12-B1/B2, EM2C3-B1/B2
● 17 Global Goals - EM1C5-B1
● Water - use, conservation, and problems - EM2C9-B1/B2
● Types of Plastic and their uses - EM2C10-B1/B2
● Verbs for environmental topics - 6thC7-A1
● Waste vocabulary - 8thC3-A2
● Idioms about Nature - 9thC8-B1
● Energy and Power - EM2C3-B1/B2

Science, Technology, and History
● Science and Research - EM2C1-B1/B2
● Science and Space - EM2C11-B1/B2
● Science and Technology - EM1C3-A2/B1, EM2C7-B1/B2
● Evolution and Biology - EM2C1-B1/B2
● Genetics and Extinction - EM2C7-B1/B2
● Ethics and Debate - EM2C7-B1/B2
● AI and Technology - EM2C2-B1/B2
● Technology - 7thC2-A1, 8thC5-B1, EM2C5-B1/B2
● Technology and Invention - 9thC1-B1
● Technology vocabulary - 8thC6-B1
● Development and Technological advances - EM2C2-B1/B2
● The 3 Laws of Robotics - EM2C2-B1/B2
● Inventions of the 20th century - 9thC1-B1
● Inventions, Science, and Technology - EM2C8-B1/B2
● Mathematics and Geometry - EM2C11-B1/B2
● Changes and Development - EM2C5-B1/B2
● History and Changes - EM2C8-B1/B2
● Quality of life x Hindrance - 8thC6-B1
● Globalization and the World - EM2C5-B1/B2
● Global activism - EM1C5-B1

Media, Arts, and Entertainment
● Hobbies / Hobbies and Interests - 6thC5-A1, 7thC1-A1
● Movie Genre - 7thC4-A1
● Movie vocabulary - 7thC4-A1
● Music genres - EM1C6-B1
● Music vocabulary - EM1C6-B1
● Musical instruments - 7thC1-A1
● Art and Animation - EM2C11-B1/B2
● Social Media - 7thC2-A1, 8thC5-B1, EM2C4-B1/B2
● Social Media and internet culture - EM1C7-B1
● Social Media Issues - EM1C7-B1
● Apps - 8thC5-B1
● Cyberbullying - 8thC2-A2
● Information and Media - 9thC4-B1
● Gossiping, rumors, and fake news - 9thC4-B1
● Advertising and Marketing - 9thC5-B1
● Campaigns - 9thC5-B1
● the Olympics - 7thC7-A2
● Sports - 7thC1-A1, 7thC7-A2
● Mysterious places and beings - 9thC6-B1
● Investigation and Clues - 9thC6-B1
● Supernatural and Unknown Phenomena - 9thC6-B1
● Expressions connected to fear, mystery, or death - 9thC6-B1

Language Elements & Grammar Vocabulary
● Adjectives (ending in -ED and -ING) - 8thC7-B1
● Adjectives (for movies) - 7thC4-A1
● Adjectives (gadgets and goods) - 8thC1-A2
● Adjectives (people at work) - 9thC3-B1
● Adjectives (physical description) - 6thC5-A1
● Adjectives (Temperament) - 9thC3-B1
● Adverbs (Frequency) - EM1C2-A2/B1
● Adverbs of time (for present continuous) - EM1C2-A2/B1
● Collocations with "MAKE" - 8thC8-B1
● False cognates (English and Portuguese) - EM1C3-A2/B1, EM1C8-B1
● Idioms and expressions (inventions and discoveries) - 9thC1-B1
● Irregular Plurals - EM1C7-B1
● Irregular verbs - 7thC4-A1, 8thC5-B1, 9thC1-B1
● Languages / Languages and Communication - 7thC1-A1, EM1C1-A2/B1
● Numbers (1 to 100) - 6thC1-A1
● Object pronouns - EM1C1-A2/B1
● Subject pronouns - 6thC1-A1, EM1C1-A2/B1
● Possessive adjectives - EM1C1-A2/B1
● Possessive pronouns - EM1C1-A2/B1
● Question Words - 6thC1-A1
● Wh-words with ever - EM1C1-A2/B1
● Reflexive pronouns - EM1C1-A2/B1
● Relative Pronouns - EM1C6-B1, EM2C6-B1/B2
● Reporting Verbs - 9thC4-B1
● Internet Abbreviations - 8thC5-B1
● Internet Slang - 7thC2-A1
● Internet vocabularies - 8thC5-B1
● Polysemy - 7thC2-A1
● Popular websites and apps - 7thC2-A1
● Phrasal Verbs (BREAK) - EM1C8-B1, EM2C7-B1/B2
● Phrasal Verbs (BRING) - EM1C12-B1/B2, EM2C8-B1/B2
● Phrasal Verbs (CALL) - EM1C10-B1/B2, EM2C10-B1/B2
● Phrasal Verbs (CARRY) - EM1C10-B1/B2, EM2C7-B1/B2
● Phrasal Verbs (COME) - EM2C8-B1/B2
● Phrasal Verbs (GET) - 9thC6-B1, EM1C7-B1, EM2C10-B1/B2
● Phrasal Verbs (GIVE) - EM1C12-B1/B2, EM2C9-B1/B2
● Phrasal Verbs (LOOK) - 9thC6-B1, EM1C12-B1/B2, EM2C9-B1/B2
● Phrasal Verbs (MAKE) - EM1C8-B1, EM2C11-B1/B2
● Phrasal Verbs (PUT) - 9thC6-B1, EM1C4-A2/B1, EM2C11-B1/B2
● Phrasal Verbs (RUN) - EM1C4-A2/B1
● Phrasal Verbs (TAKE) - 9thC6-B1, EM2C12-B1/B2
● Phrasal Verbs (TURN) - 9thC6-B1, EM1C9-B1
`;

const RAW_GRAMMAR = `
Verb Tenses & Aspects
● To be (present) - 6thC1-A1, 6thC5-A1
● TO BE (Past) - 7thC3-A1, 7thC4-A1
● Simple Present Tense (or Present Simple Tense / Simple Present) - 6thC5-A1, 6thC6-A1, 7thC2-A1, 8thC2-A2, EM1C2-A2/B1, EM1C4-A2/B1, EM1C5-B1, EM1C12-B1/B2
● Present Continuous - 6thC7-A1, 7thC2-A1, 8thC2-A2, EM1C2-A2/B1, EM1C4-A2/B1, EM1C12-B1/B2
● Verbs not common in Present Continuous - 6thC7-A1
● Verbs not used with Continuous Tenses - State Verbs - EM1C5-B1
● Simple Past Tense - 7thC4-A1, 7thC5-A1, 7thC6-A2, 7thC7-A2, 8thC7-B1, 9thC1-B1, EM1C3-A2/B1, EM1C5-B1, EM1C12-B1/B2
● Regular Verbs in the Past - rules - 7thC4-A1
● Past Continuous - 7thC6-A2, 7thC7-A2, 8thC7-B1, EM1C3-A2/B1, EM1C12-B1/B2
● Present Perfect - 8thC5-B1, 8thC6-B1, 8thC7-B1, 9thC1-B1, EM1C5-B1, EM1C12-B1/B2, EM2C1-B1/B2
● Have Been x Have Gone - 8thC5-B1
● Present Perfect Continuous - 9thC1-B1, EM1C5-B1, EM1C12-B1/B2
● Simple Past x Present Perfect - 8thC7-B1, 9thC1-B1, EM1C5-B1
● Past Perfect - 9thC1-B1, EM1C6-B1, EM1C12-B1/B2, EM2C1-B1/B2
● Simple Past x Past Perfect - 9thC1-B1
● Simple Future (BE GOING TO) - 8thC2-A2, 8thC3-A2, EM1C4-A2/B1
● Simple Future (WILL) - 8thC3-A2, EM1C4-A2/B1, EM1C12-B1/B2
● Simple Future (WILL x BE GOING TO) - EM1C4-A2/B1
● Future Differences - EM1C4-A2/B1
● Future Continuous - EM1C12-B1/B2
● Future Perfect - EM1C12-B1/B2, EM2C1-B1/B2
● Conditional - EM1C12-B1/B2
● Conditional Perfect - EM2C1-B1/B2
● Past Habits - Used to - 8thC8-B1, EM1C3-A2/B1
● Verb patterns: VERB + Infinitive (to + verb) - 9thC8-B1, EM1C11-B1/B2
● Verb patterns: VERB + Gerund (-ing) - 9thC8-B1, EM1C11-B1/B2
● Verb patterns: Gerund (-ing) vs. Infinitive (to + verb) (or Infinitive x Gerund) - 9thC8-B1, EM1C11-B1/B2, EM2C7-B1/B2
● Verb Patterns - Verb + Object + Infinitive - EM2C7-B1/B2
● Verb Patterns - Verb + Object + Infinitive (without TO) - EM2C7-B1/B2
● GERUND - 6thC7-A1
● Irregular Verbs - 8thC8-B1

Modal Verbs
● Modal CAN - 7thC1-A1, 7thC7-A2, 9thC3-B1, EM1C4-A2/B1, EM2C11-B1/B2, EM2C12-B1/B2
● Modal COULD - 7thC7-A2, 9thC3-B1, EM1C4-A2/B1, EM2C11-B1/B2, EM2C12-B1/B2
● Modal MAY and MIGHT (or Modal MAY / Modal MIGHT) - 9thC3-B1, EM1C4-A2/B1, EM2C11-B1/B2, EM2C12-B1/B2
● Modal MUST - 9thC2-B1, 9thC3-B1, EM1C4-A2/B1, EM2C9-B1/B2, EM2C11-B1/B2, EM2C12-B1/B2
● Modal SHOULD - 9thC3-B1, EM1C4-A2/B1, EM2C9-B1/B2
● Modal SHALL - EM1C4-A2/B1
● Modal WOULD - EM1C4-A2/B1
● Modals for Ability - 7thC1-A1, 7thC7-A2, EM1C4-A2/B1, EM2C12-B1/B2
● Modals for Request(s) - 7thC1-A1, EM2C12-B1/B2
● Modals for Possibility - 9thC3-B1, EM1C4-A2/B1, EM2C11-B1/B2
● Modals for Advice - 9thC3-B1, EM1C4-A2/B1, EM2C9-B1/B2
● Modals for Obligation - EM1C4-A2/B1, EM2C9-B1/B2
● Modals for Necessity - EM1C4-A2/B1, EM2C9-B1/B2
● Modals for Deduction - EM2C11-B1/B2
● Modals for Permission - EM2C12-B1/B2
● Modals for Prohibition - EM2C12-B1/B2
● HAVE TO - 9thC2-B1, EM2C9-B1/B2
● NEED - EM2C9-B1/B2
● OUGHT TO - 9thC3-B1, EM2C9-B1/B2
● WOULD RATHER - EM1C4-A2/B1
● HAD BETTER - EM1C4-A2/B1, EM2C9-B1/B2
● BE ABLE TO - EM2C12-B1/B2
● Semi-modals (dare, need, used to, ought to) - EM1C4-A2/B1
● Present, Past, Future for Modals - EM2C11-B1/B2

Nouns, Pronouns, and Articles
● Subject pronouns - 7thC8-A2, EM1C1-A2/B1
● Object pronouns - 7thC8-A2, EM1C1-A2/B1
● Pronouns (Subject x Object) - 7thC8-A2
● Possessive Pronouns - 6thC4-A1, 7thC3-A1, 7thC8-A2, EM1C1-A2/B1
● Possessive Adjectives - 6thC2-A1, 6thC4-A1, 7thC3-A1, 7thC8-A2, EM1C1-A2/B1
● Possessive (Adjectives x Pronouns / Adjective x Pronoun) - 6thC4-A1, 7thC8-A2, EM1C1-A2/B1
● Pronouns and Possessive systems (Subject, Object, Possessive, Reflexive) - EM1C1-A2/B1
● Reflexive Pronouns - 9thC5-B1, EM1C1-A2/B1
● Pronouns (Subject x Object x Reflexive) - EM1C1-A2/B1
● Demonstrative pronouns - 6thC2-A1
● Relative pronouns - 8thC3-A2
● Relative Clauses - EM1C6-B1, EM2C6-B1/B2
● Indefinite Pronouns (Some/Any/No/Every Compounds) - EM1C7-B1
● Some vs. Any - 8thC4-A2
● Definite article THE - 6thC4-A1, EM1C1-A2/B1
● Indefinite articles - a/an (or Indefinite Articles A/AN) - 6thC3-A1, EM1C1-A2/B1
● Plurals - 6thC3-A1, EM1C7-B1
● Countable and Uncountable nouns (or Countable and Uncountable) - 8thC4-A2, EM1C7-B1
● Counters for Uncountable nouns - 8thC4-A2, EM1C7-B1
● Many, much, and a lot of (or Quantifier) - 8thC4-A2, EM1C7-B1
● How much vs. How many - 8thC4-A2

Adjectives and Adverbs
● Comparative of superiority (or Superiority) - 8thC1-A2, EM1C8-B1, EM2C6-B1/B2
● Comparative of inferiority (or Inferiority) - 8thC1-A2, EM1C8-B1
● Comparative of equality (or Equality) - 8thC1-A2, EM1C8-B1
● Superlative of superiority (or Superiority) - 8thC1-A2, EM1C8-B1, EM2C6-B1/B2
● Superlative of inferiority (or Inferiority) - 8thC1-A2, EM1C8-B1
● Short adjectives (Comparative and Superlative) - 8thC1-A2
● Irregular Adjectives (Comparative and Superlative) - 8thC1-A2
● Double Comparatives/Proportional Increase - EM1C8-B1
● Adjective Order (OSASCOMP structural chart) - EM1C8-B1
● Adjectives ending in -ED and -ING - 8thC7-B1
● Adjectives (with prepositions) - 9thC3-B1
● How + Adjective - EM1C1-A2/B1
● Adverbs of manner - 7thC1-A1
● Adverbs (Present Perfect) - 8thC6-B1, 8thC7-B1
● Superlative + Present Perfect - 8thC6-B1
● Frequency in the Present - 6thC6-A1
● TOO and ENOUGH - 8thC8-B1

Prepositions and Linking Words
● Preposition of time (or Prepositions of time) - 6thC4-A1, 7thC2-A1, EM1C5-B1
● Prepositions of place - 6thC8-A1
● Prepositions of Movement - EM1C11-B1/B2
● IN/ON/AT (as prepositions of PLACE and TIME) - EM1C7-B1
● IN/ON/AT with the verb WORK and with institutions/vehicles (HOSPITALS/PRISONS/SCHOOLS) - EM1C7-B1
● Sequencers and Connectors - 7thC5-A1
● Linking words (Addition) / Linking Words (ADDITION) - 9thC8-B1, EM1C5-B1, EM1C12-B1/B2, EM2C2-B1/B2, EM2C4-B1/B2
● Linking words (Contrast) / Linking Words (CONTRAST) - 9thC8-B1, EM1C6-B1, EM1C12-B1/B2, EM2C2-B1/B2, EM2C4-B1/B2
● Linking words (Result) / Linking Words (RESULT) - 9thC8-B1, EM1C12-B1/B2
● Linking words (Cause) / Linking Words (CAUSE) - EM1C1-A2/B1, EM2C3-B1/B2
● Linking words (Consequence) / Linking Words (CONSEQUENCE) - EM1C1-A2/B1, EM2C2-B1/B2, EM2C3-B1/B2, EM2C4-B1/B2
● Linking Words (PURPOSE) - EM1C9-B1, EM1C12-B1/B2, EM2C5-B1/B2
● Linking (CONDITION) / Linking Words (CONDITION) - Conditional words - EM1C11-B1/B2, EM1C12-B1/B2, EM2C2-B1/B2, EM2C5-B1/B2
● Linking Words (REASON) - EM1C12-B1/B2, EM2C4-B1/B2
● Linking Words (TIME) - EM1C12-B1/B2
● Linking Words (SIMILARITY) - EM1C12-B1/B2
● Linking Words (EMPHASIS) - EM1C12-B1/B2
● Correlative Conjunctions - Linking Words (ALTERNATIVES) - EM1C9-B1, EM1C12-B1/B2

Sentence Structure and Advanced Grammar
● There is/are - 6thC3-A1
● There was/were - 7thC3-A1
● Questions with: "What, Who, Where, How old" - 6thC1-A1
● Questions with whose / WHOSE - 6thC4-A1
● Question words and -ever - EM1C1-A2/B1
● Questions - Informal and polite structures - 8thC4-A2
● Telling and asking the time - 6thC6-A1
● AM and PM - 6thC6-A1
● Dates in sentences - 6thC4-A1
● Imperative form - 6thC8-A1, EM1C2-A2/B1
● Polite requests - WOULD LIKE - 8thC4-A2
● "When" clause - 7thC5-A1, 7thC6-A2
● "While" clause - 7thC6-A2
● Zero Conditional - 9thC5-B1, EM1C9-B1, EM2C2-B1/B2
● First Conditional - 9thC5-B1, EM1C9-B1, EM2C2-B1/B2
● Second Conditional - 9thC6-B1, EM1C9-B1, EM2C2-B1/B2
● Third Conditional - EM1C9-B1, EM2C2-B1/B2
● WISH/IF ONLY + Simple Past (or WISH + Simple Past) - 9thC2-B1, EM2C8-B1/B2
● WISH/IF ONLY + Past Perfect (or WISH + Past Perfect) - 9thC2-B1, EM2C8-B1/B2
● WISH + Would - EM2C8-B1/B2
● Passive Voice - 8thC8-B1, EM1C11-B1/B2, EM2C3-B1/B2
● Reporting Passive - EM2C4-B1/B2
● Causative Form: have/get + someone + do something (or Causative) - 9thC7-B1, EM1C11-B1/B2, EM2C4-B1/B2
● Causative Passive Form: have/get something done (or Causative Passive) - 9thC7-B1, EM1C11-B1/B2, EM2C4-B1/B2
● Reported Speech - 9thC4-B1, EM1C10-B1/B2, EM2C5-B1/B2
● Reporting verbs - 9thC4-B1
● Direct to Indirect shifts (Time and Place) - 9thC4-B1
● Reported Questions - 9thC4-B1, EM2C5-B1/B2
● Embedded Questions - 9thC4-B1, EM1C10-B1/B2, EM2C10-B1/B2
● Tag Questions - EM1C10-B1/B2
● Do vs. Make - 9thC7-B1
● Verbs with fixed prepositions (Preposition-dependent verbs) - 9thC7-B1
● Words Derived from Phrasal Verbs - EM2C7-B1/B2
● Phrasal Verbs Explanation - 9thC6-B1
● Suffixes - EM1C6-B1
● Cover letter - 9thC3-B1
`;

window.initLesson({
    lessonId: "home",
    isHome: true, 
    
    // Configuration for the Grades
    grades: [
        { id: "6", label: "6th Grade", type: "elementary" },
        { id: "7", label: "7th Grade", type: "elementary" },
        { id: "8", label: "8th Grade", type: "elementary" },
        { id: "9", label: "9th Grade", type: "elementary" },
        { id: "em1", label: "EM 1st", type: "highschool" },
        { id: "em2", label: "EM 2nd", type: "highschool" }
    ],

    // Logic for Chapter Distribution
    structure: {
        elementary: {
            1: [1, 2],      
            2: [3, 4],      
            3: [5, 6],      
            4: [7, 8]       
        },
        highschool: {
            1: [1, 2, 3],   
            2: [4, 5, 6],
            3: [7, 8, 9],
            4: [10, 11, 12]
        }
    },

    // The Engine automatically generates the HTML using the plain text lists!
    completeSummaryContent: {
        topics: parseIndexList(RAW_TOPICS),
        vocabulary: parseIndexList(RAW_VOCAB),
        grammar: parseIndexList(RAW_GRAMMAR)
    },

    // ALL CHAPTER DETAILS EXTRACTED FROM YOUR PDF
    chapterDetails: {
        
        "6": {
            1: formatChap(
                `"Children all over the world", "Introductions / first time meeting" (CEFR Level A1).`,
                ["Nations and Nationalities.", "Numbers (1 to 100).", "Subject pronouns.", "Question Words.", "Introductions and first meetings."],
                ["To be (present).", "Questions with: 'What, Who, Where, How old'."]
            ),
            2: formatChap(
                `"Family / Friends", "Family tree" (CEFR Level A1).`,
                ["Family members.", "Professions."],
                ["Possessive Adjectives.", "Demonstrative pronouns."]
            ),
            3: formatChap(
                `"the House", "There is no place like home" (CEFR Level A1).`,
                ["Types of home - buildings' names.", "Rooms of the house.", "Colors.", "Bedroom Objects.", "Parts of a house."],
                ["there is/are.", "indefinite articles - a/an.", "Plurals."]
            ),
            4: formatChap(
                `“Holidays to celebrate” (CEFR Level A1).`,
                ["Holidays.", "Ordinal numbers.", "Months of the year.", "Dates.", "Seasons of the year."],
                ["definite article THE.", "Preposition of time.", "Dates in sentences.", "Possessive Adjectives.", "Possessive Pronouns.", "Possessive (Adjectives x Pronouns).", "questions with whose."]
            ),
            5: formatChap(
                `“All about you”, “What are your hobbies and interests?”, “What do you do?”, “What does she look like?” (CEFR Level A1).`,
                ["Parts of the body.", "Adjectives (physical description).", "Hobbies and Interests."],
                ["Simple Present Tense.", "To be (Present)."]
            ),
            6: formatChap(
                `“do you have a busy life?”, “My Daily activities” (CEFR Level A1).`,
                ["Habits and Routines.", "Time.", "Days of the week."],
                ["Adverbs of frequency.", "Expressions of frequency.", "Telling and asking the time.", "AM and PM.", "Simple Present Tense.", "Frequency in the Present."]
            ),
            7: formatChap(
                `“Our Environment”, “Human’s actions affecting our planet”, “How can we help protect the Environment?”, “Consumerism and the environment” (CEFR Level A1).`,
                ["Green vocabulary.", "Verbs for environmental topics."],
                ["Present Continuous.", "GERUND.", "Verbs not common in Present Continuous."]
            ),
            8: formatChap(
                `“How do I get there?”, “Walking around the city on a trip” (CEFR Level A1).`,
                ["Places in the city.", "Means of transportation.", "Asking and giving directions."],
                ["Prepositions of place.", "Imperative form."]
            )
        },

        "7": {
            1: formatChap(
                `"What can you do?", "Hidden talents, sports, musical instruments, and languages" (CEFR Level A1).`,
                ["Skills and Abilities.", "Sports.", "Musical instruments.", "Hobbies.", "Languages."],
                ["Modal CAN.", "Modals for Ability.", "Modals for Request.", "Adverbs of manner."]
            ),
            2: formatChap(
                `“The life ONLINE”, “Social Media”, “Habits” (CEFR Level A1).`,
                ["Social Media.", "Popular websites and apps.", "Technology.", "Internet Slang.", "Polysemy."],
                ["Simple Present Tense.", "Present Continuous.", "Prepositions of time."]
            ),
            3: formatChap(
                `“Disastrous vacations”, “My vacation was horrible!” (CEFR Level A1).`,
                ["Travel vocabulary."],
                ["there was/were.", "TO BE (Past).", "Possessive Pronouns.", "Possessive Adjectives.", "WHOSE."]
            ),
            4: formatChap(
                `“Let’s catch some movies”, “Movies”, “Movie night! Netflix or cinema?” (CEFR Level A1).`,
                ["Adjectives (for movies).", "Movie Genre.", "Movie vocabulary.", "Irregular verbs."],
                ["Simple Past Tense.", "Regular Verbs in the Past - rules.", "TO BE (Past)."]
            ),
            5: formatChap(
                `"Travel Tales: Festivals, Customs, and Past Adventures" (CEFR Level A1).`,
                ["Travel vocabulary.", "Places on a trip.", "Festivals and Events.", "Cultural customs.", "Time expressions (past)."],
                ["Simple Past tense.", "Sequencers and Connectors.", "'when' clause."]
            ),
            6: formatChap(
                `“Overcome your difficulties”, “Amazing people with incredible life stories”, “Difficulties and how to overcome them”, “Writing our biography” (CEFR Level A2).`,
                ["Emotions and feelings.", "Life and Challenge vocabulary."],
                ["Past Continuous.", "Simple Past Tense.", "“When” clause.", "“While” clause."]
            ),
            7: formatChap(
                `"No Pain, No Gain", "Sports influence on Mental and Group skills", "Sports, Discipline and Leadership", "the Olympic Games - the history of sports", "Simple Past - Common regular and irregular verbs" (CEFR Level A2).`,
                ["Sports.", "the Olympics.", "Skills and qualities."],
                ["Simple Past tense.", "Past Continuous.", "Modal CAN.", "Modal COULD.", "Modals for Ability."]
            ),
            8: formatChap(
                `"Are you nuts?", "Difference between American and British food", "The importance of food - nutrition, comfort, hobby, experience, and reunions" (CEFR Level A2).`,
                ["Food vocabulary.", "Health and Body.", "Diets.", "American x British."],
                ["Object pronouns.", "Subject pronouns.", "Pronouns (Subject x Object).", "Possessive Adjectives.", "Possessive Pronouns.", "Possessive (Adjective x Pronoun)."]
            )
        },

        "8": {
            1: formatChap(
                `"Let's Go Shopping!" (CEFR Level A2).`,
                ["Adjectives (gadgets and goods).", "Clothing.", "Accessories.", "Gadgets.", "Places at the mall.", "Shopping vocabulary."],
                ["Comparative of superiority.", "Comparative of inferiority.", "Comparative of equality.", "Superlative of superiority.", "Superlative of inferiority.", "Short adjectives (Comparative and Superlative).", "Irregular Adjectives (Comparative and Superlative)."]
            ),
            2: formatChap(
                `"Standing Up Against Bullying" (CEFR Level A2).`,
                ["Emotions and Feelings.", "Time expressions (Future).", "Habits and Routines.", "Days of the Week.", "Cyberbullying.", "Online vocabulary.", "School safety terms."],
                ["Present Simple Tense.", "Present Continuous.", "Simple Future (BE GOING TO)."]
            ),
            3: formatChap(
                `"Our Planet, Our Future: Let's Take Action!", "Save the ENVIRONMENT", "the 3 R's: REDUCE - REUSE - RECYCLE" (CEFR Level A2).`,
                ["Environmental Problems and Solutions.", "Waste vocabulary.", "The Environment."],
                ["Simple Future (WILL).", "Simple Future (BE GOING TO).", "Relative pronouns."]
            ),
            4: formatChap(
                `"Eating Out in English!" (CEFR Level A2).`,
                ["Places to eat out.", "Restaurant vocabulary.", "Menu words.", "Foods, drinks, and desserts.", "Types of meat.", "Ordering and Paying."],
                ["Polite requests - WOULD LIKE.", "Countable and Uncountable nouns.", "Counters for Uncountable nouns.", "many, much, and a lot of.", "How much vs. How many.", "Some vs. Any.", "Questions - Informal and polite structures."]
            ),
            5: formatChap(
                `"The Internet Generation", "Social Media - Sharing and Connecting people", "Generation gap - Use of internet, Media, News sources, Hobbies" (CEFR Level B1).`,
                ["Internet vocabularies.", "Technology.", "Social media.", "Apps.", "Internet Abbreviations.", "Generations gap (Gen Z and Alpha x Millennials).", "Irregular verbs."],
                ["Present Perfect.", "Have Been x Have Gone."]
            ),
            6: formatChap(
                `“Hi-tech way of life - living the future”, “Quality of life x hindrances - How technology changes our life” (CEFR Level B1).`,
                ["Technology vocabulary.", "Quality of life x Hindrance."],
                ["Adverbs (Present Perfect).", "Present Perfect.", "Superlative + Present Perfect."]
            ),
            7: formatChap(
                `"Feelings, Emotions and Expressions", "Body Language", "Facial Expressions", "How are you feeling?" (CEFR Level B1).`,
                ["Adjectives (ending in -ED and -ING).", "Expressions when you don’t understand.", "Disagreeing.", "Feelings and Emotions."],
                ["Adjectives ending in -ED and -ING.", "Present Perfect.", "Adverbs (Present Perfect).", "Simple Past Tense.", "Simple Past x Present Perfect."]
            ),
            8: formatChap(
                `"Cultural matters - Relationship / Friendship / Bias / Background / Diffusion / Culture Shock / Prejudice", "Are gestures universal?", "What is culture?" (CEFR Level B1).`,
                ["Culture and Traditions.", "Elements of a Country.", "Collocations with 'MAKE'.", "Gestures."],
                ["Past Habits - Used to.", "Passive Voice.", "Irregular Verbs.", "TOO and ENOUGH."]
            )
        },

        "9": {
            1: formatChap(
                `"Awesome Inventions and Fantastic Inventors" (CEFR Level B1).`,
                ["Inventions of the 20th century.", "Technology and Invention.", "Idioms and expressions (inventions and discoveries).", "Time Expressions (Past).", "irregular verbs."],
                ["Simple Past tense.", "Past Perfect.", "Simple Past x Past Perfect.", "Present Perfect.", "Present Perfect Continuous."]
            ),
            2: formatChap(
                `“Journeys without boundaries”, "Wishes, Regrets, and Alternative Realities" (CEFR Level B1).`,
                ["Migration and Refugees.", "Opportunities.", "Problems living abroad."],
                ["WISH/IF ONLY + Simple Past.", "WISH/IF ONLY + Past Perfect.", "Modal MUST.", "HAVE TO."]
            ),
            3: formatChap(
                `"Career Path", “What I want to be when I grow up” (CEFR Level B1).`,
                ["Jobs and Professions.", "Career and Work.", "Interviews.", "Adjectives (people at work).", "Adjectives (Temperament)."],
                ["Modal MAY and MIGHT.", "Modal CAN.", "Modal COULD.", "Modal MUST.", "Modals for Possibility.", "Modal SHOULD.", "OUGHT TO.", "Modals for Advice.", "Cover letter.", "Adjectives (with prepositions)."]
            ),
            4: formatChap(
                `"Have You Heard That Rumor?", “Gossiping - Why do people want to talk about others?”, “How harmful FAKE NEWS is” (CEFR Level B1).`,
                ["Information and Media.", "gossiping, rumors, and fake news.", "Reporting Verbs."],
                ["Reported Speech.", "Reporting verbs.", "Direct to Indirect shifts (Time and Place).", "Reported Questions.", "Embedded Questions."]
            ),
            5: formatChap(
                `"Ideas that can Inspire Changes", "Advertising x Reality", "Creating a campaign" (CEFR Level B1).`,
                ["Advertising and Marketing.", "Campaigns."],
                ["Zero Conditional.", "First Conditional.", "Reflexive Pronouns."]
            ),
            6: formatChap(
                `"Unsolved Mysteries & Haunted Houses", “Analyzing legendary world enigmas” (CEFR Level B1).`,
                ["Mysterious places and beings.", "Investigation and Clues.", "Supernatural and Unknown Phenomena.", "Expressions connected to fear, mystery, or death.", "Phrasal Verbs (LOOK, GET, PUT, TAKE, TURN)."],
                ["Second Conditional.", "Phrasal Verbs Explanation."]
            ),
            7: formatChap(
                `"Shop Smart: Your Choices, Your Power" (CEFR Level B1).`,
                ["Shopping and Commerce.", "Items, Products, Goods.", "Expressions about Shopping."],
                ["Do vs. Make.", "Verbs with fixed prepositions (Preposition-dependent verbs).", "Causative Passive Form: have/get something done.", "Causative Form: have/get + someone + do something."]
            ),
            8: formatChap(
                `"Green: The Color of Hope for Our Planet" (CEFR Level B1).`,
                ["Sustainability.", "Green technology.", "Environmental Problems.", "Resource management.", "Idioms about Nature."],
                ["Verb patterns: VERB + Infinitive (to + verb).", "Verb patterns: VERB + Gerund (-ing).", "Verb patterns: Gerund (-ing) vs. Infinitive (to + verb).", "Linking words (Addition, Contrast, Result)."]
            )
        },

        "em1": {
            1: formatChap(
                `"The World's language", "English as a global language - Reasons to learn it", "Learning a language nowadays" (CEFR Level A2/B1).`,
                ["Languages and Communication.", "Subject Pronouns.", "Object pronouns.", "Possessive adjectives.", "Possessive pronouns.", "Reflexive pronouns.", "Wh-words with ever."],
                ["Definite Article THE.", "Indefinite Articles A/AN.", "Pronouns (Subject x Object x Reflexive).", "Possessive (Adjectives x Pronouns).", "Pronouns and Possessive systems.", "Question words and -ever.", "How + Adjective.", "Linking words (Cause, Consequence)."]
            ),
            2: formatChap(
                `"ONE language - infinite paths to it", "Learning English my way", "Live the language" (CEFR Level A2/B1).`,
                ["Learning and School.", "Adverbs (Frequency).", "Habits for learning.", "Adverbs of time (for present continuous)."],
                ["Imperative form.", "Simple Present Tense.", "Present Continuous."]
            ),
            3: formatChap(
                `"Creativity talks - thinking outside the box", "Inventing and innovating" (CEFR Level A2/B1).`,
                ["Creativity and breakthrough innovation.", "Science and Technology.", "False cognates (English and Portuguese)."],
                ["Simple Past Tense.", "Past Continuous.", "Past Habits - Used to."]
            ),
            4: formatChap(
                `"Sustainable Cities: Shaping Our Urban Future", “Big cities, Big challenges” (CEFR Level A2/B1).`,
                ["City and Infrastructure.", "City problems, solutions, and sustainable urban living.", "Phrasal Verbs (RUN, PUT)."],
                ["Simple Future - WILL / BE GOING TO.", "Simple Present.", "Present Continuous.", "Future Differences.", "Modals for Ability, Possibility, Obligation, Necessity, Advice.", "Modal CAN, COULD, MAY, MIGHT, SHOULD, MUST, SHALL, WOULD, WOULD RATHER, HAD BETTER.", "Semi-modals (dare, need, used to, ought to)."]
            ),
            5: formatChap(
                `"Better today, even better tomorrow", "BE the change", "SDGs", "United Nations" (CEFR Level B1).`,
                ["Sustainability.", "Global activism.", "Community development.", "17 Global Goals."],
                ["Simple Present / Past Tense.", "Present Perfect.", "Simple Past x Present Perfect.", "Present Perfect Continuous.", "Verbs not used with Continuous Tenses - State Verbs.", "Prepositions of time.", "Linking Words (ADDITION)."]
            ),
            6: formatChap(
                `“The power of music”, “Benefits of Music”, “Music, Emotions, Well-being” (CEFR Level B1).`,
                ["Opinion.", "Agreeing and Disagreeing.", "Music genres.", "Feelings and Emotions.", "Music vocabulary.", "Relative Pronouns."],
                ["Past Perfect.", "Past Perfect Continuous.", "Relative Clauses.", "Suffixes.", "Linking Words (CONTRAST)."]
            ),
            7: formatChap(
                `"Follow me - the hashtag era", "Social Media and Connecting People", "Virals and Instant Fame", "Social Movements on the Internet", "Digital Influencers and the Impact of Social Media", "Cancelation Culture" (CEFR Level B1).`,
                ["Social Media and internet culture.", "Social Media Issues.", "Irregular Plurals.", "Phrasal Verbs (GET).", "Countable and Uncountable Nouns."],
                ["IN/ON/AT (as prepositions of PLACE and TIME).", "IN/ON/AT with the verb WORK and with institutions/vehicles.", "Plurals.", "Counters for Uncountable nouns.", "Quantifiers (Many, Much, A lot of, A few, Few, A little, Little).", "Indefinite Pronouns."]
            ),
            8: formatChap(
                `"Standing tall together", "An architectural view of global diversity and empathy" (CEFR Level B1).`,
                ["Positive and Negative concepts.", "Identity and Society.", "Diversity - Prejudice x Respect.", "Empathy descriptors.", "Phrasal Verbs (MAKE, BREAK).", "False Cognates."],
                ["Comparative of Superiority / Equality / Inferiority.", "Double Comparatives/Proportional Increase.", "Superlative of Superiority / Inferiority.", "Adjective Order (OSASCOMP structural chart)."]
            ),
            9: formatChap(
                `"We are all smart in different ways", "Developing Intelligences - How to get smarter", "Types of intelligence", "Bilinguals are smarter" (CEFR Level B1).`,
                ["Intelligence and Cognition.", "Learning and Education.", "Types of Intelligence.", "Phrasal Verbs (TURN)."],
                ["Zero / First / Second / Third Conditional.", "Correlative Conjunctions.", "Linking Words (PURPOSE)."]
            ),
            10: formatChap(
                `"Carry on - Overcoming adversities in life", "Life after tragedy - coming back on track" (CEFR Level B1/B2).`,
                ["Challenges and Adversity.", "Resilience, Persistence, and Adaptation.", "Phrasal Verb (CALL, CARRY)."],
                ["Embedded Questions.", "Reported Speech.", "Tag Questions."]
            ),
            11: formatChap(
                `"Gym or Couch?", "The exercise dichotomy in youth routines" (CEFR Level B1/B2).`,
                ["Mental health and Well-being.", "Physical Health and Exercising.", "Fitness."],
                ["Passive Voice.", "Causative / Causative Passive.", "Linking (CONDITION).", "Prepositions of Movement.", "Verb Patterns (VERB + Infinitive / Gerund)."]
            ),
            12: formatChap(
                `"Consumer Society - Born to shop?", "Sustainable Consumption", "Consumerism - the rise, benefits, shift towards green", "Conscious Consumerism" (CEFR Level B1/B2).`,
                ["Consumerism and Shopping.", "Sustainability and the Environment.", "Business and Economy.", "Phrasal Verbs (BRING, GIVE, LOOK)."],
                ["Linking Words (CONTRAST, REASON, ADDITION, CONDITION, RESULT, PURPOSE, TIME, SIMILARITY, EMPHASIS).", "Simple Present / Continuous.", "Present Perfect / Continuous.", "Simple Past / Continuous.", "Past Perfect / Continuous.", "Simple Future / Continuous / Perfect.", "Conditional."]
            )
        },

        "em2": {
            1: formatChap(
                `“DNA and Evolution through time”, “Gene inheritance”, “Theory of evolution” (CEFR Level B1/B2).`,
                ["Evolution and Biology.", "Science and Research."],
                ["Present Perfect.", "Past Perfect.", "Future Perfect.", "Conditional Perfect."]
            ),
            2: formatChap(
                `"Thinking Machines - Can Machines Think?", "Artificial Intelligence - Make them think for me", "Robotics - Automatizing the future" (CEFR Level B1/B2).`,
                ["AI and Technology.", "Development and Technological advances.", "The 3 Laws of Robotics."],
                ["Zero / First / Second / Third Conditional.", "Linking Words (CONDITION, CONTRAST, CONSEQUENCE, ADDITION)."]
            ),
            3: formatChap(
                `“Green Power - The Sustainable Sources of Energy”, “Sustainability”, “Affordable and Clean Energy: Why it matters”, “the Environment and Renewable energy” (CEFR Level B1/B2).`,
                ["Energy and Power.", "Sustainability and Environment.", "Problems and Solutions."],
                ["Passive Voice.", "Linking Words (CAUSE, CONSEQUENCE)."]
            ),
            4: formatChap(
                `“eye-catching photography”, “is the human eye a camera?”, “Social media and Photography” (CEFR Level B1/B2).`,
                ["Photography.", "The Human Eye - Sight problems and Glaesses.", "Social Media."],
                ["Causative / Causative Passive.", "Reporting Passive.", "Linking Words (CONTRAST, ADDITION, REASON, CONSEQUENCE)."]
            ),
            5: formatChap(
                `"Changes - Faster than we can get used to", "winds of change", "is our world changing faster than ever before?", "growth of the technology and problems", "GLOBALIZATION", "the pandemic" (CEFR Level B1/B2).`,
                ["Changes and Development.", "Technology.", "Globalization and the World.", "Crisis."],
                ["Reported Speech.", "Reported Questions.", "Linking Words (CONDITION, PURPOSE)."]
            ),
            6: formatChap(
                `“Hard times - How to overcome difficulties?”, “How much can we learn from crises?”, “financial crises”, “coronavirus and the crisis” (CEFR Level B1/B2).`,
                ["Crisis and Hardship.", "Economy, Finances, and Financial Crises.", "Optimism and Resilience.", "Relative Pronouns."],
                ["Relative Clauses."]
            ),
            7: formatChap(
                `"Gene editing - what happens when we edit the genome?", "Turning science fiction into science fact", "Can we resurrect extinct animals?", "Developments of science" (CEFR Level B1/B2).`,
                ["Science, and Technology.", "Genetics and Extinction.", "Ethics and Debate.", "Phrasal Verbs (BREAK, CARRY)."],
                ["Words Derived from Phrasal Verbs.", "Verb Patterns (Verb + Infinitive / Gerund / Object + Infinitive).", "Infinitive x Gerund."]
            ),
            8: formatChap(
                `“A reshaped world - How has 20th century transformed our lives?”, “historical changes of the last century - Science, politics, technology, economy”, “How science has transformed the world in 100 years”, “Inventions that changed the world”, “Equal rights”, “WWW - internet and the developments we can’t catch up to” (CEFR Level B1/B2).`,
                ["Inventions, Science, and Technology.", "Politics, Society, and Human Rights.", "History and Changes.", "Phrasal Verbs (BRING, COME)."],
                ["WISH + Simple Past.", "WISH + Past Perfect.", "WISH + Would."]
            ),
            9: formatChap(
                `“Where there is water, there is life”, “How much water we use - water footprint”, “We are running out of water - Saving water” (CEFR Level B1/B2).`,
                ["Water - use, conservation, and problems.", "Phrasal Verbs (LOOK, GIVE)."],
                ["Modal MUST, HAVE TO, NEED, SHOULD, OUGHT TO, HAD BETTER.", "Modals for Obligation, Necessity, Advice."]
            ),
            10: formatChap(
                `“A world of Polymers - Is a Plastic-free world possible?”, “Plastic life - The science, usefulness, and life of plastic”, “3D Printing will change the world” (CEFR Level B1/B2).`,
                ["Types of Plastic and their uses.", "Environment and Pollution.", "Phrasal Verbs (CALL, GET)."],
                ["Embedded Questions."]
            ),
            11: formatChap(
                `"Math is everywhere - Examples of Mathematics in our Life", "Real-life applications of Trigonometry", "Fibonacci Sequence", "Fractals in Nature", "Hexagons in nature", "Concentric circles in nature", "Math in outer space", "Pixar -perfect- the mathematics of animation" (CEFR Level B1/B2).`,
                ["Mathematics and Geometry.", "Science and Space.", "Art and Animation.", "Phrasal Verbs (MAKE)."],
                ["Phrasal Verbs (PUT).", "Modal MAY, MIGHT, COULD, MUST, CAN.", "Modals for Possibility, Deduction.", "Present, Past, Future for Modals."]
            ),
            12: formatChap(
                `“No frontiers - Creating Life Purposes”, “Passion x Mission x Profession x Vocation - What is PURPOSE?”, “Generations and their differences” (CEFR Level B1/B2).`,
                ["Life Purpose and Vocation.", "Skill and Personal Development.", "Generations and Society.", "Work and Education.", "Phrasal Verbs (TAKE)."],
                ["Modal CAN, COULD, BE ABLE TO, MUST, MAY.", "Modals for Ability, Permission, Prohibition, Requests."]
            )
        }
    }
});