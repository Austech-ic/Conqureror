// Pagination.js
import React from 'react';
import {
  Button,
  ButtonGroup,
  Box,
  IconButton,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiArrowFromLeft, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({
  totalPosts,
  postsPerPage,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <SimpleGrid
      justifyContent={'center'}
      alignItems={'center'}
      columns={['5', 'auto']}
      gap="3"
    >
      <Button
        borderRadius={'full'}
        border="1px solid #F5F5F5"
        bg="none"
        color="black"
        fontSize={'sm'}
        fontWeight={'400'}
        onClick={previousPage}
        leftIcon={BiArrowFromLeft}
        w="fit-content"
      />
      {pageNumbers.map((number) => (
        <Button
          borderRadius={'full'}
          border="1px solid #F5F5F5"
          key={number}
          bg="none"
          h="9"
          w="fit-content"
          fontSize={'sm'}
          fontWeight={'400'}
          onClick={() => paginate(number)}
        >
          {number}
        </Button>
      ))}
      <Button
        borderRadius={'full'}
        border="1px solid #F5F5F5"
        bg="none"
        fontSize={'sm'}
        fontWeight={'400'}
        onClick={previousPage}
        w="fit-content"
      >
        Next
      </Button>
    </SimpleGrid>
  );
};

export default Pagination;
