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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Visibility,
  Psychology,
  TrendingUp,
  Groups,
  CheckCircle,
  ArrowForward,
  BusinessCenter,
  EmojiObjects,
  Handshake,
  Engineering,
  Build,
  Assessment,
  Support,
  Star,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const whyChooseUs = [
    {
      icon: <Engineering />,
      title: 'Industry Expertise',
      description: 'Our team comprises seasoned professionals with deep knowledge of the wireless telecom retail sector.',
      color: '#0D0F1C',
    },
    {
      icon: <Build />,
      title: 'Tailored Solutions',
      description: 'We don\'t believe in one-size-fits-all. Our programs are customized to your specific business needs and goals.',
      color: '#7F00FF',
    },
    {
      icon: <Assessment />,
      title: 'Practical & Engaging Training',
      description: 'Our methods are interactive, hands-on, and designed for immediate application in a retail setting.',
      color: '#00F0FF',
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
      description: 'We\'re committed to your ongoing success, offering continued support and strategic advice.',
      color: '#FF6F00',
    },
  ];

  const achievements = [
    'Leading virtual retail solutions provider',
    '300+ successful retail transformations',
    '95% client satisfaction rate',
    'Award-winning technology platform',
    '24/7 dedicated support team',
    'Industry-recognized expertise',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ pt: { xs: 12, md: 16 } }}>
        {/* Hero Section */}
        <Container maxWidth="xl" sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <Chip
                label="Our Virtual Space"
                sx={{
                  mb: 4,
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(169, 255, 79, 0.9)' 
                    : theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' 
                    ? '#0D0F1C' 
                    : 'white',
                  fontWeight: 600,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  height: { xs: 40, md: 48 },
                  px: { xs: 2, md: 3 },
                  border: theme.palette.mode === 'dark' 
                    ? '1px solid rgba(169, 255, 79, 0.3)' 
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 16px rgba(169, 255, 79, 0.2)'
                    : '0 4px 16px rgba(0, 0, 0, 0.1)',
                  '& .MuiChip-label': {
                    px: { xs: 2, md: 3 },
                    fontWeight: 600,
                  },
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(169, 255, 79, 1)' 
                      : theme.palette.primary.dark,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 6px 20px rgba(169, 255, 79, 0.3)'
                      : '0 6px 20px rgba(0, 0, 0, 0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
              
              {/* Introduction */}
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: theme.palette.mode === 'dark' 
                    ? '#ffffff' 
                    : theme.palette.primary.main,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: { xs: 1.2, md: 1.1 },
                }}
              >
                Virtual Business Solutions Partner
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: 900 },
                  mx: 'auto',
                  lineHeight: { xs: 1.5, md: 1.6 },
                  mb: 6,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  px: { xs: 2, md: 0 },
                }}
              >
                We are a virtual business solutions partner committed to transforming how companies 
                manage performance and sales. From retail operations to enterprise training, we deliver 
                smarter strategies that empower teams, improve efficiency, and drive sustainable growth.
              </Typography>
            </Box>
          </motion.div>

          {/* Vision & What We Do */}
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: 320, md: 400 },
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 100%)`,
                    border: `1px solid ${theme.palette.primary.main}20`,
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
                      border: `1px solid ${theme.palette.primary.main}30`,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 4 }, flexShrink: 0 }}>
                      <Avatar
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          mr: 2,
                          width: { xs: 50, md: 60 },
                          height: { xs: 50, md: 60 },
                        }}
                      >
                        <Visibility sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                      </Avatar>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: { xs: 1.6, md: 1.8 }, 
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: 'text.primary',
                        flex: 1,
                      }}
                    >
                      Our vision is to transform the way businesses manage performance and sales by leveraging 
                      innovative virtual solutions. We aim to create a future where every retail store and enterprise team 
                      operates at its full potential—driving growth, improving customer experiences, and building long-term success. 
                      By combining technology, data-driven insights, and human expertise, we aspire to redefine business 
                      management and set a new standard of operational excellence.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: 320, md: 400 },
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}10 0%, ${theme.palette.secondary.main}05 100%)`,
                    border: `1px solid ${theme.palette.secondary.main}20`,
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 20px 40px ${theme.palette.secondary.main}20`,
                      border: `1px solid ${theme.palette.secondary.main}30`,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 4 }, flexShrink: 0 }}>
                      <Avatar
                        sx={{
                          backgroundColor: theme.palette.secondary.main,
                          color: 'white',
                          mr: 2,
                          width: { xs: 50, md: 60 },
                          height: { xs: 50, md: 60 },
                        }}
                      >
                        <BusinessCenter sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
                      </Avatar>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        What We Do
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: { xs: 1.6, md: 1.8 }, 
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: 'text.primary',
                        flex: 1,
                      }}
                    >
                      We offer a comprehensive suite of services designed specifically to address the unique needs 
                      of cellphone retail businesses. We believe in empowering your team and optimizing your processes 
                      for sustainable growth. Our solutions combine cutting-edge technology with practical training 
                      methodologies to deliver measurable results that transform your retail operations.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Why Choose Us */}
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
              p: { 
                xs: 3, 
                sm: 4, 
                md: 6 
              },
              '@media (min-height: 1200px)': {
                p: { xs: 3, sm: 4, md: 5 }
              },
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              mx: { xs: 2, sm: 3 },
              my: { 
                xs: 6, 
                sm: 8, 
                md: 10,
                lg: 12 
              },
              '@media (min-height: 1200px)': {
                my: { xs: 4, sm: 6, md: 8 }
              },
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
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 700, 
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                }}
              >
                Why Choose Us?
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: { xs: 3, md: 4 },
                  opacity: 0.95,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6,
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                We deliver comprehensive solutions that are specifically designed for your success
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                  gap: { xs: 3, md: 4 },
                  maxWidth: { lg: 1400 },
                  mx: 'auto',
                  mb: { 
                    xs: 3, 
                    md: 4 
                  },
                  '@media (min-height: 1200px)': {
                    mb: { xs: 3, md: 4 }
                  },
                  '& > div': {
                    flex: {
                      xs: '1 1 100%',
                      sm: '1 1 calc(50% - 12px)',
                      md: '1 1 calc(33.333% - 16px)',
                      lg: '1 1 calc(33.333% - 16px)',
                    },
                    minWidth: { xs: '280px', sm: '300px', md: '320px' },
                    maxWidth: { xs: '100%', sm: '400px', md: '420px' },
                  },
                }}
              >
                {whyChooseUs.map((reason, index) => (
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
                          backgroundColor: reason.color,
                          color: 'white',
                          width: { xs: 72, md: 88 },
                          height: { xs: 72, md: 88 },
                          mb: 3,
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {React.cloneElement(reason.icon, { 
                          sx: { fontSize: { xs: 32, md: 36 } } 
                        })}
                      </Avatar>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          fontSize: { xs: '1.2rem', md: '1.35rem' },
                          color: 'white',
                          minHeight: { xs: '2.4rem', md: '2.7rem' },
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {reason.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.6,
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          fontWeight: 400,
                          textAlign: 'center',
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

        {/* Achievements */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'white',
            py: { 
              xs: 6, 
              sm: 8, 
              md: 10,
              lg: 12 
            },
            '@media (min-height: 1200px)': {
              py: { xs: 4, sm: 6, md: 8 }
            },
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3,
            },
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: { xs: 2, md: 3 },
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    }}
                  >
                    Ready to Transform Your Business?
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      opacity: 0.9, 
                      mb: { xs: 3, md: 4 }, 
                      lineHeight: 1.6,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    Join hundreds of successful businesses that have already transformed their operations 
                    with our innovative virtual solutions. Experience the difference that expert guidance 
                    and cutting-edge technology can make for your retail success.
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      onClick={() => {
                        const footer = document.getElementById('footer-contact');
                        if (footer) {
                          footer.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      sx={{
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(169, 255, 79, 0.9)' 
                          : theme.palette.primary.main,
                        color: theme.palette.mode === 'dark' 
                          ? '#0D0F1C' 
                          : 'white',
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        borderRadius: 3,
                        fontWeight: 600,
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 8px 32px rgba(169, 255, 79, 0.2)'
                          : '0 8px 32px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(169, 255, 79, 1)' 
                            : theme.palette.primary.dark,
                          boxShadow: theme.palette.mode === 'dark'
                            ? '0 12px 40px rgba(169, 255, 79, 0.3)'
                            : `0 12px 40px ${theme.palette.primary.main}40`,
                        },
                      }}
                    >
                      Start Your Journey Today
                    </Button>
                  </motion.div>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
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
                          textAlign: 'center',
                        }}
                      >
                        Why Businesses Choose Us
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ListItem sx={{ px: 0, py: { xs: 1, md: 1.5 } }}>
                              <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
                                <CheckCircle sx={{ color: '#00F0FF', fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={achievement}
                                primaryTypographyProps={{
                                  color: 'white',
                                  fontWeight: 500,
                                  fontSize: { xs: '0.9rem', md: '1rem' },
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
      </Box>
    </motion.div>
  );
};

export default About;
