import { useCallback, useEffect, useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import type { Message } from '@/core/services/user/messagesApi/MessagesApi';

export type ScrollSnapshot = { scrollHeight: number; scrollTop: number };

type UseScrollPositionParams = {
  topRef: RefObject<HTMLDivElement | null>;
  bottomRef: RefObject<HTMLDivElement | null>;
  scrollSnapshotRef?: RefObject<ScrollSnapshot | null>;
  isFirst?: boolean;
  isLast?: boolean;
  after?: string;
  messages: Message[] | undefined;
};

export default function useScrollPosition({
  topRef,
  bottomRef,
  scrollSnapshotRef,
  isFirst,
  isLast,
  after,
  messages,
}: UseScrollPositionParams) {
  const getContainer = useCallback(
    () => topRef.current?.closest<HTMLElement>('[data-chat-scroll-container]') ?? null,
    [topRef]
  );

  const captureSnapshot = useCallback(() => {
    const container = getContainer();
    if (!container || !scrollSnapshotRef) return;

    scrollSnapshotRef.current = { scrollHeight: container.scrollHeight, scrollTop: container.scrollTop };
  }, [getContainer, scrollSnapshotRef]);

  useLayoutEffect(() => {
    if (!isFirst || !scrollSnapshotRef) return;

    const container = getContainer();
    if (!container) return;

    const prev = scrollSnapshotRef.current;
    if (prev && container.scrollHeight !== prev.scrollHeight) {
      container.scrollTop = prev.scrollTop + (container.scrollHeight - prev.scrollHeight);
    }

    captureSnapshot();
  });

  useEffect(() => {
    !!after && isLast && bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLast]);

  return { captureSnapshot };
}
