import { startTimer } from './timer.js';
import { scenarios } from './scenarios.js';

let score = 0;
let currentScenarioIndex = 0;
let remainingTime = 30 * 60; // 30-minute countdown timer

// Shuffle scenarios for replayability
function shuffleScenarios(scenarios) {
    return scenarios.sort(() => Math.random() - 0.5);
}

// Track progress through scenarios
let totalScenarios = 20;
let completedScenarios = 0;

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById('startGameBtn');
    startButton.addEventListener('click', () => {
        const playerName = document.getElementById('playerName').value.trim();
        if (!playerName) {
            alert('Please enter your name to start the game.');
            return;
        }

        document.getElementById('player-input').style.display = 'none';
        const gameArea = document.getElementById('gameArea');
        gameArea.style.display = 'block';

        const timerDisplay = document.getElementById('timer');
        startTimer(remainingTime, timerDisplay, endGame);

        const randomizedScenarios = shuffleScenarios([...scenarios]);
        displayScenario(randomizedScenarios[0]);
    });
});

function displayScenario(scenario) {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = '';

    const scenarioText = document.createElement('p');
    scenarioText.textContent = scenario.question;
    gameArea.appendChild(scenarioText);

    scenario.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-button');

        button.addEventListener('click', () => handleAnswer(option, scenario.bonus));
        gameArea.appendChild(button);
    });

    // Progress Tracking
    completedScenarios++;
    updateProgressBar(completedScenarios, totalScenarios);
}

function handleAnswer(option, isBonusRound = false) {
    score += option.points || 0;

    // Apply time penalties if applicable
    if (option.timePenalty) {
        remainingTime -= option.timePenalty;
        alert(`⏳ Time Penalty: -${option.timePenalty / 60} minutes`);
    }

    if (option.nextScenario !== null) {
        const nextScenario = scenarios.find(s => s.id === option.nextScenario);
        if (nextScenario) {
            displayScenario(nextScenario);
        } else {
            console.error(`❌ Scenario ID ${option.nextScenario} not found!`);
        }
    } else {
        endGame();
    }
}

function updateProgressBar(completed, total) {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = Math.floor((completed / total) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${progressPercentage}%`;
}

function endGame() {
    alert(`🎯 Game Over! Final Score: ${score} points`);

    const leaderboard = document.getElementById('leaderboard');
    leaderboard.style.display = 'block';

    const leaderboardList = document.getElementById('leaderboardList');
    const playerName = document.getElementById('playerName').value.trim();

    const newScore = document.createElement('li');
    newScore.textContent = `${playerName} - ${score} points`;
    leaderboardList.appendChild(newScore);

    // Show full progress bar when finished
    updateProgressBar(totalScenarios, totalScenarios);
}
