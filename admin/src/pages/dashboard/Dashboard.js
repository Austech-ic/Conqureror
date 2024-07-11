import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { GoPeople } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { TbHome2, TbUsersGroup } from 'react-icons/tb';
import { ApexChart } from '../../components/dashboard-components/AreaChart';
export const Dashboard = () => {
  return (
    <Box>
      <Text fontWeight={'500'} textAlign={'left'} fontSize="24">
        Dashboard
      </Text>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent={'space-between'}
        gap="5"
        mt="5"
      >
        <VStack flexGrow={'1'} borderRadius={'8px'} w="xs" py="5" bg={'white'}>
          <Box p="2" w="fit-content" bg="#F1F1F1" borderRadius={'full'}>
            <GoPeople size="24" color="#EC3263" />
          </Box>
          <Text color="#E6B242" fontSize={'36'} fontWeight={'600'}>
            2056
          </Text>
          <Text fontSize={'16'}>Visitor</Text>
        </VStack>

        <VStack flexGrow={'1'} borderRadius={'8px'} w="xs" py="5" bg={'white'}>
          <Box p="2" w="fit-content" bg="#F1F1F1" borderRadius={'full'}>
            <IoDocumentTextOutline size="24" color="#00AEB8" />
          </Box>
          <Text color="#E6B242" fontSize={'36'} fontWeight={'600'}>
            20
          </Text>
          <Text fontSize={'16'}>Blog Post</Text>
        </VStack>

        <VStack flexGrow={'1'} borderRadius={'8px'} w="xs" py="5" bg={'white'}>
          <Box p="2" w="fit-content" bg="#F1F1F1" borderRadius={'full'}>
            <TbUsersGroup size="24" color="#32BF5A" />
          </Box>
          <Text color="#E6B242" fontSize={'36'} fontWeight={'600'}>
            5
          </Text>
          <Text fontSize={'16'}>Agents</Text>
        </VStack>

        <VStack flexGrow={'1'} borderRadius={'8px'} w="xs" py="5" bg={'white'}>
          <Box p="2" w="fit-content" bg="#F1F1F1" borderRadius={'full'}>
            <TbHome2 size="24" color="#E68742" />
          </Box>
          <Text color="#E6B242" fontSize={'36'} fontWeight={'600'}>
            30
          </Text>
          <Text fontSize={'16'}>Properties</Text>
        </VStack>
      </Flex>
      <Box>
        <ApexChart />
      </Box>
    </Box>
  );
};
