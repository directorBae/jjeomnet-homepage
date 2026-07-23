/**
 * 쩜넷(JJeomNet) 사이트 전역 설정.
 * 도메인은 환경변수(NEXT_PUBLIC_SITE_URL)로 덮어쓸 수 있고, 없으면 기본값을 씁니다.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://jjeom.net'
).replace(/\/$/, '');

export const SITE = {
  name: '쩜넷',
  nameEn: 'JJeomNet',
  /** 한 줄 슬로건 */
  slogan: '하나의 점이, 우주가 될 때까지.',
  /** 브랜드 태그라인 */
  tagline: '꿈을 향해 달려가는 모든 청년들을 위해',
  /** 대표 설명(메타 디스크립션 기본값) */
  description:
    '쩜넷은 꿈을 향해 달려가는 모든 청년들을 위한 비영리 커뮤니티입니다. 좋아하는 사람들과 사이드 프로젝트를 진짜 배포까지 함께 만들고, 멘토가 그것을 커리어 스토리(스펙)로 설계합니다.',
  url: SITE_URL,
  locale: 'ko_KR',
  /** 외부 채널 */
  links: {
    discord: 'https://discord.gg/xsquhAuBH',
    careerTrack: 'https://forms.gle/wRcKjHb1WLZTvrR68',
    /** 커리어 트랙 소개 웨비나 (Cal.com) — 신청 폼 소개글에도 동일 링크 */
    webinar: 'https://cal.com/jjeomnet/project-track-webinar',
    realtonPress: 'https://www.ksilbo.co.kr/news/articleView.html?idxno=1034784',
  },
  /** JSON-LD sameAs 등에 노출할 공식 채널 (추후 채널 추가 시 여기에) */
  sameAs: [
    'https://discord.gg/xsquhAuBH',
  ],
  keywords: [
    '쩜넷',
    'JJeomNet',
    '실전 프로젝트 커뮤니티',
    '사이드 프로젝트',
    '개발 커뮤니티',
    '해커톤',
    '리얼톤',
    '바닐라쩜넷',
    'IT Arena',
    '멘토링',
    '커리어 트랙',
    '포트폴리오',
    '취업 준비',
    '커리어 스토리',
    '특이쩜',
    '영상 팟캐스트',
    '대학생 IT 동아리',
  ],
} as const;

/** 상단/하단 내비게이션 */
export const NAV = [
  { href: '/', label: '홈' },
  { href: '/community', label: '커뮤니티' },
  { href: '/career-track', label: '커리어 트랙' },
  { href: '/events', label: '행사' },
  // TODO: 콘텐츠(미디어) 탭 — /media 페이지 완성 후 다시 노출
  // { href: '/media', label: '콘텐츠' },
] as const;
