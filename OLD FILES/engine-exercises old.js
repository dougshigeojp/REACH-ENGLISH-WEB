/**
 * ENGINE-EXERCISES.js
 * Specialized logic for the Practice Mode
 */

let quizData = null;
let currentQ = 0;
let score = 0;
let totalQ = 0;

// Initialize when data is loaded
window.initExercise = function(data) {
    quizData = data;
    totalQ = data.questions.length;
    
    // Shuffle if enabled
    if(quizData.config && quizData.config.shuffle) {
        quizData.questions.sort(() => Math.random() - 0.5);
    }

    document.getElementById('loader').style.display = 'none';
    renderQuiz();
};

function renderQuiz() {
    const container = document.getElementById('question-stream');
    container.innerHTML = '';

    quizData.questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = `q-card ${index === 0 ? 'active' : ''}`;
        card.id = `q-${index}`;
        card.innerHTML = buildQuestionHTML(q, index);
        container.appendChild(card);
    });
    
    updateProgress();
}

function buildQuestionHTML(q, index) {
    let html = `<h3 style="color:var(--accent-orange)">Question ${index + 1}</h3>`;
    html += `<p style="font-size:1.1rem; margin-bottom:20px;">${q.q}</p>`;

    // --- MCQ ---
    if (q.type === 'mcq') {
        html += `<div class="options-container">
            ${q.options.map((opt, i) => `
                <div class="option" onclick="selectOption(this)" data-correct="${opt.c}">${opt.t}</div>
            `).join('')}
        </div>`;
    } 
    // --- TRUE / FALSE ---
    else if (q.type === 'true-false') {
        html += `<div class="tf-container">
            <button class="tf-btn" onclick="selectOption(this)" data-correct="${q.correct === 'true'}">TRUE</button>
            <button class="tf-btn" onclick="selectOption(this)" data-correct="${q.correct === 'false'}">FALSE</button>
        </div>`;
    }
    // --- WORD ORDER ---
    else if (q.type === 'word-order') {
        html += `
        <div class="word-bank" id="wb-${index}">
            ${q.words.sort(() => Math.random() - 0.5).map(w => `<button class="word-btn" onclick="moveWordToZone(this, 'zone-${index}')">${w}</button>`).join('')}
        </div>
        <div class="drop-zone" id="zone-${index}" data-answer="${q.correct}" style="min-height:50px; background:#f9f9f9; border:2px dashed #ccc; padding:10px; margin-bottom:15px;"></div>
        <button class="btn" style="font-size:0.8rem; padding:5px 10px; margin-bottom:10px;" onclick="resetWordOrder(${index})">Reset</button>
        `;
    }
    // --- FILL BLANK ---
    else if (q.type === 'fill-blank') {
        html += `
        <input type="text" class="drill-input" id="input-${index}" placeholder="Type answer here..." style="padding:10px; font-size:1rem; border:2px solid #ccc; border-radius:5px; width:100%;">
        <input type="hidden" id="ans-${index}" value="${q.answer}">
        `;
    }

    // Feedback Area & Button
    html += `<div id="feedback-${index}" class="feedback-msg"></div>`;
    html += `<button class="btn check-btn" onclick="checkAnswer(${index}, '${q.type}')">Check Answer</button>`;

    return html;
}

// --- INTERACTION FUNCTIONS ---

window.selectOption = function(el) {
    // Deselect siblings
    const parent = el.parentElement;
    parent.querySelectorAll('.selected').forEach(child => child.classList.remove('selected'));
    el.classList.add('selected');
};

window.moveWordToZone = function(btn, zoneId) {
    document.getElementById(zoneId).appendChild(btn);
};

window.resetWordOrder = function(index) {
    const zone = document.getElementById(`zone-${index}`);
    const bank = document.getElementById(`wb-${index}`);
    // Move all buttons back to bank
    while(zone.firstChild) {
        bank.appendChild(zone.firstChild);
    }
};

// --- CHECKING LOGIC ---

window.checkAnswer = function(index, type) {
    const card = document.getElementById(`q-${index}`);
    const feedback = document.getElementById(`feedback-${index}`);
    const btn = card.querySelector('.check-btn');
    let isCorrect = false;

    // Logic based on Type
    if (type === 'mcq' || type === 'true-false') {
        const selected = card.querySelector('.selected');
        if(!selected) return alert("Please select an answer.");
        if(selected.dataset.correct === 'true') isCorrect = true;
    } 
    else if (type === 'word-order') {
        const zone = document.getElementById(`zone-${index}`);
        // Create sentence from buttons
        const attempt = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.textContent).join(' ');
        if(attempt === zone.dataset.answer) isCorrect = true;
    }
    else if (type === 'fill-blank') {
        const input = document.getElementById(`input-${index}`).value.trim().toLowerCase();
        const answer = document.getElementById(`ans-${index}`).value.trim().toLowerCase();
        if(input === answer) isCorrect = true;
    }

    // Visual Feedback
    if (isCorrect) {
        feedback.textContent = "Correct! Great job. 🎉";
        feedback.className = "feedback-msg correct";
        feedback.style.display = "block";
        score++;
        // Disable interactions
        btn.disabled = true;
        btn.textContent = "Correct";
        btn.style.background = "var(--success-green)";
        setTimeout(() => nextQuestion(index), 1500); // Auto advance
    } else {
        feedback.textContent = "Oops! Try again.";
        feedback.className = "feedback-msg incorrect";
        feedback.style.display = "block";
    }
    
    document.getElementById('current-score').textContent = score;
};

function nextQuestion(currentIndex) {
    const current = document.getElementById(`q-${currentIndex}`);
    const next = document.getElementById(`q-${currentIndex + 1}`);
    
    current.classList.remove('active');
    
    if (next) {
        next.classList.add('active');
        updateProgress(currentIndex + 1);
    } else {
        showResults();
    }
}

function updateProgress(completed = 0) {
    const bar = document.getElementById('progress-bar');
    const pct = ((completed) / totalQ) * 100;
    bar.style.width = `${pct}%`;
}

function showResults() {
    document.getElementById('question-stream').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    
    const percentage = Math.round((score / totalQ) * 100);
    document.getElementById('final-score-display').textContent = `${percentage}%`;
    
    const msg = document.getElementById('final-msg');
    if(percentage >= (quizData.config.passScore || 60)) {
        msg.innerHTML = `<h3 style="color:var(--success-green)">You Passed!</h3><p>Excellent work.</p>`;
    } else {
        msg.innerHTML = `<h3 style="color:var(--error-red)">Keep Practicing</h3><p>Review the lesson and try again!</p>`;
    }
}