import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  useTheme,
  Divider,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hassan from '../assets/Hassan.jpg';
import Michael from '../assets/Mike.jpeg';
import Azriah from '../assets/Azriah.jpg';
import Michiah from '../assets/Mickey.jpeg';

const OurTeam = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const teamMembers = [
    {
      name: 'Michael Sidebotham',
      description: "Passionate about transforming retail with data-driven strategies. Committed to delivering measurable growth for every client.",
      image: Michael,
      alt: 'Michael Sidebotham',
      email: 'info@zeekrazeconsultants.com',
      phone: '+1 (713) 877 8823',
    },
    {
      name: 'Azriah Gill',
      description: "Blending retail expertise with modern technology solutions. Focused on helping businesses scale efficiently and sustainably.",
      image: Azriah,
      alt: 'Azriah Gill',
      email: 'info@zeekrazeconsultants.com',
      phone: '+1 (713) 877 8823',
    },
    {
      name: 'Michiah Maqbool Gill',
      description: "Driven by results, inspired by innovation. Turning complex challenges into simple, impactful solutions.",
      image: Michiah,
      alt: 'Michiah Maqbool Gill',
      email: 'info@zeekrazeconsultants.com',
      phone: '+1 (713) 877 8823',
    },
    {
      name: 'Hassan Khan',
      description: "Dedicated to creating seamless digital experiences for retailers. Empowering clients to stay ahead in a fast-changing market.",
      image: Hassan,
      alt: 'Hassan Khan',
      email: 'info@zeekrazeconsultants.com',
      phone: '+1 (713) 877 8823',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 10 },
          background: theme.palette.background.default,
          color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
        }}
      >
        <Container maxWidth="xl">
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                mb: 2,
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
              }}
            >
              Our Team
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Meet the dedicated professionals driving our mission to transform retail with innovative solutions.
            </Typography>
          </Box>
          
          {/* Team Members */}
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
            {teamMembers.map((member, index) => {
              const isLeftImage = index % 2 === 0;
              return (
                <Grid item xs={12} key={member.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: isLeftImage ? 'row' : 'row-reverse' },
                        alignItems: 'center',
                        gap: { xs: 3, md: 4, lg: 6 },
                        p: { xs: 3, md: 4, lg: 6 },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#F9F9F9',
                        borderRadius: 3,
                        border: theme.palette.mode === 'dark' 
                          ? '1px solid rgba(255, 255, 255, 0.15)' 
                          : '1px solid rgba(0, 0, 0, 0.1)',
                        boxShadow: theme.palette.mode === 'dark' 
                          ? '0 15px 40px rgba(0, 0, 0, 0.3)' 
                          : '0 15px 40px rgba(0, 0, 0, 0.08)',
                        mb: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.15)' 
                            : '#F0F0F0',
                          borderColor: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.25)' 
                            : 'rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      {/* Circular Image */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Avatar
                          src={member.image}
                          alt={member.alt}
                          sx={{
                            width: { xs: 160, md: 200, lg: 240 },
                            height: { xs: 160, md: 200, lg: 240 },
                            border: theme.palette.mode === 'dark' 
                              ? '4px solid rgba(255, 255, 255, 0.15)' 
                              : '4px solid rgba(255, 255, 255, 0.8)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 10px 25px rgba(0, 0, 0, 0.4)'
                              : '0 10px 25px rgba(0, 0, 0, 0.15)',
                            flexShrink: 0,
                          }}
                        />
                      </motion.div>

                      {/* Content Section */}
                      <Box
                        sx={{
                          flex: 1,
                          textAlign: { xs: 'center', lg: isLeftImage ? 'left' : 'right' },
                          maxWidth: { xs: '100%', lg: '500px' },
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' },
                            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1A1A1A',
                            mb: 2,
                            lineHeight: 1.2,
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                            fontWeight: 400,
                            lineHeight: 1.6,
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            mb: 3,
                          }}
                        >
                          {member.description}
                        </Typography>
                      </Box>

                      {/* Contact Section */}
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row', lg: 'column' },
                          alignItems: 'center',
                          gap: { xs: 2, sm: 3, lg: 2 },
                          minWidth: { lg: '220px' },
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="contained"
                            onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                            sx={{
                              backgroundColor: '#007BFF',
                              color: '#FFFFFF',
                              fontWeight: 600,
                              fontSize: { xs: '0.8rem', md: '0.9rem' },
                              px: { xs: 2.5, md: 3 },
                              py: { xs: 1, md: 1.2 },
                              borderRadius: 2,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                              '&:hover': {
                                backgroundColor: '#005BFF',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                              },
                            }}
                          >
                            SEND E-MAIL
                          </Button>
                        </motion.div>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.mode === 'dark' ? '#E0E0E0' : '#4A4A4A',
                              fontWeight: 400,
                              fontSize: { xs: '0.85rem', md: '0.9rem' },
                            }}
                          >
                            or call us
                          </Typography>
                          
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                              height: '16px',
                              alignSelf: 'center',
                            }}
                          />
                          
                          <Typography
                            variant="h6"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              const phoneNumber = member.phone;
                              if (navigator.clipboard && window.isSecureContext) {
                                navigator.clipboard.writeText(phoneNumber).then(() => {
                                  setSnackbarOpen(true);
                                }).catch((err) => {
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
                            sx={{
                              color: '#007BFF',
                              fontWeight: 600,
                              fontSize: { xs: '1rem', md: '1.1rem' },
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#005BFF',
                              },
                            }}
                          >
                            {member.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

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
    </motion.div>
  );
};

export default OurTeam;