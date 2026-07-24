'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤로 뷰포트에 들어오면 숫자가 0부터 슬롯머신처럼 툭·툭 올라가
 * 목표값에 안착하는 카운터. "−43%", "+71%", "88%" 같은 문자열을 그대로 받아
 * 부호/숫자/단위를 분리해 숫자만 애니메이션한다.
 * 벗어나면 리셋되어 다시 들어올 때 재생. reduced-motion이면 최종값 고정.
 */
export default function SlotNumber({ value }: { value: string }) {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? '';

  const ref = useRef<HTMLSpanElement>(null);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setNum(target);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const dur = 1300;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        // easeOutCubic — 처음엔 빠르게 돌다가 끝에서 툭, 툭 느려지며 안착
        const eased = 1 - Math.pow(1 - p, 3);
        setNum(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(raf);
        if (entry.isIntersecting) run();
        else setNum(0);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [target]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}
      {num}
      {suffix}
    </span>
  );
}
