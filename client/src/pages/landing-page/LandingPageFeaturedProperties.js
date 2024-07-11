import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import House from '../../assets/images/ikoyi.png';
import CoverImage from '../../assets/images/cover_image.png';
import { GiCornerFlag } from 'react-icons/gi';
import { MdOutlineBed } from 'react-icons/md';
import { LuBath } from 'react-icons/lu';
import TwoBedroomTerraceDuplex from '../../assets/images/Terrace Duplex.jpg';
import FullyDetachedBungalow from '../../assets/images/Detached Bungalow.jpg';
import SEMIDETACHEDBUNGALOW from '../../assets/images/DETACHED BUNGALOW semi.jpg';
import FOURBEDROOMTERRACEDUPLEX from '../../assets/images/4 BEDROOM TERRACE.jpg';
import FULLYDETACHEDDUPLEXWITHATTACHED from '../../assets/images/FULLY DETACHED DUPLEX WITH ATTACHED .jpg';
import KURUDU from '../../assets/images/KURUDU.jpg';
export const LandingPageFeaturedProperties = () => {
  const Properties = ({ image, sqf, description, beds, baths, price }) => {
    return (
      <Box
        bg="white"
        borderRadius={'6px'}
        w="full"
        border={'1px solid #F5F5F5'}
      >
        <Flex h={['auto', '60']} flexDirection={['column', 'row']}>
          <Box h={['52', '60']} w={['full', '30']}>
            <Image
              objectFit={'cover'}
              h="full"
              w="full"
              src={image}
              display={['none', 'block']}
              borderLeftRadius={'5px'}
            />
            <Image
              objectFit={'cover'}
              h="100%"
              w="full"
              display={['block', 'none']}
              src={image}
              borderTopRadius={'5px'}
            />
          </Box>
          <Flex
            position={'relative'}
            h={['60', 'full']}
            w={['full', '70']}
            flexDirection={'column'}
            px="3"
            pt="4"
          >
            <Text fontWeight="500" fontSize="14" textAlign={'left'}>
              {description}
            </Text>
            <Divider mt="4" />
            <Flex gap="4" my="3">
              <Flex gap="1">
                <GiCornerFlag size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'12'}>
                  {sqf}
                </Text>
              </Flex>
              {beds && (
                <Flex gap="1">
                  <MdOutlineBed size="20" color="#E6B242" />
                  <Text color="#282828" fontSize={'12'}>
                    {beds}
                  </Text>
                </Flex>
              )}
              {baths && (
                <Flex gap="1">
                  <LuBath size="20" color="#E6B242" />
                  <Text color="#282828" fontSize={'12'}>
                    {baths}
                  </Text>
                </Flex>
              )}
            </Flex>
            <Divider />

            <Box position={'absolute'} left="5" bottom="2" textAlign={'left'}>
              <Text fontSize={'sm'} color={'#8C8C8C'}>
                Price
              </Text>
              <Text color="#282828" fontWeight={'500'} fontSize={'20'}>
                {' '}
                {price}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  };
  return (
    <Box px={['5', '40']} bg="#F3F4FF" py="20" h="auto">
      <Heading
        w="full"
        textTransform={'uppercase'}
        fontFamily={'Rozha One'}
        color="#282828"
        fontSize={['28', '36px']}
      >
        Featured{' '}
        <Text as="span" color="#E6B242">
          Properties
        </Text>
      </Heading>
      <Text textAlign={'center'} fontSize={['18px', '22px']}>
        A plateform to buy, and rent properties without any agent <br></br> or
        commisions.
      </Text>
      <Center>
        <SimpleGrid mt="20" spacing="10" columns={['1', '2']}>
          <Properties
            image={TwoBedroomTerraceDuplex}
            sqf={'180sqm'}
            // beds={'4 Beds'}
            // baths={'4 Baths'}
            price={'5 M'}
            description={'2 BEDROOM TERRACE DUPLEX'}
          />
          <Properties
            image={FullyDetachedBungalow}
            sqf={'250 sqm'}
            // beds={'4 Beds'}
            // baths={'4 Baths'}
            price={'2.5M'}
            description={'2 BEDROOM FULLY DETACHED BUNGALOW'}
          />
          <Properties
            image={FOURBEDROOMTERRACEDUPLEX}
            sqf={'250sqm'}
            // beds={'4 Beds'}
            // baths={'4 Baths'}
            price={'6M'}
            description={'4 BEDROOM TERRACE DUPLEX'}
          />
          <Properties
            image={SEMIDETACHEDBUNGALOW}
            sqf={'300sqm'}
            // beds={'4 Beds'}
            // baths={'4 Baths'}
            price={'3M'}
            description={'3 BEDROOM SEMI DETACHED BUNGALOW'}
          />
          <Properties
            image={FULLYDETACHEDDUPLEXWITHATTACHED}
            sqf={'500sqm'}
            // beds={'4 Beds'}
            // baths={'4 Baths'}
            price={'4.5M'}
            description={'5 BEDROOM FULLY DETACHED DUPLEX WITH ATTACHED'}
          />
          <Properties
            image={KURUDU}
            sqf={'600sqm'}
            // beds={'4 Beds'}
            // baths={'4 Baths'}
            price={'5.5M'}
            description={
              '5/6 BEDROOM FULLY DETACHED DUPLEX WITH DETACHED BQ,Deeper Life Road, Beside Army Corporative Estate 4, KURUDU Abuja'
            }
          />
        </SimpleGrid>{' '}
      </Center>
      <Button
        mt="20"
        px="10"
        borderRadius={'0'}
        fontWeight="400"
        fontSize="sm"
        bg="#E6B242"
        color="white"
      >
        VIEW MORE
      </Button>
    </Box>
  );
};
