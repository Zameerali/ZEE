import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  useTheme,
} from '@mui/material';
import {
  Visibility,
  BusinessCenter,
  Engineering,
  Build,
  Assessment,
  TrendingUp,
  Support,
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const whyChooseUs = [
    {
      icon: <Engineering />,
      title: 'Industry Expertise',
      description: 'Our team comprises seasoned professionals with deep knowledge of the wireless telecom retail sector.',
      color: '#15357A',
    },
    {
      icon: <Build />,
      title: 'Tailored Solutions',
      description: 'We don’t believe in one-size-fits-all. Our programs are customized to your specific business needs and goals.',
      color: '#007BFF',
    },
    {
      icon: <Assessment />,
      title: 'Practical & Engaging Training',
      description: 'Our methods are interactive, hands-on, and designed for immediate application in a retail setting.',
      color: '#1A1A1A',
    },
    {
      icon: <TrendingUp />,
      title: 'Measurable Results',
      description: 'We focus on delivering tangible improvements in sales, customer satisfaction, and operational efficiency.',
      color: '#2E7D32',
    },
    {
      icon: <Support />,
      title: 'Long-Term Partnership',
      description: 'We’re committed to your ongoing success, offering continued support and strategic advice.',
      color: '#D81B60',
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
                  mb: 3,
                  backgroundColor: theme.palette.mode === 'dark' ? '#A9FF4F' : '#007BFF',
                  color: theme.palette.mode === 'dark' ? '#0D0F1C' : '#FFFFFF',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  height: { xs: 36, md: 40 },
                  px: 2,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#B9FF6F' : '#005BFF',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
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
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 4, md: 6 } }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  sx={{
                    height: 'auto',
                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#F9F9F9',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          backgroundColor: '#007BFF',
                          color: '#FFFFFF',
                          mr: 2,
                          width: { xs: 48, md: 56 },
                          height: { xs: 48, md: 56 },
                        }}
                      >
                        <Visibility sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
                      </Avatar>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                        }}
                      >
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        fontWeight: 500,
                        color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                        flex: 1,
                      }}
                    >
                      Our vision is to transform the way businesses manage performance and sales by leveraging innovative virtual solutions. We aim to create a future where every retail store and enterprise team operates at its full potential—driving growth, improving customer experiences, and building long-term success.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  sx={{
                    height: 'auto',
                    background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#F9F9F9',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          backgroundColor: '#007BFF',
                          color: '#FFFFFF',
                          mr: 2,
                          width: { xs: 48, md: 56 },
                          height: { xs: 48, md: 56 },
                        }}
                      >
                        <BusinessCenter sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }} />
                      </Avatar>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                        }}
                      >
                        What We Do
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        fontWeight: 500,
                        color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                        flex: 1,
                      }}
                    >
                      We offer a comprehensive suite of services designed specifically to address the unique needs of cellphone retail businesses. Our solutions combine cutting-edge technology with practical training methodologies to deliver measurable results.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
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
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  color: '#FFFFFF',
                }}
              >
                Why Choose Us?
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
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: { xs: 2, md: 3 },
                }}
              >
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        minWidth: { xs: 260, sm: 300 },
                        maxWidth: 340,
                        height: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: reason.color,
                          color: '#FFFFFF',
                          width: 64,
                          height: 64,
                          mb: 2,
                        }}
                      >
                        {React.cloneElement(reason.icon, { sx: { fontSize: 32 } })}
                      </Avatar>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: '1.25rem', md: '1.375rem' },
                          color: '#FFFFFF',
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
                          fontWeight: 400,
                        }}
                      >
                        {reason.description}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
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
                  variant="h1"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                    color: '#FFFFFF',
                  }}
                >
                  Ready to Transform Your Business?
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
                <Card
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
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
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
                            <CheckCircle
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
                  </CardContent>
                </Card>
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