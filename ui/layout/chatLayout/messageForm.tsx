'use client';

import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';
import { useAppSelector } from '@/core/hooks';
import { usePostMessageMutation } from '@/core/services/user/messagesApi';

export default function MessageForm() {
  const [message, setMessage] = useState('');
  const author = useAppSelector((state) => state.sessionSlice.name);
  const [postMessage, { isLoading }] = usePostMessageMutation();

  const handleSend = async () => {
    if (!message.trim()) return;
    await postMessage({ message: message.trim(), author }).unwrap();
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
        disabled={isLoading}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
      />

      <Button color="secondary" variant='contained' onClick={handleSend} loading={isLoading} aria-label="Send message">
        Send
      </Button>
    </Stack>
  );
}
