import "./App.css";
import { Box, Spinner, Flex, Button, Heading, Stack } from "@chakra-ui/react";
import Board from "./Pages/Board";
import { useEffect, useRef } from "react";
import { useState } from "react";
import QuestionBoard from "./components/Board";
import { Sudoku, solved } from "./components/Sudoku_solver";

function App() {
  const [solve, setSolve] = useState([]);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setSolve(QuestionBoard());
    startCounter();
  }, []);
  async function handleSolve() {
    Sudoku(solve, 0, 0);
    setLoading(true);
    setTimeout(() => {
      setSolve(solved);
      setLoading(false);
    }, 2000);
  }
  function handleSubmit() {
    
    Sudoku(solve, 0, 0);
    if (solved.length !== solve.length) {
      alert("Sudoku is wrong");
      return;
    }
    let a = solved.every((row, rowIndex) => {
      row.every((cell, cellIndex) => {
        cell = solve[rowIndex][cellIndex];
      });
    });
    if (a) {
      alert("You solve Sudoku ");
    } else {
      alert("You din't solve sudoku");
    }
  }
  function startCounter() {
    let counter = 0;
     setInterval(function () {
      let minutes = Math.floor(counter / 60);
      let seconds = counter % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setMin(minutes);
      setSec(seconds);
      counter++;
    }, 1000);
  }

  return (
    <Box textAlign={"center"} bg={"#f3f3f3"}>
      <Heading p="1rem">Sudoku</Heading>
      <Flex w="40%" m="auto" justifyContent={"space-between"}>
        <Button
          onClick={() => setSolve(QuestionBoard())}
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
      <Heading>
        Your time start now: {min}:{sec}
      </Heading>
      <Stack h="100vh">
        <Board setSolve={setSolve} loading={loading} question={solve} />
      </Stack>
    </Box>
  );
}

export default App;
