/**
 * TODO: Need converting to styled-components
 */
import React, { useState } from 'react'
import {LeftSideBarNavItem} from './LeftSideBarNavItem'
import {
    Flex,
} from '@chakra-ui/react'
import styled from "styled-components";
import PropTypes from 'prop-types';

const FlexParent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const LeftSidebar = ({titleNavItem,descriptionNavItem,navSizeNavItem,iconNavItem,...props}) => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            h="95vh"
            backgroundColor="green.50"
            w= "75px"
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                flexDir="column"
                w="80px"
                alignItems=  "center"
                as="nav"
            >
                <LeftSideBarNavItem navSizeLeftSideBarNavItem={navSize} iconLeftSideBarNavItem={iconNavItem} titleLeftSideBarNavItem={titleNavItem} descriptionLeftSideBarNavItem={descriptionNavItem} />
                <LeftSideBarNavItem navSizeLeftSideBarNavItem={navSize} iconLeftSideBarNavItem={"mdi:star-box-outline"} titleLeftSideBarNavItem="Features" activeLeftSideBarNavItem />
                <LeftSideBarNavItem navSizeLeftSideBarNavItem={navSize} iconLeftSideBarNavItem={"mdi:flag-variant-outline"} titleLeftSideBarNavItem="Userstories" />
                <LeftSideBarNavItem navSizeLeftSideBarNavItem={navSize} iconLeftSideBarNavItem={"mdi:flag-variant-outline"} titleLeftSideBarNavItem="Milestones" />
                <LeftSideBarNavItem navSizeLeftSideBarNavItem={navSize} iconLeftSideBarNavItem={"mdi:file-document-edit-outline"} titleLeftSideBarNavItem="Resources" />
           </Flex>
        </Flex>
    )
}
LeftSidebar.propTypes = {
    titleNavItem: PropTypes.string.isRequired,
    iconNavItem: PropTypes.string.isRequired,
  };
