function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerPlay(){
    const arr = ["rock", "paper", "scissor"];
    let random = getRndInteger(0, 2);
    
    let move = arr[random];
    return move;
}

function playRound(playerSelectionpar, computerSelection){
    let playerSelection = playerSelectionpar.toLowerCase();
    let winner = "";
    if (
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection =="rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")){
            winner = "player"
        // winner = playerSelection + ' beats ' + computerSelection + " so the player is the winner!";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "paper" && playerSelection =="rock") ||
        (computerSelection == "scissor" && playerSelection == "paper")){
            winner = "computer"
        // winner = computerSelection + " beats " + playerSelection + " so the computer is the winner!";
    } else if (computerSelection == playerSelection){
        winner = "tie"
        // winner = "tie!";
    }
    return winner;
}

function checkPlayerInput(playerSelection){
    let valid = "";
    if (
        (playerSelection == "rock")||
        (playerSelection == "scissor")||
        (playerSelection == "paper")){
        valid = true;
        
    } else {
        valid = false;
        console.log("Invalid value, please try again.");
    }
    return valid;
}

function game(){
    let playerSelection = "";
    let computerSelection = "";
    let computerWins = 0;
    let playerWins = 0;
    let winner = "";
    for(var i = 0; i < 5; i++){
        playerSelection = prompt("Enter your move: ");
        while (checkPlayerInput(playerSelection) != true){
            playerSelection = prompt("Enter your move: ");
        }
        computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        if (winner == "player"){
            playerWins++;
            console.log(playerSelection + ' beats ' + computerSelection + " so the player is the winner!");
        } else if (winner == "computer"){
            computerWins++;
            console.log(computerSelection + " beats " + playerSelection + " so the computer is the winner!");
        } else {
            console.log("Tie! you chose the same thing as the computer!")
        }
    }
    if (computerWins > playerWins){
        return ("round over the winner is the computer " + playerWins + ":" + computerWins);
    } else if (playerWins > computerWins) {
        return ("round over the winner is the player! " + playerWins + ":" + computerWins);
    } else{
        return ("It's a tie!" + playerWins + ":" + computerWins);
    }
}

console.log(game());
