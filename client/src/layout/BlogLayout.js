import { Box } from '@chakra-ui/react';
import React from 'react';
import TopNavbar from '../components/navigation/TopNavbar';
import { Blog } from '../pages/blog/Blog';
import { Footer } from '../components/footer/Footer';

export const BlogLayout = () => {
  return (
    <Box>
      <TopNavbar />
      <Blog />
      <Footer />
    </Box>
  );
};
