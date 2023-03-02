import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon//use iconify to show the icon -- now it shows ""?""
} from '@chakra-ui/react'
import PropTypes from 'prop-types';
//import { Icon } from '@iconify/react'; // use this lib

export const LeftSideBarNavHoverBox=({ titleLeftSideBarNavHoverBox, iconLeftSideBarNavHoverBox, descriptionLeftSideBarNavHoverBox,...props }) =>{
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid #82AAAD"
            />
            <Flex
                h={200}
                w={200}
                w="100%"
                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor="#82AAAD"
                borderRadius="10px"
                color="#fff"
                textAlign="center"
            >
                <Icon as={iconLeftSideBarNavHoverBox} fontSize="3xl" mb={4} />
                <Heading size="md" fontWeight="normal">{titleLeftSideBarNavHoverBox}</Heading>
                <Text>{descriptionLeftSideBarNavHoverBox}</Text>
            </Flex>
        </>
    )
}
LeftSideBarNavHoverBox.propTypes = {
    titleLeftSideBarNavHoverBox: PropTypes.string.isRequired,
    iconLeftSideBarNavHoverBox: PropTypes.string.isRequired,
    descriptionLeftSideBarNavHoverBox: PropTypes.string.isRequired,
  };