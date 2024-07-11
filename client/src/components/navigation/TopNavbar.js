import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { IoChevronDown } from 'react-icons/io5';
import { MdOutlineChevronRight } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function TopNavbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="absolute" width="100%" zIndex="10">
      <Flex
        bg={'transparent'}
        color={'white'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4, md: 20 }}
        align={'center'}
        justifyContent={'space-between'}
        // backdropFilter="saturate(180%) blur(5px)"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <IoMdClose color={'#E6B242'} w={3} h={3} />
              ) : (
                <RxHamburgerMenu color={'#E6B242'} w={5} h={5} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex alignItems={'center'} w={['auto', 'auto', '20', '80']}>
          <Image src={Logo} />
          <Text
            display={['none', 'none', 'none', 'block']}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            color={'white'}
            font
            textTransform={'uppercase'}
            fontFamily={'Montaga'}
          >
            Conquerors abode &<br></br> Properties Ltd
          </Text>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }}>
          <DesktopNav />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontFamily={'Inter'}
            fontWeight={400}
            color={'white'}
            bg={'#E6B242'}
            textTransform={'uppercase'}
            href={'#'}
            borderRadius={'0'}
            _hover={{
              bg: '#E6B242',
            }}
          >
            View Our Project
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'white';
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={1}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} w="24">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link p={2} to={navItem.href ?? '#'}>
                <Text
                  fontSize={'sm'}
                  fontWeight={400}
                  color={linkColor}
                  fontFamily={'Inter'}
                  textTransform={'uppercase'}
                  _hover={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xs'}
                w="fit-content"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'0'}
      _hover={'gray.900'}
    >
      <Text
        transition={'all .3s ease'}
        _groupHover={{ color: 'black' }}
        fontWeight={400}
        color="black"
        textAlign={'left'}
      >
        {label}
      </Text>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={IoChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Projects',
    href: '/project',
  },

  {
    label: 'Pages',
    children: [
      {
        label: 'Our Team',

        href: '/our-team',
      },
      {
        label: 'Blog',

        href: '/blog',
      },
    ],
  },
  {
    label: 'Contact',
    href: '#',
  },
];
