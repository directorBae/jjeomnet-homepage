'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * 점과 점이 이어져 네트워크가 되는 장식 그래픽 (SVG, 와이드).
 * - 기본 골격은 seed 고정 난수로 생성 → SSR/CSR 일치, 카드마다 다른 형태.
 * - 부모 카드(.jn-net-card)에 호버가 "시작될 때마다" 빛줄기(comet) 조합·방향·
 *   타이밍을 새로 뽑아, 매번 다른 패턴이 나온다.
 * - comet은 시차를 두고 하나씩 생겨나고 동시 최대 3개.
 * - 점·선은 아주 희미하게.
 */

const VIEW_W = 640;
const VIEW_H = 420;
const MAX_CONCURRENT = 3;
const PULSE_COUNT = 6;
const CYCLE = 3.6;
const ACTIVE = CYCLE / MAX_CONCURRENT;

/** mulberry32 — 시드 고정 난수 */
function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

type Node = { x: number; y: number };
type Edge = { a: Node; b: Node };
type Comet = Edge & { len: number; delay: number };

function buildBase(seed: number) {
  const rand = mulberry32(seed * 9973 + 17);
  const nodes: Node[] = Array.from({ length: 20 }, () => ({
    x: 16 + rand() * (VIEW_W - 32),
    y: 16 + rand() * (VIEW_H - 32),
  }));
  const edges: Edge[] = [];
  const seen = new Set<string>();
  nodes.forEach((n, i) => {
    nodes
      .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
      .filter(({ j }) => j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) return;
        seen.add(key);
        edges.push({ a: nodes[i], b: nodes[j] });
      });
  });
  return { nodes, edges };
}

/** 호버 라운드마다 새로 뽑는 comet 조합 — 방향·선택·타이밍 전부 라운드 시드 기반 */
function buildComets(edges: Edge[], seedVal: number): Comet[] {
  const rand = mulberry32(seedVal);
  const shuffled = [...edges].sort(() => rand() - 0.5);
  return shuffled.slice(0, PULSE_COUNT).map((e, i) => {
    const flip = rand() > 0.5;
    const a = flip ? e.b : e.a;
    const b = flip ? e.a : e.b;
    const d = Math.hypot(b.x - a.x, b.y - a.y);
    return {
      a,
      b,
      len: Math.min(24, d * 0.32),
      delay: i * (CYCLE / PULSE_COUNT) + rand() * 0.25,
    };
  });
}

export default function NetworkGraph({
  seed,
  style,
}: {
  seed: number;
  style?: React.CSSProperties;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [round, setRound] = useState(0);

  const { nodes, edges } = useMemo(() => buildBase(seed), [seed]);
  // round 0(초기)은 SSR과 동일, 호버가 시작될 때마다 라운드가 올라가 새 조합
  const comets = useMemo(
    () => buildComets(edges, seed * 131 + round * 7919 + 5),
    [edges, seed, round]
  );

  useEffect(() => {
    const card = svgRef.current?.closest('.jn-net-card');
    if (!card) return;
    const onEnter = () => setRound((r) => r + 1);
    card.addEventListener('mouseenter', onEnter);
    return () => card.removeEventListener('mouseenter', onEnter);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="none"
      aria-hidden
      style={{ display: 'block', pointerEvents: 'none', ...style }}
    >
      <style>{`
        .jn-comet { opacity: 0; }
        .jn-net-card:hover .jn-comet {
          animation: jnComet ${CYCLE}s linear infinite var(--jn-comet-delay, 0s);
        }
        @keyframes jnComet {
          0% { transform: translate(0, 0); opacity: 0; }
          ${(((0.08 * ACTIVE) / CYCLE) * 100).toFixed(2)}% { opacity: 1; }
          ${(((0.85 * ACTIVE) / CYCLE) * 100).toFixed(2)}% { opacity: 1; }
          ${((ACTIVE / CYCLE) * 100).toFixed(2)}% { transform: translate(var(--jn-cdx, 0px), var(--jn-cdy, 0px)); opacity: 0; }
          100% { transform: translate(var(--jn-cdx, 0px), var(--jn-cdy, 0px)); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .jn-net-card:hover .jn-comet { animation: none; }
        }
      `}</style>
      <defs>
        {comets.map((c, i) => {
          const d = Math.hypot(c.b.x - c.a.x, c.b.y - c.a.y) || 1;
          const ux = (c.b.x - c.a.x) / d;
          const uy = (c.b.y - c.a.y) / d;
          return (
            <linearGradient
              key={`${round}-${i}`}
              id={`jn-cg-${seed}-${round}-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={c.a.x}
              y1={c.a.y}
              x2={c.a.x + ux * c.len}
              y2={c.a.y + uy * c.len}
            >
              <stop offset="0" stopColor="rgba(255,255,255,0)" />
              <stop offset="0.7" stopColor="rgba(255,255,255,.5)" />
              <stop offset="1" stopColor="rgba(255,255,255,.9)" />
            </linearGradient>
          );
        })}
      </defs>

      {/* 기본 네트워크 — 아주 희미한 흰 선 */}
      {edges.map((e, i) => (
        <line
          key={`l${i}`}
          x1={e.a.x}
          y1={e.a.y}
          x2={e.b.x}
          y2={e.b.y}
          stroke="rgba(255,255,255,.05)"
          strokeWidth="0.6"
        />
      ))}

      {/* 호버 시 생겨나는 빛줄기 — 매 호버마다 새 조합 */}
      {comets.map((c, i) => {
        const d = Math.hypot(c.b.x - c.a.x, c.b.y - c.a.y) || 1;
        const ux = (c.b.x - c.a.x) / d;
        const uy = (c.b.y - c.a.y) / d;
        const travel = Math.max(0, d - c.len);
        return (
          <line
            key={`c${round}-${i}`}
            className="jn-comet"
            x1={c.a.x}
            y1={c.a.y}
            x2={c.a.x + ux * c.len}
            y2={c.a.y + uy * c.len}
            stroke={`url(#jn-cg-${seed}-${round}-${i})`}
            strokeWidth="1.3"
            strokeLinecap="round"
            style={
              {
                '--jn-cdx': `${(ux * travel).toFixed(1)}px`,
                '--jn-cdy': `${(uy * travel).toFixed(1)}px`,
                '--jn-comet-delay': `${c.delay.toFixed(2)}s`,
                filter: 'blur(.4px) drop-shadow(0 0 3px rgba(255,255,255,.6))',
                willChange: 'transform, opacity',
              } as React.CSSProperties
            }
          />
        );
      })}

      {/* 아주 희미한 작은 점 */}
      {nodes.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.x}
          cy={n.y}
          r="1.3"
          fill="rgba(255,255,255,.22)"
        />
      ))}
    </svg>
  );
}
