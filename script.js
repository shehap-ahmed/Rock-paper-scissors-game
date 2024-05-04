//function get computer choice
//pass in : nothin

function getComputerChoice(){
 //DECLARE "computerChoice" variable 
 let computerChoice;
    //DECLARE "ranNum" variable and assign it to (math.floor(math.random*3+1) //expect to give num between 1:3
    let ranNUM = Math.floor(Math.random()*3) +1;
    
    //IF ranNum is equal to 1 THEN assign computerChoice to "rock"
    if(ranNUM == 1){
        computerChoice = "rock";
    }else if(ranNUM == 2){
        computerChoice = "paper";
    }else{computerChoice = "scissors"}
    
      // ELSE IF ranNUM is equal to 2 THEN assign computerChoice to "paper"
       //ELSE assign computerChoice to "scissors"
     //ENDIF
  //pass out: computerChoice value
  return computerChoice;
//Endfunction
}


//--------------------------------------------------------


//funciton getHumanChoice
//pass in : nothin

function getHumanChoice(){
 
//DECLARE "humanChoice" and assign it to the value u get it from the user
    
    let humanChoice = prompt("rock,paper or scissors?"); 

    
    //WHILE the humanChoice(user) choice is invalid
    
    while(!(humanChoice.toLowerCase() == "rock") && !(humanChoice.toLowerCase() == "paper") && !(humanChoice.toLowerCase() == "scissors")){
        //keep askin them try write a valid choice
       
          humanChoice = prompt("please enter a valid choice");
        

    }

    //pass out : humanChoice value
    return humanChoice;


    

//Endfunction
} 


//------------------------------------------------------------------------



function playGame(){
            //Declare humanScore and computerScore to keep track of the players score, assign them to 0

        let humanScore = 0;
        let computerScore = 0;




        //function play round 
        //pass in : human selction + computer selction
        function playRound(humanChoice,computerChoice){
        //IF (human selction is ROCK and  computer selction is scissors) or (human selction is SCISSORS and coputer secltion is PAPER) or (human selcion is PAPER and computer  selction is Rock)
        //THEN :
            if((humanChoice.toLowerCase() == "rock" &&  computerChoice == "scissors") || (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") || (humanChoice.toLowerCase() == "paper" && computerChoice == "rock")){
            //Increment   humanScore var
            humanScore++;

            //PRINT “YOU WIN"
            console.log("YOU WIN THE ROUND! :)");

            }else if((humanChoice.toLowerCase() == "scissors" &&  computerChoice == "rock") || (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") || (humanChoice.toLowerCase() == "rock" && computerChoice == "paper")){
                //ELSE IF (computer selction is ROCK and human selction is scissors) or (computer selction is SCISSORS and human secltion is PAPER) or (computer selcion is PAPER and human selction is Rock)
                //THEN:

                //Increment computerScore var
                computerScore++;
                //PRINT " YOU LOSE!"
                console.log("YOU LOSE THE ROUND!:(");

            }else if((humanChoice.toLowerCase() == "rock" &&  computerChoice == "rock") || (humanChoice.toLowerCase() == "paper" && computerChoice == "paper") || (humanChoice.toLowerCase() == "scissors" && computerChoice == "scissors")){
                //ELSE IF (computer selction is ROCK and humanr selction is also ROCK) or (computer selction is PAPER and human secltion is aslo PAPER) or (computer selcion is SCISSORS and human selction is also SCISSORS)

                computerScore++;
                humanScore++;

                //THEN PRINT "its draw"
                console.log("its draw");
            } 


            //Endfunction
        }




        let humanSelection = getHumanChoice();        
        let computerSelction = getComputerChoice();
        


        //play 5 rounds
        playRound(humanSelection,computerSelction);
        console.log(humanScore);
        console.log(computerScore);

        
         humanSelection = getHumanChoice();        
         computerSelction = getComputerChoice();
        playRound(humanSelection,computerSelction);
        console.log(humanScore);
        console.log(computerScore);

        humanSelection = getHumanChoice();        
        computerSelction = getComputerChoice();
        playRound(humanSelection,computerSelction);
        console.log(humanScore);
        console.log(computerScore);

        humanSelection = getHumanChoice();        
        computerSelction = getComputerChoice();
        playRound(humanSelection,computerSelction);
        console.log(humanScore);
        console.log(computerScore);

        humanSelection = getHumanChoice();        
        computerSelction = getComputerChoice();
        playRound(humanSelection,computerSelction);

        console.log(humanScore);
        console.log(computerScore);



        //print the result

        //IF human score is geater than computer score then print "you win"
        if(humanScore > computerScore){
            console.log("YOU WIN ! , CONGRATES!")
        }else if(computerScore > humanScore){
            //else if computerscore is greater than human score print "you lose"
            console.log("YOU LOSE! CRY ;(")

        }else{
            //else (in case human score = compuer score) then print "its draw"
            console.log("nobody wins, its draw");
        }

}

playGame();