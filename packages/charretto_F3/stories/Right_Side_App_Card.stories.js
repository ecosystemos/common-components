import React from 'react';
import {RightSideAppCard}from '../src/Right_Side_App_Card';

export default {
     title: "Charretto F3/Right Side App Card",
     component: RightSideAppCard,
    };
const Template = (args) => <RightSideAppCard {...args}/>;

export const RightSideAppCardStory = Template.bind({});
RightSideAppCardStory.args = {
  cardTitle: 'Twitter App',
  productCodeText: 'Product Code',
  productCode: 'T1',
  ownerTitle: 'Owner',
  ownerTitleName: 'Alhasan Mhd Ali',
  pRDStatusTitle: 'PRD Status',
  pRDStatusStage: 'Draft',
  designSystemTitle: 'Design System',
  designSystemVersion: 'SC v.2.0',
  lastUpdateTitle: 'Last Update',
  lastUpdateDate: '7/24/2021, 15:22:33',
  };
  