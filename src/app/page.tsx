import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaButtons } from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import EventShowcase from '@/components/EventShowcase';
import { SITE_URL } from '@/lib/site';
import { COHORT } from '@/lib/cohort';
import ScrollReveal from '@/components/ScrollReveal';
import SlotNumber from '@/components/SlotNumber';

export const metadata: Metadata = {
  title: '쩜넷 — 하나의 점이, 우주가 될 때까지',
  description:
    '좋아하는 사람들과 함께, 혼자라면 만들지 못했을 것을 세상에 내보내는 곳. 꿈을 향해 달려가는 모든 청년들을 위한 커뮤니티, 쩜넷을 소개합니다.',
  alternates: { canonical: '/' },
  openGraph: {
    title: '쩜넷 — 하나의 점이, 우주가 될 때까지',
    description: '좋아하는 사람들과 함께, 세상에 내보내는 곳. 꿈을 향해 달려가는 모든 청년들을 위한 커뮤니티, 쩜넷.',
    url: '/',
  },
};

const heroBg = '/images/hero-bg.jpg';

const tracks = [
  {
    href: '/community',
    n: '01',
    title: '커뮤니티',
    desc: '모든 시작과 도전을 이곳에서. 매달 모이고, 언제든 디스코드에서 만나요.',
  },
  {
    href: '/career-track',
    n: '02',
    title: '커리어 트랙',
    desc: `관심사가 커리어가 되도록 — 1기 ${COHORT.kickoff} 시작, 멘토와 함께 완주하는 6개월(3개월 옵션) 트랙.`,
  },
  {
    href: '/events',
    n: '03',
    title: '행사',
    desc: '흩어진 사람들이 한자리에. 무대에 서고, 서로 연결하여 시너지를 만듭니다.',
  },
  // TODO: 콘텐츠(특이쩜) 카드 — /media 페이지 완성 후 다시 노출
];

const purpose = [
  { n: '01', title: '스스로 움직이게', desc: '강의·과제가 아니라, 스스로 만들고 배포하게 합니다.' },
  { n: '02', title: '외롭지 않게', desc: '움직이는 이들을 팀과 커뮤니티로 잇습니다.' },
  { n: '03', title: '지역으로 넓게', desc: '수도권에 쏠린 IT·창업 기회를 지방으로 넓힙니다.' },
];

export default function HomePage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL }],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* ============ HERO ============ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          isolation: 'isolate',
          minHeight: 'min(880px,92vh)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: `url("${heroBg}") center 28% / cover no-repeat`,
            transformOrigin: 'center',
            animation: 'jnDrift 28s ease-in-out infinite alternate',
            zIndex: -2,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(120% 92% at 50% 6%, rgba(7,8,12,.32), rgba(7,8,12,.72) 56%, #07080c)',
            zIndex: -1,
          }}
        />
        <div
          style={{
            textAlign: 'center',
            padding: 'clamp(60px,9vw,110px) clamp(20px,5vw,40px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 26,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              padding: '8px 16px',
              border: '1px solid rgba(134,195,250,.4)',
              borderRadius: 999,
              background: 'rgba(134,195,250,.08)',
              fontSize: 13.5,
              fontWeight: 600,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#86C3FA',
                boxShadow: '0 0 10px #86C3FA',
              }}
            />
            꿈을 향해 달려가는 모든 청년들을 위해
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(42px,6.6vw,92px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-.035em',
            }}
          >
            하나의 점이,
            <br />
            우주가 될 때까지<span style={{ color: '#86C3FA' }}>.</span>
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 600,
              fontSize: 'clamp(16px,1.6vw,19px)',
              lineHeight: 1.62,
              color: 'rgba(240,242,246,.74)',
              fontWeight: 500,
            }}
          >
            좋아하는 사람들과 함께, 혼자라면 만들지 못했을 것을
            <br />
            세상에 내보내는 곳. 쩜넷을 소개합니다.
          </p>
          <p
            style={{
              margin: 0,
              maxWidth: 640,
              fontSize: 'clamp(15px,1.5vw,17.5px)',
              lineHeight: 1.6,
              color: '#86C3FA',
              fontWeight: 700,
            }}
          >
            6개월 동안, 내 프로젝트 하나를 배포까지 완주해
            <br />
            커리어로 연결하는 실전 프로젝트 커뮤니티.
          </p>
          <CtaButtons />
        </div>
      </section>

      {/* ============ NOT / BUT ============ */}
      <section style={{ padding: 'clamp(74px,9vw,128px) clamp(20px,5vw,56px)', background: '#07080c' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2
            style={{
              margin: '0 0 14px',
              fontSize: 'clamp(32px,4vw,52px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-.035em',
            }}
          >
            강의 들으러 온 거
            <br />
            <span style={{ color: '#86C3FA' }}>아니잖아요.</span>
          </h2>
          <p
            style={{
              margin: '0 0 44px',
              maxWidth: 560,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(240,242,246,.62)',
              fontWeight: 500,
            }}
          >
            정해진 커리큘럼을 따라가는 곳이 아니에요.
            <br />
            좋아하는 걸 직접 만들어서, 세상에 내보내는 곳이죠.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
              gap: 18,
            }}
          >
            <ScrollReveal>
              <div
                style={{
                  height: '100%',
                  background: '#10121a',
                  border: '1px solid rgba(255,255,255,.07)',
                  borderRadius: 18,
                  padding: 34,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: '.1em',
                    color: 'rgba(240,242,246,.4)',
                    border: '1px solid rgba(255,255,255,.14)',
                    padding: '5px 12px',
                    borderRadius: 8,
                    marginBottom: 20,
                  }}
                >
                  NOT
                </div>
                <p style={{ margin: 0, fontSize: 21, lineHeight: 1.5, fontWeight: 500, color: 'rgba(240,242,246,.62)' }}>
                  쩜넷은 강의도, 스터디도 아닙니다.
                  <br />
                  정해진 커리큘럼을 따라가는 곳이 아닙니다.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div
                style={{
                  height: '100%',
                  background: 'linear-gradient(180deg,rgba(134,195,250,.1),rgba(134,195,250,.03))',
                  border: '1px solid rgba(134,195,250,.4)',
                  borderRadius: 18,
                  padding: 34,
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: '.1em',
                    color: '#00041A',
                    background: '#86C3FA',
                    padding: '5px 12px',
                    borderRadius: 8,
                    marginBottom: 20,
                  }}
                >
                  BUT
                </div>
                <p style={{ margin: 0, fontSize: 21, lineHeight: 1.5, fontWeight: 600, color: '#F0F2F6' }}>
                  함께 만들고, 배포하고, 제안하고, 실험하는 커뮤니티입니다.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p
            style={{
              margin: '40px 0 0',
              fontSize: 'clamp(19px,2.2vw,27px)',
              fontWeight: 700,
              lineHeight: 1.45,
              letterSpacing: '-.02em',
              textAlign: 'center',
            }}
          >
            좋아하는 사람들과 낭비하듯 보낸 시간을, <span style={{ color: '#86C3FA' }}>실제 프로젝트</span>로 바꿉니다.
          </p>
        </div>
      </section>

      {/* ============ 3 분야 ============ */}
      <section style={{ padding: 'clamp(74px,9vw,128px) clamp(20px,5vw,56px)', background: '#0b0d15' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2
            style={{
              margin: '0 0 14px',
              fontSize: 'clamp(30px,3.8vw,48px)',
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 1.12,
            }}
          >
            좋아하는 사람들과
            <br />
            이렇게 시간을 써요.
          </h2>
          <p style={{ margin: '0 0 44px', fontSize: 17, color: 'rgba(240,242,246,.6)', fontWeight: 500 }}>
            커뮤니티에서 시작해, 트랙으로 완수하고, 행사로 모여요.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))',
              gap: 18,
            }}
          >
            {tracks.map((t, i) => (
              <ScrollReveal key={t.href} delay={i * 120}>
              <Link
                href={t.href}
                className="card-link"
                style={{ display: 'block', height: '100%', background: '#11131d', borderRadius: 20, padding: 34 }}
              >
                <div style={{ fontSize: 14, fontWeight: 800, color: '#86C3FA', letterSpacing: '.04em' }}>{t.n}</div>
                <div style={{ fontSize: 25, fontWeight: 800, margin: '14px 0 12px', letterSpacing: '-.02em' }}>
                  {t.title}
                </div>
                <p style={{ margin: '0 0 26px', fontSize: 15.5, lineHeight: 1.55, color: 'rgba(240,242,246,.62)', fontWeight: 500 }}>
                  {t.desc}
                </p>
                <span style={{ fontSize: 14.5, fontWeight: 700, color: '#86C3FA' }}>자세히 보기 →</span>
              </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 트랙레코드 + 지난 행사 (통합) ============ */}
      <section style={{ padding: 'clamp(74px,9vw,128px) clamp(20px,5vw,56px)', background: '#07080c' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2
            style={{
              margin: '0 0 40px',
              fontSize: 'clamp(30px,3.8vw,48px)',
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 1.12,
            }}
          >
            쩜넷은 많은 이들의
            <br />
            도전을 함께하고 있습니다.
          </h2>

          {/* 통계 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
              gap: 18,
              marginBottom: 18,
            }}
          >
            {[
              { num: '500', unit: '명+', label: '함께 모인 사람', href: '/events' },
              { num: '15', unit: '회+', label: '진행한 행사', href: '/events' },
              { num: '5', unit: '개+', label: '함께 완성한 프로젝트', href: '/career-track' },
              { num: '20', unit: '개+', label: '동아리 네트워크로 확장 중', href: '/community' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
              <Link
                href={s.href}
                className="card-link"
                style={{ display: 'block', height: '100%', background: '#11131d', borderRadius: 18, padding: 30 }}
              >
                <div
                  style={{
                    fontSize: 'clamp(40px,5vw,58px)',
                    fontWeight: 800,
                    color: '#86C3FA',
                    letterSpacing: '-.03em',
                    lineHeight: 1,
                  }}
                >
                  <SlotNumber value={s.num} />
                  <span style={{ fontSize: '.5em' }}>{s.unit}</span>
                </div>
                <div style={{ marginTop: 10, fontSize: 15, color: 'rgba(240,242,246,.6)', fontWeight: 600 }}>{s.label}</div>
              </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* 지난 행사 (애니메이션 카드 · 클릭 시 행사 상세로) */}
          <h3
            style={{
              margin: 'clamp(36px,4.5vw,56px) 0 14px',
              fontSize: 'clamp(28px,3.4vw,44px)',
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 1.12,
            }}
          >
            이런 행사들을
            <br />
            직접 열어왔어요.
          </h3>
          <p style={{ margin: '0 0 44px', fontSize: 17, color: 'rgba(240,242,246,.6)', fontWeight: 500 }}>
            카드를 누르면 행사 소개로 이동해요.
          </p>
          <EventShowcase />
        </div>
      </section>

      {/* ============ 공익 3가지 ============ */}
      <section style={{ padding: 'clamp(74px,9vw,128px) clamp(20px,5vw,56px)', background: '#0b0d15' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2
            style={{
              margin: '0 0 20px',
              fontSize: 'clamp(30px,3.8vw,48px)',
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 1.12,
            }}
          >
            우리가 굳이,
            <br />
            비영리인 이유.
          </h2>
          <p
            style={{
              margin: '0 0 50px',
              maxWidth: 640,
              fontSize: 17,
              lineHeight: 1.6,
              color: 'rgba(240,242,246,.62)',
              fontWeight: 500,
            }}
          >
            쩜넷은 비영리 조직입니다. 다음 세 가지 목적을 위해 조직을 비영리로 운영하며, 영리를 추구하지 않습니다.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: 34,
            }}
          >
            {purpose.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 120}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#86C3FA' }}>{p.n}</div>
                <div style={{ height: 1, background: 'rgba(255,255,255,.12)', margin: '16px 0 18px' }} />
                <div style={{ fontSize: 21, fontWeight: 800, marginBottom: 12 }}>{p.title}</div>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'rgba(240,242,246,.62)', fontWeight: 500 }}>
                  {p.desc}
                </p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 최종 CTA ============ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(80px,10vw,150px) clamp(20px,5vw,56px)',
          textAlign: 'center',
          isolation: 'isolate',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: `url("${heroBg}") center / cover no-repeat`,
            zIndex: -2,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(100% 100% at 50% 50%, rgba(7,8,12,.6), #07080c 78%)',
            zIndex: -1,
          }}
        />
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 26,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.22, letterSpacing: '-.03em' }}>
            가장 생산적으로 시간을 낭비하는
            <br />
            사람들이 모여 있는 곳<span style={{ color: '#86C3FA' }}>.</span>
          </h2>
          <p style={{ margin: 0, fontSize: 17, color: 'rgba(240,242,246,.7)', fontWeight: 500 }}>
            커리어 트랙 1기 모집 중 — {COHORT.deadlineFull} 마감 ·{" "}
            {COHORT.kickoff} 시작 · 6개월 과정.
            <br />
            디스코드 무료 트랙은 언제든 열려 있어요.
          </p>
          <CtaButtons />
        </div>
      </section>
    </>
  );
}
