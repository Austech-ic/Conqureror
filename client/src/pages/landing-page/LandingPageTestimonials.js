import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Quote from '../../assets/images/quote.png';
import Man from '../../assets/images/ikoyi.png';

export const LandingPageTestimonials = () => {
  const TestimonialCard = ({}) => {
    return (
      <Box
        bg="#FFFFFF"
        h={['auto', '340px']}
        pos={'relative'}
        borderRadius={'12px'}
        pb={['10', '20']}
      >
        <Flex
          px="6"
          pt="5"
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'column'}
          gap="7"
        >
          <Image h="14" w="14" src={Quote} />
          <Text textAlign={'center'} fontSize={'16px'} color="#282828">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </Text>
        </Flex>
        <Box bottom={'-24'} left={['33%', '35%']} position={'absolute'}>
          <Image h="24" w="24" src={Man} borderRadius={'full'} />
          <Text pt="2" textAlign="center" fontWeight={'500'}>
            Mr Bambgboye
          </Text>
        </Box>
      </Box>
    );
  };
  return (
    <Box px={['5', '40']} pb="48" pt="20" h="auto" bg="#F3F4FF">
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#E6B242"
        fontSize={['28', '36px']}
        pl="2"
      >
        TESTIMONIAL
      </Heading>

      <Text fontSize={['16', '24px']} textAlign={'left'} mt="3">
        What Our Customers Are saying
      </Text>
      <SimpleGrid columns={['1', '3']} spacing={['28', '5']} mt="10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </SimpleGrid>
    </Box>
  );
};
