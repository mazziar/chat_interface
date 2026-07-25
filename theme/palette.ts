import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#f2f6fa',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#59b6f0',
  light: '#47a8e4',
  main: '#3898d4',
  dark: '#2986c0',
  darker: '#125d8b',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#f3a18e',
  light: '#fd9983',
  main: '#fb876e',
  dark: '#f77659',
  darker: '#fc613e',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#e1f5fe',
  light: '#4fc3f7',
  main: '#0288d1',
  dark: '#01579b',
  darker: '#013d6e',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#229A16',
  dark: '#4f7d19',
  darker: '#08660D',
  contrastText: GREY[0],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#d1a24b',
  darker: '#7A4F01',
  contrastText: GREY[0],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
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
    primary: '#212121',
    secondary: '#696d72',
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: '#fcf6c4',
  },
  border: {
    light: '#e4e4e4',
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
