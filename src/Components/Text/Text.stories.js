import React from "react";
import { Text, HStack } from "@chakra-ui/react";

export default {
  title: "Text",
  component: Text,
};

export const TextComponent = () => (
  <Text textStyle="Body.b2" color="gray.500">
    All the peices fit together like a puzzle. If one peice is broken, the
    others will not fit together properly. Remember to keep track of everything
    and keep ahead of the game so as not to miss the important bits. Speaking to
    colleagues regarding these issues is a good idea.
  </Text>
);
