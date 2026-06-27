/**
 * ENGINE-EXERCISES.js - MASTER V10 (Final Integrated Version)
 */

// ============================================================
//  SESSION CONFIGURATOR — Initialization & Modal Controller
//  This block runs before the engine boots. It intercepts
//  initExercise(), shows the playlist modal, and once the
//  student picks a track, sets `activePageList` so the ← / →
//  buttons skip any page NOT in the chosen session.
// ============================================================

/** Global: ordered list of page numbers the student will navigate.
 *  Default = all 15 pages. Overwritten when a track is selected. */
let activePageList = [1,2,3,4,5,6,7,8,9,10,11,12,13];//14,15 hidden//

/* ---------- Playlist Definitions ---------- */
const SC_PLAYLISTS = {
    // Group 1 — By Time
    time: {
        complete:  [1,2,3,4,5,6,7,8,9,10,11,12,13],//14,15 hidden//
        quick:     [2,5,9],
        homework:  [1,3,6,11],//14 hidden//
        mock:      [4,7,8,10,12,13]//15 hidden//
    },
    // Group 2 — By Category
    category: {
        receptive:  [1,3,4,5],
        structural: [2,6,9],
        acoustic:   [10,11,12,13],
        generative: [7,8]//14,15 hidden//
    }
};

/* Exercise labels (reused from sidebar) */
const SC_LABELS = [
    "Block Harvesting", "Mechanic Identification", "Categorization Sort",
    "The Deconstruction Drill", "The Block Detective", "Contextual Assembly",
    "Block Swapping", "The Expansion Drill", "The Connector Bridge",
    "The Block Jumble", "The Echo-Shadow", "Backchaining",
    "The Rhythmic Pulse"//14,15 hidden//, "The Free Build", "The Next Chapter"
];

/* ---------- Populate Custom Checkbox List ---------- */
(function populateCheckboxes() {
    // Wait for DOM — the HTML block is above the <script> tag,
    // so the element exists by the time this runs.
    const list = document.getElementById('sc-checkbox-list');
    if (!list) return;
    for (let i = 1; i <= 13; i++) {//14,15 hidden >> "(let i = 1; i <= 15; i++)"//
        const item = document.createElement('div');
        item.className = 'sc-checkbox-item';
        item.dataset.page = i;
        item.onclick = function () { toggleCustomCheckbox(this); };
        item.innerHTML =
            `<span class="sc-checkbox-box">✓</span>` +
            `<span class="sc-checkbox-num">${i}</span>` +
            `<span class="sc-checkbox-label">${SC_LABELS[i - 1]}</span>`;
        list.appendChild(item);
    }
})();

/* ---------- Tab Switching ---------- */
window.switchConfigTab = function (key) {
    document.querySelectorAll('.sc-tab').forEach(t => {
        t.classList.toggle('active', t.id === `sc-tab-${key}`);
        t.setAttribute('aria-selected', t.id === `sc-tab-${key}`);
    });
    document.querySelectorAll('.sc-panel').forEach(p => {
        p.classList.toggle('active', p.id === `sc-panel-${key}`);
    });
};

/* ---------- Preset Selection (Time / Category) ---------- */
window.selectPreset = function (group, card) {
    // Deselect siblings
    card.closest('.sc-radio-group')
        .querySelectorAll('.sc-radio-card')
        .forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    card.querySelector('input').checked = true;

    // Enable the launch button
    const btn = document.getElementById(`sc-launch-${group}`);
    btn.disabled = false;
    btn.textContent = '🚀 Launch Session';
};

/* ---------- Custom Checkbox Logic ---------- */
window.toggleCustomCheckbox = function (item) {
    item.classList.toggle('checked');
    updateCustomCount();
};

window.toggleAllCustom = function () {
    const items = document.querySelectorAll('.sc-checkbox-item');
    const allChecked = [...items].every(i => i.classList.contains('checked'));
    items.forEach(i => i.classList.toggle('checked', !allChecked));
    document.getElementById('sc-toggle-all').textContent = allChecked ? 'Select All' : 'Clear All';
    updateCustomCount();
};

function updateCustomCount() {
    const checked = document.querySelectorAll('.sc-checkbox-item.checked');
    const count = checked.length;
    document.getElementById('sc-custom-count').textContent = `${count} selected`;
    const btn = document.getElementById('sc-launch-custom');
    btn.disabled = (count === 0);
    btn.textContent = count === 0 ? 'Select at least 1 exercise' : `🚀 Launch ${count} Exercise${count > 1 ? 's' : ''}`;
}

/* ---------- Launch Session ---------- */
window.launchSession = function (group) {
    let pages = [];

    if (group === 'time') {
        const val = document.querySelector('input[name="sc-time"]:checked').value;
        pages = SC_PLAYLISTS.time[val];
    } else if (group === 'category') {
        const val = document.querySelector('input[name="sc-category"]:checked').value;
        pages = SC_PLAYLISTS.category[val];
    } else if (group === 'custom') {
        document.querySelectorAll('.sc-checkbox-item.checked').forEach(item => {
            pages.push(parseInt(item.dataset.page, 10));
        });
        pages.sort((a, b) => a - b);
    }

    if (pages.length === 0) return;

    // Commit the active page list globally
    activePageList = pages;

    // Close modal with animation
    const overlay = document.getElementById('session-configurator-overlay');
    overlay.classList.add('sc-closing');
    setTimeout(() => {
        overlay.remove();
        document.body.classList.remove('sc-modal-open');
    }, 340);

    // Now let the engine render the first active page
    if (typeof window._scPendingInit === 'function') {
        window._scPendingInit();
    }
};

/* ---------- Intercept Body Scroll on Load ---------- */
// The modal HTML is already in the DOM.  Lock scroll immediately.
document.body.classList.add('sc-modal-open');


// --- 1. GLOBAL VARIABLES ---
let exData = null;
let activeSet = {};      
let userState = {};      
let itemStatus = {};     
let showTranslations = false;     
let pageStatus = new Array(16).fill(false); 
let currentPage = 1;
let totalPages = 15;
let itemScores = {}; 
let pageScores = new Array(16).fill(0);     
let maxPageScores = new Array(16).fill(0);  
let timerInterval;
let startTime;
let isSessionFinished = false;

window.userRecordings = {}; 
let mediaRecorder = null;
let audioChunks = [];
// --- BROWSER SUPPORT CHECKER ---
const supportsSpeechRecognition = ('SpeechRecognition' in window) || ('webkitSpeechRecognition' in window);

const MATCH_ORANGES = [
    { bg: '#fff3e0', border: '#ffb74d' }, 
    { bg: '#ffe0b2', border: '#ffa726' }, 
    { bg: '#ffcc80', border: '#fb8c00' }, 
    { bg: '#ffb74d', border: '#f57c00' }, 
    { bg: '#ffa726', border: '#ef6c00' }  
];

// --- CSS OVERRIDE ---
document.head.insertAdjacentHTML('beforeend', `
<style>
    .disabled-mode button.tts-btn, 
    .disabled-mode button.item-check-btn,
    .disabled-mode button.dash-tab-btn { 
        display: inline-flex !important; 
        pointer-events: auto !important; 
    }
</style>
`);

// --- 2. CORE HELPERS (TTS & TEXT) ---
window.cleanSentence = function(arr) {
    if (!arr || arr.length === 0) return "";
    return arr.join(' ').replace(/\s+([.,!?;:])/g, '$1').trim();
};

window.playTTS = function(text) {
    window.speechSynthesis.cancel();
    if (window.currentTTSAudio) { window.currentTTSAudio.pause(); window.currentTTSAudio = null; }
    
    setTimeout(() => {
        const cleanText = text.replace("TTS: ", "").replace(/\[(.*?)\]\(.*?\)/g, '$1').trim();
        const highQualityNames = ["Microsoft Aria Online", "Google US English", "Samantha", "Microsoft Jenny Online", "Alex", "Google UK English"];
        const availableVoices = window.speechSynthesis.getVoices();
        let bestSystemVoice = availableVoices.find(v => highQualityNames.some(name => v.name.includes(name)));

        if (bestSystemVoice) {
            const msg = new SpeechSynthesisUtterance(cleanText);
            msg.voice = bestSystemVoice;
            msg.rate = 0.88;
            window.speechSynthesis.speak(msg);
        } else {
            const msg = new SpeechSynthesisUtterance(cleanText);
            msg.voice = availableVoices.find(v => v.lang.startsWith('en')) || availableVoices[0];
            msg.rate = 0.85;
            window.speechSynthesis.speak(msg);
        }
    }, 500); 
};

window.playTextarea = function(id) {
    let el = document.getElementById(id);
    if(el && el.value) playTTS(el.value);
};

// --- 3. INITIALIZATION ---
window.initExercise = function(data) {
    exData = data;

    // Dashboard pages bypass the Session Configurator entirely
    if (data.isDashboard) {
        document.body.classList.remove('exercise-mode');
        document.body.classList.add('dashboard-view'); 
        const uiCluster = document.getElementById('ui-cluster');
        if (uiCluster) uiCluster.style.display = 'none';
        // Remove the modal if present (dashboards don't need it)
        const overlay = document.getElementById('session-configurator-overlay');
        if (overlay) overlay.remove();
        document.body.classList.remove('sc-modal-open');
        renderExerciseDashboard();
        return;
    }

    document.body.classList.remove('dashboard-view');
    document.body.classList.add('exercise-mode');

    // Store the actual boot sequence so launchSession() can trigger it
    // after the student picks a playlist.
    function bootEngine() {
        try {
            generateRandomSet(); 
            renderHeaderInfo();
            renderSidebar();
            startTimer();
            showPage(activePageList[0]);  // Start on the FIRST active page
            setupNavListeners();
        } catch (err) {
            console.error("Engine Crash:", err);
        }
    }

    // If the modal is still on screen, defer boot.
    const overlay = document.getElementById('session-configurator-overlay');
    if (overlay) {
        window._scPendingInit = bootEngine;
    } else {
        // Modal was already dismissed (e.g. page reload after selection)
        bootEngine();
    }
};

// --- HEADER & METADATA RENDERER ---
function renderHeaderInfo() {
    // Helper to safely update HTML text
    const update = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };

    // Update the Top Header & Menu using REACH COURSE IDs
    update('ex-grade', exData.grade);
    update('ex-bimester', "BIM " + exData.bimester);
    update('ex-chapter', "CH " + exData.chapter);
    update('menu-grade-label', exData.grade ? exData.grade.toUpperCase() : "");
}

// --- 4. RANDOMIZER ---
function generateRandomSet() {
    const shuffle = (array) => {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    for (let i = 1; i <= 15; i++) {
        let pool = exData.simplePool[i];
        if (!pool || pool.length === 0) continue;

        let rawSelection = shuffle(pool).slice(0, 3);
        activeSet[i] = rawSelection.map(item => {
            let processed = JSON.parse(JSON.stringify(item));
            if (i === 3) processed.word_pool = shuffle(processed.word_pool);
            else if (i === 5) processed.multiple_choice_options = shuffle(processed.multiple_choice_options);
            else if (i === 6) processed.available_blocks = shuffle(processed.available_blocks);
            else if (i === 9) processed.connector_pool = shuffle(processed.connector_pool);
            else if (i === 10) processed.shattered_blocks = shuffle(processed.shattered_blocks);
            else if (i === 15) processed.branching_starters = shuffle(processed.branching_starters);
            maxPageScores[i] = 1; 
            return processed;
        });
    }
}

// --- 5. ROUTER & MAIN RENDERER ---
function renderExercisePage(pageNum) {
    if (pageNum === 16) return renderResultPage();
    const data = activeSet[pageNum];
    if (!data) return `<p>Error: No data for page ${pageNum}</p>`;

    let html = `<div class="area-box granular-mode" data-page="${pageNum}">`;
    html += `<h3>${pageNum}. ${getExerciseTitle(pageNum)}</h3>`;

    const safeInstruction = getExerciseInstructions(pageNum).replace(/'/g, "\\'").replace(/"/g, "&quot;");

    let toggleHtml = "";
    if (pageNum === 7 || pageNum === 8) {
        toggleHtml = `
            <div class="translation-toggle-container">
                <span class="toggle-label">turn on/off translations</span>
                <label class="switch">
                    <input type="checkbox" id="translation-toggle" ${showTranslations ? 'checked' : ''} onchange="toggleTranslations(this.checked)">
                    <span class="slider round"></span>
                </label>
            </div>
        `;
    }

    html += `<div class="exercise-instructions" style="background-color: #fdfbf7; padding: 15px; border-left: 4px solid var(--accent-orange); border-radius: 8px; margin-top: 15px; margin-bottom: 30px; color: var(--text-dark); font-size: 0.95rem; line-height: 1.6; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 5px; flex-wrap: wrap; gap: 10px;">
                    <strong style="color: var(--accent-orange); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px;">How to do it</strong> 
                    <div style="display:flex; align-items:center; gap:10px;">
                        ${toggleHtml}
                        <button class="tts-btn" style="padding: 4px 10px; font-size: 0.8rem; background: var(--primary-blue);" onclick="playTTS('${safeInstruction}')">🔊 Listen</button>
                    </div>
                </div>
                ${getExerciseInstructions(pageNum)}
             </div>`;

    data.forEach((item, idx) => {
        const isItemFinished = isItemDone(pageNum, idx);
        
        html += `<div class="question-block ${isItemFinished ? 'disabled-mode' : ''}" id="q-${pageNum}-${idx}">`;
        html += `<p class="q-number" style="color:var(--accent-orange); font-weight:bold;">Question ${idx+1}</p>`;
        
        if (pageNum === 1) html += renderType1(item, idx, isItemFinished);
        else if (pageNum === 2) html += renderType2(item, idx, isItemFinished);
        else if (pageNum === 3) html += renderType3(item, idx, isItemFinished);
        else if (pageNum === 4) html += renderType4(item, idx, isItemFinished);
        else if (pageNum === 5) html += renderType5(item, idx, isItemFinished);
        else if (pageNum === 6) html += renderType6(item, idx, isItemFinished);
        else if (pageNum === 7) html += renderType7(item, idx, isItemFinished);
        else if (pageNum === 8) html += renderType8(item, idx, isItemFinished);
        else if (pageNum === 9) html += renderType9(item, idx, isItemFinished);
        else if (pageNum === 10) html += renderType10(item, idx, isItemFinished);
        else if (pageNum === 11) html += renderType11(item, idx, isItemFinished);
        else if (pageNum === 12) html += renderType12(item, idx, isItemFinished);
        else if (pageNum === 13) html += renderType13(item, idx, isItemFinished);
        else if (pageNum === 14) html += renderType14(item, idx, isItemFinished);
        else if (pageNum === 15) html += renderType15(item, idx, isItemFinished);
        
        // Dynamic Check Button or TTS Button
        if (!isItemFinished && ![7, 8, 11, 12, 13].includes(pageNum)) {
            html += `<button class="item-check-btn" onclick="checkIndividualItem(${pageNum}, ${idx})">Check</button>`;
        } else if (isItemFinished && [1, 2, 3, 4, 5, 6, 9, 10, 14, 15].includes(pageNum)) {
            html += getTTSButtonForPage(pageNum, item, idx);
        }
        html += `</div>`;
    });

    if (checkIfPageComplete(pageNum)) {
        html += `<div style="text-align:center; color:var(--success-green); font-weight:bold; margin-top:20px;">✓ Page Completed</div>`;
    }

    return html + `</div>`;
}

// Generate the TTS Button that replaces Check
// Generate the TTS Button that replaces Check
function getTTSButtonForPage(pageNum, item, idx) {
    let ttsStr = "";
    let btnLabel = "🔊 Read Answer";
    
    if (pageNum === 1) {
        ttsStr = item.source_media.filter(c => c.is_target).map(c => c.text).join(' ');
        btnLabel = "🔊 Read Target Blocks";
    } else if (pageNum === 2) {
        ttsStr = item.corrected_sentence;
        btnLabel = "🔊 Read Correct Sentence";
    } else if (pageNum === 3) {
        ttsStr = item.categories.map(cat => cat + ". " + item.word_pool.filter(w => w.c === cat).map(w => w.w).join(', ')).join('. ');
        btnLabel = "🔊 Read Correct Sorting";
    } else if (pageNum === 4) {
        ttsStr = item.complex_sentence.filter(c => !c.deletable).map(c => c.text_chunk).join(' ');
        btnLabel = "🔊 Read Core Sentence";
    } else if (pageNum === 5) {
        const correctOpt = item.multiple_choice_options.find(o => o.is_correct).text;
        ttsStr = item.masked_sentence.replace(/\[.*?\]/, correctOpt);
        btnLabel = "🔊 Read Correct Sentence";
    } else if (pageNum === 6) {
        ttsStr = item.correct_sequence.join(' ');
        btnLabel = "🔊 Read Correct Sentence";
    } else if (pageNum === 9) {
        ttsStr = `${item.clause_A} ${item.correct_connector} ${item.clause_B}`;
        btnLabel = "🔊 Read Connected Sentence";
    } else if (pageNum === 10) {
        ttsStr = item.expected_sentence;
        btnLabel = "🔊 Read Correct Sentence";
    } else if (pageNum === 14) {
        return `<button class="item-check-btn tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; margin-top:15px; border-radius:20px;" onclick="window.playTextarea('free-build-14-${idx}')">🔊 Read Your Sentence</button>`;
    } else if (pageNum === 15) {
        return `<button class="item-check-btn tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; margin-top:15px; border-radius:20px;" onclick="window.playTextarea('narrative-input-15-${idx}')">🔊 Read Your Narrative</button>`;
    }
    
    if (!ttsStr) return "";
    const safeStr = ttsStr.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    return `<button class="item-check-btn tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; margin-top:15px; border-radius:20px;" onclick="playTTS('${safeStr}')">${btnLabel}</button>`;
}

// --- 6. EXERCISE RENDERERS ---

function renderType1(item, idx, isDone) {
    const state = getState(1, idx);
    let html = `<p style="font-size: 1.1rem; line-height: 1.8;">`;
    item.source_media.forEach((chunk, i) => {
        const isSelected = state && state.selected && state.selected.includes(i);
        let cssClass = isSelected ? "harvested" : "";
        if (isDone) {
            if (chunk.is_target && isSelected) cssClass = "harvested correct-field";
            else if (!chunk.is_target && isSelected) cssClass = "harvested incorrect-field";
            else if (chunk.is_target && !isSelected) cssClass = "missed-field"; 
        }
        html += `<span class="harvest-chunk ${cssClass}" onclick="toggleHarvest(this, ${i}, 1, ${idx})">${chunk.text}</span> `;
    });
    return html + `</p>`;
}
window.toggleHarvest = function(btn, chunkIdx, page, idx) {
    if (btn.closest('.disabled-mode')) return;
    btn.classList.toggle('harvested');
    if (!userState[page]) userState[page] = {};
    if (!userState[page][idx]) userState[page][idx] = { selected: [] };
    const arr = userState[page][idx].selected;
    if (btn.classList.contains('harvested')) arr.push(chunkIdx);
    else arr.splice(arr.indexOf(chunkIdx), 1);
};

function renderType2(item, idx, isDone) {
    const state = getState(2, idx);
    const selIdx = state ? state.selectedIndex : null;
    let html = `<div style="display:flex; flex-wrap:wrap; gap:8px;">`;
    
    item.block_segments.forEach((seg, i) => {
        let css = (selIdx === i) ? "selected" : "";
        if (isDone) {
            if (selIdx === i) css = seg.is_error ? "correct-field" : "incorrect-field";
            else if (seg.is_error) css = "missed-field"; 
        }
        html += `<button class="option ${css}" style="padding:10px; border-radius:8px; display:inline-block;" onclick="selectMechanic(this, ${i}, 2, ${idx})">${seg.text_segment}</button>`;
    });
    
    if (isDone) {
        const isUserCorrect = (selIdx !== undefined && item.block_segments[selIdx].is_error);
        const boxColor = isUserCorrect ? 'var(--success-green)' : 'var(--error-red)';
        const bgColor = isUserCorrect ? '#d4edda' : '#f8d7da';
        html += `</div><div class="correction-hint" style="margin-top:10px; padding:10px; background:${bgColor}; border-left:4px solid ${boxColor}; border-radius:4px;">
                    <div style="font-size:0.8rem; font-weight:bold; color:${boxColor};">CORRECT SENTENCE:</div>
                    <div style="font-weight:bold; color:var(--text-dark);">${item.corrected_sentence}</div>
                 </div>`;
    } else {
        html += `</div>`;
    }
    return html;
}
window.selectMechanic = function(btn, chunkIdx, page, idx) {
    if (btn.closest('.disabled-mode')) return;
    btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (!userState[page]) userState[page] = {};
    if (!userState[page][idx]) userState[page][idx] = {};
    userState[page][idx].selectedIndex = chunkIdx;
};

function renderType3(item, idx, isDone) {
    const state = getState(3, idx);
    const placed = (state && state.placed) ? state.placed : {};
    
    let html = `<div class="word-bank" id="wb-3-${idx}" style="min-height:50px; padding:10px; border:2px dashed #ccc; border-radius:8px; display:flex; gap:8px; flex-wrap:wrap; margin-bottom:15px;">`;
    
    item.word_pool.forEach(obj => {
        if (!placed[obj.w]) html += `<button class="word-btn" onclick="selectSortWord(this)">${obj.w}</button>`;
    });
    html += `</div>`;

    if (isDone) {
        let allCorrect = true;
        Object.keys(placed).forEach(w => {
            if (placed[w] !== item.word_pool.find(o => o.w === w).c) allCorrect = false;
        });
        if (!allCorrect || Object.keys(placed).length < item.word_pool.length) {
            let correctMap = item.word_pool.map(o => `<span style="background:white; padding:2px 6px; border-radius:4px; font-size:0.8rem; border:1px solid #ccc;">${o.w} ➔ <b>${o.c}</b></span>`).join(' ');
            html += `<div style="background:#f8d7da; padding:10px; border-left:4px solid var(--error-red); border-radius:4px; margin-bottom:15px;">
                        <div style="font-size:0.8rem; font-weight:bold; color:var(--error-red); margin-bottom:5px;">CORRECT PLACEMENTS:</div>
                        <div style="display:flex; flex-wrap:wrap; gap:5px;">${correctMap}</div>
                     </div>`;
        }
    }

    html += `<div class="bucket-container" style="display:flex; gap:10px; flex-wrap:wrap;">`;
    item.categories.forEach(cat => {
        html += `<div class="sort-bucket" data-category="${cat}" onclick="receiveSortWord(this, 3, ${idx})" style="flex:1; min-width:120px; border:2px solid var(--primary-blue); border-radius:8px; padding:10px; background:var(--bg-alice-blue); display:flex; flex-direction:column; gap:8px; align-items:center;">
                    <div style="font-weight:bold; color:var(--primary-blue); border-bottom:1px solid var(--primary-blue); width:100%; text-align:center; padding-bottom:5px;">${cat}</div>`;
        item.word_pool.forEach(obj => {
            if (placed[obj.w] === cat) {
                let css = isDone ? (obj.c === cat ? "correct-field" : "incorrect-field") : "";
                html += `<button class="word-btn ${css}" onclick="returnWordToBank(this, '${obj.w}', 3, ${idx}, event)">${obj.w}</button>`;
            }
        });
        html += `</div>`;
    });
    return html + `</div>`;
}
let activeSortWord = null;
window.selectSortWord = function(btn) {
    if (btn.closest('.disabled-mode')) return;
    if (activeSortWord) activeSortWord.style.backgroundColor = "";
    activeSortWord = btn;
    btn.style.backgroundColor = "var(--selected-orange)";
};
window.receiveSortWord = function(bucket, page, idx) {
    if (bucket.closest('.disabled-mode') || !activeSortWord) return;
    const word = activeSortWord.innerText;
    const cat = bucket.dataset.category;
    if (!userState[page]) userState[page] = {};
    if (!userState[page][idx]) userState[page][idx] = { placed: {} };
    userState[page][idx].placed[word] = cat;
    activeSortWord = null;
    showPage(page, false); 
};
window.returnWordToBank = function(btn, word, page, idx, event) {
    event.stopPropagation(); 
    if (btn.closest('.disabled-mode')) return;
    delete userState[page][idx].placed[word];
    showPage(page, false); 
};

function renderType4(item, idx, isDone) {
    let html = `<p class="sentence-display" style="line-height:2.2; font-size:1.1rem;">`;
    const deletedArr = (userState[4] && userState[4][idx] && userState[4][idx].deleted) ? userState[4][idx].deleted : [];
    
    item.complex_sentence.forEach((chunk, i) => {
        let css = "";
        if (isDone) {
            const isDeleted = deletedArr.includes(i);
            if (isDeleted && chunk.deletable) css = "correct-deleted";
            else if (isDeleted && !chunk.deletable) css = "incorrect-deleted";
            else if (!isDeleted && chunk.deletable) css = "missed-field";
        }
        html += `<span class="deconstruct-chunk ${css}" data-idx="${i}" data-deletable="${chunk.deletable}" onclick="toggleDeconstruct(this, ${i}, 4, ${idx})">${chunk.text_chunk}</span> `;
    });
    return html + `</p>`;
}
window.toggleDeconstruct = function(btn, i, page, idx) {
    if (btn.closest('.disabled-mode')) return;
    btn.classList.toggle('deleted');
    if (!userState[page]) userState[page] = {};
    if (!userState[page][idx]) userState[page][idx] = { deleted: [] };
    const arr = userState[page][idx].deleted;
    if (btn.classList.contains('deleted')) arr.push(i);
    else arr.splice(arr.indexOf(i), 1);
};

function renderType5(item, idx, isDone) {
    const state = getState(5, idx);
    const sel = state ? state.selectedOption : null;

    let html = `<p style="font-size: 1.1rem; margin-bottom: 15px;"><strong>${item.masked_sentence}</strong></p>
                <div class="options-container" style="display:flex; flex-direction:column; gap:8px;">`;

    item.multiple_choice_options.forEach(opt => {
        let css = "";
        let icon = "";
        if (isDone) {
            if (opt.text === sel) {
                css = opt.is_correct ? "correct-field" : "incorrect-field";
                icon = opt.is_correct ? " ✓" : " ✗";
            } else if (opt.is_correct) {
                css = "missed-field"; 
                icon = " (Correct Answer)";
            }
        } else if (opt.text === sel) css = "selected";
        
        const safeText = opt.text.replace(/'/g, "\\'");
        html += `<div class="option ${css}" onclick="selectBlockDetective(this, '${safeText}', 5, ${idx})">${opt.text}${icon}</div>`;
    });
    return html + `</div>`;
}
window.selectBlockDetective = function(btn, val, page, idx) {
    if (btn.closest('.disabled-mode')) return;
    btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (!userState[page]) userState[page] = {};
    userState[page][idx] = { selectedOption: val };
};

function renderType6(item, idx, isDone) {
    const state = getState(6, idx);
    let bankWords = state && state.droppedWords ? (item.available_blocks.filter(w => !state.droppedWords.includes(w))) : item.available_blocks;
    let dropWords = state && state.droppedWords ? state.droppedWords : [];
    
    let html = `<p style="font-weight:bold; color:var(--primary-blue); margin-bottom:10px;">Cue: ${item.context_cue}</p>`;
    let boxStyle = "min-height:50px; padding:10px; border: 2px dashed #ccc; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; background: white; margin-bottom: 10px;";
    
    if (isDone) {
        if (dropWords.join('|') === item.correct_sequence.join('|')) {
            boxStyle += "border: 2px solid var(--success-green); background-color: #d4edda;";
        } else {
            boxStyle += "border: 2px solid var(--error-red); background-color: #f8d7da;";
            html += `<div class="correction-hint" style="color:var(--error-red); font-weight:bold; margin-bottom:10px;">
                        Correct: <span style="color:var(--text-dark)">${item.correct_sequence.join(' ')}</span>
                     </div>`;
        }
    }

    html += `<div class="word-bank" id="wb-6-${idx}" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:15px;">
                ${bankWords.map(w => `<button class="word-btn" onclick="moveSequenceWord(this, 'drop-6-${idx}')">${w}</button>`).join('')}
             </div>
             <div class="drop-zone" id="drop-6-${idx}" style="${boxStyle}">
                ${dropWords.map(w => `<button class="word-btn" onclick="moveSequenceWord(this, 'drop-6-${idx}')">${w}</button>`).join('')}
             </div>
             ${!isDone ? `<div style="text-align:right"><button class="reset-link" onclick="resetSequence('wb-6-${idx}', 'drop-6-${idx}')">Reset</button></div>` : ''}`;
    return html;
}

window.moveSequenceWord = function(btn, zoneId) {
    if (btn.closest('.disabled-mode')) return;
    const zone = document.getElementById(zoneId);
    const bank = document.getElementById(zoneId.replace('drop', 'wb'));
    const target = (btn.parentElement === zone) ? bank : zone;
    target.appendChild(btn);
};
window.resetSequence = function(bankId, zoneId) {
    if (document.getElementById(bankId).closest('.disabled-mode')) return;
    const b = document.getElementById(bankId); 
    const z = document.getElementById(zoneId);
    while (z.firstChild) b.appendChild(z.firstChild);
};

// --- EXERCISE 7 (Step-by-step TTS & STT Dictation) ---
// --- EXERCISE 7 (Multiline Textareas & Safe STT Dictation) ---
function renderType7(item, idx, isDone) {
    const state = getState(7, idx) || { step: 0, answers: {} };
    let currentStep = state.step;
    let baseTts = item.base_sentence.replace(/'/g, "\\'");
    
    let html = `<div style="display:flex; flex-direction:column; gap:15px;">`;
    html += `<div style="margin-bottom:5px;"><button class="tts-btn" style="padding:4px 10px; font-size:0.8rem;" onclick="playTTS('${baseTts}')">🔊 Read Base Sentence</button></div>`;

    for (let i = 0; i <= currentStep; i++) {
        if (i >= item.swaps.length) continue; 
        
        let val = state.answers[i] || '';
        let isStepDone = (i < currentStep) || isDone; 
        let css = "width:100%; padding:10px; border:2px solid #ccc; border-radius:5px; font-family:'Poppins'; font-weight:bold; margin:0; line-height:1.4; resize:vertical; min-height:54px;";
        let hint = "";
        let ttsStr = item.swaps[i].expected.replace(/'/g, "\\'");

        if (isStepDone) {
            let expected = item.swaps[i].expected.replace(/[.,?]/g, '').toLowerCase();
            let cleanedVal = val.replace(/[.,?]/g, '').toLowerCase();
            if (cleanedVal === expected) {
                css += " border-color:var(--success-green); background:#d4edda; color:var(--success-green); pointer-events:none;";
            } else {
                css += " border-color:var(--error-red); background:#f8d7da; color:var(--error-red); text-decoration:line-through; pointer-events:none;";
                hint = `<div style="color:var(--success-green); font-weight:bold; margin-top:5px; font-size:0.9rem;">Correct: ${item.swaps[i].expected}</div>`;
            }
        }

        const currentCue = (showTranslations && item.swaps[i].cue_pt) ? item.swaps[i].cue_pt : item.swaps[i].cue;
        let instructionText = (i === 0) 
            ? `Start with: <b>"${item.base_sentence}"</b> <br> Swap cue: <span style="background:var(--selected-orange); padding:2px 6px; border-radius:4px; color:var(--accent-orange);">${currentCue}</span>`
            : `Swap cue: <span style="background:var(--selected-orange); padding:2px 6px; border-radius:4px; color:var(--accent-orange);">${currentCue}</span>`;

        // Only draw the Mic button if the browser supports it
        let micButtonHtml = (!isStepDone && supportsSpeechRecognition) 
            ? `<button class="tts-btn" style="padding:10px; height:54px; min-width:44px; background:var(--primary-blue); display:flex; align-items:center; justify-content:center;" onclick="toggleDictation('input-7-${idx}-${i}', this)" title="Speak your answer">🎤</button>` 
            : '';

        let ttsButtonHtml = isStepDone 
            ? `<button class="tts-btn" style="padding:10px; height:54px; min-width:44px; display:flex; align-items:center; justify-content:center; background:#d4edda; color:var(--success-green); border:2px solid var(--success-green);" onclick="playTTS('${ttsStr}')">🔊</button>` 
            : '';

        html += `
            <div style="background:#f9f9f9; padding:15px; border-radius:8px; border-left:4px solid var(--primary-blue);">
                <p style="font-size:0.9rem; margin-bottom:10px;">${instructionText}</p>
                <div style="display:flex; gap:10px; align-items:flex-start; width:100%;">
                    <div style="flex-grow:1;">
                        <textarea id="input-7-${idx}-${i}" class="drill-input" placeholder="Type ${supportsSpeechRecognition ? 'or speak ' : ''}sentence..." rows="2" style="${css}" ${isStepDone ? 'disabled' : ''}>${val}</textarea>
                    </div>
                    ${micButtonHtml}
                    ${ttsButtonHtml}
                </div>
                ${hint}
                ${!isStepDone ? `<button class="item-check-btn" onclick="checkIndividualItem(7, ${idx})" style="margin-top:10px;">Check Step</button>` : ''}
            </div>
        `;
    }
    return html + `</div>`;
}

// --- EXERCISE 8 (Multiline Textareas & Safe STT Dictation) ---
function renderType8(item, idx, isDone) {
    const state = getState(8, idx) || { step: 0, answers: {} };
    let currentStep = state.step;
    let html = `<div style="display:flex; flex-direction:column; gap:15px;">`;

    for (let i = 0; i <= currentStep; i++) {
        if (i >= item.stages.length) continue; 
        let val = state.answers[i] || '';
        let isStepDone = (i < currentStep) || isDone; 
        let css = "width:100%; padding:10px; border:2px solid #ccc; border-radius:5px; font-family:'Poppins'; margin:0; line-height:1.4; resize:vertical; min-height:54px;";
        let hint = "";
        let ttsStr = item.stages[i].expected.replace(/'/g, "\\'");

        if (isStepDone) {
            if (val.toLowerCase() === item.stages[i].expected.toLowerCase()) {
                css += " border-color:var(--success-green); background:#d4edda; pointer-events:none;";
            } else {
                css += " border-color:var(--error-red); background:#f8d7da; pointer-events:none;";
                hint = `<div style="font-size:0.8rem; color:var(--error-red); font-weight:bold; margin-top:3px;">Correct: <span style="color:var(--text-dark)">${item.stages[i].expected}</span></div>`;
            }
        }

        const currentIncoming = (showTranslations && item.stages[i].incoming_block_pt) ? item.stages[i].incoming_block_pt : item.stages[i].incoming_block;

        // Only draw the Mic button if the browser supports it
        let micButtonHtml = (!isStepDone && supportsSpeechRecognition) 
            ? `<button class="tts-btn" style="padding:10px; height:54px; min-width:44px; background:var(--primary-blue); display:flex; align-items:center; justify-content:center;" onclick="toggleDictation('input-8-${idx}-${i}', this)" title="Speak your answer">🎤</button>` 
            : '';

        let ttsButtonHtml = isStepDone 
            ? `<button class="tts-btn" style="padding:10px; height:54px; min-width:44px; display:flex; align-items:center; justify-content:center; background:#d4edda; color:var(--success-green); border:2px solid var(--success-green);" onclick="playTTS('${ttsStr}')">🔊</button>` 
            : '';

        html += `
            <div style="background:#f9f9f9; padding:15px; border-radius:8px; border-left:4px solid var(--primary-blue);">
                <div style="font-size:0.8rem; font-weight:bold; color:#666; margin-bottom:5px;">STAGE ${i+1}</div>
                <div style="font-weight:bold; color:var(--accent-orange); margin-bottom:8px;">+ "${currentIncoming}"</div>
                <div style="display:flex; gap:10px; align-items:flex-start; width:100%;">
                    <div style="flex-grow:1;">
                        <textarea id="input-8-${idx}-${i}" class="drill-input" placeholder="Type ${supportsSpeechRecognition ? 'or speak ' : ''}sentence..." rows="2" style="${css}" ${isStepDone ? 'disabled' : ''}>${val}</textarea>
                    </div>
                    ${micButtonHtml}
                    ${ttsButtonHtml}
                </div>
                ${hint}
                ${!isStepDone ? `<button class="item-check-btn" onclick="checkIndividualItem(8, ${idx})" style="margin-top:10px;">Check Stage</button>` : ''}
            </div>
        `;
    }
    return html + `</div>`;
}

function renderType9(item, idx, isDone) {
    const state = getState(9, idx);
    const sel = state ? state.selectedOption : null;

    let html = `<div style="display:flex; flex-direction:column; gap:15px; align-items:center; background:#fdfbf7; border: 2px solid var(--bg-alice-blue); padding:20px; border-radius:12px; text-align:center;">
                    <p style="font-size:1.2rem; font-weight:bold; color:var(--primary-blue);">${item.clause_A}</p>
                    <div style="background:white; border:2px dashed #ccc; padding:15px; border-radius:8px; width:100%;">
                        <div class="options-container" style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center;">`;

    item.connector_pool.forEach(opt => {
        let css = "";
        let icon = "";
        if (isDone) {
            if (opt === sel) {
                css = (opt === item.correct_connector) ? "correct-field" : "incorrect-field";
                icon = (opt === item.correct_connector) ? " ✓" : " ✗";
            } else if (opt === item.correct_connector) css = "missed-field"; 
        } else if (opt === sel) css = "selected";
        
        html += `<div class="option ${css}" style="margin-bottom:0; flex:1; min-width:100px; padding:8px;" onclick="selectConnector(this, '${opt}', 9, ${idx})">${opt}${icon}</div>`;
    });

    html += `           </div>
                    </div>
                    <p style="font-size:1.2rem; font-weight:bold; color:var(--primary-blue);">${item.clause_B}</p>
                </div>`;
    return html;
}
window.selectConnector = function(btn, val, page, idx) {
    if (btn.closest('.disabled-mode')) return;
    btn.parentElement.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (!userState[page]) userState[page] = {};
    userState[page][idx] = { selectedOption: val };
};

function renderType10(item, idx, isDone) {
    const state = getState(10, idx);
    let bankWords = state && state.droppedWords ? (item.shattered_blocks.filter(w => !state.droppedWords.includes(w))) : item.shattered_blocks;
    let dropWords = state && state.droppedWords ? state.droppedWords : [];
    
    let html = `<p style="font-weight:bold; color:var(--primary-blue); margin-bottom:10px;">Unscramble the blocks:</p>`;
    let boxStyle = "min-height:50px; padding:10px; border: 2px dashed #ccc; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 8px; background: white; margin-bottom: 10px;";
    
    if (isDone) {
        if (dropWords.join(' ') === item.expected_sentence) {
            boxStyle += "border: 2px solid var(--success-green); background-color: #d4edda;";
        } else {
            boxStyle += "border: 2px solid var(--error-red); background-color: #f8d7da;";
            html += `<div class="correction-hint" style="color:var(--error-red); font-weight:bold; margin-bottom:10px;">
                        Correct: <span style="color:var(--text-dark)">${item.expected_sentence}</span>
                     </div>`;
        }
    }

    html += `<div class="word-bank" id="wb-10-${idx}" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:15px;">
                ${bankWords.map(w => `<button class="word-btn" onclick="moveSequenceWord(this, 'drop-10-${idx}')">${w}</button>`).join('')}
             </div>
             <div class="drop-zone" id="drop-10-${idx}" style="${boxStyle}">
                ${dropWords.map(w => `<button class="word-btn" onclick="moveSequenceWord(this, 'drop-10-${idx}')">${w}</button>`).join('')}
             </div>
             ${!isDone ? `<div style="text-align:right"><button class="reset-link" onclick="resetSequence('wb-10-${idx}', 'drop-10-${idx}')">Reset</button></div>` : ''}`;
    
    return html;
}

// --- AUDIO HELPERS FOR 11, 12, 13 ---
window.toggleRecording = async function(btn, page, idx) {
    if (!navigator.mediaDevices) return alert("Microphone not supported on this browser.");
    const playBtn = document.getElementById(`play-rec-${page}-${idx}`);
    if (btn.classList.contains('is-recording')) {
        mediaRecorder.stop();
        btn.classList.remove('is-recording');
        btn.innerHTML = "🎙️ Record";
        btn.style.background = "var(--error-red)";
    } else {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
                window.userRecordings[`${page}-${idx}`] = URL.createObjectURL(audioBlob);
                audioChunks = [];
                if(playBtn) playBtn.style.display = 'inline-block';
            };
            audioChunks = [];
            mediaRecorder.start();
            btn.classList.add('is-recording');
            btn.innerHTML = "⏹ Recording... Click to Stop";
            btn.style.background = "#333";
            if(playBtn) playBtn.style.display = 'none';
            // Mark the item done right after they start a recording session
            setItemDone(page, idx);
        } catch (err) {
            alert("Microphone permission denied.");
        }
    }
};

window.playUserRecording = function(page, idx) {
    const url = window.userRecordings[`${page}-${idx}`];
    if(url) {
        const audio = new Audio(url);
        audio.play();
    }
};


// --- SPEECH-TO-TEXT (DICTATION) HELPER ---
// --- SPEECH-TO-TEXT (DICTATION) HELPER ---
window.activeDictation = null;
window.toggleDictation = function(inputId, btn) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Speech recognition is not supported on this browser.");
        return;
    }

    if (window.activeDictation) {
        window.activeDictation.stop();
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; 
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function() {
        window.activeDictation = recognition;
        btn.style.background = "var(--error-red)";
        btn.innerHTML = "🛑"; 
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const inputEl = document.getElementById(inputId);
        if (inputEl) {
            // Strip the trailing period Safari sometimes adds automatically
            inputEl.value = transcript.replace(/\.$/, ''); 
        }
    };

    recognition.onerror = function(event) {
        console.warn("Speech recognition error:", event.error);
        if(event.error === 'not-allowed') {
            alert("Microphone access was denied. Please check your browser permissions.");
        }
    };

    recognition.onend = function() {
        window.activeDictation = null;
        btn.style.background = "var(--primary-blue)";
        btn.innerHTML = "🎤"; 
    };

    try {
        recognition.start();
    } catch (e) {
        console.error("Speech Recognition failed to start:", e);
    }
};







function renderType11(item, idx, isDone) {
    let waveHtml = item.waveform_data.map(h => `<div class="wave-bar" style="height:${h * 3}px;"></div>`).join('');
    return `<div style="background:#222; padding:20px; border-radius:12px; color:white; text-align:center;">
                <div class="waveform-box">${waveHtml}</div>
                <p style="font-size:1.5rem; font-weight:bold; color:var(--accent-orange); margin-bottom:20px;">"${item.transcript_text}"</p>
                <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
                    <button class="tts-btn" onclick="playTTS('${item.transcript_text}')">🔊 Master Audio</button>
                    <button class="tts-btn" style="background:var(--error-red);" onclick="toggleRecording(this, 11, ${idx})">🎙️ Record</button>
                    <button id="play-rec-11-${idx}" class="tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; display:${window.userRecordings[`11-${idx}`] ? 'inline-block' : 'none'};" onclick="playUserRecording(11, ${idx})">▶️ Play Yours</button>
                </div>
            </div>`;
}

function renderType12(item, idx, isDone) {
    let html = `<div style="display:flex; flex-direction:column; gap:10px; background:#f9f9f9; padding:15px; border-radius:8px;">`;
    
    item.phonetic_chunks.forEach((chunkText, i) => {
        let isLast = (i === item.phonetic_chunks.length - 1);
        // Only show the first chunk initially, unless the exercise is already finished
        let display = (i === 0 || isDone) ? 'flex' : 'none'; 
        
        html += `
        <div id="chunk-12-${idx}-${i}" style="display:${display}; flex-direction:column; padding:10px; border-bottom:1px solid #ddd;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:1.1rem; font-weight:bold; color:var(--text-dark);">${chunkText}</span>
                <button class="tts-btn" onclick="playTTS12('${chunkText.replace(/'/g, "\\'")}', ${idx}, ${i})">🔊 Listen</button>
            </div>
            
            <!-- Actions Container (Hidden until audio is played) -->
            <div id="actions-12-${idx}-${i}" style="display:${isDone ? 'flex' : 'none'}; margin-top:15px; justify-content:center; gap:10px; flex-wrap:wrap;">
                ${!isLast ? 
                    `<button class="tts-btn" style="background:var(--error-red);" onclick="toggleRecording(this, 12, '${idx}-${i}')">🎙️ Record Practice</button>
                     <button id="play-rec-12-${idx}-${i}" class="tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; display:${window.userRecordings[`12-${idx}-${i}`] ? 'inline-block' : 'none'};" onclick="playUserRecording(12, '${idx}-${i}')">▶️ Play Yours</button>
                     <button class="tts-btn" id="next-btn-12-${idx}-${i}" style="background:var(--primary-blue);" onclick="revealNextChunk12(${idx}, ${i})">Next Line ⬇️</button>`
                : 
                    `<button class="tts-btn" style="background:var(--error-red);" onclick="toggleRecording(this, 12, ${idx})">🎙️ Record Final</button>
                     <button id="play-rec-12-${idx}" class="tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; display:${window.userRecordings[`12-${idx}`] ? 'inline-block' : 'none'};" onclick="playUserRecording(12, ${idx})">▶️ Play Yours</button>`
                }
            </div>
        </div>`;
    });
    
    html += `</div>`;
    return html;
}

// --- HELPER FUNCTIONS FOR TYPE 12 PROGRESSIVE REVEAL ---
window.playTTS12 = function(text, idx, step) {
    playTTS(text); // Play the audio
    // Reveal the Record and Next buttons for this specific line
    const actions = document.getElementById(`actions-12-${idx}-${step}`);
    if (actions) {
        actions.style.display = 'flex';
    }
};

window.revealNextChunk12 = function(idx, step) {
    // Reveal the next line
    const nextChunk = document.getElementById(`chunk-12-${idx}-${step + 1}`);
    if (nextChunk) {
        nextChunk.style.display = 'flex';
    }
    // Hide the "Next" button so they can't click it multiple times
    const nextBtn = document.getElementById(`next-btn-12-${idx}-${step}`);
    if (nextBtn) {
        nextBtn.style.display = 'none'; 
    }
};

function renderType13(item, idx, isDone) {
    let cuesHtml = item.cue_pool.map(c => `<div style="padding:10px; background:white; border:2px solid var(--primary-blue); border-radius:8px; font-weight:bold; text-align:center;">${c}</div>`).join('');
    let playAllString = item.cue_pool.join(", ");
    return `<div style="background:var(--bg-alice-blue); padding:20px; border-radius:12px; text-align:center;">
                <p style="font-weight:bold; font-size:1.1rem; color:var(--primary-blue); margin-bottom:15px;">Drill (${item.base_bpm} BPM)</p>
                <div id="visual-metronome-${idx}" style="width:50px; height:50px; border-radius:50%; background:var(--gray-light); margin:0 auto 20px auto; transition:0.1s;"></div>
                <div style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
                    <button class="btn" id="metro-btn-${idx}" onclick="toggleMetronome(${item.base_bpm}, ${idx})" style="margin:0; background:var(--accent-orange);">Start Metronome</button>
                    <button class="tts-btn" onclick="playTTS('${playAllString}')">🔊 Listen to All</button>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">${cuesHtml}</div>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <button class="tts-btn" style="background:var(--error-red);" onclick="toggleRecording(this, 13, ${idx})">🎙️ Record Drill</button>
                    <button id="play-rec-13-${idx}" class="tts-btn" style="background:#d4edda; color:var(--success-green); border:2px solid var(--success-green); font-weight:bold; display:${window.userRecordings[`13-${idx}`] ? 'inline-block' : 'none'};" onclick="playUserRecording(13, ${idx})">▶️ Play Yours</button>
                </div>
            </div>`;
}

window.toggleMetronome = function(bpm, idx) {
    const btn = document.getElementById(`metro-btn-${idx}`);
    const dot = document.getElementById(`visual-metronome-${idx}`);
    if (dot.dataset.running === "true") {
        clearInterval(window[`metroInt_${idx}`]);
        dot.dataset.running = "false";
        btn.innerText = "Start Metronome";
        dot.style.background = "var(--gray-light)";
        dot.style.transform = "scale(1)";
    } else {
        dot.dataset.running = "true";
        btn.innerText = "Stop Metronome";
        const msPerBeat = 60000 / bpm;
        window[`metroInt_${idx}`] = setInterval(() => {
            dot.style.background = "var(--success-green)";
            dot.style.transform = "scale(1.2)";
            setTimeout(() => { 
                dot.style.background = "var(--gray-light)"; 
                dot.style.transform = "scale(1)";
            }, 150);
        }, msPerBeat);
    }
};

function renderType14(item, idx, isDone) {
    const state = getState(14, idx);
    const val = state ? state.value : "";
    let style = "width:100%; padding: 15px; border-radius: 8px; border: 2px solid var(--primary-blue); font-family: 'Poppins'; margin-top:15px;";
    
    if (isDone) {
        const regex = new RegExp(item.validation_regex, 'i');
        style += regex.test(val) ? " background:#d4edda; border-color:var(--success-green);" : " background:#f8d7da; border-color:var(--error-red);";
    }

    return `<div style="background: white; padding: 20px; border-radius:12px; box-shadow:var(--shadow);">
                <p style="font-size:1.1rem; color:var(--primary-blue); font-weight:bold;">${item.scenario_prompt}</p>
                <p style="font-size:0.85rem; color:#666; margin-top:10px;">Use blocks: <span style="font-weight:bold;">${item.mastered_inventory.join(' | ')}</span></p>
                <textarea id="free-build-14-${idx}" class="free-build-input" rows="3" style="${style}">${val}</textarea>
            </div>`;
}

function renderType15(item, idx, isDone) {
    const state = getState(15, idx);
    const val = state ? state.value : "";
    let style = "width:100%; padding: 15px; border-radius: 8px; border: 2px solid var(--primary-blue); font-family: 'Poppins'; margin-top:15px;";
    
    if (isDone) style += (val.trim().length > 15) ? " background:#d4edda; border-color:var(--success-green);" : " background:#f8d7da; border-color:var(--error-red);";

    let startersHtml = item.branching_starters.map(s => `<button class="dash-tab-btn" style="margin-right:10px; margin-bottom:10px;" onclick="injectStarter(this, 15, ${idx})">${s}</button>`).join('');

    return `<div style="background:var(--bg-alice-blue); padding:20px; border-radius:12px;">
                <p style="font-style:italic; font-size:1.1rem; border-left:4px solid var(--primary-blue); padding-left:15px;">"${item.current_narrative}"</p>
                <p style="font-weight:bold; color:var(--accent-orange); margin-top:15px; margin-bottom:10px;">${item.prompt_question}</p>
                <div>${startersHtml}</div>
                <textarea id="narrative-input-15-${idx}" rows="3" style="${style}">${val}</textarea>
            </div>`;
}
window.injectStarter = function(btn, page, idx) {
    if (btn.closest('.disabled-mode')) return;
    const txtArea = document.getElementById(`narrative-input-15-${idx}`);
    txtArea.value = btn.innerText + " ";
    txtArea.focus();
};

// --- 7. VALIDATION ENGINE ---
window.checkIndividualItem = function(page, idx) {
    const block = document.getElementById(`q-${page}-${idx}`);
    if(!userState[page]) userState[page] = {};
    if(!userState[page][idx]) userState[page][idx] = {};
    if(!itemScores[page]) itemScores[page] = {};

    let isCorrect = false;
    const item = activeSet[page][idx];

    if (page === 1) { 
        const selected = userState[page][idx].selected || [];
        const targets = item.source_media.map((ch, i) => ch.is_target ? i : -1).filter(i => i !== -1);
        isCorrect = (selected.length === targets.length && selected.every(val => targets.includes(val)));
    }
    else if (page === 2) {
        const selIdx = userState[page][idx].selectedIndex;
        isCorrect = (selIdx !== undefined && item.block_segments[selIdx].is_error === true);
    }
    else if (page === 3) {
        const state = userState[page][idx].placed || {};
        let allCorrect = true;
        if (Object.keys(state).length < item.word_pool.length) allCorrect = false;
        Object.keys(state).forEach(w => {
            const correctCat = item.word_pool.find(obj => obj.w === w).c;
            if (state[w] !== correctCat) allCorrect = false;
        });
        isCorrect = allCorrect;
    }
    else if (page === 4) {
        const chunks = Array.from(block.querySelectorAll('.deconstruct-chunk'));
        isCorrect = chunks.every((c, i) => {
            const isDeleted = c.classList.contains('deleted');
            const shouldDelete = item.complex_sentence[i].deletable;
            return isDeleted === shouldDelete;
        });
    }
    else if (page === 5 || page === 9) {
        const sel = block.querySelector('.option.selected');
        const val = sel ? sel.innerText.trim() : null;
        userState[page][idx].selectedOption = val;
        const correctAns = page === 5 ? item.multiple_choice_options.find(o => o.is_correct).text : item.correct_connector;
        isCorrect = (val === correctAns);
    }
    else if (page === 6) {
        const dropped = Array.from(block.querySelector('.drop-zone').querySelectorAll('.word-btn')).map(b => b.innerText.trim());
        userState[page][idx].droppedWords = dropped;
        isCorrect = (dropped.join('|') === item.correct_sequence.join('|'));
    }
    else if (page === 10) {
        const dropped = Array.from(block.querySelector('.drop-zone').querySelectorAll('.word-btn')).map(b => b.innerText.trim());
        userState[page][idx].droppedWords = dropped;
        isCorrect = (dropped.join(' ') === item.expected_sentence);
    }
    else if (page === 7) {
        if (!userState[page][idx].step) userState[page][idx].step = 0;
        let step = userState[page][idx].step;
        const inputStr = block.querySelector(`#input-7-${idx}-${step}`).value.trim().toLowerCase();
        const cleanInput = inputStr.replace(/[.,?]/g, '');
        const cleanExpected = item.swaps[step].expected.replace(/[.,?]/g, '').toLowerCase();

        if (!userState[page][idx].answers) userState[page][idx].answers = {};
        userState[page][idx].answers[step] = inputStr; 

        userState[page][idx].step++; 
        if (userState[page][idx].step >= item.swaps.length) {
            let allCorrect = true;
            for (let i = 0; i < item.swaps.length; i++) {
                let cIn = (userState[page][idx].answers[i] || "").replace(/[.,?]/g, '').toLowerCase();
                let cEx = item.swaps[i].expected.replace(/[.,?]/g, '').toLowerCase();
                if (cIn !== cEx) allCorrect = false;
            }
            isCorrect = allCorrect; 
            setItemDone(page, idx); 
        }
    }
    else if (page === 8) {
        if (!userState[page][idx].step) userState[page][idx].step = 0;
        let step = userState[page][idx].step;
        const inputStr = block.querySelector(`#input-8-${idx}-${step}`).value.trim().toLowerCase();
        
        if (!userState[page][idx].answers) userState[page][idx].answers = {};
        userState[page][idx].answers[step] = inputStr;

        userState[page][idx].step++;
        if (userState[page][idx].step >= item.stages.length) {
            let allCorrect = true;
            for (let i = 0; i < item.stages.length; i++) {
                if ((userState[page][idx].answers[i] || "").toLowerCase() !== item.stages[i].expected.toLowerCase()) {
                    allCorrect = false;
                }
            }
            isCorrect = allCorrect;
            setItemDone(page, idx);
        }
    }
    else if (page === 11 || page === 12 || page === 13) {
        isCorrect = true; 
    }
    else if (page === 14) {
        const val = block.querySelector('textarea').value.trim();
        userState[page][idx].value = val;
        const regex = new RegExp(item.validation_regex, 'i');
        isCorrect = regex.test(val);
    }
    else if (page === 15) {
        const val = block.querySelector('textarea').value.trim();
        userState[page][idx].value = val;
        isCorrect = val.length > 15;
    }

    if (page !== 7 && page !== 8) {
        itemScores[page][idx] = isCorrect ? 1 : 0;
        setItemDone(page, idx);
    } else if (isItemDone(page, idx) || isCorrect) {
        itemScores[page][idx] = isCorrect ? 1 : 0;
        if (isCorrect) setItemDone(page, idx);
    }

    showPage(page, false); 
};

// --- 8. NAVIGATION, UI, AND STATE ---

function showPage(p, shouldScroll = true) {
    // --- RESULT PAGE sentinel: one past the last active page ---
    const RESULT_PAGE = 16;
    const isResult = (p === RESULT_PAGE);

    if (p < 1 || p > RESULT_PAGE) return;
    const isNewPage = (p !== currentPage);
    currentPage = p;
    const container = document.getElementById('lesson-content');
    const uiCluster = document.getElementById('ui-cluster'); 
    if (!container) return;

    container.innerHTML = isResult ? renderResultPage() : renderExercisePage(p);
    
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    // --- Navigation now respects activePageList ---
    const idx = activePageList.indexOf(p);
    const isFirstActive = (idx === 0);
    const isLastActive  = (idx === activePageList.length - 1);

    if (nextBtn) {
        nextBtn.disabled = isResult;
        nextBtn.onclick = () => {
            if (isLastActive) { showPage(RESULT_PAGE, true); }
            else if (idx >= 0) { showPage(activePageList[idx + 1], true); }
        };
    }
    if (prevBtn) {
        prevBtn.disabled = isFirstActive || isResult;
        prevBtn.onclick = () => {
            if (isResult) { showPage(activePageList[activePageList.length - 1], true); }
            else if (idx > 0) { showPage(activePageList[idx - 1], true); }
        };
    }
    if (uiCluster) {
        uiCluster.style.visibility = isResult ? 'hidden' : 'visible';
        uiCluster.style.pointerEvents = isResult ? 'none' : 'auto';
    }
    
    renderSidebar();

    if (isNewPage && shouldScroll) window.scrollTo(0, 0);

    const menu = document.getElementById('slide-menu');
    if (menu && menu.classList.contains('active')) menu.classList.remove('active');

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
    for (let i = 0; i < activeSet[page].length; i++) {
        if (!isItemDone(page, i)) return false;
    }
    return true;
}

function checkPageCompletion(page) {
    if (checkIfPageComplete(page)) {
        pageStatus[page] = true;
        renderSidebar();
    }
    // Check if ALL pages in the *active* playlist are done
    if(activePageList.every(pg => pageStatus[pg])) {
        clearInterval(timerInterval);
        isSessionFinished = true;
    }
}

function getState(page, idx) { return (userState[page] && userState[page][idx]) ? userState[page][idx] : null; }

function renderSidebar() {
    const list = document.getElementById('nav-list');
    if (!list) return;
    list.innerHTML = '';
    const labels = [
        "Block Harvesting", "Mechanic Identification", "Categorization Sort", 
        "The Deconstruction Drill", "The Block Detective", "Contextual Assembly", 
        "Block Swapping", "The Expansion Drill", "The Connector Bridge", 
        "The Block Jumble", "The Echo-Shadow", "Backchaining", 
        "The Rhythmic Pulse", "The Free Build", "The Next Chapter"
    ];

    // Only show sidebar entries for pages in the active playlist
    activePageList.forEach(p => {
        const label = labels[p - 1];
        const isDone = pageStatus[p];
        const isActive = (currentPage === p);
        const li = document.createElement('li');
        li.className = `nav-step-item ${isActive ? 'active-page' : ''}`;
        li.onclick = () => showPage(p);
        li.innerHTML = `<span class="nav-num">${isDone ? '✓' : p}</span><span class="nav-label">${label}</span>`;
        list.appendChild(li);
    });
}

function setupNavListeners() {
    const menu = document.getElementById('slide-menu');
    const toggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close-btn');

    if (toggle) toggle.onclick = (e) => { e.stopPropagation(); menu.classList.toggle('active'); };
    if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); menu.classList.remove('active'); };
    document.addEventListener('click', (e) => {
        if (menu && menu.classList.contains('active') && !menu.contains(e.target) && e.target !== toggle) {
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

function renderResultPage() {
    let totalQuestions = 0;
    let totalCorrect = 0;

    // Only tally scores from pages in the active playlist
    activePageList.forEach(p => {
        if (itemScores[p]) {
            Object.keys(itemScores[p]).forEach(key => {
                totalQuestions++;
                totalCorrect += itemScores[p][key];
            });
        }
    });

    const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const pagesCompleted = activePageList.filter(p => pageStatus[p] === true).length;

    return `
        <div class="area-box" style="text-align:center; padding:50px 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: var(--primary-blue); font-size: 2rem;">SESSION COMPLETE</h2>
            <p style="color: #666; margin-bottom: 30px;">Activity finished! Here is your performance summary:</p>
            <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-bottom: 40px;">
                <div class="stat-box" style="width:120px;">
                    <div class="stat-num">${pagesCompleted}/${activePageList.length}</div>
                    <div style="font-size:0.6rem; color:#999; font-weight:bold; text-transform:uppercase;">Steps Done</div>
                </div>
                <div class="stat-box" style="width:120px; border-color: var(--accent-orange);">
                    <div class="stat-num" style="color: var(--accent-orange);">${percentage}%</div>
                    <div style="font-size:0.6rem; color:#999; font-weight:bold; text-transform:uppercase;">Accuracy</div>
                </div>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:15px;">
                <button class="btn" style="margin:0; width:220px;" onclick="location.reload()">RESTART REVIEW</button>
                <a href="exercises.html?id=ex-home" style="color: var(--primary-blue); font-weight: bold; text-decoration: none; font-size: 0.9rem;">🏠 DASHBOARD</a>
            </div>
        </div>
    `;
}

function getExerciseTitle(n) { 
    const t = [
        "Block Harvesting", "Mechanic Identification", "Categorization Sort", 
        "The Deconstruction Drill", "The Block Detective", "Contextual Assembly", 
        "Block Swapping", "The Expansion Drill", "The Connector Bridge", 
        "The Block Jumble", "The Echo-Shadow", "Backchaining", 
        "The Rhythmic Pulse", "The Free Build", "The Next Chapter"
    ]; 
    return t[n-1]; 
}

function getExerciseInstructions(n) {
    const instructions = [
        "Read the provided passage. Click to highlight the specific, high-frequency functional chunks requested by the prompt.<br><span style='color:#0077b6; font-style:italic;'>Leia a passagem. Selecione os blocos funcionais mais frequentes.</span>",
        "You will be presented with a sentence that contains a structural error. Click the specific block (Actor, Action, Detail, or Connector) that is 'breaking' the equation.<br><span style='color:#0077b6; font-style:italic;'>Você será apresentado com uma frase que contém um erro estrutural. Clique no bloco específico (Ator, Ação, Detalhe ou Conector) que está 'quebrando' a sentença.</span>",
        "Click a block from the word bank, then click the correct functional bucket to sort it.<br><span style='color:#0077b6; font-style:italic;'>Clique em um bloco da lista de palavras e depois clique no balde funcional correto para classificá-lo.</span>",
        "Read the highly complex sentence provided. Click to cross out all the extra Connector and Detail blocks until only the absolute core Actor and Action blocks remain visible.<br><span style='color:#0077b6; font-style:italic;'>Leia a frase altamente complexa fornecida. Clique para riscar todos os blocos de Conector e Detalhe extras até que apenas os blocos centrais de Ator(sujeito) e Ação(verbo) permaneçam visíveis.</span>",
        "One key functional block has been replaced by a 'nonsense' placeholder word. Look at the surrounding context clues and click the correct meaning that logically completes the equation.<br><span style='color:#0077b6; font-style:italic;'>Um bloco funcional chave foi substituído por uma palavra sem sentido. Olhe para as pistas do contexto ao redor e clique na opção correta que completa logicamente a sentença.</span>",
        "Read the situational cue provided. Click the blocks from the pool in the correct order to build a coherent response.<br><span style='color:#0077b6; font-style:italic;'>Leia a pista situacional fornecida. Clique nos blocos da lista na ordem correta para construir uma resposta coerente.</span>",
        "You are given a base sentence and a 'cue'. Type the replacement block into the correct slot to change the meaning while keeping the structural frame intact. Read/Write the new sentence.<br><span style='color:#0077b6; font-style:italic;'>Você recebeu uma frase base e um 'sinal'. Subistitua este 'sinal' no lugar correto para mudar o significado lembrando de manter a estrutura intacta. Leia/Escreva a nova frase.</span>",
        "Start by reading the 'kernel' block. For each subsequent stage, a new block is provided. Type the growing sentence progressively to stretch your working memory.<br><span style='color:#0077b6; font-style:italic;'>Comece lendo/escrevendo o bloco de 'núcleo'. Para cada etapa seguinte, um novo bloco é fornecido. Digite a frase crescente progressivamente para aumentar sua memória.</span>",
        "Read the two independent sentences. Click the correct connector that logically bridges the two clauses together.<br><span style='color:#0077b6; font-style:italic;'>Leia as duas partes independentes. Clique no conector correto que lógicamente conecta as duas cláusulas.</span>",
        "A complete sentence has been shattered into blocks. Click the blocks to assemble them in the strict, correct grammatical order.<br><span style='color:#0077b6; font-style:italic;'>Uma frase completa foi quebrada em blocos. Clique nos blocos para montá-los na ordem gramatical correta.</span>",
        "Play the Master Audio. Read the sentence aloud simultaneously with the audio, doing your best to perfectly mimic the speaker's exact prosody and rhythm. Record and compare.<br><span style='color:#0077b6; font-style:italic;'>Toque o áudio principal. Leia a frase em voz alta simultaneamente com o áudio, fazendo o seu melhor para imitar perfeitamente a entonação e o ritmo do falante. Grave e compare.</span>",
        "Look at the phonetic chunks structured from the end of the sentence to the beginning. Unlock each chunk, play the audio, and repeat it to build natural intonation.<br><span style='color:#0077b6; font-style:italic;'>Olhe os pedaços fonéticos estruturados do final da frase até o início. Desbloqueie cada pedaço, toque o áudio e repita para construir uma entonação natural.</span>",
        "Start the metronome. Speak each target phrase aloud, forcing yourself to land strictly on the beat to build speed and reflex.<br><span style='color:#0077b6; font-style:italic;'>Inicie o metrônomo. Fale cada frase-alvo em voz alta, forçando-se a falar estritamente no sinal para criar velocidade e reflexo.</span>",
        "Read the scenario prompt. Type a flawless written sentence to resolve the scenario, strictly using only the blocks provided in your inventory.<br><span style='color:#0077b6; font-style:italic;'>Leia o prompt do cenário. Digite uma frase escrita perfeita para resolver o cenário, usando estritamente apenas os blocos fornecidos em seu inventário.</span>",
        "Read the story prompt. Choose and click one of the 'branching starters', then independently finish typing the sentence to decide the next beat of the story.<br><span style='color:#0077b6; font-style:italic;'>Leia o prompt da história. Escolha e clique em um dos 'inícios ramificados', depois complete a frase independentemente para decidir o próximo batimento da história.</span>"
    ];
    return instructions[n - 1] || "";
}

function renderExerciseDashboard() {
    const container = document.getElementById('lesson-content');
    let tabsHtml = '<div class="dashboard-tabs" style="justify-content:center; margin-bottom:30px;">';
    for(let i=1; i<=5; i++) {
        tabsHtml += `<button class="dash-tab-btn ${i===1?'active':''}" onclick="loadExerciseBlock(${i})">BLOCK ${i}</button>`;
    }
    tabsHtml += '</div>';

    container.innerHTML = `
        <div style="text-align:center; padding: 40px 0;">
            <h1 style="color:var(--primary-blue);">PRACTICE PORTAL</h1>
            <p style="color:#666;">Select a Block to access extra drills.</p>
        </div>
        ${tabsHtml}
        <div id="exercise-block-area">${buildExerciseGrid(1)}</div>
    `;
}

window.loadExerciseBlock = function(blockNum) {
    document.querySelectorAll('.dash-tab-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === blockNum);
    });
    document.getElementById('exercise-block-area').innerHTML = buildExerciseGrid(blockNum);
};

function buildExerciseGrid(blockNum) {
    const blockData = exData.blocks[blockNum];
    let html = `<div class="bimester-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">`;
    
    blockData.topics.forEach(topicId => {
        const lessonNum = topicId.split('-')[1];
        const lessonName = exData.lessonNames[topicId] || `Lesson ${lessonNum}`;
        
        html += `
            <div class="bimester-box" style="border-top: 5px solid var(--accent-orange); min-height: 140px;">
                <div class="bimester-title" style="color:var(--primary-blue); font-size: 0.9rem; margin-bottom:10px;">
                    ${lessonName}
                </div>
                <div class="chapter-list">
                    <a id="btn-${topicId}" class="chapter-btn" style="width:100%; text-align:center; background:#eee; color:#aaa; cursor:wait;">
                        CHECKING...
                    </a>
                </div>
            </div>
        `;
        setTimeout(() => checkExerciseAvailability(topicId), 100);
    });
    return html + '</div>';
}

async function checkExerciseAvailability(id) {
    const btn = document.getElementById(`btn-${id}`);
    if (!btn) return;
    try {
        const response = await fetch(`data/exercises/ex-${id}.js`, { method: 'HEAD' });
        if (response.ok) {
            btn.href = `exercises.html?id=ex-${id}`;
            btn.style.background = 'var(--bg-light)';
            btn.style.color = 'var(--text-dark)';
            btn.style.cursor = 'pointer';
            btn.textContent = 'START PRACTICE ➔';
        } else {
            btn.textContent = 'in development';
            btn.style.cursor = 'not-allowed';
        }
    } catch(e) { btn.textContent = 'in development'; }
}

// --- TRANSLATION TOGGLE STATE CONTROLLER ---
window.toggleTranslations = function(checked) {
    // Save current active input values so we don't lose typed progress on re-render
    if (currentPage === 7 || currentPage === 8) {
        const data = activeSet[currentPage];
        if (data) {
            data.forEach((item, idx) => {
                const state = getState(currentPage, idx) || { step: 0, answers: {} };
                const step = state.step;
                const inputEl = document.getElementById(`input-${currentPage}-${idx}-${step}`);
                if (inputEl) {
                    if (!userState[currentPage]) userState[currentPage] = {};
                    if (!userState[currentPage][idx]) userState[currentPage][idx] = { step: 0, answers: {} };
                    userState[currentPage][idx].answers[step] = inputEl.value;
                }
            });
        }
    }
    showTranslations = checked;
    showPage(currentPage, false);
};