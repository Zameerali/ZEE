import { createTheme } from '@mui/material/styles';

const createARKTheme = (mode) => {
  const isLight = mode === 'light';
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#0F2556', // 30% darker blue
        light: '#193A7A', // 30% darker than previous light
        dark: '#07132A', // 30% darker than previous dark
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#193A7A', // 30% darker than previous secondary main
        light: '#4062A1', // 30% darker than previous light
        dark: '#0F2556', // 30% darker than previous dark
        contrastText: '#FFFFFF',
      },
      accent: {
        main: '#07132A', // 30% darker accent
        light: '#193A7A',
        dark: '#030A14',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#A9FF4F', // Keep for CTA/Highlight
        light: '#B9FF6F',
        dark: '#99DF3F',
        contrastText: '#0D0F1C',
      },
      background: {
        default: isLight ? '#DDE3F0' : '#0B2244',
        paper: isLight ? '#F0F3FA' : '#162040',
        gradient: isLight
          ? 'linear-gradient(180deg, #0B2244 0%, #15357A 40%, #2250B2 80%, #5A8DEE 100%)'
          : 'linear-gradient(180deg, #07132A 0%, #0B2244 40%, #15357A 80%, #2250B2 100%)',
      },
      text: {
        primary: isLight ? '#0B2244' : '#F5F5F5', // Slightly darker for light, white for dark
        secondary: isLight ? '#2A3550' : '#B0B8C1', // Muted blue-gray
        accent: '#15357A', // Slightly darker blue accent
      },
      divider: isLight ? '#8A99B3' : '#223046',
    },
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.75rem',
        fontWeight: 700,
        lineHeight: 1.15,
        color: isLight ? '#0B2244' : '#FFFFFF',
        marginTop: '40px',
        marginBottom: '20px',
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.2,
        color: isLight ? '#0B2244' : '#FFFFFF',
        marginTop: '36px',
        marginBottom: '18px',
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.25,
        color: isLight ? '#0B2244' : '#FFFFFF',
        marginTop: '28px',
        marginBottom: '14px',
        '@media (max-width:600px)': {
          fontSize: '1.15rem',
        },
      },
      h4: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.2,
        color: isLight ? '#0B2244' : '#FFFFFF',
        marginTop: '20px',
        marginBottom: '10px',
        '@media (max-width:600px)': {
          fontSize: '1rem',
        },
      },
      h5: {
        fontSize: '1.05rem',
        fontWeight: 500,
        lineHeight: 1.5,
        color: isLight ? '#0B2244' : '#FFFFFF',
        '@media (max-width:600px)': {
          fontSize: '0.95rem',
        },
      },
      h6: {
        fontSize: '0.95rem',
        fontWeight: 500,
        lineHeight: 1.5,
        color: isLight ? '#0B2244' : '#FFFFFF',
        '@media (max-width:600px)': {
          fontSize: '0.85rem',
        },
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        color: isLight ? '#223046' : '#B0B8C1',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: isLight ? '#223046' : '#B0B8C1',
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
            color: '#F5F5F5',
            background: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0px 8px 24px rgba(21, 53, 122, 0.18)',
            },
          },
          contained: {
            background: mode === 'dark'
              ? 'linear-gradient(135deg, #2250B2 0%, #5A8DEE 100%)'
              : 'linear-gradient(135deg, #15357A 0%, #2250B2 100%)',
            color: '#FFFFFF',
            boxShadow: mode === 'dark'
              ? '0 2px 12px 2px rgba(90, 141, 238, 0.35)'
              : 'none',
            border: mode === 'dark'
              ? '1.5px solid #5A8DEE'
              : 'none',
            '&:hover': {
              background: mode === 'dark'
                ? 'linear-gradient(135deg, #3572B7 0%, #5A8DEE 100%)'
                : 'linear-gradient(135deg, #0B2244 0%, #2250B2 100%)',
              boxShadow: mode === 'dark'
                ? '0 4px 18px 4px rgba(90, 141, 238, 0.45)'
                : 'none',
              border: mode === 'dark'
                ? '1.5px solid #3572B7'
                : 'none',
            },
          },
          outlined: {
            borderColor: '#2250B2',
            color: '#2250B2',
            borderWidth: 2,
            background: 'none',
            '&:hover': {
              borderColor: '#15357A',
              color: '#15357A',
              backgroundColor: 'rgba(21, 53, 122, 0.05)',
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
            color: '#F5F5F5',
          },
          colorPrimary: {
            background: 'linear-gradient(135deg, #15357A 0%, #2250B2 100%)',
            color: '#F5F5F5',
          },
        },
      },
    },
  });
};

export default createARKTheme;
