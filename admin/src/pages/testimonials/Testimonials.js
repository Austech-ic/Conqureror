import {
  Box,
  Button,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Image1 from '../../assets/images/Frame 1000002389.png';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { MdOutlineVisibility } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import { CreateTestimonialModal } from '../../components/modal/CreateTestimonialModal';
export const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      name: 'Dennis Charity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
      id: 2,
      image: 'path/to/image2.jpg',
      name: 'Alex Johnson',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet.',
    },
    // Add more entries as needed
  ];

  return (
    <Box>
      <Flex fontFamily={'Inter'} justifyContent={'space-between'}>
        <Text fontWeight={'500'} textAlign={'left'} fontSize="24">
          Testimonials
        </Text>
        <CreateTestimonialModal />
      </Flex>
      <Box mt="5" bg="white">
        <TableContainer>
          <Table size="sm">
            <Thead h="10">
              <Tr>
                <Th color="black" fontFamily={'Inter'}>
                  S/N
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Image
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Name
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Description
                </Th>

                <Th color="black" fontFamily={'Inter'}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => (
                <Tr fontFamily="Inter" h="14" key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>
                    <Image src={item.image} borderRadius="full" />
                  </Td>
                  <Tooltip label={item.name} hasArrow>
                    <Td
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      maxW="150px"
                      w="150px"
                    >
                      {item.name}
                    </Td>
                  </Tooltip>
                  <Tooltip label={item.description} hasArrow>
                    <Td
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      maxW="300px"
                    >
                      {item.description}
                    </Td>
                  </Tooltip>
                  <Td>
                    <Flex>
                      <TbEdit size="20" cursor="pointer" />
                      <RiDeleteBin3Line size="20" cursor="pointer" ml="2" />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
