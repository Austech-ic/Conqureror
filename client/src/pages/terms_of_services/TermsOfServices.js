import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/project.png';
export const TermsOfServices = () => {
  return (
    <Box>
      <Box
        height="50vh"
        backgroundImage={CoverImage}
        backgroundSize="cover"
        backgroundPosition="top"
        position="relative"
        backgroundRepeat="no-repeat"
      >
        <Flex
          h="100%"
          fontFamily={'Arial'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text
            color="white"
            zIndex="1"
            fontSize="24px"
            fontWeight={'500'}
            textTransform={'uppercase'}
            textAlign={'center'}
          >
            Blog
          </Text>
        </Flex>
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgGradient="linear(to-r, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))"
        />
      </Box>
      <Box px="40" py="20"></Box>
    </Box>
  );
};
