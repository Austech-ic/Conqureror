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
import { MdOutlineVisibility } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import { CreateTeamMemberModal } from '../../components/modal/CreateTeamMemberModal';
export const Team = () => {
  const data = [
    {
      id: 1,
      description: 'A 3 Bedroom Apartment, Ikoyi, Lagos, Nigeria.',
      date: '20 May 2024',
      daysOnMarket: 20,
      views: 50,
    },
    {
      id: 2,
      description: 'A 2 Bedroom Condo, Victoria Island, Lagos, Nigeria.',
      date: '15 June 2024',
      daysOnMarket: 30,
      views: 75,
    },
    {
      id: 3,
      description: 'A 4 Bedroom House, Lekki, Lagos, Nigeria.',
      date: '10 July 2024',
      daysOnMarket: 10,
      views: 100,
    },
    // Add more entries as needed
  ];

  return (
    <Box>
      <Flex fontFamily={'Inter'} justifyContent={'space-between'}>
        <Text fontWeight={'500'} textAlign={'left'} fontSize="24">
          Team
        </Text>
        <CreateTeamMemberModal />
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
                  First Name
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Last Name
                </Th>
                <Th color="bl{ack" fontFamily={'Inter'}>
                  Position
                </Th>
                <Th color="black" fontFamily={'Inter'}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr fontFamily="Inter" h="14">
                <Td>1</Td>
                <Td>
                  <Image src={Image1} borderRadius="full" />
                </Td>
                <Td>Dennis</Td>
                <Td>Temoye</Td>
                <Td>Software Engineer</Td>

                <Td>
                  <Flex>
                    <TbEdit size="20" cursor="pointer" />
                    <RiDeleteBin3Line size="20" cursor="pointer" ml="2" />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
