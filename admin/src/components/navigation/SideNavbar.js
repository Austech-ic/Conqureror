import React, { ReactNode, useState, useEffect } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  useStyleConfig,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Select,
} from '@chakra-ui/react';
import { FiMenu, FiBell } from 'react-icons/fi';
import {
  MdOutlineReceipt,
  MdLiveTv,
  MdSupportAgent,
  MdPieChart,
  MdSupervisorAccount,
} from 'react-icons/md';
import Logo from '../../assets/images/logo.png';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { GoHomeFill } from 'react-icons/go';
import {
  IoDiamond,
  IoDiamondOutline,
  IoNotificationsOutline,
  IoPhonePortraitOutline,
  IoSettingsSharp,
} from 'react-icons/io5';
import { CiCreditCard1, CiLock } from 'react-icons/ci';
import { FaBell, FaBloggerB, FaGift } from 'react-icons/fa';
import { IoIosMenu, IoIosNotifications, IoMdClose } from 'react-icons/io';
import { BiSolidDashboard } from 'react-icons/bi';
import { PiChartBarFill, PiUsersFourThin } from 'react-icons/pi';
import { FaHouseChimneyWindow } from 'react-icons/fa6';
const LinkItems = [
  {
    name: 'Dashboard',
    icon: PiChartBarFill,
    destination: '/dashboard',
  },

  {
    name: 'Property',
    icon: FaHouseChimneyWindow,
    destination: '/dashboard/property',
  },
  {
    name: 'Blog',
    icon: FaBloggerB,
    destination: '/dashboard/blog',
  },
  {
    name: 'Testimonials',
    icon: MdPieChart,
    destination: '/dashboard/testimonials',
  },
  {
    name: 'Teams',
    icon: MdPieChart,
    destination: '/dashboard/teams',
  },
  {
    name: 'Account',
    icon: MdSupervisorAccount,
    destination: '/dashboard/account',
  },
  {
    name: 'Notification Messages',
    icon: IoIosNotifications,
    destination: '/dashboard/notification-messages',
  },
  {
    name: 'Settings',
    icon: IoSettingsSharp,
    destination: '/settings',
  },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Map the route paths to their corresponding headers
  const headerMap = {
    '/dashboard': 'Home',
    '/dashboard/live-tv': 'Live Tv',
    '/dashboard/campaigns': 'Campaigns',
    '/dashboard/subscription': 'Subscription',
    '/dashboard/messages': 'Messages',
    '/dashboard/users': 'Users',
    '/dashboard/transactions': 'Transactions',
  };
  const currentPath = location.pathname;
  const currentHeader = headerMap[currentPath];

  return (
    <Box minH="100vh" w="full">
      <SidebarContent
        bg="#262626"
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} header={currentHeader} />
      <Box
        pl={[0, 0, 64, 72]}
        h="full"
        pr={['auto', '10']}
        display="block"
        bg="#F5F5F5"
        overflow={'hidden'}
        pt="20"
        zIndex={'0'}
      >
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 64 }}
      h="full"
      color="white"
      pos={['auto', 'fixed']}
      zIndex={'2'}
      {...rest}
    >
      <Flex
        h="20"
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <CloseButton onClick={onClose} />
      </Flex>

      <Flex mx="5" mb="3" mt="4" alignItems={'center'}>
        <Image h="12" src={Logo} />
        <Text
          textAlign={'left'}
          fontFamily={'Montaga'}
          fontSize={'md'}
          color={'white'}
        >
          Conquerors abode &<br></br> Properties Ltd
        </Text>
      </Flex>
      {/* <Divider borderTop={'1px solid #D9D9D9'} /> */}
      {/* <Box borderTop="1px solid #D9D9D9"></Box> */}
      <Box mt="10">
        {LinkItems.map((link) =>
          link.children ? (
            <Accordion allowToggle key={link.name}>
              <AccordionItem border="none">
                <AccordionButton
                  _hover={{
                    bg: '#2D3748',
                  }}
                  _expanded={{ bg: '#1A202C' }}
                >
                  <Flex
                    mx="5"
                    align="center"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    fontSize={'sm'}
                    fontWeight={'600'}
                  >
                    <Icon
                      mr="4"
                      fontSize="20"
                      as={link.icon}
                      color={'#FFA500'}
                    />
                    <Box flex="1" textAlign="left">
                      {link.name}
                    </Box>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {link.children.map((subLink) => (
                    <NavItem
                      onClose={onClose}
                      key={subLink.name}
                      icon={null}
                      destination={subLink.destination}
                    >
                      {subLink.name}
                    </NavItem>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ) : (
            <NavItem
              onClose={onClose}
              key={link.name}
              icon={link.icon}
              destination={link.destination}
            >
              {link.name}
            </NavItem>
          )
        )}{' '}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, destination, children, onClose, ...rest }) => {
  const linkStyles = useStyleConfig('Link');
  const location = useLocation();

  const isHomeActive = location.pathname === `${destination}` ? true : false;

  console.log(location.pathname);
  console.log(isHomeActive);
  return (
    <Link onClick={onClose} to={destination} _focus={{ boxShadow: 'none' }}>
      <Flex
        position={'relative'}
        align="center"
        px="2"
        w="52"
        py="3"
        mx="5"
        my="2"
        borderRadius="0"
        role="group"
        cursor="pointer"
        fontSize={'sm'}
        fontWeight={'500'}
        color="white"
        {...rest}
      >
        {icon && <Icon mr="2" color={'#fffff'} fontSize="24" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

const Activities = ({ icon, activities, status, message }) => {
  return (
    <Box px="5" py="3" border={'1px solid #F4F6F9'} borderRadius={'10px'}>
      <Flex alignContent={'center'} alignItems={'center'} h="16">
        <Box borderRadius="full" p="2" bg="#FFA500">
          {icon}
        </Box>
        <Box pl="3">
          <Text color="#141414" fontWeight={'500'} fontSize={'md'}>
            {activities}
          </Text>

          <Text fontWeight={'500'} fontSize={'xs'} color="#969AA0" maxW="52">
            {message}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, header, ...rest }) => {
  const [merchantDetails, setMerchantDetails] = useState([]);
  const [isLoadingd, setIsLoadingd] = useState(true);
  const [bgColor, setBgColor] = useState('#FFA5001A');
  const [textColor, setTextColor] = useState('#FFA500');
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setBgColor('rgba(255, 165, 0, 1)');
        setTextColor('white');
      } else {
        setBgColor('#FFA5001A');
        setTextColor('#FFA500');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      w="full"
      height="12"
      position="fixed"
      zIndex={'1'}
      top="0"
      right="0"
      alignItems="center"
      bg={'white'}
      borderBottom="0"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack w="full" justifyContent={'space-between'}>
        <Box ml="64">
          <IoIosMenu size={'28'} />
        </Box>
        <HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                pl="1"
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
                <HStack flexDirection={'row-reverse'}>
                  <Avatar size={'xs'} src={merchantDetails?.merchantLogo} />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontWeight={'medium'} fontSize="sm">
                      {merchantDetails?.businessName}
                    </Text>
                  </VStack>
                </HStack>
              </MenuButton>
            </Menu>
          </Flex>
        </HStack>
      </HStack>
    </Flex>
  );
};
