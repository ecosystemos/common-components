import React from "react";
import { Component } from "./finalComponent";


export default {
  title: "Component/Component",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardTitle: "Are you sure you would like to archive this note?",
  cardContent: "All the peices fit together like a puzzle. If one peice is broken, the others will not fit together properly. Remember to keep track of everything and keep ahead of the game so as not to miss the important bits. Speaking to colleagues regarding these issues is a good idea.",
  successTitle: "Your note has been successfully archived",
};
