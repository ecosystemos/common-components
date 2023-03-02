import React from 'react';
import { LeftSideBarNavHoverBox }from '../src/LeftSideBarNavHoverBox';

export default {
     title: "Charretto F3/Left Side bar",
     component: LeftSideBarNavHoverBox,
    };
const Template = (args) => <LeftSideBarNavHoverBox {...args}/>;

export const LeftSideBarNavHoverBoxStory = Template.bind({});
LeftSideBarNavHoverBoxStory.args = {
    titleLeftSideBarNavHoverBox: 'Product Management App',
    iconLeftSideBarNavHoverBox: 'bx:bxs-square-rounded',
    descriptionLeftSideBarNavHoverBox: 'Product Management App helps you organize your product by product centric managment!',
  };
  