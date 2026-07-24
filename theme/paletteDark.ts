import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#0c0206',
  100: '#0c1216',
  200: '#141a1a',
  300: '#1c2226',
  400: '#2c3236',
  500: '#3c4246',
  600: '#4c5256',
  700: '#5c6266',
  800: '#6c7276',
  900: '#ffffffff',
};

const PRIMARY = {
  lighter: '#1b6378',
  light: '#327E88',
  main: '#3b8398',
  dark: '#4b93A8',
  darker: '#5bA3B8',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#b45316ff',
  light: '#b45316ff',
  main: '#ff8c42',
  dark: '#ffb385',
  darker: '#fdc39eff',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#0d3a56',
  light: '#4fc3f7',
  main: '#29b6f6',
  dark: '#4dd0e1',
  darker: '#80deea',
  contrastText: '#000',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#4f7d19',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[900],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[900],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#d32f2f',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: '#fff',
    secondary: '#b0bec5',
    disabled: GREY[500],
  },
  background: {
    paper: '#0a0e13',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.18),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
