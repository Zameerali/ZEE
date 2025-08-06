import React from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme as useARKTheme } from '../theme/ThemeProvider';
import logo from '../assets/ZEELogo.png';

const LoadingScreen = () => {
  const theme = useTheme();
  const { mode } = useARKTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        color: 'white',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            p: 6,
            mb: 3,
            backdropFilter: 'blur(10px)',
            width: 180,
            height: 180,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="ZEE-KRAZE Consultants Logo"
            sx={{
              height: 120,
              width: 'auto',
              maxWidth: 120,
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 0.1px rgba(0, 0, 0, 0.7))',
            }}
          />
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          ZEE-KRAZE Consultants
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8, mb: 4, textAlign: 'center' }}>
          Loading your retail transformation experience...
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <CircularProgress
          sx={{
            color: '#00F0FF',
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
          size={50}
          thickness={4}
        />
      </motion.div>
    </Box>
  );
};

export default LoadingScreen;
