/**
 * ENGLISH BLOCK ASSEMBLING - EXERCISES DASHBOARD
 */
window.initExercise({
    isDashboard: true,
    title: "Practice Portal",
    
    // A simple dictionary to map IDs to Names
    lessonNames: {
        // BLOCK 1: Foundation & Daily Life
        "1-1": "1 - Introductions & Greetings",
        "1-2": "2 - Daily Routines",
        "1-3": "3 - Family and Friends",
        "1-4": "4 - Food and Drink",
        "1-5": "5 - Shopping",
        "1-6": "6 - Weather and Seasons",
        "1-7": "7 - TTimes and Dates",

        // BLOCK 2: Community & The World
        "2-8": "8 - Hobbies and Interests",
        "2-9": "9 - Health and Wellbeing",
        "2-10": "10 - Travel & Transportation",
        "2-11": "11 - Home and Living",
        "2-12": "12 - Work and Occupations",
        "2-13": "13 - Education and Learning",
        "2-14": "14 - Technology and Gadgets",

        // BLOCK 3: Narratives & Experiences
        "3-15": "15 - Leisure Activities",
        "3-16": "16 - Feelings and Emotions",
        "3-17": "17 - Shopping for Clothes",
        "3-18": "18 - Public Services",
        "3-19": "19 - Telecommunications",
        "3-20": "20 - Events and Celebrations",
        "3-21": "21 - Transportation and Directions",

        // BLOCK 4: Society & Innovation
        "4-22": "22 - Nature and Environment",
        "4-23": "23 - Health and Fitness",
        "4-24": "24 - Food and Cooking",
        "4-25": "25 - Travel Experiences",
        "4-26": "26 - Community and Neighborhood",
        "4-27": "27 - Emergency Situations",
        "4-28": "28 - Cultural Differences",

        // BLOCK 5: Advanced Communication
        "5-29": "29 - Social Media and Communication",
        "5-30": "30 - Pets and Animals",
        "5-31": "31 - Personal Development",
        "5-32": "32 - Art and Creativity",
        "5-33": "33 - Transportation and Commuting",
        "5-34": "34 - Weather and Disasters",
        "5-35": "35 - Friendship and Social Life"
    },

    blocks: {
        1: { title: "Foundation & Daily Life", topics: ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7"] },
        2: { title: "Community & The World", topics: ["2-8", "2-9", "2-10", "2-11", "2-12", "2-13", "2-14"] },
        3: { title: "Narratives & Experiences", topics: ["3-15", "3-16", "3-17", "3-18", "3-19", "3-20", "3-21"] },
        4: { title: "Society & Innovation", topics: ["4-22", "4-23", "4-24", "4-25", "4-26", "4-27", "4-28"] },
        5: { title: "Advanced Communication", topics: ["5-29", "5-30", "5-31", "5-32", "5-33", "5-34", "5-35"] }
    }
});