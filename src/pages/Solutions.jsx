import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Store,
  TrendingUp,
  Phone,
  SupportAgent,
  CheckCircle,
  ArrowForward,
  Business,
  Analytics,
  Speed,
  Security,
  ExpandMore,
  School,
  Psychology,
  Assessment,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Solutions = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const solutions = [
    {
      id: 'retail',
      title: 'Retail Productivity & Performance Consultancy',
      subtitle: 'Comprehensive Retail Solutions',
      description: 'Transform your retail operations with our end-to-end consultancy services designed to maximize productivity and performance across all touchpoints.',
      icon: <Store />,
      color: '#0D0F1C',
      features: [
        'Operational Efficiency Optimization',
        'Performance Analytics & KPI Tracking',
        'Customer Experience Enhancement',
        'Inventory Management Solutions',
        'Multi-channel Integration',
        'Staff Productivity Tools',
      ],
      modules: [
        {
          title: 'Store Operations Management',
          description: 'Streamline daily operations with automated workflows and real-time monitoring.',
          features: ['Automated task management', 'Real-time reporting', 'Performance dashboards'],
        },
        {
          title: 'Customer Analytics Platform',
          description: 'Deep insights into customer behavior and preferences for better decision making.',
          features: ['Customer journey mapping', 'Behavioral analytics', 'Predictive insights'],
        },
        {
          title: 'Inventory Optimization',
          description: 'Smart inventory management with demand forecasting and automated reordering.',
          features: ['Demand forecasting', 'Auto-reorder systems', 'Stock level optimization'],
        },
      ],
    },
    {
      id: 'telecom',
      title: 'Smart Retail Management',
      subtitle: 'VRO Technology Platform',
      description: 'Revolutionary Virtual Retail Operations (VRO) platform that enables seamless management of multiple retail locations from anywhere in the world.',
      icon: <Business />,
      color: '#7F00FF',
      features: [
        'Virtual Store Management',
        'Real-time Performance Monitoring',
        'Cloud-based Operations Dashboard',
        'Mobile Accessibility',
        'Multi-store Coordination',
        'Remote Team Management',
      ],
      modules: [
        {
          title: 'VRO Dashboard',
          description: 'Centralized command center for all your retail operations with real-time insights.',
          features: ['Live store monitoring', 'Performance metrics', 'Alert systems'],
        },
        {
          title: 'Mobile Management App',
          description: 'Manage your stores on-the-go with our comprehensive mobile application.',
          features: ['Remote access', 'Push notifications', 'Mobile reporting'],
        },
        {
          title: 'Integration Hub',
          description: 'Seamlessly connect with existing systems and third-party applications.',
          features: ['API integrations', 'Data synchronization', 'System compatibility'],
        },
      ],
    },
    {
      id: 'virtual-sales',
      title: 'Virtual Sales Consultant',
      subtitle: 'VSC AI Platform',
      description: 'AI-powered Virtual Sales Consultant (VSC) that provides intelligent sales assistance, customer insights, and real-time coaching for your sales team.',
      icon: <SupportAgent />,
      color: '#00F0FF',
      features: [
        'AI-Powered Sales Assistance',
        'Real-time Customer Insights',
        'Intelligent Product Recommendations',
        'Sales Process Automation',
        'Performance Coaching',
        'Conversion Optimization',
      ],
      modules: [
        {
          title: 'AI Sales Assistant',
          description: 'Intelligent assistant that guides sales representatives through complex sales processes.',
          features: ['Smart recommendations', 'Real-time coaching', 'Process automation'],
        },
        {
          title: 'Customer Intelligence',
          description: 'Advanced customer profiling and behavior analysis for personalized interactions.',
          features: ['Customer profiling', 'Behavior analysis', 'Preference tracking'],
        },
        {
          title: 'Performance Analytics',
          description: 'Comprehensive analytics to track and improve sales performance.',
          features: ['Sales metrics', 'Performance trends', 'Improvement insights'],
        },
      ],
    },
    {
      id: 'training',
      title: 'Sales Excellence Program',
      subtitle: 'Comprehensive Training Solutions',
      description: 'Our Sales Excellence Program combines SRP (Sales Resource Planning) with comprehensive training modules to elevate your team\'s performance.',
      icon: <School />,
      color: '#2E7D32',
      features: [
        'Consultative Selling Techniques',
        'Product Knowledge Mastery',
        'Customer Experience Training',
        'Performance Optimization',
        'Digital Sales Tools',
        'Continuous Learning Platform',
      ],
      modules: [
        {
          title: 'Consultative Selling Mastery',
          description: 'Advanced techniques for building relationships and closing deals through consultative approaches.',
          features: ['Relationship building', 'Needs analysis', 'Solution selling'],
        },
        {
          title: 'Product Knowledge Excellence',
          description: 'Comprehensive product training with interactive modules and assessments.',
          features: ['Interactive learning', 'Knowledge assessments', 'Certification programs'],
        },
        {
          title: 'Customer Experience Enhancement',
          description: 'Training focused on delivering exceptional customer experiences at every touchpoint.',
          features: ['Service excellence', 'Communication skills', 'Problem resolution'],
        },
      ],
    },
  ];

  const currentSolution = solutions[selectedTab];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ pt: { xs: 12, md: 16 } }}>
        {/* Hero Section */}
        <Container maxWidth="xl" sx={{ mb: { xs: 4, md: 6 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Chip
                label="Our Solutions"
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
                Comprehensive Business Solutions
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: 800 },
                  mx: 'auto',
                  lineHeight: { xs: 1.5, md: 1.6 },
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  px: { xs: 2, md: 0 },
                }}
              >
                Discover our complete suite of advanced solutions designed to transform your retail operations 
                and drive sustainable growth through innovative technology and proven methodologies.
              </Typography>
            </Box>
          </motion.div>
        </Container>

        {/* Solution Tabs */}
        <Container maxWidth="xl">
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: { xs: 3, md: 4 } }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  minHeight: { xs: 48, md: 60 },
                  px: { xs: 2, md: 3 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 42, 68, 0.08)',
                    transform: 'translateY(-2px)',
                  },
                },
              }}
            >
              {solutions.map((solution, index) => (
                <Tab
                  key={solution.id}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 1.5 } }}>
                      <Avatar
                        sx={{
                          backgroundColor: selectedTab === index ? solution.color : 'transparent',
                          color: selectedTab === index ? 'white' : solution.color,
                          width: { xs: 32, md: 40 },
                          height: { xs: 32, md: 40 },
                          border: `2px solid ${solution.color}`,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Box sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                          {solution.icon}
                        </Box>
                      </Avatar>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: { xs: '0.875rem', md: '1rem' },
                          }}
                        >
                          {solution.title.split(' ').slice(0, 2).join(' ')}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'text.secondary',
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            display: { xs: 'none', sm: 'block' },
                          }}
                        >
                          {solution.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              ))}
            </Tabs>
          </Box>

          {/* Solution Content */}
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
              {/* Main Content */}
              <Grid item xs={12} lg={8}>
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      background: `linear-gradient(135deg, ${currentSolution.color}10 0%, ${currentSolution.color}05 100%)`,
                      border: `1px solid ${currentSolution.color}20`,
                      mb: { xs: 3, md: 4 },
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 20px 40px ${currentSolution.color}20`,
                        border: `1px solid ${currentSolution.color}30`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: { xs: 'flex-start', md: 'center' },
                        flexDirection: { xs: 'column', sm: 'row' },
                        mb: { xs: 3, md: 4 },
                        gap: { xs: 2, md: 0 },
                      }}>
                        <Avatar
                          sx={{
                            backgroundColor: currentSolution.color,
                            color: 'white',
                            mr: { xs: 0, sm: 3 },
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            alignSelf: { xs: 'center', sm: 'flex-start' },
                          }}
                        >
                          <Box sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            {currentSolution.icon}
                          </Box>
                        </Avatar>
                        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                          <Typography 
                            variant="h3" 
                            sx={{ 
                              fontWeight: 700, 
                              mb: 1,
                              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                            }}
                          >
                            {currentSolution.title}
                          </Typography>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: currentSolution.color, 
                              fontWeight: 500,
                              fontSize: { xs: '1rem', md: '1.25rem' },
                            }}
                          >
                            {currentSolution.subtitle}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: { xs: 3, md: 4 }, 
                          fontSize: { xs: '1rem', md: '1.1rem' }, 
                          lineHeight: { xs: 1.6, md: 1.8 },
                          color: 'text.primary',
                        }}
                      >
                        {currentSolution.description}
                      </Typography>

                      <Grid container spacing={2}>
                        {currentSolution.features.map((feature, index) => (
                          <Grid item xs={12} sm={6} key={index}>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <CheckCircle sx={{ 
                                  color: currentSolution.color, 
                                  mr: 1, 
                                  fontSize: { xs: 18, md: 20 } 
                                }} />
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    fontWeight: 500,
                                    fontSize: { xs: '0.875rem', md: '1rem' },
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Modules */}
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                  Solution Modules
                </Typography>
                {currentSolution.modules.map((module, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      mb: 2,
                      borderRadius: 2,
                      '&:before': { display: 'none' },
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      sx={{
                        backgroundColor: `${currentSolution.color}08`,
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {module.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                        {module.description}
                      </Typography>
                      <List dense>
                        {module.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircle sx={{ color: currentSolution.color, fontSize: 18 }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>

              {/* Sidebar */}
              <Grid item xs={12} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background: `linear-gradient(135deg, ${currentSolution.color} 0%, ${currentSolution.color}dd 100%)`,
                      color: 'white',
                      borderRadius: 4,
                      mb: { xs: 3, md: 4 },
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 20px 40px ${currentSolution.color}40`,
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
                    <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                      >
                        Ready to Get Started?
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: { xs: 3, md: 4 }, 
                          opacity: 0.9,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                      >
                        Experience the power of our solutions with a personalized trial.
                      </Typography>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          endIcon={<ArrowForward />}
                          sx={{
                            background: 'linear-gradient(135deg, #A9FF4F 0%, #00F0FF 100%)',
                            color: '#0D0F1C',
                            mb: 2,
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            borderRadius: 3,
                            boxShadow: '0 8px 32px rgba(255, 98, 0, 0.3)',
                            '&:hover': {
                              backgroundColor: '#B9FF6F',
                              boxShadow: '0 12px 40px rgba(255, 98, 0, 0.4)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                          fullWidth
                        >
                          Request a Trial
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          sx={{
                            borderColor: 'white',
                            color: 'white',
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            borderRadius: 3,
                            '&:hover': {
                              borderColor: 'white',
                              backgroundColor: 'rgba(255, 255, 255, 0.15)',
                              transform: 'translateY(-2px)',
                            },
                          }}
                          fullWidth
                        >
                          Schedule Demo
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    sx={{ 
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: `0 12px 28px ${currentSolution.color}20`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 3,
                          fontSize: { xs: '1.1rem', md: '1.25rem' },
                        }}
                      >
                        Key Benefits
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {[
                          { icon: <Speed />, text: '50% faster operations' },
                          { icon: <Analytics />, text: 'Real-time insights' },
                          { icon: <Security />, text: 'Enterprise security' },
                          { icon: <SupportAgent />, text: '24/7 support' },
                        ].map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                          >
                            <ListItem sx={{ px: 0, py: 1 }}>
                              <ListItemIcon sx={{ 
                                color: currentSolution.color,
                                minWidth: { xs: 36, md: 40 },
                              }}>
                                {benefit.icon}
                              </ListItemIcon>
                              <ListItemText 
                                primary={benefit.text}
                                primaryTypographyProps={{
                                  fontSize: { xs: '0.9rem', md: '1rem' },
                                  fontWeight: 500,
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
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Solutions;
