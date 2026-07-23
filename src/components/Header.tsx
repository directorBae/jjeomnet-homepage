'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, SITE } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        alignItems: 'center',
        gap: 18,
        padding: '15px clamp(20px,5vw,56px)',
        background: 'rgba(8,9,13,.74)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <Link href="/" aria-label="쩜넷 홈" className="site-logo" style={{ display: 'flex', alignItems: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/jjeomnet-text-white.svg"
          alt="쩜넷"
          width={149}
          height={24}
          style={{ display: 'block', height: 24, width: 'auto' }}
        />
      </Link>

      <nav
        aria-label="주요 메뉴"
        className="site-nav"
        style={{
          display: 'flex',
          gap: 'clamp(16px,2.6vw,34px)',
          fontSize: 15.5,
          fontWeight: 600,
        }}
      >
        {NAV.map((item) => {
          const active =
            item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              data-active={active}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <a
        href={SITE.links.careerTrack}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary site-cta"
        style={{
          fontWeight: 700,
          fontSize: 14.5,
          padding: '11px 20px',
          borderRadius: 999,
        }}
      >
        1기 신청하기
      </a>
    </header>
  );
}
