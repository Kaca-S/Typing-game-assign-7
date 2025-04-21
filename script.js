
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

let randomWord;
let score = 0;
let time = 10;

function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}
function updateScore() {
  score++;
  scoreEl.innerText = score; 
}
function updateTime() {
  time--; 

  if (time <= 0) {
    clearInterval(timeInterval); 
    gameOver();                   
  }
  timeEl.innerText = `${time}s`;  
}
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Game Over</h1>
    <p>Your final score is: <span>${score}</span></p>
    <button onclick="location.reload()">Restart</button>`;
  endgameEl.style.display = 'flex';
}
text.addEventListener("input", () => {
  const inputText = text.value;

  if (inputText === randomWord) {
    updateScore();
    addWordToDOM(); 
    time += 5;        
    timeEl.innerText = `${time}s`; 
    text.value = "";   
  }
});

addWordToDOM();

// to start the game
function startGame() {
  score = 0;
  time = 10;   
  addWordToDOM();
  timeEl.innerText = `${time}s`;
  endgameEl.style.display = 'none';

  // timer
  timeInterval = setInterval(updateTime, 1000);
}

startGame();