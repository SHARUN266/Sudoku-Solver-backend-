import { Flex, Spinner, Stack } from "@chakra-ui/react";
import React from "react";

import SingleBox from "../components/Box";

function Board({ loading, question }) {
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
          question?.map((e) => (
            <Flex
              h="40px"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {e?.map((el) => (
                <SingleBox key={el.id} value={el} />
              ))}
            </Flex>
          ))
        )}
      </Stack>
    </>
  );
}

export default Board;
