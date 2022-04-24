/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const width = 7;
const height = 6;
let counter = 1

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for(let i=0; i < height; i++){
    board.push(Array.from(width))
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  let htmlBoard = document.getElementById('board')

  // TODO: add comment for this code
  let top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);
  // creating the top row of boxes where you will click the column you'd like to drop a coin

  for (let x = 0; x < width; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);
  // creating each individual box with an id to use as a position in the top row, from 0 - WIDTH, then appending it to the column-top tr

  // TODO: add comment for this code
  for (let y = 0; y < height; y++) {
    const row = document.createElement("tr");
    // creating each tr or "row" of the board, except the top
    for (let x = 0; x < width; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
    // creating every cell in all rows besides the top
      row.append(cell);
    // adding the cells to each row
    }
    htmlBoard.append(row);
    // adding the rows to create the board
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for (let y=height-1;y> -1;y--) {
    if (!board[y][x]) {
      return y;
    }
  }
  return null;
}


/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  let piece = document.createElement('div')
  piece.classList.add('piece')
  currPlayer === 1 ? piece.classList.add('p1') : piece.classList.add('p2')
  let piecePlace = document.getElementById(`${y}-${x}`)
  piecePlace.append(piece)
}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  counter % 2 === 0 ? currPlayer = 2 : currPlayer = 1
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }
  // switch currPlayer
  board[y][x] = currPlayer
  if(board[y][x]){
    counter++;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if(board[0].length === 7){
    return endGame('Tie game!')
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < height &&
        x >= 0 &&
        x < width &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      // an array of tiles, if this exists anywhere on the board it will activate the _win function and possibly end the game
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      // same as horiz, except checks vertically instead of on the x axis
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      // same idea, but adding 1 to y and x to represent a diagnol direction going up and to the right
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      // another diagnol, this one is up and to the left instead

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
        // if any of these arrays exist on the board, check for a win
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
