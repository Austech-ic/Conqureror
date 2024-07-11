import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/ikoyi.png';
import { GiCornerFlag } from 'react-icons/gi';
import { MdOutlineBed } from 'react-icons/md';
import { LuBath } from 'react-icons/lu';

export const ProjectDetails = () => {
  return (
    <Box px="40" py="20" h="auto">
      <Grid
        h="fit-content"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={10}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Image objectFit={'fill'} w="3xl" h="md" src={CoverImage} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image objectFit={'fill'} w="full" h="52" src={CoverImage} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image objectFit={'fill'} w="full" h="52" src={CoverImage} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image objectFit={'fill'} w="full" h="52" src={CoverImage} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image objectFit={'fill'} w="full" h="52" src={CoverImage} />
        </GridItem>
      </Grid>

      <Flex mt="10" gap="10">
        <Box textAlign={'left'} maxW="2xl">
          <Text fontSize={'24'} fontFamily={'Rozha One'}>
            A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.
          </Text>
          <Flex gap="4" my="3">
            <Flex gap="1">
              <GiCornerFlag size="20" color="#E6B242" />
              <Text color="#282828" fontSize={'sm'}>
                8000sqf
              </Text>
            </Flex>
            <Flex gap="1">
              <MdOutlineBed size="20" color="#E6B242" />
              <Text color="#282828" fontSize={'sm'}>
                3 bed
              </Text>
            </Flex>
            <Flex gap="1">
              <LuBath size="20" color="#E6B242" />
              <Text color="#282828" fontSize={'sm'}>
                3 baths
              </Text>
            </Flex>
          </Flex>

          <Text maxW="lg" color="#282828">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
            <br></br>
            <br></br>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </Text>
        </Box>
        <Box mt="5" w="80" textAlign={'left'}>
          <Text fontWeight="500">Price:</Text>
          <Text fontWeight={'500'} color="#E6B242" fontSize="20">
            ₦1,200,000.00
          </Text>
          <Flex mt="3" color="#282828" flexDirection={'column'} gap="4">
            <Flex fontSize="sm" justifyContent={'space-between'}>
              <Text>Duration</Text>
              <Text>365 days</Text>
            </Flex>
            <Flex fontSize="sm" justifyContent={'space-between'}>
              <Text>Price per Square feet</Text>
              <Text>₦400,000/Monthly</Text>
            </Flex>
            <Flex fontSize="sm" justifyContent={'space-between'}>
              <Text>
                Monthly Payment <br></br> (estimate)
              </Text>
              <Text>₦100,000/Monthly</Text>
            </Flex>
            <Flex gap="4">
              <Button
                fontSize={'14'}
                px="8"
                color="white"
                bg="#E6B242"
                borderRadius={'0'}
                fontWeight={'400'}
              >
                BOOK NOW
              </Button>
              <Button
                fontSize={'14'}
                px="8"
                color="white"
                bg="#E6B242"
                borderRadius={'0'}
                fontWeight={'400'}
              >
                CONTACT US
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <AspectRatio mt="16" borderRadius={'12px'} ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>
    </Box>
  );
};
