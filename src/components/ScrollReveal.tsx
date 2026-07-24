'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 애플식 스크롤 리빌 — 뷰포트에 들어오면 아래에서 떠오르고,
 * 벗어나면 다시 가라앉습니다(양방향). delay(ms)로 스태거 연출.
 * prefers-reduced-motion이면 애니메이션 없이 항상 표시.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  distance = 48,
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShown(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: shown ? 'translateY(0)' : `translateY(${distance}px)`,
        opacity: shown ? 1 : 0,
        transition: `transform .7s cubic-bezier(.22,.9,.3,1) ${delay}ms, opacity .7s ease ${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
