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
  SupportAgent,
  Phone,
  Store,
  TrendingUp,
  

} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Defined but not rendered as per user intent
  const services = [
    {
      title: 'Smart Retail Management',
      subtitle: 'VRO Technology',
      description: 'Transform your retail operations with our Virtual Retail Operations (VRO) platform. Manage inventory, sales, and customer interactions from anywhere.',
      icon: <Store />,
      color: '#007BFF',
      features: ['Real-time Inventory Management', 'Multi-store Operations', 'Cloud-based Dashboard', 'Mobile Accessibility'],
      badge: 'Most Popular',
    },
    {
      title: 'Retail Excellence Training',
      subtitle: 'Professional Development',
      description: 'Comprehensive training programs designed to elevate your team’s performance and customer service excellence.',
      icon: <TrendingUp />,
      color: '#007BFF',
      features: ['Consultative Selling Techniques', 'Product Knowledge Mastery', 'Customer Experience Enhancement', 'Performance Analytics'],
      badge: 'New',
    },
    {
      title: 'Virtual Sales Consultant',
      subtitle: 'VSC Platform',
      description: 'AI-powered sales assistance that guides your team through complex sales processes and customer interactions.',
      icon: <SupportAgent />,
      color: '#007BFF',
      features: ['AI-Powered Recommendations', 'Real-time Sales Coaching', 'Customer Behavior Analysis', 'Performance Optimization'],
      badge: 'AI-Powered',
    },
    {
      title: 'Sales Excellence Program',
      subtitle: 'SRP Integration',
      description: 'Comprehensive Sales Resource Planning (SRP) system that optimizes your sales processes and maximizes revenue potential.',
      icon: <Phone />,
      color: '#007BFF',
      features: ['Sales Process Automation', 'Revenue Optimization', 'Team Performance Tracking', 'Custom Reporting'],
      badge: 'Enterprise',
    },
  ];

  const challenges = [
    { icon: <TrendingDown />, title: 'Intense Competition', description: 'Struggling to stay ahead in a crowded market' },
    { icon: <Person />, title: 'Customer Experience Gaps', description: 'Difficulty providing consistent quality service' },
    { icon: <Warning />, title: 'Operational Bottlenecks', description: 'Inefficient processes slowing down your business' },
    { icon: <Analytics />, title: 'Sales & Profitability Pressures', description: 'Revenue targets becoming harder to achieve' },
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
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
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
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
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
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        height: { xs: 320, md: 360 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                          borderColor: 'rgba(255, 255, 255, 0.25)',
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          color: '#007BFF',
                          width: { xs: 72, md: 88 },
                          height: { xs: 72, md: 88 },
                          mb: 3,
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {React.cloneElement(challenge.icon, { 
                          sx: { fontSize: { xs: 32, md: 36 } } 
                        })}
                      </Avatar>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 2,
                          fontSize: { xs: '1.25rem', md: '1.375rem' },
                          lineHeight: 1.2,
                          color: '#FFFFFF',
                          minHeight: { xs: '2.4rem', md: '2.7rem' },
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