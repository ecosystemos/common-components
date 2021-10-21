import React from 'react';
import {RightSideLinkItem}from '../src/Right_Side_Link_Item';

export default {
     title: "Charretto F3/Right Side Links Card",
     component: RightSideLinkItem,
    };
const Template = (args) => <RightSideLinkItem {...args}/>;

export const RightSideLinkItemStory = Template.bind({});
RightSideLinkItemStory.args = {
    title: 'Vision',
    url: '#',
  };
  