import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedServices = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentService = services[currentIndex];
    const targetText = currentService.full; // Changed to animate full name instead of abbreviation

    let timeout;

    if (isTyping) {
      // Typing animation
      if (charIndex < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100); // Slightly faster typing for longer text
      } else {
        // Finished typing, wait then start backspacing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before backspacing
      }
    } else {
      // Backspacing animation
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50); // Faster backspace speed
      } else {
        // Finished backspacing, move to next service
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
          variant="h4"
          sx={{
            color: '#00F0FF',
            fontWeight: 700,
            fontSize: { xs: '1.3rem', md: '1.8rem', lg: '2.2rem' },
            fontFamily: 'monospace',
            minHeight: '2.5em',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ 
              marginLeft: '2px',
              color: '#00F0FF',
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
            variant="h6"
            sx={{
              color: '#00F0FF',
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem' },
              textAlign: 'center',
              opacity: 0.8,
            }}
          >
            ({currentService.abbreviation})
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
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
