import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Team from '../../assets/images/team.png';

import { TeamCard } from '../../components/team-card/TeamCard';
export const LandingPageMeetAgent = () => {
  return (
    <Box px={['5', '40']} py="20" h="auto">
      <Heading
        w="fit-content"
        borderLeft={'4px solid #E6B242'}
        fontFamily={'Rozha One'}
        color="#312F2F"
        pl="2"
        fontSize={['28', '36px']}
      >
        Met Our{' '}
        <Text as="span" color="#E6B242">
          Agents
        </Text>
      </Heading>
      <Text textAlign={'left'} fontSize={['16', '24px']} mt="3">
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc<br></br>{' '}
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </Text>

      <SimpleGrid spacing="14" mt="10" columns={['1', '3']}>
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
  );
};
