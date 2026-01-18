/**
 * Master Engine v4.0 (FIXED)
 * Handles Navigation, Audio, Voice Recording, and Exercise Mechanics.
 */

// GLOBAL VARIABLES
let currentPageIndex = 0;
let lessonData = null; // Store data globally

// 1. INITIALIZATION
window.initLesson = function(data) {
    lessonData = data;        
    window.lessonData = data; 
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startEngine);
    } else {
        startEngine();
    }
};

function startEngine() {
    console.log("Engine Started...");
    const mainContainer = document.getElementById('lesson-content'); 

    try {
        if (!lessonData) throw new Error("No Lesson Data found. Did sample.js load?");
        
        // 1. Render Metadata
        console.log("Rendering Metadata...");
        renderMetadata();

        // 2. Render Menu
        console.log("Rendering Menu...");
        renderMenu();

        // 3. Render Pages
        console.log("Rendering Pages...");
        renderPages();

        // 4. Setup Glossary & Show First Page
        setupGlossary();
        showPage(0);
        
        // 5. Attach Listeners
        // THIS IS THE ONLY PLACE THIS SHOULD RUN
        attachExerciseListeners(); 

    } catch (error) {
        console.error(error);
        document.body.innerHTML = `
            <div style="padding: 40px; font-family: sans-serif; background: #fff0f0; height: 100vh;">
                <h1 style="color: #d63384;">💥 ENGINE CRASHED</h1>
                <p style="font-size: 1.2rem;">The lesson could not load.</p>
                <div style="background: white; padding: 20px; border-left: 5px solid red; margin: 20px 0;">
                    <strong>Error:</strong> <code style="color: red;">${error.message}</code>
                </div>
                <button onclick="location.reload()" style="padding: 10px 20px; cursor: pointer;">Try Again</button>
            </div>
        `;
    }
}

// --- START OF TTS ENGINE (Google Network Hack) ---
window.playTTS = function(text) {
    console.log("Playing TTS:", text);

    window.speechSynthesis.cancel();
    if (window.currentTTSAudio) {
        window.currentTTSAudio.pause();
        window.currentTTSAudio = null;
    }
    if (typeof globalAudio !== 'undefined' && globalAudio) globalAudio.pause();

    const cleanText = text.replace(/\[(.*?)\]\(.*?\)/g, '$1').trim();

    if (cleanText.length < 200) {
        try {
            const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(cleanText)}`;
            const audio = new Audio(url);
            window.currentTTSAudio = audio; 
            
            audio.play().catch(err => {
                console.error("Online Voice Failed, reverting to Robot.", err);
                speakRobot(cleanText);
            });
        } catch (e) {
            speakRobot(cleanText);
        }
    } else {
        speakRobot(cleanText);
    }
};

function speakRobot(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; 
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}
window.speechSynthesis.getVoices();
// --- END OF TTS ENGINE ---


// 2. RENDER FUNCTIONS
function renderMetadata() {
    document.getElementById('display-grade').textContent = lessonData.grade;
    document.getElementById('display-bimester').textContent = `Bimester ${lessonData.bimester}`;
    document.getElementById('display-chapter').textContent = `Chapter ${lessonData.chapter}`;
    
    document.getElementById('menu-grade-label').innerHTML = `<span style="color:var(--accent-orange)">${lessonData.grade.toUpperCase()}</span>`;
    document.getElementById('menu-chapter-label').textContent = lessonData.chapterTitle;
}

function renderMenu() {
    const stepLabels = {
        0: "Welcome", 1: "In Context", 4: "Shadowing", 5: "Listening", 
        6: "Reading", 7: "Drills", 8: "Writing", 9: "Flashcards"
    };

    const navList = document.getElementById('nav-list');
    navList.innerHTML = '';
    
    lessonData.steps.forEach((step, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="nav-step-item">Step ${index}: ${step.title}</span>
            <div class="sub-links" id="sub-links-${index}"></div>
        `;
        navList.appendChild(li);

        if (step.subPages) {
            const subContainer = li.querySelector('.sub-links');
            step.subPages.forEach(sub => {
                const a = document.createElement('a');
                a.href = "#";
                a.className = "nav-sub-link";
                a.textContent = sub.label;
                a.onclick = (e) => { e.preventDefault(); jumpToStep(index, sub.id); };
                subContainer.appendChild(a);
            });
        } else {
            const a = document.createElement('a');
            a.href = "#";
            a.className = "nav-sub-link";
            a.textContent = stepLabels[index] || "Start"; 
            a.onclick = (e) => { e.preventDefault(); jumpToStep(index); };
            li.querySelector('.sub-links').appendChild(a);
        }
    });
}

function renderPages() {
    const mainContainer = document.getElementById('lesson-content'); 
    if (!mainContainer) throw new Error("Could not find element id='lesson-content' in index.html");
    
    mainContainer.innerHTML = '';
    lessonData.steps.forEach((step, index) => {
        const section = document.createElement('section');
        section.className = `lesson-page step-${index}`;
        section.id = `step-page-${index}`;
        section.innerHTML = buildStepHTML(index, step);
        mainContainer.appendChild(section);
    });
    // REMOVED: attachExerciseListeners(); (This was causing the bug)
}

// 3. NAVIGATION LOGIC
function showPage(index) {
    const pages = document.querySelectorAll('.lesson-page');
    if (index < 0 || index >= pages.length) return;

    pages.forEach(p => p.classList.remove('active'));
    pages[index].classList.add('active');
    currentPageIndex = index;

    document.getElementById('prev-btn').disabled = (index === 0);
    document.getElementById('next-btn').disabled = (index === pages.length - 1);
    
    document.querySelectorAll('.nav-sub-link').forEach(link => link.classList.remove('active'));
    window.scrollTo(0, 0);
    
    if (index === 9) shuffleFlashcards();
}

function jumpToStep(index, subId = null) {
    showPage(index);
    if (subId) {
        setTimeout(() => {
            const el = document.getElementById(subId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
    document.getElementById('slide-menu').classList.remove('active');
    document.getElementById('menu-toggle').classList.remove('open');
}

// 4. AUDIO & RECORDING SYSTEM
window.playAudio = function(path) {
    const player = document.getElementById('global-audio-player');
    player.pause();
    window.speechSynthesis.cancel();

    if (path && path.startsWith('TTS:')) {
        const text = path.replace('TTS:', '').trim();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; 
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else if (path) {
        player.src = path;
        player.play();
    }
};

let mediaRecorder;
let audioChunks = [];

window.toggleRecording = async function(btn, audioId) {
    const row = btn.closest('.shadow-box');
    const stopBtn = row.querySelector('.stop-btn');
    const playBtn = row.querySelector('.play-rec-btn');

    if (!mediaRecorder || mediaRecorder.state === 'inactive') {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
            const url = URL.createObjectURL(audioBlob);
            playBtn.onclick = () => { const a = new Audio(url); a.play(); };
            playBtn.style.display = 'flex';
        };

        mediaRecorder.start();
        btn.style.display = 'none';
        stopBtn.style.display = 'flex';
    }
};

window.stopRecording = function(btn) {
    const row = btn.closest('.shadow-box');
    const recBtn = row.querySelector('.record-btn');
    mediaRecorder.stop();
    btn.style.display = 'none';
    recBtn.style.display = 'flex';
};

// 5. EXERCISE MECHANICS (CORE ENGINE)
function attachExerciseListeners() {
    // A. RESTORE BUTTON WIRING
    document.getElementById('prev-btn').onclick = () => showPage(currentPageIndex - 1);
    document.getElementById('next-btn').onclick = () => showPage(currentPageIndex + 1);
    document.getElementById('menu-toggle').onclick = function() {
        this.classList.toggle('open');
        document.getElementById('slide-menu').classList.toggle('active');
    };
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('slide-menu');
        const toggle = document.getElementById('menu-toggle');
        if (menu.classList.contains('active')) {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('active');
                toggle.classList.remove('open');
            }
        }
    });

    // B. SELECTION LOGIC
    document.addEventListener('click', e => {
        const option = e.target.closest('.option, .image-option, .clickable-word, .tf-btn, .memory-card');
        if (!option) return;
        const parent = option.parentElement;

        if (option.classList.contains('memory-card')) { handleMemoryClick(option); return; }
        if (option.classList.contains('clickable-word')) { option.classList.toggle('selected'); return; }

        if (parent.classList.contains('multiple')) {
            option.classList.toggle('selected');
        } else {
            parent.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        }
    });

    // C. DRAG & DROP
    document.addEventListener('dragstart', e => { if (e.target.classList.contains('draggable')) window.draggedItem = e.target; });
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => {
        const dropZone = e.target.closest('.category-box, .phrase-bank');
        if (dropZone && window.draggedItem) dropZone.appendChild(window.draggedItem);
    });

    // MATCHING LOGIC
    let firstMatch = null; let pCount = 0;
    document.addEventListener('click', e => {
        const target = e.target.closest('.match-item');
        if (!target || target.classList.contains('correct')) return;
        const container = target.closest('.matching-container');
        if (target.dataset.pairId) {
            container.querySelectorAll(`[data-pair-id="${target.dataset.pairId}"]`).forEach(el => {
                for (let i=0; i<4; i++) el.classList.remove(`pair-orange-${i}`);
                delete el.dataset.pairId;
            });
            return;
        }
        if (!firstMatch) { firstMatch = target; target.classList.add(`pair-orange-${pCount % 4}`); }
        else if (firstMatch === target) { firstMatch.classList.remove(`pair-orange-${pCount % 4}`); firstMatch = null; }
        else if (firstMatch.dataset.col !== target.dataset.col) {
            const pId = `pair-${Date.now()}`;
            firstMatch.dataset.pairId = pId; target.dataset.pairId = pId;
            target.classList.add(`pair-orange-${pCount % 4}`);
            firstMatch = null; pCount++;
        }
    });

    // CHECK BUTTON LOGIC
    document.addEventListener('click', e => {
        if (e.target.classList.contains('check-btn')) {
            const card = e.target.closest('.exercise-card');
            if (e.target.textContent.includes('Check')) {
                validateExercise(card); e.target.textContent = 'Try Again'; e.target.classList.add('try-again-state');
            } else {
                resetExercise(card); e.target.textContent = 'Check'; e.target.classList.remove('try-again-state');
            }
        }
    });

    window.moveWord = function(btn) {
        const zone = btn.closest('.exercise-card').querySelector('.drop-zone');
        const bank = btn.closest('.exercise-card').querySelector('.word-bank');
        if (btn.parentElement === bank) zone.appendChild(btn); else bank.appendChild(btn);
    };
}

function validateExercise(card) {
    function showExtraFeedback(card, text) {
        const feedback = card.querySelector('.extra-feedback');
        if (feedback) {
            feedback.innerHTML = `Correct answer: <strong>${text}</strong>`;
            feedback.style.display = 'block';
        }
    }

    const type = card.dataset.type;
    
    switch(type) {
        case 'mcq':
        case 'audio-choice':
        case 'odd-one-out':
        case 'image-mcq':
            const selected = card.querySelector('.option.selected, .image-option.selected');
            const correct = card.querySelector('[data-correct="true"]');
            if (correct) correct.classList.add('correct');
            if (selected && selected.dataset.correct !== 'true') selected.classList.add('incorrect');
            break;

        case 'matching':
            const pairs = new Set();
            card.querySelectorAll('.match-item[data-pair-id]').forEach(el => pairs.add(el.dataset.pairId));
            let blueShadeIndex = 0;
            pairs.forEach(pId => {
                const pairItems = card.querySelectorAll(`[data-pair-id="${pId}"]`);
                if (pairItems.length === 2) {
                    const isCorrect = pairItems[0].dataset.val === pairItems[1].dataset.val;
                    pairItems.forEach(item => {
                        for (let i = 0; i < 4; i++) item.classList.remove(`pair-orange-${i}`);
                        if (isCorrect) {
                            item.classList.add(`pair-blue-${blueShadeIndex % 4}`);
                            item.classList.add('correct');
                        } else {
                            item.classList.add('pair-red');
                            item.classList.add('incorrect');
                        }
                    });
                    if (isCorrect) blueShadeIndex++;
                }
            });
            break;

        case 'true-false':
            card.querySelectorAll('.tf-buttons').forEach(group => {
                const correctValue = group.dataset.correct;
                const selectedBtn = group.querySelector('.tf-btn.selected');
                if (selectedBtn) {
                    if (selectedBtn.dataset.value === correctValue) selectedBtn.classList.add('correct');
                    else {
                        selectedBtn.classList.add('incorrect');
                        group.querySelector(`[data-value="${correctValue}"]`).classList.add('correct');
                    }
                } else {
                    group.querySelector(`[data-value="${correctValue}"]`).classList.add('correct');
                }
            });
            break;

        case 'clickable-error':
            card.querySelectorAll('.clickable-word').forEach(word => {
                const isErrorWord = word.dataset.error === "true";
                const isSelected = word.classList.contains('selected');
                if (isErrorWord) word.classList.add(isSelected ? 'correct' : 'incorrect');
                else if (isSelected) word.classList.add('incorrect');
            });
            const display = card.querySelector('.corrected-sentence-display');
            if (display) {
                display.querySelector('.content').textContent = display.dataset.fullCorrect;
                display.style.display = 'block';
            }
            break;

        case 'multiple-correct':
            card.querySelectorAll('.option').forEach(opt => {
                const isCorrect = opt.dataset.correct === 'true';
                const isSelected = opt.classList.contains('selected');
                if (isCorrect && isSelected) opt.classList.add('correct');
                else if (isCorrect && !isSelected) opt.style.border = "2px solid var(--success-green)";
                else if (!isCorrect && isSelected) opt.classList.add('incorrect');
            });
            break;
            
        case 'memory-game':
            card.querySelectorAll('.memory-card:not(.is-matched)').forEach(card => {
                card.classList.add('is-flipped', 'incorrect');
            });
            break;

        case 'dialogue-scramble':
            const dArea = card.querySelector('.drop-zone');
            const dButtons = Array.from(dArea.querySelectorAll('.word-btn'));
            const dResult = dButtons.map(b => b.textContent.trim()).join('|');
            if (dResult === dArea.dataset.answer) dArea.style.backgroundColor = '#eafaf1';
            else {
                dArea.style.backgroundColor = '#fdeded';
                showExtraFeedback(card, dArea.dataset.answer.split('|').join('<br>'));
            }
            break;

        case 'typing':
            card.querySelectorAll('.drill-input').forEach(input => {
                const oldHint = input.nextElementSibling;
                if (oldHint && oldHint.tagName === 'SMALL') oldHint.remove();
                if (input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase()) {
                    input.style.backgroundColor = 'var(--success-green)';
                    input.style.color = 'white';
                } else {
                    input.style.backgroundColor = 'var(--error-red)';
                    input.style.color = 'white';
                    const hint = document.createElement('small');
                    hint.style.display = "block";
                    hint.style.color = "var(--error-red)";
                    hint.innerHTML = `Correct: ${input.dataset.answer}`;
                    input.after(hint);
                }
            });
            break;

        case 'dropdown':
            card.querySelectorAll('select').forEach(select => {
                if (select.value === select.dataset.answer) {
                    select.style.backgroundColor = 'var(--success-green)';
                    select.style.color = 'white';
                } else {
                    select.style.backgroundColor = 'var(--error-red)';
                    select.style.color = 'white';
                    showExtraFeedback(card, select.dataset.answer);
                }
            });
            break;

        case 'word-order':
            const wArea = card.querySelector('.drop-zone');
            const wResult = Array.from(wArea.querySelectorAll('.word-btn')).map(b => b.textContent.trim()).join(' ');
            if (wResult === wArea.dataset.answer) wArea.style.backgroundColor = '#eafaf1';
            else wArea.style.backgroundColor = '#fdeded';
            break;

        case 'categorize':
            card.querySelectorAll('.category-box').forEach(box => {
                const targetCategory = box.dataset.category;
                box.querySelectorAll('.draggable').forEach(item => {
                    if (item.dataset.category === targetCategory) item.classList.add('correct');
                    else item.classList.add('incorrect');
                });
            });
            card.querySelectorAll('.phrase-bank .draggable').forEach(item => item.classList.add('incorrect'));
            break;
    }
}

function resetExercise(card) {
    const type = card.dataset.type;

    const correctionBox = card.querySelector('.corrected-sentence-display');
    if (correctionBox) correctionBox.style.display = 'none';

    if (type === 'matching') pairCount = 0;

    card.querySelectorAll('.option, .image-option, .clickable-word, .tf-btn').forEach(el => {
        el.classList.remove('selected', 'correct', 'incorrect');
        el.style.border = "";
    });

    card.querySelectorAll('.match-item').forEach(el => {
        el.classList.remove('selected', 'correct', 'incorrect', 'pair-red');
        for (let i = 0; i < 4; i++) {
            el.classList.remove(`pair-orange-${i}`);
            el.classList.remove(`pair-blue-${i}`);
        }
        delete el.dataset.pairId;
    });

    card.querySelectorAll('input').forEach(i => { 
        i.value = ''; 
        i.style.backgroundColor = ''; 
        i.style.color = ''; 
        const hint = i.nextElementSibling;
        if (hint && hint.tagName === 'SMALL') hint.remove();
    });

    card.querySelectorAll('select').forEach(s => {
        s.value = "";
        s.style.backgroundColor = '';
        s.style.color = '';
    });

    if (type === 'word-order' || type === 'dialogue-scramble') {
        const bank = card.querySelector('.word-bank');
        const area = card.querySelector('.drop-zone');
        area.style.backgroundColor = '';
        area.querySelectorAll('.word-btn').forEach(btn => bank.appendChild(btn));
    }

    if (type === 'memory-game') {
        const grid = card.querySelector('.memory-grid');
        const cards = Array.from(grid.querySelectorAll('.memory-card'));
        cards.forEach(c => c.classList.remove('is-flipped', 'is-matched', 'incorrect'));
        setTimeout(() => {
            for (let i = grid.children.length; i >= 0; i--) {
                grid.appendChild(grid.children[Math.random() * i | 0]);
            }
        }, 600);
    }

    if (type === 'categorize') {
        const bank = card.querySelector('.phrase-bank');
        card.querySelectorAll('.draggable').forEach(item => {
            item.classList.remove('correct', 'incorrect');
            bank.appendChild(item);
        });
    }
}

function setupGlossary() {
    const list = document.getElementById('glossary-list');
    lessonData.glossary.forEach(item => {
        const div = document.createElement('div');
        div.className = 'glossary-item';
        div.innerHTML = `<strong>${item.term}</strong>: ${item.definition}`;
        list.appendChild(div);
    });

    document.getElementById('glossary-btn').onclick = () => document.getElementById('glossary-modal').style.display = 'flex';
    document.getElementById('close-glossary').onclick = () => document.getElementById('glossary-modal').style.display = 'none';
    window.onclick = function(event) {
        const modal = document.getElementById('glossary-modal');
        if (event.target === modal) modal.style.display = 'none';
    };
}

function shuffleFlashcards() {
    const grid = document.querySelector('.flashcards-grid');
    if (!grid) return;
    for (let i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
}

function buildStepHTML(index, step) {
    const createAudioPlayer = (audioPath) => {
        if (!audioPath) return ''; 
        if (audioPath.includes('||')) {
            const parts = audioPath.split('||');
            return `<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px;">
                        ${createAudioPlayer(parts[0].trim())}
                        ${createAudioPlayer(parts[1].trim())}
                    </div>`;
        }
        if (audioPath.trim().startsWith('TTS:')) {
            const safePath = audioPath.trim().replace(/'/g, "\\'");
            return `<div class="audio-controller" style="justify-content: center; width: auto; min-width: 120px; border-color: var(--brand-orange); position: relative;">
                        <button class="play-pause-btn" style="background: var(--accent-orange); width: 100%; border-radius: 20px; padding: 0 15px; font-size: 0.8rem;" 
                        onclick="playAudio('${safePath}')">🔊 Listen</button>
                    </div>`;
        }
        return `<div class="audio-controller" data-src="${audioPath.trim()}" style="position: relative; width: 100%; margin-bottom: 5px;">
                    <button class="play-pause-btn" onclick="handleAudioPlayer(this)">▶</button>
                    <div class="audio-progress-container">
                        <input type="range" class="audio-scrubber" value="0" min="0" max="100" step="1" oninput="scrubAudio(this)">
                    </div>
                    <div class="audio-time">0:00 / 0:00</div>
                </div>`;
    };

    const parseTooltips = (text) => {
        return text.replace(/\[(.*?)\]\(tooltip:(.*?)\)/g, (match, word, key) => {
            const entry = lessonData.glossary.find(g => g.term.toLowerCase() === key.toLowerCase());
            const def = entry ? entry.definition : "Definition not found";
            return `<span class="tooltip" data-definition="${def}">${word}</span>`;
        });
    };
    let html = `<h2>Step ${index}: ${step.title}</h2>`;

    if (index === 0) {
        html += `<p style="color:var(--accent-orange); font-weight:900; margin-top:-15px; margin-bottom:25px; font-size:1.4rem;">CHAPTER ${lessonData.chapter}: ${lessonData.chapterTitle.toUpperCase()}</p>`;
        html += `
            <div class="area-box" style="position:relative">
                ${createAudioPlayer(step.audio.objectives)}
                <h3>Can-Do Objectives</h3>
                <p>${step.objectives}</p>
            </div>
            <div class="area-box" style="position:relative">
                ${createAudioPlayer(step.audio.welcome)}
                <h3>Welcome from Mr.D</h3>
                <p>${step.welcome}</p>
            </div>`;
    }

    if (index === 1) {
        html += `<div class="area-box" style="position:relative">
                ${createAudioPlayer(step.contextAudio)}
            <p><i>${step.context}</i></p><br>
            ${step.dialogue.map(line => `<p><b>${line.speaker}:</b> ${parseTooltips(line.text)}</p>`).join('')}
        </div>`;
    }

    if (index === 2 || index === 3) {
        html += `<div class="step-sub-nav">${step.subPages.map((sub, i) => `<button class="sub-nav-btn ${i === 0 ? 'active' : ''}" onclick="switchSubPage(this, '${sub.id}')">${sub.label}</button>`).join('')}</div>`;

        if (index === 2) {
            let html2a = step.areas.map(area => `
                <div class="area-box" style="position:relative">
                    ${createAudioPlayer(area.audio)}
                    <h3>${area.title}</h3>
                    ${area.items.map(item => `<div class="learning-card"><span class="term-en">${item.term}</span><span class="term-pt">${item.trans}</span></div>`).join('')}
                </div>`).join('');
            
            let html2b = `
                <div class="area-box" style="position:relative">
                    ${step.audio2b ? createAudioPlayer(step.audio2b) : ''}
                    ${step.examples.map(ex => `
                        <div class="exercise-card" style="box-shadow:none; border-bottom:1px solid #eee; margin-bottom:0; padding: 10px 0;">
                            <p><b class="term-en">${ex.term}:</b> ${ex.sent}</p>
                            <p class="term-pt"><i>${ex.trans}</i></p>
                        </div>`).join('')}
                </div>`;

            let html2c = step.drills.map(drill => `
                <div class="exercise-card" data-type="mcq">
                    <p><b>${drill.q}</b></p>
                    <div class="options-container">${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}</div>
                    <button class="btn check-btn">Check</button>
                </div>`).join('');

            html += `<div id="step2a" class="sub-page-content active">${html2a}</div>`;
            html += `<div id="step2b" class="sub-page-content">${html2b}</div>`;
            html += `<div id="step2c" class="sub-page-content">${html2c}</div>`;
        }

        if (index === 3) {
            let html3a = step.patterns.map(p => `
                <div class="area-box">
                    <h3>${p.title}</h3><p>${p.explanation}</p>
                    <div class="example-box">${p.samples.map(s => `<p>• ${s.en} <i>(${s.pt})</i></p>`).join('')}</div>
                </div>`).join('');

            let html3b = `
                <div class="area-box" style="position:relative">
                    ${step.audio3b ? createAudioPlayer(step.audio3b) : ''}
                    ${step.dialogueExamples.map(d => `<p><b>${d.speaker}:</b> ${d.text}</p><p class="term-pt"><i>${d.pt}</i></p><br>`).join('')}
                </div>`;

            let html3c = step.grammarDrills.map(drill => `
                <div class="exercise-card" data-type="mcq">
                    <p><b>${drill.q}</b></p>
                    <div class="options-container">${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}</div>
                    <button class="btn check-btn">Check</button>
                </div>`).join('');

            html += `<div id="step3a" class="sub-page-content active">${html3a}</div>`;
            html += `<div id="step3b" class="sub-page-content">${html3b}</div>`;
            html += `<div id="step3c" class="sub-page-content">${html3c}</div>`;
        }
    }
    
    if (index === 4) { 
        html += `<p class="instruction">Listen, record, and compare your pronunciation. (Ouça, grave e compare sua pronúncia).</p>`;
        step.sentences.forEach((s, i) => {
            html += `
                <div class="area-box shadow-box">
                    <button class="btn-circle" onclick="playAudio('${s.audio}')">▶️</button>
                    <p>${s.text} ${s.arrow}</p>
                    <button class="btn-circle record-btn" onclick="toggleRecording(this, ${i})">🎤</button>
                    <button class="btn-circle stop-btn" onclick="stopRecording(this)">⏹️</button>
                    <button class="btn-circle play-rec-btn">🎧</button>
                </div>`;
        });
    }

    if (index === 5) {
        step.drills.forEach(drill => {
            html += `<div class="exercise-card" data-type="${drill.type}">
                ${createAudioPlayer(drill.audio)}
                <p><b>${drill.instruction}</b></p>`;
            
            if (drill.type === 'typing') {
                html += `<p style="margin-top:10px;">${drill.text.replace(/\[(.*?)\]/g, `<input type="text" data-answer="$1" class="drill-input">`)}</p>`;
            } else if (drill.type === 'dropdown') {
                html += drill.questions.map(q => `
                    <p>${q.q.replace(/\[(.*?)\]/g, `<select class="drill-select" data-answer="${q.a}">
                        <option value="">...</option>
                        ${q.q.match(/\[(.*?)\]/)[1].split('|').map(opt => `<option value="${opt.trim()}">${opt.trim()}</option>`).join('')}
                    </select>`)}</p>`).join('');
            } else if (drill.type === 'audio-choice') {
                html += `<div class="options-container">${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}</div>`;
            }
            html += `<button class="btn check-btn">Check</button></div>`;
        });
    }

    if (index === 6) {
        html += `<div class="step-sub-nav">
            ${step.texts.map((_, i) => `
                <button class="sub-nav-btn ${i === 0 ? 'active' : ''}" 
                        onclick="switchSubPage(this, 'step6-t${i+1}')">TEXT ${i+1}</button>
            `).join('')}
        </div>`;

        step.texts.forEach((text, textIndex) => {
            const autoAudioPath = `audio/${lessonData.lessonId}/p6_text${textIndex + 1}.mp3`;
            const subPageId = `step6-t${textIndex + 1}`;

            html += `
                <div id="${subPageId}" class="sub-page-content ${textIndex === 0 ? 'active' : ''}">
    <div class="area-box" style="position:relative; margin-top: 50px; margin-bottom: 10px; padding: 15px;">
         ${createAudioPlayer(autoAudioPath)}
         <h3 style="color:var(--primary-blue); font-size: 1.1rem; margin-top: 10px;">${text.title}</h3>
    </div>

    <div class="reading-split-container">
        <div class="reading-text-pane">
            <p>${text.body}</p>
        </div>
        <div class="questions-pane">
                            ${text.questions.map(q => `
                                <div class="exercise-card" data-type="mcq" style="box-shadow:none; border:1px solid #eee; margin-top:0; margin-bottom:20px;">
                                    <p><b>${q.q}</b></p>
                                    <div class="options-container">
                                        ${q.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}
                                    </div>
                                    <button class="btn check-btn">Check</button>
                                </div>`).join('')}
                        </div>
                    </div>
                </div>`;
        });
    }

    if (index === 7) {
        step.drills.forEach(drill => {
            html += `<div class="exercise-card" data-type="${drill.type}" style="position:relative">
                ${drill.audio ? createAudioPlayer(drill.audio) : ''}
                <p><b>${drill.instruction}</b></p>`;

            if (drill.type === 'typing') {
                html += `<p style="margin-top:10px;">${drill.text.replace(/\[(.*?)\]/g, `<input type="text" data-answer="$1" class="drill-input">`)}</p>`;
            } else if (drill.type === 'dropdown') {
                html += drill.questions.map(q => `
                    <p>${q.q.replace(/\[(.*?)\]/g, `<select class="drill-select" data-answer="${q.a}">
                        <option value="">...</option>
                        ${q.q.match(/\[(.*?)\]/)[1].split('|').map(opt => `<option value="${opt.trim()}">${opt.trim()}</option>`).join('')}
                    </select>`)}</p>`).join('');
            } else if (drill.type === 'audio-choice') {
                html += `<div class="options-container">${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}</div>`;
            } else if (drill.type === 'matching') {
                html += `<div class="matching-container">
                    <div class="match-column">${drill.pairs.map((p, i) => `<div class="match-item" id="L${Math.random()}-${i}" data-col="left" data-val="${p.val}">${p.left}</div>`).join('')}</div>
                    <div class="match-column">${[...drill.pairs].sort(() => Math.random() - 0.5).map((p, i) => `<div class="match-item" id="R${Math.random()}-${i}" data-col="right" data-val="${p.val}">${p.right}</div>`).join('')}</div>
                </div>`;
            } else if (drill.type === 'word-order') {
                html += `<div class="word-bank">${drill.sentence.split('/').sort(() => Math.random() - 0.5).map(w => `<button class="word-btn" onclick="moveWord(this)">${w.trim()}</button>`).join('')}</div>
                         <div class="drop-zone" data-answer="${drill.correct}"></div>`;
            } else if (drill.type === 'odd-one-out') {
                html += `<div class="options-container">${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}</div>`;
            } else if (drill.type === 'memory-game') {
                const shuffledCards = [...drill.cards].sort(() => Math.random() - 0.5);
                html += `<div class="memory-grid">
                    ${shuffledCards.map(c => `
                        <div class="memory-card" data-match="${c.match}">
                            <div class="card-face card-front"></div>
                            <div class="card-face card-back">${c.text}</div>
                        </div>
                    `).join('')}
                </div>`;
            } else if (drill.type === 'true-false') {
                html += `<div class="tf-container">
                    ${drill.questions.map((q, i) => `
                        <div class="tf-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding:10px; border-bottom:1px solid #eee;">
                            <span>${q.text}</span>
                            <div class="tf-buttons" data-correct="${q.correct}">
                                <button class="tf-btn" data-value="true">True</button>
                                <button class="tf-btn" data-value="false">False</button>
                            </div>
                        </div>`).join('')}
                </div>`;
            } else if (drill.type === 'multiple-correct') {
                html += `<div class="options-container multiple">
                    ${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}
                </div>`;
            } else if (drill.type === 'clickable-error') {
                const rawWords = drill.sentence.split(' ');
                let correctedSentence = [];
                const spans = rawWords.map(w => {
                    const match = w.match(/\[(.*?)\]\(error:(.*?)\)/);
                    if (match) {
                        correctedSentence.push(match[2]);
                        return `<span class="clickable-word" data-error="true">${match[1]}</span>`;
                    } else {
                        correctedSentence.push(w);
                        return `<span class="clickable-word">${w}</span>`;
                    }
                }).join(' ');
                html += `
                    <div class="clickable-error-wrapper">
                        <div class="mistake-text-container" style="font-size:1.2rem; margin:20px 0;">${spans}</div>
                        <div class="corrected-sentence-display" data-full-correct="${correctedSentence.join(' ')}">
                            <label>Correct Sentence:</label>
                            <p class="content"></p>
                        </div>
                    </div>`;
            } else if (drill.type === 'dialogue-scramble') {
                html += `<div class="word-bank">${drill.items.sort(() => Math.random() - 0.5).map(item => `<button class="word-btn" onclick="moveWord(this)">${item}</button>`).join('')}</div>
                         <div class="drop-zone vertical" data-answer="${drill.correctOrder.join('|')}"></div>`;
            } else if (drill.type === 'categorize') {
                html += `<div class="categorize-container" style="display:flex; gap:15px; margin-bottom:20px;">
                    ${drill.categories.map(cat => `<div class="category-box" data-category="${cat.id}" style="flex:1; border:2px dashed var(--primary-blue); padding:10px; border-radius:10px; min-height:100px;"><h5>${cat.name}</h5></div>`).join('')}
                </div>
                <div class="phrase-bank" style="border:1px solid #eee; padding:10px; border-radius:10px;">
                    ${drill.items.map(item => `<div class="draggable" draggable="true" data-category="${item.catId}" style="display:inline-block; padding:5px 10px; background:var(--bg-alice-blue); margin:5px; cursor:grab; border-radius:5px; border:1px solid var(--primary-blue);">${item.text}</div>`).join('')}
                </div>`;
            }
            html += `<button class="btn check-btn">Check</button></div>`;
        });
    }

    if (index === 8) {
        html += `<div class="area-box">
            <p><b>${step.instruction}</b></p>
            <div class="example-box" style="background:#f9f9f9; padding:10px; border-left:4px solid var(--primary-blue)">
                <p><i>Example: ${step.example}</i></p>
            </div>
            <textarea placeholder="Write your text here..." style="width:100%; height:150px; margin-top:20px; padding:10px;"></textarea>
            <p><small>* The student MUST HAND IN the answer in paper to the teacher.</small></p>
        </div>`;
    }

    if (index === 9) { 
        html += `<div class="flashcards-grid">`;
        step.items.forEach(item => {
            const btnF = item.audioFront ? `<button onclick="event.stopPropagation(); playAudio('${item.audioFront.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.2); border:1px solid white; border-radius:50%; width:35px; height:35px; cursor:pointer; color:white; margin-top:10px; display:flex; align-items:center; justify-content:center;">🔊</button>` : '';
            const btnB = item.audioBack ? `<button onclick="event.stopPropagation(); playAudio('${item.audioBack.replace(/'/g, "\\'")}')" style="background:var(--bg-alice-blue); border:1px solid var(--primary-blue); border-radius:50%; width:35px; height:35px; cursor:pointer; color:var(--primary-blue); margin-bottom:10px; display:flex; align-items:center; justify-content:center;">🔊</button>` : '';
            html += `
                <div class="flashcard" onclick="this.classList.toggle('flipped')">
                    <div class="flashcard-inner">
                        <div class="flashcard-front" style="flex-direction: column; justify-content: center; align-items: center;">
                            <span style="font-size: 1.5rem;">${item.term}</span>
                            ${btnF}
                        </div>
                        <div class="flashcard-back" style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; gap:8px; padding:10px;">
                            ${btnB}
                            <div class="fc-row definition" style="border-bottom:1px solid #eee; width:100%; padding-bottom:5px;">
                                <p><strong>${item.definition}</strong></p>
                                <p style="font-size:0.75rem; color:#666;"><i>${item.defTrans || ''}</i></p>
                            </div>
                            <div class="fc-row example">
                                <p style="font-size:0.85rem;">"${item.example}"</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        html += `</div>`;
    }

    return html;
}

window.switchSubPage = function(btn, subPageId) {
    const parent = btn.closest('.lesson-page');
    parent.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.sub-page-content').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(subPageId).classList.add('active');
}

window.handleAudioPlayer = function(btn) {
    const player = document.getElementById('global-audio-player');
    const container = btn.closest('.audio-controller');
    const audioSrc = container.dataset.src;
    const scrubber = container.querySelector('.audio-scrubber');
    const timeDisplay = container.querySelector('.audio-time');

    if (player.src.indexOf(audioSrc) === -1) {
        player.src = audioSrc;
        document.querySelectorAll('.play-pause-btn').forEach(b => b.textContent = '▶');
        document.querySelectorAll('.audio-scrubber').forEach(s => s.value = 0);
    }

    if (player.paused) {
        player.play();
        btn.textContent = '||';
        player.ontimeupdate = () => {
            if (!player.duration) return;
            const pct = (player.currentTime / player.duration) * 100;
            scrubber.value = pct;
            const formatTime = (t) => {
                const m = Math.floor(t / 60);
                const s = Math.floor(t % 60);
                return `${m}:${s < 10 ? '0' : ''}${s}`;
            };
            timeDisplay.textContent = `${formatTime(player.currentTime)} / ${formatTime(player.duration)}`;
        };
        player.onended = () => {
            btn.textContent = '▶';
            scrubber.value = 0;
        };
    } else {
        player.pause();
        btn.textContent = '▶';
    }
};

window.scrubAudio = function(rangeInput) {
    const player = document.getElementById('global-audio-player');
    const container = rangeInput.closest('.audio-controller');
    if (player.src.indexOf(container.dataset.src) !== -1) {
        const seekTo = player.duration * (rangeInput.value / 100);
        player.currentTime = seekTo;
    }
}