import ReviewCard from './components/ReviewCard/ReviewCard'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <ReviewCard/>
    </ChakraProvider>
  );
}

export default App;

/* export const getInfo = () => {
  return ["Testing"];
};
 */