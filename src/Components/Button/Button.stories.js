import React from "react";
import { Button, HStack } from "@chakra-ui/react";
export default {
  title: "Button",
  component: Button,
};

export const Variants = () => {
  return (
    <HStack spacing="24px">
      <Button
        bg="gray.500"
        color="gray.50"
        mr="24px"
        w="76px"
        h="32px"
        fontStyle="italic"
      >
        Cancel
      </Button>
      <Button
        bg="gray.600"
        color="gray.50"
        w="105px"
        h="32px"
        fontStyle="italic"
      >
        Delete Note
      </Button>
    </HStack>
  );
};
