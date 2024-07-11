import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Image1 from '../../assets/images/WhatsApp Image 2024-06-27 at 20.12.55_910148cb.jpg';
import Image2 from '../../assets/images/WhatsApp Image 2024-06-27 at 20.12.55_9b86b5c4.jpg';
import Image3 from '../../assets/images/WhatsApp Image 2024-06-27 at 20.12.55_b6e9eac6.jpg';

export const LandingPageAboutUs = () => {
  return (
    <Box px={['5', '40']} py={['20']} h="auto" zIndex={'3'} position="relative">
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#E6B242"
        fontSize={['28', '36px']}
        pl="2"
      >
        About{' '}
        <Text color="#282828" as="span">
          Us{' '}
        </Text>
      </Heading>

      <Flex
        flexDirection={['column', 'row']}
        mt="5"
        mb={['auto', '28']}
        gap={['10', '5']}
      >
        <Box
          display={['flex', 'auto']}
          flexDirection={'column'}
          gap="5"
          h="450px"
          w={['auto', 'md']}
          position="relative"
        >
          <Box
            top="0"
            h="52"
            w="72"
            bg="#BF8181"
            borderRadius={'10px'}
            position={['auto', 'absolute']}
            overflow={'hidden'}
          >
            <Image h="full" w="full" objectFit="cover" src={Image3} />
          </Box>
          <Box
            h="72"
            w="72"
            bg="#BFAFAF"
            left="24"
            top="28"
            borderRadius={'10px'}
            position={['auto', 'absolute']}
            zIndex={'1'}
            overflow={'hidden'}
            boxShadow={'3xl'}
          >
            {' '}
            <Image h="full" w="full" objectFit="cover" src={Image1} />
          </Box>
          <Box
            h="32"
            borderRadius={'10px'}
            bottom="0"
            w="60"
            bg="#BF8181"
            position={['auto', 'absolute']}
            overflow={'hidden'}
          >
            {' '}
            <Image h="full" w="full" objectFit="cover" src={Image2} />
          </Box>
        </Box>
        <Box textAlign="left" h={['auto', 'xs']} w={['full', '540px']}>
          <Text
            lineHeight={'50px'}
            color="black"
            fontSize={['32', '40px']}
            fontFamily={'Rozha One'}
          >
            Conquerors{' '}
            <Text as="span" color="#E6B242">
              Abode & Properties LTD
            </Text>
          </Text>
          <Text
            maxW={['full', '460px']}
            fontSize={['16', '20px']}
            lineHeight={'42px'}
          >
            Welcome to Conquerors Abode and Properties Ltd, your trusted,
            reliable and premium real estate company .We are dedicated to
            helping you find the perfect property, whether you are looking for
            your dream home or a sound investment opportunity. With years of
            experience in the industry, we have developed a strong reputation
            for providing our clients with exceptional service and access to
            exclusive properties.{' '}
          </Text>
          <Button
            mt="5"
            px="10"
            borderRadius={'0'}
            fontWeight="400"
            fontSize="16px"
            bg="#E6B242"
            color="white"
          >
            READ MORE
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
