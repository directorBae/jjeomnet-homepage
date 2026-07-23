import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// dev 여부는 NODE_ENV가 아니라 실행 커맨드로 판별 (셸에 NODE_ENV가 박혀 있어도 안전)
const isDevServer = process.argv.some((a) => a === 'dev' || a.endsWith('/next-dev'));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) dev와 prod가 같은 폴더를 쓰면 `next dev`가 프로덕션 빌드를 파괴 → 분리.
  // 2) 이 프로젝트는 iCloud가 동기화하는 ~/Desktop에 있어, 빌드 폴더의 대량
  //    생성·삭제를 fileproviderd가 뒤늦게 재생하며 산출물을 지우는 문제가 있다.
  //    iCloud는 `.nosync` 이름을 동기화에서 제외하므로 빌드 폴더에 적용.
  // 단, Vercel은 표준 `.next` 산출 경로를 기대하므로 배포 환경에서는 기본값 사용.
  distDir:
    process.env.VERCEL === '1'
      ? '.next'
      : isDevServer
        ? '.next-dev.nosync'
        : '.next.nosync',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // 상위 폴더의 다른 lockfile로 인한 워크스페이스 루트 오인식 방지
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // 구 경로들은 커리어 트랙으로 통합됨
      { source: '/community/program', destination: '/career-track', permanent: true },
      { source: '/project-track', destination: '/career-track', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // /public/images 정적 자산 장기 캐시 (폰트는 next/font가 해시 파일명으로 자체 처리)
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
