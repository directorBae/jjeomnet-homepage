'use client';

import { useState } from 'react';
import Modal from './Modal';
import { SITE } from '@/lib/site';

type Plan = {
  key: string;
  name: string;
  /** 완주 기간 — 카드에서 가장 강조되는 값 */
  duration: string;
  /** 추천 대상 — 학년·상황별 한 줄 */
  recommend: string;
  /** 기간 전체 특가 */
  packagePrice: string;
  /** 할인 전 정가 — 연장가(월) × 기간 */
  originalPrice: string;
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
    originalPrice: '₩89,700',
    extendMonthly: '월 ₩29,900',
    icon: '/images/icon-spark.svg',
    tagline: '아이디어에 불을 붙여, 실제 배포까지.',
    recommend: '첫 완주를 노리는 분들께 추천',
    highlights: ['첫 미팅에서 멘토가 기획·일정 설계', '무료 배포 + .jjeom.net 도메인', '멘토링 세션 · 월 1회'],
    features: [
      '3개월 옵션 과정 — 첫 미팅에서 멘토가 기획·일정 설계',
      '무료 SaaS형 배포 + .jjeom.net 도메인',
      '프로젝트 코칭',
      '멘토링 세션 · 월 1회',
      '월 1회 정기 모임 티켓',
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
    originalPrice: '₩419,400',
    extendMonthly: '월 ₩69,900',
    icon: '/images/icon-growth.svg',
    tagline: '프로젝트에서 실전 커리어로.',
    recommend: '취·창업 등 실전 커리어가 필요한 분 추천',
    highlights: ['Spark의 모든 혜택 포함', 'LinkedIn 커리어 코칭 — 규모 키우기', '멘토링 세션 · 2주 1회'],
    features: [
      'Spark의 모든 혜택 포함 (월 1회 정기 모임 등)',
      'LinkedIn 커리어 코칭 — 프로필 가꾸기 · 글쓰기 · 1촌 네트워킹',
      '멘토링 세션 · 2주 1회 (Spark의 2배)',
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
  '납부는 기수 참여 기간(6개월 또는 3개월) 동안 분납 혹은 일시납 가능',
  '기수가 끝나도 커뮤니티·행사·디스코드 멤버십은 계속돼요 — 원하면 월 단위 연장(Spark 월 ₩29,900 · Growth 월 ₩69,900) 혹은 3개월 및 6개월 트랙 단위로 재결제 가능',
  '3개월 및 6개월 트랙 단위로 재결제 시 할인 혜택 적용 (Spark 49,900, Growth 199,900)',
];

/** Spark / Growth 차이를 한눈에 */
const COMPARE: { label: string; spark: string | boolean; growth: string | boolean }[] = [
  { label: '첫 미팅 — 목표·일정 설계', spark: true, growth: true },
  { label: '무료 SaaS형 배포 + 도메인', spark: '.jjeom.net 도메인', growth: '.net 도메인' },
  { label: '멘토링 세션', spark: '월 1회', growth: '월 2회' },
  { label: '프로젝트 코칭 · 월 1회 정기 모임', spark: true, growth: true },
  { label: '바닐라쩜넷 데모데이 무대', spark: false, growth: true },
  { label: '포트폴리오 · LinkedIn 커리어 코칭', spark: false, growth: true },
  { label: '기업 면접 코칭 · 창업자 강의', spark: false, growth: true },
];

function CompareCell({ value }: { value: string | boolean }) {
  if (value === true) return <span style={{ color: '#86C3FA', fontWeight: 800 }}>✓</span>;
  if (value === false) return <span style={{ color: 'rgba(240,242,246,.3)', fontWeight: 600 }}>–</span>;
  return <span style={{ fontWeight: 700 }}>{value}</span>;
}

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

/** 원가를 가로질러 지우고 새 가격을 가리키는 Z자 화살표 오버레이 */
function PriceZigzag() {
  return (
    <svg
      width="96"
      height="62"
      viewBox="0 0 96 62"
      fill="none"
      aria-hidden
      style={{ position: 'absolute', left: -6, top: 0, pointerEvents: 'none' }}
    >
      <path
        d="M2 11 H82 L12 50 H38"
        stroke="#86C3FA"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 43 L40 50 L30 57"
        stroke="#86C3FA"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPlans() {
  const [active, setActive] = useState<Plan | null>(null);

  return (
    <>
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
              position: 'relative',
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
            {p.featured && (
              <span
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: '#00041A',
                  background: '#86C3FA',
                  padding: '5px 13px',
                  borderRadius: 999,
                }}
              >
                추천
              </span>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.icon} alt="" width={46} height={46} aria-hidden style={{ width: 46, height: 46, objectFit: 'contain' }} />
            <div style={{ fontSize: 24, fontWeight: 800 }}>{p.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 38, fontWeight: 800, color: '#86C3FA', letterSpacing: '-.02em' }}>{p.duration}</span>
              <span style={{ fontSize: 15, color: 'rgba(240,242,246,.55)', fontWeight: 600 }}>완주 과정</span>
            </div>
            <div>
              {/* 원가를 Z자 화살표가 가로질러 지우고, 아래의 새 가격으로 갱신 */}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 17, color: 'rgba(240,242,246,.45)', fontWeight: 700 }}>
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
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 12, paddingLeft: 46 }}>
                  <span style={{ fontSize: 'clamp(30px,3.4vw,38px)', fontWeight: 800, color: '#86C3FA', letterSpacing: '-.02em', lineHeight: 1 }}>
                    {p.packagePrice}
                  </span>
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: 'rgba(240,242,246,.55)' }}>/{p.duration}</span>
                </div>
                <PriceZigzag />
              </div>
              <div style={{ marginTop: 8, fontSize: 13.5, color: 'rgba(240,242,246,.55)', fontWeight: 500 }}>
                {p.duration} 종료 후 연장 시 {p.extendMonthly}
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'rgba(240,242,246,.66)', fontWeight: 500 }}>{p.tagline}</p>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: '#86C3FA', fontWeight: 700 }}>— {p.recommend}</p>
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

      {/* Spark / Growth 비교표 */}
      <div
        style={{
          marginTop: 28,
          background: '#11131d',
          border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 18,
          padding: 'clamp(20px,3vw,30px)',
        }}
      >
        <div style={{ fontSize: 'clamp(16px,1.9vw,19px)', fontWeight: 800, letterSpacing: '-.01em', marginBottom: 18 }}>
          Spark와 Growth, 무엇이 다를까?
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: 460, borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr>
                {['', 'Spark', 'Growth'].map((h, i) => (
                  <th
                    key={h || 'label'}
                    style={{
                      textAlign: i === 0 ? 'left' : 'center',
                      padding: '10px 12px',
                      fontSize: 13.5,
                      fontWeight: 800,
                      color: h === 'Growth' ? '#86C3FA' : 'rgba(240,242,246,.75)',
                      borderBottom: '1px solid rgba(255,255,255,.14)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.label}>
                  <td
                    style={{
                      padding: '11px 12px',
                      fontWeight: 600,
                      color: 'rgba(240,242,246,.78)',
                      borderBottom: i < COMPARE.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none',
                    }}
                  >
                    {row.label}
                  </td>
                  {[row.spark, row.growth].map((v, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '11px 12px',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        borderBottom: i < COMPARE.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none',
                      }}
                    >
                      <CompareCell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p style={{ margin: '18px 0 0', fontSize: 14, color: 'rgba(240,242,246,.5)', fontWeight: 500 }}>
        납부는 기수 참여 기간(Growth 6개월 · Spark 3개월) 동안이에요. 기수가 끝나도 커뮤니티·행사·디스코드 멤버십은 계속되고, 원하면 월 단위로 연장할 수 있어요.
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
                  <span style={{ fontSize: 14, color: 'rgba(240,242,246,.4)', fontWeight: 600, textDecoration: 'line-through' }}>
                    {active.originalPrice}
                  </span>
                  <span style={{ fontSize: 24, fontWeight: 800, color: '#86C3FA' }}>{active.packagePrice}</span>
                </div>
                <div style={{ fontSize: 13.5, color: 'rgba(240,242,246,.55)', fontWeight: 500, marginTop: 2 }}>
                  {active.duration} 종료 후 연장 시 {active.extendMonthly}
                </div>
                <div style={{ fontSize: 14.5, color: 'rgba(240,242,246,.66)', fontWeight: 500, marginTop: 2 }}>{active.tagline}</div>
                <div style={{ fontSize: 13.5, color: '#86C3FA', fontWeight: 700, marginTop: 4 }}>— {active.recommend}</div>
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
              커리어 트랙 1기 신청하기 →
            </a>
          </div>
        )}
      </Modal>
    </>
  );
}
