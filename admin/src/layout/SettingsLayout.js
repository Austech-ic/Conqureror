import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SettingsNavigation } from '../components/navigation/SettingsNavigation';
import SidebarWithHeader from '../components/navigation/SideNavbar';

export const SettingsLayout = ({ children }) => {
  return (
    <Flex>
      <SidebarWithHeader>
        <SettingsNavigation children={children} />
      </SidebarWithHeader>
    </Flex>
  );
};
