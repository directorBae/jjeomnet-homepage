import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "커뮤니티 진행 과정",
  description:
    "쩜넷 커뮤니티에 가입하면 전담 멘토가 배정되고, 취업·포트폴리오·시장 탐색·개인 취미 네 가지 목적에 맞춰 첫 기획부터 정기 미팅, 팀 빌딩, 바닐라쩜넷 데모데이까지 함께 진행합니다.",
  alternates: { canonical: "/community/program" },
  openGraph: {
    title: "커뮤니티 진행 과정 · 쩜넷",
    description:
      "멘토 배정부터 첫 기획, 정기 미팅, 팀 빌딩, 바닐라쩜넷 데모데이까지 — 쩜넷 커뮤니티가 진행되는 방식.",
    url: "/community/program",
  },
};

const heroBg = "/images/hero-bg.jpg";

/** 프로젝트의 네 가지 목적 — 멘토는 이 목적에 맞춰 기획을 설계 */
const purposes = [
  {
    name: "취업",
    chip: "커리어 스토리",
    color: "#86C3FA",
    desc: "직무에 맞춘 프로젝트로, 면접에서 설명할 수 있는 나만의 스토리를 만들어요.",
  },
  {
    name: "포트폴리오",
    chip: "완성된 결과물",
    color: "#5EF479",
    desc: "기획부터 배포까지 끝낸, ‘보여줄 수 있는’ 결과물을 만들어요.",
  },
  {
    name: "시장 탐색",
    chip: "아이디어 검증",
    color: "#FFBABA",
    desc: "이 아이디어, 시장에서 통할까? 시장 조사와 고객 검증으로 직접 확인해요.",
  },
  {
    name: "개인 취미",
    chip: "완성의 경험",
    color: "#FADF4B",
    desc: "좋아서 만드는 프로젝트도 환영해요. 혼자 미루던 걸 끝까지 완성해 세상에 내보내요.",
  },
];

const steps = [
  {
    n: "01",
    title: "전담 멘토 배정",
    desc: "커뮤니티에 가입하면 전담 멘토가 배정돼요. 아직 막연한 아이디어만 있어도 괜찮아요.",
  },
  {
    n: "02",
    title: "목적에 맞는 첫 기획",
    desc: "네 가지 목적 중 하나를 고르면, 전담 멘토가 목적에 맞춰 첫 기획부터 함께 잡아줘요. 취업이라면 직무에, 시장 탐색이라면 검증에 초점을 맞춰서요.",
  },
  {
    n: "03",
    title: "멘토들과 정기 미팅",
    desc: "기획이 잡히면 전담 멘토 외에 다른 멘토들과도 미팅이 진행돼요. 꾸준히 점검받고, 막히는 지점을 그때그때 풀어요.",
    chip: "주 1회 또는 주 2회 · 요금제에 따라",
    chipColor: "#86C3FA",
  },
  {
    n: "04",
    title: "팀 빌딩",
    desc: "쩜넷 커뮤니티에서 팀원을 모집할 수도 있고, 함께하고 싶은 팀원을 직접 데려와 참가시킬 수도 있어요. 물론 혼자 시작해도 괜찮아요.",
    chip: "팀 2~4인 · 개인 참여 가능",
    chipColor: "#5EF479",
  },
  {
    n: "05",
    title: "데모데이, 그리고 시장으로",
    desc: "요금제에 따라 원하는 날의 바닐라쩜넷 무대에서 데모데이를 열 수 있어요. 시장 탐색이 목적이라면, 시장 조사와 검증까지 함께 진행해요.",
    chip: "바닐라쩜넷 데모데이",
    chipColor: "#FFBABA",
  },
];

/** 요금제에 따라 달라지는 항목 */
const planPerks = [
  { t: "멘토 미팅 횟수", d: "주 1회 또는 주 2회로 진행돼요." },
  { t: "데모데이", d: "원하는 날의 바닐라쩜넷 무대에서 열 수 있어요." },
  { t: "시장 탐색 지원", d: "시장 조사와 고객 검증을 함께 진행해요." },
];

const teamRules = [
  {
    ok: true,
    title: "커뮤니티에서 모집",
    desc: "디스코드와 바닐라쩜넷에서 새 팀원을 모집할 수 있어요.",
  },
  {
    ok: true,
    title: "외부 팀원 영입",
    desc: "원래 함께하던 친구·동료를 데려와 팀으로 참가할 수 있어요.",
  },
  {
    ok: true,
    title: "팀원 전원 미팅 참석",
    desc: "멘토 미팅에는 팀원 모두가 참석할 수 있어요. 일부만 듣고 전달하는 구조가 아니에요.",
  },
  {
    ok: false,
    title: "팀원 몰래 숨기기",
    desc: "등록하지 않은 팀원을 몰래 참여시키는 것은 엄격히 금지돼요. 모두가 드러나야, 모두가 같은 도움을 받아요.",
  },
];

export default function CommunityProgramPage() {
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
      {
        "@type": "ListItem",
        position: 3,
        name: "진행 과정",
        item: `${SITE_URL}/community/program`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          padding:
            "clamp(86px,11vw,150px) clamp(20px,5vw,56px) clamp(56px,7vw,80px)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(90% 70% at 75% 8%, rgba(134,195,250,.14), transparent 60%), radial-gradient(80% 60% at 10% 100%, rgba(94,244,121,.08), transparent 60%), #07080c",
            zIndex: -1,
          }}
        />
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13.5,
              fontWeight: 600,
              color: "rgba(240,242,246,.6)",
              border: "1px solid rgba(255,255,255,.16)",
              padding: "7px 15px",
              borderRadius: 999,
              marginBottom: 22,
            }}
          >
            커뮤니티 진행 과정
          </span>
          <h1
            style={{
              margin: "0 0 20px",
              fontSize: "clamp(40px,6vw,82px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-.04em",
            }}
          >
            가입하면,
            <br />
            이렇게 진행돼요<span style={{ color: "#86C3FA" }}>.</span>
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 620,
              fontSize: "clamp(16px,1.6vw,19px)",
              lineHeight: 1.62,
              color: "rgba(240,242,246,.72)",
              fontWeight: 500,
            }}
          >
            멘토 배정부터 첫 기획, 정기 미팅, 팀 빌딩, 그리고 바닐라쩜넷
            데모데이까지 — 쩜넷의 여정을 한눈에 보여드릴게요.
          </p>
        </div>
      </section>

      {/* 목적 선택 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
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
            먼저, 왜 만드는지부터
            <br />
            정해요.
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
            같은 프로젝트라도 목적이 다르면 완전히 다르게 설계돼요. 네 가지 중
            하나를 고르면, 멘토가 거기에 맞춰 기획을 잡아줍니다.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: 16,
            }}
          >
            {purposes.map((p) => (
              <div
                key={p.name}
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
                    color: p.color,
                    background: "rgba(255,255,255,.05)",
                    border: `1px solid ${p.color}44`,
                    padding: "5px 11px",
                    borderRadius: 999,
                    marginBottom: 18,
                  }}
                >
                  {p.chip}
                </span>
                <div
                  style={{
                    fontSize: 21,
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    marginBottom: 12,
                  }}
                >
                  {p.name}
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
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 단계 타임라인 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
        }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            그다음은,
            <br />이 흐름을 따라가요.
          </h2>
          <p
            style={{
              margin: "0 0 52px",
              maxWidth: 640,
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "rgba(240,242,246,.64)",
              fontWeight: 500,
            }}
          >
            기수도, 정해진 커리큘럼도 없어요. 들어온 순간부터 당신의 프로젝트를
            중심으로 이 과정이 굴러갑니다.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                  gap: "clamp(16px,3vw,26px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: "rgba(134,195,250,.14)",
                      border: "1px solid rgba(134,195,250,.3)",
                      color: "#86C3FA",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 16,
                    }}
                  >
                    {s.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden
                      style={{
                        width: 1,
                        flex: 1,
                        minHeight: 18,
                        background: "rgba(255,255,255,.12)",
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    paddingTop: 8,
                    paddingBottom: i < steps.length - 1 ? 40 : 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: 10,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "clamp(19px,2.2vw,24px)",
                        fontWeight: 800,
                        letterSpacing: "-.02em",
                      }}
                    >
                      {s.title}
                    </h3>
                    {s.chip && (
                      <span
                        style={{
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: s.chipColor,
                          background: "rgba(255,255,255,.05)",
                          border: `1px solid ${s.chipColor}44`,
                          padding: "5px 11px",
                          borderRadius: 999,
                        }}
                      >
                        {s.chip}
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      maxWidth: 640,
                      fontSize: 15.5,
                      lineHeight: 1.62,
                      color: "rgba(240,242,246,.66)",
                      fontWeight: 500,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 요금제 하이라이트 */}
          <div
            style={{
              marginTop: 56,
              background: "linear-gradient(160deg,rgba(134,195,250,.12),#11131d)",
              border: "1px solid rgba(134,195,250,.28)",
              borderRadius: 20,
              padding: "clamp(24px,3.4vw,36px)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: ".04em",
                color: "#86C3FA",
              }}
            >
              요금제에 따라 달라져요
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,200px),1fr))",
                gap: 16,
              }}
            >
              {planPerks.map((p) => (
                <div key={p.t}>
                  <div
                    style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 6 }}
                  >
                    {p.t}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13.5,
                      lineHeight: 1.55,
                      color: "rgba(240,242,246,.6)",
                      fontWeight: 500,
                    }}
                  >
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/community#pricing"
              className="btn-ghost"
              style={{
                alignSelf: "flex-start",
                fontWeight: 700,
                fontSize: 14.5,
                padding: "13px 24px",
                borderRadius: 999,
              }}
            >
              요금제 비교하기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 팀 운영 원칙 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
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
            팀은 자유롭게,
            <br />단 투명하게.
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
            팀을 꾸리는 방식은 자유예요. 딱 하나, 모든 팀원이 커뮤니티에 드러나
            있어야 한다는 원칙만 지켜주세요.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: 16,
            }}
          >
            {teamRules.map((r) => (
              <div
                key={r.title}
                style={{
                  background: r.ok
                    ? "#11131d"
                    : "linear-gradient(160deg,rgba(255,139,139,.1),#11131d)",
                  border: r.ok
                    ? "1px solid rgba(255,255,255,.07)"
                    : "1px solid rgba(255,139,139,.42)",
                  borderRadius: 18,
                  padding: 28,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: r.ok
                      ? "rgba(134,195,250,.16)"
                      : "rgba(255,139,139,.16)",
                    color: r.ok ? "#86C3FA" : "#FF8B8B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 14,
                    marginBottom: 16,
                  }}
                >
                  {r.ok ? "✓" : "✕"}
                </span>
                <div
                  style={{
                    fontSize: 17.5,
                    fontWeight: 800,
                    letterSpacing: "-.01em",
                    marginBottom: 10,
                    color: r.ok ? undefined : "#FF8B8B",
                  }}
                >
                  {r.title}
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
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              lineHeight: 1.22,
              letterSpacing: "-.03em",
            }}
          >
            이제, 당신의 점을
            <br />
            찍을 차례예요<span style={{ color: "#86C3FA" }}>.</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16.5,
              color: "rgba(240,242,246,.7)",
              fontWeight: 500,
            }}
          >
            상시 모집해요. 디스코드 입장은 무료이고,
            <br />
            Spark · Growth 프로젝트 트랙 안내와 신청도 그 안에서 이루어져요.
          </p>
          <CtaButtons
            fontSize={16.5}
            secondaryHref="/community"
            secondaryLabel="커뮤니티 소개 보기"
          />
        </div>
      </section>
    </>
  );
}
