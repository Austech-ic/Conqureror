import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  SocialButton,
  Button,
  IconButton,
  Flex,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io5';
export const TeamCard = ({ jobTitle, name, image }) => {
  return (
    <Box>
      <Box
        h="96"
        position={'relative'}
        borderRadius={'12px'}
        border="1px solid #F5F5F5"
      >
        <Box h="75%">
          <Image
            border="0"
            borderTopRadius={'12px'}
            h="full"
            w="full"
            src={image}
            objectFit={'cover'}
          />
        </Box>
        <Box h="20%" bottom="2" left="5" position="absolute" textAlign={'left'}>
          <Text fontWeight="500" fontSize={'16'} textTransform={'uppercase'}>
            {name}
          </Text>
          <Text color="#E6B242" fontWeight="500" fontSize="sm">
            {jobTitle}
          </Text>
        </Box>
      </Box>
      <Box mt="5">
        <Stack
          gap={'3'}
          justifyContent={'center'}
          direction={'row'}
          spacing={1}
        >
          <Button
            borderRadius={'full'}
            bg="none"
            boxShadow={'xl'}
            p="0"
            as={IconButton}
            icon={<AiOutlineInstagram size="28" />}
            label={'Instagram'}
            href={'#'}
          ></Button>
          <Button
            borderRadius={'full'}
            bg="none"
            boxShadow={'xl'}
            p="0"
            as={IconButton}
            icon={<MdEmail size="28" />}
            label={'Instagram'}
            href={'#'}
          ></Button>
          <Button
            borderRadius={'full'}
            bg="none"
            boxShadow={'xl'}
            p="0"
            as={IconButton}
            icon={<FaTwitter size="28" />}
            label={'Instagram'}
            href={'#'}
          ></Button>
          <Button
            borderRadius={'full'}
            bg="none"
            boxShadow={'xl'}
            p="0"
            as={IconButton}
            icon={<IoLogoFacebook size="28" />}
            label={'Instagram'}
            href={'#'}
          ></Button>
        </Stack>
      </Box>
    </Box>
  );
};
