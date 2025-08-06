import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Store,
  Business,
  Assessment,
  CloudSync,
  TrendingUp,
  Analytics,
  ArrowForward,
  Email,
  Phone,
  LocationOn,
  BusinessCenter,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme as useARKTheme } from '../theme/ThemeProvider';

const DetailedServicesSection = () => {
  const theme = useTheme();
  const { mode } = useARKTheme();

  const services = [
    {
      icon: <Store />,
      abbreviation: 'VRO',
      title: 'Virtual Retail Operations',
      description: 'Manage any store, from anywhere with our comprehensive VRO platform. Get complete operational control with real-time monitoring, inventory management, and staff coordination across all locations.',
      features: [
        'Real-time store monitoring and control',
        'Remote inventory management',
        'Staff coordination and scheduling',
        'Multi-location operational oversight',
        'Performance analytics and reporting'
      ],
      color: mode === 'light' ? '#7F00FF' : '#00F0FF'
    },
    {
      icon: <Business />,
      abbreviation: 'VSC',
      title: 'Virtual Sales Consultants',
      description: 'AI-powered sales support system that enhances your team\'s performance. Our VSC technology provides intelligent sales guidance, customer insights, and real-time coaching to maximize conversions.',
      features: [
        'AI-powered sales assistance',
        'Real-time customer insights',
        'Sales performance coaching',
        'Lead qualification and scoring',
        'Conversion optimization tools'
      ],
      color: '#00F0FF'
    },
    {
      icon: <CloudSync />,
      abbreviation: 'RRM',
      title: 'Remote Retail Management',
      description: 'Comprehensive remote management tools that streamline your retail operations. RRM provides centralized control, automated workflows, and intelligent decision-making support.',
      features: [
        'Centralized management dashboard',
        'Automated workflow systems',
        'Remote team collaboration',
        'Resource allocation optimization',
        'Compliance monitoring and reporting'
      ],
      color: mode === 'light' ? '#0D0F1C' : '#7F00FF'
    },
    {
      icon: <Assessment />,
      abbreviation: 'SRP',
      title: 'Smart Retail Performance',
      description: 'Data-driven insights and real-time performance tracking that helps you make informed decisions. SRP combines advanced analytics with predictive modeling for optimal results.',
      features: [
        'Real-time performance dashboards',
        'Predictive analytics and forecasting',
        'Custom KPI tracking',
        'Automated reporting systems',
        'Business intelligence insights'
      ],
      color: mode === 'light' ? '#7F00FF' : '#00F0FF'
    }
  ];

  const contactInfo = {
    email: 'info@zeekrazeconsultants.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business District, Tech City, TC 12345'
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Chip
              label="🚀 Our Solutions"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                mb: 2,
                px: 2,
                py: 1,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                color: 'text.primary',
              }}
            >
              Find out how this model can create value for your business
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Discover our comprehensive suite of virtual retail solutions designed to transform your business operations
            </Typography>
          </Box>
        </motion.div>

        {/* Services Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={service.abbreviation}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`,
                    border: `1px solid ${service.color}30`,
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      boxShadow: `0 20px 60px ${service.color}20`,
                      borderColor: service.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    {/* Service Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          backgroundColor: service.color,
                          borderRadius: 2,
                          p: 1.5,
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {React.cloneElement(service.icon, { 
                          sx: { fontSize: 28, color: 'white' } 
                        })}
                      </Box>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: service.color,
                            fontWeight: 700,
                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                          }}
                        >
                          {service.abbreviation}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Service Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Service Features */}
                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 600,
                          mb: 2,
                          fontSize: '1rem',
                        }}
                      >
                        Key Features:
                      </Typography>
                      <Box sx={{ pl: 2 }}>
                        {service.features.map((feature, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              mb: 1,
                              display: 'flex',
                              alignItems: 'center',
                              '&:before': {
                                content: '"•"',
                                color: service.color,
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                mr: 1,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    {/* Request Trial Button */}
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{
                        backgroundColor: service.color,
                        color: 'white',
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: '1rem',
                        '&:hover': {
                          backgroundColor: service.color,
                          filter: 'brightness(1.1)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Request a Trial
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Paper
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: 'white',
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                Contact us today to learn how our solutions can drive your success
              </Typography>

              <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Email sx={{ fontSize: 40, mb: 1, opacity: 0.9 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Email</Typography>
                    <Typography variant="body1">{contactInfo.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Phone sx={{ fontSize: 40, mb: 1, opacity: 0.9 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Phone</Typography>
                    <Typography variant="body1">{contactInfo.phone}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <LocationOn sx={{ fontSize: 40, mb: 1, opacity: 0.9 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Address</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                      {contactInfo.address}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                size="large"
                startIcon={<BusinessCenter />}
                onClick={() => {
                  const footer = document.getElementById('footer-contact');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  background: 'linear-gradient(135deg, #A9FF4F 0%, #00F0FF 100%)',
                  color: '#0D0F1C',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #B9FF6F 0%, #20F0FF 100%)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Us Now
              </Button>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DetailedServicesSection;
