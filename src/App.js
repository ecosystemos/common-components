import React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import  SDPBar from "./components/SDPBarComponent"
import "./assets/Component.css"
function App() {

  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh">
            <SDPBar from="-1.6" to="1.3" />
          </Grid>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
