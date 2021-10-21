import React from 'react';
import {SubComponentItemInsideExpandableCard} from '../src/SubComponent_ItemInsideExpandableCard';

export default {
     title: "Charretto F3/Title Description Item List Expandable Card",
     component: SubComponentItemInsideExpandableCard,
    };
const Template = (args) => <SubComponentItemInsideExpandableCard {...args}/>;

export const SubComponentItemInsideExpandableCardStory = Template.bind({});
SubComponentItemInsideExpandableCardStory.args = {
    title: 'Product Owner',
    icon: 'bx:bxs-square-rounded',
    textIcon: '',
  };
  