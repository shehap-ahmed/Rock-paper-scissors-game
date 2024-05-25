const outcome = document.querySelector('#outcome'); 
const headerScoreHu = document.querySelector('#humanscore');
const headerScoreCo = document.querySelector('#computerscore') 
const outcomeText = document.querySelector('#outcomeText');
const choices = document.querySelector('#choices');

const losingimg = document.createElement("img");
losingimg.src="images/losing.png";
const winningimg = document.createElement("img");
winningimg.src ="images/winning.png";



function getComputerChoice(){
 
    let computerChoice;
    //generate a random num between 1:3
    let ranNUM = Math.floor(Math.random()*3) +1;
    
    //use the num to make a choice
    if(ranNUM == 1){
        computerChoice = "rock";
    }else if(ranNUM == 2){
        computerChoice = "paper";
    }else{computerChoice = "scissors"}
              
    return computerChoice;

}

//------------------------------------------------------------------------


function playGame(){
                
    //Initialize both scores and round variables
        let humanScore = 0;
        let computerScore = 0;
        let round = 0;

       
        
       
        
        function playRound(humanChoice,computerChoice){

        // Check all combinations where human wins        
            if((humanChoice.toLowerCase() == "rock" &&  computerChoice == "scissors") || (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") || (humanChoice.toLowerCase() == "paper" && computerChoice == "rock")){
            
            humanScore++;                       
            outcomeText.textContent= "YOU WIN THE ROUND!"
            headerScoreHu.textContent=`human score : ${humanScore}`;
            
            //check all combinations where computer wins
            }else if((humanChoice.toLowerCase() == "scissors" &&  computerChoice == "rock") || (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") || (humanChoice.toLowerCase() == "rock" && computerChoice == "paper")){
                                
                computerScore++;            
                outcomeText.textContent= "YOU LOSE THE ROUND!:(";
                headerScoreCo.textContent=`computer score : ${computerScore}`;
                

            }else if((humanChoice.toLowerCase() == "rock" &&  computerChoice == "rock") || (humanChoice.toLowerCase() == "paper" && computerChoice == "paper") || (humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors")){
                
                               
                outcomeText.textContent= "its draw";                
                
            } 

            
        }

        const checkForWinner = (humanScore,computerScore)=>{
            if(humanScore === 5 ){
                const h2 = document.createElement('h2');
                h2.textContent='AAAAAAAAH U BEAT THE COMPUTER !🎉';
                outcome.appendChild(h2);
                choices.style.cssText = "display:none;";
                outcome.removeChild(outcomeText);
                outcome.appendChild(winningimg);

            } else if(computerScore === 5){
                const h2 = document.createElement('h2');
                h2.textContent="DAMN BRO U LOST AGAINST  A STUPID COMPUTER ;(";
                outcome.appendChild(h2);
                choices.style.cssText = "display:none;";
                outcome.removeChild(outcomeText);
                outcome.appendChild(losingimg);

            }

            }        
        

        
        let humanSelection = "";        
        let computerSelction = getComputerChoice();
        
      
        
        
        
        
        
        rockBtn.addEventListener('click', () => {
            humanSelection="rock";
            computerSelction = getComputerChoice();
            playRound(humanSelection,computerSelction);
            checkForWinner(humanScore,computerScore);                    
            
        })

        
         paperBtn.addEventListener('click', ()=>{
            humanSelection="paper";
            computerSelction = getComputerChoice();
            playRound(humanSelection,computerSelction);
            checkForWinner(humanScore,computerScore);                    
            
         })

        
        scissorBtn.addEventListener('click', ()=>{
            humanSelection="scissors";
            computerSelction = getComputerChoice();            
            playRound(humanSelection,computerSelction);
            checkForWinner(humanScore,computerScore);          
                                    
        })

        

                

}

playGame();