/**
 * 참여자 리뷰 무한 슬라이드 마퀴.
 * - 트랙을 두 벌 이어 붙이고 -50%까지 이동시켜 끊김 없이 순환
 * - 부모 컨테이너(maxWidth) 밖으로 뚫고 나가 화면 끝까지 흐름
 * - 카드는 무채색, 일부는 위아래로 어긋나게 배치
 * - hover 시 일시정지, prefers-reduced-motion이면 정지
 */

type Review = {
  name: string;
  text: string;
  by: string;
};

/** 카드별 세로 어긋남(px) — 인덱스 순환 적용 */
const OFFSETS = [0, 30, 10, 38];

function PersonAvatar() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="34"
      height="34"
      aria-hidden
      style={{ display: 'block', borderRadius: '50%', flexShrink: 0 }}
    >
      <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,.08)" />
      <circle cx="20" cy="15" r="7" fill="rgba(255,255,255,.34)" />
      <path
        d="M6 37c1.6-8.4 8-11.5 14-11.5S32.4 28.6 34 37"
        fill="rgba(255,255,255,.34)"
      />
    </svg>
  );
}

function ReviewCard({ review, offset }: { review: Review; offset: number }) {
  return (
    <figure
      style={{
        margin: 0,
        marginRight: 'clamp(22px,2.6vw,36px)',
        transform: `translateY(${offset}px)`,
        flexShrink: 0,
        width: 'clamp(300px,34vw,430px)',
        background: '#131418',
        border: '1px solid rgba(255,255,255,.09)',
        borderRadius: 20,
        padding: 'clamp(26px,3vw,34px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
      }}
    >
      <div
        aria-label="별점 5점 만점에 5점"
        style={{ color: '#FADF4B', fontSize: 15, letterSpacing: 3 }}
      >
        ★★★★★
      </div>
      <blockquote
        style={{
          margin: 0,
          fontSize: 'clamp(15px,1.7vw,17px)',
          lineHeight: 1.72,
          color: 'rgba(240,242,246,.85)',
          fontWeight: 500,
          wordBreak: 'keep-all',
        }}
      >
        {review.text}
      </blockquote>
      <figcaption
        style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <PersonAvatar />
        <div>
          <div
            style={{
              fontSize: 15.5,
              fontWeight: 800,
              letterSpacing: '-.01em',
              color: '#F0F2F6',
            }}
          >
            {review.name}
          </div>
          <div
            style={{
              marginTop: 2,
              fontSize: 11.5,
              fontWeight: 600,
              color: 'rgba(240,242,246,.42)',
            }}
          >
            {review.by}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function ReviewMarquee({ reviews }: { reviews: Review[] }) {
  return (
    <div
      style={{
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        overflow: 'hidden',
        padding: 'clamp(44px,6vw,72px) 0 clamp(60px,7vw,92px)',
      }}
    >
      <style>{`
        .jn-marquee-track {
          display: flex;
          width: max-content;
          animation: jnMarquee 46s linear infinite;
        }
        .jn-marquee-track:hover { animation-play-state: paused; }
        @keyframes jnMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .jn-marquee-track { animation: none; }
        }
      `}</style>
      <div className="jn-marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} style={{ display: 'flex' }}>
            {reviews.map((r, i) => (
              <ReviewCard
                key={`${copy}-${r.name}`}
                review={r}
                offset={OFFSETS[i % OFFSETS.length]}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
