import { SITE } from '@/lib/site';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  fontSize?: number;
  padding?: string;
};

export function PrimaryLink({ href, children, external = true, fontSize = 16, padding = '16px 28px' }: LinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="btn-primary"
      style={{ fontWeight: 700, fontSize, padding, borderRadius: 999 }}
    >
      {children}
    </a>
  );
}

export function GhostLink({ href, children, external = true, fontSize = 16, padding = '16px 26px' }: LinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="btn-ghost"
      style={{ fontWeight: 600, fontSize, padding, borderRadius: 999, backdropFilter: 'blur(4px)' }}
    >
      {children}
    </a>
  );
}

/** 커뮤니티 신청 + 오픈채팅 버튼 쌍 (사이트 곳곳의 표준 CTA) */
export function CtaButtons({
  primaryLabel = '커뮤니티 신청하기 →',
  fontSize = 16,
  justify = 'center',
}: {
  primaryLabel?: string;
  fontSize?: number;
  justify?: 'center' | 'flex-start';
}) {
  return (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: justify }}>
      <PrimaryLink href={SITE.links.luma} fontSize={fontSize} padding="17px 30px">
        {primaryLabel}
      </PrimaryLink>
      <GhostLink href={SITE.links.kakao} fontSize={fontSize} padding="17px 26px">
        오픈채팅 입장
      </GhostLink>
    </div>
  );
}
