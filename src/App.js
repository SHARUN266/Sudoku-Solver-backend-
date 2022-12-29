import "./App.css";
import { Box, Spinner, Button, Heading, Stack } from "@chakra-ui/react";
import Board from "./Pages/Board";
import { useEffect } from "react";
import { useState } from "react";
import QuestionBoard from "./components/Board";
import { Sudoku, solved } from "./components/Sudoku_solver";

function App() {
  const [solve, setSolve] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setSolve(QuestionBoard());
  }, []);
  async function handleSolve() {
    Sudoku(solve, 0, 0);
    setLoading(true);
    setTimeout(() => {
      setSolve(solved);
      setLoading(false);
    }, 2000);
  }

  return (
    <Box textAlign={"center"} bg={"#f3f3f3"}>
      <Heading p="1rem">Sudoku</Heading>
      <Button onClick={handleSolve} shadow={"lg"} colorScheme={"blue"}>
        Solve
      </Button>
      <Stack h="100vh">
        <Board loading={loading} question={solve} />
      </Stack>
    </Box>
  );
}

export default App;
