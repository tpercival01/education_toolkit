const STATE = {
    xp: 0,
    modules: {
        text: false,
        image: false,
        audio: false,
        video: false
    }
};

// tracking specific questions
const PROGRESS = {
    text: [0, 0, 0], // 3 questions for text
    image: [0, 0],   // 2 questions for image
    video: [0, 0]    // 2 questions for video
};

function submitAnswer(module, questionIndex, isCorrect) {
    if (isCorrect) {
        PROGRESS[module][questionIndex] = 1;
        checkCompletion(module);
    }
}

function checkCompletion(module) {
    const score = PROGRESS[module].reduce((a, b) => a + b, 0);
    const total = PROGRESS[module].length;
    
    if (score === total) {
        completeModule(module); // This triggers your XP and localStorage save
    }
}

// Load progress on page load
function loadState() {
    const saved = localStorage.getItem('aletheia_progress');
    if (saved) {
        const parsed = JSON.parse(saved);
        STATE.xp = parsed.xp;
        STATE.modules = parsed.modules;
        updateUI();
    }
}

// Save progress
function saveState() {
    localStorage.setItem('aletheia_progress', JSON.stringify(STATE));
    updateUI();
}

// Complete a module
function completeModule(moduleName) {
    if (!STATE.modules[moduleName]) {
        STATE.modules[moduleName] = true;
        STATE.xp += 25;
        if (STATE.xp > 100) STATE.xp = 100;
        alert(`Module Complete! +33 XP`);
        saveState();
    }
}

// Update the visual bars
function updateUI() {
    const bar = document.getElementById('progress-fill');
    const text = document.getElementById('xp-text');
    
    if (bar && text) {
        bar.style.width = `${STATE.xp}%`;
        text.innerText = `${STATE.xp}% Mastery`;
        
        // Color shift based on progress
        if (STATE.xp === 100) {
            bar.style.backgroundColor = '#22c55e';
            text.innerText = "CERTIFIED DETECTIVE";
        }
    }
    
    // Lock/Unlock Logic (Optional visual cues)
    updateCardStatus('card-text', STATE.modules.text);
    updateCardStatus('card-image', STATE.modules.image);
    updateCardStatus('card-audio', STATE.modules.audio);
    updateCardStatus('card-video', STATE.modules.video);
}

function updateCardStatus(id, isDone) {
    const el = document.getElementById(id);
    if (el && isDone) {
        el.classList.add('completed');
        el.querySelector('.status').innerText = "✅ COMPLETED";
    }
}

document.addEventListener('DOMContentLoaded', loadState);