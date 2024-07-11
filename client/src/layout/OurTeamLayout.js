import { Box } from '@chakra-ui/react';
import React from 'react';
import TopNavbar from '../components/navigation/TopNavbar';
import { Footer } from '../components/footer/Footer';
import { OurTeam } from '../pages/our_team/OurTeam';

export const OurTeamLayout = () => {
  return (
    <Box>
      <TopNavbar />
      <OurTeam />
      <Footer />
    </Box>
  );
};
