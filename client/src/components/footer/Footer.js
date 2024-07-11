'use client';

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  Button,
  Input,
  Divider,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from 'react-icons/fa';
import Mail from '../../assets/images/ion_mail-outline.png';
import { CiFacebook } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { IoLogoFacebook } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box bg="#252B36" color={'white'} mt="20" position={'relative'}>
      <Box
        top="-24"
        left={['', '', '', '0%', '12%']}
        h={['auto', 'auto', '56', '40']}
        w={['auto', 'auto', 'auto', 'auto', '5xl']}
        position={['auto', 'auto', 'auto', 'absolute']}
        pt="10"
        px="5"
      >
        <Box
          py="5"
          borderRadius={'24px'}
          bg="#FCFCFC"
          boxShadow={'2xl'}
          position="relative"
          h="100%"
        >
          <Image src={Mail} position={'absolute'} top="0" left="0" />
          <Flex
            flexDirection={['column', 'row']}
            h="100%"
            px={['5', '5', '10', '40']}
            gap={['5', '5', '10', '5']}
            alignItems={'center'}
          >
            <Box flexGrow={'1'} textAlign={'left'} color="black">
              <Text fontWeight={'500'} fontSize={['16px', '20px']}>
                Subscribe to Newsletter!
              </Text>
              <Text color="#878787" fontSize={['14px', '', '', '12px', '20px']}>
                Subscribe to get latest update and information
              </Text>
            </Box>
            <Flex
              display={['none', 'none', 'none', 'flex']}
              flexGrow={'1'}
              border={'1px solid #DCE1E7'}
              borderRadius={'80px'}
              px="7"
              py="3"
              bg="#FFFFFF"
            >
              <Input
                border="0"
                placeholder="enter your email address"
                outline={'0'}
                _active={{ outline: '0', border: '0' }}
              />
              <Button
                px="14"
                py="2"
                fontWeight={'400'}
                bg="#E6B242"
                color="white"
                borderRadius={'24px'}
              >
                Send
              </Button>
            </Flex>
            <Flex
              w="full"
              display={['flex', 'flex', 'flex', 'none']}
              flexGrow={'1'}
              flexDirection={['column', 'row']}
              borderRadius={'80px'}
              py="3"
              bg="#FFFFFF"
              gap="3"
            >
              <Input
                border={'1px solid #DCE1E7'}
                borderRadius={'40px'}
                placeholder="Enter your email address"
                outline={'0'}
                _active={{ outline: '0', border: '0' }}
              />
              <Button
                px="5"
                py="2"
                w="fit-content"
                fontWeight={'400'}
                bg="#E6B242"
                color="white"
                borderRadius={'18px'}
              >
                Send
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Container as={Stack} maxW={'6xl'} pt={['10', '32']} pb={10}>
        <Flex
          gap={{ base: '10', md: 'auto' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <Flex fontSize={'sm'} textAlign={'left'} flexDirection={'column'}>
            <Box mt="10" as="a" href={'#'}>
              <Text fontSize={'sm'} lineHeight={'25px'}>
                Trusted, Reliable REAL ESTATE<br></br>Company In Nigeria.
                <br></br>Providing Quality and affordable<br></br> Shelter for
                many people within<br></br> Abuja, Lagos, PortHarcourt, Enugu
              </Text>
            </Box>
            <Flex gap="3" pt="5">
              <AiOutlineInstagram color="#FFFFFF" size={24} />
              <MdEmail color="#FFFFFF" size={24} />
              <FaTwitter color="#FFFFFF" size={24} />
              <IoLogoFacebook color="#FFFFFF" size={24} />
            </Flex>
          </Flex>
          <Flex
            gap={{ base: '10', md: '20' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Flex
              fontSize={'sm'}
              gap="3"
              textAlign={'left'}
              flexDirection={'column'}
            >
              <Text
                mb="1"
                fontSize="16px"
                textTransform={'uppercase'}
                fontWeight={'400'}
              >
                Quick Link
              </Text>
              <Link to={'/'}>Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/">Service</Link>
              <Link to="/contact">Contact</Link>
            </Flex>
            <Flex
              fontSize={'sm'}
              gap="3"
              textAlign={'left'}
              flexDirection={'column'}
            >
              <Text
                mb="1"
                fontSize="16px"
                textTransform={'uppercase'}
                fontWeight={'400'}
              >
                INFORMATION
              </Text>
              <Link to="/terms-of-services">Terms of Use</Link>
              <Link to="#">Privacy Policy</Link>
              <Box as="a" href={'#'}>
                Return & Refund Policy
              </Box>
              <Box as="a" href={'#'}>
                Contact
              </Box>
            </Flex>
            <Flex
              fontSize={'sm'}
              gap="3"
              textAlign={'left'}
              flexDirection={'column'}
            >
              <Text
                mb="1"
                fontSize="16px"
                textTransform={'uppercase'}
                fontWeight={'400'}
              >
                Contact Us
              </Text>
              <Box as="a" href={'#'}>
                Conquerorsabode2024@gmail.com
              </Box>
              <Box as="a" href={'#'}>
                08123831687
              </Box>
              <Box as="a" href={'#'}>
                08131137978
              </Box>
              <Box as="a" href={'#'}>
                Suite 103, Copper House, No 4<br></br> Algiers Street Wuse Zone
                5<br></br> Abuja Nigeria , Abuja, Nigeria
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Box py={2} borderTop="1px solid #494949">
        <Text pb="3" fontSize={'sm'} textAlign={'center'}>
          Copyright © 2024 Conqueroros
        </Text>
      </Box>
    </Box>
  );
};
