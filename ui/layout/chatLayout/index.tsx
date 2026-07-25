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
        height: '100vh',
        backgroundImage: `url('/${isDarkTheme ? 'Body Dark BG.png' : 'Body BG.png'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto', p: 2, pt: 12 }}>
        {children}
      </Box>

      <MessageForm />
    </Box>
  );
}
