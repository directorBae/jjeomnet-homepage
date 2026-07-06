import type { Metadata } from "next";
import { CtaButtons } from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import PricingPlans from "@/components/PricingPlans";
import Faq from "@/components/Faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "커뮤니티",
  description:
    "스펙이 아니라 스토리. 하고 싶은 사이드 프로젝트를 진짜로 함께 만들고, 멘토가 그것을 커리어 스토리(스펙)로 설계합니다. 커뮤니티 가입은 무료, Spark·Growth 요금제로 배포·도메인·멘토링까지.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "커뮤니티 · 쩜넷",
    description:
      "하고 싶은 걸 하면서 스펙이 되는 곳. 실전 프로젝트로 커리어 스토리를 만듭니다.",
    url: "/community",
  },
};

const heroBg = "/images/hero-bg.jpg";

const stats = [
  {
    value: "−43%",
    title: "신입 개발 공고가 줄었어요",
    sub: "’23 → ’25 상반기 · 995 → 564건",
  },
  {
    value: "−73%",
    title: "IT·통신 신입 공고는 더 줄었고요",
    sub: "’26.3 · 전년 대비",
  },
];

const programTags = [
  "하고 싶은 프로젝트에서 출발",
  "멘토가 ‘스펙’으로 설계",
  "팀·개인 자유 · 팀은 2~4인",
  "월 1회 정기 모임 · 트랙별 멘토링",
];

const storyRows = [
  {
    when: "가벼운 관심에서",
    body: "“데이터 분석을 배우고 싶다” + “축구를 좋아한다”를 합쳐 ‘승부예측’ 주제로.",
    role: "관심사를 주제로 구체화 · 팀 매칭",
  },
  {
    when: "단순 예측을 넘어",
    body: "승패만 맞히는 게 아니라, 무엇을 근거로 분석할지 범위를 잡아 기획.",
    role: "기획 피드백 · 데이터 소스 조언",
  },
  {
    when: "분석 로직을 더해",
    body: "뉴스 기사와 최근 경기 분석 로직을 더해 예측의 질을 끌어올림.",
    role: "IT 현업자 멘토링 · 무료 배포 · .net 도메인",
  },
  {
    when: "역량이 된 프로젝트",
    body: "단순 예측기가 아니라, 자연어 데이터 분석 역량을 증명하는 프로그램으로.",
    role: "포트폴리오화 · 커리어 스토리 설계",
  },
];

const activities = [
  {
    cadence: "월 1회",
    title: "오프라인 정기 세션",
    desc: "매달 한 번, 한자리에 모여 진행 상황을 공유하고 서로의 프로젝트에 피드백을 주고받아요.",
    color: "#86C3FA",
  },
  {
    cadence: "매달",
    title: "바닐라쩜넷",
    desc: "데모데이 형태의 네트워킹 행사. 만든 걸 무대에서 선보이고, 새 팀원도 이곳에서 모아요.",
    color: "#FFBABA",
  },
  {
    cadence: "월 1~2회",
    title: "멘토 세션",
    desc: "트랙별 멘토와 함께하는 멘토링·커리어 세션. 프로젝트를 ‘스펙’으로 설계하는 시간이에요.",
    color: "#5EF479",
  },
  {
    cadence: "상시",
    title: "온라인 디스코드",
    desc: "언제든 질문하고, 자랑하고, 함께 배포하는 상시 소통·협업 채널이에요.",
    color: "#FADF4B",
  },
];

const mentors = [
  {
    tag: "A",
    age: "23세",
    items: [
      "스타트업 커리어로 0원→연 8천만원",
      "네이버·당근·레브잇 오퍼",
      "시리즈 A 스타트업 거쳐 직접 창업",
      "해커톤·창업대회 장관상 다수",
    ],
  },
  {
    tag: "B",
    age: "24세",
    items: [
      "한예종 디자인 → UIUC 경영 석사",
      "에이전시 인턴 → 삼성 인하우스 컨설팅 RA",
      "브랜드·서비스 기획 경험",
      "수많은 이력서·포트폴리오 첨삭",
    ],
  },
  {
    tag: "C",
    age: "25세",
    items: [
      "강화학습 + Transformer 기반의 World Model 연구",
      "대학교 3학년 나이에 랩장을 거쳐 World Model 핵심 성과",
      "연구를 리드 경험으로, S전자에 취업 성공",
      "오랜 연구 경험에서 길어 올린 깊이",
    ],
  },
  {
    tag: "D",
    age: "23세",
    items: [
      "과학고를 거쳐 → 과학기술원까지",
      "1티어 학회 논문 게재",
      "뛰어난 연구 성과와 Publication 경험",
    ],
  },
  {
    tag: "E",
    age: "22세",
    items: [
      "대학교 1학년 때부터 연구 리드",
      "다년간의 스타트업 경험",
      "다양한 종류의 스펙을 거쳐 P철강에 취업 성공",
      "해커톤·창업대회 장관상 다수",
    ],
  },
];

const faqs = [
  {
    q: "커뮤니티 가입은 무료인가요?",
    a: "네. 커뮤니티 가입은 무료예요. Free 요금제에서 온라인 디스코드 참여 등 기본 활동을 할 수 있습니다.",
  },
  {
    q: "혼자 참여해도 되나요?",
    a: "네. 팀/개인 모두 가능하며, 팀 매칭을 지원합니다. 팀은 2~4인까지 구성됩니다.",
  },
  {
    q: "꼭 개발을 할 줄 알아야 하나요?",
    a: "관심사·태도·도메인이 더 중요합니다. 하고 싶은 프로젝트에서 출발해 멘토와 함께 스펙으로 만듭니다.",
  },
  {
    q: "기수제인가요?",
    a: "아니요. 기수 없이 영속·병렬로 운영하며 상시 모집합니다. 들어온 팀부터 바로 운영됩니다.",
  },
  {
    q: "요금제는 중간에 바꿀 수 있나요?",
    a: "Spark ↔ Growth로 자유롭게 업그레이드·다운그레이드할 수 있어요. 프로젝트가 진행되는 기간 동안만 자유롭게 납부하면 됩니다.",
  },
  {
    q: "배포·도메인은 정말 무료인가요?",
    a: "무료 SaaS형 배포와 .jjeom.net / .net 도메인을 요금제에 따라 지원합니다.",
  },
  {
    q: "오프라인 참여가 필수인가요?",
    a: "온라인 + 바닐라쩜넷 오프라인 병행입니다. 오프라인은 네트워킹·발표 기회로 권장됩니다.",
  },
];

const storyGrid = "minmax(120px,0.7fr) 1.7fr minmax(150px,1fr)";

export default function CommunityPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "커뮤니티",
        item: `${SITE_URL}/community`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumb, faqLd]} />

      {/* ACT 1 · HOOK */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          padding:
            "clamp(86px,11vw,160px) clamp(20px,5vw,56px) clamp(60px,7vw,90px)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `url("${heroBg}") center 18% / cover no-repeat`,
            opacity: 0.4,
            animation: "jnDrift 30s ease-in-out infinite alternate",
            zIndex: -2,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(7,8,12,.62),rgba(7,8,12,.86) 64%,#07080c)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
          }}
        >
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: "rgba(240,242,246,.6)",
              border: "1px solid rgba(255,255,255,.16)",
              padding: "7px 15px",
              borderRadius: 999,
            }}
          >
            꿈을 향해 달려가는 모든 청년들을 위해
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px,6.4vw,86px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-.04em",
            }}
          >
            스펙은 다 쌓았는데,
            <br />왜 자꾸 떨어질까?
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 640,
              fontSize: "clamp(16px,1.7vw,20px)",
              lineHeight: 1.64,
              color: "rgba(240,242,246,.74)",
              fontWeight: 500,
            }}
          >
            AI가 반복 업무를 대체하면서, 경력·AI 활용 인재 중심 채용이
            이루어지고 있어요.
            <br />
            실력도, 학벌도, 스펙도 — 이제 그것만으로는 부족합니다.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "0 clamp(20px,5vw,56px) clamp(80px,10vw,140px)",
          background: "#07080c",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,260px),1fr))",
              gap: 16,
              marginBottom: 16,
            }}
          >
            {stats.map((s) => (
              <div
                key={s.value}
                style={{
                  background: "#11131d",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: 18,
                  padding: 34,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(46px,6.4vw,68px)",
                    fontWeight: 800,
                    color: "#FF8B8B",
                    letterSpacing: "-.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ marginTop: 16, fontSize: 16, fontWeight: 700 }}>
                  {s.title}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                    color: "rgba(240,242,246,.55)",
                    fontWeight: 500,
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              margin: "0 0 44px",
              fontSize: 12.5,
              color: "rgba(240,242,246,.38)",
              fontWeight: 500,
            }}
          >
            출처 · 조선비즈, 중앙일보 (2025–2026)
          </p>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(28px,4.2vw,52px)",
                fontWeight: 800,
                letterSpacing: "-.03em",
                lineHeight: 1.2,
              }}
            >
              이제 스펙이 아니라,{" "}
              <span style={{ color: "#86C3FA" }}>스토리</span>예요.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(16px,1.7vw,19px)",
                lineHeight: 1.6,
                color: "rgba(240,242,246,.68)",
                fontWeight: 500,
              }}
            >
              하고 싶은 프로젝트를 하고, 그걸 스토리로 스펙화한다. 도메인에 맞춘
              ‘나’를 보여주는 사람이 결국 남습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ACT 2 · 프로그램 소개 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 22px",
              fontSize: "clamp(28px,3.8vw,48px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            그래서, 하고 싶은 걸 하면서
            <br />
            스펙이 되는 곳을 만들었어요.
          </h2>
          <p
            style={{
              margin: "0 0 36px",
              maxWidth: 640,
              fontSize: 17,
              lineHeight: 1.62,
              color: "rgba(240,242,246,.68)",
              fontWeight: 500,
            }}
          >
            단순한 프로젝트 모임이 아니에요. 하고 싶은 사이드 프로젝트를 진짜로
            함께 만들고, 멘토가 그걸 ‘스펙’으로 만들어 줍니다.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 48,
            }}
          >
            {programTags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 14.5,
                  fontWeight: 600,
                  color: "rgba(240,242,246,.78)",
                  background: "#11131d",
                  border: "1px solid rgba(255,255,255,.09)",
                  padding: "11px 18px",
                  borderRadius: 999,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div
            style={{
              background: "#0e1018",
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 22,
              padding: "clamp(24px,3.6vw,42px)",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(240,242,246,.5)",
                marginBottom: 6,
              }}
            >
              예를 들면 — 한 팀의 이야기
            </div>
            <div
              style={{
                fontSize: "clamp(21px,2.6vw,28px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
                marginBottom: 30,
              }}
            >
              ‘축구 승부예측 프로그램’
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {storyRows.map((r, i) => (
                <div
                  key={r.when}
                  style={{
                    display: "grid",
                    gridTemplateColumns: storyGrid,
                    gap: 18,
                    alignItems: "start",
                    paddingBottom: i < storyRows.length - 1 ? 16 : 0,
                    borderBottom:
                      i < storyRows.length - 1
                        ? "1px solid rgba(255,255,255,.07)"
                        : "none",
                  }}
                >
                  <div style={{ fontSize: 15.5, fontWeight: 800 }}>
                    {r.when}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(240,242,246,.66)",
                      fontWeight: 500,
                    }}
                  >
                    {r.body}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "#86C3FA",
                      fontWeight: 600,
                    }}
                  >
                    {r.role}
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                margin: "30px 0 0",
                fontSize: "clamp(16px,1.9vw,20px)",
                fontWeight: 700,
                lineHeight: 1.5,
                paddingTop: 26,
                borderTop: "1px solid rgba(255,255,255,.1)",
              }}
            >
              그냥 취미 프로젝트가,{" "}
              <span style={{ color: "#86C3FA" }}>
                설명할 수 있는 데이터 분석 커리어
              </span>
              가 됐어요.
            </p>
          </div>
        </div>
      </section>

      {/* ACT 2.5 · 정기 활동 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            들어오면, 매달
            <br />
            이런 걸 함께해요.
          </h2>
          <p
            style={{
              margin: "0 0 46px",
              maxWidth: 640,
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "rgba(240,242,246,.64)",
              fontWeight: 500,
            }}
          >
            온라인과 오프라인을 오가며, 꾸준히 모이고 만들고 연결돼요. 아래
            활동들이 매달 반복됩니다.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: 16,
            }}
          >
            {activities.map((a) => (
              <div
                key={a.title}
                style={{
                  background: "#11131d",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: 18,
                  padding: 28,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: a.color,
                    background: "rgba(255,255,255,.05)",
                    border: `1px solid ${a.color}44`,
                    padding: "5px 11px",
                    borderRadius: 999,
                    marginBottom: 18,
                  }}
                >
                  {a.cadence}
                </span>
                <div
                  style={{
                    fontSize: 19,
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    marginBottom: 12,
                  }}
                >
                  {a.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(240,242,246,.64)",
                    fontWeight: 500,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT 3 · 멘토진 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            당신의 이야기를 엮어줄,
            <br />
            서로 다른 길을 걸어온 사람들.
          </h2>
          <p
            style={{
              margin: "0 0 46px",
              maxWidth: 640,
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "rgba(240,242,246,.64)",
              fontWeight: 500,
            }}
          >
            각기 다른 커리어를 직접 걸어왔기에, 당신의 경험을 ‘스토리’로 엮는
            법을 누구보다 잘 압니다. 모두 20대 멘토들입니다. 멘토들도 도전하고,
            나아가고 있으며 세상과 닿는 법을 조금 일찍 알게 된 청춘들입니다.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,230px),1fr))",
              gap: 16,
            }}
          >
            {mentors.map((m) => (
              <div
                key={m.tag}
                style={{
                  background: "#11131d",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: 18,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(134,195,250,.16)",
                    color: "#86C3FA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 18,
                    marginBottom: 18,
                  }}
                >
                  {m.tag}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "rgba(240,242,246,.45)",
                    marginTop: -6,
                    marginBottom: 14,
                  }}
                >
                  {m.age}
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 18,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(240,242,246,.66)",
                    fontWeight: 500,
                  }}
                >
                  {m.items.map((it) => (
                    <li key={it} style={{ paddingLeft: 4 }}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div
              style={{
                background:
                  "linear-gradient(160deg,rgba(134,195,250,.12),#11131d)",
                border: "1px solid rgba(134,195,250,.28)",
                borderRadius: 18,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#86C3FA",
                  marginBottom: 12,
                }}
              >
                커리어 세션
              </div>
              <div style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.5 }}>
                프로젝트가 아니라, 당신의 스토리를 만듭니다 — 스택보다 스토리,
                스토리를 커리어로, 결국 당신의 이야기.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 4 · 가격 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
            }}
          >
            어디까지 갈지는, 당신이 정해요.
          </h2>
          <p
            style={{
              margin: "0 0 44px",
              fontSize: 16.5,
              color: "rgba(240,242,246,.64)",
              fontWeight: 500,
            }}
          >
            혜택은 위로 갈수록 쌓입니다 ·{" "}
            <span style={{ color: "#86C3FA", fontWeight: 700 }}>
              Spark ⊂ Growth
            </span>
          </p>
          <PricingPlans />
        </div>
      </section>

      {/* ACT 5 · Q&A */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 36px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
            }}
          >
            그래도 궁금한 게 남았다면.
          </h2>
          <Faq items={faqs} />
        </div>
      </section>

      {/* 신청 CTA */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(80px,10vw,150px) clamp(20px,5vw,56px)",
          textAlign: "center",
          isolation: "isolate",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `url("${heroBg}") center / cover no-repeat`,
            zIndex: -2,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(100% 100% at 50% 50%, rgba(7,8,12,.6), #07080c 78%)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px,4vw,52px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-.03em",
            }}
          >
            지금, 당신의 작은 점을
            <br />
            쩜넷에서 연결하세요<span style={{ color: "#86C3FA" }}>.</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16.5,
              color: "rgba(240,242,246,.7)",
              fontWeight: 500,
            }}
          >
            상시 모집해요. 온라인 + 바닐라쩜넷 오프라인 병행, 들어온 팀부터 바로
            시작합니다.
          </p>
          <CtaButtons fontSize={16.5} />
          <iframe
            src="https://luma.com/embed/event/evt-ftUUYkdYRVQG95k/simple"
            title="바닐라쩜넷 이벤트 신청"
            style={{
              width: "100%",
              maxWidth: 760,
              height: 400,
              border: "1px solid #bfcbda88",
              borderRadius: 8,
            }}
            allow="fullscreen; payment"
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </section>
    </>
  );
}
