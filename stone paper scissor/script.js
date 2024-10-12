let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSco = document.querySelector("#user-score");
const compSco = document.querySelector("#computer-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  console.log("user choise = ", userChoice);
  const compChoice = genCompChoice();
  console.log("computer choise = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = compChoice === "paper" ? false : true;
    } else if ((userChoice = "paper")) {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const genCompChoice = () => {
  const option = ["stone", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return option[randIndex];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "game was draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userSco.innerText = userScore;
    msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = " green";
  } else {
    compScore++;
    compSco.innerText = compScore;
    msg.innerText = `You lose ! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

