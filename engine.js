/**
 * Master Engine v4.0
 * Handles Navigation, Audio, Voice Recording, and Exercise Mechanics.
 */

// GLOBAL VARIABLES
let currentPageIndex = 0;
let lessonData = null; // Store data globally

// 1. INITIALIZATION (Modified to prevent race conditions)
window.initLesson = function(data) {
    lessonData = data;        // <--- ADD THIS LINE
    window.lessonData = data; // <--- Keep this line
    // Wait for HTML to be ready before running
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startEngine);
    } else {
        startEngine();
    }
};

// REPLACE THE OLD startEngine FUNCTION WITH THIS:
function startEngine() {
    console.log("Engine Started...");
    const mainContainer = document.getElementById('lesson-content'); 

try {
        // Remove "window." so it checks the local variable we just set in Step 1
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
        attachExerciseListeners(); 

    } catch (error) {
        // --- CRASH HANDLER: THIS SHOWS THE ERROR ON SCREEN ---
        console.error(error);
        document.body.innerHTML = `
            <div style="padding: 40px; font-family: sans-serif; background: #fff0f0; height: 100vh;">
                <h1 style="color: #d63384;">💥 ENGINE CRASHED</h1>
                <p style="font-size: 1.2rem;">The lesson could not load because of an error in your code.</p>
                
                <div style="background: white; padding: 20px; border-left: 5px solid red; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <strong>Error Message:</strong><br>
                    <code style="font-size: 1.2rem; color: red;">${error.message}</code>
                </div>

                <h3>How to fix this:</h3>
                <ul>
                    <li>If it says <b>"lessonData is null"</b>: Your <code>data/sample.js</code> file path is wrong or the file is empty.</li>
                    <li>If it says <b>"Cannot read properties of undefined"</b>: You are missing a required field in <code>sample.js</code> (like 'grade', 'steps', or 'bimester').</li>
                    <li>If it says <b>"Unexpected token"</b>: You missed a comma <code>,</code> or a bracket <code>}</code> in <code>sample.js</code>.</li>
                </ul>
                <button onclick="location.reload()" style="padding: 10px 20px; cursor: pointer;">Try Again</button>
            </div>
        `;
    }
}


// --- START OF TTS ENGINE ---
// --- START OF TTS ENGINE (High Quality Priority) ---
window.playTTS = function(text) {
    // 1. Stop current audio
    window.speechSynthesis.cancel();
    if(typeof globalAudio !== 'undefined' && globalAudio) globalAudio.pause();

    let attempts = 0;
    const maxAttempts = 10; 

    const attemptSpeak = () => {
        const allVoices = window.speechSynthesis.getVoices();
        
        // Wait until voices are loaded
        if (allVoices.length > 0 || attempts >= maxAttempts) {
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9; // Speed (0.9 is slightly slower/clearer)
            utterance.pitch = 1.0;

            // --- PRIORITY SORTING ---
            
            // Filter for English only
            const englishVoices = allVoices.filter(v => v.lang.startsWith('en'));

            // PRIORITY 1: Google Voices (Best quality on Chrome/Opera)
            let chosenVoice = englishVoices.find(v => v.name.includes("Google US English"));
            
            // PRIORITY 2: Any Google Voice (UK, etc.)
            if (!chosenVoice) {
                chosenVoice = englishVoices.find(v => v.name.includes("Google"));
            }

            // PRIORITY 3: Microsoft "Natural" or "Online" (Rare, but good if available)
            if (!chosenVoice) {
                chosenVoice = englishVoices.find(v => v.name.includes("Natural") || v.name.includes("Online"));
            }

            // PRIORITY 4: Apple Voices (Samantha/Siri - Mac only)
            if (!chosenVoice) {
                chosenVoice = englishVoices.find(v => v.name.includes("Samantha") || v.name.includes("Siri"));
            }

            // PRIORITY 5: Windows "Mobile" Voices (Mark/Linda - better than David)
            // Windows often hides these, but sometimes we can catch them.
            if (!chosenVoice) {
                chosenVoice = englishVoices.find(v => v.name.includes("Mark") || v.name.includes("Linda"));
            }

            // FALLBACK: Don't use David/Zira if possible
            if (!chosenVoice) {
                // Try to find one that isn't the robotic default
                chosenVoice = englishVoices.find(v => !v.name.includes("David") && !v.name.includes("Zira"));
            }

            // Final Assignment
            if (chosenVoice) {
                console.log("Speaking with:", chosenVoice.name);
                utterance.voice = chosenVoice;
            } else {
                console.log("Using system default voice.");
            }

            window.speechSynthesis.speak(utterance);
            
        } else {
            // Voices array is empty. Wait 50ms and try again.
            attempts++;
            setTimeout(attemptSpeak, 50);
        }
    };

    attemptSpeak();
};

// Trigger voice loading immediately
window.speechSynthesis.getVoices();
// --- END OF TTS ENGINE ---



  

    // 2. RENDER FUNCTIONS
    function renderMetadata() {
        document.getElementById('display-grade').textContent = lessonData.grade;
        document.getElementById('display-bimester').textContent = `Bimester ${lessonData.bimester}`;
        document.getElementById('display-chapter').textContent = `Chapter ${lessonData.chapter}`;
        
        // Correctly formatted Chapter/Grade for the menu
        document.getElementById('menu-grade-label').innerHTML = `<span style="color:var(--accent-orange)">${lessonData.grade.toUpperCase()}</span>`;
        document.getElementById('menu-chapter-label').textContent = lessonData.chapterTitle;
    }



function renderMenu() {
        // Map of step indices to the subtitles you requested
        const stepLabels = {
            0: "Welcome",
            1: "In Context",
            4: "Shadowing",
            5: "Listening",
            6: "Reading",
            7: "Drills",
            8: "Writing",
            9: "Flashcards"
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

            // Add sub-pages (2A, 2B, etc.) if they exist (Steps 2 and 3)
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
                // Direct link for simple steps (0, 1, 4, 5, 6, 7, 8, 9)
                const a = document.createElement('a');
                a.href = "#";
                a.className = "nav-sub-link";
                
                // CHANGE MADE HERE:
                // This looks up your custom label based on the index. 
                // If the index isn't in the list, it defaults to "Start".
                a.textContent = stepLabels[index] || "Start"; 
                
                a.onclick = (e) => { e.preventDefault(); jumpToStep(index); };
                li.querySelector('.sub-links').appendChild(a);
            }
        });
    }
    function renderPages() {
    // THIS LINE MUST BE HERE:
    const mainContainer = document.getElementById('lesson-content'); 
    
    // Safety check
    if (!mainContainer) throw new Error("Could not find element id='lesson-content' in index.html");
        mainContainer.innerHTML = '';
        lessonData.steps.forEach((step, index) => {
            const section = document.createElement('section');
            section.className = `lesson-page step-${index}`;
            section.id = `step-page-${index}`;
            
            // Build content based on step instructions (Logic for Steps 0-9)
            section.innerHTML = buildStepHTML(index, step);
            mainContainer.appendChild(section);
        });
        attachExerciseListeners();
    }

    // 3. NAVIGATION LOGIC
    function showPage(index) {
        const pages = document.querySelectorAll('.lesson-page');
        if (index < 0 || index >= pages.length) return;

        pages.forEach(p => p.classList.remove('active'));
        pages[index].classList.add('active');
        currentPageIndex = index;

        // Update UI
        document.getElementById('prev-btn').disabled = (index === 0);
        document.getElementById('next-btn').disabled = (index === pages.length - 1);
        
        // Update Menu Active State
        document.querySelectorAll('.nav-sub-link').forEach(link => link.classList.remove('active'));
        window.scrollTo(0, 0);
        
        // Special logic for Step 9: Shuffle Flashcards on entry
        if (index === 9) shuffleFlashcards();
    }

function jumpToStep(index, subId = null) {
        showPage(index);
        if (subId) {
            // Wait for the page to become visible
            setTimeout(() => {
                const el = document.getElementById(subId);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
        document.getElementById('slide-menu').classList.remove('active');
        document.getElementById('menu-toggle').classList.remove('open');
    }

 // 4. AUDIO & RECORDING SYSTEM
    // Smart Player: Handles both MP3 files and TTS (Text-to-Speech)
    window.playAudio = function(path) {
        // 1. Stop everything currently playing
        const player = document.getElementById('global-audio-player');
        player.pause();
        window.speechSynthesis.cancel();

        // 2. Check if this is a TTS command
        if (path && path.startsWith('TTS:')) {
            const text = path.replace('TTS:', '').trim();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US'; 
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        } 
        // 3. Otherwise, play it as an audio file
        else if (path) {
            player.src = path;
            player.play();
        }
    };

    // Voice Recorder for Step 4
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
    // A. RESTORE BUTTON WIRING (Navigation & Menu)
    document.getElementById('prev-btn').onclick = () => showPage(currentPageIndex - 1);
    document.getElementById('next-btn').onclick = () => showPage(currentPageIndex + 1);
    document.getElementById('menu-toggle').onclick = function() {
        this.classList.toggle('open');
        document.getElementById('slide-menu').classList.toggle('active');
    };

    // B. SELECTION LOGIC (Standard, TF, Clickable Word, Memory)
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

    // C. DRAG & DROP / MATCHING / CHECK BUTTONS
    document.addEventListener('dragstart', e => { if (e.target.classList.contains('draggable')) window.draggedItem = e.target; });
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => {
        const dropZone = e.target.closest('.category-box, .phrase-bank');
        if (dropZone && window.draggedItem) dropZone.appendChild(window.draggedItem);
    });

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
                            // Remove selection orange
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

// Family: True/False (Drill 6)
            case 'true-false':
                card.querySelectorAll('.tf-buttons').forEach(group => {
                    const correctValue = group.dataset.correct; // "true" or "false"
                    const selectedBtn = group.querySelector('.tf-btn.selected');
                    if (selectedBtn) {
                        if (selectedBtn.dataset.value === correctValue) {
                            selectedBtn.classList.add('correct');
                        } else {
                            selectedBtn.classList.add('incorrect');
                            group.querySelector(`[data-value="${correctValue}"]`).classList.add('correct');
                        }
                    } else {
                        group.querySelector(`[data-value="${correctValue}"]`).classList.add('correct');
                    }
                });
                break;

            // Family: Clickable Error (Drill 16)
            case 'clickable-error':
                card.querySelectorAll('.clickable-word').forEach(word => {
                    const isErrorWord = word.dataset.error === "true";
                    const isSelected = word.classList.contains('selected');

                    if (isErrorWord) {
                        // If it's a mistake and user found it -> Green
                        // If it's a mistake and user missed it -> Red
                        word.classList.add(isSelected ? 'correct' : 'incorrect');
                    } else if (isSelected) {
                        // If user clicked a word that was actually correct -> Red
                        word.classList.add('incorrect');
                    }
                });

                // Reveal the full corrected sentence
                const display = card.querySelector('.corrected-sentence-display');
                if (display) {
                    display.querySelector('.content').textContent = display.dataset.fullCorrect;
                    display.style.display = 'block';
                }
                break;



            // Family: Multiple Correct (Drill 13)
            case 'multiple-correct':
                card.querySelectorAll('.option').forEach(opt => {
                    const isCorrect = opt.dataset.correct === 'true';
                    const isSelected = opt.classList.contains('selected');
                    if (isCorrect && isSelected) opt.classList.add('correct');
                    else if (isCorrect && !isSelected) opt.style.border = "2px solid var(--success-green)";
                    else if (!isCorrect && isSelected) opt.classList.add('incorrect');
                });
                break;
                
            // Family: Memory Game (Drill 19)
            case 'memory-game':
                // Simply flip all cards to show the solution if "Check" is pressed
                card.querySelectorAll('.memory-card:not(.is-matched)').forEach(card => {
                    card.classList.add('is-flipped', 'incorrect');
                });
                break;
            case 'dialogue-scramble':
                const dArea = card.querySelector('.drop-zone');
                // Get all buttons currently in the drop zone
                const dButtons = Array.from(dArea.querySelectorAll('.word-btn'));
                
                // Join their text with '|' to compare against the answer key
                const dResult = dButtons.map(b => b.textContent.trim()).join('|');
                
                if (dResult === dArea.dataset.answer) {
                    dArea.style.backgroundColor = '#eafaf1'; // Green
                } else {
                    dArea.style.backgroundColor = '#fdeded'; // Red
                    // Optional: Show the correct order in the feedback box
                    showExtraFeedback(card, dArea.dataset.answer.split('|').join('<br>'));
                }
                break;

            case 'typing':
                card.querySelectorAll('.drill-input').forEach(input => {
                    // FIRST: Remove any old hints so they don't stack
                    const oldHint = input.nextElementSibling;
                    if (oldHint && oldHint.tagName === 'SMALL') oldHint.remove();

                    if (input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase()) {
                        input.style.backgroundColor = 'var(--success-green)';
                        input.style.color = 'white';
                    } else {
                        input.style.backgroundColor = 'var(--error-red)';
                        input.style.color = 'white';
                        // Add the new hint
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
                const area = card.querySelector('.drop-zone');
                const result = Array.from(area.querySelectorAll('.word-btn')).map(b => b.textContent.trim()).join(' ');
                if (result === area.dataset.answer) {
                    area.style.backgroundColor = '#eafaf1';
                } else {
                    area.style.backgroundColor = '#fdeded';
                }



                break;
                
            case 'categorize':
                // 1. Check items inside the category boxes
                card.querySelectorAll('.category-box').forEach(box => {
                    const targetCategory = box.dataset.category;
                    const itemsInBox = box.querySelectorAll('.draggable');
                    
                    itemsInBox.forEach(item => {
                        if (item.dataset.category === targetCategory) {
                            item.classList.add('correct');
                        } else {
                            item.classList.add('incorrect');
                        }
                    });
                });

                // 2. Any items left in the phrase-bank were not categorized
                card.querySelectorAll('.phrase-bank .draggable').forEach(item => {
                    item.classList.add('incorrect');
                });
                break;
        }
    }




function resetExercise(card) {
        const type = card.dataset.type;




// Hide the corrected sentence box
        const correctionBox = card.querySelector('.corrected-sentence-display');
        if (correctionBox) correctionBox.style.display = 'none';




if (type === 'matching') {
    pairCount = 0; // Resets the color cycle for the next attempt
}

        // 1. Clear standard selectable options (MCQ, Images, Words, TF buttons)
        card.querySelectorAll('.option, .image-option, .clickable-word, .tf-btn').forEach(el => {
            el.classList.remove('selected', 'correct', 'incorrect');
            el.style.border = ""; // Clears any custom borders
        });


        // Clear all state classes
        card.querySelectorAll('.match-item').forEach(el => {
            el.classList.remove('selected', 'correct', 'incorrect', 'pair-red');
            for (let i = 0; i < 4; i++) {
                el.classList.remove(`pair-orange-${i}`);
                el.classList.remove(`pair-blue-${i}`);
            }
            delete el.dataset.pairId;
        });

// Clear Inputs and Remove Hints (Typing)
        card.querySelectorAll('input').forEach(i => { 
            i.value = ''; 
            i.style.backgroundColor = ''; 
            i.style.color = ''; 
            // This removes the small red text hint if it exists
            const hint = i.nextElementSibling;
            if (hint && hint.tagName === 'SMALL') hint.remove();
        });

        // Clear Dropdowns
        card.querySelectorAll('select').forEach(s => {
            s.value = ""; // Resets to the top option (usually "...")
            s.style.backgroundColor = '';
            s.style.color = '';
        });

        // Reset Word Order areas
// Reset Word Order AND Dialogue Scramble
        if (type === 'word-order' || type === 'dialogue-scramble') {
            const bank = card.querySelector('.word-bank');
            const area = card.querySelector('.drop-zone');
            area.style.backgroundColor = '';
            area.querySelectorAll('.word-btn').forEach(btn => bank.appendChild(btn));
        }

// Reset Memory Game cards (Drill 19)
        if (type === 'memory-game') {
            const grid = card.querySelector('.memory-grid');
            const cards = Array.from(grid.querySelectorAll('.memory-card'));
            cards.forEach(c => c.classList.remove('is-flipped', 'is-matched', 'incorrect'));
            
            // Wait for flip-back animation, then reshuffle
            setTimeout(() => {
                for (let i = grid.children.length; i >= 0; i--) {
                    grid.appendChild(grid.children[Math.random() * i | 0]);
                }
            }, 600);
        }

        // Specifically clear the colored borders for Multiple Correct (Drill 13)
        card.querySelectorAll('.option').forEach(opt => opt.style.border = "");


// Reset Categorize
        if (type === 'categorize') {
            const bank = card.querySelector('.phrase-bank');
            card.querySelectorAll('.draggable').forEach(item => {
                // Remove feedback colors
                item.classList.remove('correct', 'incorrect');
                // Move item back to the bank
                bank.appendChild(item);
            });
        }
    }




    // 6. UI UTILITIES
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
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

    }

    function shuffleFlashcards() {
        const grid = document.querySelector('.flashcards-grid');
        if (!grid) return;
        for (let i = grid.children.length; i >= 0; i--) {
            grid.appendChild(grid.children[Math.random() * i | 0]);
        }
    }



/**
 * Build HTML strings for different steps based on blueprint requirements.
 */



function buildStepHTML(index, step) {

const createAudioPlayer = (audioPath) => {
    if (!audioPath) return ''; 

    // 1. DUAL MODE: If text has "||", show both players
    if (audioPath.includes('||')) {
        const parts = audioPath.split('||');
        return `<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px;">
                    ${createAudioPlayer(parts[0].trim())}
                    ${createAudioPlayer(parts[1].trim())}
                </div>`;
    }

    // 2. TTS MODE: If text starts with "TTS:", show Orange Button
    if (audioPath.trim().startsWith('TTS:')) {
        const safePath = audioPath.trim().replace(/'/g, "\\'");
        return `<div class="audio-controller" style="justify-content: center; width: auto; min-width: 120px; border-color: var(--brand-orange); position: relative;">
                    <button class="play-pause-btn" style="background: var(--accent-orange); width: 100%; border-radius: 20px; padding: 0 15px; font-size: 0.8rem;" 
                    onclick="playAudio('${safePath}')">🔊 Listen</button>
                </div>`;
    }

    // 3. MP3 MODE: Standard Blue Player
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
            // Find the definition in the glossary data
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

    // --- STEPS 2 & 3: SUB-PAGE LOGIC ---
    if (index === 2 || index === 3) {
        html += `<div class="step-sub-nav">${step.subPages.map((sub, i) => `<button class="sub-nav-btn ${i === 0 ? 'active' : ''}" onclick="switchSubPage(this, '${sub.id}')">${sub.label}</button>`).join('')}</div>`;

        if (index === 2) {
            // 2A Content
            let html2a = step.areas.map(area => `
                <div class="area-box" style="position:relative">
                    ${createAudioPlayer(area.audio)}
                    <h3>${area.title}</h3>
                    ${area.items.map(item => `<div class="learning-card"><span class="term-en">${item.term}</span><span class="term-pt">${item.trans}</span></div>`).join('')}
                </div>`).join('');

            
            // 2B Content - LOOKING FOR audio2b
            let html2b = `
                <div class="area-box" style="position:relative">
                    ${step.audio2b ? createAudioPlayer(step.audio2b) : ''}
                    ${step.examples.map(ex => `
                        <div class="exercise-card" style="box-shadow:none; border-bottom:1px solid #eee; margin-bottom:0; padding: 10px 0;">
                            <p><b class="term-en">${ex.term}:</b> ${ex.sent}</p>
                            <p class="term-pt"><i>${ex.trans}</i></p>
                        </div>`).join('')}
                </div>`;


            // 2C Content (Drills)
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
            // 3A Content
            let html3a = step.patterns.map(p => `
                <div class="area-box">
                    <h3>${p.title}</h3><p>${p.explanation}</p>
                    <div class="example-box">${p.samples.map(s => `<p>• ${s.en} <i>(${s.pt})</i></p>`).join('')}</div>
                </div>`).join('');

            // 3B Content - LOOKING FOR audio3b
            let html3b = `
                <div class="area-box" style="position:relative">
                    ${step.audio3b ? createAudioPlayer(step.audio3b) : ''}
                    ${step.dialogueExamples.map(d => `<p><b>${d.speaker}:</b> ${d.text}</p><p class="term-pt"><i>${d.pt}</i></p><br>`).join('')}
                </div>`;



            // 3C Content
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
    
    if (index === 4) { // Shadowing
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

// Logic for Step 5 (Listening)
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

// Logic for Step 6 (Reading with Sub-Pages)
    if (index === 6) {
        // 1. Create the top navigation buttons dynamically based on how many texts are in the array
        html += `<div class="step-sub-nav">
            ${step.texts.map((_, i) => `
                <button class="sub-nav-btn ${i === 0 ? 'active' : ''}" 
                        onclick="switchSubPage(this, 'step6-t${i+1}')">TEXT ${i+1}</button>
            `).join('')}
        </div>`;

        // 2. Create the content for each text
        step.texts.forEach((text, textIndex) => {
            const autoAudioPath = `audio/${lessonData.lessonId}/p6_text${textIndex + 1}.mp3`;
            const subPageId = `step6-t${textIndex + 1}`;

            html += `
                <div id="${subPageId}" class="sub-page-content ${textIndex === 0 ? 'active' : ''}">
    <!-- Header: Audio and Title inside a dedicated box to prevent scroll-away -->
    <div class="area-box" style="position:relative; margin-top: 50px; margin-bottom: 10px; padding: 15px;">
         ${createAudioPlayer(autoAudioPath)}
         <h3 style="color:var(--primary-blue); font-size: 1.1rem; margin-top: 10px;">${text.title}</h3>
    </div>

    <div class="reading-split-container">
        <!-- Text Pane stays here -->
        <div class="reading-text-pane">
            <p>${text.body}</p>
        </div>
        <!-- Questions Pane stays here -->
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
    // Logic for Step 7 (Quick Drills)
    if (index === 7) {
        step.drills.forEach(drill => {
            // Added position:relative so the player anchors correctly
            html += `<div class="exercise-card" data-type="${drill.type}" style="position:relative">
                ${drill.audio ? createAudioPlayer(drill.audio) : ''}
                <p><b>${drill.instruction}</b></p>`;

            // ADD THESE TO STEP 7:
            
            // 1. Typing (Fill in the blank)
            if (drill.type === 'typing') {
                html += `<p style="margin-top:10px;">${drill.text.replace(/\[(.*?)\]/g, `<input type="text" data-answer="$1" class="drill-input">`)}</p>`;
            } 
            
            // 2. Dropdown (Select from list)
            else if (drill.type === 'dropdown') {
                html += drill.questions.map(q => `
                    <p>${q.q.replace(/\[(.*?)\]/g, `<select class="drill-select" data-answer="${q.a}">
                        <option value="">...</option>
                        ${q.q.match(/\[(.*?)\]/)[1].split('|').map(opt => `<option value="${opt.trim()}">${opt.trim()}</option>`).join('')}
                    </select>`)}</p>`).join('');
            } 
            
            // 3. Audio Choice (Listen and pick)
            else if (drill.type === 'audio-choice') {
                html += `<div class="options-container">${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}</div>`;
            }

       
            if (drill.type === 'matching') {
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
                // Shuffle cards specifically for the initial render
                const shuffledCards = [...drill.cards].sort(() => Math.random() - 0.5);
                html += `<div class="memory-grid">
                    ${shuffledCards.map(c => `
                        <div class="memory-card" data-match="${c.match}">
                            <div class="card-face card-front"></div>
                            <div class="card-face card-back">${c.text}</div>
                        </div>
                    `).join('')}
                </div>`;
            }
            // FIX: TRUE OR FALSE
            else if (drill.type === 'true-false') {
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
            }
            // FIX: MULTIPLE CORRECT
            else if (drill.type === 'multiple-correct') {
                html += `<div class="options-container multiple">
                    ${drill.options.map(opt => `<div class="option" data-correct="${opt.c}">${opt.t}</div>`).join('')}
                </div>`;
            }
            // FIX: CLICKABLE ERROR
            else if (drill.type === 'clickable-error') {
                const rawWords = drill.sentence.split(' ');
                let correctedSentence = [];

                const spans = rawWords.map(w => {
                    const match = w.match(/\[(.*?)\]\(error:(.*?)\)/);
                    if (match) {
                        const wrongWord = match[1];
                        const rightWord = match[2];
                        correctedSentence.push(rightWord);
                        return `<span class="clickable-word" data-error="true">${wrongWord}</span>`;
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
            }

// ADD THIS BLOCK: Dialogue Scramble / Ranking
            else if (drill.type === 'dialogue-scramble') {
                // We assume drill.items is an array of strings
                // We join drill.correctOrder with '|' to create the answer key
                html += `<div class="word-bank">${drill.items.sort(() => Math.random() - 0.5).map(item => `<button class="word-btn" onclick="moveWord(this)">${item}</button>`).join('')}</div>
                         <div class="drop-zone vertical" data-answer="${drill.correctOrder.join('|')}"></div>`;
            }


            // ADD MISSING: CATEGORIZE
            else if (drill.type === 'categorize') {
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

    // 5. Logic for Step 8 (Production)
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
        // Check if audio exists, create button HTML if true
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
// Add this function at the bottom of engine.js to handle the button clicks
window.switchSubPage = function(btn, subPageId) {
    const parent = btn.closest('.lesson-page');
    parent.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.sub-page-content').forEach(p => p.classList.remove('active'));
    
    btn.classList.add('active');
    document.getElementById(subPageId).classList.add('active');
}




let flippedCards = [];
let isCheckingMemory = false;

function handleMemoryClick(card) {
    if (isCheckingMemory || card.classList.contains('is-flipped') || card.classList.contains('is-matched')) return;
    
    card.classList.add('is-flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        isCheckingMemory = true;
        const [card1, card2] = flippedCards;
        
        if (card1.dataset.match === card2.dataset.match) {
            card1.classList.add('is-matched');
            card2.classList.add('is-matched');
            flippedCards = [];
            isCheckingMemory = false;
        } else {
            setTimeout(() => {
                card1.classList.remove('is-flipped');
                card2.classList.remove('is-flipped');
                flippedCards = [];
                isCheckingMemory = false;
            }, 1000);
        }
    }
}










window.handleAudioPlayer = function(btn) {
    const player = document.getElementById('global-audio-player');
    const container = btn.closest('.audio-controller');
    const audioSrc = container.dataset.src;
    const scrubber = container.querySelector('.audio-scrubber');
    const timeDisplay = container.querySelector('.audio-time');

    // If switching to a new audio file
    if (player.src.indexOf(audioSrc) === -1) {
        player.src = audioSrc;
        // Reset all other players icons
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
    
    // Only scrub if the global player is currently set to this source
    if (player.src.indexOf(container.dataset.src) !== -1) {
        const seekTo = player.duration * (rangeInput.value / 100);
        player.currentTime = seekTo;
    }
}