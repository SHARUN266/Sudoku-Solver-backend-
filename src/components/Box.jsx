import React from "react";
import { Box, Flex, Input, Stack } from "@chakra-ui/react";
export default function SingleBox({ value }) {
  return (
    <Input
      value={value}
      display={"flex"}
      
      borderRadius={"sm"}
      shadow={"lg"}
      h="20px"
      p="15px"
      alignItems={"center"}
      border={"1px solid lightGray"}
      textAlign={"center"}
    />
  );
}
