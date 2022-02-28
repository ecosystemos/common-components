//import React from "react";
import React from "react";
import {NotificationCard} from '../src/NotificationCard';

//import styled from "styled-components";
export default { title: "Notification Card" };

export const notificationCard = () => (
<NotificationCard  title={"Before you begin"} body={'You will find tools & Materials related to this lesson below in the tool bar'}></NotificationCard>
);
notificationCard.story = {
  name: "Notification Card",
};


/*
export default {
  title: "Testimonial Slider/Review Card Slider",
  component: NotificationCard,
 };
const Template = (args) => (
 <NotificationCard {...args}>
   
 </NotificationCard>
);


*/