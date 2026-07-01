'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

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

/** 호버 시 노이즈 입자가 바깥→안쪽으로 날리고, 사진이 색으로 하이라이팅되는 이미지. */
export default function NoiseHoverImage({
  src,
  alt,
  color,
  ratio = '4 / 3',
  radius = 18,
  sizes = '(max-width: 900px) 100vw, 500px',
  priority = false,
}: {
  src: string;
  alt: string;
  color: string;
  ratio?: string;
  radius?: number;
  sizes?: string;
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const runningRef = useRef(false);
  const spawningRef = useRef(false);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { r, g, b } = hexToRgb(color);
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
      const speed = 2.4 + Math.random() * 4;
      particlesRef.current.push({
        x,
        y,
        vx: (dx / d) * speed,
        vy: (dy / d) * speed,
        size: 1.4 + Math.random() * 3.2,
        life: 0,
        maxLife: 55 + Math.random() * 45,
      });
    };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const ps = particlesRef.current;
      // 면적이 넓으므로 프레임당 더 많이 스폰
      if (spawningRef.current && ps.length < 220) for (let i = 0; i < 8; i++) spawn();
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.life++;
        const distC = Math.hypot(p.x - w / 2, p.y - h / 2);
        let a = Math.min(1, p.life / 7);
        if (distC < 50) a *= distC / 50;
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
  }, [hovered, color]);

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: 'hidden',
        background: '#11131d',
        border: `1px solid ${hovered ? rgba(color, 0.5) : 'rgba(255,255,255,.08)'}`,
        boxShadow: hovered ? `0 22px 55px ${rgba(color, 0.22)}` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'border-color .25s ease, box-shadow .25s ease, transform .25s ease',
        isolation: 'isolate',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform .5s ease' }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: color,
          mixBlendMode: 'color',
          opacity: hovered ? 0.6 : 0,
          transition: 'opacity .3s ease',
        }}
      />
      <canvas ref={canvasRef} aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }} />
    </div>
  );
}
