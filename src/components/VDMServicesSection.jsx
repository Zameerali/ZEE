import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import SingleServiceTypewriter from './SingleServiceTypewriter';

const VDMServicesSection = () => {
  const services = [
    {
      abbreviation: 'VRO',
      full: 'Virtual Retail Operations',
      description: 'Manage any store, from anywhere with complete operational control'
    },
    {
      abbreviation: 'VSC',
      full: 'Virtual Sales Consultants',
      description: 'AI-powered sales support and customer engagement solutions'
    },
    {
      abbreviation: 'RRM',
      full: 'Remote Retail Management',
      description: 'Comprehensive remote management tools for retail excellence'
    },
    {
      abbreviation: 'SRP',
      full: 'Smart Retail Performance',
      description: 'Data-driven insights and real-time performance tracking'
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                color: 'text.primary',
              }}
            >
              What is{' '}
              <span style={{ color: '#00F0FF' }}>VDM</span>?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              VDM represents our four core digital solutions that work together to transform retail operations
            </Typography>
          </Box>
        </motion.div>

        {/* Services - Direct list below heading */}
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {services.map((service, index) => (
            <SingleServiceTypewriter 
              key={service.abbreviation}
              service={service} 
              delay={index * 600} // Stagger the animations
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default VDMServicesSection;
