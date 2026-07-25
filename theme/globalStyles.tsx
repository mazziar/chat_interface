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
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme.palette.grey[500]} transparent`,
        },
        '*::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.grey[500],
          borderRadius: 8,
          border: `2px solid ${theme.palette.background.default}`,
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.palette.grey[600],
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