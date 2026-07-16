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

/** 프로젝트 트랙 신청 단일 버튼 (사이트 곳곳의 표준 CTA) */
export function CtaButtons({
  primaryLabel = '프로젝트 트랙 신청하기 →',
  fontSize = 16,
  justify = 'center',
}: {
  primaryLabel?: string;
  fontSize?: number;
  justify?: 'center' | 'flex-start';
}) {
  return (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: justify }}>
      <PrimaryLink href={SITE.links.projectTrack} fontSize={fontSize} padding="17px 30px">
        {primaryLabel}
      </PrimaryLink>
    </div>
  );
}
