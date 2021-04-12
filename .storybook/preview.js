import { ChakraProvider}  from "@chakra-ui/react";
import customTheme from '../src/Theme/theme'
import { Box } from "@chakra-ui/react";
import React from 'react';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={customTheme}>
     
        <Story />
     
    </ChakraProvider>
  ),
];
