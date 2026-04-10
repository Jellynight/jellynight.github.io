
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
 constructor(field) {
  this._field = field;
  this._pathX = 0;
  this._pathY = 0;
  this.gameOver = false;
 }

 print() {
  const fieldDiv = document.getElementById('field-display');
  if (fieldDiv) {
   fieldDiv.innerHTML = '<pre>' + this._field.map(row => row.join('')).join('\n') + '</pre>';
  }
 }

 static generateField(height, width, holePercent) {
  const field = new Array(height)
   .fill(0)
   .map(() => new Array(width).fill(fieldCharacter));
  // Place the hat
  const lowerHat = Math.floor((85 / 100) * height);
  const hatPosition = {
   x: Math.floor(Math.random() * width),
   y: lowerHat,
  };
  field[hatPosition.y][hatPosition.x] = hat;
  // Place holes
  const totalHoles = Math.floor(height * width * holePercent);
  for (let i = 0; i < totalHoles; i++) {
   let holePosition;
   do {
    holePosition = {
     x: Math.floor(Math.random() * width),
     y: Math.floor(Math.random() * height),
    };
   } while (field[holePosition.y][holePosition.x] !== fieldCharacter);
   field[holePosition.y][holePosition.x] = hole;
  }
  // Ensure the starting point is clear
  field[0][0] = pathCharacter;
  return field;
 }

 playerPath(direction) {
  if (this.gameOver) return;

  switch (direction) {
   case 'u':
    this._pathY -= 1;
    break;
   case 'd':
    this._pathY += 1;
    break;
   case 'l':
    this._pathX -= 1;
    break;
   case 'r':
    this._pathX += 1;
    break;
   default:
    return;
  }

  if (
   this._pathX < 0 ||
   this._pathY < 0 ||
   this._pathX >= this._field[0].length ||
   this._pathY >= this._field.length
  ) {
   this.endGame("You moved outside the field. Game over!");
   return;
  }

  const currentCell = this._field[this._pathY][this._pathX];
  if (currentCell === hole) {
   this.endGame("You fell in a hole. Game over!");
   return;
  } else if (currentCell === hat) {
   this.endGame("You found your hat. You win!");
   return;
  } else {
   this._field[this._pathY][this._pathX] = pathCharacter;
  }
  this.print();
 }

 endGame(message) {
  this.gameOver = true;
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
   resultDiv.innerHTML = `<p>${message}</p>`;
  }
  document.removeEventListener('keydown', this.keyHandler);
 }
}

let playerField;
let keyHandler;

function startGame() {
 const height = parseInt(prompt("Enter the height of the field (10-25):"));
 const width = parseInt(prompt("Enter the width of the field (50-200):"));
 const holePercent = parseFloat(prompt("Enter the percentage of holes (0-1, e.g., 0.2):"));

 if (isNaN(height) || height < 10 || height > 25 ||
     isNaN(width) || width < 50 || width > 200 ||
     isNaN(holePercent) || holePercent < 0 || holePercent > 1) {
  alert("Invalid inputs. Please refresh and try again.");
  return;
 }

 const generatedField = Field.generateField(height, width, holePercent);
 playerField = new Field(generatedField);
 playerField.print();

 keyHandler = (event) => {
  const key = event.key.toLowerCase();
  let direction = '';
  if (key === 'arrowup' || key === 'w') direction = 'u';
  else if (key === 'arrowdown' || key === 's') direction = 'd';
  else if (key === 'arrowleft' || key === 'a') direction = 'l';
  else if (key === 'arrowright' || key === 'd') direction = 'r';
  if (direction) {
   playerField.playerPath(direction);
  }
 };

 document.addEventListener('keydown', keyHandler);
}

startGame();