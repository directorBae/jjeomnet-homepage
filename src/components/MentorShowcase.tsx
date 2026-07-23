/**
 * 멘토진 쇼케이스 — 익명(A~E)이지만 대표 이력을 크게 강조한 카드 그리드.
 * hover 효과(떠오름·광택 스윕)는 globals.css의 .mentor-card 클래스가,
 * 카드 위 커서 이모지 트레일은 CareerCursorTrail이 담당.
 * extra: 그리드 마지막 칸에 페이지별 카드를 끼워 넣을 수 있다.
 */

import CareerCursorTrail from './CareerCursorTrail';

type Mentor = {
  tag: string;
  emoji: string;
  age: string;
  domain: string;
  headline: string;
  color: string;
  items: string[];
};

const MENTORS: Mentor[] = [
  {
    tag: 'A',
    emoji: '🚀',
    age: '23세',
    domain: '스타트업 · 창업',
    headline: '네이버·당근·레브잇 동시 오퍼',
    color: '#86C3FA',
    items: [
      '스타트업 개발자 커리어로 0원 → 연 8천만원',
      '시리즈 A 스타트업 거쳐 직접 창업',
      '해커톤·창업대회 장관상 다수',
    ],
  },
  {
    tag: 'B',
    emoji: '🎨',
    age: '24세',
    domain: '디자인 · 기획',
    headline: '한예종 → UIUC 경영 석사',
    color: '#A594F7',
    items: [
      '에이전시 인턴 → 삼성 인하우스 컨설팅 RA',
      '브랜드·서비스 기획 경험',
      '수많은 이력서·포트폴리오 첨삭',
    ],
  },
  {
    tag: 'C',
    emoji: '🤖',
    age: '25세',
    domain: 'AI 연구 취업',
    headline: 'World Model 연구로 S전자 취업',
    color: '#5EF479',
    items: [
      '강화학습 + Transformer 기반의 World Model 연구',
      '대학교 3학년 나이에 랩장을 거쳐 핵심 성과',
      '연구 리드 경험을 커리어 스토리로',
    ],
  },
  {
    tag: 'D',
    emoji: '📄',
    age: '23세',
    domain: '연구 · 논문',
    headline: '1티어 학회 논문 게재',
    color: '#FADF4B',
    items: [
      '과학고를 거쳐 → 과학기술원까지',
      '뛰어난 연구 성과와 Publication 경험',
    ],
  },
  {
    tag: 'E',
    emoji: '🏭',
    age: '22세',
    domain: '스타트업 · 취업',
    headline: 'P철강 취업 성공',
    color: '#FFBABA',
    items: [
      '대학교 1학년 때부터 연구 리드',
      '다년간의 스타트업 경험',
      '해커톤·창업대회 장관상 다수',
    ],
  },
];

export default function MentorShowcase({ extra }: { extra?: React.ReactNode }) {
  return (
    <>
      <CareerCursorTrail />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,290px),1fr))',
          gap: 18,
        }}
      >
      {MENTORS.map((m) => (
        <div
          key={m.tag}
          className="mentor-card"
          style={{ borderRadius: 20, padding: 'clamp(26px,3vw,34px)' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexWrap: 'wrap',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                flexShrink: 0,
                background: `${m.color}29`,
                border: `1px solid ${m.color}55`,
                color: m.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 24,
              }}
            >
              <span aria-hidden>{m.emoji}</span>
            </div>
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: m.color }}>{m.domain}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'rgba(240,242,246,.45)' }}>
                익명 멘토 · {m.age}
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 'clamp(19px,2.2vw,23px)',
              fontWeight: 800,
              letterSpacing: '-.02em',
              lineHeight: 1.3,
              marginBottom: 16,
            }}
          >
            {m.headline}
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              fontSize: 14.5,
              lineHeight: 1.75,
              color: 'rgba(240,242,246,.68)',
              fontWeight: 500,
            }}
          >
            {m.items.map((it) => (
              <li key={it} style={{ paddingLeft: 4 }}>
                {it}
              </li>
            ))}
          </ul>
        </div>
        ))}
        {extra}
      </div>
    </>
  );
}
