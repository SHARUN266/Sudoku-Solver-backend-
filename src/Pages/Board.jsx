import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import QuestionBoard from "../components/Board";
import SingleBox from "../components/Box";


function Board({question}) {
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
        gap={"20%"}
      >
        {question?.map((e) => (
          <Flex h="40px" alignItems={"center"} justifyContent={"space-between"}>
            {e?.map((el) => (
              <SingleBox key={el.id} value={el} />
            ))}
          </Flex>
        ))}
      </Stack>
    </>
  );
}

export default Board;
