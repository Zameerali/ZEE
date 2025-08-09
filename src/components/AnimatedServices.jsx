import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedServices = () => {
  const services = [
    {
      abbreviation: 'VRO',
      full: 'Virtual Retail Operations',
      description: 'Manage any store, from anywhere with complete operational control',
    },
    {
      abbreviation: 'VSC',
      full: 'Virtual Sales Consultants',
      description: 'AI-powered sales support and customer engagement solutions',
    },
    {
      abbreviation: 'RRM',
      full: 'Remote Retail Management',
      description: 'Comprehensive remote management tools for retail excellence',
    },
    {
      abbreviation: 'SRP',
      full: 'Smart Retail Performance',
      description: 'Data-driven insights and real-time performance tracking',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentService = services[currentIndex];
    const targetText = currentService.full;

    let timeout;

    if (isTyping) {
      if (charIndex < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
      } else {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsTyping(true);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, charIndex, services]);

  const currentService = services[currentIndex];

  return (
    <Box sx={{ minHeight: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            color: '#007BFF',
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            lineHeight: 1.2,
            minHeight: '2.5em',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{
              marginLeft: '2px',
              color: '#007BFF',
              fontSize: 'inherit',
            }}
          >
            |
          </motion.span>
        </Typography>
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#007BFF',
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
              textAlign: 'center',
            }}
          >
            ({currentService.abbreviation})
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#E0E0E0',
              fontWeight: 500,
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
              textAlign: 'center',
            }}
          >
            {currentService.description}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedServices;