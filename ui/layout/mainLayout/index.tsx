'use client';

import { Grid, Container } from '@mui/material';
import Header from './Header';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container maxWidth='md' sx={{ position: 'relative' }} disableGutters >
        <Grid container sx={{ zIndex: 1, p: 2, width: '100%', position: 'absolute' }}>
          <Header />
        </Grid>

        {children}
      </Container>
    </main>
  );
}
