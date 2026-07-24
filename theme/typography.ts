// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:0px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  h1: {
    letterSpacing: '2px',
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 30, md: 58, lg: 64 }),
  },
  h2: {
    letterSpacing: '2px',
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 24, md: 44, lg: 48 }),
  },
  h3: {
    letterSpacing: '2px',

    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 20, md: 30, lg: 32 }),
  },
  h4: {
    letterSpacing: '2px',
    fontWeight: 800,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 18, md: 24, lg: 24 }),
  },
  h5: {
    letterSpacing: '2px',
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 16, md: 20, lg: 20 }),
  },
  h6: {
    letterSpacing: '2px',
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 15, md: 18, lg: 18 }),
  },
  subtitle1: {
    letterSpacing: '1px',
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 15, md: 16, lg: 16 }),

  },
  subtitle2: {
    letterSpacing: '1px',
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 14, md: 15, lg: 15 }),

  },
  body1: {
    letterSpacing: '1px',
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 13, md: 14, lg: 14 }),

  },
  body2: {
    letterSpacing: '1px',
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 13 }),

  },
  caption: {
    letterSpacing: '1px',
    lineHeight: 1.5,
    fontSize: pxToRem(10),
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 13 }),

  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
    ...responsiveFontSizes({ sm: 12, md: 13, lg: 13 }),

  },
  button: {
    letterSpacing: '1px',
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 13, md: 14, lg: 14 }),
    textTransform: 'capitalize',
  },
};

export default typography;
