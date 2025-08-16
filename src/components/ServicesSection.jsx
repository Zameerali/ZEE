import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import IntenseCompetition from '../assets/Competition.jpg';
import CustomerExperience from '../assets/Experience.jpg';
import OperationalBottlenecks from '../assets/Operational_Bottlenecks.jpg';
import SalesPressure from '../assets/Sales_Pressure.webp';
import Staff_Performance from '../assets/Staff_Performance.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const challenges = [
    {
      title: 'Intense Competition',
      description: 'Struggling to stay ahead in a crowded market',
      image: IntenseCompetition,
      imageAlt: 'Intense Competition',
    },
    {
      title: 'Customer Experience Gaps',
      description: 'Difficulty providing consistent quality service',
      image: CustomerExperience,
      imageAlt: 'Customer Experience Gaps',
    },
    {
      title: 'Operational Bottlenecks',
      description: 'Inefficient processes slowing down your business',
      image: OperationalBottlenecks,
      imageAlt: 'Operational Bottlenecks',
    },
    {
      title: 'Sales & Profitability Pressures',
      description: 'Revenue targets becoming harder to achieve',
      image: SalesPressure,
      imageAlt: 'Sales & Profitability Pressures',
    },
    {
      title: 'Employee Performance Management',
      description: 'Ensuring your team is engaged and productive',
      image: Staff_Performance,
      imageAlt: 'Employee Performance Management',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        '@media (min-height: 1200px)': { py: { xs: 4, sm: 6, md: 8 } },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 6, md: 8 },
              '@media (min-height: 1200px)': { mb: { xs: 4, md: 6 } },
            }}
          >
            {/* <Chip
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
            /> */}

            <Typography
              variant="h1"
              sx={{
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.2,
                mb: 3,
                fontWeight: 600,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
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
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
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
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 3, md: 4 },
                  maxWidth: { lg: 1600 },
                  mx: 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                    style={{ flex: '0 0 auto', maxWidth: { xs: 280, sm: 320, md: 400 }, minWidth: 0 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 0,
                        maxWidth: { xs: 280, sm: 320, md: 400 },
                        mx: 'auto',
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        height: '100%',
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
                      {/* Image area */}
                      <Box
                        sx={{
                          width: '100%',
                          paddingTop: '56.25%', // 16:9 aspect ratio
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          background: 'linear-gradient(135deg, #007BFF 0%, #005BFF 100%)',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={challenge.image}
                          alt={challenge.imageAlt}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          px: { xs: 3, md: 4 },
                          pb: { xs: 4, md: 5 },
                          flex: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            fontSize: { xs: '1.35rem', md: '1.55rem' },
                            lineHeight: 1.2,
                            color: '#FFFFFF',
                            minHeight: { xs: '2.5rem', md: '3rem' },
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
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            fontWeight: 500,
                            textAlign: 'center',
                            flexGrow: 1,
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