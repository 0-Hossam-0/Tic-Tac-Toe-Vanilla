let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function play(cell) {
  let cellElement = document.getElementById(cell);

  if (board[cell - 1] === "") {
    board[cell - 1] = currentPlayer;
    cellElement.innerText = currentPlayer;

    if (checkWinner()) {
      setTimeout(() => {
        alert(currentPlayer + " Wins!");
        resetGame();
      }, 100);
      return;
    }

    if (!board.includes("")) {
      setTimeout(() => {
        alert("It's a Draw!");
        resetGame();
      }, 100);
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winPatterns = [];

  return winPatterns.some((pattern) => {
    return (
      board[pattern[0]] === currentPlayer &&
      board[pattern[1]] === currentPlayer &&
      board[pattern[2]] === currentPlayer
    );
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  document.querySelectorAll("td").forEach((cell) => (cell.innerText = ""));
}
