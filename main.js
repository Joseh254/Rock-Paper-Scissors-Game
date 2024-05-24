document.addEventListener("DOMContentLoaded", () => {
    const choices = ["✊", "✋", "✌️"];
    const results = {
        "✊✊": "DRAW",
        "✊✋": "LOSE",
        "✊✌️": "WIN",
        "✋✊": "WIN",
        "✋✋": "DRAW",
        "✋✌️": "LOSE",
        "✌️✊": "LOSE",
        "✌️✋": "WIN",
        "✌️✌️": "DRAW",
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
        const result = results[playerChoice + computerChoice];

        computerHandEl.textContent = computerChoice;
        playerHandEl.textContent = playerChoice;
        resultHeadingEl.textContent = result;

        if (result === "WIN") {
            playerScore++;
        } else if (result === "LOSE") {
            computerScore++;
        }

        computerScoreEl.textContent = computerScore;
        playerScoreEl.textContent = playerScore;
    }
});
