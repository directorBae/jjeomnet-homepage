'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤로 뷰포트에 들어오면, 크게 블러져 있던 내용이 초점이 맞듯
 * 선명해지는 리빌. 벗어나면 다시 흐려져 재진입 시 반복된다.
 * reduced-motion이면 항상 선명하게 표시.
 */
export default function BlurReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
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
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        filter: shown ? 'blur(0)' : 'blur(14px)',
        opacity: shown ? 1 : 0.35,
        transition: `filter .9s cubic-bezier(.22,.9,.3,1) ${delay}ms, opacity .9s ease ${delay}ms`,
        willChange: 'filter, opacity',
      }}
    >
      {children}
    </div>
  );
}
