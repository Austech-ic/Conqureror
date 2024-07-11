import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SettingsNavigation } from '../../components/navigation/SettingsNavigation';

export const Settings = () => {
  return (
    <Box>
      <Box px="10" py="10" my="5" bg="white">
        <SettingsNavigation />
      </Box>
    </Box>
  );
};
