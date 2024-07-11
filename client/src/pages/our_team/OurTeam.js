import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import CoverImage from '../../assets/images/project.png';
import { TeamCard } from '../../components/team-card/TeamCard';
import Team from '../../assets/images/team.png';

export const OurTeam = () => {
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
            our team
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
      <Box px={['5', '40']} py="20" h="auto">
        <Heading
          w="fit-content"
          borderLeft={'4px solid #E6B242'}
          fontFamily={'Rozha One'}
          color="#312F2F"
          pl="2"
          fontSize={['28', '36px']}
          fontWeight={'400'}
        >
          Met Our{' '}
          <Text as="span" color="#E6B242">
            Agents
          </Text>
        </Heading>
        <Text
          textAlign={'left'}
          fontWeight={'400'}
          mt={['3', '8']}
          fontSize={['18px', '22px']}
        >
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br>{' '}
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>

        <SimpleGrid spacing="14" mt="20" columns={['1', '3']}>
          <TeamCard
            image={Team}
            name="ARCH. MICHAEL OYEDEPOP"
            jobTitle={'Architect'}
          />
          <TeamCard
            image={Team}
            name="ARCH. MICHAEL OYEDEPOP"
            jobTitle={'Architect'}
          />
          <TeamCard
            image={Team}
            name="ARCH. MICHAEL OYEDEPOP"
            jobTitle={'Architect'}
          />
          <TeamCard
            image={Team}
            name="ARCH. MICHAEL OYEDEPOP"
            jobTitle={'Architect'}
          />
          <TeamCard
            image={Team}
            name="ARCH. MICHAEL OYEDEPOP"
            jobTitle={'Architect'}
          />
          <TeamCard
            image={Team}
            name="ARCH. MICHAEL OYEDEPOP"
            jobTitle={'Architect'}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};
