import { startTimer } from './timer.js';
import { scenarios } from './scenarios.js';

let score = 0;
let currentScenarioIndex = 0;

document.getElementById('startGameBtn').addEventListener('click', () => {
    console.log('Start Game button clicked!');
    const playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert('Please enter your name to start the game.');
        return;
    }

    document.getElementById('player-input').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';

    const timerDisplay = document.getElementById('timer');
    startTimer(30 * 60, timerDisplay, endGame);

    displayScenario(scenarios[0]);
});

function displayScenario(scenario) {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = '';

    if (scenario.image) {
        const background = document.createElement('img');
        background.src = scenario.image;
        background.classList.add('scenario-image');
        gameArea.appendChild(background);
    }

    if (scenario.sound) {
        const audio = new Audio(scenario.sound);
        audio.play();
    }

    const scenarioText = document.createElement('p');
    scenarioText.textContent = scenario.question;
    gameArea.appendChild(scenarioText);

    scenario.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-button');

        button.addEventListener('click', () => handleAnswer(option));
        gameArea.appendChild(button);
    });
}

function handleAnswer(option) {
    score += option.points;

    if (option.nextScenario !== null) {
        const nextScenario = scenarios.find(s => s.id === option.nextScenario);
        if (nextScenario) {
            displayScenario(nextScenario);
        }
    } else {
        endGame();
    }
}

function endGame() {
    alert(`🎉 Game Over! Final Score: ${score} points`);

    const leaderboard = document.getElementById('leaderboard');
    leaderboard.style.display = 'block';

    const leaderboardList = document.getElementById('leaderboardList');
    const playerName = document.getElementById('playerName').value.trim();

    const newScore = document.createElement('li');
    newScore.textContent = `${playerName} - ${score} points`;
    leaderboardList.appendChild(newScore);
}
