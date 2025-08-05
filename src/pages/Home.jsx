import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
// import QuickAccessSection from '../components/QuickAccessSection'; // Removed - easily accessible from navbar
// import DetailedServicesSection from '../components/DetailedServicesSection'; // Removed - service descriptions not needed
// import PerformanceGraphsSection from '../components/PerformanceGraphsSection'; // Removed - graphs and performance data
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <HeroSection />
        {/* <QuickAccessSection /> */}
        {/* <DetailedServicesSection /> */}
        {/* <PerformanceGraphsSection /> */}
        <ServicesSection />
      </Box>
    </motion.div>
  );
};

export default Home;
