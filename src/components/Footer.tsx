import Link from 'next/link';
import { NAV, SITE } from '@/lib/site';
import DotRow from './DotRow';
import PartnerContact from './PartnerContact';

const colTitle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: 'rgba(240,242,246,.4)',
  letterSpacing: '.04em',
  marginBottom: 16,
};

const colList: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 11,
  fontSize: 15,
  fontWeight: 600,
  color: 'rgba(240,242,246,.78)',
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#05060a',
        borderTop: '1px solid rgba(255,255,255,.08)',
        padding: 'clamp(54px,7vw,84px) clamp(20px,5vw,56px) 40px',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))',
            gap: 40,
            paddingBottom: 44,
            borderBottom: '1px solid rgba(255,255,255,.08)',
          }}
        >
          <div>
            <div style={{ marginBottom: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/jjeomnet-text-white.svg"
                alt="쩜넷"
                width={173}
                height={28}
                style={{ display: 'block', height: 28, width: 'auto' }}
              />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14.5,
                lineHeight: 1.6,
                color: 'rgba(240,242,246,.55)',
                fontWeight: 500,
              }}
            >
              하나의 점이, 우주가 될 때까지.
            </p>
            <DotRow count={8} size={11} gap={5} />
          </div>

          <div>
            <div style={colTitle}>사이트</div>
            <div style={colList}>
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>합류·협업</div>
            <div style={colList}>
              <a
                href={SITE.links.projectTrack}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                프로젝트 트랙 신청하기
              </a>
              <PartnerContact className="footer-link">파트너·협업 문의</PartnerContact>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
            paddingTop: 28,
          }}
        >
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '-.01em',
              color: 'rgba(240,242,246,.85)',
            }}
          >
            하나의 점이, 우주가 될 때까지.
          </span>
          <span style={{ fontSize: 13, color: 'rgba(240,242,246,.4)', fontWeight: 500 }}>
            © {new Date().getFullYear()} 쩜넷 · JJeomNet
          </span>
        </div>
      </div>
    </footer>
  );
}
