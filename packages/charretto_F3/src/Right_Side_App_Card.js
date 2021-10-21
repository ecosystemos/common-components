/**
 * TODO: Need converting to styled-components
 */
import logo from './assets/images/logo.svg';
import twitter from './assets/images/twitter.png';
import githubLogo from './assets/images/github-logo.png';
import google_drive_logo from './assets/images/google_drive_logo.png';

import www from './assets/images/www.png';
import figma from './assets/images/figma.png';
import slack from './assets/images/slack.png';
import api from './assets/images/api.png';
import graphcms from './assets/images/graphcms.png';
import whimsical from './assets/images/whimsical.png';
import React, { useState } from 'react'
import {
    Flex,
    Image,
    Text,
    Divider,
  } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexParent = styled.div`
display: flex;
flex-dir:column;
margin:8%;
padding:1%;
padding-bottom:15px;
box-shadow:0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
const FlexIconEdit = styled.div`
padding:5px;
        justify-content:flex-end;
        font-family:Inter;
        font-style:normal;
        font-weight:900;
        font-size:14px;
        line-height:16px;
        display:flex;
        align-items:center;
        text-align:justify;
        letter-spacing:0.02em;
        color:#d9e2ef;
`;
const FlexImages = styled.div`
flex-dir:column;
align-items:center;
`;


export const RightSideAppCard = ({cardTitle,productCodeText,productCode,ownerTitle,ownerTitleName,
  pRDStatusTitle,pRDStatusStage,designSystemTitle,designSystemVersion,
  lastUpdateTitle,lastUpdateDate,...props}) => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
        flexDir="column"
        m="8%"
        p="1%"
        pb="15px"
        boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
      >
        <Flex
        p="5px"
        justifyContent="flex-end"

        fontFamily="Inter"
                    fontStyle="normal"
                    fontWeight="900"
                    fontSize="14px"
                    lineHeight="16px"
                    display="flex"
                    alignItems="center"
                    textAlign="justify"
                    letterSpacing="0.02em"
                    color="gray.300"
        >
        <Icon icon="bx:bxs-edit-alt" />

          {/**icon edit here */}
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
        >
          <Image mt="40px" w="80px" h="80px" src={twitter} />
          <Text mb="5px" mt="10px" fontSize="16px" textColor="green.700">{cardTitle}</Text>
          <Divider width="97%" border="1px solid" bgColor="#276749" borderColor="#276749" orientation="horizontal" />
          <Flex>
            <Flex>
              <Image src={www} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={google_drive_logo} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={slack} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={figma} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={githubLogo} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={graphcms} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={whimsical} w="16px" h="16px" m="5px" />
            </Flex>
            <Flex>
              <Image src={api} w="16px" h="16px" m="5px" />
            </Flex>
          </Flex>
        </Flex>
        <Divider width="99%" textColor="green.700" orientation="horizontal" />
        <Flex
          fontSize="12px"
          p="2px"
          justifyContent="space-between"
        >
          <Text textColor="green.700">{productCodeText}</Text>
          <Divider textColor="#CBD5E0" height="16px" orientation="vertical" />
          <Text textColor="gray.700">{productCode}</Text>
        </Flex>
        <Divider width="99%" textColor="green.700" orientation="horizontal" />
        <Flex
          fontSize="12px"
          p="2px"
          justifyContent="space-between"
        >
          <Text textColor="gray.700">{ownerTitle}</Text>
          <Divider textColor="#CBD5E0" height="16px" orientation="vertical" />
          <Text textColor="gray.700">{ownerTitleName}</Text>
        </Flex>
        <Divider width="99%" textColor="green.700" orientation="horizontal" />
        <Flex
          p="2px"

          fontSize="12px"
          justifyContent="space-between"
        >
          <Text textColor="gray.700">{pRDStatusTitle}</Text>
          <Divider textColor="#CBD5E0" height="16px" orientation="vertical" />
          <Text textColor="gray.700">{pRDStatusStage}</Text>
        </Flex>
        <Divider width="99%" textColor="green.700" orientation="horizontal" />

        <Flex
          fontSize="12px"
          p="2px"
          justifyContent="space-between"
        >
          <Text textColor="gray.700">{designSystemTitle}</Text>
          <Divider textColor="#CBD5E0" height="16px" orientation="vertical" />
          <Text textColor="gray.700">{designSystemVersion}</Text>
        </Flex>
        <Divider width="99%" textColor="green.700" orientation="horizontal" />

        <Flex
          fontSize="12px"
          p="2px"
          justifyContent="space-between"
        >
          <Text textColor="gray.700">{lastUpdateTitle}</Text>
          <Divider textColor="#CBD5E0" height="16px" orientation="vertical" />
          <Text textColor="gray.700">{lastUpdateDate}</Text>
        </Flex>
      </Flex>
    )
}

RightSideAppCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  productCodeText: PropTypes.string.isRequired,
  productCode: PropTypes.string.isRequired,
  ownerTitle: PropTypes.string.isRequired,
  ownerTitleName: PropTypes.string.isRequired,
  pRDStatusTitle: PropTypes.string.isRequired,
  pRDStatusStage: PropTypes.string.isRequired,
  designSystemTitle: PropTypes.string.isRequired,
  designSystemVersion: PropTypes.string.isRequired,
  lastUpdateTitle: PropTypes.string.isRequired,
  lastUpdateDate: PropTypes.string.isRequired,
};