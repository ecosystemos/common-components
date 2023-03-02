import {
  Flex,
  Heading,
  Divider,
} from '@chakra-ui/react';
import styled from "styled-components";
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

const FlexParent = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 3.5% 1% 0 0;
  overflow-x:auto;
  align-items:center;
`;
const FlexInnerParent = styled.div`
flex-dir:column;
`;
const HeadingStyles = styled.div`
font-weight:normal;
          font-family:Lucida Sans;
          font-weight:600;
          line-height:36px;
          letter-spacing:tight;
          font-size:24px;
          color:#276749;
`;
const FlexIcon = styled.div`
    color:#276749;
    font-size:24px;
`;

export const HeaderWithA3dotsMenuIcon = ({ title, icon, ...props }) => {
  return (
    <FlexParent>
      <FlexInnerParent>
        <HeadingStyles><Heading>{title}</Heading></HeadingStyles>
        <Divider opacity="1" borderColor="#276749" border="1px solid #276749" orientation="horizontal" />
      </FlexInnerParent>
      <FlexIcon>
        <Icon icon={icon} />
      </FlexIcon>
    </FlexParent>
  )
}

HeaderWithA3dotsMenuIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};