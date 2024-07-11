import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/cover_image.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Wave1 from '../../assets/images/wave1.png';
import Wave2 from '../../assets/images/wave2.png';
import Wave3 from '../../assets/images/Vector 1.png';
export const LandingPageHome = () => {
  return (
    <Box
      height={['auto', '120vh']}
      pb={['20', 'auto']}
      backgroundImage={CoverImage}
      backgroundSize="cover"
      backgroundPosition="top"
      position="relative"
    >
      <Box>
        <Image
          src={Wave1}
          w="full"
          zIndex={'2'}
          objectFit={'fill'}
          position="absolute"
          bottom={'-48'}
        />
      </Box>
      <Image
        src={Wave2}
        w="full"
        zIndex={'2'}
        objectFit={'fill'}
        position="absolute"
        bottom="-60"
      />
      <Image
        src={Wave3}
        h="32"
        zIndex={'2'}
        w="full"
        objectFit={'fill'}
        position="absolute"
        overflowX={'hidden'}
        bottom="-14"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      ></Box>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        className="hero"
        h="100%"
        w="100%"
      >
        <Flex
          textAlign={'left'}
          flexDirection={'column'}
          h="full"
          w="fit-content"
          pr={['0', '48']}
          mx={['5', 'auto']}
        >
          <Text
            zIndex={'2'}
            fontSize={['4xl', '7xl']}
            fontWeight="400"
            lineHeight={['40px', '84px']}
            mb="4"
            mt="44"
            color="white"
            textTransform={'uppercase'}
            textAlign="left"
            pl="3"
            borderLeft={'4px solid #E6B242'}
            fontFamily={'Rozha One'}
          >
            Welcome to{' '}
            <Text as="span" color="#E6B242">
              Conquerors<br></br>
            </Text>{' '}
            Abode & Properties LTD.
          </Text>

          <Text
            fontFamily="Inter"
            textAlign={'left'}
            color="white"
            zIndex={'2'}
            fontWeight={'300'}
          >
            We're here to help you find the perfect property, whether it's your
            dream home or a great investment.
          </Text>

          <Button
            mt="16"
            w="fit-content"
            zIndex={'2'}
            fontSize="sm"
            color="white"
            rightIcon={<IoIosArrowDroprightCircle size="24" color="white" />}
            fontWeight={'300'}
            borderRadius={0}
            textTransform={'uppercase'}
            bg="#E6B242"
            fontFamily={'Inter'}
          >
            View Our Project
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
