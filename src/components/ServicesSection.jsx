import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  TrendingDown,
  Person,
  Warning,
  Analytics,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const challenges = [
    {
      icon: <TrendingDown />, 
      title: 'Intense Competition',
      description: 'Struggling to stay ahead in a crowded market',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'A man sitting at a table with a chess board, representing intense competition',
    },
    {
      icon: <Person />, 
      title: 'Customer Experience Gaps',
      description: 'Difficulty providing consistent quality service',
      image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'A person holding a yellow book, representing customer experience gaps',
    },
    {
      icon: <Warning />, 
      title: 'Operational Bottlenecks',
      description: 'Inefficient processes slowing down your business',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Satellite communication connects buildings in a network, representing operational bottlenecks',
    },
    {
      icon: <Analytics />, 
      title: 'Sales & Profitability Pressures',
      description: 'Revenue targets becoming harder to achieve',
      image: 'https://images.pexels.com/photos/5466243/pexels-photo-5466243.jpeg?auto=compress&w=800&q=80',
      imageAlt: 'A person in black suit holding a pen, representing sales pressure',
    },
  ];

  return (
    <Box sx={{ 
      py: { xs: 6, sm: 8, md: 10, lg: 12 },
      '@media (min-height: 1200px)': { py: { xs: 4, sm: 6, md: 8 } },
      backgroundColor: 'background.default' 
    }}>
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            '@media (min-height: 1200px)': { mb: { xs: 4, md: 6 } }
          }}>
            <Chip
              label="Our Solutions"
              sx={{
                mb: 4,
                backgroundColor: '#007BFF',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.125rem' },
                height: { xs: 40, md: 48 },
                px: { xs: 2, md: 3 },
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                '& .MuiChip-label': { px: { xs: 2, md: 3 }, fontWeight: 600 },
                '&:hover': {
                  transform: 'translateY(-1px)',
                  backgroundColor: '#005BFF',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            />
            
            <Typography
              variant="h1"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.2,
                mb: 3,
                fontWeight: 600,
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' },
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
              }}
            >
              Find Out How This Model Can Create Value for Your Business
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 500,
              }}
            >
              Ready to revolutionize your retail operations? Our team of experts is here to guide you through 
              a personalized consultation and show you exactly how our solutions can boost your revenue, 
              streamline operations, and enhance customer satisfaction.
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  const footer = document.getElementById('footer-contact');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  backgroundColor: '#007BFF',
                  color: '#FFFFFF',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  borderRadius: 3,
                  fontWeight: 600,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    backgroundColor: '#005BFF',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderRadius: 4,
              p: { xs: 3, sm: 4, md: 6 },
              '@media (min-height: 1200px)': { p: { xs: 3, sm: 4, md: 5 } },
              color: '#FFFFFF',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3,
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 600, 
                  mb: { xs: 2, md: 3 },
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' },
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                }}
              >
                Are You Facing Challenges at Your Cellphone Retail Locations?
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.6,
                  maxWidth: 800,
                  mx: 'auto',
                  fontWeight: 500,
                  color: '#E0E0E0',
                }}
              >
                Many retail businesses struggle with the same recurring issues that impact growth and profitability.
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(auto-fit, minmax(320px, 1fr))',
                    md: 'repeat(auto-fit, minmax(400px, 1fr))',
                    lg: 'repeat(2, 1fr)',
                  },
                  gap: { xs: 3, md: 4 },
                  maxWidth: { lg: 1200 },
                  mx: 'auto',
                  mb: { xs: 3, md: 4 },
                  '@media (min-height: 1200px)': { mb: { xs: 3, md: 4 } },
                }}
              >
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 0,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        height: { xs: 340, md: 380 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                          borderColor: 'rgba(255, 255, 255, 0.25)',
                        },
                      }}
                    >
                      {/* Image area with icon badge overlay */}
                      <Box
                        sx={{
                          width: '100%',
                          height: { xs: 170, md: 200 },
                          position: 'relative',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(135deg, #007BFF 0%, #005BFF 100%)',
                        }}
                      >
                        <img
                          src={challenge.image}
                          alt={challenge.imageAlt}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.92) contrast(1.08)',
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          }}
                        />
                        <Avatar
                          sx={{
                            position: 'absolute',
                            left: 24,
                            top: 24,
                            backgroundColor: theme.palette.primary.main,
                            color: '#fff',
                            width: { xs: 56, md: 64 },
                            height: { xs: 56, md: 64 },
                            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                            border: '2px solid #fff',
                          }}
                        >
                          {React.cloneElement(challenge.icon, {
                            sx: { fontSize: { xs: 28, md: 32 } },
                          })}
                        </Avatar>
                      </Box>
                      <Box sx={{ px: { xs: 2, md: 3 }, pb: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                            mb: 1.2,
                            fontSize: { xs: '1.25rem', md: '1.45rem' },
                            lineHeight: 1.2,
                            color: '#FFFFFF',
                            minHeight: { xs: '2.2rem', md: '2.5rem' },
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {challenge.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#E0E0E0',
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            fontWeight: 500,
                            textAlign: 'center',
                          }}
                        >
                          {challenge.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

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
                    borderRadius: 3,
                    fontWeight: 600,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      backgroundColor: '#005BFF',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  We Have a Solution
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;