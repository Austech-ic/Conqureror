import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const Cache = () => {
  const [enableCache, setEnableCache] = useState('no');
  const [cacheAdmin, setCacheAdmin] = useState('no');
  const options = [
    { title: 'Yes', name: 'yes' },
    { title: 'No', name: 'no' },
  ];
  const [value, setValue] = useState();
  const handleRadio = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <Flex
      flexDirection={'column'}
      gap="16"
      py="5"
      px="5"
      pb="20"
      position={'relative'}
    >
      <FormControl>
        <FormLabel fontWeight={'400'}>Enable Cache?</FormLabel>
        <RadioGroup onChange={setEnableCache} value={enableCache}>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <RadioGroup onChange={setCacheAdmin} value={cacheAdmin}>
          <FormLabel fontWeight={'400'}>Cache admin menu?</FormLabel>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
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
