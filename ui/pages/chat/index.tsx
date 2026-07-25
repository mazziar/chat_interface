'use client';

import { Box } from '@mui/material';
import MessageList from './MessageList';

export default function ChatPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%', justifyContent: 'flex-end' }}>
      <MessageList />
    </Box>
  );
}
