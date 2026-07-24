'use client';

import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';

export default function MessageForm() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage('');
  };

  return (
    <Stack
      component="footer"
      direction="row"
      spacing={1}
      sx={{ p: 2, bgcolor: 'primary.main' }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
      />

      <Button color="secondary" variant='contained' onClick={handleSend} aria-label="Send message">
        Send
      </Button>
    </Stack>
  );
}
