function SudokuSolver(mat, row, col) {
  if (row === 9) {
    for (var i = 0; i < 9; i++) {
    
      for (var j = 0; j < 9; j++) {
        if(mat[i][j]==0){
          return false
        }
      }

      
    }

    return true;
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
    SudokuSolver(mat, newRow, newCol);
  } else {
    for (var i = 1; i <= 9; i++) {
      if (checkFunction(mat, row, col, i) == true) {
        mat[row][col] = i;
        SudokuSolver(mat, newRow, newCol);
        mat[row][col] = 0;
      }
    }
  }
  return false
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

export default function ProblemGenerate(puzzle) {
  if(SudokuSolver(puzzle, 0, 0))
  {
    console.log(puzzle)
  }else{
    console.log("kya")
  }
}
