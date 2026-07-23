'use client';

/**
 * 오로라형 그래디언트 배경 섹션.
 * - 네 개의 컬러 블롭이 천천히 떠다니며 극적인 그래디언트 필드를 만들고,
 * - 커서 위치(--jn-nx/--jn-ny, -1~1)에 따라 블롭마다 다른 방향·깊이로 밀리며
 *   배경 전체가 굴곡지는 것처럼 반응합니다. (이중 래퍼: 바깥=커서 패럴랙스, 안쪽=드리프트 애니메이션)
 * - 커서를 따라오는 글로우가 굴곡의 중심을 밝힙니다.
 * - 터치 기기·reduced-motion에서는 정적인 그래디언트만 보입니다.
 */

const GLOW_SIZE = 560;

type Blob = {
  size: number;
  color: string;
  left: string;
  top: string;
  /** 커서 패럴랙스 계수(px) — 부호가 다르면 서로 반대로 밀려 굴곡이 생김 */
  fx: number;
  fy: number;
  anim: string;
  ease: string;
};

const BLOBS: Blob[] = [
  { size: 680, color: 'rgba(134,195,250,.2)', left: '4%', top: '-10%', fx: 52, fy: 38, anim: 'jnBlobA 19s ease-in-out infinite alternate', ease: '.45s' },
  { size: 560, color: 'rgba(165,148,247,.17)', left: '56%', top: '2%', fx: -68, fy: 46, anim: 'jnBlobB 23s ease-in-out infinite alternate', ease: '.6s' },
  { size: 600, color: 'rgba(94,244,121,.12)', left: '68%', top: '52%', fx: 42, fy: -58, anim: 'jnBlobC 21s ease-in-out infinite alternate', ease: '.5s' },
  { size: 540, color: 'rgba(255,186,186,.13)', left: '8%', top: '58%', fx: -50, fy: -40, anim: 'jnBlobB 25s ease-in-out infinite alternate', ease: '.7s' },
];

export default function CursorGlowSection({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        el.style.setProperty('--jn-nx', nx.toFixed(3));
        el.style.setProperty('--jn-ny', ny.toFixed(3));
        el.style.setProperty('--jn-glow-x', `${e.clientX - rect.left - GLOW_SIZE / 2}px`);
        el.style.setProperty('--jn-glow-y', `${e.clientY - rect.top - GLOW_SIZE / 2}px`);
        el.style.setProperty('--jn-glow-o', '1');
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.setProperty('--jn-nx', '0');
        el.style.setProperty('--jn-ny', '0');
        el.style.setProperty('--jn-glow-o', '0');
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        ...style,
      }}
    >
      <style>{`
        @keyframes jnBlobA {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(46px, -34px) scale(1.1); }
          100% { transform: translate(-30px, 26px) scale(.94); }
        }
        @keyframes jnBlobB {
          0% { transform: translate(0, 0) scale(1.05); }
          50% { transform: translate(-40px, 30px) scale(.95); }
          100% { transform: translate(28px, -38px) scale(1.08); }
        }
        @keyframes jnBlobC {
          0% { transform: translate(0, 0) scale(.96); }
          50% { transform: translate(34px, 40px) scale(1.08); }
          100% { transform: translate(-42px, -26px) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .jn-blob-inner { animation: none !important; }
          .jn-blob-outer { transition: none !important; }
        }
      `}</style>

      {/* 베이스 틴트 — 대각선으로 흐르는 은은한 색 층 */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -3,
          background:
            'linear-gradient(135deg, rgba(134,195,250,.07) 0%, transparent 38%, rgba(165,148,247,.06) 62%, transparent 88%)',
          pointerEvents: 'none',
        }}
      />

      {/* 오로라 블롭들 — 커서에 따라 서로 다른 방향으로 밀리며 굴곡 생성 */}
      {BLOBS.map((b, i) => (
        <div
          key={i}
          aria-hidden
          className="jn-blob-outer"
          style={{
            position: 'absolute',
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
            zIndex: -2,
            transform: `translate3d(calc(var(--jn-nx, 0) * ${b.fx}px), calc(var(--jn-ny, 0) * ${b.fy}px), 0)`,
            transition: `transform ${b.ease} cubic-bezier(.22,.9,.3,1)`,
            willChange: 'transform',
            pointerEvents: 'none',
          }}
        >
          <div
            className="jn-blob-inner"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${b.color}, transparent 68%)`,
              animation: b.anim,
            }}
          />
        </div>
      ))}

      {/* 커서 글로우 — 굴곡의 중심을 밝힘 */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(134,195,250,.15), rgba(134,195,250,.05) 45%, transparent 68%)',
          transform:
            'translate3d(var(--jn-glow-x, -9999px), var(--jn-glow-y, -9999px), 0)',
          opacity: 'var(--jn-glow-o, 0)' as unknown as number,
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
