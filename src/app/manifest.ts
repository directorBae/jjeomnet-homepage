import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '쩜넷 — 꿈을 향해 달려가는 모든 청년들을 위해',
    short_name: '쩜넷',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#07080c',
    theme_color: '#07080c',
    lang: 'ko',
    dir: 'ltr',
    categories: ['education', 'productivity', 'social'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
