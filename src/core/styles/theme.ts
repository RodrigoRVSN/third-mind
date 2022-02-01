import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7209b7',
    },
    secondary: {
      main: '#4895ef',
    },
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#FFFFFF',
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          padding: 0,
        },
      },
    },
  },
});

export { theme };
