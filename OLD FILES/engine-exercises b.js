/**
 * ENGINE-EXERCISES.js
 * Handles Randomization, Navigation, and Scoring for the Exercise Module
 */

let exData = null;       // The raw full pool
let activeSet = {};      // The selected random questions
let currentPage = 0;
let totalPages = 15;     // Fixed as per requirement
let timerInterval;
let startTime;
let pageStatus = new Array(16).fill(false); // Tracks if page is "checked/done" (Index 1-15)

// --- 1. INITIALIZATION ---

window.initExercise = function(data) {
    exData = data;
    
    // 1. Render Header Info
    document.getElementById('ex-grade').textContent = data.grade;
    document.getElementById('ex-bimester').textContent = "BIM " + data.bimester;
    document.getElementById('ex-chapter').textContent = "CH " + data.chapter;
    document.getElementById('menu-grade-label').textContent = data.grade.toUpperCase();

    // 2. Run Randomizer
    generateRandomSet();

    // 3. Build Sidebar
    renderSidebar();

    // 4. Start Timer
    startTimer();

    // 5. Load Page 1
    showPage(1);
    
    // 6. Attach Event Listeners
    setupNavListeners();
};

// --- 2. RANDOMIZER (The "480 Combinations" Logic) ---

function generateRandomSet() {
    // 1. Calculate Time Seed (Changes every 15 seconds, cycles 480 times = 2 hours)
    const now = Date.now();
    const interval = 15000; // 15 seconds
    const cycle = 480;      
    const seed = Math.floor(now / interval) % cycle;
    
    console.log("Generating Set with Seed ID:", seed);
    
    // Helper: Seated Random Number Generator (Linear Congruential Generator)
    // This ensures the SAME seed always produces the SAME sequence of "random" numbers
    let localSeed = seed;
    const random = () => {
        const x = Math.sin(localSeed++) * 10000;
        return x - Math.floor(x);
    };

    activeSet = {
        simple: [],
        context: []
    };

    // --- SELECT SIMPLE EXERCISES (Types 1-10) ---
    // Types 1,2,3,5,7,8,9,10: Select 3 items
    // Type 4: Select 6 items
    // Type 6: Select 1 item (which contains 5 pairs)
    
    for (let i = 1; i <= 10; i++) {
        const pool = exData.simplePool[i]; // Access pool for Type i
        if (!pool) continue;

        let count = 3; 
        if (i === 4) count = 6;
        if (i === 6) count = 1;

        // Shuffle pool using seeded random
        const shuffled = [...pool].sort(() => random() - 0.5);
        activeSet[i] = shuffled.slice(0, count);
    }

    // --- SELECT CONTEXT EXERCISES (Types 11-15) ---
    // Select 1 context item per type (which contains all its sub-questions)
    for (let i = 11; i <= 15; i++) {
        const pool = exData.contextPool[i];
        if (!pool) continue;
        
        // Pick 1 text/dialogue
        const shuffled = [...pool].sort(() => random() - 0.5);
        activeSet[i] = shuffled[0];
    }
}

// --- 3. NAVIGATION & UI ---

function renderSidebar() {
    const list = document.getElementById('nav-list');
    list.innerHTML = '';

    const labels = [
        "Unscramble Sentences", "Unscramble Dialogues", "Quick Questions", 
        "Find Meaning", "Correct Sentences", "Match Sentences", 
        "Best Answer", "Incorrect Vocabulary", "Listen & Answer", 
        "Complete Sentences", "Complete Dialogue", "Read & Answer", 
        "Listen & Answer (Ctx)", "Complete Text", "Listen & Complete"
    ];

    labels.forEach((label, idx) => {
        const pageNum = idx + 1;
        const li = document.createElement('li');
        
        // Add Checkmark class if done
        const checkClass = pageStatus[pageNum] ? 'completed' : '';
        
        li.innerHTML = `
            <span class="nav-step-item ${checkClass}" onclick="showPage(${pageNum})">
                <span style="color:var(--accent-orange); font-weight:900;">${pageNum}.</span> ${label}
            </span>`;
        list.appendChild(li);
    });
}

function showPage(pageNum) {
    currentPage = pageNum;
    
    // Update Sidebar Active State
    document.querySelectorAll('.nav-step-item').forEach((el, idx) => {
        if (idx + 1 === pageNum) el.style.color = 'var(--primary-blue)';
        else el.style.color = '#666';
    });

    // Update Buttons
    document.getElementById('prev-btn').disabled = (pageNum === 1);
    
    // Render Content
    const container = document.getElementById('lesson-content');
    container.innerHTML = `<div class="exercise-page active" id="page-${pageNum}">
        ${renderExercisePage(pageNum)}
    </div>`;
    
    // Handle "Next" Button logic (If page 15, change to Finish)
    const nextBtn = document.getElementById('next-btn');
    if (pageNum === 15) {
        nextBtn.innerHTML = "🏁";
        nextBtn.onclick = finishExercises;
    } else {
        nextBtn.innerHTML = "→";
        nextBtn.onclick = () => showPage(pageNum + 1);
    }

    // Close Menu on Mobile
    document.getElementById('slide-menu').classList.remove('active');
    document.getElementById('menu-toggle').classList.remove('open');
}

function setupNavListeners() {
    document.getElementById('prev-btn').onclick = () => showPage(currentPage - 1);
    
    document.getElementById('menu-toggle').onclick = function() {
        this.classList.toggle('open');
        document.getElementById('slide-menu').classList.toggle('active');
    };
}

// --- 4. RENDERER DISPATCHER ---
// (We will fill the details in the next prompt, for now it switches based on type)

function renderExercisePage(pageNum) {
    const data = activeSet[pageNum];
    if (!data) return `<div class="area-box">No data found for Exercise Type ${pageNum}</div>`;

    // Check if page is already completed to disable inputs
    const isDone = pageStatus[pageNum];
    const disabledState = isDone ? 'disabled-mode' : '';

    let html = `<div class="area-box ${disabledState}" data-page="${pageNum}">`;
    
    // Header
    html += `<h3>Exercise ${pageNum}</h3>`;
    
    // Placeholder logic for the 15 types - We will expand this in Step 4
    if (pageNum <= 10) {
        // Render List of Questions (Simple)
        if (Array.isArray(data)) {
            data.forEach((item, i) => {
                html += `<div class="question-block" id="q-${pageNum}-${i}">
                    <p><strong>${i+1}.</strong> ${item.q || "Question"}</p>
                    <!-- specific renderer will go here -->
                </div>`;
            });
        } else {
             html += `<p>Type 6 Logic Here</p>`; // Type 6 is unique
        }
    } else {
        // Render Context (1 item)
        html += `<div class="context-block">
            <h4>${data.title || "Context"}</h4>
            <p>${data.text || "..."}</p>
            <!-- questions go here -->
        </div>`;
    }

    // CHECK BUTTON (Only if not done)
    if (!isDone) {
        html += `<button class="btn check-btn" onclick="checkCurrentPage(${pageNum})">CHECK ANSWERS</button>`;
    } else {
        html += `<div class="feedback-msg correct" style="display:block; margin-top:20px; text-align:center;">
                    Page Completed ✓
                 </div>`;
    }
    
    html += `</div>`;
    return html;
}

// --- 5. CHECKING LOGIC ---

window.checkCurrentPage = function(pageNum) {
    // 1. Mark Page as Done
    pageStatus[pageNum] = true;
    
    // 2. Visual Updates
    const pageDiv = document.querySelector(`.area-box[data-page="${pageNum}"]`);
    pageDiv.classList.add('disabled-mode'); // CSS class to gray out inputs
    
    // Remove Check Button
    const btn = pageDiv.querySelector('.check-btn');
    if(btn) btn.remove();

    // 3. Update Sidebar (Add Checkmark)
    renderSidebar(); // Re-renders to show the check

    // 4. Calculate Score (Placeholder for now)
    // In next steps, we will loop through inputs to check values vs data
    
    alert("Checked! (Logic to validate specific answers coming in next step)");
}

// --- 6. TIMER & FINISH ---

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const delta = Math.floor((Date.now() - startTime) / 1000);
        const m = Math.floor(delta / 60);
        const s = delta % 60;
        document.getElementById('global-timer').textContent = 
            `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    }, 1000);
}

function finishExercises() {
    clearInterval(timerInterval);
    const container = document.getElementById('lesson-content');
    
    // Calculate Total Score (Placeholder)
    const score = 0; 
    const total = 100;

    container.innerHTML = `
        <div id="result-page" style="display:block;">
            <h2 style="color:var(--primary-blue)">EXERCISE SESSION COMPLETE</h2>
            <div class="stat-box">
                <div class="stat-num">${document.getElementById('global-timer').textContent}</div>
                <div>Time Taken</div>
            </div>
            <div class="stat-box">
                <div class="stat-num">${score}%</div>
                <div>Accuracy</div>
            </div>
            <br><br>
            <button class="btn" onclick="location.reload()">New Session</button>
            <br><br>
            <a href="index.html">Back to Main Menu</a>
        </div>
    `;
    
    // Hide UI buttons
    document.getElementById('ui-cluster').style.display = 'none';
}