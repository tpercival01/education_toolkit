const QUIZ_STATE = { text: 0, image: 0, video: 0 };
const REQUIRED_SCORE = 2; 

function checkAnswer(btn, isCorrect, moduleName) {
    const parent = btn.parentElement;
    const feedback = parent.querySelector('.feedback');
    
    if (isCorrect) {
        btn.style.backgroundColor = '#22c55e';
        feedback.innerText = "Correct!";
        QUIZ_STATE[moduleName]++;
    } else {
        btn.style.backgroundColor = '#ef4444';
        feedback.innerText = "Try again.";
    }
    
    // Check if they passed the whole module
    if (QUIZ_STATE[moduleName] >= REQUIRED_SCORE) {
        completeModule(moduleName);
    }
}