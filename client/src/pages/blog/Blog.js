import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CoverImage from '../../assets/images/project.png';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RealEstate1 from '../../assets/images/Frame 75.png';
import RealEstate2 from '../../assets/images/Frame 75 (1).png';
import RealEstate3 from '../../assets/images/Frame 75 (2).png';
import { IoMdTime } from 'react-icons/io';
import Pagination from '../../components/pagination/Pagination';
export const Blog = () => {
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
  const BlogPost = ({ image, title, readTime }) => {
    return (
      <Box
        bg="white"
        w={['auto', 'xs']}
        borderRadius={'12px'}
        border="1px solid #F5F5F5"
      >
        <Box h="52">
          <Image w="full" borderTopRadius={'12px'} src={image} />
        </Box>
        <Box pb="4" pt="5" px="5" textAlign={'left'}>
          <Flex alignItems={'center'} justifyContent={'right'} gap="1">
            <IoMdTime color={'#8C8C8C'} />
            <Text fontSize={'14px'} color={'#8C8C8C'}>
              {readTime}
            </Text>
          </Flex>
          <Text
            mt="3"
            fontWeight={'400'}
            fontFamily={'Rozha One'}
            lineHeight={'25.56px'}
            fontSize={'18px'}
          >
            {title}
          </Text>

          <Divider />
          <Link>
            <Text
              borderBottom="1px solid #E6B242"
              fontWeight="400"
              mt="3"
              fontSize={'14px'}
              color={'#E6B242'}
              w="fit-content"
            >
              Read More
            </Text>
          </Link>
        </Box>
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
      <Box px={['5', '5', '5', '5', '40']} py="20">
        <SimpleGrid spacing={'10'} columns={[1, 2, 2, 3]}>
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate1}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate3}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate1}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate1}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate3}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate2}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate3}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate1}
          />
          <BlogPost
            title="Real estate, the next level power house"
            readTime={'4mins read'}
            image={RealEstate1}
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
      </Box>
    </Box>
  );
};
