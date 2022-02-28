// export const getInfo = () => {
//   return ["Testing"];
// };

import {
  Flex,
  Text,
  Icon
} from '@chakra-ui/react';
import styled from "styled-components";
//import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const HeaderOfTheCard = styled.div`
position: static;
width: 269px;
height: 48px;
left: 0px;
top: 0px;
justify-content: space-between;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 15px;
color: #3D4D51;


display: flex;
order: 0;
flex-grow: 0;
margin: 24px 0px;
  
`;
const BodyOfTheCard = styled.div`

position: static;
width: 272px;
height: 72px;
left: 0px;
top: 72px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 24px;
letter-spacing: 0.02em;
color: #5A6D72;
display: flex;

order: 1;
margin: 24px 0px;
`;
const CardStyle = styled.div`
display: flex;
flex-direction: column;
padding: 40px;


position: absolute;
width: 386px;
height: 224px;
left: 64px;
top: 250px;

/* Gray / gray-1 (White) */

background: #FFFFFF;
box-shadow: 0px 20px 40px -2px rgba(174, 179, 203, 0.25);
border-radius: 4px;
`;
const IconSt = styled.div`
font-weight: 300;
font-size: 22px;
color: #938b8b;
`;


export const NotificationCard = ({ title, body, icon, ...props }) => {
  return (
    <CardStyle>
        <HeaderOfTheCard>
          <Text>{title}</Text>
          <IconSt>
          <Text>x</Text>{/** <Icon as={CloseIcon}></Icon>*/} 
          </IconSt>
        </HeaderOfTheCard>
        <BodyOfTheCard>
            <Text>{body}</Text>
        </BodyOfTheCard>
    </CardStyle>
  )
}

NotificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};