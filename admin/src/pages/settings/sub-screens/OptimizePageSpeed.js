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

export const OptimizePageSpeed = () => {
  const [enableOptimizePageSpeed, setEnableOptimizePageSpeed] = useState();
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
        <FormLabel fontWeight={'400'}>Enable optimize page speed?</FormLabel>
        <RadioGroup
          onChange={setEnableOptimizePageSpeed}
          value={enableOptimizePageSpeed}
        >
          <Stack direction="row">
            <Radio value="1">Yes</Radio>
            <Radio value="2">No</Radio>
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
