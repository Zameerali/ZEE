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
  PhoneAndroid,
  PersonPin,
  School,
  CheckCircle,
  ArrowForward,
  ExpandMore,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const scrollToFooter = () => {
  const footer = document.getElementById('footer-contact');
  if (footer) {
    console.log('Scrolling to footer-contact');
    footer.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.log('Footer-contact section not found');
  }
};

const SolutionContent = React.memo(({ solution }) => {
  const theme = useTheme();
  return (
    <motion.div
      key={solution.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
        <Grid item xs={12} lg={8}>
          <motion.div whileHover={{ scale: 1.01, y: -2 }} transition={{ duration: 0.3 }}>
            <Card
              sx={{
                borderRadius: 3,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'background.paper',
                border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
                mb: { xs: 3, md: 4 },
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(127, 0, 255, 0.05)',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.15)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                    mb: { xs: 3, md: 4 },
                    gap: { xs: 2, md: 0 },
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: solution.color,
                      color: 'white',
                      mr: { xs: 0, sm: 3 },
                      width: { xs: 60, md: 80 },
                      height: { xs: 60, md: 80 },
                      alignSelf: { xs: 'center', sm: 'flex-start' },
                    }}
                  >
                    <Box sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>{solution.icon}</Box>
                  </Avatar>
                  <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                        color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#0D0F1C',
                      }}
                    >
                      {solution.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.mode === 'dark' ? '#00F0FF' : solution.color,
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      {solution.subtitle}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 3, md: 4 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: { xs: 1.6, md: 1.8 },
                    color: theme.palette.mode === 'dark' ? '#F5F5F5' : 'text.primary',
                  }}
                >
                  {solution.description}
                </Typography>
                <Grid container spacing={1}>
                  {solution.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <CheckCircle
                            sx={{
                              color: solution.color,
                              mr: 1,
                              fontSize: 16,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              fontSize: { xs: '0.85rem', md: '0.9rem' },
                              color: theme.palette.mode === 'dark' ? '#F5F5F5' : 'text.primary',
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

          {solution.modules && (
            <>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#0D0F1C',
                }}
              >
                Solution Modules
              </Typography>
              {solution.modules.map((module, index) => (
                <Accordion
                  key={index}
                  expanded={solution.expandedModule === `module-${index}`}
                  onChange={solution.handleModuleChange(`module-${index}`)}
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    '&:before': { display: 'none' },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'background.paper',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(127, 0, 255, 0.05)',
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#0D0F1C',
                      }}
                    >
                      {module.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        color: theme.palette.mode === 'dark' ? '#F5F5F5' : 'text.primary',
                      }}
                    >
                      {module.description}
                    </Typography>
                    <List dense>
                      {module.features.map((feature, featureIndex) => (
                        <ListItem
                          key={featureIndex}
                          sx={{
                            px: 0,
                            py: 0.5,
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircle sx={{ color: solution.color, fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: 'body2',
                              fontSize: '0.85rem',
                              color: theme.palette.mode === 'dark' ? '#F5F5F5' : 'text.primary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          )}
        </Grid>

        <Grid
  item
  xs={12}
  md={6}
  sx={{
    display: 'flex',
    justifyContent: 'center !important', // Force horizontal centering
    alignItems: 'center !important', // Force vertical centering
    minHeight: { xs: 'auto', md: 'auto' }, // Avoid full viewport height
    height: { xs: 'auto', md: 'fit-content' }, // Fit content height to reduce excess space
    py: { xs: 2, md: 2 }, // Reduce vertical padding for balance
    px: { xs: 2, md: 0 }, // Horizontal padding on mobile, none on desktop
    width: '100%', // Ensure full width
    maxWidth: '100%', // Prevent overflow
  }}
>
  <motion.div whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}>
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(127, 0, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        maxWidth: { xs: '100%', sm: 400, md: 450 }, // Limit width for balance
        width: '100%',
        mx: 'auto', // Horizontal centering
        my: 'auto', // Vertical centering fallback
        position: 'relative', // Isolate from parent positioning
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(127, 0, 255, 0.15)',
          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.15)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Box sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#0D0F1C',
          }}
        >
          Ready to Get Started?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 3, md: 4 },
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: theme.palette.mode === 'dark' ? '#F5F5F5' : 'text.primary',
          }}
        >
          Experience the power of our solutions with a personalized trial.
        </Typography>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={scrollToFooter}
            sx={{
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(169, 255, 79, 0.9)'
                : theme.palette.primary.main,
              color: theme.palette.mode === 'dark' ? '#0D0F1C' : 'white',
              px: { xs: 4, md: 6, lg: 8 },
              py: { xs: 2, md: 2.5, lg: 3 },
              fontSize: { xs: '1rem', md: '1.2rem', lg: '1.3rem' },
              borderRadius: 3,
              fontWeight: 600,
              boxShadow: theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(169, 255, 79, 0.2)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? 'rgba(169, 255, 79, 1)'
                  : theme.palette.primary.dark,
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 12px 40px rgba(169, 255, 79, 0.3)'
                  : `0 12px 40px ${theme.palette.primary.main}40`,
              },
            }}
            fullWidth
          >
            Request a Trial
          </Button>
        </motion.div>
      </Box>
    </Box>
  </motion.div>
</Grid>
      </Grid>
    </motion.div>
  );
});

const Solutions = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedModule, setExpandedModule] = useState(false);

  const handleTabChange = (event, newValue) => {
    console.log('Tab clicked:', newValue);
    setSelectedTab(newValue);
    console.log('Selected tab updated:', newValue);
    setExpandedModule(false);
  };

  const handleModuleChange = (panel) => (event, isExpanded) => {
    setExpandedModule(isExpanded ? panel : false);
  };

  const solutions = [
    {
      id: 'smart-retail',
      title: 'Smart Retail Management',
      subtitle: 'Optimize Retail Operations',
      description:
        'We provide end-to-end oversight to ensure smooth store performance, improved customer experience, and consistent growth. Whether managing one store or an entire chain, our smart retail management approach helps your business perform at its best every day.',
      icon: <Store />,
      color: '#7F00FF',
      features: [
        'Sales & KPI Monitoring',
        'Process Optimization',
        'Staff Performance Management',
        'Customer Engagement',
        'Scalable Solutions',
      ],
      modules: [
        {
          title: 'Sales & KPI Monitoring',
          description: 'Track performance across locations with real-time insights.',
          features: ['Real-time sales tracking', 'KPI dashboards', 'Location-based analytics'],
        },
        {
          title: 'Process Optimization',
          description: 'Standardize operations to increase efficiency and reduce errors.',
          features: ['Workflow automation', 'Error reduction systems', 'Standardized procedures'],
        },
        {
          title: 'Staff Performance Management',
          description: 'Enhance accountability and provide coaching for better results.',
          features: ['Performance reviews', 'Coaching tools', 'Accountability metrics'],
        },
        {
          title: 'Customer Engagement',
          description: 'Strengthen customer interactions to drive loyalty and repeat business.',
          features: ['Customer interaction tools', 'Loyalty programs', 'Engagement strategies'],
        },
        {
          title: 'Scalable Solutions',
          description: 'Designed to adapt seamlessly across single or multiple retail locations.',
          features: ['Multi-location support', 'Scalable workflows', 'Flexible systems'],
        },
      ],
      expandedModule,
      handleModuleChange,
    },
    {
      id: 'telecom-management',
      title: 'Retail Telecom Management',
      subtitle: 'Virtual Oversight Solutions',
      description:
        'Our comprehensive telecom management solutions streamline virtual operations, reducing the need for on-site supervision while maintaining peak performance across all locations.',
      icon: <PhoneAndroid />,
      color: '#00F0FF',
      features: [
        'Comprehensive Store Management',
        'Performance Tracking',
        'Operational Excellence',
        'Accountability & Transparency',
        'Coaching & Support',
      ],
      modules: [
        {
          title: 'Comprehensive Store Management',
          description: 'Streamlined virtual solutions that reduce the need for on-site supervision.',
          features: ['Virtual oversight tools', 'Remote management systems', 'Centralized control'],
        },
        {
          title: 'Performance Tracking',
          description: 'Real-time monitoring of key sales metrics and KPIs to keep growth on track.',
          features: ['Sales metrics', 'KPI tracking', 'Growth analysis'],
        },
        {
          title: 'Operational Excellence',
          description: 'Enhancing sales processes and driving consistency across all locations.',
          features: ['Process standardization', 'Consistency tools', 'Sales optimization'],
        },
        {
          title: 'Accountability & Transparency',
          description: 'Strengthening staff accountability through clear performance insights.',
          features: ['Performance insights', 'Accountability metrics', 'Transparent reporting'],
        },
        {
          title: 'Coaching & Support',
          description: 'Remote training and guidance to empower teams and improve customer engagement.',
          features: ['Remote coaching', 'Team training modules', 'Customer engagement tools'],
        },
      ],
      expandedModule,
      handleModuleChange,
    },
    {
      id: 'virtual-sales',
      title: 'Virtual Sales Consultant',
      subtitle: 'Expert Sales Guidance',
      description:
        'Our virtual sales consultancy provides the strategies, training, and insights your team needs to perform at its best, with professional support available whenever and wherever you need it.',
      icon: <PersonPin />,
      color: '#A9FF4F',
      features: [
        'Optimize Sales Processes',
        'Improve Conversion Rates',
        'Enhance Team Skills',
        'Increase Revenue Growth',
        'Access On-Demand Expertise',
      ],
      modules: [
        {
          title: 'Optimize Sales Processes',
          description: 'Streamline workflows for higher efficiency and faster deal cycles.',
          features: ['Workflow streamlining', 'Efficiency tools', 'Deal cycle optimization'],
        },
        {
          title: 'Improve Conversion Rates',
          description: 'Use data-driven techniques to turn leads into loyal customers.',
          features: ['Data-driven strategies', 'Lead conversion tools', 'Customer retention'],
        },
        {
          title: 'Enhance Team Skills',
          description: 'Provide coaching and training to build confident, high-performing sales teams.',
          features: ['Sales training', 'Skill development', 'Performance coaching'],
        },
        {
          title: 'Increase Revenue Growth',
          description: 'Implement proven strategies to boost sales outcomes sustainably.',
          features: ['Revenue strategies', 'Sustainable growth plans', 'Sales forecasting'],
        },
        {
          title: 'Access On-Demand Expertise',
          description: 'Get professional support whenever and wherever you need it.',
          features: ['On-demand consultation', 'Expert support', 'Remote guidance'],
        },
      ],
      expandedModule,
      handleModuleChange,
    },
    {
      id: 'excellence-program',
      title: 'Sales Excellence Program',
      subtitle: 'Customized Training Programs',
      description:
        'Built to deliver measurable business outcomes, our program is designed to help you scale your salesforce, strengthen leadership capabilities, and enable your team to consistently exceed performance goals.',
      icon: <School />,
      color: '#7F00FF',
      features: [
        'Strategic Selling',
        'Customer-Centric Approach',
        'Advanced Negotiation',
        'Data-Driven Sales',
        'Ongoing Coaching',
      ],
      modules: [
        {
          title: 'Strategic Selling',
          description: 'Aligning sales strategies with organizational growth objectives.',
          features: ['Strategic alignment', 'Growth-focused selling', 'Objective planning'],
        },
        {
          title: 'Customer-Centric Approach',
          description: 'Strengthening relationships and fostering long-term client loyalty.',
          features: ['Relationship building', 'Loyalty programs', 'Client engagement'],
        },
        {
          title: 'Advanced Negotiation',
          description: 'Developing the skills required to secure and maximize high-value opportunities.',
          features: ['Negotiation training', 'High-value deal strategies', 'Skill development'],
        },
        {
          title: 'Data-Driven Sales',
          description: 'Leveraging insights and analytics to refine strategies and increase conversion rates.',
          features: ['Sales analytics', 'Insight-driven strategies', 'Conversion optimization'],
        },
        {
          title: 'Ongoing Coaching',
          description: 'Providing continuous guidance to ensure lasting performance improvement.',
          features: ['Continuous coaching', 'Performance tracking', 'Team development'],
        },
        {
          title: 'Team Performance Acceleration',
          description: 'Coach store teams on KPIs, daily goal setting, team motivation frameworks, and feedback mechanisms.',
          features: ['KPI coaching', 'Goal setting', 'Team motivation'],
        },
        {
          title: 'Retail Data Intelligence',
          description: 'Build capacity to collect, visualize, and act on store-level and SKU-level data.',
          features: ['Data collection', 'Visualization tools', 'Actionable insights'],
        },
        {
          title: 'Clienteling & Customer Loyalty',
          description: 'Train teams to build long-term customer relationships using personalized service.',
          features: ['Relationship building', 'Loyalty programs', 'CRM tools'],
        },
        {
          title: 'Visual Merchandising & Display Impact',
          description: 'Train teams in principles of visual merchandising and window displays.',
          features: ['Visual merchandising', 'Window displays', 'Seasonal rotations'],
        },
        {
          title: 'Retail Process Engineering',
          description: 'Streamline day-to-day retail operations through workflow optimization.',
          features: ['Workflow optimization', 'Standard operating procedures', 'Lean retail principles'],
        },
      ],
      expandedModule,
      handleModuleChange,
    },
    {
      id: 'retail-excellence',
      title: 'Retail Excellence Training',
      subtitle: 'Comprehensive Staff Training',
      description:
        'Our expert-led training goes beyond basic product knowledge. We equip your staff with the skills they need to excel in every aspect of cellphone retail.',
      icon: <School />,
      color: '#00F0FF',
      features: [
        'Advanced Sales Techniques',
        'Exceptional Customer Experience',
        'Product Knowledge Mastery',
        'Operational Efficiency',
        'Continuous Learning',
      ],
      modules: [
        {
          title: 'Advanced Sales Techniques',
          description: 'Transform your team into trusted advisors who understand customer needs and provide tailored solutions.',
          features: [
            'Consultative Selling',
            'Objection Handling & Closing Strategies',
            'Upselling & Cross-selling',
          ],
        },
        {
          title: 'Exceptional Customer Experience (CX) Training',
          description: 'Build rapport and ensure clear, empathetic interactions to foster customer loyalty.',
          features: [
            'Active Listening & Communication Etiquette',
            'Conflict Resolution & De-escalation',
            'Personalized Service Delivery',
          ],
        },
        {
          title: 'Product Knowledge Mastery',
          description: 'Ensure your team is well-versed in the latest devices, technologies, and service offerings.',
          features: [
            'In-depth Device & Technology Training',
            'Plan & Service Offerings',
          ],
        },
        {
          title: 'Operational Efficiency & Store Management',
          description: 'Train on efficient stock tracking, POS proficiency, and troubleshooting fundamentals.',
          features: [
            'Inventory Management Best Practices',
            'POS System Proficiency',
            'Repair & Troubleshooting Fundamentals',
          ],
        },
        {
          title: 'New Hire Onboarding & Continuous Learning',
          description: 'Quickly bring new employees up to speed and keep your team updated with industry changes.',
          features: [
            'Structured Onboarding Programs',
            'Ongoing Refresher Courses',
          ],
        },
      ],
      expandedModule,
      handleModuleChange,
    },
  ];

  const currentSolution = solutions[selectedTab];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box sx={{ pt: { xs: 12, md: 16 }, position: 'relative', zIndex: 1 }}>
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
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(169, 255, 79, 0.9)'
                    : theme.palette.primary.main,
                  color: theme.palette.mode === 'dark' ? '#0D0F1C' : 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.5, md: 1 },
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(169, 255, 79, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 16px rgba(169, 255, 79, 0.2)'
                    : '0 4px 16px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(169, 255, 79, 1)'
                      : theme.palette.primary.dark,
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 6px 20px rgba(169, 255, 79, 0.3)'
                      : '0 6px 20px rgba(0, 0, 0, 0.15)',
                  },
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.2, md: 1.1 },
                  color: theme.palette.mode === 'dark'
                    ? '#ffffff'
                    : theme.palette.primary.main,
                }}
              >
                Retail Productivity & Performance Consultancy
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: { xs: '100%', md: 800 },
                  mx: 'auto',
                  lineHeight: { xs: 1.5, md: 1.6 },
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                At ARK Retail Consultants, we offer a comprehensive suite of services designed specifically
                to address the unique needs of cellphone retail businesses. We believe in empowering your team
                and optimizing your processes for sustainable growth.
              </Typography>
            </Box>
          </motion.div>
        </Container>

        <Container maxWidth="xl">
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: { xs: 3, md: 4 }, zIndex: 2 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              onTouchStart={(e) => console.log('Touch event:', e.type)}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="solution tabs"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.mode === 'dark' ? '#00F0FF' : theme.palette.primary.main,
                  height: 3,
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  minHeight: { xs: 48, md: 60 },
                  px: { xs: 2, md: 3 },
                  opacity: 1,
                  pointerEvents: 'auto',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(0, 240, 255, 0.1)'
                      : 'rgba(127, 0, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-selected': {
                    color: theme.palette.mode === 'dark' ? '#00F0FF' : theme.palette.primary.main,
                    fontWeight: 700,
                  },
                  '&.Mui-disabled': {
                    opacity: 0.5,
                    pointerEvents: 'none',
                  },
                }}
              }
            >
              {solutions.map((solution, index) => (
                <Tab
                  key={solution.id}
                  disabled={false}
                  onClick={() => console.log(`Tab ${index} clicked`)}
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
                            color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#0D0F1C',
                          }}
                        >
                          {solution.title.split(' ').slice(0, 2).join(' ')}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.mode === 'dark' ? '#F5F5F5' : 'text.secondary',
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

          <SolutionContent solution={currentSolution} />
        </Container>
      </Box>
    </motion.div>
  );
};

export default Solutions;