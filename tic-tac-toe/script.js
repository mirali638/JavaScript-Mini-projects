let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgcnt = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let bg = document.querySelector(".bg");

let turn = "X";

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === "X") {
      box.innerText = " X ";
      turn = "O";
    } else {
      box.innerText = " O ";
      turn = "X";
    }
    box.disabled = true;
    checkWinner();
    changeTurn();
  });
});

const resetGame = () => {
  turn = "X";
  initializeGame();
  enableBoxes();
  msgcnt.classList.add("hide");
  removeWinningBoxAnimation();
  changeTurn();
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  if (winner === "X") {
    msg.innerText = `First player is the winner`;
  } else {
    msg.innerText = `Second player is the winner`;
  }
  msgcnt.classList.remove("hide");
  disabledBoxes();
  bg.classList.add("animate");
};

const initializeGame = () => {
  turn = "X";

  changeTurn();
};

window.addEventListener("load", initializeGame);

const changeTurn = () => {
  const turnBoxes = document.querySelectorAll(".turn-box");
  turnBoxes.forEach((box) => {
    box.classList.remove("current-turn");
    if (box.innerText.trim() === turn) {
      box.classList.add("current-turn");
    }
  });
};

const animateWinningBoxes = (winPattern) => {
  winPattern.forEach((index) => {
    boxes[index].classList.add("winning-box");
  });
};

const removeWinningBoxAnimation = () => {
  boxes.forEach((box) => {
    box.classList.remove("winning-box");
  });
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        animateWinningBoxes(pattern);
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);