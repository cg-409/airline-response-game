export function displayLeaderboard(players) {
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';

    players.sort((a, b) => b.score - a.score).forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = `${player.name} - ${player.score} points`;
        leaderboardList.appendChild(listItem);
    });
}
