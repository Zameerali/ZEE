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
  Table,
  TableBody,
  TableRow,
  TableCell,
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
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/ZEELogo.png';

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Small delay to ensure navigation completes
  };

  const footerLinks = {
    company: [
      { text: 'Our Virtual Space', path: '/about' },
      { text: 'Our Solutions', path: '/solutions' },
      { text: 'Our Team', path: '/our-team' },
    ],
    solutions: [
      { text: 'Smart Retail Management', path: '/solutions' },
      { text: 'Virtual Sales Consultant', path: '/solutions' },
      { text: 'Sales Excellence Program', path: '/solutions' },
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
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container maxWidth="xl">
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
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' },
                lineHeight: 1.2,
                color: '#FFFFFF',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
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
              Ready to transform your retail operations?
              <br />
              Let's start the conversation.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6, alignItems: 'baseline' }}>
          {/* Left Side: Business Name and Logo, Social Media, Contact Details */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 4, gap: 2, verticalAlign: 'baseline' }}>
                <Box
                  component="img"
                  src={logo}
                  alt="ZEE-KRAZE Consultants Logo"
                  sx={{
                    height: { xs: 40, md: 60 },
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                    verticalAlign: 'middle',
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                    verticalAlign: 'middle',
                  }}
                >
                  ZEE-KRAZE Consultants
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2, mb: 4 }}>
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

              <Grid container  direction="column">
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      p: 2,
                      gap: 1,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#FFFFFF',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                    onClick={() => window.open('mailto:info@zeekrazeconsultants.com', '_blank')}
                  >
                    <Email sx={{ fontSize: 20, color: '#FFFFFF', flexShrink: 0 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 600,
                        color: '#FFFFFF',
                        whiteSpace: { xs: 'normal', md: 'nowrap' },
                        wordBreak: { xs: 'break-word', md: 'normal' },
                        textAlign: 'left',
                      }}
                    >
                      info@zeekrazeconsultants.com
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      p: 2,
                      gap: 1,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#FFFFFF',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
                    <Phone sx={{ fontSize: 20, color: '#FFFFFF', flexShrink: 0 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 600,
                        color: '#FFFFFF',
                        whiteSpace: { xs: 'normal', md: 'nowrap' },
                        wordBreak: { xs: 'break-word', md: 'normal' },
                        textAlign: 'left',
                      }}
                    >
                      +1 (713) 877 8823
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      p: 2,
                      gap: 1,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#FFFFFF',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                    onClick={() => window.open('https://maps.google.com/?q=1texas', '_blank')}
                  >
                    <LocationOn sx={{ fontSize: 20, color: '#FFFFFF', flexShrink: 0 }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 600,
                        color: '#FFFFFF',
                        whiteSpace: { xs: 'normal', md: 'nowrap' },
                        wordBreak: { xs: 'break-word', md: 'normal' },
                        textAlign: 'left',
                      }}
                    >
                      Taipei Toronto Texas
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Side: Quick Links and Solutions in Table Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Table
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        p: 2,
                        background: 'rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                          color: '#FFFFFF',
                          textAlign: 'left',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        Quick Links
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                        p: 2,
                        background: 'rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                          color: '#FFFFFF',
                          textAlign: 'left',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        Solutions
                      </Typography>
                    </TableCell>
                  </TableRow>
                  {footerLinks.company.map((companyLink, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', p: 1 }}>
                        <Button
                          onClick={() => handleNavigation(companyLink.path)}
                          sx={{
                            color: '#FFFFFF',
                            textAlign: 'left',
                            justifyContent: 'flex-start',
                            textTransform: 'none',
                            py: 0.5,
                            px: 1.5,
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            fontWeight: 600,
                            minWidth: 'auto',
                            width: '100%',
                            '&:hover': {
                              color: '#FFFFFF',
                              backgroundColor: theme.palette.primary.main,
                              transform: 'translateX(5px)',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {companyLink.text}
                        </Button>
                      </TableCell>
                      <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', p: 1 }}>
                        {index < footerLinks.solutions.length && (
                          <Button
                            onClick={() => handleNavigation(footerLinks.solutions[index].path)}
                            sx={{
                              color: '#FFFFFF',
                              textAlign: 'left',
                              justifyContent: 'flex-start',
                              textTransform: 'none',
                              py: 0.5,
                              px: 1.5,
                              fontSize: { xs: '1rem', md: '1.125rem' },
                              fontWeight: 600,
                              minWidth: 'auto',
                              width: '100%',
                              '&:hover': {
                                color: '#FFFFFF',
                                backgroundColor: theme.palette.secondary.main,
                                transform: 'translateX(5px)',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {footerLinks.solutions[index].text}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)', mb: 4 }} />

        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 500,
                lineHeight: 1.6,
                color: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              © {new Date().getFullYear()} ZEE-KRAZE Consultants. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>

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
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              zIndex: 1000,
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
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
            backgroundColor: theme.palette.primary.main,
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