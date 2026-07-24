import type { Metadata } from 'next';
import NoiseHoverImage from '@/components/NoiseHoverImage';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { EVENTS } from '@/lib/events';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '행사',
  description:
    '쩜넷이 열어온 행사들을 하나씩 소개합니다. 매달 열리는 네트워킹 행사 바닐라쩜넷, 3주간의 창업 해커톤 리얼톤, IT Arena, port-forwarding.net, uni-verse.net까지.',
  alternates: { canonical: '/events' },
  openGraph: {
    title: '행사 · 쩜넷',
    description: '사람을 모아, 커뮤니티로 잇는다. 쩜넷이 열어온 행사들을 하나씩 소개합니다.',
    url: '/events',
  },
};

export default function EventsPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: '행사', item: `${SITE_URL}/events` },
    ],
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '쩜넷 행사',
    itemListElement: EVENTS.map((ev, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: ev.name,
      url: `${SITE_URL}/events#${ev.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumb, itemList]} />

      {/* HERO */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          padding: 'clamp(86px,11vw,150px) clamp(20px,5vw,56px) clamp(56px,7vw,80px)',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(90% 70% at 75% 8%, rgba(134,195,250,.14), transparent 60%), radial-gradient(80% 60% at 10% 100%, rgba(94,244,121,.08), transparent 60%), #07080c',
            zIndex: -1,
          }}
        />
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 20px', fontSize: 'clamp(40px,6vw,82px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-.04em' }}>
            사람을 모아,
            <br />
            커뮤니티로 잇는다<span style={{ color: '#86C3FA' }}>.</span>
          </h1>
          <p style={{ margin: 0, maxWidth: 600, fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.6, color: 'rgba(240,242,246,.72)', fontWeight: 500 }}>
            쩜넷이 열어온 행사들을 하나씩 소개합니다.
          </p>
        </div>
      </section>

      {/* 행사 소개 — 바닐라쩜넷 → 리얼톤 → 그 외 */}
      {EVENTS.map((ev, i) => (
        <section
          key={ev.slug}
          id={ev.slug}
          style={{
            scrollMarginTop: 80,
            padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)',
            background: i % 2 === 0 ? '#0b0d15' : '#07080c',
          }}
        >
          <div
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
              gap: 'clamp(28px,4vw,56px)',
              alignItems: 'center',
            }}
          >
            <ScrollReveal>
              <NoiseHoverImage src={ev.photo} alt={`${ev.name} 현장`} color={ev.color} ratio="4 / 3" radius={18} sizes="(max-width: 900px) 100vw, 500px" />
            </ScrollReveal>
            <ScrollReveal delay={130}>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: '.04em',
                  color: ev.color,
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: '6px 12px',
                  borderRadius: 8,
                  marginBottom: 18,
                }}
              >
                {ev.date}
              </span>
              <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.14 }}>
                {ev.name}
              </h2>
              <p style={{ margin: 0, fontSize: 'clamp(16px,1.7vw,18px)', lineHeight: 1.65, color: 'rgba(240,242,246,.72)', fontWeight: 500 }}>
                {ev.concept}
              </p>
              {ev.press && (
                <a
                  href={ev.press}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-block', marginTop: 20, fontSize: 15, fontWeight: 700, color: ev.color }}
                >
                  보도자료 보기 →
                </a>
              )}
            </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

    </>
  );
}
