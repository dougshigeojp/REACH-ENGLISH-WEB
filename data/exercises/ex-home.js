window.initExercise({
    isDashboard: true,
    title: "Exercise Portal",
    grades: [
        { id: "6th", label: "6th Grade", type: "elementary" },
        { id: "7th", label: "7th Grade", type: "elementary" },
        { id: "8th", label: "8th Grade", type: "elementary" },
        { id: "9th", label: "9th Grade", type: "elementary" },
        { id: "em1", label: "EM 1st", type: "highschool" },
        { id: "em2", label: "EM 2nd", type: "highschool" }
    ],
    structure: {
        elementary: { chaptersPerBimester: 2 },
        highschool: { chaptersPerBimester: 3 }
    }
});