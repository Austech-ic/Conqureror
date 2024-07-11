import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import CoverImage from '../../assets/images/project.png';
import { GiCornerFlag } from 'react-icons/gi';
import { MdOutlineBed } from 'react-icons/md';
import { LuBath } from 'react-icons/lu';
import House from '../../assets/images/ikoyi.png';
import Pagination from '../../components/pagination/Pagination';
export const Projects = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const Properties = ({ image, sqf, description, beds, baths, price }) => {
    return (
      <Box
        bg="white"
        borderRadius={'6px'}
        w="full"
        border={'1px solid #F5F5F5'}
      >
        <Flex h={['auto', '60']} flexDirection={['column', 'row']}>
          <Box h={['52', '60']} w={['full', '60']}>
            <Image
              objectFit={'fill'}
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
            flexDirection={'column'}
            px="3"
            pt="4"
          >
            <Text fontWeight="500" fontSize="16" textAlign={'left'}>
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
              <Flex gap="1">
                <MdOutlineBed size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'12'}>
                  {beds}
                </Text>
              </Flex>
              <Flex gap="1">
                <LuBath size="20" color="#E6B242" />
                <Text color="#282828" fontSize={'12'}>
                  {baths}
                </Text>
              </Flex>
            </Flex>
            <Divider />

            <Box position={'absolute'} left="5" bottom="4" textAlign={'left'}>
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
            Project
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

        <Box
          position={'absolute'}
          display={['none', 'block']}
          bottom="-60"
          bg="white"
          w="6xl"
          left="50%"
          boxShadow={'2xl'}
          borderRadius="12px"
          transform="translate(-50%, -50%)"
          h="60"
        >
          <Flex justifyContent={'space-between'} p="10" gap="16">
            <FormControl>
              <FormLabel fontSize="xl">Search:</FormLabel>
              <Input
                border="0"
                bg="#F6F6F6FB"
                borderRadius="0"
                _placeholder={{ fontSize: 'sm' }}
                placeholder="Search for property"
              />
              <Button
                justifyContent={'left'}
                display="flex"
                fontSize="sm"
                mt="5"
                px="20"
                w="fit-content"
                borderRadius={'0'}
                bg="#E6B242"
                color="white"
              >
                Search
              </Button>
            </FormControl>

            <FormControl>
              <FormLabel fontSize="xl">Select Categories:</FormLabel>
              <Select
                border="0"
                bg="#F6F6F6FB"
                borderRadius="0"
                _placeholder={{ fontSize: 'sm' }}
                placeholder="House"
                fontSize="sm"
                color={'#909090'}
              >
                <option></option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="xl">Price Range: </FormLabel>
              <Select
                border="0"
                bg="#F6F6F6FB"
                borderRadius="0"
                _placeholder={{ fontSize: 'sm' }}
                placeholder="House"
                fontSize="sm"
                color={'#909090'}
              >
                <option></option>
              </Select>
            </FormControl>
          </Flex>
        </Box>
      </Box>
      <Box
        display={['block', 'none']}
        bg="white"
        w={['auto', '6xl']}
        m="5"
        boxShadow={'2xl'}
        borderRadius="12px"
        h={'auto'}
      >
        <Flex
          flexDirection={['column', 'row']}
          justifyContent={'space-between'}
          p="10"
          gap="8"
        >
          <FormControl>
            <FormLabel fontSize="16">Search:</FormLabel>
            <Input
              border="0"
              bg="#F6F6F6FB"
              borderRadius="0"
              _placeholder={{ fontSize: 'sm' }}
              placeholder="Search for property"
            />
            <Button
              justifyContent={'left'}
              display="flex"
              fontSize="sm"
              mt="5"
              px="10"
              w="fit-content"
              borderRadius={'0'}
              bg="#E6B242"
              color="white"
            >
              Search
            </Button>
          </FormControl>

          <FormControl>
            <FormLabel fontSize="16">Select Categories:</FormLabel>
            <Select
              border="0"
              bg="#F6F6F6FB"
              borderRadius="0"
              _placeholder={{ fontSize: 'sm' }}
              placeholder="House"
              fontSize="sm"
              color={'#909090'}
            >
              <option></option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize="16">Price Range: </FormLabel>
            <Select
              border="0"
              bg="#F6F6F6FB"
              borderRadius="0"
              _placeholder={{ fontSize: 'sm' }}
              placeholder="House"
              fontSize="sm"
              color={'#909090'}
            >
              <option></option>
            </Select>
          </FormControl>
        </Flex>
      </Box>
      <Box px={['5', '40']} py={['5', '20']} position={'relative'}>
        <Center flexDirection={'column'}>
          <SimpleGrid mt="20" spacing={'10'} columns={['1', '2']}>
            <Properties
              image={CoverImage}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={CoverImage}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
            <Properties
              image={House}
              sqf={'8000sqf'}
              beds={'4 Beds'}
              baths={'4 Baths'}
              price={'₦1,200,000.00'}
              description={'A 3 Bedroom Apartment, Ikoyi, lagos, Nigeria.'}
            />
          </SimpleGrid>
          <Center mt="24">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={17}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
            />
          </Center>
        </Center>
      </Box>
    </Box>
  );
};
