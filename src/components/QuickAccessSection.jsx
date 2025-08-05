import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import {
  Article,
  Headset,
  School,
  ArrowForward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const QuickAccessSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: 'Go to Resources',
      description: 'Access comprehensive guides, case studies, and best practices',
      icon: <Article />,
      path: '/solutions',
      color: '#A9FF4F',
      gradient: 'linear-gradient(135deg, #A9FF4F 0%, #7F00FF 100%)',
    },
    {
      title: 'Go to Training',
      description: 'Explore our training programs and certification courses',
      icon: <School />,
      path: '/join',
      color: '#00F0FF',
      gradient: 'linear-gradient(135deg, #00F0FF 0%, #A9FF4F 100%)',
    },
    {
      title: 'Go to Support',
      description: 'Get instant help and connect with our expert team',
      icon: <Headset />,
      path: '#footer-contact',
      color: '#7F00FF',
      gradient: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
      isScroll: true,
    },
  ];

  const handleClick = (link) => {
    if (link.isScroll) {
      const footer = document.getElementById('footer-contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Quick Access
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
              }}
            >
              Choose your path to success with our comprehensive retail solutions
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {quickLinks.map((link, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      boxShadow: `0 20px 40px rgba(127, 0, 255, 0.15)`,
                      '& .icon-container': {
                        background: link.gradient,
                      },
                      '& .cta-button': {
                        background: link.gradient,
                        color: '#0D0F1C',
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box
                      className="icon-container"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: `${link.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ color: link.color, fontSize: 40 }}>
                        {link.icon}
                      </Box>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {link.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        mb: 3,
                        flexGrow: 1,
                      }}
                    >
                      {link.description}
                    </Typography>

                    <Button
                      className="cta-button"
                      variant="outlined"
                      endIcon={<ArrowForward />}
                      onClick={() => handleClick(link)}
                      sx={{
                        alignSelf: 'flex-start',
                        borderColor: link.color,
                        color: link.color,
                        '&:hover': {
                          borderColor: 'transparent',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default QuickAccessSection;
