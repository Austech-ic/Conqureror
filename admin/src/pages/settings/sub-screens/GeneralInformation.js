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
} from '@chakra-ui/react';
import React from 'react';
import { CiEdit } from 'react-icons/ci';

export const GeneralInformation = () => {
  const CustomInputField = ({ label, placeholder, type, icon }) => {
    return (
      <FormControl>
        <FormLabel fontSize={'sm'}>{label}</FormLabel>
        {icon && (
          <InputGroup>
            <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
            <Input type={type} fontSize={'sm'} placeholder={placeholder} />
          </InputGroup>
        )}
      </FormControl>
    );
  };
  return (
    <Flex
      pt="5"
      px="5"
      pb="28"
      flexDirection={'column'}
      gap="5"
      position={'relative'}
    >
      <CustomInputField
        label={'Admin Email'}
        icon={<CiEdit size="20" />}
        placeholder={'Email Address'}
        type="email"
      />
      <CustomInputField
        label={'Phone Number'}
        icon={<CiEdit size="20" />}
        placeholder={'Phone Number'}
        type="tel"
      />
      <CustomInputField
        label={'Address'}
        icon={<CiEdit size="20" />}
        placeholder={'Address'}
        type="text"
      />
      <CustomInputField
        label={'Email'}
        icon={<CiEdit size="20" />}
        placeholder={'Email Address'}
        type="email"
      />
      <FormControl>
        <FormLabel fontSize="sm">Site Language</FormLabel>
        <Select
          fontSize="sm"
          _placeholder={{ color: '#B1A7A7' }}
          placeholder="Select Site Language"
        >
          <option>English</option>
          <option>Yoruba</option>
          <option>French</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm">Time Zone</FormLabel>
        <Select
          fontSize="sm"
          _placeholder={{ color: '#B1A7A7' }}
          placeholder="Select Time Zone"
        >
          <option></option>
        </Select>
      </FormControl>
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
