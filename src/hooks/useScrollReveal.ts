import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?:  number;
  rootMargin?: string;
}

/**
 * Fires once when the attached element enters the viewport.
 * Disconnects the observer after the first intersection — no re-trigger.
 *
 * Usage:
 *   const { ref, visible } = useScrollReveal();
 *   <div ref={ref} className={visible ? 'opacity-100' : 'opacity-0'}>…</div>
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = '0px' }: Options = {}) {
  const ref     = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}