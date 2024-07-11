import { Box } from '@chakra-ui/react';
import React from 'react';
import TopNavbar from '../components/navigation/TopNavbar';
import { Footer } from '../components/footer/Footer';
import { LandingPageHome } from '../pages/landing-page/LandingPageHome';
import { LandingPageAboutUs } from '../pages/landing-page/LandingPageAboutUs';
import { LandingPageServices } from '../pages/landing-page/LandingPageServices';
import { LandingPageListingCategories } from '../pages/landing-page/LandingPageListingCategories';
import { LandingPageFeaturedProperties } from '../pages/landing-page/LandingPageFeaturedProperties';
import { LandingPageMeetAgent } from '../pages/landing-page/LandingPageMeetAgent';
import { LandingPageTestimonials } from '../pages/landing-page/LandingPageTestimonials';

export const HomeLayout = ({ children }) => {
  return (
    <Box>
      <TopNavbar />
      <LandingPageHome />
      <LandingPageAboutUs />
      <LandingPageServices />
      <LandingPageListingCategories />
      <LandingPageFeaturedProperties />
      <LandingPageMeetAgent />
      <LandingPageTestimonials />
      <Footer />
    </Box>
  );
};
