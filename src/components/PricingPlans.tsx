'use client';

import { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';
import { SITE } from '@/lib/site';

type Plan = {
  key: string;
  name: string;
  /** 완주 기간 — 카드에서 가장 강조되는 값 */
  duration: string;
  /** 기간 전체 특가 */
  packagePrice: string;
  /** 월별 정가 × 기간 */
  originalPrice: string;
  /** 월별 정가 표시 */
  monthly: string;
  /** 기간 종료 후 월 단위 연장 요금 */
  extendMonthly: string;
  icon: string;
  tagline: string;
  highlights: string[];
  features: string[];
  featured: boolean;
};

const PLANS: Plan[] = [
  {
    key: 'spark',
    name: 'Spark',
    duration: '3개월',
    packagePrice: '₩49,900',
    originalPrice: '₩59,700',
    monthly: '월 ₩19,900',
    extendMonthly: '월 ₩29,900',
    icon: '/images/icon-spark.svg',
    tagline: '아이디어에 불을 붙여, 3개월 안에 실제 배포까지.',
    highlights: ['첫 미팅에서 멘토가 기획·일정 설계', '무료 배포 + .jjeom.net 도메인', 'IT 현업자 멘토링 · 월 1회'],
    features: [
      '3개월 완주 과정 — 첫 미팅에서 멘토가 기획·일정 설계',
      '무료 SaaS형 배포 + .jjeom.net 도메인',
      '프로젝트 코칭',
      'IT 현업자 멘토링 · 월 1회',
      '월 1회 정기 모임 (프로젝트 참여자 대상)',
      '바닐라쩜넷 네트워킹 참여',
      '커뮤니티 프로젝트 · 팀 매칭',
    ],
    featured: false,
  },
  {
    key: 'growth',
    name: 'Growth',
    duration: '6개월',
    packagePrice: '₩199,900',
    originalPrice: '₩239,400',
    monthly: '월 ₩39,900',
    extendMonthly: '월 ₩69,900',
    icon: '/images/icon-growth.svg',
    tagline: '6개월 동안 수익·시장 탐색·커리어까지. (Spark 포함)',
    highlights: ['Spark의 모든 혜택 포함', 'LinkedIn 커리어 코칭 — 규모 키우기', 'IT 현업자 멘토링 · 2주 1회'],
    features: [
      '6개월 완주 과정 — Spark의 모든 혜택 포함 (월 1회 정기 모임 등)',
      'LinkedIn 커리어 코칭 — 프로필 가꾸기 · 글쓰기 · 1촌 네트워킹 (네이버·당근·레브잇 동시 오퍼 멘토 담당)',
      'IT 현업자 멘토링 · 2주 1회 (Spark의 2배)',
      '포트폴리오 코칭',
      '.net 도메인 지원',
      'SNS 홍보 · 외주 연계',
      '기업 면접 코칭',
      '창업자 강의 & 네트워킹',
    ],
    featured: true,
  },
];

const POLICIES = [
  'Spark는 3개월, Growth는 6개월 완주 과정으로 진행돼요',
  '기간 종료 후에도 이어가고 싶다면 월 단위 연장 — Spark 월 ₩29,900 · Growth 월 ₩69,900',
  'Spark ↔ Growth 자유롭게 업그레이드 · 다운그레이드',
  '커뮤니티(디스코드) 입장은 무료 — 커리어 트랙 신청은 신청 폼에서 진행',
];

function Check() {
  return (
    <span
      aria-hidden
      style={{
        flexShrink: 0,
        marginTop: 3,
        width: 16,
        height: 16,
        borderRadius: 5,
        background: 'rgba(134,195,250,.16)',
        color: '#86C3FA',
        fontSize: 11,
        fontWeight: 800,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ✓
    </span>
  );
}

export default function PricingPlans() {
  const [active, setActive] = useState<Plan | null>(null);

  return (
    <>
      {/* Free 안내 배너 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          background: 'linear-gradient(110deg,rgba(134,195,250,.08),#11131d)',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 18,
          padding: '22px 26px',
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: '.06em',
            color: '#00041A',
            background: '#86C3FA',
            padding: '6px 13px',
            borderRadius: 8,
          }}
        >
          FREE
        </span>
        <span style={{ fontSize: 'clamp(15px,1.7vw,18px)', fontWeight: 700 }}>쩜넷 커뮤니티 입장은 무료예요.</span>
        <span style={{ fontSize: 14.5, color: 'rgba(240,242,246,.62)', fontWeight: 500 }}>
          트랙 신청 전에 커뮤니티에서 분위기를 먼저 봐도 좋아요.{' '}
          <Link href="/community" style={{ color: '#86C3FA', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            커뮤니티 알아보기 →
          </Link>
        </span>
      </div>

      {/* 2개 요금제 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 18 }}>
        {PLANS.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => setActive(p)}
            aria-label={`${p.name} 요금제 혜택 자세히 보기`}
            className="card-link"
            style={{
              textAlign: 'left',
              cursor: 'pointer',
              background: p.featured ? 'linear-gradient(180deg,rgba(134,195,250,.09),#11131d)' : '#11131d',
              borderColor: p.featured ? 'rgba(134,195,250,.32)' : undefined,
              borderRadius: 20,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              color: 'inherit',
              font: 'inherit',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.icon} alt="" width={46} height={46} aria-hidden style={{ width: 46, height: 46, objectFit: 'contain' }} />
            <div style={{ fontSize: 24, fontWeight: 800 }}>{p.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 38, fontWeight: 800, color: '#86C3FA', letterSpacing: '-.02em' }}>{p.duration}</span>
              <span style={{ fontSize: 15, color: 'rgba(240,242,246,.55)', fontWeight: 600 }}>완주 과정</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 26, fontWeight: 800 }}>{p.packagePrice}</span>
                <span style={{ fontSize: 14.5, color: 'rgba(240,242,246,.4)', fontWeight: 600, textDecoration: 'line-through' }}>
                  {p.originalPrice}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: '#00041A',
                    background: '#86C3FA',
                    padding: '3px 9px',
                    borderRadius: 999,
                  }}
                >
                  {p.duration} 특가
                </span>
              </div>
              <div style={{ marginTop: 6, fontSize: 13.5, color: 'rgba(240,242,246,.55)', fontWeight: 500 }}>
                {p.monthly} 기준 · 종료 후 연장 시 {p.extendMonthly}
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'rgba(240,242,246,.66)', fontWeight: 500 }}>{p.tagline}</p>
            <ul style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 13.5, lineHeight: 1.7, color: 'rgba(240,242,246,.55)', fontWeight: 500 }}>
              {p.highlights.map((h) => (
                <li key={h} style={{ paddingLeft: 4 }}>
                  {h}
                </li>
              ))}
            </ul>
            <span style={{ marginTop: 'auto', paddingTop: 8, fontSize: 14.5, fontWeight: 700, color: '#86C3FA' }}>혜택 자세히 보기 →</span>
          </button>
        ))}
      </div>

      <p style={{ margin: '18px 0 0', fontSize: 14, color: 'rgba(240,242,246,.5)', fontWeight: 500 }}>
        Spark는 3개월, Growth는 6개월 완주 과정이에요. 기간이 끝난 뒤에는 월 단위로 연장할 수 있어요.
      </p>

      {/* 혜택 상세 팝업 */}
      <Modal open={!!active} onClose={() => setActive(null)} title={active ? `${active.name} 요금제` : ''}>
        {active && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.icon} alt="" width={42} height={42} aria-hidden style={{ width: 42, height: 42, objectFit: 'contain' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: '#86C3FA' }}>{active.duration}</span>
                  <span style={{ fontSize: 24, fontWeight: 800 }}>{active.packagePrice}</span>
                  <span style={{ fontSize: 14, color: 'rgba(240,242,246,.4)', fontWeight: 600, textDecoration: 'line-through' }}>
                    {active.originalPrice}
                  </span>
                </div>
                <div style={{ fontSize: 13.5, color: 'rgba(240,242,246,.55)', fontWeight: 500, marginTop: 2 }}>
                  {active.monthly} 기준 · 종료 후 연장 시 {active.extendMonthly}
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(240,242,246,.66)', fontWeight: 500, marginTop: 2 }}>{active.tagline}</div>
              </div>
            </div>

            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(240,242,246,.5)', letterSpacing: '.04em', margin: '0 0 12px' }}>포함 혜택</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {active.features.map((f) => (
                <li key={f} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.5, color: 'rgba(240,242,246,.82)', fontWeight: 500 }}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 22, padding: '18px 20px', background: '#07080c', border: '1px solid rgba(255,255,255,.08)', borderRadius: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#86C3FA', marginBottom: 12 }}>기간 · 납부 정책</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {POLICIES.map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.5, color: 'rgba(240,242,246,.7)', fontWeight: 500 }}>
                    <span aria-hidden style={{ color: '#86C3FA' }}>·</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={SITE.links.careerTrack}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 22,
                fontWeight: 700,
                fontSize: 16,
                padding: '15px 20px',
                borderRadius: 12,
              }}
            >
              커리어 트랙 신청하기 →
            </a>
          </div>
        )}
      </Modal>
    </>
  );
}
