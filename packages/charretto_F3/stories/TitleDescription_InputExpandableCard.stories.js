import React from 'react';
import {TitleDescriptionInputExpandableCard}from '../src/TitleDescription_InputExpandableCard';

export default {
     title: "Charretto F3/Title Description Input Expandable Card",
     component: TitleDescriptionInputExpandableCard,
    };
const Template = (args) => <TitleDescriptionInputExpandableCard {...args}/>;

export const TitleDescriptionInputExpandableCardStory = Template.bind({});
TitleDescriptionInputExpandableCardStory.args = {
    title: 'Vision',
    descripton: 'Where do we want out product to be in the future',
    placeholder: 'Click here to start editing...',
    content: '',
  };
  