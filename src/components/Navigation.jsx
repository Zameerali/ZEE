import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Slide,
  Fade,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme as useARKTheme } from '../theme/ThemeProvider';
import logo from '../assets/ZEELogo.png';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const { mode, toggleTheme } = useARKTheme();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Our Virtual Space', path: '/about' },
    { text: 'Solutions', path: '/solutions' },
    { text: 'Join Our Team', path: '/join' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer-contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };



  const drawer = (
    <Box sx={{ width: 280, height: '100%', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
          ZEE-KRAZE Consultants
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => {
              handleNavigation(item.path);
              handleDrawerToggle();
            }}
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              mx: 1,
              borderRadius: 2,
              mb: 1,
              backgroundColor: location.pathname === item.path ? 'primary.main' : 'transparent',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: location.pathname === item.path ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? 600 : 400,
                color: location.pathname === item.path ? 'white' : 'text.primary',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            scrollToFooter();
            setMobileOpen(false);
          }}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(169, 255, 79, 0.9)' 
              : theme.palette.primary.main,
            color: theme.palette.mode === 'dark' 
              ? '#0D0F1C' 
              : 'white',
            mb: 2,
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(169, 255, 79, 1)' 
                : theme.palette.primary.dark,
            },
          }}
        >
          Contact Us
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={mode === 'light' ? <DarkMode /> : <LightMode />}
          onClick={toggleTheme}
        >
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <AppBar
          position="fixed"
          elevation={isScrolled ? 4 : 0}
          sx={{
            backgroundColor: isScrolled 
              ? (mode === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 10, 10, 0.95)')
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? `1px solid ${theme.palette.divider}` : 'none',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ 
              justifyContent: 'space-between', 
              py: { xs: 1, md: 1.5 }, 
              minHeight: { xs: 60, md: 70 },
              px: { xs: 1, sm: 2, md: 3 },
            }}>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component={Link}
                  to="/"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="ZEE-KRAZE Consultants Logo"
                    sx={{
                      height: { xs: 32, sm: 40, md: 50 },
                      width: 'auto',
                      mr: { xs: 1, sm: 2 },
                      objectFit: 'contain',
                          filter: 'drop-shadow(0 0 0.1px rgba(0, 0, 0, 0.7))',

                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: location.pathname === '/' && !isScrolled 
                        ? '#F5F5F5' 
                        : (mode === 'light' ? '#0D0F1C' : '#F5F5F5'),
                      fontSize: { xs: '0.8rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                      lineHeight: 1.2,
                      display: 'block',
                    }}
                  >
                    ZEE-KRAZE Consultants
                  </Typography>
                </Box>
              </motion.div>

              {/* Desktop Menu */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { sm: 0.5, md: 1 } }}>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Button
                        onClick={() => handleNavigation(item.path)}
                        sx={{
                          color: location.pathname === '/' && !isScrolled
                            ? (location.pathname === item.path ? '#F5F5F5' : '#F5F5F5')
                            : (location.pathname === item.path 
                              ? (mode === 'light' ? '#7F00FF' : '#00F0FF')
                              : (mode === 'light' ? '#0D0F1C' : '#F5F5F5')),
                          fontWeight: location.pathname === item.path ? 600 : 500,
                          position: 'relative',
                          px: { sm: 1, md: 2 },
                          py: 1,
                          fontSize: { sm: '0.875rem', md: '1rem' },
                          borderRadius: 2,
                          backgroundColor: location.pathname === item.path 
                            ? (location.pathname === '/' && !isScrolled 
                              ? 'rgba(245, 245, 245, 0.2)' 
                              : (mode === 'light' ? 'rgba(127, 0, 255, 0.1)' : 'rgba(0, 240, 255, 0.15)'))
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: location.pathname === '/' && !isScrolled
                              ? 'rgba(245, 245, 245, 0.15)' 
                              : (mode === 'light' ? 'rgba(127, 0, 255, 0.1)' : 'rgba(0, 240, 255, 0.1)'),
                            color: location.pathname === '/' && !isScrolled
                              ? '#F5F5F5'
                              : (mode === 'light' ? '#7F00FF' : '#00F0FF'),
                            borderRadius: 2,
                          },
                        }}
                      >
                        {item.text}
                      </Button>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      variant="contained"
                      onClick={scrollToFooter}
                      sx={{
                        ml: { sm: 1, md: 2 },
                        px: { sm: 2, md: 3 },
                        fontSize: { sm: '0.875rem', md: '1rem' },
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(169, 255, 79, 0.9)' 
                          : theme.palette.primary.main,
                        color: theme.palette.mode === 'dark' 
                          ? '#0D0F1C' 
                          : 'white',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? 'rgba(169, 255, 79, 1)' 
                            : theme.palette.primary.dark,
                        },
                      }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>

                  <IconButton
                    onClick={toggleTheme}
                    sx={{
                      ml: 1,
                      color: location.pathname === '/' && !isScrolled 
                        ? '#F5F5F5' 
                        : (mode === 'light' ? '#0D0F1C' : '#F5F5F5'),
                      '&:hover': {
                        backgroundColor: location.pathname === '/' && !isScrolled 
                          ? 'rgba(245, 245, 245, 0.1)' 
                          : 'action.hover',
                      },
                    }}
                  >
                    <Fade in={true} timeout={300}>
                      {mode === 'light' ? <DarkMode /> : <LightMode />}
                    </Fade>
                  </IconButton>
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    onClick={toggleTheme}
                    sx={{ 
                      color: location.pathname === '/' && !isScrolled 
                        ? '#F5F5F5' 
                        : (mode === 'light' ? '#0D0F1C' : '#F5F5F5'),
                      '&:hover': {
                        backgroundColor: location.pathname === '/' && !isScrolled 
                          ? 'rgba(245, 245, 245, 0.1)' 
                          : 'action.hover',
                      },
                    }}
                  >
                    {mode === 'light' ? <DarkMode /> : <LightMode />}
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ 
                      color: location.pathname === '/' && !isScrolled 
                        ? '#F5F5F5' 
                        : (mode === 'light' ? '#0D0F1C' : '#F5F5F5'),
                      '&:hover': {
                        backgroundColor: location.pathname === '/' && !isScrolled 
                          ? 'rgba(245, 245, 245, 0.1)' 
                          : 'action.hover',
                      },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block' },
          '@media (min-width: 1025px)': {
            display: 'none',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: mode === 'light' ? '#ffffff' : '#1a1a1a',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
