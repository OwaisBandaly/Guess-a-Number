let RandomNumber = parseInt(Math.random() * 100 + 1)

let userinput = document.querySelector("#UserInput");
const Submitbtn = document.querySelector("#submitbtn");
const prevGuess = document.querySelector("#PrevGuess");
const GuessRemain = document.querySelector("#GuessRemain");
const HighLow = document.querySelector("#HighLow");
const GameStatus = document.querySelector("#GameStatus");
let newButton = document.querySelector("#StartnewGame");
// let restartBtn = document.querySelector('#restartBtn')
let div = document.querySelector("#div");

let message = document.querySelector("#message");

let prevGuesses = [];
let numGuess = 1;
let gameswon = 0;
let compscore = 0;

let PlayGame = true;

if (PlayGame) {
  Submitbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    message.textContent = "Enter a valid number!";
  } else if (guess > 100 || guess < 1) {
    message.textContent = "Enter value between 1 - 100";
  } else {
    prevGuesses.push(guess);
    message.textContent = "";
  }
  if (numGuess > 5) {
    HighLow.textContent = `GAME OVER! Random number was ${RandomNumber}`;
    compscore++
    document.getElementById("compscore").textContent = compscore;
    div.classList.add("h-[23rem]");
    endgame();
  } else checkGuess(guess);
}

function checkGuess(guess) {
  if (guess === RandomNumber) {
    HighLow.innerHTML = `WOHOO! You Guessed it right <br> You took total ${prevGuesses.length} attempt.`;
    gameswon++;
    document.getElementById("gameswon").textContent = gameswon;
    div.classList.add("h-[25rem]");
    endgame();
  }
  if (guess > RandomNumber) {
    HighLow.textContent = "Oops, Try Lower Number";
  } else if (guess < RandomNumber) {
    HighLow.textContent = "Oops, Try Higher Number";
  }
  DisplayGuess(guess);
}

function DisplayGuess(guess) {
  userinput.value = "";
  if (!isNaN(guess) && guess < 100 && guess > 0) {
    prevGuess.textContent += `${guess}, `;
    numGuess++;
    GuessRemain.textContent = `${6 - numGuess}`;
  } else {
    HighLow.textContent = "";
  }
}

function endgame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  userinput.classList.add("cursor-not-allowed", "opacity-40");
  GameStatus.classList.add("opacity-40");
  Submitbtn.setAttribute("disabled", "");
  newButton.style.display = "block";
  Submitbtn.classList.add("cursor-not-allowed", "opacity-40");
  PlayGame = false;
  NewGame();
}

function restartgame() {
  restartBtn.addEventListener("click", () => {
    console.log("hello");
    userinput.value = "";
    PlayGame = false;
    NewGame();
  });
}

function NewGame() {
  newButton.addEventListener("click", function () {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuess = 1;
    prevGuess.textContent = "";
    HighLow.textContent = "";
    message.textContent = "";
    GuessRemain.textContent = `${6 - numGuess}`;
    userinput.removeAttribute("disabled");
    userinput.classList.remove("cursor-not-allowed", "opacity-40");
    Submitbtn.removeAttribute("disabled");
    Submitbtn.classList.remove("cursor-not-allowed", "opacity-40");
    div.classList.remove("h-[25rem]");
    div.classList.remove("h-[23rem]");
    GameStatus.classList.remove("opacity-40");
    newButton.style.display = "none";
    PlayGame = true;
  });
}
