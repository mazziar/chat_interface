'use client';

import { useEffect, useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { max, min } from 'date-fns';
import { Stack, Typography, Skeleton } from '@mui/material';
import { useAppSelector } from '@/core/hooks';
import { useGetMessagesQuery } from '@/core/services/user/messagesApi';
import Message from './Message';
import MessageOwn from './MessageOwn';

export type PageKind = 'before' | 'after';

type ScrollSnapshot = { scrollHeight: number; scrollTop: number };

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

  useLayoutEffect(() => {
    if (!isFirst || !scrollSnapshotRef) return;

    const container = topRef.current?.closest<HTMLElement>('[data-chat-scroll-container]');
    if (!container) return;

    const prev = scrollSnapshotRef.current;
    if (prev && container.scrollHeight !== prev.scrollHeight) {
      container.scrollTop = prev.scrollTop + (container.scrollHeight - prev.scrollHeight);
    }

    scrollSnapshotRef.current = { scrollHeight: container.scrollHeight, scrollTop: container.scrollTop };
  });

  useEffect(() => {
    !!after && isLast && bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLast]);

  useEffect(() => {
    const topBox = topRef.current;
    if (!isFirst || !topBox || !messages || messages.length !== LIMIT) return;

    const observer = new IntersectionObserver(([entry]) => {
      const earliest = min(messages.map((msg) => new Date(msg.createdAt)));
      if (entry.isIntersecting) {
        const container = topBox.closest<HTMLElement>('[data-chat-scroll-container]');
        if (container && scrollSnapshotRef) {
          scrollSnapshotRef.current = { scrollHeight: container.scrollHeight, scrollTop: container.scrollTop };
        }
        addDate(earliest.toISOString());
      }
    });

    observer.observe(topBox as any);

    return () => observer.disconnect();
  }, [topRef, messages, scrollSnapshotRef]);

  useEffect(() => {
    const bottomBox = bottomRef.current;
    if (!isLast || !bottomBox || !messages || messages.length !== LIMIT) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const latest = max(messages.map((msg) => new Date(msg.createdAt)));
        addDate(latest.toISOString());
      }
    });

    observer.observe(bottomBox);

    return () => observer.disconnect();
  }, [bottomRef, messages, before]);

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
