import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/project.png';
import RealEstate3 from '../../assets/images/Frame 75 (2).png';
import { Link } from 'react-router-dom';
import RealEstate1 from '../../assets/images/Frame 75.png';
import RealEstate2 from '../../assets/images/Frame 75 (1).png';
import { IoMdTime } from 'react-icons/io';
export const BlogDetails = () => {
  const RecentPost = ({}) => {
    return (
      <Flex h="40" borderRadius={'12px'} border="1px solid #F5F5F5">
        <Box h="full">
          <Image
            w="44"
            h="full"
            borderLeftRadius={'12px'}
            src={RealEstate3}
            objectFit={'cover'}
          />
        </Box>
        <Box py="4" px="5" textAlign={'left'}>
          <Flex alignItems={'center'} justifyContent={'left'} gap="1">
            <IoMdTime color={'#8C8C8C'} />
            <Text fontSize={'14px'} color={'#8C8C8C'}>
              4 min read
            </Text>
          </Flex>
          <Text
            mt="3"
            fontWeight={'400'}
            fontFamily={'Rozha One'}
            lineHeight={'25.56px'}
            fontSize={'18px'}
          >
            Real estate, the next level power house
          </Text>

          <Link>
            <Text fontWeight="400" mt="6" fontSize={'16px'} color={'#E6B242'}>
              Read More.
            </Text>
          </Link>
        </Box>
      </Flex>
    );
  };
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
            Real estate, the next level power house
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
      <Box px="40" py="20">
        <Flex gap="10">
          <Box w="2xl">
            <Box boxShadow={'lg'} h="sm" w="full" bg="red">
              <Image objectFit={'cover'} w="full" h="full" src={RealEstate1} />
            </Box>
            <Box textAlign={'left'}>
              <Text
                py="3"
                color="#E6B242"
                fontFamily={'Rozha One'}
                fontSize={'24'}
              >
                Real estate, the next level power house
              </Text>
              <Text>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus
                <br></br>
                <br></br>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus
                <br></br>
                <br></br>
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus
              </Text>
            </Box>
          </Box>
          <Box>
            <Text
              pb="5"
              h="fit-content"
              pt="0"
              textAlign={'left'}
              fontSize={'24'}
            >
              Recent Post
            </Text>

            <Flex flexDirection={'column'} gap="5">
              <RecentPost />
              <RecentPost />
              <RecentPost />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
