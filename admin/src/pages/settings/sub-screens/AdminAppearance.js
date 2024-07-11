import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Switch,
} from '@chakra-ui/react';
export const AdminAppearance = () => {
  return (
    <Flex
      pt="5"
      px="5"
      pb="28"
      flexDirection={'column'}
      gap="5"
      position={'relative'}
    >
      <FormControl>
        <FormLabel fontSize="sm">Admin Logo</FormLabel>
        <Input type="file" fontSize="sm" />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm">Admin Favicon</FormLabel>
        <Input type="file" fontSize="sm" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm">Login Screen Backgrounds</FormLabel>
        <Input type="file" fontSize="sm" />
      </FormControl>

      <Flex alignItems={'center'} mt="10">
        <FormLabel fontSize={'sm'}>Switch to Maintenance Mode:</FormLabel>
        <Switch />
      </Flex>
      <Button
        bottom="5"
        position={'absolute'}
        bg="#E6B242"
        color="white"
        fontSize={'sm'}
        borderRadius={'3px'}
        w="fit-content"
        h="fit-content"
        right="5"
        px="12"
        py="2"
      >
        {' '}
        Save
      </Button>
    </Flex>
  );
};
