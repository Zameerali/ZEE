import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ARKThemeProvider } from './theme/ThemeProvider';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import JoinOurTeam from './pages/Join';

function App() {
  return (
    <ARKThemeProvider>
      <Router>
        <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/join" element={<JoinOurTeam />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ARKThemeProvider>
  );
}

export default App;
