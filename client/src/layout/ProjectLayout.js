import { Box } from '@chakra-ui/react';
import React from 'react';
import { Footer } from '../components/footer/Footer';
import TopNavbar from '../components/navigation/TopNavbar';
import { Projects } from '../pages/project-page/Projects';
export const ProjectLayout = () => {
  return (
    <Box>
      <TopNavbar />
      <Projects />
      <Footer />
    </Box>
  );
};
