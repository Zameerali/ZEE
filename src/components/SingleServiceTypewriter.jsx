import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const SingleServiceTypewriter = ({ service, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start after initial delay
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const targetText = service.full;
    let timeout;

    if (isTyping) {
      // Typing animation
      if (charIndex < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80); // Typing speed
      } else {
        // Finished typing, stop
        setIsTyping(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [hasStarted, isTyping, charIndex, service.full]);

  return (
    <Box sx={{ mb: 6, textAlign: 'center' }}>
      {/* Simple heading with abbreviation */}
      <Typography
        variant="h4"
        sx={{
          color: '#00F0FF',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', md: '1.8rem' },
          mb: 2,
        }}
      >
        {service.abbreviation} = {displayText}
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ 
              marginLeft: '2px',
              color: '#00F0FF',
            }}
          >
            |
          </motion.span>
        )}
      </Typography>

      {/* Description appears after typing is complete */}
      {!isTyping && displayText === service.full && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {service.description}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default SingleServiceTypewriter;
