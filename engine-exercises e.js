/**
 * ENGINE-EXERCISES.js
 * V5.0 - Visual Style Match & Interaction Fixes
 */

let exData = null;
let activeSet = {};      
let currentPage = 1;
let totalPages = 15;
let pageStatus = new Array(16).fill(false); 
let pageScores = new Array(16).fill(0);     
let maxPageScores = new Array(16).fill(0);  
let timerInterval;
let startTime;
let isSessionFinished = false;

// State for Matching Exercise
let matchState = { selected: null, pairs: [] };

// --- 1. INITIALIZATION ---

window.initExercise = function(data) {
    exData = data;
    
    // Header Info
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

// --- 2. RANDOMIZER ---

function generateRandomSet() {
    const now = Date.now();
    const interval = 15000;
    const cycle = 480; 
    const seed = Math.floor(now / interval) % cycle;
    let localSeed = seed;
    const random = () => { const x = Math.sin(localSeed++) * 10000; return x - Math.floor(x); };

    activeSet = { simple: [], context: [] };
    const shuffle = (arr) => [...arr].sort(() => random() - 0.5);

    // SIMPLE TYPES (1-10)
    for (let i = 1; i <= 10; i++) {
        if (!exData.simplePool[i]) continue;
        let count = (i === 4) ? 6 : (i === 6) ? 1 : 3;
        
        const rawSelection = shuffle(exData.simplePool[i]).slice(0, count);
        
        activeSet[i] = rawSelection.map(item => {
            let processed = { ...item };
            
            if (i === 1) processed.shuffledWords = shuffle(item.words);
            else if (i === 2) processed.shuffledLines = shuffle(item.lines); // Just shuffle lines
            else if ([3, 4, 7, 8, 9].includes(i)) processed.shuffledOptions = shuffle(item.options);
            else if (i === 6) processed.shuffledRight = shuffle(item.pairs.map(p => p.b));
            
            // Max Scores
            if(i === 6) maxPageScores[i] += 5; 
            else if(i === 10) maxPageScores[i] += 2; 
            else maxPageScores[i] += 1; 

            return processed;
        });
    }

    // CONTEXT TYPES (11-15)
    for (let i = 11; i <= 15; i++) {
        if (!exData.contextPool[i]) continue;
        const selected = shuffle(exData.contextPool[i])[0];
        activeSet[i] = { ...selected }; 
        maxPageScores[i] = 5; 
    }
}

// --- 3. RENDERING ---

function renderExercisePage(pageNum) {
    if (pageNum === 16) return renderResultPage();

    const data = activeSet[pageNum];
    const isDone = pageStatus[pageNum];
    const wrapperClass = isDone ? 'disabled-mode' : '';
    
    let html = `<div class="area-box ${wrapperClass}" data-page="${pageNum}">`;
    html += `<h3>${getExerciseTitle(pageNum)}</h3>`;

    if (pageNum <= 10) {
        if (pageNum === 6) {
            html += renderType6(data[0], 0); // Matching
        } else {
            data.forEach((item, idx) => {
                html += `<div class="question-block" id="q-${pageNum}-${idx}">`;
                html += `<p class="q-number" style="color:var(--accent-orange); font-weight:bold; margin-bottom:5px;">Question ${idx + 1}</p>`;
                if (pageNum === 1) html += renderType1(item, idx);
                else if (pageNum === 2) html += renderType2(item, idx);
                else if (pageNum === 3) html += renderType3(item, idx);
                else if (pageNum === 4) html += renderType4(item, idx);
                else if (pageNum === 5) html += renderType5(item, idx);
                else if (pageNum === 7) html += renderType7(item, idx);
                else if (pageNum === 8) html += renderType8(item, idx);
                else if (pageNum === 9) html += renderType9(item, idx);
                else if (pageNum === 10) html += renderType10(item, idx);
                html += `<div class="extra-feedback" style="display:none; margin-top:10px; padding:10px; background:#eafaf1; color:#0f5132; border-radius:5px;"></div>`;
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
    else html += `<div class="page-complete-mark" style="text-align:center; color:var(--success-green); font-weight:bold; font-size:1.2rem; margin-top:20px;">✓ Exercise Completed</div>`;
    
    html += `</div>`;
    return html;
}

// --- SPECIFIC RENDERERS ---

// 1. Unscramble Sentences (Word Bank style)
function renderType1(item, idx) {
    return `
    <div class="word-bank" id="wb-1-${idx}">
        ${item.shuffledWords.map(w => `<button class="word-btn" onclick="moveWord(this, 'drop-1-${idx}')">${w}</button>`).join('')}
    </div>
    <div class="drop-zone" id="drop-1-${idx}" data-answer="${item.correct}" style="min-height:50px;"></div>
    <div style="text-align:right"><button class="reset-link" onclick="resetContainer('wb-1-${idx}', 'drop-1-${idx}')">Reset</button></div>
    `;
}

// 2. Unscramble Dialogues (Vertical Drop Zone)
function renderType2(item, idx) {
    // Generate the correct answer string for validation later
    const correctOrderString = item.order.map(i => item.lines[i]).join('|'); 
    
    return `
    <div class="word-bank" id="wb-2-${idx}">
        ${item.shuffledLines.map(line => `<button class="word-btn" style="display:block; width:100%; text-align:left; margin-bottom:5px;" onclick="moveWord(this, 'drop-2-${idx}')">${line}</button>`).join('')}
    </div>
    <div class="drop-zone vertical" id="drop-2-${idx}" data-answer="${correctOrderString}" style="min-height:100px; display:flex; flex-direction:column;"></div>
    <div style="text-align:right"><button class="reset-link" onclick="resetContainer('wb-2-${idx}', 'drop-2-${idx}')">Reset</button></div>
    `;
}

// 3. Quick Questions (MCQ)
function renderType3(item, idx) {
    return `<p><strong>${item.q}</strong></p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => `<div class="option" onclick="selectOpt(this)">${opt}</div>`).join('')}
            </div>`;
}

// 4. Find Meaning
function renderType4(item, idx) {
    return `<p class="sentence-display" style="font-size:1.1rem; margin-bottom:15px;">${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="background:var(--selected-orange); padding:2px 5px; border-radius:4px;">$1</span>')}</p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => `<div class="option" onclick="selectOpt(this)">${opt}</div>`).join('')}
            </div>
            <div class="def-hidden" style="display:none; margin-top:10px; font-style:italic; color:#555;"><strong>Definition:</strong> ${item.def}</div>`;
}

// 5. Correct Sentence
function renderType5(item, idx) {
    return `<p style="margin-bottom:10px;">${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="text-decoration:underline; text-decoration-color:red; text-decoration-style:wavy;">$1</span>')}</p>
            <input type="text" class="drill-input" placeholder="Type correction..." data-answer="${item.correct}" style="width:100%; padding:10px; border:2px solid #eee; border-radius:5px;">`;
}

// 6. Match Sentences (Click-to-Pair Logic)
function renderType6(item, idx) {
    const left = item.pairs.map(p => p.a);
    const right = item.shuffledRight;
    
    // We render two columns. 
    // Left items get data-val = "pair_index"
    // Right items we need to find which pair they belong to for validation
    
    let html = `<div class="matching-container" id="match-container-${idx}">
        <div class="match-column">`;
    
    left.forEach((l, i) => {
        // Unique ID for each item to handle selection
        html += `<div class="match-item left-item" id="L-${i}" data-col="left" data-pair-id="${i}" onclick="handleMatchClick(this)">${l}</div>`;
    });
    
    html += `</div><div class="match-column">`;
    
    right.forEach((r, i) => {
        // Find correct pair index
        const correctPairIndex = item.pairs.findIndex(p => p.b === r);
        html += `<div class="match-item right-item" id="R-${i}" data-col="right" data-pair-id="${correctPairIndex}" onclick="handleMatchClick(this)">${r}</div>`;
    });

    html += `</div></div>`;
    return html;
}

// 7, 8, 9 (MCQ Variations)
function renderType7(item, idx) { return renderType3(item, idx); }

function renderType8(item, idx) {
    return `<p>${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="color:red; font-weight:bold;">$1</span>')}</p>
            <p>Choose the correct word:</p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => `<div class="option" onclick="selectOpt(this)">${opt}</div>`).join('')}
            </div>`;
}

function renderType9(item, idx) {
    return `<div class="audio-wrapper" style="margin-bottom:15px;"><audio controls src="${item.audio}"></audio></div>
            <p><strong>${item.q}</strong></p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => `<div class="option" onclick="selectOpt(this)">${opt}</div>`).join('')}
            </div>`;
}

// 10. Complete Sentences
function renderType10(item, idx) {
    let html = `<div class="audio-wrapper" style="margin-bottom:10px;"><audio controls src="${item.audio}"></audio></div><p style="line-height:2.5;">`;
    item.sent.split('___').forEach((part, i, arr) => {
        html += part;
        if (i < arr.length - 1) html += `<input type="text" class="drill-input inline-input" data-answer="${item.blanks[i]}" style="width:100px; padding:5px; border-bottom:2px solid var(--primary-blue); border-top:none; border-left:none; border-right:none; text-align:center;">`;
    });
    return html + `</p>`;
}

// Context Types
function renderType11(item) {
    let html = `<h4>${item.title}</h4><div class="dialogue-box" style="background:#f9f9f9; padding:20px; border-radius:10px;">`;
    item.lines.forEach(line => {
        const inputHTML = `<select class="drill-select" data-answer="${line.a}" style="padding:5px; border-radius:5px; border:1px solid #ccc;"><option value="">...</option>${line.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select>`;
        html += `<p style="margin-bottom:10px;"><strong>${line.speaker}:</strong> ${line.text.replace('___', inputHTML)}</p>`;
    });
    return html + `</div>`;
}

function renderType12(item) {
    let html = `<h4>${item.title}</h4><div class="reading-box" style="padding:15px; border-left:4px solid var(--primary-blue); background:#fff; margin-bottom:20px;">${item.text}</div>`;
    item.questions.forEach((q, i) => {
        html += `<div class="question-block"><p><strong>${i+1}. ${q.q}</strong></p>
        <div class="options-container" data-answer="${q.a}">
            ${q.options.map(opt => `<div class="option" onclick="selectOpt(this)">${opt}</div>`).join('')}
        </div><div class="extra-feedback" style="display:none; color:green; margin-top:5px;">Correct Answer: <b>${q.a}</b></div></div>`;
    });
    return html;
}

function renderType13(item) {
    let html = `<h4>${item.title}</h4><div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div>`;
    item.questions.forEach((q, i) => {
        html += `<div class="question-block"><p><strong>${i+1}. ${q.q}</strong></p>
        <div class="options-container" data-answer="${q.a}">
            ${q.options.map(opt => `<div class="option" onclick="selectOpt(this)">${opt}</div>`).join('')}
        </div><div class="extra-feedback" style="display:none; color:green; margin-top:5px;">Correct Answer: <b>${q.a}</b></div></div>`;
    });
    return html;
}

function renderType14(item) {
    return `<h4>${item.title}</h4><div class="reading-box" style="line-height:2;">${item.text.replace(/\[(\d+)\] \((.*?)\)/g, (m, n, opts) => `<select class="drill-select" data-answer="${item.answers[parseInt(n)-1]}" style="margin:0 5px; padding:5px;"><option value="">...</option>${opts.split('/').map(o => `<option value="${o}">${o}</option>`).join('')}</select>`)}</div>`;
}

function renderType15(item) {
    return `<h4>${item.title}</h4><div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div><div class="reading-box" style="line-height:2;">${item.text.replace(/\[(\d+)\]/g, (m, n) => `<input type="text" class="drill-input" data-answer="${item.answers[parseInt(n)-1]}" style="width:100px; border:none; border-bottom:2px solid #333; text-align:center; background:transparent;">`)}</div>`;
}


// --- INTERACTION LOGIC (The "Mechanisms") ---

window.moveWord = function(btn, zoneId) {
    const zone = document.getElementById(zoneId);
    const bank = btn.parentElement.id.includes('wb') ? btn.parentElement : document.getElementById(btn.parentElement.id.replace('drop', 'wb'));
    
    // Toggle location
    if (btn.parentElement === zone) {
        // Move back to bank
        // Find original bank based on ID structure 'wb-TYPE-IDX'
        const bankId = zone.id.replace('drop', 'wb');
        document.getElementById(bankId).appendChild(btn);
    } else {
        zone.appendChild(btn);
    }
};

window.resetContainer = function(bankId, zoneId) {
    const bank = document.getElementById(bankId);
    const zone = document.getElementById(zoneId);
    while(zone.firstChild) bank.appendChild(zone.firstChild);
};

window.selectOpt = function(btn) {
    // Only allow selection if not disabled
    if (btn.closest('.area-box').classList.contains('disabled-mode')) return;
    
    const container = btn.parentElement;
    container.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

// --- MATCHING MECHANISM (Click-to-Pair) ---
let firstSelection = null;

window.handleMatchClick = function(el) {
    const container = el.closest('.matching-container');
    if (container.closest('.area-box').classList.contains('disabled-mode')) return; // locked

    // If already paired, ignore
    if (el.classList.contains('paired')) return;

    // Deselect if clicking same item
    if (firstSelection === el) {
        el.classList.remove('selected');
        firstSelection = null;
        return;
    }

    // 1. First Click
    if (!firstSelection) {
        firstSelection = el;
        el.classList.add('selected');
        return;
    }

    // 2. Second Click
    // Must be different columns
    if (firstSelection.dataset.col === el.dataset.col) {
        // Switch selection to new item in same column
        firstSelection.classList.remove('selected');
        firstSelection = el;
        el.classList.add('selected');
        return;
    }

    // 3. Form a Pair
    // We connect them visually by ID mapping.
    // We store the pair data on the elements for checking later.
    
    const left = firstSelection.dataset.col === 'left' ? firstSelection : el;
    const right = firstSelection.dataset.col === 'right' ? firstSelection : el;
    
    // Check if previously paired items need clearing (simplified: just visual link)
    // Mark as paired
    left.classList.remove('selected');
    right.classList.remove('selected');
    left.classList.add('paired');
    right.classList.add('paired');
    
    // Assign a unique "connection ID" to check validity visually
    const connId = Date.now();
    left.dataset.connId = connId;
    right.dataset.connId = connId;
    
    // Color code them to show connection (Orange by default until checked)
    left.style.backgroundColor = '#ffe0b2';
    left.style.borderColor = '#ff9800';
    right.style.backgroundColor = '#ffe0b2';
    right.style.borderColor = '#ff9800';

    firstSelection = null;
};


// --- CHECKING LOGIC ---

window.checkCurrentPage = function(pageNum) {
    const pageDiv = document.querySelector(`.area-box[data-page="${pageNum}"]`);
    let score = 0;
    
    // Helper to visualize
    const markCorrect = (el) => {
        el.classList.add('correct');
        el.style.backgroundColor = '#d4edda';
        el.style.borderColor = '#28a745';
        score++;
    };
    const markIncorrect = (el, correctVal) => {
        el.classList.add('incorrect');
        el.style.backgroundColor = '#f8d7da';
        el.style.borderColor = '#dc3545';
        if(correctVal) {
            // Add visual hint
            const hint = document.createElement('span');
            hint.className = "correction-hint";
            hint.style.color = "#dc3545";
            hint.style.fontSize = "0.8rem";
            hint.style.marginLeft = "10px";
            hint.innerHTML = ` ➜ ${correctVal}`;
            el.after(hint);
        }
    };

    // 1. Unscramble Sentence
    if (pageNum === 1) {
        pageDiv.querySelectorAll('.drop-zone').forEach(zone => {
            const attempt = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText).join(' ');
            // Strict comparison: trim and normalize spaces
            if (attempt.trim() === zone.dataset.answer.trim()) {
                markCorrect(zone);
            } else {
                markIncorrect(zone);
                // Show Correct Answer
                const fb = zone.parentElement.querySelector('.extra-feedback');
                if(fb) { fb.style.display = 'block'; fb.innerHTML = `Correct: <b>${zone.dataset.answer}</b>`; }
                // Create feedback if inside block not supported by extra-feedback div
                else {
                   let d = document.createElement('div');
                   d.style.color = 'green'; d.innerHTML = `Correct: <b>${zone.dataset.answer}</b>`;
                   zone.after(d);
                }
            }
        });
    }

    // 2. Unscramble Dialogue (Vertical)
    else if (pageNum === 2) {
        pageDiv.querySelectorAll('.drop-zone.vertical').forEach(zone => {
            const attempt = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText).join('|');
            if (attempt === zone.dataset.answer) {
                markCorrect(zone);
            } else {
                markIncorrect(zone);
                // Show Correct order
                let d = document.createElement('div');
                d.className = "correct-answer-box";
                d.style.marginTop = "10px";
                d.style.color = "var(--primary-blue)";
                d.innerHTML = `<strong>Correct Order:</strong><br>${zone.dataset.answer.split('|').join('<br>')}`;
                zone.after(d);
            }
        });
    }

    // 6. Matching (Pair ID Check)
    else if (pageNum === 6) {
        // Iterate over LEFT items
        pageDiv.querySelectorAll('.match-item[data-col="left"]').forEach(left => {
            const connId = left.dataset.connId;
            if (!connId) return; // Unpaired
            
            // Find connected right
            const right = pageDiv.querySelector(`.match-item[data-col="right"][data-conn-id="${connId}"]`);
            if (right) {
                // Check if pair IDs match
                if (left.dataset.pairId === right.dataset.pairId) {
                    markCorrect(left);
                    markCorrect(right);
                } else {
                    markIncorrect(left);
                    markIncorrect(right);
                }
            }
        });
    }

    // MCQs (3, 4, 7, 8, 9, 12, 13)
    else if ([3, 4, 7, 8, 9, 12, 13].includes(pageNum)) {
        pageDiv.querySelectorAll('.options-container').forEach(cont => {
            const selected = cont.querySelector('.option.selected');
            const correctAns = cont.dataset.answer;
            
            // 1. Highlight the CORRECT option green regardless of selection
            const correctOpt = Array.from(cont.querySelectorAll('.option')).find(o => o.innerText === correctAns);
            if(correctOpt) {
                correctOpt.classList.add('correct-answer-highlight'); // Style this class
                correctOpt.style.border = "2px solid #28a745";
                correctOpt.style.backgroundColor = "#d4edda";
                // Force checkmark
                correctOpt.innerHTML += ' ✓';
            }

            // 2. Handle User Selection
            if (selected) {
                if (selected.innerText === correctAns) {
                    score++; // Correct
                } else {
                    selected.style.backgroundColor = "#f8d7da";
                    selected.style.borderColor = "#dc3545";
                    selected.innerHTML += ' ✗';
                }
            }
        });
        // Show definitions for type 4
        pageDiv.querySelectorAll('.def-hidden').forEach(d => d.style.display = 'block');
        // Show extra feedback blocks
        pageDiv.querySelectorAll('.extra-feedback').forEach(f => f.style.display = 'block');
    }

    // Text Inputs (5, 10, 15)
    else if ([5, 10, 15].includes(pageNum)) {
        pageDiv.querySelectorAll('input').forEach(inp => {
            const val = inp.value.trim().toLowerCase();
            const ans = inp.dataset.answer.toLowerCase();
            if (val === ans) {
                markCorrect(inp);
            } else {
                markIncorrect(inp);
                // Show hint next to input
                const span = document.createElement('span');
                span.style.color = 'green';
                span.style.fontWeight = 'bold';
                span.style.marginLeft = '5px';
                span.innerText = `(${inp.dataset.answer})`;
                inp.after(span);
            }
        });
    }

    // Dropdowns (11, 14)
    else if ([11, 14].includes(pageNum)) {
        pageDiv.querySelectorAll('select').forEach(sel => {
            if (sel.value === sel.dataset.answer) {
                markCorrect(sel);
            } else {
                markIncorrect(sel);
                // Show hint
                const span = document.createElement('span');
                span.style.color = 'green';
                span.style.fontWeight = 'bold';
                span.style.marginLeft = '5px';
                span.innerText = `(${sel.dataset.answer})`;
                sel.after(span);
            }
        });
    }

    // Finalize
    pageScores[pageNum] = score;
    pageStatus[pageNum] = true;
    pageDiv.classList.add('disabled-mode');
    
    // Remove check button
    const btn = pageDiv.querySelector('.check-btn');
    if(btn) btn.remove();

    renderSidebar();

    // Check completion
    const allDone = pageStatus.slice(1).every(s => s === true);
    if(allDone) {
        clearInterval(timerInterval);
        isSessionFinished = true;
        document.getElementById('next-btn').innerHTML = "🏁 View Results";
        document.getElementById('next-btn').disabled = false;
    }
};

// --- NAVIGATION & RESULTS ---

function showPage(p) {
    if(p < 1 || p > 16) return;
    currentPage = p;
    
    const container = document.getElementById('lesson-content');
    
    if (p === 16) {
        container.innerHTML = renderResultPage();
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
window.moveWord = function(btn, zoneId) { 
    const zone = document.getElementById(zoneId);
    // Find bank logic adjusted for both Types 1 and 2
    // ID structure: wb-TYPE-IDX or drop-TYPE-IDX
    const isBank = btn.parentElement.id.includes('wb');
    const target = isBank ? zone : document.getElementById(btn.parentElement.id.replace('drop', 'wb'));
    target.appendChild(btn);
};
window.resetContainer = function(bankId, zoneId) { 
    const b=document.getElementById(bankId); 
    const z=document.getElementById(zoneId); 
    while(z.firstChild) b.appendChild(z.firstChild); 
};
window.selectOpt = function(btn) { 
    if (btn.closest('.area-box').classList.contains('disabled-mode')) return;
    btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected')); 
    btn.classList.add('selected'); 
};
function getExerciseTitle(n) { const t = ["Unscramble Sentences", "Unscramble Dialogues", "Quick Questions", "Find Meaning", "Correct Sentences", "Match Sentences", "Best Answer", "Incorrect Vocabulary", "Listen & Answer", "Complete Sentences", "Complete Dialogue", "Read & Answer", "Listen & Answer (Ctx)", "Complete Text", "Listen & Complete"]; return t[n-1]; }