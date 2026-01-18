/**
 * REACH English - HOME DASHBOARD DATA
 * location: data/home.js
 */

window.initLesson({
    lessonId: "home",
    isHome: true, // FLAGS THE ENGINE TO SWITCH MODES
    
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
            1: [1, 2],      // Bimester 1: Chapters 1, 2
            2: [3, 4],      // Bimester 2: Chapters 3, 4
            3: [5, 6],      // Bimester 3: Chapters 5, 6
            4: [7, 8]       // Bimester 4: Chapters 7, 8
        },
        highschool: {
            1: [1, 2, 3],   // Bimester 1: Chapters 1-3
            2: [4, 5, 6],
            3: [7, 8, 9],
            4: [10, 11, 12]
        }
    }
});