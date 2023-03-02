import React from 'react'
import {
    Flex,
    Text,
    Link,
    Menu,
    MenuButton,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

export const LeftSideBarNavItem = ({ iconLeftSideBarNavItem, titleLeftSideBarNavItem,linkLeftSideBarNavItem, descriptionLeftSideBarNavItem, activeLeftSideBarNavItem, navSizeLeftSideBarNavItem, ...props }) => {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems="center"
        >
            <Menu placement="right">
                <Link
                    backgroundColor={activeLeftSideBarNavItem && "#FCFFFD"}
                    p={0}
                    w="100%"
                >
                    <MenuButton w="100%">
                        <Flex
                        flexDir="column"
                        alignItems=  "center"
                        >
                            <Icon icon={iconLeftSideBarNavItem} fontSize="25px" color={activeLeftSideBarNavItem ? "green.700" : "gray.600"} />
                            <Text fontSize="12px" display="flex">{titleLeftSideBarNavItem}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}
LeftSideBarNavItem.propTypes = {
    titleLeftSideBarNavItem: PropTypes.string.isRequired,
    iconLeftSideBarNavItem: PropTypes.string.isRequired,
    linkLeftSideBarNavItem: PropTypes.string.isRequired,
    activeLeftSideBarNavItem: PropTypes.bool.isRequired,
    navSizeLeftSideBarNavItem: PropTypes.string.isRequired,
    descriptionLeftSideBarNavItem: PropTypes.string.isRequired,
  };