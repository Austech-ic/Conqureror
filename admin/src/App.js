import './App.css';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from './routes/DashboardRoutes';
import { Sigin } from './pages/sign-in/Sigin';
import { SettingsRoutes } from './routes/SettingsRoutes';

function App() {
  return (
    <Box className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Sigin />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="/settings/*" element={<SettingsRoutes />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
