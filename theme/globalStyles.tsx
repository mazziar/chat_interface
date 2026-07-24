// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import { alpha, useTheme } from '@mui/material'
import React from 'react'
import { enFont } from './font';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme()

  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        'html': {
          scrollBehavior: 'smooth',
        },
        '*': {
          boxSizing: 'border-box',
          direction: theme.direction,
          fontFamily: `${enFont.style.fontFamily} !important`,
        },
        '& :-webkit-autofill': {
          transitionDelay: '999999s',
        },
        body: {
          color: theme.palette.text.primary,
        },
        a: {
          fontWeight: 800,
          color: theme.palette.text.primary,
          ':hover': {
            color: theme.palette.primary.dark,
          },
          textDecoration: 'none !important',
        },
      }
      }
    />
  )

  return inputGlobalStyles
}