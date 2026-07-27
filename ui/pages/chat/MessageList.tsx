'use client';

import type { RefObject } from 'react';
import { max, min } from 'date-fns';
import { Stack, Typography, Skeleton } from '@mui/material';
import { useAppSelector } from '@/core/hooks';
import { useGetMessagesQuery } from '@/core/services/user/messagesApi';
import type { Message as MessageType } from '@/core/services/user/messagesApi/MessagesApi';
import Message from './Message';
import MessageOwn from './MessageOwn';
import useScrollPosition from './hooks/useScrollPosition';
import useBoxObserver from './hooks/useBoxObserver';
import type { ScrollSnapshot } from './hooks/useScrollPosition';

export type PageKind = 'before' | 'after';

type MessageListProps = {
  topRef: RefObject<HTMLDivElement | null>;
  bottomRef: RefObject<HTMLDivElement | null>;
  addDate: (date: string) => void;
  before?: string;
  after?: string;
  isFirst?: boolean;
  isLast?: boolean;
  scrollSnapshotRef?: RefObject<ScrollSnapshot | null>;
};

const LIMIT = 50


export default function MessageList({
  topRef,
  bottomRef,
  addDate,
  before,
  after,
  isFirst,
  isLast,
  scrollSnapshotRef,
}: MessageListProps) {
  const author = useAppSelector((state) => state.sessionSlice.name);
  const { data: messages, isLoading, isError } = useGetMessagesQuery(
    {
      ...(before && { before: before }),
      ...(after && { after: after }),

      limit: LIMIT
    },
    { refetchOnFocus: !!after && isLast }
  );

  const { captureSnapshot } = useScrollPosition({
    topRef,
    bottomRef,
    scrollSnapshotRef,
    isFirst,
    isLast,
    after,
    messages,
  });

  useBoxObserver<MessageType>({
    ref: topRef,
    active: isFirst,
    items: messages,
    limit: LIMIT,
    getDate: (msgs) => min(msgs.map((msg) => new Date(msg.createdAt))),
    onIntersect: addDate,
    onBeforeIntersect: captureSnapshot,
  });

  useBoxObserver<MessageType>({
    ref: bottomRef,
    active: isLast,
    items: messages,
    limit: LIMIT,
    getDate: (msgs) => max(msgs.map((msg) => new Date(msg.createdAt))),
    onIntersect: addDate,
  });

  if (isLoading) {
    if (after) return null;

    return (
      <Stack spacing={1} sx={{ mb: 1 }}>
        {[...Array(LIMIT)].map((_, i) => (
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
    <Stack spacing={1} sx={{ mb: 1 }}>
      {messages?.map((msg) =>
        msg.author === author
          ? <MessageOwn key={msg._id} message={msg} />
          : <Message key={msg._id} message={msg} />
      )}
    </Stack>
  );
}
