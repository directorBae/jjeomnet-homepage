import { SITE } from './site';

/** 행사 데이터 — 홈 쇼케이스와 행사 페이지가 공유. slug는 /events#<slug> 앵커로 사용. */
export type JnEvent = {
  slug: string;
  name: string;
  date: string; // 일시
  concept: string; // 컨셉
  photo: string;
  color: string; // 강조색(hex)
  press?: string; // 보도자료 등 외부 링크
};

/** 노출 순서: 바닐라쩜넷 → 리얼톤 → 그 외 */
export const EVENTS: JnEvent[] = [
  {
    slug: 'vanilla',
    name: '바닐라쩜넷',
    date: '매달 정기 개최',
    concept: '동아리원들이 한자리에 모이는 네트워킹 행사. 지금은 20+ 동아리 네트워크로 확장 중이에요.',
    photo: '/images/vanilla.jpg',
    color: '#FFBABA',
  },
  {
    slug: 'realton',
    name: '리얼톤',
    date: '2025.8',
    concept: '예비 고객의 진짜 목소리를 듣는 3주간의 창업 해커톤. 국회의원상, 300만원 상당의 상금을 수여했어요.',
    photo: '/images/realton-1.jpg',
    color: '#5EF479',
    press: SITE.links.realtonPress,
  },
  {
    slug: 'it-arena',
    name: 'IT Arena',
    date: '2025.10',
    concept: '로봇·AI·게임·알고리즘 등 6개 IT 분야를 아우르는 IT 페스티벌. 6개 과학기술원이 함께했어요.',
    photo: '/images/it-arena.jpg',
    color: '#86C3FA',
  },
  {
    slug: 'port-forwarding',
    name: 'port-forwarding.net',
    date: '2025.4',
    concept: '대학생들이 직접 강의자가 되는, 강의 중심의 네트워킹 세션이에요.',
    photo: '/images/port-forwarding.jpg',
    color: '#a594f7',
  },
  {
    slug: 'uni-verse',
    name: 'uni-verse.net',
    date: '2025.6',
    concept: '내 아이디어를 무한히 확장시키는 아이디어톤이에요.',
    photo: '/images/uni-verse.jpg',
    color: '#FADF4B',
  },
];
