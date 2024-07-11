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
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

export const CreatePropertyModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} bg="#E6B242" color="white" fontSize="sm">
        Create Property
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent px="4">
          <ModalHeader>Create Property</ModalHeader>
          <ModalCloseButton border="1px solid #292D32" />
          <Divider border="1px solid #DCE1E7" />
          <ModalBody>
            <Box mt="5">
              <FormControl>
                <FormLabel fontSize={'sm'}>Title</FormLabel>
                <Input
                  placeholder="Enter Title"
                  border="1px solid #DCE1E7"
                  fontSize={'sm'}
                  _placeholder={{ color: '#E9E9E9' }}
                />
              </FormControl>
              <Flex gap="5" mt="5">
                <FormControl>
                  <FormLabel fontSize={'sm'}>Square kilometer</FormLabel>
                  <Input
                    placeholder="Enter Square Kilometer"
                    border="1px solid #DCE1E7"
                    fontSize={'sm'}
                    _placeholder={{ color: '#E9E9E9' }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={'sm'}>Amount</FormLabel>
                  <Input
                    placeholder="Enter Amount"
                    border="1px solid #DCE1E7"
                    fontSize={'sm'}
                    _placeholder={{ color: '#E9E9E9' }}
                  />
                </FormControl>
              </Flex>
              <FormControl fontSize={'sm'} mt="5">
                <FormLabel>Location</FormLabel>
                <Input
                  fontSize={'sm'}
                  placeholder="Enter Location"
                  border="1px solid #DCE1E7"
                  _placeholder={{ color: '#E9E9E9' }}
                />
              </FormControl>

              <Box mt="5"></Box>
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
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
