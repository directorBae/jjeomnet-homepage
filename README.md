# 쩜넷 (JJeomNet) 공식 홈페이지

실전 프로젝트 커뮤니티 **쩜넷**의 공식 웹사이트입니다.
원본 단일 HTML 시안을 **Next.js 15 (App Router) + TypeScript + React 19** 기반으로
재구축했고, **검색엔진 최적화(SEO)** 와 **성능(Core Web Vitals)** 을 최우선으로 설계했습니다.

원본 디자인(인스타 카드뉴스 Figma 톤 — paper/ink 베이스 + 시그니처 sky-blue)을 1:1로 옮겼습니다.

---

## 빠른 시작

```bash
npm install
npm run dev        # http://localhost:3000 개발 서버
npm run build      # 프로덕션 빌드 (정적 생성)
npm run start      # 빌드 결과 실행
npm run lint       # ESLint
```

> 권장: Node.js 18.18+ (개발 환경 검증: Node 22 / 25)

---

## 페이지 구조 (실제 URL 라우팅)

원본은 `#home` / `#community` 식 **해시 라우팅**(검색엔진이 개별 페이지로 인식하지 못함)이었으나,
SEO를 위해 **실제 경로**로 분리했습니다. 모든 페이지는 빌드 시 **정적 생성(SSG)** 됩니다.

| 경로          | 내용                                                          |
| ------------- | ------------------------------------------------------------- |
| `/`           | 홈 — 히어로, NOT/BUT, 3분야, 트랙레코드, 비영리, CTA          |
| `/community`  | 커뮤니티 — 취업시장 변화, 프로그램, 멘토진, 가격, Q&A, 신청   |
| `/events`     | 행사 — 트랙레코드, 바닐라쩜넷, 라인업, 회차 신청              |
| `/media`      | 콘텐츠 — 영상 팟캐스트 ‘특이쩜’ 소개·질문·포맷                |

---

## SEO 구성 (전부 적용됨)

- **메타데이터**: 페이지별 `title`/`description`, `metadataBase`, 제목 템플릿(`%s · 쩜넷`)
- **정규 URL(canonical)**: 페이지마다 `alternates.canonical`
- **Open Graph / Twitter Card**: `summary_large_image`
- **동적 OG 이미지**: `src/app/opengraph-image.tsx` — 한글 폰트 임베드한 1200×630 PNG 자동 생성
- **JSON-LD 구조화 데이터**
  - 사이트 전역: `Organization`, `WebSite` (`src/app/layout.tsx`)
  - 페이지: `BreadcrumbList`(전 페이지), `FAQPage`(커뮤니티 Q&A), `CreativeWorkSeries`(특이쩜)
- **robots.txt**: `src/app/robots.ts`
- **sitemap.xml**: `src/app/sitemap.ts`
- **PWA 매니페스트**: `src/app/manifest.ts` (`/manifest.webmanifest`)
- **파비콘/아이콘**: `src/app/icon.svg`(파비콘), `src/app/apple-icon.tsx`(애플 터치 아이콘 PNG)
- **시맨틱 마크업**: 페이지당 `h1` 1개 + `h2` 위계, `lang="ko"`, `<main>`, 장식 요소 `aria-hidden`
- **성능**: 정적 생성, `next/image`(AVIF/WebP·lazy·반응형), LCP 폰트 `preload`,
  정적 자산 1년 immutable 캐시 헤더, 폰트 서브셋(아래 참고)

### 배포 도메인 설정

정규 URL·사이트맵·OG·JSON-LD는 환경변수로 도메인을 주입합니다. 배포 전 설정하세요.

```bash
# .env (또는 호스팅 환경변수). 예시는 .env.example 참고
NEXT_PUBLIC_SITE_URL=https://jjeom.net

# (선택) 검색엔진 소유 확인 토큰
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_NAVER_SITE_VERIFICATION=...
```

미설정 시 기본값 `https://jjeom.net` 을 사용합니다. (`src/lib/site.ts`)

---

## 폰트 (Freesentation, 서브셋)

원본은 4종 weight × 약 2.6MB(총 ≈10MB) TTF가 통째로 임베드돼 있었습니다.
이를 **사이트에서 실제로 쓰는 글자만 남긴 woff2로 서브셋**하여
**총 ≈116KB(weight당 ≈29KB)** 로 줄였습니다 — 약 99% 경량화.

폰트는 **`next/font/local`**([src/app/fonts.ts](src/app/fonts.ts))로 셀프호스팅합니다.
파일 내용을 해시해 파일명을 만들기 때문에, 서브셋을 다시 생성하면 URL이 바뀌어
**브라우저 캐시가 자동으로 무효화**됩니다. (수동 `@font-face` + immutable 캐시였을 땐 같은
파일명 때문에 옛 폰트가 남아 새 글자만 대체 폰트로 보이는 문제가 있었습니다.)

> ⚠️ 서브셋이므로 **현재 사이트에 없는 새 한글 글자**를 카피에 추가하면
> 그 글자는 시스템 대체 폰트(Apple SD Gothic Neo / Malgun Gothic)로 표시됩니다.
> 텍스트를 크게 바꾼 뒤에는 아래 스크립트로 폰트를 다시 생성하세요. (그러면 해시가 바뀌어 캐시도 자동 갱신)

```bash
# src/**/*.tsx 의 모든 글자를 다시 수집해 woff2 재생성
# (원본 번들 HTML에서 원본 폰트를 추출하므로, 상위 폴더의 "쩜넷 홈페이지.html"이 필요)
npm run subset-fonts
# 원본 HTML 경로를 직접 지정하려면:
node scripts/subset-fonts.mjs "../쩜넷 홈페이지.html"
```

---

## 디렉터리

```text
jjeomnet/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx            # 루트 레이아웃 · 전역 메타데이터 · Org/WebSite JSON-LD · 폰트 변수
│  │  ├─ fonts.ts              # next/font/local (Freesentation 셀프호스팅 · 캐시 자동 무효화)
│  │  ├─ page.tsx              # / (홈)
│  │  ├─ community/page.tsx    # /community (FAQ JSON-LD)
│  │  ├─ events/page.tsx       # /events
│  │  ├─ media/page.tsx        # /media (CreativeWorkSeries JSON-LD)
│  │  ├─ globals.css           # 디자인 토큰 · 키프레임 · hover 유틸 · 줄바꿈 규칙
│  │  ├─ opengraph-image.tsx   # 동적 OG 이미지(한글 폰트 임베드)
│  │  ├─ icon.svg              # 파비콘
│  │  ├─ apple-icon.tsx        # 애플 터치 아이콘
│  │  ├─ manifest.ts / robots.ts / sitemap.ts
│  │  └─ _assets/              # OG 렌더링용 서브셋 TTF(공개 배포 안 됨)
│  ├─ components/              # Header, Footer, MobileCTA, Cta, Photo, ImageSlot, DotRow, JsonLd
│  │                           # + EventShowcase(행사 카드 애니메이션) · Modal · PartnerContact
│  │                           # + PricingPlans(요금제 팝업) · Faq(아코디언)
│  └─ lib/site.ts             # 사이트 전역 설정(도메인/링크/키워드/내비)
├─ public/
│  ├─ fonts/                   # Freesentation woff2 (서브셋 · next/font 소스)
│  └─ images/                  # 로고 · 행사 사진 · 가격 아이콘
└─ scripts/subset-fonts.mjs    # 폰트 서브셋 재생성
```

---

## 남은 작업 / 참고

- **이미지 플레이스홀더**: 갤러리·특이쩜 썸네일 일부는 “사진 추가” 자리(`ImageSlot`)로
  비워 두었습니다(원본 시안과 동일). 실제 이미지를 `public/images/`에 넣고 해당 위치를
  `Photo` 컴포넌트로 교체하세요.
- **콘텐츠 페이지 CTA 링크**: ‘특이쩜 보러 가기’·‘구독하기’는 아직 `#` 자리표시자입니다.
  유튜브/채널 URL이 정해지면 `src/app/media/page.tsx`에서 교체하세요.
- **외부 링크**: 디스코드 초대(discord) URL은 `src/lib/site.ts`에서 일괄 관리합니다.

---

## 배포

정적 친화적 구조라 **Vercel**(권장)·Netlify·Node 호스팅 어디서나 동작합니다.
환경변수 `NEXT_PUBLIC_SITE_URL`만 설정한 뒤 `npm run build && npm run start`(또는 플랫폼 빌드).
배포 후 Google Search Console / 네이버 서치어드바이저에 `sitemap.xml`을 제출하세요.
