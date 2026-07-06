'use client';

import { useState } from 'react';
import Modal from './Modal';
import { SITE } from '@/lib/site';

type Plan = {
  key: string;
  name: string;
  price: string;
  period: string;
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
    price: '₩19,900',
    period: '/월',
    icon: '/images/icon-spark.svg',
    tagline: '아이디어에 불을 붙여, 실제 배포까지.',
    highlights: ['무료 배포 + .jjeom.net 도메인', '프로젝트 코칭', 'IT 현업자 멘토링 · 월 1회'],
    features: [
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
    price: '₩39,900',
    period: '/월',
    icon: '/images/icon-growth.svg',
    tagline: '수익·창업·커리어로 성장. (Spark 포함)',
    highlights: ['Spark의 모든 혜택 포함', 'IT 현업자 멘토링 · 2주 1회', '포트폴리오 코칭'],
    features: [
      'Spark의 모든 혜택 포함 (월 1회 정기 모임 등)',
      'IT 현업자 멘토링 · 2주 1회 (Spark의 2배)',
      '포트폴리오 코칭',
      '.net 도메인 지원',
      'LinkedIn·SNS 홍보 · 외주 연계',
      '기업 면접 코칭',
      '창업자 강의 & 네트워킹',
    ],
    featured: true,
  },
];

const POLICIES = [
  'Spark ↔ Growth 자유롭게 업그레이드 · 다운그레이드',
  '프로젝트가 진행되는 기간 동안 자유롭게 납부',
  '커뮤니티 가입은 무료 — Free 요금제에서 온라인 디스코드 참여 등 기본 활동 가능',
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
        <span style={{ fontSize: 'clamp(15px,1.7vw,18px)', fontWeight: 700 }}>커뮤니티 가입은 무료예요.</span>
        <span style={{ fontSize: 14.5, color: 'rgba(240,242,246,.62)', fontWeight: 500 }}>
          온라인 디스코드 참여 등 기본 활동은 Free로 시작할 수 있어요.
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
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: '#86C3FA' }}>{p.price}</span>
              <span style={{ fontSize: 15, color: 'rgba(240,242,246,.55)', fontWeight: 600 }}>{p.period}</span>
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
        언제든 업그레이드 · 다운그레이드할 수 있고, 프로젝트가 진행되는 기간 동안만 납부하면 돼요.
      </p>

      {/* 혜택 상세 팝업 */}
      <Modal open={!!active} onClose={() => setActive(null)} title={active ? `${active.name} 요금제` : ''}>
        {active && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.icon} alt="" width={42} height={42} aria-hidden style={{ width: 42, height: 42, objectFit: 'contain' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 30, fontWeight: 800, color: '#86C3FA' }}>{active.price}</span>
                  <span style={{ fontSize: 15, color: 'rgba(240,242,246,.55)', fontWeight: 600 }}>{active.period}</span>
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
              <div style={{ fontSize: 13, fontWeight: 700, color: '#86C3FA', marginBottom: 12 }}>납부 · 전환 정책</div>
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
              href={SITE.links.luma}
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
              커뮤니티 신청하기 →
            </a>
          </div>
        )}
      </Modal>
    </>
  );
}
