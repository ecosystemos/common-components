import React from "react";
import { Card } from "./Card";


export default {
  title: "Component/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "label",
  content: "label",
  primaryFunction: undefined,
  secondaryFunction: undefined,
};
