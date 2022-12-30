function generateSudoku(mat, row, col) {
  if (row === 9) {
    // Puzzle is complete, return true
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
    if (checkFunction(mat, row, col, i)) {
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
function checkFunction(mat, row, col, value) {
  for (var i = 0; i < 9; i++) {
    if (mat[row][i] === value) {
      return false;
    }
  }
  for (var i = 0; i < 9; i++) {
    if (mat[i][col] == value) {
      return false;
    }
  }
  let x = Math.floor(row / 3) * 3;
  let y = Math.floor(col / 3) * 3;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (mat[i + x][j + y] == value) {
        return false;
      }
    }
  }
  return true;
}

export default function Example(puzzle) {
  generateSudoku(puzzle, 0, 0);
}
