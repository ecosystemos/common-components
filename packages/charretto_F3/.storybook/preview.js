import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
//import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withChakra = StoryFn => {
  return (
    /* 
    <ChakraProvider resetCSS theme={theme}>
      */
    <ChakraProvider resetCSS>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
