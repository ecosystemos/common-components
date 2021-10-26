import React from "react";
import { Success } from "./Success";


export default {
  title: "Component/Success",
  component: Success,
};

const Template = (args) => <Success {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "label",
};
