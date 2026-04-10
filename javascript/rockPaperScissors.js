/** @format */

//single parameter has no need for parenthasis
const getUserChoice = (userInput) => {
 if (
  userInput === "rock" ||
  userInput === "paper" ||
  userInput === "scissors" ||
  userInput === "bomb"
 ) {
  return userInput;
 } else {
  return `Idiot!. Type Rock, Paper or Scissors`;
 }
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 switch (randomNumber) {
  case 0:
   return "rock";
  case 1:
   return "paper";
  case 2:
   return "scissors";
 }
};

//function name      parameters multible     functions symbol=>
let determineWinner = (userChoice, computerChoice) => {
 //function
 if (userChoice === computerChoice) {
  //         string
  return "This game is a tie!";
 }
 if (userChoice === "rock") {
  if (computerChoice === "paper") {
   return "Computer Wins! looser ha ha.";
  } else {
   return "You Win!! Fuck yer boy.";
  }
 }
 if (userChoice === "paper") {
  if (computerChoice === "rock") {
   return "You Win!! Fuck yer boy.";
  } else {
   return "Computer Wins! looser ha ha.";
  }
 }
 if (userChoice === "scissors") {
  if (computerChoice === "paper") {
   return "You Win!! Fuck yer boy.";
  } else {
   return "Computer Wins! looser ha ha.";
  }
 }
 if (userChoice === "bomb") {
  return "You Blew me up you basted!!....And you win!";
 } else {
  return "error! try again";
 }
};

let playGame = (userInput) => {
 const userChoice = getUserChoice(userInput.toString().trim());
 const computerChoice = getComputerChoice();
 console.log("You Threw: " + userChoice);
 console.log("The computer Threw: " + computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
 console.log("");
 console.log("choose either rock, paper or scissors");
};

console.log("choose either rock, paper or scissors");

process.stdin.on("data", playGame);