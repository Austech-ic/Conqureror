import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { GoPlus } from 'react-icons/go';

export const CreateTeamMemberModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        leftIcon={<GoPlus size="20" />}
        bg="#E6B242"
        color="white"
        fontSize="sm"
        onClick={onOpen}
      >
        Create
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent px="4">
          <ModalHeader>Create Team Member</ModalHeader>
          <ModalCloseButton border="1px solid #292D32" />
          <Divider border="1px solid #DCE1E7" />
          <ModalBody>
            <Box bg="white">
              <Box>
                <SimpleGrid rowGap={'7'} columns={'2'} gap={'16'} mt="5">
                  <FormControl fontFamily={'Inter'}>
                    <FormLabel fontSize={'sm'}>First Name</FormLabel>
                    <Input
                      border="1px solid #E1E1E1"
                      placeholder="Email"
                      fontSize="sm"
                    />
                  </FormControl>
                  <FormControl fontFamily={'Inter'}>
                    <FormLabel fontSize={'sm'}>Last Name</FormLabel>
                    <Input
                      border="1px solid #E1E1E1"
                      placeholder="Password"
                      fontSize="sm"
                    />
                  </FormControl>
                  <FormControl fontFamily={'Inter'}>
                    <FormLabel fontSize={'sm'}>Upload Image</FormLabel>
                    <Input
                      border="1px solid #E1E1E1"
                      placeholder="Password"
                      fontSize="sm"
                    />
                  </FormControl>
                  <FormControl fontFamily={'Inter'}>
                    <FormLabel fontSize={'sm'}>Position</FormLabel>
                    <Input
                      border="1px solid #E1E1E1"
                      placeholder="Password"
                      fontSize="sm"
                    />
                  </FormControl>
                </SimpleGrid>
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
                <SimpleGrid rowGap={'7'} columns={'2'} gap={'16'} mt="5">
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
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter justifyContent={'left'}>
            <Button
              my="5"
              color="white"
              bg="#E6B242"
              px="12"
              mr={3}
              onClick={onClose}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
