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
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import Image1 from '../../assets/images/Frame 1000002389.png';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { CreatePropertyModal } from '../../components/modal/CreatePropertyModal';
export const Property = () => {
  const data = [
    {
      id: 1,
      image:
        'https://unsplash.com/photos/black-and-white-wooden-table-and-chairs-wRzBarqn3hs',
      description: 'A 3 Bedroom Apartment, Ikoyi, Lagos, Nigeria.',
      amount: 7000,
      squareKilometer: 300,
    },
    {
      id: 2,
      image:
        'https://unsplash.com/photos/black-and-white-wooden-table-and-chairs-wRzBarqn3hs',
      description: 'A 4 Bedroom Duplex, Lekki, Lagos, Nigeria.',
      amount: 15000,
      squareKilometer: 450,
    },
    {
      id: 3,
      image:
        'https://unsplash.com/photos/black-and-white-wooden-table-and-chairs-wRzBarqn3hs',
      description: 'A 2 Bedroom Flat, Victoria Island, Lagos, Nigeria.',
      amount: 5000,
      squareKilometer: 200,
    },
    // Add more entries as needed
  ];

  return (
    <Box>
      <Flex fontFamily={'Inter'} justifyContent={'space-between'}>
        <Text fontWeight={'500'} textAlign={'left'} fontSize="24">
          Property
        </Text>
        <CreatePropertyModal />
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
                  Images
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Description
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Amount
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Square kilometer
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr fontFamily={'Inter'} h="14" key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Image src={item.image} alt={`Image ${index + 1}`} />
                  </Td>
                  <Td>{item.description}</Td>
                  <Td>{item.amount}</Td>
                  <Td>{item.squareKilometer}</Td>
                  <Td>
                    <Flex>
                      <TbEdit size="20" />
                      <RiDeleteBin3Line size="20" />
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
