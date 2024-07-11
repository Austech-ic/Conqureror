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

export const Theme = () => {
  const [enableCacheSiteMap, setEnableCacheSiteMap] = useState('no');
  const [
    redirectNotFoundRequestsToHomepage,
    setRedirectNotFoundRequestsToHomepage,
  ] = useState('no');
  const [showGuidelines, setShowGuidelines] = useState('no');
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
        <FormLabel fontWeight={'400'}>Enable cache site map</FormLabel>
        <RadioGroup onChange={setEnableCacheSiteMap} value={enableCacheSiteMap}>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontWeight={'400'}>
          Redirect all not found requests to homepage?
        </FormLabel>
        <RadioGroup
          onChange={setRedirectNotFoundRequestsToHomepage}
          value={redirectNotFoundRequestsToHomepage}
        >
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel fontWeight={'400'}>Show guidelines?</FormLabel>
        <RadioGroup onChange={setShowGuidelines} value={showGuidelines}>
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
