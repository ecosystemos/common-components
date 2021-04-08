import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { SDPBar } from "./components/SDPBarComponent";

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh">
            <SDPBar from={-1.3} to={2} />
          </Grid>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
