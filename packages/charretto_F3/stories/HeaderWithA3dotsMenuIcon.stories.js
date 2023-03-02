import React from 'react';
import {HeaderWithA3dotsMenuIcon}from '../src/HeaderWithA3dotsMenuIcon';

export default {
     title: "Charretto F3/Header With A 3 dots Menu Icon",
     component: HeaderWithA3dotsMenuIcon,
    };
const Template = (args) => <HeaderWithA3dotsMenuIcon {...args}/>;

export const HeaderWithA3dotsMenuIconStory = Template.bind({});
HeaderWithA3dotsMenuIconStory.args = {
    title: 'Product Requirements Document',
    icon: 'simple-line-icons:options-vertical',
  };
  