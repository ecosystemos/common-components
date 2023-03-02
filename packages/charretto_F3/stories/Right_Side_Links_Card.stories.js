import React from 'react';
import {RightSideLinksCard}from '../src/Right_Side_Links_Card';
import {RightSideLink}from '../src/Right_Side_Link_Item';

export default {
     title: "Charretto F3/Right Side Links Card",
     component: RightSideLinksCard,
     subComponent: {RightSideLink}
    };
const Template = (args) => <RightSideLinksCard {...args}/>;

export const RightSideLinksCardStory = Template.bind({});
RightSideLinksCardStory.args = {
    title: 'Document Outlines',
    titles: '["Vision","Personas","Description","Purpose","Key Features","User Problem","User Value","Assumptions & Decisions"]',
  };
  