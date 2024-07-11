import { Box } from '@chakra-ui/react';
import React from 'react';
import TopNavbar from '../components/navigation/TopNavbar';
import { Footer } from '../components/footer/Footer';
import { BlogDetails } from '../pages/blog/BlogDetails';

export const BlogDetailsLayout = () => {
  return (
    <Box>
      <TopNavbar />
      <BlogDetails />
      <Footer />
    </Box>
  );
};
