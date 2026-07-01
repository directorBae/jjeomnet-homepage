import type { Metadata } from 'next';
import ImageSlot from '@/components/ImageSlot';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '콘텐츠',
  description:
    '마케팅이 사람을 데려온다면, 콘텐츠는 쩜넷을 기억하게 합니다. 창업·인생·철학, 다가오는 특이점까지 — 깊은 밤의 대화를 담은 영상 팟캐스트 ‘특이쩜’.',
  alternates: { canonical: '/media' },
  // TODO: 콘텐츠 페이지 작업 중 — 완성 전까지 색인 제외(내비/사이트맵에서도 제거됨)
  robots: { index: false, follow: false },
  openGraph: {
    title: '콘텐츠 · 쩜넷',
    description: '조용히, 그리고 깊게. 영상 팟캐스트 ‘특이쩜’을 비롯한 쩜넷의 콘텐츠.',
    url: '/media',
  },
};

const questions = [
  '창업은 정말 자아실현의 과정인가?',
  '실패는 사업의 실패인가, 자아의 실패인가?',
  '창업자의 외로움은 어디에서 오는가?',
  '우리는 왜 이토록 무언가를 만들고 싶어 하는가?',
];

const format = [
  { k: '유형', v: '영상 팟캐스트' },
  { k: '진행', v: '배정원 · 조승민' },
  { k: '촬영', v: '매달 1회 · 4~5시간' },
  { k: '본편', v: '30~40분 · 주 1회' },
  { k: '쇼츠', v: '주 4개 · 인스타·유튜브' },
  { k: '톤', v: '깊은 밤의 대화' },
];

export default function MediaPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: '콘텐츠', item: `${SITE_URL}/media` },
    ],
  };

  const seriesLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWorkSeries',
    name: '특이쩜',
    alternateName: 'SINGULARITY',
    url: `${SITE_URL}/media#singularity`,
    description:
      '창업에서 시작해 인생과 철학, 다가오는 기술적 특이점까지 — 깊고 조용하게 파고드는 영상 팟캐스트.',
    inLanguage: 'ko-KR',
    genre: '영상 팟캐스트',
    creator: { '@id': `${SITE_URL}/#organization` },
    author: [{ '@type': 'Person', name: '배정원' }, { '@type': 'Person', name: '조승민' }],
  };

  return (
    <>
      <JsonLd data={[breadcrumb, seriesLd]} />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate', padding: 'clamp(90px,12vw,170px) clamp(20px,5vw,56px)' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(90% 70% at 70% 12%, rgba(137,109,245,.16), transparent 60%), radial-gradient(80% 60% at 10% 90%, rgba(134,195,250,.1), transparent 60%), #06070c',
            zIndex: -1,
          }}
        />
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 26px', fontSize: 'clamp(40px,6vw,84px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-.04em' }}>
            조용히, 그리고
            <br />
            깊게 파고듭니다<span style={{ color: '#86C3FA' }}>.</span>
          </h1>
          <p style={{ margin: 0, maxWidth: 600, fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.64, color: 'rgba(240,242,246,.7)', fontWeight: 500 }}>
            마케팅이 사람을 데려온다면, 콘텐츠는 쩜넷을 기억하게 합니다. 모집보다 브랜딩이 목적인, 조용하고 깊은 영역.
          </p>
        </div>
      </section>

      {/* 콘텐츠 인덱스 */}
      <section style={{ padding: 'clamp(40px,5vw,60px) clamp(20px,5vw,56px) clamp(74px,9vw,120px)', background: '#06070c' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 26 }}>
            <div style={{ fontSize: 13, letterSpacing: '.26em', color: 'rgba(240,242,246,.45)', fontWeight: 700 }}>CONTENTS · /media</div>
            <div style={{ fontSize: 13.5, color: 'rgba(240,242,246,.4)', fontWeight: 500 }}>콘텐츠가 늘어도 같은 패턴으로 추가됩니다</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 18 }}>
            <a href="#singularity" className="card-link" style={{ display: 'block', background: '#0e1018', borderRadius: 20, overflow: 'hidden' }}>
              <ImageSlot label="특이쩜 썸네일 추가" ratio="16 / 9" radius={0} />
              <div style={{ padding: 26 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#86C3FA', background: 'rgba(134,195,250,.12)', padding: '4px 10px', borderRadius: 6 }}>
                    영상 팟캐스트
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(240,242,246,.45)' }}>/media/singularity</span>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>특이쩜</div>
                <p style={{ margin: '0 0 18px', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(240,242,246,.62)', fontWeight: 500 }}>
                  창업·인생·철학, 다가오는 특이점까지. 한번 빠지면 나오기 어려운 깊은 밤의 대화.
                </p>
                <span style={{ fontSize: 14.5, fontWeight: 700, color: '#86C3FA' }}>보러 가기 →</span>
              </div>
            </a>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#090a11',
                border: '1px dashed rgba(255,255,255,.12)',
                borderRadius: 20,
                padding: 40,
                minHeight: 200,
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'rgba(240,242,246,.5)' }}>다음 콘텐츠</div>
                <div style={{ fontSize: 14, color: 'rgba(240,242,246,.35)', fontWeight: 500, marginTop: 6 }}>곧 이 자리에 추가됩니다</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 특이쩜이란 */}
      <section id="singularity" style={{ padding: 'clamp(74px,9vw,128px) clamp(20px,5vw,56px)', background: '#0a0b13', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '.26em', color: '#86C3FA', fontWeight: 700, marginBottom: 22 }}>특이쩜 · SINGULARITY</div>
          <h2 style={{ margin: '0 0 30px', fontSize: 'clamp(26px,3.2vw,42px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.2 }}>
            한번 빠지면, 나오기 어려운 대화.
          </h2>
          <p style={{ margin: '0 0 38px', maxWidth: 720, fontSize: 'clamp(17px,1.7vw,20px)', lineHeight: 1.7, color: 'rgba(240,242,246,.72)', fontWeight: 500 }}>
            창업에서 시작해 인생과 철학, 다가오는 기술적 특이점까지 — 깊고 조용하게 파고드는 대화. ‘쩜’넷만의 ‘특이’한 영상 팟캐스트입니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 18 }}>
            <div style={{ background: '#10121a', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: 26 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(240,242,246,.45)', marginBottom: 10 }}>톤</div>
              <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.5 }}>
                조용하고 깊은 밤의 대화.
                <br />
                차분한 심야 무드.
              </div>
            </div>
            <div style={{ background: 'linear-gradient(160deg,rgba(137,109,245,.12),#10121a)', border: '1px solid rgba(137,109,245,.26)', borderRadius: 16, padding: 26 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#a594f7', marginBottom: 10 }}>한 줄 포지션</div>
              <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.5 }}>
                마케팅이 사람을 데려온다면,
                <br />
                특이쩜은 쩜넷을 기억하게 한다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 던지는 질문 */}
      <section style={{ padding: 'clamp(80px,10vw,150px) clamp(20px,5vw,56px)', background: '#06070c' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '.26em', color: 'rgba(240,242,246,.45)', fontWeight: 700, marginBottom: 50 }}>던지는 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,52px)' }}>
            {questions.map((q, i) => (
              <div
                key={q}
                style={{
                  display: 'flex',
                  gap: 'clamp(16px,3vw,34px)',
                  alignItems: 'baseline',
                  borderBottom: i < questions.length - 1 ? '1px solid rgba(255,255,255,.09)' : 'none',
                  paddingBottom: i < questions.length - 1 ? 'clamp(28px,4vw,52px)' : 0,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 800, color: '#86C3FA', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: 'clamp(22px,3.4vw,40px)', fontWeight: 800, lineHeight: 1.25, letterSpacing: '-.03em' }}>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 포맷 / 진행 */}
      <section style={{ padding: 'clamp(74px,9vw,128px) clamp(20px,5vw,56px)', background: '#0a0b13' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 30px', fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.03em' }}>어떻게 만드냐면요.</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
              gap: 1,
              background: 'rgba(255,255,255,.08)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: 18,
              overflow: 'hidden',
            }}
          >
            {format.map((f) => (
              <div key={f.k} style={{ background: '#0a0b13', padding: 26 }}>
                <div style={{ fontSize: 13, color: 'rgba(240,242,246,.45)', fontWeight: 600, marginBottom: 8 }}>{f.k}</div>
                <div style={{ fontSize: 17, fontWeight: 700 }}>{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 구독·시청 CTA */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,150px) clamp(20px,5vw,56px)', textAlign: 'center', isolation: 'isolate' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(90% 90% at 50% 50%, rgba(137,109,245,.16), transparent 60%), #06070c', zIndex: -1 }} />
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.03em' }}>
            쇼츠로 만나, 본편으로 머무세요<span style={{ color: '#86C3FA' }}>.</span>
          </h2>
          <p style={{ margin: 0, fontSize: 16.5, color: 'rgba(240,242,246,.68)', fontWeight: 500 }}>
            유튜브 본편 · 인스타·유튜브 쇼츠. 짧게 시작해 깊게 들어옵니다.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" className="btn-primary" style={{ fontWeight: 700, fontSize: 16.5, padding: '17px 30px', borderRadius: 999 }}>
              특이쩜 보러 가기 →
            </a>
            <a href="#" className="btn-ghost" style={{ fontWeight: 600, fontSize: 16.5, padding: '17px 26px', borderRadius: 999 }}>
              구독하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
