function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
 
}

function getHumanChoice() {
  const input = prompt("choose rock or paper or scissors");
  return input.toLowerCase();  
}
      
     let humanScore=0;
     let computerScore=0;

      function playRound(humanChoice,computerChoice){
        if( (computerChoice==="rock" && humanChoice==="scissors" ) || (computerChoice==="paper" && humanChoice==="rock") || (computerChoice==="scissors" && humanChoice==="paper")){
          computerScore+=1;
          console.log("Computer wins")
        }
        else if (humanChoice===computerChoice){
          console.log("Match draw")
        }
        else if( (humanChoice==="rock" && computerChoice==="scissors" ) || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper")){
          humanScore+=1;
        console.log("Human wins")
        }
      
     }
      
     function  playGame() {
      for (let i=0; i<5; i++){
         const human = getHumanChoice();
         const computer = getComputerChoice();
         console.log("Computer choosed: ",computer);
          console.log("Human choosed: ", human);
         playRound(human, computer);
      }
      console.log("Computer score is: ", computerScore)  ;
      console.log("Human score is: ", humanScore) ;
      if (computerScore>humanScore){
        console.log("Computer is the Winner");
      }
      else if(humanScore>computerScore){
        console.log("Human is the winner")
      }
      else{
        console.log("Match draw");
      }
     }
      
      playGame();