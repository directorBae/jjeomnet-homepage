import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#22242e',
          backgroundImage: 'linear-gradient(135deg, #2E303D 0%, #171920 100%)',
        }}
      >
        <div
          style={{
            width: 66,
            height: 66,
            borderRadius: 18,
            backgroundColor: '#ffffff',
            transform: 'rotate(45deg)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
