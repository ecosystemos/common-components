import { Button } from "@chakra-ui/react";

export default { title: "Chakra test" };

export const test2 = () => (
  <Button colorScheme="blue">I just consumed some ⚡️Chakra!</Button>
);
test2.story = {
  name: "Chakra test",
};
