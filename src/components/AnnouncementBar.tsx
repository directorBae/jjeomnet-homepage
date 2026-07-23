'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { COHORT } from '@/lib/cohort';

const DISMISS_KEY = 'jn-announcement-dismissed';

/** 사이트 전역 상단 모집 배너 — X로 닫으면 이번 세션 동안 다시 뜨지 않습니다. */
export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === '1') setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#86C3FA',
        color: '#00041A',
      }}
    >
      <Link
        href="/career-track"
        style={{
          flex: 1,
          textAlign: 'center',
          fontSize: 13.5,
          fontWeight: 700,
          lineHeight: 1.4,
          padding: '9px clamp(14px,4vw,24px)',
          paddingRight: 4,
        }}
      >
        커리어 트랙 {COHORT.label} 모집 중 — {COHORT.deadlineFull} 마감
      </Link>
      <button
        type="button"
        aria-label="배너 닫기"
        onClick={() => {
          sessionStorage.setItem(DISMISS_KEY, '1');
          setVisible(false);
        }}
        style={{
          flexShrink: 0,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#00041A',
          fontSize: 15,
          fontWeight: 800,
          lineHeight: 1,
          padding: '9px clamp(12px,3vw,20px)',
        }}
      >
        ✕
      </button>
    </div>
  );
}
