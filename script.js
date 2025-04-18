// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
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

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// Function to update the "word" element with a random item from the words array
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}

// Function to increment the score by +1
function updateScore() {
  score++;
  scoreEl.innerText = score;  // Update the score displayed
}

// Function to update the time every second
function updateTime() {
  time--;   // Decrease time by 1

  if (time <= 0) {
    clearInterval(timeInterval);  // Stop the timer
    gameOver();                   // Call the gameOver function
  }

  timeEl.innerText = `${time}s`;  // Update the displayed time
}

// Function to handle game over
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Game Over</h1>
    <p>Your final score is: <span>${score}</span></p>
    <button onclick="location.reload()">Restart</button>
  `;
  endgameEl.style.display = 'flex';  // Show the end-game container
}
// Event listener for the "text" input field
text.addEventListener("input", () => {
  const inputText = text.value;

  // Check if the typed text matches the random word
  if (inputText === randomWord) {
    updateScore();     // Call updateScore to increment score
    addWordToDOM();    // Provide user with a new word
    time += 5;         // Increment time by 5 seconds
    timeEl.innerText = `${time}s`; // Update time displayed
    text.value = "";   // Reset input to empty string
  }
});

// Initial call to start the game
addWordToDOM();