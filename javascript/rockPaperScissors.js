/** @format */

const getUserChoice = () => {
 const userInput = prompt(`Choose either rock, paper, or scissors:`);
 const choice = userInput ? userInput.toLowerCase().trim() : "";
 if (
  choice === "rock" ||
  choice === "paper" ||
  choice === "scissors" ||
  choice === "bomb"
 ) {
  return choice;
 }
 return null;
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

const determineWinner = (userChoice, computerChoice) => {
 if (!userChoice) {
  return "Invalid choice. Please choose rock, paper, or scissors.";
 }
 if (userChoice === computerChoice) {
  return "This game is a tie!";
 }
 if (userChoice === "rock") {
  return computerChoice === "paper" ? "Computer wins!" : "You win!";
 }
 if (userChoice === "paper") {
  return computerChoice === "scissors" ? "Computer wins!" : "You win!";
 }
 if (userChoice === "scissors") {
  return computerChoice === "rock" ? "Computer wins!" : "You win!";
 }
 return "Error, please try again.";
};

const playGame = () => {
 const userChoice = getUserChoice();
 const computerChoice = getComputerChoice();
 const response = determineWinner(userChoice, computerChoice);
 const resultDiv = document.getElementById("result");
 if (resultDiv) {
   resultDiv.innerHTML = `<p>You threw: ${userChoice || "nothing"}</p><p>Computer threw: ${computerChoice}</p><p>${response}</p>`;
 }
};
