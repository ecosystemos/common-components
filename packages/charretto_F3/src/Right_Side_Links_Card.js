
import React, { useState } from 'react'
import {
  Flex,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';
import {RightSideLinkItem} from './Right_Side_Link_Item';
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexParent = styled.div`
  flex-dir:column;
  margin:8%;
  padding: 3% 0 15px 2%;
  box-shadow:0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
const TextTitle = styled.text`
font-size:16px;
text-color:#2D3748;
`;
export const RightSideLinksCard = ({title,titles,...props}) => {
  return (
    <FlexParent>
      <TextTitle>{title} </TextTitle>
      <Divider width="98%" border="1px solid #4A5568" borderColor="4A5568" orientation="horizontal" />
      {linksArray(titles)}
    </FlexParent>

  )
}

RightSideLinksCard.propTypes = {
  title: PropTypes.string.isRequired,
  titles:PropTypes.array.isRequired,
};

function linksArray(titles) {
  var titlesAarray = JSON.parse(titles)
  let linkTitles = [];
  for(let i =0; i<titlesAarray.length;i++){
    linkTitles.push(
    <RightSideLinkItem 
    title={titlesAarray[i]} 
    />
    );
    
  }
  return linkTitles;
};
