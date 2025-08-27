let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById("results");
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1/3) return "rock";
    else if (randomNum < 2/3) return "paper";
    else return "scissors";
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
     let message = "Human chose: " + humanChoice + "<br>" +
              "Computer chose: " + computerChoice + "<br>";

    if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        message+="Computer wins this round!<br>";
    } else if (humanChoice === computerChoice) {
        message+="Match draw!<br>";
    } else {
        humanScore++;
        message+="Human wins this round!<br>";
    }

    message+=`Score:  Human: ${humanScore} | Computer: ${computerScore}<br>`;

    if (humanScore === 5) 
      message+=" Human wins the game!<br>";
    if (computerScore === 5) 
      message+=" Computer wins the game!<br>";
    resultsDiv.innerHTML = message;

    
}

// Event listeners
document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissor").addEventListener("click", function() {
    playRound("scissors");
});
