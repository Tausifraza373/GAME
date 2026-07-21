document.getElementById("vs-computer").addEventListener("click", () => {
  document.getElementById("mode-select").classList.add("hidden");
  document.getElementById("game-play").classList.remove("hidden");
});

const choices = document.querySelectorAll(".choice");
const userHand = document.querySelector(".user-hand");
const computerHand = document.querySelector(".computer-hand");
const resultText = document.getElementById("result-text");
const playAgain = document.getElementById("play-again");

const moves = ["rock", "paper", "scissors"];
const emojis = {
  rock: "✊",
  paper: "🖐",
  scissors: "✌"
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];

    userHand.textContent = emojis[userChoice];
    computerHand.textContent = emojis[computerChoice];

    const result = checkWinner(userChoice, computerChoice);
    resultText.textContent = result;
  });
});

playAgain.addEventListener("click", () => {
  userHand.textContent = "❔";
  computerHand.textContent = "❔";
  resultText.textContent = "";
});

function checkWinner(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}
