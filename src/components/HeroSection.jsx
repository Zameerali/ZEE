import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  TrendingUp,
  Store,
  Analytics,
  Speed,
  Security,
  Support,
  ArrowForward,
  PlayArrow,
  Business,
  Assessment,
  CloudSync,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedServices from './AnimatedServices';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const features = [
    {
      icon: <Store />,
      title: 'Virtual Retail Operations',
      subtitle: 'VRO - Manage Any Store, From Anywhere',
      description: 'Complete remote management system that combines data-driven insights with real-time operational control for telecom and retail businesses.',
    },
    {
      icon: <Business />,
      title: 'Virtual Sales Consultants',
      subtitle: 'VSC - AI-Powered Sales Excellence',
      description: 'Advanced sales support system with remote team management and performance optimization to maximize sales across all locations.',
    },
    {
      icon: <Assessment />,
      title: 'Smart Performance Tracking',
      subtitle: 'SRP - Real-time Analytics Dashboard',
      description: 'Comprehensive performance tracking with data-driven insights, predictive analytics, and streamlined operations management.',
    },
  ];

  const stats = [
    { number: '300+', label: 'Retail Partners', icon: <Store /> },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp /> },
    { number: '24/7', label: 'Support', icon: <Support /> },
    { number: '99.9%', label: 'Uptime', icon: <Security /> },
  ];

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.main} 0%, 
          ${theme.palette.secondary.main} 50%, 
          ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3Ccircle cx='30' cy='30' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ minHeight: { md: '85vh' } }}>
          {/* Hero Content */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Chip
                  label="Transforming Retail Excellence"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    fontWeight: 600,
                    mb: { xs: 3, md: 4 },
                    backdropFilter: 'blur(10px)',
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    height: { xs: 32, md: 36 },
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  mb: { xs: 2, md: 3 },
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: { xs: 1.1, md: 1.05 },
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
              >
                Smart Virtual Management for Your Retail Business
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: { xs: 2, md: 3 },
                  color: '#00F0FF',
                  fontWeight: 600,
                  fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem', lg: '2rem' },
                  lineHeight: 1.3,
                  textShadow: '0 2px 8px rgba(255, 98, 0, 0.3)',
                }}
              >
                Manage Any Store, From Anywhere
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: { xs: 4, md: 5 },
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem', lg: '1.4rem' },
                  maxWidth: { lg: '95%' },
                  textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }}
              >
                We combine data-driven insights, remote team management, and real-time performance 
                tracking to help telecom and retail businesses maximize sales and streamline operations.
              </Typography>

              {/* Animated Services - Right below the description */}
              <Box sx={{ mb: { xs: 4, md: 5 } }}>
                <AnimatedServices />
              </Box>

              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                mb: { xs: 4, md: 5 },
              }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => {
                      navigate('/solutions');
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    sx={{
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(169, 255, 79, 0.9)' 
                        : theme.palette.primary.main,
                      color: theme.palette.mode === 'dark' 
                        ? '#0D0F1C' 
                        : 'white',
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      borderRadius: 3,
                      fontWeight: 600,
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(169, 255, 79, 0.2)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1)',
                      minWidth: { xs: 'auto', sm: 180 },
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(169, 255, 79, 1)' 
                          : theme.palette.primary.dark,
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 12px 40px rgba(169, 255, 79, 0.3)'
                          : `0 12px 40px ${theme.palette.primary.main}40`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
