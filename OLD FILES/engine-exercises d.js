/**
 * ENGINE-EXERCISES.js
 * V4.0 - Final Fixes: Result Visibility, Percentage, and Navigation
 */

let exData = null;
let activeSet = {};      // Stores the FIXED shuffled questions for this session
let currentPage = 1;
let totalPages = 15;
let pageStatus = new Array(16).fill(false); // Index 1-15
let pageScores = new Array(16).fill(0);     // User score per page
let maxPageScores = new Array(16).fill(0);  // Max possible score per page
let timerInterval;
let startTime;
let isSessionFinished = false;

// --- 1. INITIALIZATION ---

window.initExercise = function(data) {
    exData = data;
    
    // Metadata Render
    document.getElementById('ex-grade').textContent = data.grade;
    document.getElementById('ex-bimester').textContent = "BIM " + data.bimester;
    document.getElementById('ex-chapter').textContent = "CH " + data.chapter;
    
    document.getElementById('menu-grade-label').textContent = data.grade.toUpperCase();
    document.getElementById('menu-bimester').textContent = "Bimester " + data.bimester;
    document.getElementById('menu-chapter').textContent = "Chapter " + data.chapter;

    generateRandomSet(); 
    renderSidebar();
    startTimer();
    showPage(1);
    setupNavListeners();
};

// --- 2. RANDOMIZER (STATIC SHUFFLE) ---

function generateRandomSet() {
    const now = Date.now();
    const interval = 15000;
    const cycle = 480;
    const seed = Math.floor(now / interval) % cycle;
    let localSeed = seed;
    const random = () => { const x = Math.sin(localSeed++) * 10000; return x - Math.floor(x); };

    activeSet = { simple: [], context: [] };

    // Helper to shuffle an array deterministically
    const shuffle = (arr) => [...arr].sort(() => random() - 0.5);

    // SIMPLE TYPES (1-10)
    for (let i = 1; i <= 10; i++) {
        if (!exData.simplePool[i]) continue;
        let count = (i === 4) ? 6 : (i === 6) ? 1 : 3;
        
        // 1. Pick random items
        const rawSelection = shuffle(exData.simplePool[i]).slice(0, count);
        
        // 2. Pre-shuffle internal options/words & Calculate Max Scores
        activeSet[i] = rawSelection.map(item => {
            let processed = { ...item }; // Clone
            
            if (i === 1) { // Unscramble Sentences
                processed.shuffledWords = shuffle(item.words);
            }
            else if (i === 2) { // Unscramble Dialogue
                processed.shuffledLines = shuffle(item.lines.map((txt, idx) => ({ txt, orgIdx: idx })));
            }
            else if ([3, 4, 7, 8, 9].includes(i)) { // MCQs
                processed.shuffledOptions = shuffle(item.options);
            }
            else if (i === 6) { // Match (Shuffle right column only)
                processed.shuffledRight = shuffle(item.pairs.map(p => p.b));
            }
            
            // CALCULATE MAX SCORE
            if(i === 6) maxPageScores[i] += 5; // 5 pairs
            else if(i === 10) maxPageScores[i] += 2; // 2 blanks
            else maxPageScores[i] += 1; // Standard 1 pt

            return processed;
        });
    }

    // CONTEXT TYPES (11-15)
    for (let i = 11; i <= 15; i++) {
        if (!exData.contextPool[i]) continue;
        const selected = shuffle(exData.contextPool[i])[0];
        activeSet[i] = { ...selected }; 
        maxPageScores[i] = 5; // Context exercises always have 5 questions/blanks
    }
}

// --- 3. RENDERING ---

function renderExercisePage(pageNum) {
    // If we are trying to render page 16, show results
    if (pageNum === 16) return renderResultPage();

    const data = activeSet[pageNum];
    const isDone = pageStatus[pageNum];
    const wrapperClass = isDone ? 'disabled-mode' : '';
    
    let html = `<div class="area-box ${wrapperClass}" data-page="${pageNum}">`;
    html += `<h3>${getExerciseTitle(pageNum)}</h3>`;

    if (pageNum <= 10) {
        if (pageNum === 6) {
            html += renderType6(data[0], 0);
        } else {
            data.forEach((item, idx) => {
                html += `<div class="question-block" id="q-${pageNum}-${idx}">`;
                html += `<p class="q-number">Q${idx + 1}</p>`;
                if (pageNum === 1) html += renderType1(item, idx);
                else if (pageNum === 2) html += renderType2(item, idx);
                else if (pageNum === 3) html += renderType3(item, idx);
                else if (pageNum === 4) html += renderType4(item, idx);
                else if (pageNum === 5) html += renderType5(item, idx);
                else if (pageNum === 7) html += renderType7(item, idx);
                else if (pageNum === 8) html += renderType8(item, idx);
                else if (pageNum === 9) html += renderType9(item, idx);
                else if (pageNum === 10) html += renderType10(item, idx);
                html += `</div>`;
            });
        }
    } else {
        html += `<div class="context-container">`;
        if (pageNum === 11) html += renderType11(data);
        else if (pageNum === 12) html += renderType12(data);
        else if (pageNum === 13) html += renderType13(data);
        else if (pageNum === 14) html += renderType14(data);
        else if (pageNum === 15) html += renderType15(data);
        html += `</div>`;
    }

    if (!isDone) html += `<button class="btn check-btn" onclick="checkCurrentPage(${pageNum})">CHECK ANSWERS</button>`;
    else html += `<div class="page-complete-mark">✓ Completed</div>`;
    
    html += `</div>`;
    return html;
}

// --- RENDERERS ---

function renderType1(item, idx) {
    return `<div class="word-bank" id="wb-${idx}">${item.shuffledWords.map(w => `<button class="word-btn" onclick="moveWord(this, 'drop-${idx}')">${w}</button>`).join('')}</div>
            <div class="drop-zone" id="drop-${idx}" data-answer="${item.correct}"></div>
            <button class="reset-link" onclick="resetType1('wb-${idx}', 'drop-${idx}')">Reset</button>`;
}
function renderType2(item, idx) {
    let html = `<div class="dialogue-scramble" data-correct-order="${item.order.join(',')}">`;
    item.shuffledLines.forEach(l => {
        html += `<div class="ds-row"><input type="number" class="ds-input" data-original-index="${l.orgIdx}" min="1" max="${item.lines.length}"><span>${l.txt}</span></div>`;
    });
    return html + `</div>`;
}
function renderType3(item, idx) {
    return `<p>${item.q}</p><div class="options-container" data-answer="${item.a}">${item.shuffledOptions.map(opt => `<button class="option" onclick="selectOpt(this)">${opt}</button>`).join('')}</div>`;
}
function renderType4(item, idx) {
    return `<p class="sentence-display">${item.sent.replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')}</p>
            <div class="options-container" data-answer="${item.a}">${item.shuffledOptions.map(opt => `<button class="option" onclick="selectOpt(this)">${opt}</button>`).join('')}</div>
            <div class="def-hidden">Definition: ${item.def}</div>`;
}
function renderType5(item, idx) {
    return `<p>${item.sent.replace(/\*\*(.*?)\*\*/g, '<span class="error-highlight">$1</span>')}</p><input type="text" class="text-input" placeholder="Type correction..." data-answer="${item.correct}">`;
}
function renderType6(item, idx) {
    const left = item.pairs.map(p => p.a);
    const right = item.shuffledRight;
    let html = `<div class="matching-grid">`;
    left.forEach((l, i) => {
        const correctB = item.pairs.find(p => p.a === l).b;
        html += `<div class="match-row"><div class="col-a">${l}</div><select class="match-select" data-correct="${correctB}"><option value="">Select...</option>${right.map(r => `<option value="${r}">${r}</option>`).join('')}</select></div>`;
    });
    return html + `</div>`;
}
function renderType7(item, idx) { return renderType3(item, idx); }
function renderType8(item, idx) {
    return `<p>${item.sent.replace(/\*\*(.*?)\*\*/g, '<span class="error-highlight">$1</span>')}</p><p>Choose correct word:</p><div class="options-container" data-answer="${item.a}">${item.shuffledOptions.map(opt => `<button class="option" onclick="selectOpt(this)">${opt}</button>`).join('')}</div>`;
}
function renderType9(item, idx) {
    return `<div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div><p>${item.q}</p><div class="options-container" data-answer="${item.a}">${item.shuffledOptions.map(opt => `<button class="option" onclick="selectOpt(this)">${opt}</button>`).join('')}</div>`;
}
function renderType10(item, idx) {
    let html = `<div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div><p>`;
    item.sent.split('___').forEach((part, i, arr) => {
        html += part;
        if (i < arr.length - 1) html += `<input type="text" class="blank-input" data-answer="${item.blanks[i]}">`;
    });
    return html + `</p>`;
}
function renderType11(item) {
    let html = `<h4>${item.title}</h4><div class="dialogue-box">`;
    item.lines.forEach(line => {
        const inputHTML = `<select class="ctx-select" data-answer="${line.a}"><option value="">...</option>${line.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select>`;
        html += `<p><strong>${line.speaker}:</strong> ${line.text.replace('___', inputHTML)}</p>`;
    });
    return html + `</div>`;
}
function renderType12(item) {
    let html = `<h4>${item.title}</h4><div class="reading-box">${item.text}</div>`;
    item.questions.forEach((q, i) => html += `<div class="ctx-question"><p>${i+1}. ${q.q}</p><div class="options-container" data-answer="${q.a}">${q.options.map(opt => `<button class="option" onclick="selectOpt(this)">${opt}</button>`).join('')}</div></div>`);
    return html;
}
function renderType13(item) {
    let html = `<h4>${item.title}</h4><div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div>`;
    item.questions.forEach((q, i) => html += `<div class="ctx-question"><p>${i+1}. ${q.q}</p><div class="options-container" data-answer="${q.a}">${q.options.map(opt => `<button class="option" onclick="selectOpt(this)">${opt}</button>`).join('')}</div></div>`);
    return html;
}
function renderType14(item) {
    return `<h4>${item.title}</h4><div class="reading-box">${item.text.replace(/\[(\d+)\] \((.*?)\)/g, (m, n, opts) => `<select class="ctx-select" data-answer="${item.answers[parseInt(n)-1]}"><option value="">...</option>${opts.split('/').map(o => `<option value="${o}">${o}</option>`).join('')}</select>`)}</div>`;
}
function renderType15(item) {
    return `<h4>${item.title}</h4><div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div><div class="reading-box">${item.text.replace(/\[(\d+)\]/g, (m, n) => `<input type="text" class="blank-input" data-answer="${item.answers[parseInt(n)-1]}">`)}</div>`;
}

// --- CHECKING LOGIC ---

window.checkCurrentPage = function(pageNum) {
    const pageDiv = document.querySelector(`.area-box[data-page="${pageNum}"]`);
    let score = 0;
    
    const validate = (el, isCorrect) => {
        if (isCorrect) { el.classList.add('correct-field'); score++; }
        else { el.classList.add('incorrect-field'); }
    };

    if(pageNum === 1) pageDiv.querySelectorAll('.drop-zone').forEach(z => validate(z, z.innerText === z.dataset.answer));
    else if(pageNum === 2) pageDiv.querySelectorAll('.ds-input').forEach(inp => {
        const order = inp.closest('.dialogue-scramble').dataset.correctOrder.split(',').map(Number);
        validate(inp, parseInt(inp.value) === (order.indexOf(parseInt(inp.dataset.originalIndex)) + 1));
    });
    else if([3,4,7,8,9,12,13].includes(pageNum)) {
        pageDiv.querySelectorAll('.options-container').forEach(c => {
            const sel = c.querySelector('.option.selected');
            if(sel && sel.innerText === c.dataset.answer) validate(sel, true);
            else if(sel) validate(sel, false);
            c.querySelectorAll('.option').forEach(o => { if(o.innerText === c.dataset.answer) o.style.border="2px solid var(--success-green)"; });
        });
        if(pageNum===4) pageDiv.querySelectorAll('.def-hidden').forEach(d=>d.style.display='block');
    }
    else if([5,10,15].includes(pageNum)) pageDiv.querySelectorAll('input').forEach(i => validate(i, i.value.trim().toLowerCase() === i.dataset.answer.toLowerCase()));
    else if([6,11,14].includes(pageNum)) pageDiv.querySelectorAll('select').forEach(s => validate(s, s.value === s.dataset.answer));

    pageScores[pageNum] = score;
    pageStatus[pageNum] = true;
    pageDiv.classList.add('disabled-mode');
    pageDiv.querySelector('.check-btn').remove();
    pageDiv.insertAdjacentHTML('beforeend', `<div class="feedback-msg">Score: ${score} / ${maxPageScores[pageNum]}</div>`);
    
    renderSidebar();
    
    const allDone = pageStatus.slice(1).every(s => s === true);
    if(allDone) {
        clearInterval(timerInterval);
        isSessionFinished = true;
        document.getElementById('next-btn').innerHTML = "🏁 View Results";
        // Also enable the next button in case we are on page 15
        document.getElementById('next-btn').disabled = false;
    }
};

// --- NAVIGATION & RESULTS ---

function showPage(p) {
    // Safety check
    if(p < 1 || p > 16) return;
    currentPage = p;
    
    const container = document.getElementById('lesson-content');
    
    if (p === 16) {
        container.innerHTML = renderResultPage();
        // Force the result page to be visible by setting display block inline
        const resPage = document.getElementById('result-page');
        if(resPage) resPage.style.display = 'block';
        
        document.getElementById('next-btn').disabled = true;
    } else {
        container.innerHTML = renderExercisePage(p);
        document.getElementById('next-btn').disabled = false;
        
        const nextBtn = document.getElementById('next-btn');
        if (isSessionFinished) {
            nextBtn.innerText = (p === 15) ? "🏁 View Results" : "→";
            nextBtn.onclick = () => showPage(p + 1);
        } else {
            nextBtn.innerText = "→";
            nextBtn.onclick = () => {
                if(p === 15 && !isSessionFinished) alert("Please complete all exercises first!");
                else showPage(p + 1);
            };
        }
    }
    
    document.getElementById('prev-btn').disabled = (p === 1);
    renderSidebar();
    
    document.getElementById('slide-menu').classList.remove('active');
    document.getElementById('menu-overlay').style.display = 'none';
}

function renderResultPage() {
    let totalScore = pageScores.reduce((a, b) => a + b, 0);
    let maxScore = maxPageScores.reduce((a, b) => a + b, 0);
    let percentage = (maxScore > 0) ? Math.round((totalScore / maxScore) * 100) : 0;
    const timeTaken = document.getElementById('global-timer').textContent;

    // Added style="display:block" to override CSS hiding
    return `
    <div id="result-page" style="display:block; text-align: center; padding: 40px; animation: fadeIn 0.5s;">
        <h2 style="color:var(--primary-blue); margin-bottom: 30px; font-size: 2rem;">SESSION COMPLETE</h2>
        
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 40px; flex-wrap: wrap;">
            <div class="stat-box" style="width: 180px; padding: 20px;">
                <div class="stat-num" style="color: var(--success-green);">${percentage}%</div>
                <div style="color: #666; font-weight: 700; margin-top: 10px;">ACCURACY</div>
                <div style="font-size: 0.8rem; color: #999;">${totalScore} / ${maxScore} pts</div>
            </div>
            <div class="stat-box" style="width: 180px; padding: 20px;">
                <div class="stat-num" style="color: var(--primary-blue);">${timeTaken}</div>
                <div style="color: #666; font-weight: 700; margin-top: 10px;">TOTAL TIME</div>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
            <button class="btn" onclick="location.reload()" style="background: linear-gradient(135deg, #FF8C42 0%, #FF6B10 100%); width: 250px;">🔄 START NEW SESSION</button>
            <a href="index.html?lesson=home" class="btn" style="background: white; color: var(--primary-blue); border: 2px solid var(--primary-blue); width: 250px; text-decoration: none; display: flex; align-items: center; justify-content: center; box-shadow: none;">🏠 HOME DASHBOARD</a>
        </div>
    </div>`;
}

// Helpers
function renderSidebar() {
    const list = document.getElementById('nav-list');
    list.innerHTML = '';
    const labels = ["Unscramble Sentences", "Unscramble Dialogues", "Quick Questions", "Find Meaning", "Correct Sentences", "Match Sentences", "Best Answer", "Incorrect Vocabulary", "Listen & Answer", "Complete Sentences", "Complete Dialogue", "Read & Answer", "Listen & Answer (Ctx)", "Complete Text", "Listen & Complete"];
    labels.forEach((label, idx) => {
        const p = idx + 1;
        const check = pageStatus[p] ? 'completed' : '';
        const active = (currentPage === p) ? 'style="color:var(--primary-blue)"' : '';
        list.innerHTML += `<li><span class="nav-step-item ${check}" ${active} onclick="showPage(${p})"><span style="color:var(--accent-orange)">${p}.</span> ${label}</span></li>`;
    });
}
function setupNavListeners() {
    document.getElementById('prev-btn').onclick = () => showPage(currentPage - 1);
    const menu = document.getElementById('slide-menu'), toggle = document.getElementById('menu-toggle'), overlay = document.getElementById('menu-overlay'), closeBtn = document.getElementById('menu-close-btn');
    const toggleMenu = () => { menu.classList.toggle('active'); overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; };
    toggle.onclick = toggleMenu; closeBtn.onclick = toggleMenu; overlay.onclick = toggleMenu;
}
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const d = Math.floor((Date.now() - startTime)/1000);
        const m = Math.floor(d/60); const s = d%60;
        document.getElementById('global-timer').textContent = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
    }, 1000);
}
window.moveWord = function(btn, zoneId) { document.getElementById(zoneId).appendChild(btn); };
window.resetType1 = function(bankId, zoneId) { const b=document.getElementById(bankId); const z=document.getElementById(zoneId); while(z.firstChild) b.appendChild(z.firstChild); };
window.selectOpt = function(btn) { btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
function getExerciseTitle(n) { const t = ["Unscramble Sentences", "Unscramble Dialogues", "Quick Questions", "Find Meaning", "Correct Sentences", "Match Sentences", "Best Answer", "Incorrect Vocabulary", "Listen & Answer", "Complete Sentences", "Complete Dialogue", "Read & Answer", "Listen & Answer (Ctx)", "Complete Text", "Listen & Complete"]; return t[n-1]; }