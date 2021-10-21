import React from 'react';
import {PRDAppGridsStructure}from '../src/PRDAppGridsStructure';

export default {
     title: "Charretto F3/Grid System Complete Page view ",
     component: PRDAppGridsStructure,
    };
const Template = (args) => <PRDAppGridsStructure {...args}/>;

export const PRDAppGridsStructureStory = Template.bind({});
PRDAppGridsStructureStory.args = {
    text: 'Not used param',
  };
  