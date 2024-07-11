import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export const Account = () => {
  return (
    <Box>
      <Flex fontFamily={'Inter'} justifyContent={'left'}>
        <Text fontWeight={'500'} textAlign={'left'} fontSize="24">
          Account
        </Text>
      </Flex>
      <Box px="10" py="10" my="5" bg="white">
        <Box>
          <Text
            fontFamily={'Inter'}
            fontWeight={'500'}
            textAlign={'left'}
            fontSize="20"
          >
            Credentials
          </Text>
          <Flex gap={'16'} pr="64" mt="5">
            <FormControl fontFamily={'Inter'}>
              <FormLabel fontSize={'sm'}>Email</FormLabel>
              <Input
                border="1px solid #E1E1E1"
                placeholder="Email"
                fontSize="sm"
              />
            </FormControl>
            <FormControl fontFamily={'Inter'}>
              <FormLabel fontSize={'sm'}>Password</FormLabel>
              <Input
                border="1px solid #E1E1E1"
                placeholder="Password"
                fontSize="sm"
              />
            </FormControl>
          </Flex>
        </Box>
        <Box mt="10">
          <Text
            fontFamily={'Inter'}
            fontWeight={'500'}
            textAlign={'left'}
            fontSize="20"
          >
            Socials
          </Text>
          <SimpleGrid rowGap={'5'} columns={'2'} gap={'16'} pr="64" mt="5">
            <FormControl fontFamily={'Inter'}>
              <FormLabel fontSize={'sm'}>Facebook</FormLabel>
              <Input
                border="1px solid #E1E1E1"
                placeholder="Paste Link"
                fontSize="sm"
              />
            </FormControl>
            <FormControl fontFamily={'Inter'}>
              <FormLabel fontSize={'sm'}>Twitter</FormLabel>
              <Input
                border="1px solid #E1E1E1"
                placeholder="Paste Link"
                fontSize="sm"
              />
            </FormControl>
            <FormControl fontFamily={'Inter'}>
              <FormLabel fontSize={'sm'}>Instagram</FormLabel>
              <Input
                border="1px solid #E1E1E1"
                placeholder="Paste Link"
                fontSize="sm"
              />
            </FormControl>
            <FormControl fontFamily={'Inter'}>
              <FormLabel fontSize={'sm'}>Mail</FormLabel>
              <Input
                border="1px solid #E1E1E1"
                placeholder="Paste Link"
                fontSize="sm"
              />
            </FormControl>
          </SimpleGrid>
          <Flex mt="10" justifyContent={'left'}>
            <Button
              px="12"
              borderRadius={'0'}
              py="2"
              h="fit-content"
              color={'white'}
              bg="#E6B242"
            >
              Save
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
