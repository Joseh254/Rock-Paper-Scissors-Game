document.addEventListener("DOMContentLoaded", () => {
    const choices = ["✊", "✋", "✌️"];
    const outcomes = {
        "✊✌️": "player",
        "✌️✋": "player",
        "✋✊": "player",
        "✌️✊": "computer",
        "✋✌️": "computer",
        "✊✋": "computer",
    };

    const computerHandEl = document.getElementById("current_computer_hand");
    const playerHandEl = document.getElementById("current_players_hand");
    const resultHeadingEl = document.getElementById("result_heading");

    const computerScoreEl = document.querySelector("#navigation2 li:nth-child(2)");
    const playerScoreEl = document.querySelector("#navigation2 li:nth-child(3)");

    let computerScore = 0;
    let playerScore = 0;

    document.getElementById("rock").addEventListener("click", () => playGame("✊"));
    document.getElementById("paper").addEventListener("click", () => playGame("✋"));
    document.getElementById("Scissors").addEventListener("click", () => playGame("✌️"));

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerHandEl.textContent = computerChoice;
        playerHandEl.textContent = playerChoice;

        if (playerChoice === computerChoice) {
            resultHeadingEl.textContent = "Draw";
        } else {
            const outcome = outcomes[playerChoice + computerChoice];
            if (outcome === "player") {
                resultHeadingEl.textContent = "Player wins";
                playerScore++;
            } else {
                resultHeadingEl.textContent = "Computer wins";
                computerScore++;
            }
        }

        computerScoreEl.textContent = computerScore;
        playerScoreEl.textContent = playerScore;
    }
});
