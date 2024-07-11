import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layout/DashboardLayout';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { Property } from '../pages/property/Property';
import { Blog } from '../pages/blog/Blog';
import { Testimonials } from '../pages/testimonials/Testimonials';
import { Team } from '../pages/team/Team';
import { Account } from '../pages/account/Account';
import { Settings } from '../pages/settings/Settings';

export const DashboardRoutes = () => {
  return (
    <Box>
      <DashboardLayout>
        <Routes>
          <Route index exact element={<Dashboard />} />
          <Route path="/property" element={<Property />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </Box>
  );
};
