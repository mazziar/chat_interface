import { Box, Typography } from '@mui/material';
import type { Message as MessageType } from '@/core/services/user/messagesApi/MessagesApi';
import { formatDateTime } from './Message';

type MessageOwnProps = {
  message: MessageType;
};

export default function MessageOwn({ message }: MessageOwnProps) {
  return (
    <Box
      sx={{
        alignSelf: 'flex-end',
        maxWidth: '75%',
        bgcolor: 'background.neutral',
        borderRadius: 1,
        border: theme => `2px solid ${theme.palette.divider}`,
        px: 2,
        py: 1.5,
      }}
    >
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {message.author}
      </Typography>

      <Typography variant="body2" sx={{ fontWeight: 'bold', display: 'block' }}>
        {message.message}
      </Typography>

      <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', color: 'text.secondary' }}>
        {formatDateTime(message.createdAt)}
      </Typography>
    </Box>
  );
}
