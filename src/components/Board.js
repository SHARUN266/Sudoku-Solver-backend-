function generateSudoku(mat, row, col) {
  if (row === 9) {
    // Puzzle is complete, return true
    //console.log(SolverSudoku(mat,0,0))
    return true;
  }

  // Calculate indices of the next cell
  let newRow = 0;
  let newCol = 0;
  if (col == 8) {
    newRow = row + 1;
    newCol = 0;
  } else {
    newRow = row;
    newCol = col + 1;
  }

  // If the current cell is already filled, move to the next cell
  if (mat[row][col] !== 0) {
    return generateSudoku(mat, newRow, newCol);
  }

  // Try every number from 1 to 9
  for (let i = 1; i <= 9; i++) {
    // Check if the number is valid
    if (CheckSafe(mat, row, col, i)) {
      // Place the number and recurse
      mat[row][col] = i;
      if (generateSudoku(mat, newRow, newCol)) {
        return true;
      }
      // Backtrack
      mat[row][col] = 0;
    }
  }

  const GoRandomally = Math.floor(Math.random() * 15);
  for (var i = 0; i < GoRandomally; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    mat[row][col] = 0;
  }
  // If none of the numbers work, return false
  return false;
}

let count = 0;

function SolverSudoku(board, row, col) {
  if (row == 9) {
    //Print(board);
    count++;
    ///console.log(board)
    return true;
  }
  let newRow = 0;
  let newCol = 0;
  if (col == 8) {
    newRow = row + 1;
    newCol = 0;
  } else {
    newRow = row;
    newCol = col + 1;
  }

  if (board[row][col] != 0) {
    SolverSudoku(board, newRow, newCol);
  } else {
    for (var i = 1; i <= 9; i++) {
      if (CheckSafe(board, row, col, i) == true) {
        board[row][col] = i;
        SolverSudoku(board, newRow, newCol);
        board[row][col] = 0;
      }
    }
  }
}

function CheckSafe(board, row, col, value) {
  for (var i = 0; i < 9; i++) {
    if (board[i][col] == value) {
      return false;
    }
  }
  for (var i = 0; i < 9; i++) {
    if (board[row][i] == value) {
      return false;
    }
  }

  // Check value in grid our value exist or not
  var x = Math.floor(row / 3) * 3;
  var y = Math.floor(col / 3) * 3;

  for (var l = 0; l < 3; l++) {
    for (var m = 0; m < 3; m++) {
      if (board[l + x][m + y] == value) {
        return false;
      }
    }
  }
  return true;
}
// Print out board
function Print(board) {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(" "));
  }
}

export default function Example(puzzle) {
  generateSudoku(puzzle, 0, 0);
  
  Print(puzzle)
}
