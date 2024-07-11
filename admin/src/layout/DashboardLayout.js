import { Flex } from '@chakra-ui/react';
import React from 'react';
import SidebarWithHeader from '../components/navigation/SideNavbar';

export const DashboardLayout = ({ children }) => {
  return (
    <Flex>
      <SidebarWithHeader children={children} />
    </Flex>
  );
};
