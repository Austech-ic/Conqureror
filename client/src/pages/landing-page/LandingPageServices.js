import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import { GrUserWorker } from 'react-icons/gr';
import { GoChevronDown, GoProjectSymlink } from 'react-icons/go';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdDesignServices } from 'react-icons/md';
export const LandingPageServices = () => {
  const ServiceButton = ({ icon, title }) => {
    return (
      <Button
        px="2"
        py="5"
        size="xl"
        width={['auto', 'full']}
        justifyContent="flex-start"
        borderRadius={'6px'}
        flexGrow={'1'}
        bg="white"
        leftIcon={icon}
        fontWeight={'400'}
        fontSize={['14', '20']}
      >
        {' '}
        {title}
      </Button>
    );
  };
  return (
    <Box px={['5', '40']} py="20" bg="#F3F4FF" h={['auto', 'auto']}>
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#282828"
        fontSize={['28', '36px']}
        pl="2"
      >
        Our{' '}
        <Text color="#E6B242" as="span">
          Services{' '}
        </Text>
      </Heading>
      <Text fontSize={['16', '24px']} textAlign={'left'} mt="3">
        Our comprehensive services include:
      </Text>

      <SimpleGrid
        columns={[1, 2]}
        flexDirection={['column', 'row']}
        rowGap={'5'}
        columnGap={'7'}
        mt="10"
      >
        <ServiceButton
          title="Builder & Civil Engineers"
          icon={<BsFillHouseFill color="#E6B242" size={'24'} />}
        />

        <Menu>
          <MenuButton
            textAlign={'left'}
            px="2"
            py="5"
            size="xl"
            width={['auto', 'full']}
            justifyContent="flex-start"
            borderRadius={'6px'}
            flexGrow={'1'}
            bg="white"
            color="black"
            as={Button}
            rightIcon={<GoChevronDown />}
            leftIcon={<GrUserWorker color="#E6B242" size="24" />}
            fontWeight={'400'}
            fontSize={['14', '20']}
          >
            {' '}
            Real Estate
          </MenuButton>
          <MenuList w={['xs', 'sm']} py="0">
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={['500']}>
                Consultancy
              </Text>{' '}
            </MenuItem>
            <MenuDivider my="0" />
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={'500'}>
                Marketing
              </Text>
            </MenuItem>
            <MenuDivider my="0" />
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={['500']}>
                Development
              </Text>
            </MenuItem>
            <MenuDivider my="0" />
            <MenuItem gap="2" as="a" href="#">
              <IoIosCheckmarkCircleOutline color="#E6B242" size={['24']} />
              <Text fontSize={'sm'} fontWeight={['500']}>
                Management
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
        <ServiceButton
          title="Property Sales and Leasing"
          icon={<BsFillHouseFill color="#E6B242" size={'24'} />}
        />

        <ServiceButton
          title="Real Estate Investment Advisory"
          icon={<BsFillHouseFill color="#E6B242" size={'24'} />}
        />
        <ServiceButton
          title="Property Valuation and Appraisal
"
          icon={<BsFillHouseFill color="#E6B242" size={'24'} />}
        />
        <ServiceButton
          title="Architectural Design and Planning
"
          icon={<MdDesignServices color="#E6B242" size={'24'} />}
        />
        <ServiceButton
          title="Project Management and Supervision"
          icon={<GoProjectSymlink color="#E6B242" size={'24'} />}
        />
      </SimpleGrid>
    </Box>
  );
};
