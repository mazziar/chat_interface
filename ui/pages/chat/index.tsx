'use client';

import { Stack, Box, Typography, Skeleton } from '@mui/material';
import { useAppSelector } from '@/core/hooks';
import { useGetMessagesQuery } from '@/core/services/user/messagesApi';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${month} ${year} ${hours}:${minutes}`;
};

export default function ChatPage() {
  const author = useAppSelector((state) => state.sessionSlice.name);
  const { data: messages, isLoading, isError } = useGetMessagesQuery();

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
      {messages?.map((msg) => {
        const isOwn = msg.author === author;

        return (
          <Box
            key={msg._id}
            sx={{
              alignSelf: isOwn ? 'flex-end' : 'flex-start',
              maxWidth: '75%',
              bgcolor: isOwn ? 'background.neutral' : 'background.paper',
              borderRadius: 1,
              border: theme => `2px solid ${theme.palette.divider}`,
              px: 2,
              py: 1.5,
            }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {msg.author}
            </Typography>

            <Typography variant="body2" sx={{ fontWeight: 'bold', display: 'block' }}>{msg.message}</Typography>

            <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', color: 'text.secondary' }}>
              {formatDateTime(msg.createdAt)}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
}
