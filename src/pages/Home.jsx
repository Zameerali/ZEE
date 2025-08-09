import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
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
        <ServicesSection />
      </Box>
    </motion.div>
  );
};

export default Home;