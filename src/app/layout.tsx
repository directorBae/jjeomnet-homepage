import type { Metadata, Viewport } from 'next';
import './globals.css';
import { freesentation } from './fonts';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import JsonLd from '@/components/JsonLd';
import { SITE, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '쩜넷 — 하나의 점이, 우주가 될 때까지',
    template: '%s · 쩜넷',
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: 'Next.js',
  keywords: [...SITE.keywords],
  authors: [{ name: '쩜넷', url: SITE_URL }],
  creator: '쩜넷',
  publisher: '쩜넷',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE_URL,
    siteName: SITE.name,
    title: '쩜넷 — 하나의 점이, 우주가 될 때까지',
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: '쩜넷 — 하나의 점이, 우주가 될 때까지',
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
      ? { 'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION }
      : {},
  },
};

export const viewport: Viewport = {
  themeColor: '#07080c',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: '쩜넷',
  alternateName: 'JJeomNet',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE.description,
  slogan: SITE.slogan,
  email: 'teamblackcoconut@gmail.com',
  sameAs: SITE.sameAs,
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: '쩜넷',
  alternateName: 'JJeomNet',
  url: SITE_URL,
  inLanguage: 'ko-KR',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={freesentation.variable}>
      <body>
        <JsonLd data={[organizationLd, websiteLd]} />
        <div
          style={{
            background: '#07080c',
            color: '#F0F2F6',
            minHeight: '100%',
            overflowX: 'hidden',
          }}
        >
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCTA />
        </div>
      </body>
    </html>
  );
}
