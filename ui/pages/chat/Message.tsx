import { Box, Typography } from '@mui/material';
import type { Message as MessageType } from '@/core/services/user/messagesApi/MessagesApi';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

export const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${month} ${year} ${hours}:${minutes}`;
};

type MessageProps = {
  message: MessageType;
};

export default function Message({ message }: MessageProps) {
  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        maxWidth: '75%',
        bgcolor: 'background.paper',
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
