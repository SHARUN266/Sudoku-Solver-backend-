import { Flex, Spinner, Stack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import SingleBox from "../components/Box";

function Board({ setSolve, loading, question }) {
  function handleChange(e, row, col) {
    const newBoard = [...question];
    newBoard[row][col] = parseInt(e.target.value, 10);
    setSolve(newBoard);
  }

  return (
    <>
      <Stack
        h={["80vh", "70vh", "60vh"]}
        p="1rem"
        w={["95%", "70%", "40%"]}
        m="auto"
        bg="#fff"
        shadow={"lg"}
        borderRadius={"lg"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20%"}
      >
        {loading ? (
          <>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <p>Please wait...</p>
            <p>We are solving your Sudoku</p>
          </>
        ) : (
          question?.map((e, r) => (
            <Flex
              h="40px"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {e?.map((el, c) => (
                <Input
                  value={el}
                  display={"flex"}
                  type={"number"}
                  min="1"
                  max={"9"}
                  onChange={(e) => handleChange(e, r, c)}
                  borderRadius={"sm"}
                  shadow={"lg"}
                  h="20px"
                  p="15px"
                  alignItems={"center"}
                  border={"1px solid lightGray"}
                  textAlign={"center"}
                />
              ))}
            </Flex>
          ))
        )}
      </Stack>
    </>
  );
}

export default Board;
