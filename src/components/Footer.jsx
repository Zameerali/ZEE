import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Facebook,
  YouTube,
  ArrowUpward,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/ZEELogo.png';

const Footer = () => {
  const theme = useTheme();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const footerLinks = {
    company: [
      { text: 'Our Virtual Space', path: '/about' },
      { text: 'Our Solutions', path: '/solutions' },
      { text: 'Join Our Team', path: '/join' },
    ],
    solutions: [
      { text: 'Smart Retail Management', path: '/solutions' },
      { text: 'Virtual Sales Consultant', path: '/solutions' },
      { text: 'Sales Excellence Program', path: '/solutions' },
      { text: 'Retail Training', path: '/solutions' },
    ],
    support: [
      { text: 'Documentation', path: '/docs' },
      { text: 'API Reference', path: '/api' },
      { text: '24/7 Support', path: '/support' },
    ],
  };

  const socialLinks = [
    { icon: <LinkedIn />, url: 'https://linkedin.com/company/zee-kraze-consultants', label: 'LinkedIn', color: '#0077B5' },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.53 3H21.5L14.88 10.39L22.68 21H16.16L11.21 14.41L5.61 21H1.63L8.7 13.09L1.14 3H7.84L12.32 9.03L17.53 3ZM16.41 19.13H18.23L7.36 4.77H5.41L16.41 19.13Z" fill="#000"/>
        </svg>
      ),
      url: 'https://x.com/zeekrazeconsultants',
      label: 'X',
      color: '#000000',
    },
    { icon: <Facebook />, url: 'https://facebook.com/zeekrazeconsultants', label: 'Facebook', color: '#1877F3' },
    { icon: <YouTube />, url: 'https://youtube.com/zeekrazeconsultants', label: 'YouTube', color: '#FF0000' },
  ];

  return (
    <Box
      component="footer"
      id="footer-contact"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: '#FFFFFF',
        pt: 8,
        pb: 4,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Contact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                lineHeight: 1.2,
                color: '#FFFFFF',
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 500,
                lineHeight: 1.6,
                color: '#E0E0E0',
              }}
            >
              Ready to transform your retail operations? Let's start the conversation.
            </Typography>
          </Box>
        </motion.div>

        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Contact Information */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              

              {/* Contact Details - Responsive Grid */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {/* Email */}
                <Grid item xs={12} lg={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', lg: 'flex-start' },
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      height: '80%',
                      gap: 1.5,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                    onClick={() => window.open('mailto:info@zeekrazeconsultants.com', '_blank')}
                  >
                    <Email
                      sx={{
                        fontSize: 20,
                        color: '#007BFF',
                        flexShrink: 0,
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textAlign: { xs: 'center', lg: 'left' },
                        flexWrap: 'wrap',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 600,
                          color: '#FFFFFF',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Email Us:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          color: '#E0E0E0',
                          wordBreak: 'break-all',
                        }}
                      >
                        info@zeekrazeconsultants.com
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Phone */}
                <Grid item xs={12} lg={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', lg: 'flex-start' },
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      height: '80%',
                      gap: 1.5,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      const phoneNumber = '+1 (555) 123-4567';

                      if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(phoneNumber).then(() => {
                          console.log('Phone number copied successfully');
                          setSnackbarOpen(true);
                        }).catch((err) => {
                          console.error('Failed to copy phone number:', err);
                          const textArea = document.createElement('textarea');
                          textArea.value = phoneNumber;
                          document.body.appendChild(textArea);
                          textArea.select();
                          try {
                            document.execCommand('copy');
                            setSnackbarOpen(true);
                          } catch (err) {
                            alert(`Phone number: ${phoneNumber}`);
                          }
                          document.body.removeChild(textArea);
                        });
                      } else {
                        const textArea = document.createElement('textarea');
                        textArea.value = phoneNumber;
                        document.body.appendChild(textArea);
                        textArea.select();
                        try {
                          document.execCommand('copy');
                          setSnackbarOpen(true);
                        } catch (err) {
                          alert(`Phone number: ${phoneNumber}`);
                        }
                        document.body.removeChild(textArea);
                      }
                    }}
                  >
                    <Phone
                      sx={{
                        fontSize: 20,
                        color: '#007BFF',
                        flexShrink: 0,
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textAlign: { xs: 'center', lg: 'left' },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 600,
                          color: '#FFFFFF',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Call Us:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          color: '#E0E0E0',
                        }}
                      >
                        +1 (555) 123-4567
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Address */}
                <Grid item xs={12} lg={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', lg: 'flex-start' },
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      height: '80%',
                      gap: 1.5,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                    onClick={() => window.open('https://maps.google.com/?q=123+Business+Ave,+Suite+100,+City,+State+12345', '_blank')}
                  >
                    <LocationOn
                      sx={{
                        fontSize: 20,
                        color: '#007BFF',
                        flexShrink: 0,
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textAlign: { xs: 'center', lg: 'left' },
                        flexWrap: 'wrap',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 600,
                          color: '#FFFFFF',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Visit Us:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          color: '#E0E0E0',
                        }}
                      >
                        123 Business Ave, Suite 100, City, State 12345
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* Social Media Icons */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  gap: 2,
                  pt: 2,
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        backgroundColor: '#fff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.85)',
                          borderColor: 'rgba(255, 255, 255, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {React.cloneElement(social.icon, { sx: { color: social.color, fontSize: 28 } })}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Company Info & Links */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 4,
                  textAlign: { xs: 'center', md: 'left' },
                  gap: { xs: 1.5, md: 3 },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="ZEE-KRAZE Consultants Logo"
                  sx={{
                    height: { xs: 50, md: 96 },
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 0.1px rgba(0, 0, 0, 0.7))',
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: '#FFFFFF',
                    textAlign: { xs: 'center', md: 'left' },
                    lineHeight: 1.2,
                  }}
                >
                  ZEE-KRAZE Consultants
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: '#E0E0E0',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Transforming telecom retail operations through advanced technology solutions,
                innovative training programs, and comprehensive support systems.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.25rem', md: '1.375rem' },
                      color: '#FFFFFF',
                      textAlign: 'left',
                    }}
                  >
                    Quick Links
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      alignItems: 'flex-start',
                    }}
                  >
                    {footerLinks.company.map((link, index) => (
                      <Button
                        key={index}
                        onClick={() => {
                          window.location.href = link.path;
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }, 100);
                        }}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          textTransform: 'none',
                          p: 0.5,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 500,
                          minWidth: 'auto',
                          '&:hover': {
                            color: '#007BFF',
                            backgroundColor: 'transparent',
                            transform: 'translateX(5px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {link.text}
                      </Button>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={6} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      fontSize: { xs: '1.25rem', md: '1.375rem' },
                      color: '#FFFFFF',
                      textAlign: 'left',
                    }}
                  >
                    Solutions
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      alignItems: 'flex-start',
                    }}
                  >
                    {footerLinks.solutions.slice(0, 3).map((link, index) => (
                      <Button
                        key={index}
                        onClick={() => {
                          window.location.href = link.path;
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }, 100);
                        }}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          textTransform: 'none',
                          p: 0.5,
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 500,
                          minWidth: 'auto',
                          '&:hover': {
                            color: '#007BFF',
                            backgroundColor: 'transparent',
                            transform: 'translateX(5px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {link.text}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 4 }} />

        {/* Bottom Footer */}
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 500,
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
              }}
            >
              © {new Date().getFullYear()} ZEE-KRAZE Consultants. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: { xs: 16, md: 24 },
              right: { xs: 16, md: 24 },
              backgroundColor: '#007BFF',
              color: '#FFFFFF',
              zIndex: 1000,
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: '#005BFF',
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
              },
              '&:active': {
                transform: 'translateY(-1px) scale(0.98)',
              },
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <ArrowUpward sx={{ fontSize: { xs: 20, md: 24 } }} />
          </IconButton>
        </motion.div>
      )}

      {/* Snackbar for phone number copy confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ zIndex: 9999 }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{
            backgroundColor: '#007BFF',
            color: '#FFFFFF',
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.125rem' },
            '& .MuiAlert-icon': {
              color: '#FFFFFF',
            },
          }}
        >
          Phone number copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;