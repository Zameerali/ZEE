import { createTheme } from '@mui/material/styles';

const createARKTheme = (mode) => {
  const isLight = mode === 'light';
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#0D0F1C', // Deep Charcoal
        light: '#141C3A', // Midnight Blue
        dark: '#000000',
        contrastText: '#F5F5F5', // Soft White
      },
      secondary: {
        main: '#7F00FF', // Electric Purple
        light: '#9F20FF',
        dark: '#5F00DF',
        contrastText: '#F5F5F5',
      },
      accent: {
        main: '#00F0FF', // Teal Cyan
        light: '#20F0FF',
        dark: '#00D0DF',
        contrastText: '#0D0F1C',
      },
      success: {
        main: '#A9FF4F', // Cyber Lime (CTA/Highlight)
        light: '#B9FF6F',
        dark: '#99DF3F',
        contrastText: '#0D0F1C',
      },
      background: {
        default: isLight ? '#F5F5F5' : '#0D0F1C', // Deep Charcoal for dark, Soft White for light
        paper: isLight ? '#ffffff' : '#141C3A', // Midnight Blue for dark mode cards
        gradient: isLight 
          ? 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)'
          : 'linear-gradient(135deg, #0D0F1C 0%, #7F00FF 100%)',
      },
      text: {
        primary: isLight ? '#0D0F1C' : '#F5F5F5', // Soft White for dark, Deep Charcoal for light
        secondary: isLight ? '#141C3A' : '#A1A7BB', // Cool Gray for dark, Midnight Blue for light
        accent: '#00F0FF', // Teal Cyan
      },
      divider: isLight ? '#A1A7BB' : '#141C3A',
    },
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        background: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '2.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 600,
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h4: {
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.5,
        '@media (max-width:600px)': {
          fontSize: '1.25rem',
        },
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.5,
        '@media (max-width:600px)': {
          fontSize: '1.1rem',
        },
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        color: isLight ? '#141C3A' : '#A1A7BB',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: isLight ? '#141C3A' : '#A1A7BB',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      'none',
      '0px 2px 8px rgba(13, 15, 28, 0.08)',
      '0px 4px 16px rgba(13, 15, 28, 0.12)',
      '0px 8px 24px rgba(13, 15, 28, 0.15)',
      '0px 12px 32px rgba(13, 15, 28, 0.18)',
      '0px 16px 40px rgba(13, 15, 28, 0.20)',
      '0px 20px 48px rgba(13, 15, 28, 0.22)',
      '0px 24px 56px rgba(13, 15, 28, 0.24)',
      '0px 28px 64px rgba(13, 15, 28, 0.26)',
      '0px 32px 72px rgba(13, 15, 28, 0.28)',
      '0px 36px 80px rgba(13, 15, 28, 0.30)',
      '0px 40px 88px rgba(13, 15, 28, 0.32)',
      '0px 44px 96px rgba(13, 15, 28, 0.34)',
      '0px 48px 104px rgba(13, 15, 28, 0.36)',
      '0px 52px 112px rgba(13, 15, 28, 0.38)',
      '0px 56px 120px rgba(13, 15, 28, 0.40)',
      '0px 60px 128px rgba(13, 15, 28, 0.42)',
      '0px 64px 136px rgba(13, 15, 28, 0.44)',
      '0px 68px 144px rgba(13, 15, 28, 0.46)',
      '0px 72px 152px rgba(13, 15, 28, 0.48)',
      '0px 76px 160px rgba(13, 15, 28, 0.50)',
      '0px 80px 168px rgba(13, 15, 28, 0.52)',
      '0px 84px 176px rgba(13, 15, 28, 0.56)',
      '0px 88px 184px rgba(13, 15, 28, 0.58)',
      '0px 92px 192px rgba(13, 15, 28, 0.60)',
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0px 8px 24px rgba(127, 0, 255, 0.3)',
            },
          },
          contained: {
            background: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
            color: '#F5F5F5',
            '&:hover': {
              background: 'linear-gradient(135deg, #9F20FF 0%, #20F0FF 100%)',
            },
          },
          outlined: {
            borderColor: '#7F00FF',
            color: '#7F00FF',
            borderWidth: 2,
            '&:hover': {
              borderColor: '#00F0FF',
              color: '#00F0FF',
              backgroundColor: 'rgba(0, 240, 255, 0.05)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: isLight 
              ? '0px 4px 20px rgba(0, 0, 0, 0.08)' 
              : '0px 4px 20px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.12)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: isLight 
                ? '0px 12px 40px rgba(0, 0, 0, 0.15)' 
                : '0px 12px 40px rgba(0, 0, 0, 0.6)',
              borderColor: isLight ? 'rgba(26, 42, 68, 0.2)' : 'rgba(255, 255, 255, 0.2)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isLight ? 'rgba(245, 245, 245, 0.95)' : 'rgba(13, 15, 28, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${isLight ? '#A1A7BB' : '#141C3A'}`,
            boxShadow: '0px 2px 20px rgba(127, 0, 255, 0.1)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 500,
          },
          colorPrimary: {
            background: 'linear-gradient(135deg, #7F00FF 0%, #00F0FF 100%)',
            color: '#F5F5F5',
          },
        },
      },
    },
  });
};

export default createARKTheme;
