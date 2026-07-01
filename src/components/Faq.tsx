'use client';

import { useState } from 'react';

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((f, i) => {
        const isOpen = open.includes(i);
        return (
          <div
            key={f.q}
            style={{
              background: '#11131d',
              border: `1px solid ${isOpen ? 'rgba(134,195,250,.3)' : 'rgba(255,255,255,.07)'}`,
              borderRadius: 14,
              overflow: 'hidden',
              transition: 'border-color .25s ease',
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                padding: '20px 24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                font: 'inherit',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 16.5, fontWeight: 700 }}>{f.q}</span>
              <span
                aria-hidden
                style={{
                  flexShrink: 0,
                  transition: 'transform .3s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'none',
                  color: '#86C3FA',
                  fontSize: 14,
                }}
              >
                ▾
              </span>
            </button>
            {/* grid-template-rows 0fr → 1fr 로 높이 애니메이션 */}
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows .3s ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p style={{ margin: 0, padding: '0 24px 20px', fontSize: 15, lineHeight: 1.6, color: 'rgba(240,242,246,.66)', fontWeight: 500 }}>
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
