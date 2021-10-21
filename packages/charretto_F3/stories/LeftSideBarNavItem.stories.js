import React from 'react';
import { LeftSideBarNavItem }from '../src/LeftSideBarNavItem';

export default {
     title: "Charretto F3/Left Side bar",
     component: LeftSideBarNavItem,
    };
const Template = (args) => <LeftSideBarNavItem {...args}/>;

export const LeftSideBarNavItemStory = Template.bind({});
LeftSideBarNavItemStory.args = {
  titleLeftSideBarNavItem: 'Features',
  iconLeftSideBarNavItem: 'mdi:star-box-outline',
  //linkLeftSideBarNavItem: 'Link 2',
  activeLeftSideBarNavItem: true,
  //navSizeLeftSideBarNavItem: 'Link 3',
  //descriptionLeftSideBarNavItem: 'Link 3',
  };
  