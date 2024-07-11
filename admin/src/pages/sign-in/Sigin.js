import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../../assets/images/image 4.png';
import Logo from '../../assets/images/logo.png';
import { InputWithLabel } from '../../components/custom-Input-field/InputWithLabel';
import { useNavigate } from 'react-router-dom';

export const Sigin = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex h="100vh">
        <Image
          h="full"
          w="60%"
          objectFit={'cover'}
          overflow={'hidden'}
          src={CoverImage}
        />
        <Box w="40%">
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            h="full"
            flexDirection={'column'}
            gap="10"
          >
            <Flex alignItems={'center'}>
              <Image src={Logo} />
              <Text
                textAlign={'left'}
                fontFamily={'Montaga'}
                fontSize={'lg'}
                color={'#4E4949'}
              >
                Conquerors abode &<br></br> Properties Ltd
              </Text>
            </Flex>
            <Box w="full" px="28">
              <Text color="#434343" fontSize={'24'} fontWeight={'500'}>
                Welcome back!
              </Text>

              <Input
                _placeholder={{
                  fontSize: 'xs',
                  fontWeight: 'medium',
                  color: '#B4B4B4',
                }}
                mt="10"
                border="1px solid #B4B4B4"
                placeholder="Email"
              />
              <InputWithLabel
                mt="8"
                Border={'1px solid #B4B4B4'}
                Label={'Password'}
              />
              <Button
                onClick={() => navigate('/dashboard')}
                mt="3"
                w="full"
                bg="#E6B242"
                color="white"
              >
                Login
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
