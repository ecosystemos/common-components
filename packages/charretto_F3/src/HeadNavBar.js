import charetto_logo from './assets/images/charetto_logo.png';
import PropTypes from 'prop-types';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, BellIcon } from '@chakra-ui/icons';
import { Icon } from '@iconify/react';
import styled from "styled-components";

const whitecons = {
    color: 'white',
    letterSpacing: '0.02em',
}

const Links = ['Dashboard', 'Products', 'Calendar'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('green.700', 'green.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export const HeadNavBar = ({title,avatarMenuItemText,avatarMenuItemText2,avatarMenuItemText3,...props}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('green.700', 'green.700')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            colorScheme={'green.700'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack style= {whitecons} spacing={8} alignItems={'center'}>
            <Image ml="6.2px" h="40px" w="40px" src={charetto_logo}></Image>
            <Box>{title}</Box>
            
          </HStack>
          <Flex alignItems={'center'}>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              style= {whitecons}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <IconButton
              colorScheme={'whiteAlpha'}
              borderRadius="50%"
              bgColor="green.700"
              size={'lg'}
              mr={4}
              icon={<Icon icon="mdi:bell-outline" />}
              >
              Action
            </IconButton>
            <Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                
                >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton >
              <MenuList >
                <MenuItem>{avatarMenuItemText}</MenuItem>
                <MenuItem>{avatarMenuItemText2}</MenuItem>
                <MenuDivider />
                <MenuItem>{avatarMenuItemText3}</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box  pb={4} display={{ md: 'none' }}>
            <Stack style= {whitecons} as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
HeadNavBar.propTypes = {
  title: PropTypes.string.isRequired,
  avatarMenuItemText: PropTypes.string.isRequired,
  avatarMenuItemText2: PropTypes.string.isRequired,
  avatarMenuItemText3: PropTypes.string.isRequired,
};