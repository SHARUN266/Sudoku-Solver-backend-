import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import Board from "./Pages/Board";
import { useEffect } from "react";
import { useState } from "react";
import QuestionBoard from "./components/Board";

let count = 0;
let solved = [];
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
function App() {
  const [solve, setSolve] = useState([]);
  useEffect(() => {
    setSolve(QuestionBoard());
  }, []);
  async function handleSolve() {
    Sudoku(solve, 0, 0);
    setSolve(solved);
    if (count == 0) {
      alert("Solution not available");
    }
  }
  return (
    <Box textAlign={"center"} bg={"#f3f3f3"}>
      <Heading p="1rem">Sudoku</Heading>
      <Button onClick={handleSolve} shadow={"lg"} colorScheme={"blue"}>
        Solve
      </Button>
      <Stack h="100vh">
        <Board question={solve} />
      </Stack>
    </Box>
  );
}

export default App;
