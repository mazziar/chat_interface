'use client';

import { useEffect, useRef } from 'react';
import { Stack, Box, Typography, Skeleton } from '@mui/material';
import { useAppSelector } from '@/core/hooks';
import { useGetMessagesQuery } from '@/core/services/user/messagesApi';
import Message from './Message';
import MessageOwn from './MessageOwn';

export default function MessageList() {
  const author = useAppSelector((state) => state.sessionSlice.name);
  const { data: messages, isLoading, isError } = useGetMessagesQuery();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (isLoading) {
    return (
      <Stack spacing={1}>
        {[...Array(4)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rounded"
            height={48}
            sx={{
              alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
              width: '60%',
            }}
          />
        ))}
      </Stack>
    );
  }

  if (isError) {
    return (
      <Typography sx={{ p: 4, textAlign: 'center' }} color="error">
        Failed to load messages.
      </Typography>
    );
  }

  return (
    <Stack spacing={1}>
      {messages?.map((msg) =>
        msg.author === author
          ? <MessageOwn key={msg._id} message={msg} />
          : <Message key={msg._id} message={msg} />
      )}

      <Box ref={bottomRef} />
    </Stack>
  );
}
