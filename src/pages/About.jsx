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
import IntenseCompetition from '../assets/Intense_Competition.jpg';
import CustomerExperience from '../assets/Customer_Experience.jpg';
import OperationalBottlenecks from '../assets/Operational_Bottlenecks.jpg';
import SalesPressure from '../assets/Sales_Pressure.webp';
import Staff_Performance from '../assets/Staff_Performance.jpg';

import OurVision from '../assets/Our_Vision.webp';
import WhatWeDo from '../assets/What_We_Do.webp'
import IndustryExpertise from '../assets/Industry_Expertise.jpg'
import MeasurebaleResults from '../assets/Measurable_Results.webp'
import LongTermPartnership from '../assets/Long_term_Partnership (2).webp'
import TailoredSolutions from '../assets/Tailored_Solutions.webp'; 
import training from '../assets/training.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const whyChooseUs = [
    {
      title: 'Industry Expertise',
      description: 'Our team comprises seasoned professionals with deep knowledge of the wireless telecom retail sector.',
      color: '#15357A',
      image: IndustryExpertise,
      imageAlt: 'Industry Expertise',
    },
    {
      title: 'Tailored Solutions',
      description: 'We don’t believe in one-size-fits-all. Our programs are customized to your specific business needs and goals.',
      color: '#007BFF',
      image: TailoredSolutions,
      imageAlt: 'Tailored Solutions',
    },
    {
      title: 'Practical & Engaging Training',
      description: 'Our methods are interactive, hands-on, and designed for immediate application in a retail setting.',
      color: '#1A1A1A',
      image: training,
      imageAlt: 'Practical Training',
    },
    {
      title: 'Measurable Results',
      description: 'We focus on delivering tangible improvements in sales, customer satisfaction, and operational efficiency.',
      color: '#2E7D32',
      image: MeasurebaleResults,
      imageAlt: 'Measurable Results',
    },
    {
      title: 'Long-Term Partnership',
      description: 'We’re committed to your ongoing success, offering continued support and strategic advice.',
      color: '#D81B60',
      image: LongTermPartnership,
      imageAlt: 'Long-Term Partnership',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        {/* Hero Section */}
        <Container maxWidth="xl" sx={{ mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Chip
                label="Our Virtual Space"
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
                  mb: 2,
                  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Virtual Business Solutions Partner
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 500,
                  px: { xs: 2, md: 0 },
                }}
              >
                We are a virtual business solutions partner committed to transforming how companies manage performance and sales. From retail operations to enterprise training, we deliver smarter strategies that empower teams, improve efficiency, and drive sustainable growth.
              </Typography>
            </Box>
          </motion.div>
        </Container>

        {/* Vision & What We Do */}
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 3, md: 4 },
              mb: { xs: 4, md: 6 },
              maxWidth: { lg: 1200 },
              mx: 'auto',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 0,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#F9F9F9',
                  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#F0F0F0',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Image area */}
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    position: 'relative',
                    background: 'linear-gradient(135deg, #007BFF 0%, #005BFF 100%)',
                  }}
                >
                  <img
                    src={OurVision}
                    alt="Our Vision"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                </Box>
                <Box sx={{
                  px: { xs: 3, md: 4 },
                  pb: { xs: 4, md: 5 },
                  flex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.45rem' },
                      lineHeight: 1.2,
                      color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                      minHeight: { xs: '2.5rem', md: '3rem' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                      lineHeight: 1.6,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      fontWeight: 500,
                      textAlign: 'center',
                      flexGrow: 1,
                    }}
                  >
                    Our vision is to transform the way businesses manage performance and sales by leveraging innovative virtual solutions. We aim to create a future where every retail store and enterprise team operates at its full potential—driving growth, improving customer experiences, and building long-term success.
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: 0,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#F9F9F9',
                  border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#F0F0F0',
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Image area */}
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    position: 'relative',
                    background: 'linear-gradient(135deg, #007BFF 0%, #005BFF 100%)',
                  }}
                >
                  <img
                    src={WhatWeDo}
                    alt="What We Do"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                </Box>
                <Box sx={{
                  px: { xs: 3, md: 4 },
                  pb: { xs: 4, md: 5 },
                  flex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '1.25rem', md: '1.45rem' },
                      lineHeight: 1.2,
                      color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                      minHeight: { xs: '2.5rem', md: '3rem' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    What We Do
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                      lineHeight: 1.6,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      fontWeight: 500,
                      textAlign: 'center',
                      flexGrow: 1,
                    }}
                  >
                    We offer a comprehensive suite of services designed specifically to address the unique needs of cellphone retail businesses. Our solutions combine cutting-edge technology with practical training methodologies to deliver measurable results.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Container>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              borderRadius: 3,
              p: { xs: 3, sm: 4, md: 5 },
              color: '#FFFFFF',
              textAlign: 'center',
              mx: { xs: 2, sm: 3 },
              my: { xs: 4, md: 6 },
            }}
          >
            <Container maxWidth="xl">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  color: '#FFFFFF',
                }}
              >
                Why Choose ZEE-KRAZE?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.6,
                  fontWeight: 500,
                  maxWidth: 700,
                  mx: 'auto',
                  color: '#E0E0E0',
                }}
              >
                We deliver comprehensive solutions designed for your success.
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
                  justifyContent: 'center',
                }}
              >
                {whyChooseUs.map((reason, index) => {
                  const isLast = whyChooseUs.length % 2 !== 0 && index === whyChooseUs.length - 1;
                  const cardContent = (
                    <motion.div
                      key={reason.title}
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
                            background: 'linear-gradient(135deg, #007BFF 0%, #005BFF 100%)',
                          }}
                        >
                          <img
                            src={reason.image}
                            alt={reason.imageAlt}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            }}
                          />
                        </Box>
                        <Box sx={{
                          px: { xs: 3, md: 4 },
                          pb: { xs: 4, md: 5 },
                          flex: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 600,
                              mb: 1.5,
                              fontSize: { xs: '1.25rem', md: '1.45rem' },
                              lineHeight: 1.2,
                              color: '#FFFFFF',
                              minHeight: { xs: '2.5rem', md: '3rem' },
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {reason.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#E0E0E0',
                              lineHeight: 1.6,
                              fontSize: { xs: '1rem', md: '1.125rem' },
                              fontWeight: 500,
                              textAlign: 'center',
                              flexGrow: 1,
                            }}
                          >
                            {reason.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  );

                  if (isLast) {
                    return (
                      <Box
                        key={reason.title}
                        sx={{
                          gridColumn: { lg: '1 / span 2' },
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Box sx={{ flex: 1, maxWidth: { lg: '50%' } }}>
                          {cardContent}
                        </Box>
                      </Box>
                    );
                  }
                  return cardContent;
                })}
              </Box>
            </Container>
          </Box>
        </motion.div>

        {/* Ready to Transform Your Business */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: '#FFFFFF',
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    color: '#FFFFFF',
                  }}
                >
                  ZEE-KRAZE can Transform Your Business
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.6,
                    fontWeight: 500,
                    maxWidth: 700,
                    mx: 'auto',
                    color: '#E0E0E0',
                  }}
                >
                  Join hundreds of successful businesses that have transformed their operations with our innovative virtual solutions.
                </Typography>
              </motion.div>
            </Box>
            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    maxWidth: 800,
                    mx: 'auto',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}
                    >
                      Why Businesses Choose Us
                    </Typography>
                    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                      {[
                        'Leading virtual retail solutions provider',
                        'Award-winning technology platform',
                        '24/7 dedicated support team',
                        'Industry-recognized expertise',
                        'Proven track record of success',
                        'Customized solutions for every business',
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 1,
                              mb: 1,
                              borderRadius: 2,
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            }}
                          >
                            <ArrowForward
                              sx={{
                                color: '#00F0FF',
                                fontSize: { xs: '1.5rem', md: '1.75rem' },
                                mr: 2,
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{
                                color: '#E0E0E0',
                                fontWeight: 500,
                                fontSize: { xs: '1rem', md: '1.125rem' },
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => {
                    const footer = document.getElementById('footer-contact');
                    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
                  }}
                  sx={{
                    backgroundColor: '#007BFF',
                    color: '#FFFFFF',
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 600,
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#005BFF',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Start Your Journey Today
                </Button>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default About;