import { useEffect, useLayoutEffect } from 'react';
import type { RefObject } from 'react';

export type ScrollSnapshot = { scrollHeight: number; scrollTop: number };

type UseScrollPositionParams = {
  topRef: RefObject<HTMLDivElement | null>;
  bottomRef: RefObject<HTMLDivElement | null>;
  scrollSnapshotRef?: RefObject<ScrollSnapshot | null>;
  isFirst?: boolean;
  isLast?: boolean;
  after?: string;
  messages: unknown;
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
}
