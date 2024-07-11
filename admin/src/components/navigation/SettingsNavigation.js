import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const SettingsNavigation = ({ children }) => {
  const NavItem = [
    {
      id: 1,
      title: 'General Information',
      description: 'Setting site information',
      href: '/settings',
    },
    {
      id: 2,
      title: 'Admin appearance',
      description: 'Setting admin appearance such as Icon, Maintenance ',
      href: '/settings/admin-appearance',
    },
    {
      id: 3,
      title: 'Cache',
      description: 'Config cache for system for optimize speed',
      href: '/settings/cache',
    },
    {
      id: 4,
      title: 'Datatables',
      description: 'Setting for datatables',
      href: '/settings/datatables',
    },
    {
      id: 5,
      title: 'Optimize page speed',
      description: 'Minify HTML output, inline CSS, remove comments....',
      href: '/settings/optimize-page-speed',
    },
    {
      id: 6,
      title: 'Theme',
      description: 'Setting for theme',
      href: '/settings/theme',
    },
    {
      id: 7,
      title: 'Newsletters',
      description:
        'Settings for newsletter (auto send newsletter email to SendGrid, Mailchimp... when someone register newsletter on website).',
      href: '/settings/newsletters',
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box fontFamily={'Inter'}>
      <Text fontWeight={'500'} textAlign={'left'} fontSize="24">
        Settings
      </Text>
      <Flex gap="14" bg="white" px="10" py="10" my="5">
        <Flex flexDirection={'column'} gap="5">
          {NavItem.map((item) => (
            <Box
              key={item.id}
              bg={location.pathname === item.href ? '#E6B242' : 'white'}
              onClick={() => navigate(item.href)}
              color={location.pathname === item.href ? 'white' : 'black'}
              _hover={{ color: 'white', bg: '#E6B242', cursor: 'pointer' }}
              border="1px solid #DCE1E7"
              borderRadius={'12px'}
              py="6"
              px="8"
              w="96"
              textAlign={'left'}
            >
              <Text fontSize={'16'}>{item.title}</Text>
              <Text fontSize={'xs'}>{item.description}</Text>
            </Box>
          ))}
        </Flex>
        <Box
          w="full"
          h="fit-content"
          p="5"
          border="1px solid #DCE1E7"
          borderRadius={'12px'}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};
