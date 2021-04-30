import React from "react";
import { SDPBar } from "../src/components/SDPBarComponent";

export default {
  title: "Startup/SDP",
  component: SDPBar,
};

const Template = (args) => (
    <SDPBar {...args} />
);

export const SdpComponent = Template.bind({});
SdpComponent.args = {
  from: -1.4,
  to: 1.6,
};
