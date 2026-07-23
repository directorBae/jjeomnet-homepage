'use client';

import { useEffect, useRef } from 'react';

/**
 * 멘토 카드(.mentor-card) 위에서만, 마우스를 따라 커리어 이모지가 흩날리는 장식 효과.
 * - 데스크톱(정밀 포인터) 전용, prefers-reduced-motion 존중
 * - 리렌더 없이 DOM에 직접 파티클을 붙였다 애니메이션 종료 시 제거
 * - 파티클 스타일은 globals.css의 .jn-trail-emoji / jnTrailFloat 참고
 */

const EMOJIS = ['💼', '🚀', '📈', '🎯', '💡', '🏆', '✨'];

export default function CareerCursorTrail() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let lastX = -1000;
    let lastY = -1000;
    let lastT = 0;
    let i = 0;

    const onMove = (e: PointerEvent) => {
      // 멘토 카드 위에서만 발동
      if (!(e.target instanceof Element) || !e.target.closest('.mentor-card')) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      // 40ms · 14px 스로틀 — 과밀 방지
      if (now - lastT < 40 || dx * dx + dy * dy < 196) return;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;
      if (root.childElementCount > 24) root.firstElementChild?.remove();

      const s = document.createElement('span');
      s.className = 'jn-trail-emoji';
      s.textContent = EMOJIS[i++ % EMOJIS.length];
      s.style.left = `${e.clientX}px`;
      s.style.top = `${e.clientY}px`;
      s.style.setProperty('--r', `${Math.round(Math.random() * 44 - 22)}deg`);
      s.style.setProperty('--x', `${Math.round(Math.random() * 32 - 16)}px`);
      s.addEventListener('animationend', () => s.remove());
      root.appendChild(s);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 40,
        overflow: 'hidden',
      }}
    />
  );
}
