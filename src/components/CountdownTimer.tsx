'use client';

import { Fragment, useEffect, useState } from 'react';

type Parts = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/** 달력 기준으로 남은 개월 수를 먼저 떼고, 나머지를 일/시/분/초로 환산 */
function partsUntil(target: Date): Parts | null {
  const now = new Date();
  if (target.getTime() - now.getTime() <= 0) return null;

  let months =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());
  const anchor = new Date(now.getTime());
  anchor.setMonth(anchor.getMonth() + months);
  if (anchor.getTime() > target.getTime()) {
    months -= 1;
    anchor.setMonth(anchor.getMonth() - 1);
  }

  const sec = Math.floor((target.getTime() - anchor.getTime()) / 1000);
  return {
    months: Math.max(0, months),
    days: Math.floor(sec / 86400),
    hours: Math.floor((sec % 86400) / 3600),
    minutes: Math.floor((sec % 3600) / 60),
    seconds: sec % 60,
  };
}

const DIGIT_W = 'clamp(30px,4.6vw,52px)';
const DIGIT_H = 'clamp(44px,6.8vw,76px)';

/** 플립 시계의 낱장 카드 — 위/아래 반쪽 명암, 중앙 이음새, 좌우 힌지 노치 */
function FlipDigit({ ch }: { ch: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: DIGIT_W,
        height: DIGIT_H,
        perspective: 320,
      }}
    >
      <div
        key={ch}
        className="jn-flip-card"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 8,
          background:
            'linear-gradient(180deg,#23262f 0%,#1a1d26 49.6%,#12141c 50.4%,#0d0f16 100%)',
          border: '1px solid rgba(255,255,255,.06)',
          boxShadow:
            '0 5px 12px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'clamp(26px,4.2vw,46px)',
          fontWeight: 800,
          color: '#F0F2F6',
          letterSpacing: '-.02em',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {ch}
      </div>
      {/* 중앙 이음새 */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: 2,
          transform: 'translateY(-1px)',
          background: 'rgba(0,0,0,.55)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* 좌우 힌지 노치 */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: -1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 3,
          height: 10,
          borderRadius: 2,
          background: '#07080c',
          zIndex: 3,
        }}
      />
      <span
        aria-hidden
        style={{
          position: 'absolute',
          right: -1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 3,
          height: 10,
          borderRadius: 2,
          background: '#07080c',
          zIndex: 3,
        }}
      />
    </div>
  );
}

/** 모집 마감까지 남은 시간 — 플립 시계 스타일 카운트다운 */
export default function CountdownTimer({
  target,
  title,
}: {
  target: string;
  title: string;
}) {
  // undefined = 마운트 전(SSR과 동일한 플레이스홀더), null = 마감 지남
  const [parts, setParts] = useState<Parts | null | undefined>(undefined);

  useEffect(() => {
    const t = new Date(target);
    const tick = () => setParts(partsUntil(t));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n: number) => String(n).padStart(2, '0');
  const groups: { value: string; unit: string }[] =
    parts == null
      ? [
          { value: '--', unit: '개월' },
          { value: '--', unit: '일' },
          { value: '--', unit: '시간' },
          { value: '--', unit: '분' },
          { value: '--', unit: '초' },
        ]
      : [
          { value: pad(parts.months), unit: '개월' },
          { value: pad(parts.days), unit: '일' },
          { value: pad(parts.hours), unit: '시간' },
          { value: pad(parts.minutes), unit: '분' },
          { value: pad(parts.seconds), unit: '초' },
        ];

  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(160deg,rgba(134,195,250,.12),#11131d)',
        border: '1px solid rgba(134,195,250,.32)',
        borderRadius: 20,
        padding: 'clamp(20px,3vw,28px)',
      }}
    >
      <style>{`
        .jn-flip-card {
          animation: jnFlipIn .32s ease-out;
          transform-origin: center 50%;
          backface-visibility: hidden;
          will-change: transform;
        }
        @keyframes jnFlipIn {
          0% { transform: rotateX(-78deg); }
          100% { transform: rotateX(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .jn-flip-card { animation: none; }
        }
      `}</style>
      <div
        style={{
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: '.04em',
          color: '#86C3FA',
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      {parts === null ? (
        <div style={{ fontSize: 'clamp(18px,2.4vw,24px)', fontWeight: 800 }}>
          이번 기수 모집이 마감되었습니다. 다음 기수를 기다려 주세요.
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(6px,1.2vw,12px)',
            flexWrap: 'wrap',
          }}
        >
          {groups.map((g, i) => (
            <Fragment key={g.unit}>
              {i > 0 && (
                <div
                  aria-hidden
                  style={{
                    height: DIGIT_H,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 'clamp(18px,2.6vw,30px)',
                    fontWeight: 800,
                    color: 'rgba(240,242,246,.22)',
                  }}
                >
                  :
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div style={{ display: 'flex', gap: 4 }}>
                  {g.value.split('').map((ch, j) => (
                    <FlipDigit key={j} ch={ch} />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: 'rgba(240,242,246,.5)',
                  }}
                >
                  {g.unit}
                </div>
              </div>
            </Fragment>
          ))}
          <div
            style={{
              height: DIGIT_H,
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'clamp(4px,1vw,10px)',
              fontSize: 'clamp(17px,2.2vw,26px)',
              fontWeight: 800,
              letterSpacing: '-.02em',
              color: '#F0F2F6',
            }}
          >
            남음
          </div>
        </div>
      )}
    </div>
  );
}
