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
import { SettingsLayout } from '../layout/SettingsLayout';
import { GeneralInformation } from '../pages/settings/sub-screens/GeneralInformation';
import { AdminAppearance } from '../pages/settings/sub-screens/AdminAppearance';
import { Cache } from '../pages/settings/sub-screens/Cache';
import { OptimizePageSpeed } from '../pages/settings/sub-screens/OptimizePageSpeed';
import { Theme } from '../pages/settings/sub-screens/Theme';
import { Datatables } from '../pages/settings/sub-screens/Datatables';
import { Newsletters } from '../pages/settings/sub-screens/Newsletters';

export const SettingsRoutes = () => {
  return (
    <Box>
      <SettingsLayout>
        <Routes>
          <Route index exact element={<GeneralInformation />} />
          <Route path="/admin-appearance" element={<AdminAppearance />} />
          <Route path="/cache" element={<Cache />} />
          <Route path="/optimize-page-speed" element={<OptimizePageSpeed />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/datatables" element={<Datatables />} />
          <Route path="/newsletters" element={<Newsletters />} />
        </Routes>
      </SettingsLayout>
    </Box>
  );
};
