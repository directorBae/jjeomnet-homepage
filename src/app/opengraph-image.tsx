import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = '쩜넷 — 하나의 점이, 우주가 될 때까지';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const fontBold = readFileSync(join(process.cwd(), 'src/app/_assets/Freesentation-800.ttf'));
  const fontMid = readFileSync(join(process.cwd(), 'src/app/_assets/Freesentation-500.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          backgroundColor: '#07080c',
          backgroundImage:
            'radial-gradient(120% 100% at 80% 0%, rgba(134,195,250,0.18), transparent 55%)',
          color: '#F0F2F6',
          fontFamily: 'FS',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#86C3FA' }} />
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.04em' }}>쩜넷</div>
          <div style={{ fontSize: 26, color: 'rgba(240,242,246,0.55)', fontWeight: 500 }}>
            JJeomNet
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              display: 'flex',
            }}
          >
            하나의 점이,
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              display: 'flex',
            }}
          >
            우주가 될 때까지<span style={{ color: '#86C3FA' }}>.</span>
          </div>
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: 'rgba(240,242,246,0.7)',
            display: 'flex',
          }}
        >
          꿈을 향해 달려가는 모든 청년들을 위해
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'FS', data: fontBold, weight: 800, style: 'normal' },
        { name: 'FS', data: fontMid, weight: 500, style: 'normal' },
      ],
    }
  );
}
