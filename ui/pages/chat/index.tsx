'use client';

import { useRef, useState } from 'react';
import { Box } from '@mui/material';
import MessageList from './MessageList';

export default function ChatPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollSnapshotRef = useRef<{ scrollHeight: number; scrollTop: number } | null>(null);
  const [beforeDates, setBeforeDates] = useState<string[]>([new Date().toISOString()]);
  const [afterDates, setAfterDates] = useState<string[]>([new Date().toISOString()]);

  const addBeforeDate = (date: string) => {
    setBeforeDates(prev => prev.includes(date) ? prev : [...prev, date].sort())
  }

  const addAfterDate = (date: string) => {
    setAfterDates(prev => prev.includes(date) ? prev : [...prev, date].sort())
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%', justifyContent: 'flex-end' }}>
      <Box ref={topRef} />

      {
        beforeDates.map((date, i) => <MessageList
          key={date + 'before'}
          topRef={topRef}
          bottomRef={bottomRef}
          before={date}
          addDate={addBeforeDate}
          isFirst={i === 0}
          scrollSnapshotRef={scrollSnapshotRef}
        />)
      }

      {
        afterDates.map((date, i) => <MessageList
          key={date + 'after'}
          topRef={topRef}
          bottomRef={bottomRef}
          after={date}
          addDate={addAfterDate}
          isLast={afterDates.length - 1 === i}
        />)
      }

      <Box ref={bottomRef} />
    </Box>
  );
}
