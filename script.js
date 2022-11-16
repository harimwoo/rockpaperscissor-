function getComputerChoice(){
    var randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            return "rock";
            break;
        case 1: 
            return "paper"
            break;
        case 2: 
            return "scissors";
            break;
    }
}


function playRound(computerSelection, playerSelection){
  if(computerSelection === playerSelection){
    return "tied [computer:" + computerSelection + " / you:" + playerSelection + "]";
  } 

    else if(computerSelection === "rock"){
    if(playerSelection === "paper"){
      return "won [computer:" + computerSelection + " / you:" + playerSelection + "]";
    } else {
      return "lost [computer:" + computerSelection + " / you:" + playerSelection + "]";
    }
  } else if(computerSelection === "paper"){
    if(playerSelection === "scissors"){
      return "won [computer:" + computerSelection + " / you:" + playerSelection + "]";
    } else{
      return "lost [computer:" + computerSelection + " / you:" + playerSelection + "]";
    }
  } else if(computerSelection === "scissors"){
    if(playerSelection === "rock"){
      return "won [computer:" + computerSelection + " / you:" + playerSelection + "]";
    } else{
      return "lost [computer:" + computerSelection + " / you:" + playerSelection + "]";
    } 
  } 
}

function fiveGames(){
    for(var i = 0; i < 5; i++){
        var playerChoice = prompt("your move");
        var computerChoice = getComputerChoice();
        console.log(playRound(computerChoice, playerChoice));
    }
}
