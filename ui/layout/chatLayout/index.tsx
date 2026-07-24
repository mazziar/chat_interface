'use client';

import { Box } from '@mui/material';
import { useAppSelector } from '@/core/hooks';
import MessageForm from './messageForm';

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkTheme = useAppSelector((state) => state.settingSlice.darkTheme === 'ok');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isDarkTheme ? 0 : 0.6}), rgba(0, 0, 0, ${isDarkTheme ? 0 : 0.6})), url('/Body BG.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
        {children}
      </Box>

      <MessageForm />
    </Box>
  );
}
