import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { SDPBar } from "components/SDPBarComponent";

export default {
  title: "Startup/SDP",
  component: SDPBar,
};

const Template = (args) => (
  <ChakraProvider>
    <SDPBar {...args} />
  </ChakraProvider>
);

export const SdpComponent = Template.bind({});
SdpComponent.args = {
  from: -1.4,
  to: 1.6,
};
