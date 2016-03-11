var userChoice = prompt("Do you choose rock, paper or scissors?");
while (userChoice != "rock" && userChoice != "scissors" && userChoice != "paper"){
    userChoice = prompt("Invalid input, please enter rock, paper, or scissors");
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("You chose: " + userChoice);
console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2){
    if (choice1 === choice2){
        console.log("It's a tie!");
        userChoice = prompt("Choose rock, paper, or scissors again!");
        compare(userChoice, computerChoice);
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return("rock wins!");
        }
        else{
            return("paper wins!");
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "scissors"){
            return("scissors wins!");
        }
        else{
            return("paper wins!");
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return("rock wins!");
        }
        else{
            return("scissors wins!");
        }
    }
}
compare(userChoice, computerChoice);


