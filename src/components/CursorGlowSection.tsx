'use client';

import { useEffect, useRef } from 'react';

/**
 * 쩜넷 브랜드 4색(Spark 노랑 · Connect 초록 · Growth 파랑 · Infinity 보라)이
 * 8개의 초점으로 얽힌 화사한 풀섹션 그래디언트.
 * - 커서가 움직이면 초점들이 서로 다른 방향으로 밀리며 필드가 굴곡지고,
 * - 커서 주변에는 색 레이어만(어두운 베이스 제외) 더 크게 뒤틀린 버전이
 *   원형 마스크로 겹쳐져 어두워지지 않고 색만 왜곡되며,
 * - 그 왜곡 영역의 색상(hue)이 랜덤 워크로 조금씩 계속 변한다.
 * - 모든 값은 rAF 보간, 유휴 시에도 사인 드리프트로 천천히 흐름.
 */

// 브랜드 키 컬러 (채도 높은 버전)
const YELLOW = '250,223,75'; // Spark
const GREEN = '94,244,121'; // Connect
const BLUE = '134,195,250'; // Growth
const PURPLE = '155,92,255'; // Infinity

/** 색 초점 8개 스택 — mult로 커서 굴곡 배율 조절 (베이스 미포함) */
function colorField(mult: number) {
  const m = (v: number) => (v * mult).toFixed(1);
  return `
    radial-gradient(52% 46% at calc(16% + var(--jn-nx, 0) * ${m(16)}%) calc(10% + var(--jn-ny, 0) * ${m(13)}%), rgba(${BLUE},.3), transparent 64%),
    radial-gradient(44% 40% at calc(64% - var(--jn-nx, 0) * ${m(12)}%) calc(4% + var(--jn-ny, 0) * ${m(16)}%), rgba(${PURPLE},.26), transparent 62%),
    radial-gradient(40% 38% at calc(90% + var(--jn-nx, 0) * ${m(10)}%) calc(24% - var(--jn-ny, 0) * ${m(12)}%), rgba(${GREEN},.2), transparent 60%),
    radial-gradient(46% 42% at calc(38% - var(--jn-nx, 0) * ${m(18)}%) calc(44% + var(--jn-ny, 0) * ${m(10)}%), rgba(${YELLOW},.16), transparent 62%),
    radial-gradient(48% 44% at calc(78% + var(--jn-nx, 0) * ${m(15)}%) calc(62% + var(--jn-ny, 0) * ${m(14)}%), rgba(${BLUE},.22), transparent 62%),
    radial-gradient(42% 40% at calc(8% - var(--jn-nx, 0) * ${m(13)}%) calc(72% - var(--jn-ny, 0) * ${m(15)}%), rgba(${GREEN},.18), transparent 60%),
    radial-gradient(46% 44% at calc(52% + var(--jn-nx, 0) * ${m(11)}%) calc(96% - var(--jn-ny, 0) * ${m(12)}%), rgba(${PURPLE},.24), transparent 62%),
    radial-gradient(40% 38% at calc(30% - var(--jn-nx, 0) * ${m(14)}%) calc(88% + var(--jn-ny, 0) * ${m(16)}%), rgba(${YELLOW},.18), transparent 60%)
  `;
}

const BASE =
  'linear-gradient(165deg, #131736 0%, #0d1020 48%, #121430 100%)';

export default function CursorGlowSection({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let tnx = 0, tny = 0, cnx = 0, cny = 0; // 초점 굴곡 (-1~1)
    let tpx = 50, tpy = 50, cpx = 50, cpy = 50; // 왜곡 렌즈 중심 (%)
    let tdo = 0, cdo = 0; // 왜곡 렌즈 강도 (0~1)
    let tHue = 0, cHue = 0; // 렌즈 색상 랜덤 워크 (deg)
    let nextHueAt = 0;
    let raf = 0;
    const t0 = performance.now();

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const rx = (e.clientX - r.left) / r.width;
      const ry = (e.clientY - r.top) / r.height;
      tnx = rx * 2 - 1;
      tny = ry * 2 - 1;
      tpx = rx * 100;
      tpy = ry * 100;
      tdo = 1;
    };
    const onLeave = () => {
      tnx = 0;
      tny = 0;
      tdo = 0;
    };
    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      const ix = Math.sin(t * 0.21) * 0.2;
      const iy = Math.cos(t * 0.16) * 0.2;
      // 커서 부근 색상 랜덤 워크 — 0.6~1.6초마다 새 목표 hue로
      if (now >= nextHueAt) {
        tHue = (Math.random() - 0.5) * 120;
        nextHueAt = now + 600 + Math.random() * 1000;
      }
      cnx += (tnx + ix - cnx) * 0.055;
      cny += (tny + iy - cny) * 0.055;
      cpx += (tpx - cpx) * 0.12;
      cpy += (tpy - cpy) * 0.12;
      cdo += (tdo - cdo) * 0.08;
      cHue += (tHue - cHue) * 0.03;
      el.style.setProperty('--jn-nx', cnx.toFixed(4));
      el.style.setProperty('--jn-ny', cny.toFixed(4));
      el.style.setProperty('--jn-px', `${cpx.toFixed(2)}%`);
      el.style.setProperty('--jn-py', `${cpy.toFixed(2)}%`);
      el.style.setProperty('--jn-do', cdo.toFixed(3));
      el.style.setProperty('--jn-hue', `${cHue.toFixed(1)}deg`);
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={secRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        ...style,
      }}
    >
      {/* 기본 그래디언트 필드 (색 + 베이스) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -2,
          pointerEvents: 'none',
          background: `${colorField(1)}, ${BASE}`,
        }}
      />
      {/* 왜곡 렌즈 — 색 레이어만 크게 뒤틀어 겹침(어두워지지 않음) + 랜덤 hue 변조 */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 'var(--jn-do, 0)' as unknown as number,
          background: colorField(3.2),
          filter: 'hue-rotate(var(--jn-hue, 0deg)) saturate(1.35)',
          maskImage:
            'radial-gradient(min(360px, 38vw) circle at var(--jn-px, 50%) var(--jn-py, 50%), black, rgba(0,0,0,.45) 55%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(min(360px, 38vw) circle at var(--jn-px, 50%) var(--jn-py, 50%), black, rgba(0,0,0,.45) 55%, transparent 80%)',
        }}
      />
      {children}
    </section>
  );
}
