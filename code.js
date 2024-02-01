const computerChoice = 'paper';
const playerChoice = 'scissors';
let keepGoing=true;
let playerScore =0;
let computerScore =0;
let roundCount =0;

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
while(keepGoing==='true'){
    playerChoice=prompt('Rock, paper, scissors?');

}

}