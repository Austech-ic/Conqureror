import { Box } from '@chakra-ui/react';
import React from 'react';
import { AboutUs } from '../pages/about_us/AboutUs';
import TopNavbar from '../components/navigation/TopNavbar';
import { Footer } from '../components/footer/Footer';

export const AboutUsLayout = () => {
  return (
    <Box>
      <TopNavbar />
      <AboutUs />
      <Footer />
    </Box>
  );
};
