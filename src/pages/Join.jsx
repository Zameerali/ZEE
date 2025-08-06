import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  useTheme,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Work,
  People,
  TrendingUp,
  School,
  CheckCircle,
  Email,
  Person,
  Phone,
  Business,
  Description,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const JoinOurTeam = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
    });
  };

  const positions = [
    'Retail Technology Consultant',
    'Virtual Operations Specialist',
    'Sales Excellence Trainer',
    'Business Analyst',
    'Customer Success Manager',
    'Technical Support Specialist',
    'Marketing Specialist',
    'Software Developer',
    'UI/UX Designer',
    'Other',
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Career Growth',
      description: 'Accelerate your career with continuous learning opportunities and clear advancement paths.',
      color: '#0D0F1C',
    },
    {
      icon: <People />,
      title: 'Collaborative Culture',
      description: 'Work with passionate professionals in a supportive and innovative environment.',
      color: '#7F00FF',
    },
    {
      icon: <School />,
      title: 'Professional Development',
      description: 'Access to cutting-edge training programs and industry certifications.',
      color: '#00F0FF',
    },
    {
      icon: <Work />,
      title: 'Flexible Work',
      description: 'Enjoy flexible working arrangements and excellent work-life balance.',
      color: '#2E7D32',
    },
  ];

  const perks = [
    'Competitive salary and performance bonuses',
    'Comprehensive health and wellness benefits',
    'Professional development budget',
    'Flexible working hours and remote options',
    'Modern office environment and equipment',
    'Team building activities and events',
    'Innovation time for personal projects',
    'Industry conference attendance',
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new technologies and creative solutions to solve complex challenges.',
    },
    {
      title: 'Customer Success',
      description: 'Our clients\' success is our success. We go above and beyond to exceed expectations.',
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage continuous skill development.',
    },
    {
      title: 'Collaboration',
      description: 'We believe the best results come from working together as a unified team.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ pt: { xs: 12, md: 16 } }}>
        {/* Hero Section */}
        <Container maxWidth="xl" sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Chip
                label="Join Our Team"
                sx={{
                  mb: { xs: 2, md: 3 },
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.5, md: 1 },
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  mb: { xs: 3, md: 4 },
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.2, md: 1.1 },
                }}
              >
                Build the Future of Retail
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: 800 },
                  mx: 'auto',
                  lineHeight: { xs: 1.5, md: 1.6 },
                  mb: 4,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  px: { xs: 2, md: 0 },
                }}
              >
                Join our passionate team of innovators and help transform the retail industry with cutting-edge technology solutions. 
                We're looking for talented individuals who share our vision of retail excellence.
              </Typography>
            </Box>
          </motion.div>
        </Container>

        {/* Benefits Section */}
        <Container maxWidth="xl" sx={{ mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                textAlign: 'center', 
                fontWeight: 700, 
                mb: { xs: 4, md: 6 },
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Why Work With Us?
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={benefit.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -8 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        minHeight: { xs: 280, md: 320 },
                        textAlign: 'center',
                        borderRadius: 4,
                        background: `linear-gradient(135deg, ${benefit.color}10 0%, ${benefit.color}05 100%)`,
                        border: `1px solid ${benefit.color}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 20px 40px ${benefit.color}20`,
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Avatar
                          sx={{
                            backgroundColor: benefit.color,
                            color: 'white',
                            width: { xs: 64, md: 80 },
                            height: { xs: 64, md: 80 },
                            mx: 'auto',
                            mb: { xs: 2, md: 3 },
                            boxShadow: `0 8px 24px ${benefit.color}30`,
                          }}
                        >
                          <Box sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            {benefit.icon}
                          </Box>
                        </Avatar>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 600, 
                            mb: 2,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                          }}
                        >
                          {benefit.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'text.secondary', 
                            lineHeight: 1.7,
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {benefit.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* Application Form Section */}
        <Box sx={{ backgroundColor: 'background.paper', py: { xs: 6, md: 8 } }}>
          <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {/* Application Form */}
              <Grid item xs={12} lg={8}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 20px 40px rgba(26, 42, 68, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: { xs: 3, md: 4 },
                          fontSize: { xs: '1.75rem', md: '2.25rem' },
                        }}
                      >
                        Apply Now
                      </Typography>
                      <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={{ xs: 2, md: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Full Name"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              InputProps={{
                                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
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
                              onChange={handleInputChange}
                              required
                              InputProps={{
                                startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              fullWidth
                              label="Phone Number"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              InputProps={{
                                startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth required>
                              <InputLabel>Position of Interest</InputLabel>
                              <Select
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                              >
                                {positions.map((position) => (
                                  <MenuItem key={position} value={position}>
                                    {position}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Years of Experience"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              required
                              InputProps={{
                                startAdornment: <Business sx={{ mr: 1, color: 'text.secondary' }} />,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Why do you want to join ZEE-KRAZE Consultants?"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              multiline
                              rows={4}
                              required
                              InputProps={{
                                startAdornment: <Description sx={{ mr: 1, color: 'text.secondary', alignSelf: 'flex-start', mt: 1 }} />,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                endIcon={<Send />}
                                sx={{
                                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                  px: { xs: 3, md: 4 },
                                  py: { xs: 1.5, md: 2 },
                                  fontSize: { xs: '1rem', md: '1.1rem' },
                                  borderRadius: 3,
                                  boxShadow: '0 8px 32px rgba(26, 42, 68, 0.3)',
                                  '&:hover': {
                                    boxShadow: '0 12px 40px rgba(26, 42, 68, 0.4)',
                                    transform: 'translateY(-2px)',
                                  },
                                }}
                              >
                                Submit Application
                              </Button>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Company Values & Benefits */}
              <Grid item xs={12} lg={4}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      borderRadius: 4, 
                      mb: { xs: 3, md: 4 },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 28px rgba(75, 0, 130, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 3,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                      >
                        Our Values
                      </Typography>
                      {values.map((value, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600, 
                              mb: 1,
                              fontSize: { xs: '1.1rem', md: '1.25rem' },
                            }}
                          >
                            {value.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.secondary',
                              lineHeight: 1.6,
                              fontSize: { xs: '0.875rem', md: '1rem' },
                            }}
                          >
                            {value.description}
                          </Typography>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>

                  <Card 
                    sx={{ 
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 12px 28px rgba(255, 98, 0, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 3,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                      >
                        Benefits & Perks
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {perks.map((perk, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <ListItem sx={{ px: 0, py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircle sx={{ color: 'primary.main', fontSize: 20 }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={perk}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  fontWeight: 500,
                                  fontSize: { xs: '0.875rem', md: '1rem' },
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact Info */}
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
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
                p: { xs: 4, md: 6 },
                color: 'white',
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
                    fontWeight: 700, 
                    mb: 2,
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  }}
                >
                  Questions About Joining Our Team?
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    opacity: 0.9, 
                    mb: { xs: 3, md: 4 },
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  We'd love to hear from you. Get in touch with our HR team.
                </Typography>
                <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
                  <Grid item xs={12} sm={6}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box>
                        <Email sx={{ fontSize: { xs: 32, md: 40 }, mb: 1 }} />
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                          }}
                        >
                          Email Us
                        </Typography>
                        <Typography 
                          variant="body1"
                          sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                        >
                          careers@zeekrazeconsultants.com
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box>
                        <Phone sx={{ fontSize: { xs: 32, md: 40 }, mb: 1 }} />
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                          }}
                        >
                          Call Us
                        </Typography>
                        <Typography 
                          variant="body1"
                          sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                        >
                          +1 (555) 123-4567
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </Container>

        {/* Snackbar for form submission */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Thank you for your application! We'll get back to you soon.
          </Alert>
        </Snackbar>
      </Box>
    </motion.div>
  );
};

export default JoinOurTeam;
