import "./App.css";
import { Box, Flex, Button, Heading, Stack } from "@chakra-ui/react";
import Board from "./Pages/Board";
import { useEffect } from "react";
import { useState } from "react";
// import Example from "./components/Board";
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

function SolverSudoku(mat, row, col) {
  if (row === 9) {
    // Puzzle is complete, return true
    //console.log(SolverSudoku(mat,0,0))
    console.log(mat);
    return 
    
  }

  var nextRow = 0;
  var nextCol = 0;

  if (col == 8) {
    nextRow = row + 1;
    nextCol = 0;
  } else {
    nextRow = row;
    nextCol = col + 1;
  }

  if (mat[row][col] != 0) {
    SolverSudoku(mat, nextRow, nextCol);
  } else {
    for (var i = 1; i <= 9; i++) {
      if (CheckSafe(mat, row, col, i) === true) {
        mat[row][col] = i;
        SolverSudoku(mat, nextRow, nextCol);
        mat[row][col] = 0;
      }
    }
  }

  // If none of the numbers work, return false
  return false;
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

// function Example(puzzle) {
//   generateSudoku(puzzle, 0, 0);
//   Print(puzzle)

// }

function App() {
  let puzzle = Array(9)
    .fill(null)
    .map(() => Array(9).fill(0));
  const [solve, setSolve] = useState([]);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [flag, setFlag] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateSudoku(puzzle, 0, 0);
    setSolve(puzzle);

    // startCounter();
  }, [flag]);
  async function handleSolve() {
    let a = SolverSudoku(solve, 0, 0);
    console.log(a);

    // setLoading(true);
    // setTimeout(() => {
    //   setSolve(a);

    //   setLoading(false);
    // }, 2000);
  }
  function handleSubmit() {
    //console.log(solve)
    //  console.log(solved)
    // if (solved.length !== solve.length) {
    //   alert("Sudoku is wrong");
    //   return;
    // }
    // let a = solved.every((row, rowIndex) => {
    //   row.every((cell, cellIndex) => {
    //     cell = solve[rowIndex][cellIndex];
    //   });
    // });
    // if (a) {
    //   alert("You solve Sudoku ");
    // } else {
    //   alert("You din't solve sudoku");
    // }
  }
  //   function startCounter() {
  //     let counter = 0;
  //     setInterval(function () {
  //       let minutes = Math.floor(counter / 60);
  //       let seconds = counter % 60;

  //       minutes = minutes < 10 ? "0" + minutes : minutes;
  //       seconds = seconds < 10 ? "0" + seconds : seconds;

  //       setMin(minutes);
  //       setSec(seconds);
  //       counter++;
  //     }, 1000);
  //   }

  return (
    <Box textAlign={"center"} bg={"#f3f3f3"}>
      <Heading p="1rem">Sudoku</Heading>
      <Flex w="40%" m="auto" justifyContent={"space-between"}>
        <Button
          onClick={() => setFlag(!flag)}
          shadow={"lg"}
          colorScheme={"red"}
        >
          Reset
        </Button>
        <Button onClick={handleSubmit} colorScheme={"green"}>
          Submit
        </Button>
        <Button onClick={handleSolve} shadow={"lg"} colorScheme={"blue"}>
          Solve
        </Button>
      </Flex>
      {/* <Heading>
        Your time start now: {min}:{sec}
      </Heading> */}
      <Stack h="100vh">
        <Board setSolve={setSolve} loading={loading} question={solve} />
      </Stack>
    </Box>
  );
}

export default App;
