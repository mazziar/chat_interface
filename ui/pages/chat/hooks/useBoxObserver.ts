import { useEffect } from 'react';
import type { RefObject } from 'react';

type UseBoxObserverParams<T> = {
  ref: RefObject<HTMLElement | null>;
  active?: boolean;
  items?: T[];
  limit: number;
  getDate: (items: T[]) => Date;
  onIntersect: (date: string) => void;
  onBeforeIntersect?: () => void;
};

export default function useBoxObserver<T>({
  ref,
  active,
  items,
  limit,
  getDate,
  onIntersect,
  onBeforeIntersect,
}: UseBoxObserverParams<T>) {
  useEffect(() => {
    const box = ref.current;
    if (!active || !box || !items || items.length !== limit) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onBeforeIntersect?.();
        onIntersect(getDate(items).toISOString());
      }
    });

    observer.observe(box);

    return () => observer.disconnect();
  }, [ref, items]);
}
