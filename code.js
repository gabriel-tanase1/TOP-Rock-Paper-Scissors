let playerChoice;
let computerChoice;
let keepGoing=true;
let playerScore =0;
let computerScore =0;
let roundCount =1;

function playRound(){
if(computerChoice===playerChoice){
    console.log('Draw!');
} else if((playerChoice==='scissors'&&computerChoice==='paper')||
           (playerChoice==='rock'&&computerChoice==='scissors')||
            (playerChoice===`paper`&&computerChoice==='rock')){
                console.log(
`The player wins! 
${playerChoice} beats ${computerChoice}`);
                return playerScore++;
                
            }
 else {
    console.log(
`The Computer wins!
${computerChoice} beats ${playerChoice}`);
    return computerScore++;             
 }
}

function playGame(){
while(keepGoing===true){
    if(roundCount<=5){
    playerChoice=prompt('Rock, paper, scissors?');
    computerChoice=getComputerChoice();
    playRound();
    console.log(`Round:${roundCount}
    player score:${playerScore}
    computer score:${computerScore}`);
    roundCount++;
} else {
    keepGoing=false;
    if(computerScore===playerScore){
        console.log(`Draw!
        player score: ${playerScore}
        computer score:${computerScore}`)
    } else if(playerScore>computerScore){
        console.log(`The player wins!
        player score: ${playerScore}
        computer score:${computerScore}`)
    } else {
        console.log(`The computer wins!
        player score: ${playerScore}
        computer score:${computerScore}`)
    }

}
 }

}

function getComputerChoice(){
    const possibleChoices=['rock','paper','scissors'];
    return possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}

playGame();