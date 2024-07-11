import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/cover_image.png';
export const LandingPageListingCategories = () => {
  return (
    <Box px={['5', '40']} py="20" h="auto">
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#312F2F"
        pl="2"
        fontSize={['28', '36px']}
      >
        Listing Categories
      </Heading>

      <Text fontSize={['16', '24px']} textAlign={'left'} mt="3">
        A great plateform to buy, sell and rent your properties without any
        <br></br>
        agent or commisions
      </Text>
      <SimpleGrid spacing="5" mt="10" columns={['1', '4']}>
        <Box border="1px solid #DCE1E7" borderRadius={'6px'}>
          <Image borderTopRadius={'5px'} src={CoverImage} />
          <Text
            fontSize="20px"
            fontWeight={'500'}
            pb="6"
            pt="3"
            pl="3"
            textAlign="left"
          >
            Residential
          </Text>
        </Box>
        {/* <Box border="1px solid #DCE1E7" borderRadius={'6px'}>
          <Image borderTopRadius={'5px'} src={CoverImage} />
          <Text
            fontSize="20px"
            fontWeight={'500'}
            pb="6"
            pt="3"
            pl="3"
            textAlign="left"
          >
            Commercial
          </Text>
        </Box>
        <Box border="1px solid #DCE1E7" borderRadius={'6px'}>
          <Image borderTopRadius={'5px'} src={CoverImage} />
          <Text
            fontSize="20px"
            fontWeight={'500'}
            pb="6"
            pt="3"
            pl="3"
            textAlign="left"
          >
            Land
          </Text>
        </Box>
        <Box border="1px solid #DCE1E7" borderRadius={'6px'}>
          <Image borderTopRadius={'5px'} src={CoverImage} />
          <Text
            fontSize="20px"
            fontWeight={'500'}
            pb="6"
            pt="3"
            pl="3"
            textAlign="left"
          >
            Investment
          </Text>
        </Box> */}
      </SimpleGrid>
    </Box>
  );
};
