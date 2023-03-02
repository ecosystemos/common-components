/**
 * yarn add react-responsive-carousel
 * "react-responsive-carousel": "^3.2.20",
 */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ReviewCard} from '../testimonialSlider/ReviewCard';
import styled from "styled-components";


const CaroStyle = styled.div `
.carousel .control-dots .dot
{
    background: #82C6E3;
    box-shadow: 0px 4px 8px rgba(76, 166, 205, 0.2);
    width:16px;
    height:16px;
}

.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover
{
    opacity:1;filter:alpha(opacity=100);
    width:18px;
    height:18px;
}
`;

export const Slider = ({ intervalMS,showArrows, description, fname, title, lname, avatarSrc,...props}) =>{
    return(
        <CaroStyle>
        <Carousel
      showArrows={showArrows}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={intervalMS}//6100
    >
       <ReviewCard   description = {description} fname={fname} lname={lname} title={title} />
       <ReviewCard   description = {description} fname={fname} lname={lname} title={title} />
       <ReviewCard   description = {description} fname={fname} lname={lname} title={title} />
       <ReviewCard   description = {description} fname={fname} lname={lname} title={title} />
     
   </Carousel>
   </CaroStyle>
    )
};
