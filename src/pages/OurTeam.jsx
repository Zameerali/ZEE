import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import training from '../assets/training.jpg'; // Importing the training image
// Dummy image placeholders (replace with actual paths later)
const dummyImage = 'https://via.placeholder.com/300x400';

const OurTeam = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      description: 'Visionary leader with over 15 years in retail innovation.',
      image: training,
      alt: 'Jane Doe',
    },
    {
      name: 'John Smith',
      role: 'CTO',
      description: 'Tech expert driving cutting-edge solutions for growth.',
      image: dummyImage,
      alt: 'John Smith',
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Operations',
      description: 'Mastermind behind seamless retail operations.',
      image: dummyImage,
      alt: 'Emily Johnson',
    },
    {
      name: 'Michael Brown',
      role: 'Sales Director',
      description: 'Strategist boosting sales with innovative approaches.',
      image: dummyImage,
      alt: 'Michael Brown',
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
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0D0F1C 0%, #1A1A2E 100%)'
            : 'linear-gradient(135deg, #F9F9F9 0%, #FFFFFF 100%)',
          color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#1A1A1A',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                mb: 2,
                color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#1A1A1A',
              }}
            >
              Our Team
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.mode === 'dark' ? '#A1A7BB' : '#4A4A4A',
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
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {teamMembers.map((member, index) => {
              const isLeftImage = index % 2 === 0;
              return (
                <Grid item xs={12} md={10} key={member.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: isLeftImage ? 'row' : 'row-reverse' },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#FFFFFF',
                        border: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: 2,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : '#F0F0F0',
                          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={member.image}
                        alt={member.alt}
                        sx={{
                          width: { xs: '100%', md: '40%' },
                          height: { xs: 300, md: 'auto' },
                          objectFit: 'cover',
                          borderTopLeftRadius: { xs: 2, md: isLeftImage ? 2 : 0 },
                          borderBottomLeftRadius: { xs: 0, md: isLeftImage ? 2 : 0 },
                          borderTopRightRadius: { xs: 2, md: isLeftImage ? 0 : 2 },
                          borderBottomRightRadius: { xs: 0, md: isLeftImage ? 0 : 2 },
                        }}
                      />
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          p: { xs: 2, md: 3 },
                          textAlign: 'center',
                          width: { xs: '100%', md: '60%' },
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.25rem', md: '1.375rem' },
                            color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#1A1A1A',
                            mb: 1,
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: theme.palette.mode === 'dark' ? '#00F0FF' : '#007BFF',
                            fontWeight: 500,
                            mb: 2,
                          }}
                        >
                          {member.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.mode === 'dark' ? '#A1A7BB' : '#4A4A4A',
                            fontWeight: 400,
                            lineHeight: 1.6,
                          }}
                        >
                          {member.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default OurTeam;