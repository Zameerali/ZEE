import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  Assessment,
  Store,
  People,
  AttachMoney,
  Speed,
  BusinessCenter,
  Analytics,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme as useARKTheme } from '../theme/ThemeProvider';

const PerformanceGraphsSection = () => {
  const { mode } = useARKTheme();

  const performanceMetrics = [
    {
      title: 'Sales Performance',
      value: 95,
      icon: <AttachMoney />,
      color: '#4CAF50',
      description: 'Average sales increase across all clients',
      trend: '+18% from last quarter'
    },
    {
      title: 'Operational Efficiency',
      value: 88,
      icon: <Speed />,
      color: '#00F0FF',
      description: 'Improvement in operational workflows',
      trend: '+25% efficiency gain'
    },
    {
      title: 'Client Satisfaction',
      value: 97,
      icon: <People />,
      color: mode === 'light' ? '#7F00FF' : '#00F0FF',
      description: 'Customer satisfaction rating',
      trend: '4.9/5 average rating'
    },
    {
      title: 'Store Management',
      value: 92,
      icon: <Store />,
      color: mode === 'light' ? '#0D0F1C' : '#00F0FF',
      description: 'Remote management effectiveness',
      trend: '+30% management efficiency'
    },
  ];

  const businessImpact = [
    {
      metric: 'Revenue Growth',
      value: '35%',
      description: 'Average revenue increase',
      icon: <TrendingUp />,
    },
    {
      metric: 'Cost Reduction',
      value: '28%',
      description: 'Operational cost savings',
      icon: <Assessment />,
    },
    {
      metric: 'Time Savings',
      value: '45%',
      description: 'Management time efficiency',
      icon: <Speed />,
    },
    {
      metric: 'Market Expansion',
      value: '3x',
      description: 'Faster market penetration',
      icon: <BusinessCenter />,
    },
  ];

  const caseStudyData = [
    {
      company: 'TechMobile Solutions',
      industry: 'Telecom Retail',
      results: [
        { metric: 'Sales Increase', value: '42%', color: '#4CAF50' },
        { metric: 'Efficiency Gain', value: '38%', color: '#00F0FF' },
        { metric: 'Cost Reduction', value: '31%', color: mode === 'light' ? '#7F00FF' : '#00F0FF' },
      ]
    },
    {
      company: 'RetailConnect Pro',
      industry: 'Multi-location Retail',
      results: [
        { metric: 'Revenue Growth', value: '48%', color: '#4CAF50' },
        { metric: 'Time Savings', value: '52%', color: '#00F0FF' },
        { metric: 'ROI Improvement', value: '67%', color: mode === 'light' ? '#7F00FF' : '#00F0FF' },
      ]
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'grey.50' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Chip
              label="📊 Performance Analytics"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                mb: 2,
                px: 2,
                py: 1,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                color: 'text.primary',
              }}
            >
              Proven Results That Drive Success
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Real data from our clients showing measurable improvements across all key metrics
            </Typography>
          </Box>
        </motion.div>

        {/* Performance Metrics */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {performanceMetrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={metric.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'white',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: `0 20px 40px ${metric.color}20`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        backgroundColor: `${metric.color}15`,
                        borderRadius: 2,
                        p: 2,
                        mb: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {React.cloneElement(metric.icon, { 
                        sx: { fontSize: 32, color: metric.color } 
                      })}
                    </Box>
                    
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {metric.title}
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        fontWeight: 700,
                        color: metric.color,
                        fontSize: '2.5rem',
                      }}
                    >
                      {metric.value}%
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={metric.value}
                      sx={{
                        mb: 2,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: `${metric.color}20`,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: metric.color,
                          borderRadius: 4,
                        },
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 1,
                      }}
                    >
                      {metric.description}
                    </Typography>

                    <Chip
                      label={metric.trend}
                      size="small"
                      sx={{
                        backgroundColor: `${metric.color}15`,
                        color: metric.color,
                        fontWeight: 600,
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Business Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #0D0F1C 0%, #7F00FF 100%)',
              color: 'white',
              mb: { xs: 6, md: 8 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                textAlign: 'center',
                fontWeight: 700,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
              }}
            >
              Business Impact Overview
            </Typography>

            <Grid container spacing={4}>
              {businessImpact.map((impact, index) => (
                <Grid item xs={12} sm={6} md={3} key={impact.metric}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ mb: 2, opacity: 0.9 }}>
                        {React.cloneElement(impact.icon, { sx: { fontSize: 48 } })}
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 1,
                          fontWeight: 700,
                          color: '#00F0FF',
                          fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                      >
                        {impact.value}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontWeight: 600,
                        }}
                      >
                        {impact.metric}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.9,
                        }}
                      >
                        {impact.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>

        {/* Case Studies */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {caseStudyData.map((study, index) => (
            <Grid item xs={12} md={6} key={study.company}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
                      color: 'white',
                      p: 3,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {study.company}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {study.industry}
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}
                    >
                      Results Achieved:
                    </Typography>
                    
                    {study.results.map((result, idx) => (
                      <Box key={result.metric} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {result.metric}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, color: result.color }}
                          >
                            {result.value}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={parseInt(result.value)}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: `${result.color}20`,
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: result.color,
                              borderRadius: 3,
                            },
                          }}
                        />
                      </Box>
                    ))}
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

export default PerformanceGraphsSection;
