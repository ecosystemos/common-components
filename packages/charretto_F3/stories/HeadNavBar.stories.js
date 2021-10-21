import React from 'react';
import { HeadNavBar }from '../src/HeadNavBar';

export default {
     title: "Charretto F3/Head Nav Bar",
     component: HeadNavBar,
    };
const Template = (args) => <HeadNavBar {...args}/>;

export const HeadNavBarStory = Template.bind({});
HeadNavBarStory.args = {
    title: 'Product Management App',
    avatarMenuItemText: 'Link 1',
    avatarMenuItemText2: 'Link 2',
    avatarMenuItemText3: 'Link 3',
  };
  