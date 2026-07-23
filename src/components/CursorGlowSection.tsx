'use client';

import { useRef } from 'react';

const GLOW_SIZE = 560;

/**
 * 은은한 앰비언트 그래디언트가 깔리고, 커서를 따라 글로우가 부드럽게
 * 따라오는 섹션 래퍼. 터치 기기에서는 앰비언트 그래디언트만 보입니다.
 */
export default function CursorGlowSection({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const glowRef = useRef<HTMLDivElement>(null);

  return (
    <section
      onMouseMove={(e) => {
        const glow = glowRef.current;
        if (!glow) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - GLOW_SIZE / 2;
        const y = e.clientY - rect.top - GLOW_SIZE / 2;
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        glow.style.opacity = '1';
      }}
      onMouseLeave={() => {
        const glow = glowRef.current;
        if (glow) glow.style.opacity = '0';
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        ...style,
      }}
    >
      {/* 앰비언트 그래디언트 — 세 축의 컬러(하늘·초록·핑크)를 모서리에 은은하게 */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -2,
          background:
            'radial-gradient(60% 50% at 12% 8%, rgba(134,195,250,.1), transparent 62%), radial-gradient(50% 45% at 90% 42%, rgba(94,244,121,.07), transparent 62%), radial-gradient(55% 50% at 28% 96%, rgba(255,186,186,.07), transparent 62%)',
          pointerEvents: 'none',
        }}
      />
      {/* 커서 글로우 — 마우스를 살짝 뒤따라오며 그래디언트를 밝힘 */}
      <div
        ref={glowRef}
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(134,195,250,.16), rgba(134,195,250,.05) 45%, transparent 68%)',
          opacity: 0,
          transition: 'transform .18s ease-out, opacity .35s ease',
          willChange: 'transform',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      {children}
    </section>
  );
}
