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
  Speed,
  Analytics,
  SupportAgent,
  HeadsetMic,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Reusable SolutionContent component
const SolutionContent = React.memo(({ solution }) => (
  <motion.div
    key={solution.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
      {/* Main Content */}
      <Grid item xs={12} lg={8}>
        <motion.div whileHover={{ scale: 1.01, y: -2 }} transition={{ duration: 0.3 }}>
          <Card
            sx={{
              borderRadius: 4,
              background: `linear-gradient(135deg, ${solution.color}10 0%, ${solution.color}05 100%)`,
              border: `1px solid ${solution.color}20`,
              mb: { xs: 3, md: 4 },
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: `0 20px 40px ${solution.color}20`,
                border: `1px solid ${solution.color}30`,
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
                    }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: solution.color,
                      fontWeight: 500,
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
                  color: 'text.primary',
                }}
              >
                {solution.description}
              </Typography>
              <Grid container spacing={2}>
                {solution.features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle
                          sx={{
                            color: solution.color,
                            mr: 1,
                            fontSize: { xs: 18, md: 20 },
                          }}
                        />
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

        {/* Solution Modules */}
        {solution.modules && (
          <>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Solution Modules
            </Typography>
            {solution.modules.map((module, index) => (
              <Accordion
                key={index}
                expanded={solution.expandedModule === `module-${index}`}
                onChange={solution.handleModuleChange(`module-${index}`)}
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
                    backgroundColor: `${solution.color}08`,
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
                          <CheckCircle sx={{ color: solution.color, fontSize: 18 }} />
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
          </>
        )}
      </Grid>

      {/* Sidebar */}
      <Grid item xs={12} lg={4}>
        <motion.div whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3 }}>
          <Card
            sx={{
              background: `linear-gradient(135deg, ${solution.color} 0%, ${solution.color}dd 100%)`,
              color: 'white',
              borderRadius: 4,
              mb: { xs: 3, md: 4 },
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: `0 20px 40px ${solution.color}40`,
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

        {/* Key Benefits */}
        <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.3 }}>
          <Card
            sx={{
              borderRadius: 4,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: `0 12px 28px ${solution.color}20`,
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
                  { icon: <Speed />, text: 'Enhanced operational efficiency' },
                  { icon: <Analytics />, text: 'Real-time performance insights' },
                  { icon: <SupportAgent />, text: 'Empowered team performance' },
                  { icon: <HeadsetMic />, text: 'Improved customer loyalty' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon
                        sx={{
                          color: solution.color,
                          minWidth: { xs: 36, md: 40 },
                        }}
                      >
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
));

// Reusable TrainingModule component
const TrainingModule = React.memo(({ module }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Card
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        mb: 4,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2rem' },
            color: 'white',
          }}
        >
          {module.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            opacity: 0.9,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
          }}
        >
          {module.description}
        </Typography>
        {module.sections.map((section, sectionIndex) => (
          <Accordion
            key={sectionIndex}
            expanded={module.expandedModule === `${module.id}-${sectionIndex}`}
            onChange={module.handleModuleChange(`${module.id}-${sectionIndex}`)}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              mb: 2,
              borderRadius: 2,
              '&:before': { display: 'none' },
              '&.Mui-expanded': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: 'white' }} />}
              sx={{
                borderRadius: 2,
                '&.Mui-expanded': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                {section.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <List dense>
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                  >
                    <ListItem sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle sx={{ color: '#A9FF4F', fontSize: 18 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        secondary={item.description}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          color: '#A9FF4F',
                        }}
                        secondaryTypographyProps={{
                          fontSize: { xs: '0.875rem', md: '0.95rem' },
                          color: 'white',
                          opacity: 0.9,
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  </motion.div>
));

const Solutions = () => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedModule, setExpandedModule] = useState(false);

  const handleTabChange = (event, newValue) => {
    console.log('Tab clicked:', newValue); // Debug click
    setSelectedTab(newValue, () => {
      console.log('Selected tab updated:', newValue); // Debug state update
    });
    setExpandedModule(false);
  };

  const handleModuleChange = (panel) => (event, isExpanded) => {
    setExpandedModule(isExpanded ? panel : false);
  };

  // Client-provided content structured for tabs
  const solutions = [
    {
      id: 'smart-retail',
      title: 'Smart Retail Management',
      subtitle: 'Optimize Retail Operations',
      description:
        'We provide end-to-end oversight to ensure smooth store performance, improved customer experience, and consistent growth. Whether managing one store or an entire chain, our smart retail management approach helps your business perform at its best every day.',
      icon: <Store />,
      color: '#0D0F1C',
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
      color: '#7F00FF',
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
      color: '#00F0FF',
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
      color: '#2E7D32',
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
      ],
      expandedModule,
      handleModuleChange,
    },
  ];

  // Client-provided training programs
  const trainingModules = [
    {
      id: 'retail-excellence',
      title: 'Retail Excellence Training Program',
      description:
        'Our expert-led training goes beyond basic product knowledge. We equip your staff with the skills they need to excel in every aspect of cellphone retail.',
      sections: [
        {
          title: 'Advanced Sales Techniques',
          items: [
            {
              name: 'Consultative Selling',
              description:
                'Transform your team into trusted advisors who understand customer needs and provide tailored solutions',
            },
            {
              name: 'Objection Handling & Closing Strategies',
              description: 'Master techniques to confidently address concerns and effectively close sales',
            },
            {
              name: 'Upselling & Cross-selling',
              description:
                'Identify opportunities to enhance customer value through accessories, services, and plan upgrades',
            },
          ],
        },
        {
          title: 'Exceptional Customer Experience (CX) Training',
          items: [
            {
              name: 'Active Listening & Communication Etiquette',
              description: 'Build rapport and ensure clear, empathetic interactions',
            },
            {
              name: 'Conflict Resolution & De-escalation',
              description: 'Equip staff to handle difficult situations with professionalism and ease',
            },
            {
              name: 'Personalized Service Delivery',
              description: 'Train your team to create memorable, positive experiences that foster loyalty',
            },
          ],
        },
        {
          title: 'Product Knowledge Mastery',
          items: [
            {
              name: 'In-depth Device & Technology Training',
              description:
                'Ensure your team is well-versed in the latest smartphones, tablets, wearables, and network technologies (e.g., 5G capabilities, IoT integration)',
            },
            {
              name: 'Plan & Service Offerings',
              description:
                'Comprehensive understanding of various mobile plans, data packages, value-added services, and promotions',
            },
          ],
        },
        {
          title: 'Operational Efficiency & Store Management',
          items: [
            {
              name: 'Inventory Management Best Practices',
              description: 'Training on efficient stock tracking, preventing loss, and optimizing product displays',
            },
            {
              name: 'POS System Proficiency',
              description: 'Ensuring seamless transactions and accurate data entry',
            },
            {
              name: 'Repair & Troubleshooting Fundamentals',
              description: 'Basic skills for handling common customer issues and repair intake processes',
            },
          ],
        },
        {
          title: 'New Hire Onboarding & Continuous Learning',
          items: [
            {
              name: 'Structured Onboarding Programs',
              description: 'Quickly bring new employees up to speed with comprehensive training',
            },
            {
              name: 'Ongoing Refresher Courses',
              description: 'Keep your team at the forefront of industry changes with continuous updates',
            },
          ],
        },
      ],
      expandedModule,
      handleModuleChange,
    },
    {
      id: 'excellence-modules',
      title: 'Sales Excellence Training Modules',
      description:
        'Specialized training modules designed to accelerate performance and build expertise across all areas of retail operations.',
      sections: [
        {
          title: 'Team Performance Acceleration',
          items: [
            {
              name: 'KPI Coaching & Goal Setting',
              description:
                'Coach store teams on KPIs, daily goal setting, team motivation frameworks, and feedback mechanisms',
            },
            {
              name: 'Leadership Development',
              description: 'Comprehensive leadership development programs for managers and team leads',
            },
          ],
        },
        {
          title: 'Retail Data Intelligence',
          items: [
            {
              name: 'Data Collection & Visualization',
              description: 'Build capacity to collect, visualize, and act on store-level and SKU-level data',
            },
            {
              name: 'Analytics & Forecasting',
              description: 'Advanced training on dashboards, sales trend analysis, and forecasting techniques',
            },
          ],
        },
        {
          title: 'Clienteling & Customer Loyalty',
          items: [
            {
              name: 'Relationship Building',
              description: 'Train teams to build long-term customer relationships using personalized service',
            },
            {
              name: 'CRM & Loyalty Programs',
              description: 'Comprehensive training on follow-ups, loyalty programs, and CRM tools',
            },
          ],
        },
        {
          title: 'Visual Merchandising & Display Impact',
          items: [
            {
              name: 'Visual Merchandising Principles',
              description: 'Train teams in principles of visual merchandising and window displays',
            },
            {
              name: 'Color Theory & Seasonal Rotations',
              description: 'Advanced training on color theory and seasonal product rotations',
            },
          ],
        },
        {
          title: 'Retail Process Engineering',
          items: [
            {
              name: 'Workflow Optimization',
              description: 'Streamline day-to-day retail operations through workflow optimization',
            },
            {
              name: 'Standard Operating Procedures',
              description: 'Develop and implement comprehensive SOPs and lean retail principles',
            },
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
                  px: { xs: 2, md: 0 },
                }}
              >
                At ARK Retail Consultants, we offer a comprehensive suite of services designed specifically
                to address the unique needs of cellphone retail businesses. We believe in empowering your team
                and optimizing your processes for sustainable growth.
              </Typography>
            </Box>
          </motion.div>
        </Container>

        {/* Solution Tabs */}
        <Container maxWidth="xl">
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: { xs: 3, md: 4 }, zIndex: 2 }}>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              onTouchStart={(e) => console.log('Touch event:', e.type)} // Debug touch
              variant="scrollable"
              scrollButtons="auto"
              aria-label="solution tabs"
              sx={{
                '& .MuiTabs-root': { zIndex: 2 },
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
                    backgroundColor: 'rgba(26, 42, 68, 0.08)',
                    transform: 'translateY(-2px)',
                  },
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                  },
                  '&.Mui-disabled': {
                    opacity: 0.5,
                    pointerEvents: 'none',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.primary.main,
                  height: 3,
                },
              }}
            >
              {solutions.map((solution, index) => (
                <Tab
                  key={solution.id}
                  disabled={false}
                  onClick={() => console.log(`Tab ${index} clicked`)} // Debug click
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
          <SolutionContent solution={currentSolution} />
        </Container>

        {/* Training Programs Section */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'white',
            py: { xs: 6, md: 8 },
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
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Training & Development Programs
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                Comprehensive training solutions designed to elevate your team's performance
                and deliver exceptional customer experiences.
              </Typography>
            </Box>
            {trainingModules.map((module) => (
              <TrainingModule key={module.id} module={module} />
            ))}
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Solutions;