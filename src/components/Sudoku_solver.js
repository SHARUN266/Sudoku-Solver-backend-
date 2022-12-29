 let solved = [];
let count = 0;
 function Sudoku(mat, row, col) {
  if (row === 9) {
    count++;

    for (var i = 0; i < 9; i++) {
      var str = [];
      for (var j = 0; j < 9; j++) {
        str.push(mat[i][j]);
      }

      solved.push(str);
    }

    return solved;
  }
  var newRow = 0;
  var newCol = 0;
  if (col == 8) {
    newRow = row + 1;
    newCol = 0;
  } else {
    newRow = row;
    newCol = col + 1;
  }
  if (mat[row][col] !== 0) {
    Sudoku(mat, newRow, newCol);
  } else {
    for (var i = 1; i <= 9; i++) {
      if (checkFunction(mat, row, col, i) == true) {
        mat[row][col] = i;
        Sudoku(mat, newRow, newCol);
        mat[row][col] = 0;
      }
    }
  }
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


export {solved,Sudoku}