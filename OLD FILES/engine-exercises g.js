/**
 * ENGINE-EXERCISES.js
 * V8.0 - Stable Release
 * Fixes: Persistence, Highlights (Green/Red), and Checking Logic
 */

let exData = null;
let activeSet = {};      
let userState = {};      // Stores answers: { pageNum: { idx: { ... } } }
let currentPage = 1;
let totalPages = 15;
let pageStatus = new Array(16).fill(false); 
let pageScores = new Array(16).fill(0);     
let maxPageScores = new Array(16).fill(0);  
let timerInterval;
let startTime;
let isSessionFinished = false;

// Matching Colors
const MATCH_COLORS = [
    { bg: '#e3f2fd', border: '#2196f3' }, 
    { bg: '#e8f5e9', border: '#4caf50' },
    { bg: '#f3e5f5', border: '#9c27b0' }, 
    { bg: '#fff3e0', border: '#ff9800' },
    { bg: '#e0f7fa', border: '#00bcd4' }
];

// --- 1. INITIALIZATION ---

window.initExercise = function(data) {
    exData = data;
    
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
    // Change every 15 seconds, cycle 480 times
    const seed = Math.floor(now / 15000) % 480; 
    let localSeed = seed;
    const random = () => { const x = Math.sin(localSeed++) * 10000; return x - Math.floor(x); };
    const shuffle = (arr) => [...arr].sort(() => random() - 0.5);

    activeSet = { simple: [], context: [] };

    // Simple Types 1-10
    for (let i = 1; i <= 10; i++) {
        if (!exData.simplePool[i]) continue;
        let count = (i === 4) ? 6 : (i === 6) ? 1 : 3;
        
        const rawSelection = shuffle(exData.simplePool[i]).slice(0, count);
        
        activeSet[i] = rawSelection.map(item => {
            let processed = { ...item };
            if (i === 1) processed.shuffledWords = shuffle(item.words);
            else if (i === 2) processed.shuffledLines = shuffle(item.lines);
            else if ([3, 4, 7, 8, 9].includes(i)) processed.shuffledOptions = shuffle(item.options);
            else if (i === 6) processed.shuffledRight = shuffle(item.pairs.map(p => p.b));
            
            // Calc Max Scores
            if(i === 6) maxPageScores[i] += 5;
            else if(i === 10) maxPageScores[i] += 2;
            else maxPageScores[i] += 1;
            return processed;
        });
    }

    // Context Types 11-15
    for (let i = 11; i <= 15; i++) {
        if (!exData.contextPool[i]) continue;
        activeSet[i] = shuffle(exData.contextPool[i])[0];
        maxPageScores[i] = 5; 
    }
}

// --- 3. RENDERING DISPATCHER ---

function renderExercisePage(pageNum) {
    if (pageNum === 16) return renderResultPage();

    const data = activeSet[pageNum];
    const isDone = pageStatus[pageNum];
    const wrapperClass = isDone ? 'disabled-mode' : '';
    
    let html = `<div class="area-box ${wrapperClass}" data-page="${pageNum}">`;
    html += `<h3>${getExerciseTitle(pageNum)}</h3>`;

    if (pageNum <= 10) {
        if (pageNum === 6) {
            html += renderType6(data[0], 0, isDone);
        } else {
            data.forEach((item, idx) => {
                html += `<div class="question-block" id="q-${pageNum}-${idx}">`;
                html += `<p class="q-number" style="color:var(--accent-orange); font-weight:bold; margin-bottom:5px;">Question ${idx + 1}</p>`;
                
                if (pageNum === 1) html += renderType1(item, idx, isDone);
                else if (pageNum === 2) html += renderType2(item, idx, isDone);
                else if (pageNum === 3) html += renderType3(item, idx, isDone);
                else if (pageNum === 4) html += renderType4(item, idx, isDone);
                else if (pageNum === 5) html += renderType5(item, idx, isDone);
                else if (pageNum === 7) html += renderType7(item, idx, isDone);
                else if (pageNum === 8) html += renderType8(item, idx, isDone);
                else if (pageNum === 9) html += renderType9(item, idx, isDone);
                else if (pageNum === 10) html += renderType10(item, idx, isDone);
                
                html += `</div>`;
            });
        }
    } else {
        html += `<div class="context-container">`;
        if (pageNum === 11) html += renderType11(data, isDone);
        else if (pageNum === 12) html += renderType12(data, isDone);
        else if (pageNum === 13) html += renderType13(data, isDone);
        else if (pageNum === 14) html += renderType14(data, isDone);
        else if (pageNum === 15) html += renderType15(data, isDone);
        html += `</div>`;
    }

    if (!isDone) html += `<button class="btn check-btn" onclick="checkCurrentPage(${pageNum})">CHECK ANSWERS</button>`;
    else html += `<div class="page-complete-mark" style="text-align:center; color:var(--success-green); font-weight:bold; font-size:1.2rem; margin-top:20px;">✓ Exercise Completed</div>`;
    
    html += `</div>`;
    return html;
}

// --- STATE HELPER ---
function getState(page, idx) {
    if (userState[page] && userState[page][idx]) return userState[page][idx];
    return null;
}

// --- SPECIFIC RENDERERS ---

// 1. Unscramble Sentences
function renderType1(item, idx, isDone) {
    const state = getState(1, idx);
    let bankWords = item.shuffledWords;
    let dropWords = [];

    if(state && state.dropped) {
        dropWords = state.dropped;
        bankWords = state.bank;
    }

    // Box Highlight Logic
    let boxStyle = "min-height:50px; padding:10px; border: 2px dashed #ccc; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; background: white; margin-bottom: 10px;";
    if(isDone) {
        if(dropWords.join(' ').trim() === item.correct.trim()) {
            boxStyle = "min-height:50px; padding:10px; border: 2px solid #28a745; background-color: #d4edda; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;";
        } else {
            boxStyle = "min-height:50px; padding:10px; border: 2px solid #dc3545; background-color: #f8d7da; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;";
        }
    }

    return `
    <div class="word-bank" id="wb-1-${idx}">
        ${bankWords.map(w => `<button class="word-btn" onclick="moveWord(this, 'drop-1-${idx}')">${w}</button>`).join('')}
    </div>
    <div class="drop-zone" id="drop-1-${idx}" data-answer="${item.correct}" style="${boxStyle}">
        ${dropWords.map(w => `<button class="word-btn" onclick="moveWord(this, 'drop-1-${idx}')">${w}</button>`).join('')}
    </div>
    ${!isDone ? `<div style="text-align:right"><button class="reset-link" onclick="resetContainer('wb-1-${idx}', 'drop-1-${idx}')">Reset</button></div>` : ''}
    ${(isDone && dropWords.join(' ').trim() !== item.correct.trim()) ? 
      `<div style="color:#155724; background:#d4edda; padding:5px; border-radius:4px;">Correct: <b>${item.correct}</b></div>` : ''}
    `;
}

// 2. Unscramble Dialogues
function renderType2(item, idx, isDone) {
    const state = getState(2, idx);
    const correctOrderString = item.order.map(i => item.lines[i]).join('|'); 
    let bankLines = item.shuffledLines;
    let dropLines = [];

    if(state && state.dropped) {
        dropLines = state.dropped;
        bankLines = state.bank;
    }

    let zoneStyle = "min-height:100px; display:flex; flex-direction:column; padding:10px; border: 2px dashed #ccc; border-radius:8px;";
    if (isDone) {
        if (dropLines.join('|') === correctOrderString) {
             zoneStyle = "min-height:100px; display:flex; flex-direction:column; padding:10px; border: 2px solid #28a745; background-color: #d4edda; border-radius:8px;";
        } else {
             zoneStyle = "min-height:100px; display:flex; flex-direction:column; padding:10px; border: 2px solid #dc3545; background-color: #f8d7da; border-radius:8px;";
        }
    }

    return `
    <div class="word-bank" id="wb-2-${idx}">
        ${bankLines.map(line => `<button class="word-btn" style="display:block; width:100%; text-align:left; margin-bottom:5px;" onclick="moveWord(this, 'drop-2-${idx}')">${line}</button>`).join('')}
    </div>
    <div class="drop-zone vertical" id="drop-2-${idx}" data-answer="${correctOrderString}" style="${zoneStyle}">
        ${dropLines.map(line => `<button class="word-btn" style="display:block; width:100%; text-align:left; margin-bottom:5px;" onclick="moveWord(this, 'drop-2-${idx}')">${line}</button>`).join('')}
    </div>
    ${!isDone ? `<div style="text-align:right"><button class="reset-link" onclick="resetContainer('wb-2-${idx}', 'drop-2-${idx}')">Reset</button></div>` : ''}
    ${(isDone && dropLines.join('|') !== correctOrderString) ? 
      `<div style="margin-top:10px; color:#0056b3;"><strong>Correct Order:</strong><br>${correctOrderString.split('|').join('<br>')}</div>` : ''}
    `;
}

// 3. Quick Questions (MCQ) - Also for 7, 8, 9
function renderType3(item, idx, isDone) {
    const state = getState(currentPage, idx);
    const userSel = state ? state.selected : null;
    
    // For Type 8 (Incorrect Vocab) display logic
    let displayQ = item.q || item.sent;
    if(currentPage === 8) displayQ = item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="color:red; font-weight:bold;">$1</span>');

    return `<p><strong>${displayQ}</strong></p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => {
                    let style = "";
                    let icon = "";
                    let classes = "option";
                    
                    if(isDone) {
                         if(opt === item.a) { 
                             style = "background-color:#d4edda; border-color:#28a745; color:#155724; border: 2px solid #28a745;";
                             icon = " ✓";
                         } else if (opt === userSel) {
                             style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border: 2px solid #dc3545;";
                             icon = " ✗";
                         }
                    } else {
                        if (opt === userSel) classes += " selected";
                    }
                    return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
                }).join('')}
            </div>`;
}

// 4. Find Meaning
function renderType4(item, idx, isDone) {
    const state = getState(4, idx);
    const userSel = state ? state.selected : null;
    
    return `<p class="sentence-display" style="font-size:1.1rem; margin-bottom:15px;">${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="background:var(--selected-orange); padding:2px 5px; border-radius:4px;">$1</span>')}</p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => {
                    let classes = "option";
                    let style = "";
                    let icon = "";
                    if(isDone) {
                         if(opt === item.a) { style = "background-color:#d4edda; border: 2px solid #28a745; color:#155724;"; icon = " ✓"; }
                         else if (opt === userSel) { style = "background-color:#f8d7da; border: 2px solid #dc3545; color:#721c24;"; icon = " ✗"; }
                    } else if (opt === userSel) classes += " selected";
                    return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
                }).join('')}
            </div>
            <div class="def-hidden" style="display:${isDone?'block':'none'}; margin-top:10px; font-style:italic; color:#555;"><strong>Definition:</strong> ${item.def}</div>`;
}

// 5. Correct Sentence
function renderType5(item, idx, isDone) {
    const state = getState(5, idx);
    const val = state ? state.value : '';
    let inputClass = "drill-input";
    let suffix = "";
    
    if(isDone) {
        if(val.trim().toLowerCase() === item.correct.toLowerCase()) inputClass += " correct-field";
        else {
            inputClass += " incorrect-field";
            suffix = `<span style="color:green; font-weight:bold; margin-left:10px;">➜ ${item.correct}</span>`;
        }
    }

    return `<p style="margin-bottom:10px;">${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="text-decoration:underline; text-decoration-color:red; text-decoration-style:wavy;">$1</span>')}</p>
            <input type="text" class="${inputClass}" value="${val}" placeholder="Type correction..." data-answer="${item.correct}" style="width:100%; padding:10px; border:2px solid #eee; border-radius:5px;">
            ${suffix}`;
}

// 6. Match Sentences
function renderType6(item, idx, isDone) {
    const left = item.pairs.map(p => p.a);
    const right = item.shuffledRight;
    const state = userState[6] || {}; 
    
    // Get Style Helper
    const getStyle = (text, col) => {
        // Pairs are stored in array in userState[6][0]... wait, checking logic stores as array.
        // Let's assume userState[6] is { 0: { pairs: [] } } or we simplified it.
        // In checkCurrentPage, I saved it as userState[pageNum][0] = { pairs: [...] }
        const savedPairs = (userState[6] && userState[6][0]) ? userState[6][0].pairs : [];
        
        const pair = savedPairs.find(p => (col === 'left' ? p.left === text : p.right === text));
        
        if(pair) {
            const color = MATCH_COLORS[pair.colorIdx % MATCH_COLORS.length];
            let css = `background-color:${color.bg}; border-color:${color.border};`;
            
            if(isDone) {
                const correctB = item.pairs.find(p => p.a === pair.left).b;
                if(pair.right === correctB) css = `background-color:#d4edda; border-color:#28a745; opacity:0.9;`; 
                else css = `background-color:#f8d7da; border-color:#dc3545; opacity:0.9;`; 
            }
            return { css, paired: true };
        }
        return { css: '', paired: false };
    };

    let html = `<div class="matching-container">
        <div class="match-column">`;
    left.forEach((l, i) => {
        const s = getStyle(l, 'left');
        html += `<div class="match-item left-item ${s.paired?'paired':''}" style="${s.css}" data-text="${l}" data-col="left" onclick="handleMatchClick(this)">${l}</div>`;
    });
    html += `</div><div class="match-column">`;
    right.forEach((r, i) => {
        const s = getStyle(r, 'right');
        html += `<div class="match-item right-item ${s.paired?'paired':''}" style="${s.css}" data-text="${r}" data-col="right" onclick="handleMatchClick(this)">${r}</div>`;
    });
    html += `</div></div>`;
    return html;
}

// 7, 8, 9 -> Use Type 3 Logic
function renderType7(item, idx, isDone) { return renderType3(item, idx, isDone); }
function renderType8(item, idx, isDone) { return renderType3(item, idx, isDone); }
function renderType9(item, idx, isDone) { 
    return `<div class="audio-wrapper" style="margin-bottom:15px;"><audio controls src="${item.audio}"></audio></div>` + renderType3(item, idx, isDone);
}

// 10. Complete Sentences
function renderType10(item, idx, isDone) {
    const state = getState(10, idx);
    let html = `<div class="audio-wrapper" style="margin-bottom:10px;"><audio controls src="${item.audio}"></audio></div><p style="line-height:2.5;">`;
    item.sent.split('___').forEach((part, i, arr) => {
        html += part;
        if (i < arr.length - 1) {
            const val = (state && state.values) ? state.values[i] : '';
            let style = "width:100px; padding:5px; border-bottom:2px solid var(--primary-blue); border-top:none; border-left:none; border-right:none; text-align:center;";
            if(isDone) {
                if(val.toLowerCase() === item.blanks[i].toLowerCase()) style += " background:#d4edda; border-color:green;";
                else style += " background:#f8d7da; border-color:red;";
            }
            html += `<input type="text" class="drill-input inline-input" value="${val}" data-answer="${item.blanks[i]}" style="${style}">`;
            if(isDone && val.toLowerCase() !== item.blanks[i].toLowerCase()) {
                html += `<span style="color:green; font-size:0.8rem; font-weight:bold">(${item.blanks[i]})</span>`;
            }
        }
    });
    return html + `</p>`;
}

// 11. Context Dialogue
function renderType11(item, isDone) {
    let html = `<h4>${item.title}</h4><div class="dialogue-box" style="background:#f9f9f9; padding:20px; border-radius:10px;">`;
    item.lines.forEach((line, i) => {
        const val = (userState[11] && userState[11][0] && userState[11][0].values) ? userState[11][0].values[i] : '';
        let style = "padding:5px; border-radius:5px; border:1px solid #ccc;";
        let suffix = "";
        
        if(isDone) {
            if(val === line.a) style = "padding:5px; border-radius:5px; border:2px solid green; background:#d4edda;";
            else {
                style = "padding:5px; border-radius:5px; border:2px solid red; background:#f8d7da;";
                suffix = `<span style="color:green; font-weight:bold; margin-left:5px;">(${line.a})</span>`;
            }
        }
        let selectHTML = `<select class="drill-select" data-answer="${line.a}" style="${style}"><option value="">...</option>
            ${line.options.map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}
        </select>${suffix}`;
        html += `<p style="margin-bottom:10px;"><strong>${line.speaker}:</strong> ${line.text.replace('___', selectHTML)}</p>`;
    });
    return html + `</div>`;
}

// 12. Read & Answer (Context MCQ)
function renderType12(item, isDone) {
    let html = `<h4>${item.title}</h4><div class="reading-box" style="padding:15px; border-left:4px solid var(--primary-blue); background:#fff; margin-bottom:20px;">${item.text}</div>`;
    item.questions.forEach((q, i) => {
        const state = getState(12, i);
        const userSel = state ? state.selected : null;
        
        html += `<div class="question-block"><p><strong>${i+1}. ${q.q}</strong></p>
        <div class="options-container" data-answer="${q.a}">
            ${q.options.map(opt => {
                let classes = "option";
                let style = "";
                let icon = "";
                if(isDone) {
                     if(opt === q.a) { style = "background-color:#d4edda; border:2px solid green; color:darkgreen;"; icon = " ✓"; }
                     else if (opt === userSel) { style = "background-color:#f8d7da; border:2px solid red; color:darkred;"; icon = " ✗"; }
                } else if (opt === userSel) classes += " selected";
                return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
            }).join('')}
        </div></div>`;
    });
    return html;
}

// 13. Listen & Answer (Same as 12 but audio)
function renderType13(item, isDone) {
    let html = `<h4>${item.title}</h4><div class="audio-wrapper" style="margin-bottom:20px;"><audio controls src="${item.audio}"></audio></div>`;
    item.questions.forEach((q, i) => {
        const state = getState(13, i);
        const userSel = state ? state.selected : null;
        
        html += `<div class="question-block"><p><strong>${i+1}. ${q.q}</strong></p>
        <div class="options-container" data-answer="${q.a}">
            ${q.options.map(opt => {
                let classes = "option";
                let style = "";
                let icon = "";
                if(isDone) {
                     if(opt === q.a) { style = "background-color:#d4edda; border:2px solid green; color:darkgreen;"; icon = " ✓"; }
                     else if (opt === userSel) { style = "background-color:#f8d7da; border:2px solid red; color:darkred;"; icon = " ✗"; }
                } else if (opt === userSel) classes += " selected";
                return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
            }).join('')}
        </div></div>`;
    });
    return html;
}

// 14. Complete Text (Dropdowns)
function renderType14(item, isDone) {
    let count = 0;
    return `<h4>${item.title}</h4><div class="reading-box" style="line-height:2.2;">${item.text.replace(/\[(\d+)\] \((.*?)\)/g, (m, n, opts) => {
        const correct = item.answers[parseInt(n)-1];
        const val = (userState[14] && userState[14][0] && userState[14][0].values) ? userState[14][0].values[count] : '';
        count++;
        
        let style = "margin:0 5px; padding:5px; border-radius:4px; border:1px solid #ccc;";
        let suffix = "";
        if(isDone) {
            if(val === correct) style = "margin:0 5px; padding:5px; border-radius:4px; border: 2px solid green; background-color: #d4edda;";
            else {
                style = "margin:0 5px; padding:5px; border-radius:4px; border: 2px solid red; background-color: #f8d7da;";
                suffix = `<span style="color:green; font-weight:bold; font-size:0.9rem;">(${correct})</span>`;
            }
        }
        return `<select class="drill-select" data-answer="${correct}" style="${style}"><option value="">...</option>${opts.split('/').map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}</select>${suffix}`;
    })}</div>`;
}

// 15. Listen & Complete (Inputs)
function renderType15(item, isDone) {
    let count = 0;
    return `<h4>${item.title}</h4><div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div><div class="reading-box" style="line-height:2.5;">${item.text.replace(/\[(\d+)\]/g, (m, n) => {
        const correct = item.answers[parseInt(n)-1];
        const val = (userState[15] && userState[15][0] && userState[15][0].values) ? userState[15][0].values[count] : '';
        count++;
        
        let style="width:120px; border:none; border-bottom:2px solid #333; text-align:center; background:transparent; margin:0 5px;";
        let suffix = "";
        if(isDone) {
            if(val.trim().toLowerCase() === correct.toLowerCase()) style += " background:#d4edda; border: 2px solid green; border-radius: 4px;";
            else {
                style += " background:#f8d7da; border: 2px solid red; border-radius: 4px;";
                suffix = `<span style="color:green; font-weight:bold; font-size:0.9rem;">(${correct})</span>`;
            }
        }
        return `<input type="text" class="drill-input" value="${val}" data-answer="${correct}" style="${style}">${suffix}`;
    })}</div>`;
}

// --- CHECKING LOGIC ---

window.checkCurrentPage = function(pageNum) {
    const pageDiv = document.querySelector(`.area-box[data-page="${pageNum}"]`);
    let score = 0;
    
    if(!userState[pageNum]) userState[pageNum] = {};

    // 1. Unscramble Sentence
    if(pageNum === 1) {
        pageDiv.querySelectorAll('.drop-zone').forEach((zone, idx) => {
            const words = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText);
            const bankWords = Array.from(document.getElementById(`wb-1-${idx}`).querySelectorAll('.word-btn')).map(b => b.innerText);
            if(!userState[pageNum][idx]) userState[pageNum][idx] = {};
            userState[pageNum][idx] = { dropped: words, bank: bankWords };
            if(words.join(' ').trim() === zone.dataset.answer.trim()) score++;
        });
    }
    // 2. Unscramble Dialogue
    else if(pageNum === 2) {
        pageDiv.querySelectorAll('.drop-zone.vertical').forEach((zone, idx) => {
            const lines = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText);
            const bankLines = Array.from(document.getElementById(`wb-2-${idx}`).querySelectorAll('.word-btn')).map(b => b.innerText);
            if(!userState[pageNum][idx]) userState[pageNum][idx] = {};
            userState[pageNum][idx] = { dropped: lines, bank: bankLines };
            if(lines.join('|') === zone.dataset.answer) score++;
        });
    }
    // MCQs (3,4,7,8,9,12,13)
    else if([3,4,7,8,9,12,13].includes(pageNum)) {
        pageDiv.querySelectorAll('.options-container').forEach((cont, idx) => {
            const sel = cont.querySelector('.option.selected');
            const val = sel ? sel.innerText.trim() : null;
            if(!userState[pageNum][idx]) userState[pageNum][idx] = {};
            userState[pageNum][idx] = { selected: val };
            if(val === cont.dataset.answer) score++;
        });
    }
    // Simple Input (5)
    else if(pageNum === 5) {
        pageDiv.querySelectorAll('input').forEach((inp, idx) => {
             if(!userState[pageNum][idx]) userState[pageNum][idx] = {};
             userState[pageNum][idx] = { value: inp.value };
             if(inp.value.trim().toLowerCase() === inp.dataset.answer.toLowerCase()) score++;
        });
    }
    // Multi Input (10)
    else if(pageNum === 10) {
        const items = activeSet[pageNum];
        items.forEach((item, idx) => {
             const block = document.getElementById(`q-${pageNum}-${idx}`);
             const inputs = block.querySelectorAll('input');
             const values = Array.from(inputs).map(i => i.value);
             if(!userState[pageNum][idx]) userState[pageNum][idx] = {};
             userState[pageNum][idx] = { values: values };
             inputs.forEach(inp => { if(inp.value.trim().toLowerCase() === inp.dataset.answer.toLowerCase()) score++; });
        });
    }
    // Context Selects (11, 14)
    else if([11,14].includes(pageNum)) {
         const selects = pageDiv.querySelectorAll('select');
         const values = Array.from(selects).map(s => s.value);
         if(!userState[pageNum][0]) userState[pageNum][0] = {};
         userState[pageNum][0] = { values: values };
         selects.forEach(s => { if(s.value === s.dataset.answer) score++; });
    }
    // Context Inputs (15)
    else if(pageNum === 15) {
         const container = pageDiv; 
         const inputs = container.querySelectorAll('input');
         const values = Array.from(inputs).map(i => i.value);
         if(!userState[pageNum][0]) userState[pageNum][0] = {};
         userState[pageNum][0] = { values: values };
         inputs.forEach(inp => { if(inp.value.trim().toLowerCase() === inp.dataset.answer.toLowerCase()) score++; });
    }
    // Match (6)
    else if(pageNum === 6) {
        let pairs = [];
        pageDiv.querySelectorAll('.match-item[data-col="left"]').forEach(l => {
             const pairText = l.dataset.pairText;
             const colorIdx = l.dataset.colorIdx;
             if(pairText) {
                 pairs.push({ left: l.innerText, right: pairText, colorIdx: parseInt(colorIdx) });
                 const correctB = activeSet[6][0].pairs.find(p => p.a === l.innerText).b;
                 if(pairText === correctB) score++; 
             }
        });
        if(!userState[pageNum][0]) userState[pageNum][0] = {};
        userState[pageNum][0] = { pairs: pairs };
    }

    pageScores[pageNum] = score;
    pageStatus[pageNum] = true;
    
    // RE-RENDER TO SHOW HIGHLIGHTS
    const container = document.getElementById('lesson-content');
    container.innerHTML = renderExercisePage(pageNum);
    
    renderSidebar();
    
    if(pageStatus.slice(1).every(s => s === true)) {
        clearInterval(timerInterval);
        isSessionFinished = true;
        document.getElementById('next-btn').innerHTML = "🏁 View Results";
        document.getElementById('next-btn').disabled = false;
    }
};

// --- INTERACTIONS ---

window.moveWord = function(btn, zoneId) {
    if (btn.closest('.area-box').classList.contains('disabled-mode')) return;
    const zone = document.getElementById(zoneId);
    const isBank = btn.parentElement.id.includes('wb');
    const target = isBank ? zone : document.getElementById(btn.parentElement.id.replace('drop', 'wb'));
    target.appendChild(btn);
};

window.resetContainer = function(bankId, zoneId) { 
    if (document.getElementById(bankId).closest('.area-box').classList.contains('disabled-mode')) return;
    const b=document.getElementById(bankId); 
    const z=document.getElementById(zoneId); 
    while(z.firstChild) b.appendChild(z.firstChild); 
};

window.selectOpt = function(btn) {
    if (btn.closest('.area-box').classList.contains('disabled-mode')) return;
    btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

let matchSelection = null;
let pairCounter = 0;
window.handleMatchClick = function(el) {
    if (el.closest('.area-box').classList.contains('disabled-mode')) return;
    if (el.classList.contains('paired')) return;

    if (matchSelection === el) {
        el.classList.remove('selected');
        matchSelection = null;
        return;
    }

    if (!matchSelection) {
        matchSelection = el;
        el.classList.add('selected');
    } else {
        if (matchSelection.dataset.col === el.dataset.col) {
            matchSelection.classList.remove('selected');
            matchSelection = el;
            el.classList.add('selected');
            return;
        }
        const item1 = matchSelection; const item2 = el;
        item1.classList.remove('selected'); item2.classList.remove('selected');
        item1.classList.add('paired'); item2.classList.add('paired');
        
        const color = MATCH_COLORS[pairCounter % MATCH_COLORS.length];
        const css = `background-color:${color.bg}; border-color:${color.border};`;
        item1.style.cssText = css; item2.style.cssText = css;
        
        item1.dataset.pairText = item2.innerText;
        item2.dataset.pairText = item1.innerText;
        item1.dataset.colorIdx = pairCounter;
        item2.dataset.colorIdx = pairCounter;
        pairCounter++;
        matchSelection = null;
    }
};

// --- NAV ---

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
        if(isSessionFinished) {
             document.getElementById('next-btn').innerText = (p===15) ? "🏁 View Results" : "→";
             document.getElementById('next-btn').onclick = () => showPage(p+1);
        } else {
             document.getElementById('next-btn').innerText = "→";
             document.getElementById('next-btn').onclick = () => {
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
    return `<div id="result-page" style="display:block; text-align: center; padding: 40px; animation: fadeIn 0.5s;">
        <h2 style="color:var(--primary-blue); margin-bottom: 30px; font-size: 2rem;">SESSION COMPLETE</h2>
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 40px;">
            <div class="stat-box" style="width: 180px; padding: 20px;"><div class="stat-num" style="color: var(--success-green);">${percentage}%</div><div style="color: #666; font-weight: 700;">ACCURACY</div></div>
            <div class="stat-box" style="width: 180px; padding: 20px;"><div class="stat-num" style="color: var(--primary-blue);">${document.getElementById('global-timer').textContent}</div><div style="color: #666; font-weight: 700;">TIME</div></div>
        </div>
        <button class="btn" onclick="location.reload()" style="background: linear-gradient(135deg, #FF8C42 0%, #FF6B10 100%); width: 250px;">🔄 START NEW SESSION</button>
        <a href="index.html?lesson=home" class="btn" style="margin-top:10px; background: white; color: var(--primary-blue); border: 2px solid var(--primary-blue); width: 250px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">🏠 HOME DASHBOARD</a>
    </div>`;
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

function getExerciseTitle(n) { const t = ["Unscramble Sentences", "Unscramble Dialogues", "Quick Questions", "Find Meaning", "Correct Sentences", "Match Sentences", "Best Answer", "Incorrect Vocabulary", "Listen & Answer", "Complete Sentences", "Complete Dialogue", "Read & Answer", "Listen & Answer (Ctx)", "Complete Text", "Listen & Complete"]; return t[n-1]; }