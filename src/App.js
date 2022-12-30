import "./App.css";
import { Box, Flex, Button, Heading, Stack } from "@chakra-ui/react";
import Board from "./Pages/Board";
import { useEffect } from "react";
import { useState } from "react";
import Example from "./components/Board";
import ProblemGenerate from "./components/Sudoku_solver";

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
    Example(puzzle);
    setSolve(puzzle);

    // startCounter();
  }, [flag]);
  async function handleSolve() {
    let a=ProblemGenerate(solve);
     console.log(a)
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
