// dom selection
const rulesBtn = document.querySelector(".rules-btn");
const closeRulesBtn = document.querySelector(".close-btn");
const rulesModal = document.querySelector(".modal");
const game = document.querySelector(".game");
const choicesBtn = document.querySelectorAll(".game__choice-btn");
const resultContainer = document.querySelector(".results");
const playerResult = document.querySelector(".result__player");
const computerResult = document.querySelector(".result__computer");
const resultText = document.querySelector(".result__text");
const playAgainBtn = document.querySelector("#play__again");
const winnerContainer = document.querySelector(".result__winner");
const score = document.querySelector(".score__result")

const beats = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const choices = ["rock", "paper", "scissors"];

choicesBtn.forEach((button) => {
  button.addEventListener("pointerdown", (e) => {
    const playerChoice = button.dataset.choice;
    const aiChoice = computerChoice();
    game.classList.toggle("hidden");
    resultContainer.classList.toggle("hidden");
    displayResult(playerChoice, aiChoice);
    displayWinner(playerChoice, aiChoice);
  });
});

function displayResult(playerChoice, aiChoice) {
  playerResult.innerHTML = `
    <div class="choice choice--${playerChoice}>
      <img src="images/icon-${playerChoice}.svg"/>
    </div> 
  `;
  computerResult.innerHTML = `
    <div class="choice choice--${aiChoice}>
      <img src="images/icon-${aiChoice}.svg" />
    </div> 
  `;
}

function displayWinner(playerChoice, aiChoice) {
  const playerWins = winner(playerChoice, aiChoice);
  const aiWins = winner(aiChoice, playerChoice);
  let res = "draw";
  let cureentScore = +(score.textContent);
  // score.textContent = "9"
  if (playerWins) {
    res = "you win";
    cureentScore++;
  } else if (aiWins) {
    cureentScore--;
    res = "you lose";
  }
  setTimeout(() => {
    score.textContent = `${cureentScore}`
    winnerContainer.classList.toggle('hidden')
    resultText.textContent = res;
  }, 1000);
}

function winner(first, second) {
  return beats[first] == second;
}

function computerChoice() {
  const randValue = Math.trunc(Math.random() * 3);
  return choices[randValue];
}

function displayResult(playerChoice, aiChoice) {
  playerResult.innerHTML = `
    <div class="choice choice--${playerChoice}">
      <img src="images/icon-${playerChoice}.svg"/>
    </div> 
  `;
  setTimeout(() => {
    computerResult.innerHTML = `
    <div class="choice choice--${aiChoice}">
      <img src="images/icon-${aiChoice}.svg" />
    </div> 
  `;
  }, 1000);
}

playAgainBtn.addEventListener('pointerdown', () => {
  resultContainer.classList.toggle("hidden")
  game.classList.toggle("hidden")
  playerResult.innerHTML = ""
  computerResult.innerHTML = ""
  winnerContainer.classList.toggle("hidden")  
})



// event listeners for rules button
rulesBtn.addEventListener("pointerdown", () => {
  rulesModal.classList.toggle("show-modal");
});

closeRulesBtn.addEventListener("pointerdown", () => {
  rulesModal.classList.toggle("show-modal");
});
