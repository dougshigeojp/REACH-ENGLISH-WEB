/**
 * ENGINE-EXERCISES.js - V9.1 (Debug Stable)
 */

// 1. DECLARE ALL VARIABLES AT THE TOP
let exData = null;
let activeSet = {};      
let userState = {};      
let itemStatus = {};     
let pageStatus = new Array(16).fill(false); // FIXED: Added missing variable
let currentPage = 1;
let totalPages = 15;
let itemScores = {}; // To store 1 for correct, 0 for incorrect per question
let pageScores = new Array(16).fill(0);     
let maxPageScores = new Array(16).fill(0);  
let timerInterval;
let startTime;
let isSessionFinished = false;

const MATCH_ORANGES = [
    { bg: '#fff3e0', border: '#ffb74d' }, // Shade 1
    { bg: '#ffe0b2', border: '#ffa726' }, // Shade 2
    { bg: '#ffcc80', border: '#fb8c00' }, // Shade 3
    { bg: '#ffb74d', border: '#f57c00' }, // Shade 4
    { bg: '#ffa726', border: '#ef6c00' }  // Shade 5
];

const MATCH_BLUES = [
    { bg: '#e1f5fe', border: '#4fc3f7' }, // Shade 1
    { bg: '#b3e5fc', border: '#29b6f6' }, // Shade 2
    { bg: '#81d4fa', border: '#03a9f4' }, // Shade 3
    { bg: '#4fc3f7', border: '#039be5' }, // Shade 4
    { bg: '#29b6f6', border: '#0288d1' }  // Shade 5
];



// Helper to join words and fix punctuation spacing
window.cleanSentence = function(arr) {
    if (!arr || arr.length === 0) return "";
    // Join with spaces, then remove spaces before punctuation
    return arr.join(' ').replace(/\s+([.,!?;:])/g, '$1').trim();
};



/**
 * IMPROVED TTS FOR EXERCISES
 * Includes 1s delay and natural voice selection
 */
window.playTTS = function(text) {
    console.log("Initializing Smart TTS Engine...");

    // 1. Stop all current sounds/voices
    window.speechSynthesis.cancel();
    if (window.currentTTSAudio) { window.currentTTSAudio.pause(); window.currentTTSAudio = null; }
    if (typeof globalAudio !== 'undefined' && globalAudio) globalAudio.pause();

    // 2. The 1-Second Delay (Prevents word clipping)
    setTimeout(() => {
        // Prepare Clean Text
        const cleanText = text.replace("TTS: ", "").replace(/\[(.*?)\]\(.*?\)/g, '$1').trim();
        
        // --- TIER 1: HIGH-QUALITY SYSTEM VOICES ---
        const highQualityNames = [
            "Microsoft Aria Online", 
            "Google US English",      
            "Samantha",               
            "Microsoft Jenny Online", 
            "Microsoft Guy Online",   
            "Alex",                   
            "Google UK English"
        ];

        const availableVoices = window.speechSynthesis.getVoices();
        let bestSystemVoice = null;

        for (let name of highQualityNames) {
            bestSystemVoice = availableVoices.find(v => v.name.includes(name));
            if (bestSystemVoice) break;
        }

        // If a High-Quality voice is found, use it immediately
        if (bestSystemVoice) {
            console.log("Tier 1 - High Quality System Voice:", bestSystemVoice.name);
            const msg = new SpeechSynthesisUtterance(cleanText);
            msg.voice = bestSystemVoice;
            msg.rate = 0.88;
            window.speechSynthesis.speak(msg);
        } 
        // --- TIER 2: GOOGLE TRANSLATE HACK (Fallback for short texts) ---
        else if (cleanText.length < 200) {
            console.log("Tier 2 - High Quality Online Fallback (Google Translate)");
            try {
                const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanText)}`;
                const audio = new Audio(url);
                window.currentTTSAudio = audio;
                audio.play().catch(err => {
                    console.warn("Online Fallback failed, moving to Tier 3.");
                    speakTier3(cleanText, availableVoices);
                });
            } catch (e) {
                speakTier3(cleanText, availableVoices);
            }
        } 
        // --- TIER 3: BASIC SYSTEM VOICES (The last resort) ---
        else {
            speakTier3(cleanText, availableVoices);
        }
    }, 1000); 
};

// Helper for Tier 3 logic
function speakTier3(text, voices) {
    console.log("Tier 3 - Basic System Voice Fallback");
    const msg = new SpeechSynthesisUtterance(text);
    
    // Just find ANY English voice available on the device
    const fallback = voices.find(v => v.lang.startsWith('en')) || voices[0];
    if (fallback) msg.voice = fallback;
    
    msg.rate = 0.85;
    window.speechSynthesis.speak(msg);
}

// Ensures voices are loaded in the background
window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();




// 2. INITIALIZATION (With Error Catching)
window.initExercise = function(data) {
    exData = data;
    
    // Check if we are in Dashboard Mode
    if (data.isDashboard) {
        document.body.classList.remove('exercise-mode');
        document.body.classList.add('dashboard-view'); 
        
        // EXPLICITLY HIDE NAVIGATION CLUSTER
        const uiCluster = document.getElementById('ui-cluster');
        if (uiCluster) uiCluster.style.display = 'none';

        renderExerciseDashboard();
        return;
    }

    try {
        generateRandomSet(); 
        renderHeaderInfo();
        renderSidebar();
        startTimer();
        showPage(1);
        setupNavListeners();
    } catch (err) {
        console.error("Engine Crash:", err);
    }
};

function renderHeaderInfo() {
    // Safety check for elements
    const update = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };
    update('ex-grade', exData.grade);
    update('ex-bimester', "BIM " + exData.bimester);
    update('ex-chapter', "CH " + exData.chapter);
    update('menu-grade-label', exData.grade ? exData.grade.toUpperCase() : "");
}

// 3. RANDOMIZER
function generateRandomSet() {
    // True Randomization (Fisher-Yates Shuffle)
    const shuffle = (array) => {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    for (let i = 1; i <= 15; i++) {
        let pool = (i <= 10) ? exData.simplePool[i] : exData.contextPool[i];
        if (!pool || pool.length === 0) continue;

        let count = (i > 10 || i === 6) ? 1 : (i === 4 ? 6 : 3);
        
        // Randomly select 'count' items from the 40 (or 10) available in the pool
        let rawSelection = shuffle(pool).slice(0, count);

        activeSet[i] = rawSelection.map(item => {
            // Deep clone so we don't accidentally mutate the original data
            let processed = JSON.parse(JSON.stringify(item));

            // Standard Pool Shuffles
            if (i === 1) processed.shuffledWords = shuffle(item.words);
            else if (i === 2) processed.shuffledLines = shuffle(item.lines);
            else if ([3, 4, 7, 8, 9].includes(i)) processed.shuffledOptions = shuffle(item.options);
            else if (i === 6) processed.shuffledRight = shuffle(item.pairs.map(p => p.b));
            
            // --- CONTEXT POOL SHUFFLES (Pages 11-15) ---
            
            // Page 11: Shuffle dropdown options for each dialogue line
            else if (i === 11 && processed.lines) {
                processed.lines = processed.lines.map(line => {
                    if (line.options) line.options = shuffle(line.options);
                    return line;
                });
            }
            
            // Pages 12 & 13: Shuffle MCQ options for each question
            else if ((i === 12 || i === 13) && processed.questions) {
                processed.questions = processed.questions.map(q => {
                    if (q.options) q.options = shuffle(q.options);
                    return q;
                });
            }
            
            // Page 14: Shuffle the inline dropdown options hidden in the text (and trim spaces!)
            else if (i === 14 && processed.text) {
                processed.text = processed.text.replace(/\[(\d+)\] \((.*?)\)/g, (match, n, opts) => {
                    // Split by '/', trim spaces to fix scoring bugs, shuffle, and rejoin with '/'
                    let shuffledOpts = shuffle(opts.split('/').map(opt => opt.trim())).join('/');
                    return `[${n}] (${shuffledOpts})`;
                });
            }
            
            // Note: Page 15 is entirely fill-in-the-blank (no options to shuffle), 
            // but the outer shuffle ensures the text selected is 1 of 10 different possibilities.

            // Score Calc
            if(i === 6) maxPageScores[i] = 5;
            else if(i === 10) maxPageScores[i] = 2;
            else if(i > 10) maxPageScores[i] = 5; 
            else maxPageScores[i] = 1;
            
            return processed;
        });
    }
}

// 4. RENDERING LOGIC
function renderExercisePage(pageNum) {
    if (pageNum === 16) return renderResultPage();

    const data = activeSet[pageNum];
    if (!data) return `<p>Error: No data for page ${pageNum}</p>`;

    const isGranular = [1,2,3,4,5,7,8,9,10,12,13].includes(pageNum);
    const boxClass = isGranular ? 'granular-mode' : '';
    const isGlobalDone = isItemDone(pageNum, 0); 

    let html = `<div class="area-box ${boxClass} ${(!isGranular && isGlobalDone) ? 'disabled-mode' : ''}" data-page="${pageNum}">`;
    html += `<h3>${pageNum}. ${getExerciseTitle(pageNum)}</h3>`;

    if (pageNum <= 10) {
        if (pageNum === 6) {
            html += renderType6(data[0], 0, isGlobalDone);
        } else {
            data.forEach((item, idx) => {
                const isItemFinished = isItemDone(pageNum, idx);
                html += `<div class="question-block ${isItemFinished ? 'disabled-mode' : ''}" id="q-${pageNum}-${idx}">`;
                html += `<p class="q-number" style="color:var(--accent-orange); font-weight:bold;">Question ${idx+1}</p>`;
                
                if (pageNum === 1) html += renderType1(item, idx, isItemFinished);
                else if (pageNum === 2) html += renderType2(item, idx, isItemFinished);
                else if ([3, 7, 8].includes(pageNum)) html += renderType3(item, idx, isItemFinished);
                else if (pageNum === 4) html += renderType4(item, idx, isItemFinished);
                else if (pageNum === 5) html += renderType5(item, idx, isItemFinished);
                else if (pageNum === 9) html += renderType9(item, idx, isItemFinished);
                else if (pageNum === 10) html += renderType10(item, idx, isItemFinished);
                
                if (!isItemFinished) {
                    html += `<button class="item-check-btn" onclick="checkIndividualItem(${pageNum}, ${idx})">Check</button>`;
                } else {
                    html += getFeedbackHTML(pageNum, idx, item);
                }
                html += `</div>`;
            });
        }
    } else {
        const item = data[0];
        html += renderContextHeader(item, pageNum);
        html += `<div class="context-body">`;
        if ([12, 13].includes(pageNum)) {
            item.questions.forEach((q, idx) => {
                const isItemFinished = isItemDone(pageNum, idx);
                html += `<div class="question-block ${isItemFinished ? 'disabled-mode' : ''}" id="q-${pageNum}-${idx}">`;
                html += renderContextMCQItem(q, idx, isItemFinished, pageNum);
                if (!isItemFinished) html += `<button class="item-check-btn" onclick="checkIndividualItem(${pageNum}, ${idx})">Check</button>`;
                html += `</div>`;
            });
        } else {
            if (pageNum === 11) html += renderType11(item, isGlobalDone);
            else if (pageNum === 14) html += renderType14(item, isGlobalDone);
            else if (pageNum === 15) html += renderType15(item, isGlobalDone);
        }
        html += `</div>`;
    }

    if (!isGranular && !isGlobalDone) {
        html += `<button class="btn check-btn" onclick="checkGlobalPage(${pageNum})">CHECK PAGE</button>`;
    } 
    
    if (checkIfPageComplete(pageNum)) {
        html += `<div style="text-align:center; color:var(--success-green); font-weight:bold; margin-top:20px;">✓ Page Completed</div>`;
    }

    return html + `</div>`;
}

// 5. HELPER COMPONENTS (Renderers)
function renderType1(item, idx, isDone) {
    const state = getState(currentPage, idx);
    let dropWords = state ? state.dropped : [];
    let bankWords = state ? state.bank : item.shuffledWords;
    let boxStyle = "min-height:50px; padding:10px; border: 2px dashed #ccc; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; background: white; margin-bottom: 10px;";
    
    if (isDone) {
        // USE THE CLEANER HERE
        const userSentence = window.cleanSentence(dropWords);
        const isCorrect = userSentence === item.correct.trim();
        boxStyle += isCorrect ? "border: 2px solid #28a745; background-color: #d4edda;" : "border: 2px solid #dc3545; background-color: #f8d7da;";
    }


    return `<div class="word-bank" id="wb-1-${idx}">${bankWords.map(w => `<button class="word-btn" onclick="moveWord(this, 'drop-1-${idx}')">${w}</button>`).join('')}</div>
            <div class="drop-zone" id="drop-1-${idx}" data-answer="${item.correct}" style="${boxStyle}">${dropWords.map(w => `<button class="word-btn" onclick="moveWord(this, 'drop-1-${idx}')">${w}</button>`).join('')}</div>
            ${!isDone ? `<div style="text-align:right"><button class="reset-link" onclick="resetContainer('wb-1-${idx}', 'drop-1-${idx}')">Reset</button></div>` : ''}`;
}

function renderType2(item, idx, isDone) {
    const state = getState(currentPage, idx);
    const correctStr = item.order.map(i => item.lines[i]).join('|'); 
    let bankLines = state ? state.bank : item.shuffledLines;
    let dropLines = state ? state.dropped : [];
    let style = "min-height:100px; display:flex; flex-direction:column; padding:10px; border: 2px dashed #ccc; border-radius:8px;";
    if(isDone) {
        style += (dropLines.join('|') === correctStr) ? "border: 2px solid green; background:#d4edda;" : "border: 2px solid red; background:#f8d7da;";
    }
    return `<div class="word-bank" id="wb-2-${idx}">${bankLines.map(l => `<button class="word-btn" style="width:100%; text-align:left; margin-bottom:5px;" onclick="moveWord(this, 'drop-2-${idx}')">${l}</button>`).join('')}</div>
            <div class="drop-zone vertical" id="drop-2-${idx}" data-answer="${correctStr}" style="${style}">${dropLines.map(l => `<button class="word-btn" style="width:100%; text-align:left; margin-bottom:5px;" onclick="moveWord(this, 'drop-2-${idx}')">${l}</button>`).join('')}</div>
            ${!isDone ? `<div style="text-align:right"><button class="reset-link" onclick="resetContainer('wb-2-${idx}', 'drop-2-${idx}')">Reset</button></div>` : ''}`;
}

function renderType3(item, idx, isDone) {
    const state = getState(currentPage, idx);
    const sel = state ? state.selected : null;
    let txt = item.q || item.sent || "";
    if(currentPage === 8) txt = txt.replace(/\*\*(.*?)\*\*/g, '<span style="color:red; font-weight:bold;">$1</span>');

    return `<p><strong>${txt}</strong></p>
    <div class="options-container" data-answer="${item.a}">
        ${item.shuffledOptions.map(opt => {
            let css = ""; let icon = "";
            if(isDone) {
                if(opt === item.a) {
                    if(sel === item.a) {
                        // User chose correctly (GREEN)
                        css = "background:#d4edda; border-color:green; color:green;";
                        icon = " ✓";
                    } else {
                        // User missed it or chose wrong (BLUE)
                        css = "background:var(--paired-blue); border-color:var(--primary-blue); color:var(--primary-blue); font-weight:bold;";
                        icon = " (Correct)";
                    }
                } else if(opt === sel) {
                    // User's incorrect choice (RED)
                    css = "background:#f8d7da; border-color:red; color:red;";
                    icon = " ✗";
                }
            } else if(opt === sel) {
                css = "background:var(--selected-orange); border-color:var(--accent-orange);";
            }
            return `<div class="option" style="${css}" onclick="selectOpt(this)">${opt}${icon}</div>`;
        }).join('')}
    </div>`;
}

function renderType4(item, idx, isDone) {
    const state = getState(4, idx);
    const sel = state ? state.selected : null;
    return `<p class="sentence-display">${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="background:var(--selected-orange); padding:2px 5px;">$1</span>')}</p>
    <div class="options-container" data-answer="${item.a}">
        ${item.shuffledOptions.map(opt => {
            let css = ""; let icon = "";
            if(isDone) {
                if(opt === item.a) {
                    if(sel === item.a) {
                        css = "background:#d4edda; border-color:green; color:green;";
                        icon = " ✓";
                    } else {
                        css = "background:var(--paired-blue); border-color:var(--primary-blue); color:var(--primary-blue); font-weight:bold;";
                        icon = " (Correct)";
                    }
                } else if(opt === sel) {
                    css = "background:#f8d7da; border-color:red; color:red;";
                    icon = " ✗";
                }
            } else if(opt === sel) css = "background:var(--selected-orange); border-color:var(--accent-orange);";
            return `<div class="option" style="${css}" onclick="selectOpt(this)">${opt}${icon}</div>`;
        }).join('')}
    </div>
    ${isDone ? `<div style="margin-top:10px; font-style:italic; color:#666;">Def: ${item.def}</div>` : ''}`;
}

function renderType5(item, idx, isDone) {
    const state = getState(5, idx);
    const val = state ? state.value : '';
    let css = "width:100%; padding:10px; border:2px solid #eee; border-radius:5px;";
    if(isDone) css += (val.trim().toLowerCase() === item.correct.toLowerCase()) ? "border:2px solid green; background:#d4edda;" : "border:2px solid red; background:#f8d7da;";
    return `<p>${item.sent.replace(/\*\*(.*?)\*\*/g, '<span style="text-decoration:underline; text-decoration-color:red;">$1</span>')}</p>
    <input type="text" class="drill-input" data-answer="${item.correct}" value="${val}" placeholder="Type correction..." style="${css}">`;
}

function renderType6(item, idx, isDone) {
    const left = item.pairs.map(p => p.a);
    const right = item.shuffledRight;
    const state = userState[6] ? userState[6][0] : null; 

    const getStyle = (txt, col) => {
        if(!state || !state.pairs) return { css:'', paired:false };
        
        const pair = state.pairs.find(p => (col==='left' ? p.left : p.right) === txt);
        if(pair) {
            // Find if this specific pair is correct
            const correctMatch = item.pairs.find(p => p.a === pair.left);
            const isCorrect = correctMatch && correctMatch.b === pair.right;
            
            let c;
            if(isDone) {
                // If correct, use Blue shades. If wrong, use standard Red.
                if(isCorrect) {
                    c = MATCH_BLUES[pair.colorIdx % MATCH_BLUES.length];
                } else {
                    return { css: 'background-color:#f8d7da; border-color:#dc3545; color:#721c24;', paired:true };
                }
            } else {
                // Not checked yet, use Orange shades
                c = MATCH_ORANGES[pair.colorIdx % MATCH_ORANGES.length];
            }
            
            return { css: `background-color:${c.bg} !important; border-color:${c.border} !important;`, paired:true };
        }
        return { css:'', paired:false };
    };

    let html = `<div class="matching-container"><div class="match-column">`;
    left.forEach(l => {
        const s = getStyle(l, 'left');
        html += `<div class="match-item left-item ${s.paired?'paired':''}" style="${s.css}" data-text="${l}" data-col="left" onclick="handleMatchClick(this)">${l}</div>`;
    });
    html += `</div><div class="match-column">`;
    right.forEach(r => {
        const s = getStyle(r, 'right');
        html += `<div class="match-item right-item ${s.paired?'paired':''}" style="${s.css}" data-text="${r}" data-col="right" onclick="handleMatchClick(this)">${r}</div>`;
    });
    return html + `</div></div>`;
}

function renderType9(item, idx, isDone) {
    // Uses the 'audio' field from ex-sample.js which contains the TTS string
    return `<button class="tts-btn" style="margin-bottom:10px;" onclick="playTTS('${item.audio}')">
                <span>🔊</span> Listen to Question
            </button>` + renderType3(item, idx, isDone);
}

function renderType10(item, idx, isDone) {
    let html = `<button class="tts-btn" style="margin-bottom:10px;" onclick="playTTS('${item.audio}')">
                    <span>🔊</span> Listen to Sentence
                </button><div style="line-height:2.5;">`;
    
    item.sent.split('___').forEach((part, i, arr) => {
        html += part;
        if (i < arr.length - 1) {
            const state = getState(10, idx);
            const val = (state && state.values) ? state.values[i] : '';
            let style = "width:100px; padding:5px; border-bottom:2px solid #333; text-align:center; border-top:0; border-left:0; border-right:0; background:transparent;";
            
            if(isDone) {
                const isCorrect = val.toLowerCase().trim() === item.blanks[i].toLowerCase().trim();
                style += isCorrect ? " background:#d4edda; border-color:green;" : " background:#f8d7da; border-color:red;";
            }
            
            html += `<input type="text" class="drill-input multi" data-answer="${item.blanks[i]}" value="${val}" style="${style}">`;
            
            if(isDone && val.toLowerCase().trim() !== item.blanks[i].toLowerCase().trim()) {
                html += `<span style="color:var(--primary-blue); font-weight:bold; margin-left:5px;">(${item.blanks[i]})</span>`;
            }
        }
    });
    return html + `</div>`;
}

function renderContextHeader(item, pageNum) {
    let h = `<h4 style="color:var(--primary-blue); margin-bottom:10px;">${item.title || "Context"}</h4>`;
    
    // Page 12: Sticky Reading Passage
    if(pageNum === 12) {
        return `<div class="sticky-ctx-header">
                    ${h}
                    <div class="reading-box sticky-scroll" style="max-height:180px; overflow-y:auto; background:#f8f9fa; padding:15px; border-left:5px solid var(--primary-blue); border-radius:4px; font-size:0.95rem; line-height:1.6;">
                        ${item.text}
                    </div>
                </div>`;
    }
    
    // Page 13: Sticky TTS Button
    if(pageNum === 13) {
        return `<div class="sticky-ctx-header" style="background:white; padding:10px 0; border-bottom:2px solid var(--bg-alice-blue); margin-bottom:15px;">
                    ${h}
                    <button class="tts-btn" onclick="playTTS('${item.audio}')">
                        <span>🔊</span> Listen to Passage
                    </button>
                </div>`;
    }

    // Page 15: Listen and Complete (TTS Button not sticky)
    if(pageNum === 15) {
        h += `<button class="tts-btn" style="margin-bottom:15px;" onclick="playTTS('${item.audio}')">
                <span>🔊</span> Listen to Passage
              </button>`;
    }
    
    return h;
}

function renderContextMCQItem(q, idx, isDone, pageNum) {
    const state = getState(pageNum, idx);
    const sel = state ? state.selected : null;
    return `<p><strong>${idx+1}. ${q.q}</strong></p>
    <div class="options-container" data-answer="${q.a}">
        ${q.options.map(opt => {
            let css = ""; let icon = "";
            if(isDone) {
                if(opt === q.a) {
                    if(sel === q.a) {
                        css = "background:#d4edda; border-color:green; color:green;";
                        icon = " ✓";
                    } else {
                        css = "background:var(--paired-blue); border-color:var(--primary-blue); color:var(--primary-blue); font-weight:bold;";
                        icon = " (Correct)";
                    }
                } else if(opt === sel) {
                    css = "background:#f8d7da; border-color:red; color:red;";
                    icon = " ✗";
                }
            } else if(opt === sel) css = "background:var(--selected-orange); border-color:var(--accent-orange);";
            return `<div class="option" style="${css}" onclick="selectOpt(this)">${opt}${icon}</div>`;
        }).join('')}
    </div>`;
}

function renderType11(item, isDone) {
    let html = `<div style="background:#f9f9f9; padding:20px; border-radius:10px;">`;
    item.lines.forEach((line, i) => {
        const val = (userState[11] && userState[11][0] && userState[11][0].values) ? userState[11][0].values[i] : '';
        let style = "padding:5px; border-radius:5px;";
        let suffix = "";
        if(isDone) {
            if(val === line.a) style = "padding:5px; border-radius:5px; border:2px solid green; background:#d4edda;";
            else { style = "padding:5px; border-radius:5px; border:2px solid red; background:#f8d7da;"; suffix = `<span style="color:green; font-weight:bold;">(${line.a})</span>`; }
        }
        let sel = `<select class="drill-select" style="${style}"><option value="">...</option>${line.options.map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}</select>${suffix}`;
        html += `<p style="margin-bottom:10px;"><strong>${line.speaker}:</strong> ${line.text.replace('___', sel)}</p>`;
    });
    return html + `</div>`;
}

function renderType14(item, isDone) {
    let count = 0;
    // We keep the logic for generating dropdowns, but wrapped in a distinct container
    const interactiveText = item.text.replace(/\[(\d+)\] \((.*?)\)/g, (m, n, opts) => {
        const options = opts.split('/');
        const correct = item.answers[parseInt(n)-1];
        
        // Retrieve state
        const val = (userState[14] && userState[14][0] && userState[14][0].values) ? userState[14][0].values[count] : '';
        count++;

        let style = "margin:0 5px; padding:4px 8px; border-radius:4px; border:1px solid var(--primary-blue); cursor:pointer; font-family:'Poppins', sans-serif;";
        let suffix = "";

        if(isDone) {
            if(val === correct) {
                style += " border:2px solid green; background:#d4edda; color:green; font-weight:bold;";
            } else {
                style += " border:2px solid red; background:#f8d7da; color:red; text-decoration:line-through;";
                // Highlight correct answer in Blue as per your previous instruction
                suffix = ` <span style="color:var(--primary-blue); font-weight:bold; font-size:0.85rem;">(${correct})</span> `;
            }
        }

        return `<select class="drill-select" style="${style}">
                    <option value="">...</option>
                    ${options.map(o => `<option value="${o}" ${o===val?'selected':''}>${o}</option>`).join('')}
                </select>${suffix}`;
    });

    return `<div class="exercise-body" style="line-height:2.8; background:var(--bg-alice-blue); padding:20px; border-radius:12px;">
                <p style="font-weight:bold; color:var(--accent-orange); margin-bottom:10px; font-size:0.8rem; text-transform:uppercase;">Complete the gaps:</p>
                ${interactiveText}
            </div>`;
}


function renderType15(item, isDone) {
    let count = 0;
    return `<div class="reading-box" style="line-height:2.5;">${item.text.replace(/\[(\d+)\]/g, (m, n) => {
        const correct = item.answers[parseInt(n)-1];
        const val = (userState[15] && userState[15][0] && userState[15][0].values) ? userState[15][0].values[count] : '';
        count++;
        let style="width:120px; border:none; border-bottom:2px solid #333; text-align:center; background:transparent; margin:0 5px;";
        let suffix = "";
        if(isDone) {
            if(val.toLowerCase() === correct.toLowerCase()) style += " background:#d4edda; border:2px solid green; border-radius:4px;";
            else { style += " background:#f8d7da; border:2px solid red; border-radius:4px;"; suffix = `<span style="color:green; font-weight:bold;">(${correct})</span>`; }
        }
        return `<input type="text" class="drill-input" value="${val}" style="${style}">${suffix}`;
    })}</div>`;
}

// 6. CHECK LOGIC
window.checkIndividualItem = function(page, idx) {
    const block = document.getElementById(`q-${page}-${idx}`);
    if(!userState[page]) userState[page] = {};
    if(!itemScores[page]) itemScores[page] = {};

    let isCorrect = false;
    const item = (page <= 10) ? activeSet[page][idx] : activeSet[page][0];

    if(page === 1) { 
        const zone = block.querySelector('.drop-zone');
        const wordsArray = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText.trim());
        
        // Save the array of words to state
        userState[page][idx] = { dropped: wordsArray, bank: [] };
        
        // USE THE CLEANER HERE
        const userSentence = window.cleanSentence(wordsArray);
        isCorrect = (userSentence === item.correct.trim());
    }
    else if(page === 2) {
        const zone = block.querySelector('.drop-zone');
        const dropped = Array.from(zone.querySelectorAll('.word-btn')).map(b => b.innerText.trim());
        const correctStr = item.order.map(i => item.lines[i].trim()).join('|');
        userState[page][idx] = { dropped: dropped, bank: [] };
        isCorrect = (dropped.join('|') === correctStr);
    }
    else if([3,4,7,8,9].includes(page)) {
        const sel = block.querySelector('.option.selected');
        const val = sel ? sel.innerText.trim() : null;
        userState[page][idx] = { selected: val };
        isCorrect = (val === item.a);
    }
    else if(page === 5) {
        const val = block.querySelector('input').value.trim().toLowerCase();
        userState[page][idx] = { value: val };
        isCorrect = (val === item.correct.toLowerCase());
    }
    else if(page === 10) {
        const inputs = Array.from(block.querySelectorAll('input'));
        const vals = inputs.map(i => i.value.trim().toLowerCase());
        userState[page][idx] = { values: vals };
        isCorrect = vals.every((v, i) => v === item.blanks[i].toLowerCase());
    }
    else if([12, 13].includes(page)) {
        const qData = item.questions[idx];
        const sel = block.querySelector('.option.selected');
        const val = sel ? sel.innerText.trim() : null;
        userState[page][idx] = { selected: val };
        isCorrect = (val === qData.a);
    }

    itemScores[page][idx] = isCorrect ? 1 : 0;
    setItemDone(page, idx);
    showPage(page, false); 
};

window.checkGlobalPage = function(page) {
    const pageDiv = document.querySelector('.area-box');
    if(!userState[page]) userState[page] = {};
    if(!itemScores[page]) itemScores[page] = {};
    
    let correctCount = 0;
    const item = activeSet[page][0];

    if(page === 6) {
        let pairs = [];
        pageDiv.querySelectorAll('.match-item[data-col="left"]').forEach(l => {
             if(l.dataset.pairText) {
                 pairs.push({ left: l.innerText, right: l.dataset.pairText, colorIdx: parseInt(l.dataset.colorIdx) });
                 const match = item.pairs.find(p => p.a === l.innerText);
                 if (match && match.b === l.dataset.pairText) correctCount++;
             }
        });
        userState[page][0] = { pairs: pairs };
        // Page 6 has 5 pairs
        correctCount = (correctCount === 5) ? 1 : 0; // Mark whole page as 1 point or adjust as needed
    }
    else if([11,14].includes(page)) {
        const selects = Array.from(pageDiv.querySelectorAll('select'));
        const vals = selects.map(s => s.value);
        userState[page][0] = { values: vals };
        const answers = (page === 11) ? item.lines.map(l => l.a) : item.answers;
        const totalCorrect = vals.filter((v, i) => v === answers[i]).length;
        correctCount = totalCorrect / answers.length; // Percentage of the page
    }
    else if(page === 15) {
        const inputs = Array.from(pageDiv.querySelectorAll('input'));
        const vals = inputs.map(i => i.value.trim().toLowerCase());
        userState[page][0] = { values: vals };
        const totalCorrect = vals.filter((v, i) => v === item.answers[i].toLowerCase()).length;
        correctCount = totalCorrect / item.answers.length;
    }

    itemScores[page][0] = correctCount;
    setItemDone(page, 0);
    showPage(page, false);
};

// 7. NAVIGATION & STATE
function showPage(p, shouldScroll = true) {
    if(p < 1 || p > 16) return;
    
    // Check if we are moving to a NEW page or just refreshing the CURRENT one
    const isNewPage = (p !== currentPage);
    currentPage = p;
    
    const container = document.getElementById('lesson-content');
    const uiCluster = document.getElementById('ui-cluster'); 
    if (!container) return;

    // Render content
    container.innerHTML = (p === 16) ? renderResultPage() : renderExercisePage(p);
    
    // Setup Navigation Buttons
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (nextBtn) {
        nextBtn.disabled = (p === 16);
        nextBtn.onclick = () => showPage(currentPage + 1, true); // Navigation ALWAYS scrolls
    }
    if (prevBtn) {
        prevBtn.disabled = (p === 1);
        prevBtn.onclick = () => showPage(currentPage - 1, true); // Navigation ALWAYS scrolls
    }
    
    if (uiCluster) {
        uiCluster.style.visibility = (p === 16) ? 'hidden' : 'visible';
        uiCluster.style.pointerEvents = (p === 16) ? 'none' : 'auto';
    }
    
    renderSidebar();

    // ONLY scroll to top if it's a NEW page AND we haven't explicitly disabled scrolling
    if (isNewPage && shouldScroll) {
        window.scrollTo(0, 0);
    }

    const menu = document.getElementById('slide-menu');
    if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }

    checkPageCompletion(p);
}

function setItemDone(page, idx) {
    if(!itemStatus[page]) itemStatus[page] = {};
    itemStatus[page][idx] = true;
}
function isItemDone(page, idx) { return (itemStatus[page] && itemStatus[page][idx]); }

function checkIfPageComplete(page) {
    if (page >= 16) return true;
    if (!activeSet[page]) return false;

    // Standard Pool (Pages 1-10)
    if (page <= 10) {
        // Special case for Page 6 (Matching) which is one big block
        if (page === 6) return isItemDone(page, 0);
        
        // Others check every individual item in the set
        const count = activeSet[page].length;
        for (let i = 0; i < count; i++) {
            if (!isItemDone(page, i)) return false;
        }
        return true;
    } 

    // Context Pool with multiple sub-questions (Pages 12 & 13)
    if (page === 12 || page === 13) {
        const item = activeSet[page][0];
        const count = item.questions.length;
        for (let i = 0; i < count; i++) {
            if (!isItemDone(page, i)) return false;
        }
        return true;
    }

    // Context Pool with one big block (Pages 11, 14, 15)
    return isItemDone(page, 0);
}

function checkPageCompletion(page) {
    if (checkIfPageComplete(page)) {
        pageStatus[page] = true;
        // Refresh sidebar to show the new checkmark
        renderSidebar();
    }
    
    // Check if everything (1-15) is finished
    if(pageStatus.slice(1, 16).every(Boolean)) {
        clearInterval(timerInterval);
        isSessionFinished = true;
    }
}

function getState(page, idx) { return (userState[page] && userState[page][idx]) ? userState[page][idx] : null; }

function getFeedbackHTML(page, idx, item) {
    const state = getState(page, idx);
    if (!state) return '';

    // FEEDBACK FOR PAGE 1 (Sentences)
    if (page === 1) {
        const userSentence = window.cleanSentence(state.dropped);
        if (userSentence !== item.correct.trim()) {
            return `<div style="color:red; background:#ffebee; padding:5px; margin-top:5px; border-radius:4px;">
                        Correct: <b>${item.correct}</b>
                    </div>`;
        }
    }

    // FEEDBACK FOR PAGE 2 (Dialogues)
    if (page === 2) {
        const correctSequence = item.order.map(i => item.lines[i]);
        // If user's joined lines don't match the correct joined lines
        if (state.dropped.join('|') !== correctSequence.join('|')) {
            let feedback = `<div style="color:red; background:#ffebee; padding:10px; margin-top:10px; border-radius:8px; text-align:left;">`;
            feedback += `<strong style="font-size:0.8rem; display:block; margin-bottom:5px;">CORRECT SEQUENCE:</strong>`;
            correctSequence.forEach((line, i) => {
                feedback += `<div style="font-size:0.85rem; border-bottom:1px solid rgba(220,53,69,0.1); padding:2px 0;">
                                <span style="color:var(--accent-orange); font-weight:bold;">${i + 1}.</span> ${line}
                             </div>`;
            });
            feedback += `</div>`;
            return feedback;
        }
    }

    // FEEDBACK FOR PAGE 5 (Grammar Correction)
    if (page === 5 && state.value.trim().toLowerCase() !== item.correct.toLowerCase()) {
        return `<div style="color:green; font-weight:bold; margin-top:5px;">➜ ${item.correct}</div>`;
    }

    return '';
}

// 8. SIDEBAR
function renderSidebar() {
    const list = document.getElementById('nav-list');
    if (!list) return;
    list.innerHTML = '';
    
    const labels = [
        "Unscramble the Sentences", "Unscramble the Dialogues", "Quick Questions", 
        "Find the Meaning", "Correct the Sentences", "Match the Pairs", 
        "Choose the Best Answer", "Replace the Incorrect Vocabulary", "Listen & Answer", 
        "Complete the Sentences", "Complete the Dialogue", "Read & Answer", 
        "Listen & Answer (Context)", "Complete the Text", "Listen & Complete"
    ];

    labels.forEach((label, idx) => {
        const p = idx + 1;
        const isDone = pageStatus[p];
        const isActive = (currentPage === p);
        
        // Create the list item
        const li = document.createElement('li');
        li.className = `nav-step-item ${isActive ? 'active-page' : ''}`;
        li.onclick = () => showPage(p); // Clicking this changes page
        
        li.innerHTML = `
            <span class="nav-num">${isDone ? '✓' : p}</span>
            <span class="nav-label">${label}</span>
        `;
        
        list.appendChild(li);
    });
}

function setupNavListeners() {
    const menu = document.getElementById('slide-menu');
    const toggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close-btn');

    // Toggle menu expansion
    if (toggle) {
        toggle.onclick = (e) => {
            e.stopPropagation();
            menu.classList.toggle('active');
        };
    }

    // Close menu when clicking the X
    if (closeBtn) {
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            menu.classList.remove('active');
        };
    }

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== toggle) {
            menu.classList.remove('active');
        }
    });
}

function startTimer() {
    startTime = Date.now();
    const timerEl = document.getElementById('global-timer');
    timerInterval = setInterval(() => {
        const d = Math.floor((Date.now() - startTime)/1000);
        const m = Math.floor(d/60); const s = d%60;
        if (timerEl) timerEl.textContent = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
    }, 1000);
}

// 9. INTERACTIVE HANDLERS
window.moveWord = function(btn, zoneId) {
    if(btn.closest('.question-block')?.classList.contains('disabled-mode')) return;
    const zone = document.getElementById(zoneId);
    const bank = document.getElementById(zoneId.replace('drop', 'wb'));
    const target = (btn.parentElement === zone) ? bank : zone;
    target.appendChild(btn);
};

window.resetContainer = function(bankId, zoneId) {
    if(document.getElementById(bankId).closest('.question-block')?.classList.contains('disabled-mode')) return;
    const b=document.getElementById(bankId); const z=document.getElementById(zoneId);
    while(z.firstChild) b.appendChild(z.firstChild);
};

window.selectOpt = function(btn) {
    if(btn.closest('.question-block')?.classList.contains('disabled-mode')) return;
    btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
};

let matchSelection = null;
let pairCounter = 0;

window.handleMatchClick = function(el) {
    const pageBox = document.querySelector('.area-box');
    if(pageBox.classList.contains('disabled-mode')) return;

    // --- DESELECTION LOGIC ---
    // If the user clicks an item that is ALREADY part of a pair, break the pair
    if(el.dataset.pairText) {
        const partnerText = el.dataset.pairText;
        const allItems = document.querySelectorAll('.match-item');
        const partner = Array.from(allItems).find(item => item.innerText === partnerText && item.dataset.col !== el.dataset.col);
        
        [el, partner].forEach(item => {
            if(item) {
                item.classList.remove('paired', 'selected');
                item.style.backgroundColor = "";
                item.style.borderColor = "";
                delete item.dataset.pairText;
                delete item.dataset.colorIdx;
            }
        });
        return; 
    }

    // --- SELECTION LOGIC ---
    if(matchSelection === el) { 
        // Deselect if clicking the same item twice
        el.classList.remove('selected'); 
        matchSelection = null; 
        return; 
    }

    if(!matchSelection) { 
        // First item clicked
        matchSelection = el; 
        el.classList.add('selected'); 
    } else {
        // If clicking a second item in the SAME column, switch selection
        if(matchSelection.dataset.col === el.dataset.col) { 
            matchSelection.classList.remove('selected'); 
            matchSelection = el; 
            el.classList.add('selected'); 
            return; 
        }

        // --- PAIRING LOGIC ---
        const i1 = matchSelection; 
        const i2 = el;
        
        i1.classList.remove('selected'); 
        i1.classList.add('paired'); 
        i2.classList.add('paired');
        
        // Apply one of the Orange shades
        const c = MATCH_ORANGES[pairCounter % MATCH_ORANGES.length];
        i1.style.cssText = `background-color:${c.bg} !important; border-color:${c.border} !important;`;
        i2.style.cssText = `background-color:${c.bg} !important; border-color:${c.border} !important;`;
        
        // Link them
        i1.dataset.pairText = i2.innerText; 
        i2.dataset.pairText = i1.innerText;
        i1.dataset.colorIdx = pairCounter; 
        i2.dataset.colorIdx = pairCounter;
        
        pairCounter++; 
        matchSelection = null;
    }
};

function renderResultPage() {
    let totalQuestions = 0;
    let totalCorrect = 0;

    // Loop through all pages and calculate totals
    for (let p = 1; p <= 15; p++) {
        if (itemScores[p]) {
            Object.keys(itemScores[p]).forEach(key => {
                totalQuestions++;
                totalCorrect += itemScores[p][key];
            });
        }
    }

    const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const pagesCompleted = pageStatus.filter(p => p === true).length;

    return `
        <div class="area-box" style="text-align:center; padding:50px 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: var(--primary-blue); font-size: 2rem;">SESSION COMPLETE</h2>
            <p style="color: #666; margin-bottom: 30px;">Activity finished! Here is your performance summary:</p>
            
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 40px;">
                <div class="stat-box" style="width:120px;">
                    <div class="stat-num">${pagesCompleted}/15</div>
                    <div style="font-size:0.6rem; color:#999; font-weight:bold; text-transform:uppercase;">Steps Done</div>
                </div>
                <div class="stat-box" style="width:120px; border-color: var(--accent-orange);">
                    <div class="stat-num" style="color: var(--accent-orange);">${percentage}%</div>
                    <div style="font-size:0.6rem; color:#999; font-weight:bold; text-transform:uppercase;">Accuracy</div>
                </div>
            </div>

            <div style="display:flex; flex-direction:column; align-items:center; gap:15px;">
                <button class="btn" style="margin:0; width:220px;" onclick="location.reload()">RESTART REVIEW</button>
                <a href="exercises.html?id=ex-home" style="color: var(--primary-blue); font-weight: bold; text-decoration: none; font-size: 0.9rem;">🏠 BACK TO EXERCISES DASHBOARD</a>
            </div>
        </div>
    `;
}

function getExerciseTitle(n) { const t = ["Unscramble the Sentences", "Unscramble the Dialogues", "Quick Questions", "Find the Meaning", "Correct the Sentences", "Match the Pairs", "Choose the Best Answer", "Replace the Incorrect Vocabulary", "Listen & Answer", "Complete the Sentences", "Complete the Dialogue", "Read & Answer", "Listen & Answer (Context)", "Complete the Text", "Listen & Complete"]; return t[n-1]; }









function renderExerciseDashboard() {
    const container = document.getElementById('lesson-content');
    
    let html = `
        <div class="dashboard-intro" style="padding-top: 15px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                <h2 style="margin:0; color:var(--primary-blue); font-size:1.2rem;">Practice Portal</h2>
                <a href="index.html?lesson=home" class="btn" style="background:var(--text-dark); margin:0; font-size:0.7rem; padding: 6px 12px;">⬅ Exit</a>
            </div>
        </div>

        <!-- STICKY WRAPPING TABS -->
        <div class="sticky-tabs-wrapper">
            <div class="dashboard-tabs">
                ${exData.grades.map((g, i) => `
                    <button class="dash-tab-btn ${i===0?'active':''}" onclick="switchGradeTab(this, '${g.id}')">${g.label}</button>
                `).join('')}
            </div>
        </div>

        <div id="grade-content" class="area-box" style="margin-top: 15px;">
            ${renderGradeBimesters(exData.grades[0])}
        </div>
    `;
    container.innerHTML = html;
}

window.switchGradeTab = function(btn, gradeId) {
    document.querySelectorAll('.dash-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const grade = exData.grades.find(g => g.id === gradeId);
    const grid = document.getElementById('grade-content');
    grid.innerHTML = renderGradeBimesters(grade);

    // Scroll slightly so the user sees the top of the grid after switching
    const wrapper = document.querySelector('.sticky-tabs-wrapper');
    window.scrollTo({
        top: grid.offsetTop - wrapper.offsetHeight - 10,
        behavior: 'smooth'
    });
};

function renderGradeBimesters(grade) {
    const chaptersPerBim = exData.structure[grade.type].chaptersPerBimester;
    let html = `<div class="bimester-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px;">`;

    for (let b = 1; b <= 4; b++) {
        html += `
            <div class="bimester-box" style="background:var(--bg-alice-blue); padding:15px; border-radius:10px; border-top:4px solid var(--accent-orange);">
                <h4 style="color:var(--primary-blue); margin-bottom:10px;">Bimester ${b}</h4>
                <div style="display:flex; flex-direction:column; gap:8px;">
        `;

        for (let c = 1; c <= chaptersPerBim; c++) {
            // NEW NAMING CONVENTION:
            // This produces strings like "6-1-2" or "em1-2-5"
            const fileId = `${grade.id}-${b}-${c}`;
            
            // Note: Using 'id' as the URL parameter to match your exercises.html loader
            const link = `exercises.html?id=${fileId}`;
            
            html += `<a href="${link}" class="chapter-btn" style="text-decoration:none; background:white; padding:10px; border-radius:5px; border:1px solid var(--gray-light); color:var(--text-dark); font-weight:700; font-size:0.85rem; text-align:center;">Chapter ${c}</a>`;
        }

        html += `</div></div>`;
    }

    html += `</div>`;
    return html;
}