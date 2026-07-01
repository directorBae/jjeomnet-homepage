'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EVENTS, type JnEvent } from '@/lib/events';

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgba(hex: string, a: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

type Particle = { x: number; y: number; vx: number; vy: number; size: number; life: number; maxLife: number };

function EventCard({ ev }: { ev: JnEvent }) {
  const [hovered, setHovered] = useState(false);
  const rootRef = useRef<HTMLAnchorElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const runningRef = useRef(false);
  const spawningRef = useRef(false);

  // 노이즈 입자: 바깥쪽에서 안쪽으로 드롭
  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { r, g, b } = hexToRgb(ev.color);
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = root.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const spawn = () => {
      const cx = w / 2;
      const cy = h / 2;
      const halfDiag = Math.hypot(w, h) / 2;
      const ang = Math.random() * Math.PI * 2;
      const rad = halfDiag * (1.05 + Math.random() * 0.25);
      const x = cx + Math.cos(ang) * rad;
      const y = cy + Math.sin(ang) * rad;
      const tx = cx + (Math.random() - 0.5) * w * 0.55;
      const ty = cy + (Math.random() - 0.5) * h * 0.55;
      const dx = tx - x;
      const dy = ty - y;
      const d = Math.hypot(dx, dy) || 1;
      const speed = 2.2 + Math.random() * 3.6;
      particlesRef.current.push({
        x,
        y,
        vx: (dx / d) * speed,
        vy: (dy / d) * speed,
        size: 1.2 + Math.random() * 3,
        life: 0,
        maxLife: 55 + Math.random() * 45,
      });
    };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const ps = particlesRef.current;
      if (spawningRef.current && ps.length < 130) for (let i = 0; i < 5; i++) spawn();
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.life++;
        const distC = Math.hypot(p.x - w / 2, p.y - h / 2);
        let a = Math.min(1, p.life / 7);
        if (distC < 46) a *= distC / 46;
        a *= 1 - p.life / p.maxLife;
        if (p.life >= p.maxLife || a <= 0.01) {
          ps.splice(i, 1);
          continue;
        }
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      if (spawningRef.current || ps.length > 0) rafRef.current = requestAnimationFrame(tick);
      else {
        runningRef.current = false;
        ctx.clearRect(0, 0, w, h);
      }
    };
    const start = () => {
      resize();
      spawningRef.current = true;
      if (!runningRef.current) {
        runningRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    if (hovered) start();
    else spawningRef.current = false;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      runningRef.current = false;
      spawningRef.current = false;
      particlesRef.current = [];
    };
  }, [hovered, ev.color]);

  const on = () => setHovered(true);
  const off = () => setHovered(false);

  return (
    <Link
      ref={rootRef}
      href={`/events#${ev.slug}`}
      onMouseEnter={on}
      onMouseLeave={off}
      onFocus={on}
      onBlur={off}
      aria-label={`${ev.name} — 행사 자세히 보기`}
      style={{
        position: 'relative',
        display: 'block',
        background: '#0e1018',
        border: `1px solid ${hovered ? rgba(ev.color, 0.55) : 'rgba(255,255,255,.08)'}`,
        borderRadius: 20,
        overflow: 'hidden',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 22px 55px ${rgba(ev.color, 0.22)}` : 'none',
        transition: 'transform .25s ease, border-color .25s ease, box-shadow .25s ease',
        isolation: 'isolate',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
        <Image
          src={ev.photo}
          alt={`${ev.name} 현장`}
          fill
          sizes="(max-width: 760px) 100vw, 300px"
          style={{ objectFit: 'cover', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform .5s ease' }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: ev.color,
            mixBlendMode: 'color',
            opacity: hovered ? 0.6 : 0,
            transition: 'opacity .3s ease',
          }}
        />
      </div>

      <div style={{ padding: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.02em' }}>{ev.name}</span>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: 'rgba(240,242,246,.55)' }}>{ev.date}</span>
        </div>
        <span
          aria-hidden
          style={{ fontSize: 15, fontWeight: 800, color: hovered ? ev.color : 'rgba(240,242,246,.45)', transition: 'color .25s ease' }}
        >
          →
        </span>
      </div>

      <canvas ref={canvasRef} aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }} />
    </Link>
  );
}

/** 홈 "이런 행사들을 직접 열어왔어요" — 최소 정보 카드, 클릭 시 /events#<slug> 이동 */
export default function EventShowcase() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 18 }}>
      {EVENTS.map((ev) => (
        <EventCard key={ev.slug} ev={ev} />
      ))}
    </div>
  );
}
