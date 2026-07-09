import { SITE } from '@/lib/site';

/** 모바일 전용 하단 고정 CTA. 노출 여부는 globals.css의 .mobile-cta가 제어합니다. */
export default function MobileCTA() {
  return (
    <div
      className="mobile-cta"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        gap: 10,
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
        background: 'rgba(8,9,13,.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255,255,255,.1)',
      }}
    >
      <a
        href={SITE.links.discord}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          textAlign: 'center',
          background: 'var(--jn-sky)',
          color: 'var(--jn-ink)',
          fontWeight: 700,
          fontSize: 15.5,
          padding: 14,
          borderRadius: 12,
        }}
      >
        디스코드 참여 →
      </a>
    </div>
  );
}
