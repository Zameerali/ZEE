import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  TrendingUp,
  Store,
  Support,
  Security,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedServices from './AnimatedServices';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.main} 0%, 
          ${theme.palette.secondary.main} 50%, 
          ${theme.palette.primary.dark} 100%)`,
        color: '#FFFFFF',
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
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: { md: '85vh' } }}
        >
          {/* Hero Content */}
          <Grid item xs={12} md={10} lg={8} sx={{ mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    color: '#FFFFFF',
                    fontWeight: 600,
                    mb: { xs: 3, md: 4 },
                    backdropFilter: 'blur(10px)',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    height: { xs: 32, md: 36 },
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  mb: { xs: 2, md: 3 },
                  fontWeight: 600,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' },
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
              >
                Smart Virtual Management for Your Retail Business
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  mb: { xs: 2, md: 3 },
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                  color: '#007BFF',
                  textAlign: 'center',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                Manage Any Store, From Anywhere
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: { xs: '100%', md: 900 },
                  mx: 'auto',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: '#E0E0E0',
                  mb: 6,
                  px: { xs: 2, md: 0 },
                  textAlign: 'center',
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
                      backgroundColor: '#007BFF',
                      color: '#FFFFFF',
                      px: { xs: 3, md: 4 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      fontWeight: 600,
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      minWidth: { xs: 'auto', sm: 180 },
                      '&:hover': {
                        backgroundColor: '#005BFF',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
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