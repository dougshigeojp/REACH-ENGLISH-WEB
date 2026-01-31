/**
 * ENGINE-EXERCISES.js
 * V6.0 - State Persistence, Advanced Matching & Visual Fixes
 */

let exData = null;
let activeSet = {};      
let userState = {};      // STORES USER ANSWERS: { pageNum: [ { qIdx: 0, answer: ... } ] }
let currentPage = 1;
let totalPages = 15;
let pageStatus = new Array(16).fill(false); 
let pageScores = new Array(16).fill(0);     
let maxPageScores = new Array(16).fill(0);  
let timerInterval;
let startTime;
let isSessionFinished = false;

// Matching Colors (Shades for pairs)
const MATCH_COLORS = [
    { bg: '#e3f2fd', border: '#2196f3' }, // Blue
    { bg: '#e8f5e9', border: '#4caf50' }, // Green
    { bg: '#f3e5f5', border: '#9c27b0' }, // Purple
    { bg: '#fff3e0', border: '#ff9800' }, // Orange
    { bg: '#e0f7fa', border: '#00bcd4' }  // Cyan
];

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
            else if (i === 2) processed.shuffledLines = shuffle(item.lines); 
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
            html += renderType6(data[0], 0, isDone);
        } else {
            data.forEach((item, idx) => {
                html += `<div class="question-block" id="q-${pageNum}-${idx}">`;
                html += `<p class="q-number" style="color:var(--accent-orange); font-weight:bold; margin-bottom:5px;">Question ${idx + 1}</p>`;
                
                // Pass 'isDone' and 'idx' to help restore state
                if (pageNum === 1) html += renderType1(item, idx, isDone);
                else if (pageNum === 2) html += renderType2(item, idx, isDone);
                else if (pageNum === 3) html += renderType3(item, idx, isDone);
                else if (pageNum === 4) html += renderType4(item, idx, isDone);
                else if (pageNum === 5) html += renderType5(item, idx, isDone);
                else if (pageNum === 7) html += renderType7(item, idx, isDone);
                else if (pageNum === 8) html += renderType8(item, idx, isDone);
                else if (pageNum === 9) html += renderType9(item, idx, isDone);
                else if (pageNum === 10) html += renderType10(item, idx, isDone);
                
                // Validation Message Placeholder (Populated if done)
                let feedbackHTML = '';
                if(isDone) feedbackHTML = getRestoredFeedback(pageNum, idx, item);
                html += feedbackHTML;
                
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

// --- STATE HELPERS ---
function getState(page, idx) {
    if(userState[page] && userState[page][idx]) return userState[page][idx];
    return null;
}

// --- SPECIFIC RENDERERS ---

// 1. Unscramble Sentences
function renderType1(item, idx, isDone) {
    const state = getState(1, idx);
    let bankWords = item.shuffledWords;
    let dropWords = [];

    // If we have a saved state, use it to separate the words
    if(state && state.dropped) {
        dropWords = state.dropped;
        bankWords = state.bank;
    }

    // Determine Box Style (Green/Red)
    let boxStyle = "min-height:50px; padding:10px; border: 2px dashed #ccc; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; background: white; margin-bottom: 10px;";
    
    if(isDone) {
        const attempt = dropWords.join(' ');
        if(attempt.trim() === item.correct.trim()) {
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
    `;
}


// 2. Unscramble Dialogues
function renderType2(item, idx, isDone) {
    const state = getState(2, idx);
    // Determine the correct string for comparison
    const correctOrderString = item.order.map(i => item.lines[i]).join('|'); 
    
    let bankLines = item.shuffledLines;
    let dropLines = [];

    if(state && state.dropped) {
        dropLines = state.dropped;
        bankLines = state.bank;
    }

    // Style Logic
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
    `;
}

// 3. Quick Questions (MCQ)
function renderType3(item, idx, isDone) {
    const state = getState(3, idx);
    const userSel = state ? state.selected : null;
    
    return `<p><strong>${item.q}</strong></p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => {
                    let classes = "option";
                    let style = "";
                    let icon = "";
                    
                    if(isDone) {
                         if(opt === item.a) { 
                             // Correct Option -> GREEN
                             style = "background-color:#d4edda; border-color:#28a745; color:#155724; border-width: 2px;";
                             icon = " ✓";
                         } else if (opt === userSel) {
                             // Selected Wrong Option -> RED
                             style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border-width: 2px;";
                             icon = " ✗";
                         }
                    } else {
                        if (opt === userSel) classes += " selected";
                    }

                    return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
                }).join('')}
            </div>`;
}

// Make sure Type 7 uses Type 3's logic
function renderType7(item, idx, isDone) { return renderType3(item, idx, isDone); }

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
                         if(opt === item.a) { 
                             style = "background-color:#d4edda; border-color:#28a745; color:#155724; border-width: 2px;";
                             icon = " ✓";
                         } else if (opt === userSel) {
                             style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border-width: 2px;";
                             icon = " ✗";
                         }
                    } else {
                        if (opt === userSel) classes += " selected";
                    }

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

// 6. Match Sentences (Click-to-Pair Logic)
function renderType6(item, idx, isDone) {
    const left = item.pairs.map(p => p.a);
    const right = item.shuffledRight;
    const state = getState(6, 0); // Type 6 is one big item
    
    // Helper to get pair visual state
    const getPairStyle = (text, col) => {
        if(!state || !state.pairs) return '';
        const pair = state.pairs.find(p => (col === 'left' ? p.left === text : p.right === text));
        if(pair) {
            const color = MATCH_COLORS[pair.colorIdx % MATCH_COLORS.length];
            // If done, we check correctness
            let correctBorder = color.border;
            if(isDone) {
                // Find correct B for this A
                const correctB = item.pairs.find(p => p.a === pair.left).b;
                const isPairCorrect = (pair.right === correctB);
                
                if(isPairCorrect) return `background-color:#d4edda; border-color:#28a745; opacity:0.8;`; // All Green
                else return `background-color:#f8d7da; border-color:#dc3545; opacity:0.8;`; // All Red
            }
            return `background-color:${color.bg}; border-color:${color.border};`;
        }
        return '';
    };

    let html = `<div class="matching-container" id="match-container-${idx}">
        <div class="match-column">`;
    
    left.forEach((l, i) => {
        const style = getPairStyle(l, 'left');
        const pairedClass = style ? 'paired' : '';
        html += `<div class="match-item left-item ${pairedClass}" style="${style}" data-text="${l}" data-col="left" onclick="handleMatchClick(this)">${l}</div>`;
    });
    
    html += `</div><div class="match-column">`;
    
    right.forEach((r, i) => {
        const style = getPairStyle(r, 'right');
        const pairedClass = style ? 'paired' : '';
        html += `<div class="match-item right-item ${pairedClass}" style="${style}" data-text="${r}" data-col="right" onclick="handleMatchClick(this)">${r}</div>`;
    });

    html += `</div></div>`;
    return html;
}


function renderType8(item, idx, isDone) {
    const state = getState(8, idx);
    const userSel = state ? state.selected : null;
    
    return `<p>${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="color:red; font-weight:bold;">$1</span>')}</p>
            <p>Choose the correct word:</p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => {
                    let classes = "option";
                    let style = "";
                    let icon = "";
                    
                    if(isDone) {
                         if(opt === item.a) { 
                             style = "background-color:#d4edda; border-color:#28a745; color:#155724; border-width: 2px;";
                             icon = " ✓";
                         } else if (opt === userSel) {
                             style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border-width: 2px;";
                             icon = " ✗";
                         }
                    } else {
                        if (opt === userSel) classes += " selected";
                    }

                    return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
                }).join('')}
            </div>`;
}

// REPLACE renderType9 as well to be safe:
function renderType9(item, idx, isDone) {
    const state = getState(9, idx);
    const userSel = state ? state.selected : null;
    
    return `<div class="audio-wrapper" style="margin-bottom:15px;"><audio controls src="${item.audio}"></audio></div>
            <p><strong>${item.q}</strong></p>
            <div class="options-container" data-answer="${item.a}">
                ${item.shuffledOptions.map(opt => {
                    let classes = "option";
                    let style = "";
                    let icon = "";
                    
                    if(isDone) {
                         if(opt === item.a) { 
                             style = "background-color:#d4edda; border-color:#28a745; color:#155724; border-width: 2px;";
                             icon = " ✓";
                         } else if (opt === userSel) {
                             style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border-width: 2px;";
                             icon = " ✗";
                         }
                    } else {
                        if (opt === userSel) classes += " selected";
                    }

                    return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
                }).join('')}
            </div>`;
}
// Note: renderType12 and renderType13 also need this logic update if you use them.


// 10. Complete Sentences
function renderType10(item, idx, isDone) {
    const state = getState(10, idx); // array of values
    
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

// Context Types
function renderType11(item, isDone) {
    // Note: userState logic for 11 needs to grab values from the specific index 0 state object
    let html = `<h4>${item.title}</h4><div class="dialogue-box" style="background:#f9f9f9; padding:20px; border-radius:10px;">`;
    
    item.lines.forEach((line, i) => {
        const val = (userState[11] && userState[11][0] && userState[11][0].values) ? userState[11][0].values[i] : '';
        
        let style = "padding:5px; border-radius:5px; border:1px solid #ccc;";
        let suffix = "";
        
        if(isDone) {
            if(val === line.a) {
                // Correct
                style = "padding:5px; border-radius:5px; border: 2px solid #28a745; background-color: #d4edda;";
            } else {
                // Incorrect
                style = "padding:5px; border-radius:5px; border: 2px solid #dc3545; background-color: #f8d7da;";
                suffix = `<span style="color:green; font-weight:bold; margin-left:5px;">(${line.a})</span>`;
            }
        }

        // Build Select
        let selectHTML = `<select class="drill-select" data-answer="${line.a}" style="${style}">
            <option value="">...</option>
            ${line.options.map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}
        </select>${suffix}`;

        html += `<p style="margin-bottom:10px;"><strong>${line.speaker}:</strong> ${line.text.replace('___', selectHTML)}</p>`;
    });
    return html + `</div>`;
}

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
                     if(opt === q.a) { 
                         style = "background-color:#d4edda; border-color:#28a745; color:#155724; border-width: 2px;";
                         icon = " ✓"; 
                     }
                     else if (opt === userSel) { 
                         style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border-width: 2px;";
                         icon = " ✗"; 
                     }
                } else if (opt === userSel) classes += " selected";
                return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
            }).join('')}
        </div></div>`;
    });
    return html;
}

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
                     if(opt === q.a) { 
                         style = "background-color:#d4edda; border-color:#28a745; color:#155724; border-width: 2px;";
                         icon = " ✓"; 
                     }
                     else if (opt === userSel) { 
                         style = "background-color:#f8d7da; border-color:#dc3545; color:#721c24; border-width: 2px;";
                         icon = " ✗"; 
                     }
                } else if (opt === userSel) classes += " selected";
                return `<div class="${classes}" style="${style}" onclick="selectOpt(this)">${opt}${icon}</div>`;
            }).join('')}
        </div></div>`;
    });
    return html;
}

// REPLACE renderType14
function renderType14(item, isDone) {
    let count = 0;
    return `<h4>${item.title}</h4><div class="reading-box" style="line-height:2.2;">${item.text.replace(/\[(\d+)\] \((.*?)\)/g, (m, n, opts) => {
        const correct = item.answers[parseInt(n)-1];
        const val = (userState[14] && userState[14][0] && userState[14][0].values) ? userState[14][0].values[count] : '';
        count++;

        let style = "margin:0 5px; padding:5px; border-radius:4px; border:1px solid #ccc;";
        let suffix = "";

        if(isDone) {
            if(val === correct) {
                style = "margin:0 5px; padding:5px; border-radius:4px; border: 2px solid #28a745; background-color: #d4edda;";
            } else {
                // RED for wrong or empty
                style = "margin:0 5px; padding:5px; border-radius:4px; border: 2px solid #dc3545; background-color: #f8d7da;";
                suffix = `<span style="color:green; font-weight:bold; font-size:0.9rem;">(${correct})</span>`;
            }
        }

        return `<select class="drill-select" data-answer="${correct}" style="${style}">
            <option value="">...</option>
            ${opts.split('/').map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}
        </select>${suffix}`;
    })}</div>`;
}


// REPLACE renderType15
function renderType15(item, isDone) {
    let count = 0;
    return `<h4>${item.title}</h4>
            <div class="audio-wrapper"><audio controls src="${item.audio}"></audio></div>
            <div class="reading-box" style="line-height:2.5;">
            ${item.text.replace(/\[(\d+)\]/g, (m, n) => {
                const correct = item.answers[parseInt(n)-1];
                const val = (userState[15] && userState[15][0] && userState[15][0].values) ? userState[15][0].values[count] : '';
                count++;
                
                let style="width:120px; border:none; border-bottom:2px solid #333; text-align:center; background:transparent; margin:0 5px;";
                let suffix = "";
                
                if(isDone) {
                    if(val.trim().toLowerCase() === correct.toLowerCase()) {
                        style += " background:#d4edda; border: 2px solid green; border-radius: 4px;";
                    } else {
                        style += " background:#f8d7da; border: 2px solid red; border-radius: 4px;";
                        suffix = `<span style="color:green; font-weight:bold; font-size:0.9rem;">(${correct})</span>`;
                    }
                }

                return `<input type="text" class="drill-input" value="${val}" data-answer="${correct}" style="${style}">${suffix}`;
            })}
            </div>`;
}

function getRestoredFeedback(page, idx, item) {
    // Return HTML string for Type 1 correct answer if wrong
    if(page === 1) {
        const state = getState(1, idx);
        if(state && state.dropped && state.dropped.join(' ') !== item.correct) {
            return `<div style="margin-top:10px; color:green; background:#eafaf1; padding:5px;">Correct: <b>${item.correct}</b></div>`;
        }
    }
    if(page === 2) {
        const state = getState(2, idx);
        // reconstruct order string
        const correctOrderString = item.order.map(i => item.lines[i]).join('|'); 
        if(state && state.dropped && state.dropped.join('|') !== correctOrderString) {
             return `<div style="margin-top:10px; color:var(--primary-blue);"><strong>Correct Order:</strong><br>${correctOrderString.split('|').join('<br>')}</div>`;
        }
    }
    return '';
}

// --- INTERACTION LOGIC ---

window.moveWord = function(btn, zoneId) {
    if (btn.closest('.area-box').classList.contains('disabled-mode')) return;
    const zone = document.getElementById(zoneId);
    // Find bank logic (assumes 'wb' or 'drop' prefix)
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

// MATCHING LOGIC (With Color Cycling)
let matchState = { selected: null };
let pairCounter = 0; // To cycle colors for current session

window.handleMatchClick = function(el) {
    if (el.closest('.area-box').classList.contains('disabled-mode')) return;
    if (el.classList.contains('paired')) return;

    // Deselect if clicking same
    if (matchState.selected === el) {
        el.classList.remove('selected');
        matchState.selected = null;
        return;
    }

    if (!matchState.selected) {
        matchState.selected = el;
        el.classList.add('selected');
    } else {
        // Check columns
        if (matchState.selected.dataset.col === el.dataset.col) {
            matchState.selected.classList.remove('selected');
            matchState.selected = el;
            el.classList.add('selected');
            return;
        }
        
        // PAIR FORMED
        const item1 = matchState.selected;
        const item2 = el;
        
        item1.classList.remove('selected');
        item2.classList.remove('selected');
        
        item1.classList.add('paired');
        item2.classList.add('paired');
        
        // Apply Color
        const color = MATCH_COLORS[pairCounter % MATCH_COLORS.length];
        const styleStr = `background-color:${color.bg}; border-color:${color.border};`;
        item1.style.cssText = styleStr;
        item2.style.cssText = styleStr;
        
        // Store pair info in DOM for checking
        // We use text as ID
        item1.dataset.pairText = item2.innerText; 
        item2.dataset.pairText = item1.innerText;
        // Store Color Index to save/restore
        item1.dataset.colorIdx = pairCounter;
        item2.dataset.colorIdx = pairCounter;

        pairCounter++;
        matchState.selected = null;
    }
};


// --- CHECKING & SAVING LOGIC ---

// REPLACE checkCurrentPage
window.checkCurrentPage = function(pageNum) {
    const pageDiv = document.querySelector(`.area-box[data-page="${pageNum}"]`);
    let score = 0;
    
    // Initialize State Array for this page
    if(!userState[pageNum]) userState[pageNum] = [];
    
    // --- LOGIC PER TYPE ---

    if(pageNum === 1) {
        // Unscramble Sentence
        pageDiv.querySelectorAll('.drop-zone').forEach((zone, idx) => {
            const words = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText);
            const bankWords = Array.from(document.getElementById(`wb-1-${idx}`).querySelectorAll('.word-btn')).map(b => b.innerText);
            
            // SAVE STATE
            userState[pageNum][idx] = { dropped: words, bank: bankWords };
            
            // CHECK
            if(words.join(' ').trim() === zone.dataset.answer.trim()) score++;
        });
    }
    else if(pageNum === 2) {
        // Unscramble Dialogue
        pageDiv.querySelectorAll('.drop-zone.vertical').forEach((zone, idx) => {
            const lines = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText);
            const bankLines = Array.from(document.getElementById(`wb-2-${idx}`).querySelectorAll('.word-btn')).map(b => b.innerText);
            userState[pageNum][idx] = { dropped: lines, bank: bankLines };
            if(lines.join('|') === zone.dataset.answer) score++;
        });
    }
    else if([3,4,7,8,9,12,13].includes(pageNum)) { 
        // MCQs
        pageDiv.querySelectorAll('.options-container').forEach((cont, idx) => {
            const sel = cont.querySelector('.option.selected');
            const val = sel ? sel.innerText.trim() : null; 
            userState[pageNum][idx] = { selected: val };
            if(val === cont.dataset.answer) score++;
        });
    }
    else if(pageNum === 5) {
        // Simple Input
        pageDiv.querySelectorAll('input').forEach((inp, idx) => {
             userState[pageNum][idx] = { value: inp.value };
             if(inp.value.trim().toLowerCase() === inp.dataset.answer.toLowerCase()) score++;
        });
    }
    else if(pageNum === 10) {
        // Type 10 (Multiple inputs inside items)
        const items = activeSet[pageNum];
        items.forEach((item, idx) => {
             const block = document.getElementById(`q-${pageNum}-${idx}`);
             const inputs = block.querySelectorAll('input');
             const values = Array.from(inputs).map(i => i.value);
             userState[pageNum][idx] = { values: values };
             inputs.forEach(inp => {
                 if(inp.value.trim().toLowerCase() === inp.dataset.answer.toLowerCase()) score++;
             });
        });
    }
    else if([11,14].includes(pageNum)) { 
        // Context Selects
         const selects = pageDiv.querySelectorAll('select');
         const values = Array.from(selects).map(s => s.value);
         userState[pageNum][0] = { values: values }; // Index 0 for single context item
         selects.forEach(s => { if(s.value === s.dataset.answer) score++; });
    }
    else if(pageNum === 15) {
         // Context Inputs (Listen & Complete) - FIXED LOGIC
         const container = pageDiv; 
         const inputs = container.querySelectorAll('input');
         const values = Array.from(inputs).map(i => i.value);
         
         userState[pageNum][0] = { values: values }; // Index 0
         
         inputs.forEach(inp => {
             if(inp.value.trim().toLowerCase() === inp.dataset.answer.toLowerCase()) score++;
         });
    }
    else if(pageNum === 6) { 
        // Match
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
        userState[pageNum][0] = { pairs: pairs };
    }

    // Finalize
    pageScores[pageNum] = score;
    pageStatus[pageNum] = true;
    
    // RE-RENDER
    const container = document.getElementById('lesson-content');
    container.innerHTML = renderExercisePage(pageNum);

    renderSidebar();

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
function getExerciseTitle(n) { const t = ["Unscramble Sentences", "Unscramble Dialogues", "Quick Questions", "Find Meaning", "Correct Sentences", "Match Sentences", "Best Answer", "Incorrect Vocabulary", "Listen & Answer", "Complete Sentences", "Complete Dialogue", "Read & Answer", "Listen & Answer (Ctx)", "Complete Text", "Listen & Complete"]; return t[n-1]; }