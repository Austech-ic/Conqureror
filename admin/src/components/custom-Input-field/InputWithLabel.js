import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';

export const InputWithLabel = ({
  Label,
  Placeholder,
  Type,
  Border,
  TextColor,
  LabelBg,
  RightIcon,
  LeftIcon,
  ...rest
}) => {
  return (
    <Box position={'relative'} {...rest}>
      <FormLabel
        color={TextColor || '#B4B4B4'}
        bg={LabelBg || 'white'}
        fontSize={'xs'}
        fontWeight={'normal'}
        zIndex={'10'}
        top="-2"
        left="3"
        position={'absolute'}
      >
        {Label}
      </FormLabel>
      <InputGroup>
        <Input
          border={Border || '1px solid #141812'}
          type={Type || 'text'}
          _placeholder={{
            fontSize: 'xs',
            fontWeight: 'medium',
            color: '#B4B4B4',
          }}
          borderRadius={'8px'}
          w="full"
          placeholder={Placeholder}
          zIndex={'9'}
        />
        {RightIcon ? (
          <InputRightElement> {RightIcon} </InputRightElement>
        ) : null}
        {LeftIcon ? <InputLeftElement> {LeftIcon} </InputLeftElement> : null}
      </InputGroup>
    </Box>
  );
};
