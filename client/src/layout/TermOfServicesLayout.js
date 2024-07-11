import { Box } from '@chakra-ui/react';
import React from 'react';
import TopNavbar from '../components/navigation/TopNavbar';
import { TermsOfServices } from '../pages/terms_of_services/TermsOfServices';
import { Footer } from '../components/footer/Footer';

export const TermOfServicesLayout = () => {
  return (
    <Box>
      <TopNavbar />
      <TermsOfServices />
      <Footer />
    </Box>
  );
};
