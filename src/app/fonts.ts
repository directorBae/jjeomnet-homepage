import localFont from 'next/font/local';

/**
 * Freesentation (서브셋 woff2)를 next/font/local로 셀프호스팅.
 * next/font는 파일 내용을 해시해 파일명을 생성하므로, 서브셋을 다시 만들면
 * URL이 바뀌어 브라우저 캐시가 자동으로 무효화됩니다.
 * (수동 @font-face + immutable 캐시였을 때는 같은 파일명이라 옛 폰트가 남는 문제가 있었음)
 */
export const freesentation = localFont({
  src: [
    { path: '../../public/fonts/Freesentation-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Freesentation-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Freesentation-700.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Freesentation-800.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--jn-font',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Apple SD Gothic Neo',
    'Segoe UI',
    'Malgun Gothic',
    'Roboto',
    'sans-serif',
  ],
});
