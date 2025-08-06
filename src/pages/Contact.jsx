import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Paper,
  Card,
  CardContent,
  Chip,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  BusinessCenter,
  Send,
  Schedule,
  Support,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email Us',
      details: 'info@zeekrazeconsultants.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      details: '123 Business District\nTech City, TC 12345',
      description: 'Come say hello at our office'
    }
  ];

  const services = [
    {
      icon: <BusinessCenter />,
      title: 'Business Consultation',
      description: 'Strategic planning and business optimization'
    },
    {
      icon: <Support />,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance'
    },
    {
      icon: <Schedule />,
      title: 'Custom Implementation',
      description: 'Tailored solutions for your business needs'
    }
  ];

  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Chip
              label="📞 Get In Touch"
              sx={{
                background: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
                color: '#F5F5F5',
                fontWeight: 600,
                mb: 3,
                px: 2,
                py: 1,
                fontSize: '1rem',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                background: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}
            >
              Let's Transform Your Business Together
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
              }}
            >
              Ready to revolutionize your retail operations? Contact our experts today and discover how our VDM solutions can drive your success.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  background: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Send Us a Message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#7F00FF',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00F0FF',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#7F00FF',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00F0FF',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#7F00FF',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00F0FF',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#7F00FF',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00F0FF',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        placeholder="Tell us about your business needs and how we can help..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: '#7F00FF',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00F0FF',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
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
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Contact Information
                </Typography>
                
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 3,
                      p: 3,
                      background: `linear-gradient(135deg, ${'#7F00FF'}10 0%, ${'#00F0FF'}05 100%)`,
                      border: `1px solid ${'#7F00FF'}30`,
                      borderRadius: 3,
                      '&:hover': {
                        borderColor: '#00F0FF',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          backgroundColor: '#7F00FF',
                          borderRadius: 2,
                          p: 1.5,
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {React.cloneElement(item.icon, { 
                          sx: { fontSize: 24, color: '#F5F5F5' } 
                        })}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 1,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#00F0FF',
                            fontWeight: 500,
                            mb: 0.5,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {item.details}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>

              {/* Services */}
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                What We Offer
              </Typography>
              
              {services.map((service, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 2,
                    p: 2,
                    background: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    '&:hover': {
                      borderColor: '#00F0FF',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        backgroundColor: '#00F0FF',
                        borderRadius: 1,
                        p: 1,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {React.cloneElement(service.icon, { 
                        sx: { fontSize: 20, color: '#0D0F1C' } 
                      })}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </motion.div>
          </Grid>
        </Grid>

        {/* Success Snackbar */}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Thank you for your message! We'll get back to you within 24 hours.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
