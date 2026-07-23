import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryLink } from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import MentorShowcase from "@/components/MentorShowcase";
import Faq from "@/components/Faq";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "커뮤니티",
  description:
    "쩜넷 커뮤니티는 무료로 열려 있어요. 온라인 디스코드, 매달의 오프라인 모임, 바닐라쩜넷 데모데이 참석, 취·창업 큐레이션, 멘토와의 대화, 그리고 커리어 트랙 참여 자격까지 — 디스코드 입장으로 시작하세요.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "커뮤니티 · 쩜넷",
    description:
      "무료로 열려 있는 쩜넷 커뮤니티 — 매달 모이는 오프라인 행사부터 멘토와의 대화까지.",
    url: "/community",
  },
};

const heroBg = "/images/hero-bg.jpg";

/** 커뮤니티 멤버에게 열리는 것들. href가 있으면 카드 전체가 링크로 동작 */
const benefits: {
  cadence: string;
  title: string;
  desc: string;
  color: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    cadence: "매달",
    title: "오프라인 모임",
    desc: "매달 한 번, 한자리에 모여요. 진행 상황을 공유하고, 서로의 프로젝트에 피드백을 주고받아요.",
    color: "#86C3FA",
  },
  {
    cadence: "매달",
    title: "바닐라쩜넷 데모데이 참석",
    desc: "전국 학교의 대학생들이 한자리에 모이는 네트워킹 행사예요. 무대를 관람하고, 새 팀원과 동료도 이곳에서 만나요.",
    color: "#FFBABA",
    href: "/events#vanilla",
    linkLabel: "행사 소개 보기 →",
  },
  {
    cadence: "상시",
    title: "온라인 커뮤니티",
    desc: "디스코드에서 언제든 질문하고, 자랑하고, 소통해요. 입장하는 순간부터 모든 채널이 열려요.",
    color: "#FADF4B",
  },
  {
    cadence: "상시",
    title: "취·창업 큐레이션",
    desc: "채용 공고부터 공모전, 지원 사업까지 — 취업과 창업에 도움 되는 소식을 골라 커뮤니티에 공유해요.",
    color: "#86C3FA",
  },
  {
    cadence: "상시",
    title: "멘토와의 대화",
    desc: "서로 다른 길을 걸어온 20대 멘토들과 커뮤니티 안에서 자유롭게 대화하고 조언을 구해요.",
    color: "#5EF479",
  },
];

const faqs = [
  {
    q: "커뮤니티 가입은 무료인가요?",
    a: "네. 디스코드에 입장하는 것만으로 무료예요. 행사 소식, 멘토와의 대화, 프로젝트 자랑까지 모두 그 안에서 이루어져요.",
  },
  {
    q: "커뮤니티만 참여해도 되나요?",
    a: "네, 환영해요. 커리어 트랙은 원할 때 신청하면 되고, 커뮤니티 활동만으로도 매달의 모임·바닐라쩜넷 참석, 취·창업 큐레이션, 멘토와의 대화가 열려 있어요.",
  },
  {
    q: "꼭 개발을 할 줄 알아야 하나요?",
    a: "아니요. 관심사·태도·도메인이 더 중요합니다. 기획·디자인·연구 등 다양한 배경의 멤버들이 함께하고 있어요.",
  },
  {
    q: "오프라인 참여가 필수인가요?",
    a: "온라인 + 바닐라쩜넷 오프라인 병행입니다. 오프라인은 네트워킹·발표 기회로 권장됩니다.",
  },
  {
    q: "커리어 트랙은 어떻게 신청하나요?",
    a: "커리어 트랙 페이지에서 진행 과정과 요금제를 확인하고, 신청 폼으로 신청하면 돼요. 멘토와 함께 Spark 3개월 · Growth 6개월 과정으로 커리어를 만드는 프로그램입니다.",
  },
];

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

      {/* HERO */}
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
            쩜넷 커뮤니티 · 입장 무료
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
            혼자 하지 마세요.
            <br />
            매달, 함께 모여요<span style={{ color: "#86C3FA" }}>.</span>
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
            온라인 디스코드부터 매달의 오프라인 모임, 바닐라쩜넷 데모데이,
            취·창업 큐레이션, 멘토와의 대화까지 — 쩜넷의 문은 디스코드에서
            열려요.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <PrimaryLink href={SITE.links.discord} fontSize={16.5} padding="17px 30px">
              디스코드 무료 입장 →
            </PrimaryLink>
            <Link
              href="/career-track"
              className="btn-ghost"
              style={{
                fontWeight: 700,
                fontSize: 16.5,
                padding: "17px 30px",
                borderRadius: 999,
              }}
            >
              커리어 트랙 알아보기
            </Link>
          </div>
        </div>
      </section>

      {/* 커뮤니티 혜택 */}
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
            들어오면, 이 모든 게
            <br />
            함께 열려요.
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
            온라인과 오프라인을 오가며, 꾸준히 모이고 만들고 연결돼요. 커뮤니티
            멤버라면 누구에게나 열려 있는 것들이에요.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: 16,
            }}
          >
            {benefits.map((b) => {
              const inner = (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: b.color,
                      background: "rgba(255,255,255,.05)",
                      border: `1px solid ${b.color}44`,
                      padding: "5px 11px",
                      borderRadius: 999,
                      marginBottom: 18,
                    }}
                  >
                    {b.cadence}
                  </span>
                  <div
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      letterSpacing: "-.02em",
                      marginBottom: 12,
                    }}
                  >
                    {b.title}
                  </div>
                  <p
                    style={{
                      margin: b.href ? "0 0 18px" : 0,
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "rgba(240,242,246,.64)",
                      fontWeight: 500,
                    }}
                  >
                    {b.desc}
                  </p>
                  {b.href && b.linkLabel && (
                    <span
                      style={{
                        marginTop: "auto",
                        fontSize: 14.5,
                        fontWeight: 700,
                        color: b.color,
                      }}
                    >
                      {b.linkLabel}
                    </span>
                  )}
                </>
              );
              return b.href ? (
                <Link
                  key={b.title}
                  href={b.href}
                  className="card-link"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#11131d",
                    borderRadius: 18,
                    padding: 28,
                  }}
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={b.title}
                  style={{
                    background: "#11131d",
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: 18,
                    padding: 28,
                  }}
                >
                  {inner}
                </div>
              );
            })}
            {/* 커리어 트랙 참여권 — 트랙 페이지로 연결되는 카드 */}
            <Link
              href="/career-track"
              className="card-link"
              style={{
                display: "flex",
                flexDirection: "column",
                background:
                  "linear-gradient(160deg,rgba(165,148,247,.14),#11131d)",
                borderColor: "rgba(165,148,247,.36)",
                borderRadius: 18,
                padding: 28,
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: "#A594F7",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid #A594F744",
                  padding: "5px 11px",
                  borderRadius: 999,
                  marginBottom: 18,
                }}
              >
                참여권
              </span>
              <div
                style={{
                  fontSize: 19,
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                  marginBottom: 12,
                }}
              >
                커리어 트랙 참여
              </div>
              <p
                style={{
                  margin: "0 0 18px",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "rgba(240,242,246,.64)",
                  fontWeight: 500,
                }}
              >
                멘토와 함께 커리어를 만드는 Spark·Growth 트랙, 커뮤니티
                멤버에게 참여 자격이 열려요.
              </p>
              <span
                style={{
                  marginTop: "auto",
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: "#A594F7",
                }}
              >
                자세히 보기 →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 커리어 트랙 티저 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            더 깊게 가고 싶다면,
            <br />
            커리어 트랙.
          </h2>
          <p
            style={{
              margin: "0 0 40px",
              maxWidth: 640,
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "rgba(240,242,246,.64)",
              fontWeight: 500,
            }}
          >
            취업, 창업을 위한 시장 조사 — 분명한 목적 위에서 멘토와 함께
            커리어를 만드는 프로그램이에요. 첫 기획 미팅에서 방향과 일정을
            함께 잡고, 배포와 데모데이까지 갑니다.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,280px),1fr))",
              gap: 16,
              marginBottom: 28,
            }}
          >
            <Link
              href="/career-track"
              className="card-link"
              style={{
                display: "block",
                background: "#11131d",
                borderRadius: 18,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>
                Spark
              </div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#86C3FA",
                  letterSpacing: "-.02em",
                  marginBottom: 8,
                }}
              >
                3개월
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
                아이디어에 불을 붙여, 3개월 안에 실제 배포까지.
              </p>
            </Link>
            <Link
              href="/career-track"
              className="card-link"
              style={{
                display: "block",
                background:
                  "linear-gradient(180deg,rgba(134,195,250,.09),#11131d)",
                borderColor: "rgba(134,195,250,.32)",
                borderRadius: 18,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>
                Growth
              </div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#86C3FA",
                  letterSpacing: "-.02em",
                  marginBottom: 8,
                }}
              >
                6개월
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
                6개월 동안 수익·시장 탐색·커리어까지. (Spark 포함)
              </p>
            </Link>
          </div>
          <Link
            href="/career-track"
            className="btn-ghost"
            style={{
              display: "inline-block",
              fontWeight: 700,
              fontSize: 15.5,
              padding: "15px 28px",
              borderRadius: 999,
            }}
          >
            진행 과정·요금제 자세히 보기 →
          </Link>
        </div>
      </section>

      {/* 멘토진 */}
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
          <MentorShowcase
            extra={
              <div
                style={{
                  background:
                    "linear-gradient(160deg,rgba(134,195,250,.12),#11131d)",
                  border: "1px solid rgba(134,195,250,.28)",
                  borderRadius: 20,
                  padding: "clamp(26px,3vw,34px)",
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
                  멘토와의 대화
                </div>
                <div
                  style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.55 }}
                >
                  커뮤니티 안에서 언제든 멘토와 대화할 수 있어요. 커리어를 함께
                  만들고 싶다면,{" "}
                  <Link
                    href="/career-track"
                    style={{
                      color: "#86C3FA",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    커리어 트랙
                  </Link>
                  에서 전담 멘토를 만나요.
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Q&A */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
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

      {/* 합류 CTA — 디스코드 중심 */}
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
            입장은 무료예요. 오늘 들어와서, 이번 달 행사에서 만나요.
          </p>

          {/* 디스코드 합류 안내 */}
          <div
            style={{
              width: "100%",
              maxWidth: 760,
              textAlign: "left",
              background:
                "linear-gradient(160deg,rgba(88,101,242,.16),#11131d)",
              border: "1px solid rgba(88,101,242,.42)",
              borderRadius: 20,
              padding: "clamp(26px,4vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  letterSpacing: ".08em",
                  color: "#fff",
                  background: "#5865F2",
                  padding: "6px 13px",
                  borderRadius: 8,
                }}
              >
                DISCORD
              </span>
              <span
                style={{
                  fontSize: "clamp(17px,2vw,21px)",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                쩜넷의 모든 시작은 디스코드에서.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,280px),1fr))",
                gap: 14,
              }}
            >
              <div
                style={{
                  background: "rgba(7,8,12,.55)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 14,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#86C3FA",
                    marginBottom: 8,
                  }}
                >
                  입장 즉시 무료 멤버
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(240,242,246,.72)",
                    fontWeight: 500,
                  }}
                >
                  초대 링크로 들어오는 순간 커뮤니티 멤버예요. 행사 소식과
                  멘토와의 대화, 온라인 활동을 비용 없이 바로 시작할 수 있어요.
                </p>
              </div>
              <div
                style={{
                  background: "rgba(7,8,12,.55)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 14,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#86C3FA",
                    marginBottom: 8,
                  }}
                >
                  커리어 트랙 참여권
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "rgba(240,242,246,.72)",
                    fontWeight: 500,
                  }}
                >
                  커뮤니티 멤버라면 누구나 Spark·Growth 트랙에 참여할 수
                  있어요. 자세한 과정은{" "}
                  <Link
                    href="/career-track"
                    style={{
                      color: "#86C3FA",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    커리어 트랙 페이지
                  </Link>
                  에서 확인하세요.
                </p>
              </div>
            </div>
            <a
              href={SITE.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: "block",
                textAlign: "center",
                fontWeight: 700,
                fontSize: 16,
                padding: "15px 20px",
                borderRadius: 12,
              }}
            >
              디스코드 입장하기 →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
