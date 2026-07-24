'use client';

import { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import lightTheme from './palette';
import darkTheme from './paletteDark';
import shadowsLight from './shadows';
import shadowsDark from './shadowsDark';
import breakpoints from './breakpoints';
import typography from './typography';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import NextAppDirEmotionCacheProvider from './EmotionCache';

import { useAppSelector } from '@/core/hooks';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkTheme = useAppSelector((state) => state.settingSlice.darkTheme);
  const palette = isDarkTheme ? darkTheme : lightTheme;
  const shadows = isDarkTheme ? shadowsDark : shadowsLight;

  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      breakpoints: breakpoints,
    }),
    [palette],
  );

  const theme: any = createTheme(
    themeOptions,
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
