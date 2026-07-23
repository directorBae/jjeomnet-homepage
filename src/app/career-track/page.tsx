import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import MentorShowcase from "@/components/MentorShowcase";
import PricingPlans from "@/components/PricingPlans";
import Faq from "@/components/Faq";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "커리어 트랙",
  description:
    "관심사가 커리어가 됩니다. 취업, 창업을 위한 시장 조사 — 분명한 목적 위에서 멘토와 함께 커리어를 만드는 트랙. 첫 기획 미팅(온라인 가능)에서 방향과 일정을 논의하고, Spark 3개월·Growth 6개월 과정으로 데모데이까지 함께 갑니다.",
  alternates: { canonical: "/career-track" },
  openGraph: {
    title: "커리어 트랙 · 쩜넷",
    description:
      "멘토와 함께, 커리어를 만든다. 관심사가 커리어가 되는 Spark 3개월 · Growth 6개월 트랙.",
    url: "/career-track",
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
  "Spark 3개월 · Growth 6개월 완주",
  "첫 미팅에서 기획·일정 설계",
  "멘토가 ‘스펙’으로 설계",
  "팀·개인 자유 · 팀은 2~4인",
  "월 1회 정기 모임 · 트랙별 멘토링",
];

/** 첫 기획 미팅의 절차 — 막연한 관심사가 목표·일정이 되기까지 (예시: 축구 승부예측 팀) */
const meetingFlow = [
  {
    n: "1",
    title: "관심사 꺼내기",
    desc: "멘토의 질문으로 시작해요. 무엇을 좋아하는지, 무엇을 배우고 싶은지 — 막연해도 괜찮아요.",
    example: "“축구를 좋아하고, 데이터 분석을 배워보고 싶어요.”",
  },
  {
    n: "2",
    title: "목적 정하기",
    desc: "취업·포트폴리오·시장 탐색·개인 취미 중, 이 프로젝트가 무엇을 위한 것인지 정해요.",
    example: "“데이터 직무 취업이 목표예요.”",
  },
  {
    n: "3",
    title: "주제 구체화",
    desc: "관심사와 목적을 교차해, 손에 잡히는 프로젝트 주제로 좁혀요.",
    example: "축구 × 데이터 분석 → ‘축구 승부예측 프로그램’",
  },
  {
    n: "4",
    title: "결과물 정의",
    desc: "어디까지 만들면 완성인지 — 최종 결과물과 완성 기준을 함께 정해요.",
    example: "뉴스·경기 데이터로 근거를 설명하는 예측 서비스 배포",
  },
  {
    n: "5",
    title: "주차별 일정 확정",
    desc: "몇 주 차에 무엇을 끝낼지, 미팅 안에서 로드맵을 다 짜요. 이 일정이 트랙의 마감이 됩니다.",
    example: "1–2주 차 데이터 수집 → 6주 차 첫 배포 → 12주 차 데모데이",
  },
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

/** 프로젝트의 네 가지 목적 — 멘토는 이 목적에 맞춰 기획을 설계하고, 목적마다 결과물이 남는다 */
const purposes = [
  {
    name: "취업",
    chip: "커리어 스토리",
    color: "#86C3FA",
    desc: "직무에 맞춘 프로젝트로, 면접에서 설명할 수 있는 나만의 스토리를 만들어요.",
    outcome: "배포까지 마친 실전 프로젝트 + 면접에서 풀어낼 커리어 스토리",
  },
  {
    name: "포트폴리오",
    chip: "완성된 결과물",
    color: "#5EF479",
    desc: "기획부터 배포까지 끝낸, ‘보여줄 수 있는’ 결과물을 만들어요.",
    outcome: "도메인까지 연결되어, 링크 하나로 보여주는 라이브 포트폴리오",
  },
  {
    name: "시장 탐색",
    chip: "아이디어 검증",
    color: "#FFBABA",
    desc: "이 아이디어, 시장에서 통할까? 시장 조사와 고객 검증으로 직접 확인해요.",
    outcome: "실제 사용자를 만난 MVP + 시장 조사·검증 리포트",
  },
  {
    name: "개인 취미",
    chip: "완성의 경험",
    color: "#FADF4B",
    desc: "좋아서 만드는 프로젝트도 환영해요. 혼자 미루던 걸 끝까지 완성해 세상에 내보내요.",
    outcome: "세상에 공개된 나만의 완성작 하나",
  },
];

/** 같은 프로젝트 — 혼자 vs 쩜넷과 함께 */
const versus = [
  {
    aspect: "기획",
    alone: "무엇을 만들지 정하다가 몇 주가 그냥 지나가요.",
    together: "첫 미팅에서 멘토가 목적에 맞춰 기획과 일정을 다 짜줘요.",
  },
  {
    aspect: "피드백",
    alone: "이 방향이 맞는지 물어볼 사람이 없어요.",
    together: "요금제에 따라 월 1회 또는 2주 1회, 멘토들과 미팅하며 그때그때 점검해요.",
  },
  {
    aspect: "팀",
    alone: "같이 할 사람을 못 구해 결국 혼자 다 떠안아요.",
    together: "커뮤니티에서 팀원을 모집하거나, 함께하던 팀원을 데려와요.",
  },
  {
    aspect: "완성",
    alone: "바빠지면 우선순위에서 밀려 흐지부지 끝나요.",
    together: "정기 미팅이 자연스러운 마감이 되어, 완성까지 밀고 가요.",
  },
  {
    aspect: "결과물",
    alone: "폴더 속 코드, 나만 아는 프로젝트로 남아요.",
    together: "배포와 도메인을 거쳐, 바닐라쩜넷 데모데이 무대까지 올라요.",
  },
];

const steps = [
  {
    n: "01",
    title: "전담 멘토 배정",
    desc: "신청하면 목적에 맞는 전담 멘토가 배정돼요. 아직 막연한 아이디어만 있어도 괜찮아요.",
  },
  {
    n: "02",
    title: "첫 기획 미팅 — 방향과 일정을 함께",
    desc: "첫 기획 미팅에서는 멘토와 오랜 시간을 들여 앞으로의 프로젝트 방향성과 일정을 논의해요. 온라인으로도 가능해요. 무엇을 만들지, 몇 주 차에 뭘 끝낼지 — 로드맵을 손에 들고 개발을 시작합니다.",
    chip: "온라인 가능 · 기획·일정은 멘토가 설계",
    chipColor: "#86C3FA",
  },
  {
    n: "03",
    title: "멘토들과 정기 미팅",
    desc: "기획이 잡히면 전담 멘토 외에 다른 멘토들과도 미팅이 진행돼요. 꾸준히 점검받고, 막히는 지점을 그때그때 풀어요.",
    chip: "월 1회 또는 2주 1회 · 요금제에 따라",
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
  { t: "프로그램 기간", d: "Spark 3개월 · Growth 6개월 완주 과정이에요." },
  { t: "멘토 미팅 횟수", d: "Spark 월 1회 · Growth 2주 1회로 진행돼요." },
  { t: "데모데이", d: "원하는 날의 바닐라쩜넷 무대에서 열 수 있어요." },
  { t: "시장 탐색 지원", d: "시장 조사와 고객 검증을 함께 진행해요." },
  { t: "LinkedIn 커리어 코칭", d: "Growth에서는 프로필·글쓰기·1촌 네트워킹까지 배워요." },
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

const faqs = [
  {
    q: "기간이 정해져 있나요? 장기 프로그램인가요?",
    a: "Spark는 3개월, Growth는 6개월 완주 과정이에요. 시작은 상시(아무 때나 합류)지만 끝은 분명하게 정해져 있고, 기간이 끝난 뒤 원하면 월 단위로 연장할 수 있어요.",
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
    a: "아니요. 기수 없이 상시 모집하며, 들어온 팀부터 바로 시작합니다. 각 프로젝트는 Spark 3개월 · Growth 6개월 기준으로 완주해요.",
  },
  {
    q: "요금제는 중간에 바꿀 수 있나요?",
    a: "네, Spark ↔ Growth 전환이 가능해요. 기간 종료 후에도 이어가고 싶다면 월 단위 연장(Spark 월 29,900원 · Growth 월 69,900원)으로 계속할 수 있습니다.",
  },
  {
    q: "배포·도메인은 정말 무료인가요?",
    a: "무료 SaaS형 배포와 .jjeom.net / .net 도메인을 요금제에 따라 지원합니다.",
  },
];

export default function CareerTrackPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "커리어 트랙",
        item: `${SITE_URL}/career-track`,
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
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 22,
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
            커리어 트랙 · Spark 3개월 · Growth 6개월
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px,6vw,82px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-.04em",
            }}
          >
            멘토와 함께,
            <br />
            커리어를 만든다<span style={{ color: "#86C3FA" }}>.</span>
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
            단순한 사이드 프로젝트가 아니에요. 취업, 창업을 위한 시장 조사처럼
            분명한 목적 위에서 — 지금 만드는 프로젝트와 활동이 진짜 나에게
            도움이 되도록, 멘토와 함께 커리어를 만들어 가는 트랙이에요.
          </p>
          <CtaButtons
            justify="flex-start"
            secondaryHref="#pricing"
            secondaryLabel="요금제 보기"
          />
          <p
            style={{
              margin: 0,
              fontSize: 14.5,
              color: "rgba(240,242,246,.55)",
              fontWeight: 500,
            }}
          >
            이 트랙이 나와 맞을지 궁금하다면?{" "}
            <a
              href={SITE.links.webinar}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#86C3FA",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              소개 웨비나 신청 →
            </a>
          </p>
        </div>
      </section>

      {/* 문제의식 · 스펙이 아니라 스토리 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(28px,3.8vw,48px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            스펙이 아니라,
            <br />
            스토리의 시대.
          </h2>
          <p
            style={{
              margin: "0 0 40px",
              maxWidth: 640,
              fontSize: 16.5,
              lineHeight: 1.65,
              color: "rgba(240,242,246,.68)",
              fontWeight: 500,
            }}
          >
            기업은 더 이상 스펙만 보고 사원을 뽑지 않아요.
            <br />
            슬프지만, 혼자 만들고 완성해서 가치를 직접 만들 수 있는 사람을
            원하죠.
          </p>
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
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(26px,3.8vw,44px)",
                fontWeight: 800,
                letterSpacing: "-.03em",
                lineHeight: 1.2,
              }}
            >
              그런데, <span style={{ color: "#86C3FA" }}>누구나</span> 이런
              사람이 될 수 있어요.
            </h3>
          </div>
        </div>
      </section>

      {/* 프로그램 소개 + 한 팀의 이야기 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
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
            관심사가,
            <br />
            커리어가 됩니다.
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
            취업은 어렵고, 지금 하는 프로젝트가 나에게 도움이 될지도 모르겠고 —
            그래서 만들었어요. 막연한 관심사가 첫 기획 미팅 한 번으로 구체적인
            목표와 주차별 일정이 되는 과정 — 정확히 이렇게 진행돼요.
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

          {/* 첫 기획 미팅 절차 — 관심사 → 목표·일정 */}
          <div
            style={{
              background: "#0e1018",
              border: "1px solid rgba(134,195,250,.24)",
              borderRadius: 22,
              padding: "clamp(24px,3.6vw,42px)",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: 12.5,
                fontWeight: 700,
                color: "#86C3FA",
                background: "rgba(134,195,250,.08)",
                border: "1px solid rgba(134,195,250,.4)",
                padding: "5px 11px",
                borderRadius: 999,
                marginBottom: 14,
              }}
            >
              첫 기획 미팅 · 온라인 가능
            </span>
            <div
              style={{
                fontSize: "clamp(21px,2.6vw,28px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
                marginBottom: 8,
              }}
            >
              미팅 한 번에, 관심사가 목표와 일정이 됩니다.
            </div>
            <p
              style={{
                margin: "0 0 30px",
                fontSize: 14.5,
                lineHeight: 1.6,
                color: "rgba(240,242,246,.6)",
                fontWeight: 500,
              }}
            >
              멘토와 충분히 긴 시간을 들여, 이 다섯 단계를 차례로 밟아요. 파란
              글씨는 실제 예시 — 축구 승부예측 팀의 첫 미팅이에요.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {meetingFlow.map((m, i) => (
                <div
                  key={m.n}
                  className="story-row"
                  style={{
                    paddingBottom: i < meetingFlow.length - 1 ? 16 : 0,
                    borderBottom:
                      i < meetingFlow.length - 1
                        ? "1px solid rgba(255,255,255,.07)"
                        : "none",
                  }}
                >
                  <div style={{ fontSize: 15.5, fontWeight: 800 }}>
                    <span style={{ color: "#86C3FA" }}>{m.n}.</span> {m.title}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(240,242,246,.66)",
                      fontWeight: 500,
                    }}
                  >
                    {m.desc}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "#86C3FA",
                      fontWeight: 600,
                    }}
                  >
                    {m.example}
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
              미팅이 끝나면 손에 남는 건 두 가지 —{" "}
              <span style={{ color: "#86C3FA" }}>
                구체적인 목표 하나, 주차별 일정표 하나
              </span>
              . 다음 미팅부터는 이 일정대로 만들기만 하면 돼요.
            </p>
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
              첫 미팅 이후 — 이 팀의 이야기
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
                  className="story-row"
                  style={{
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
            하나를 고르면 멘토가 거기에 맞춰 기획을 잡아주고 — 목적마다, 손에
            잡히는 결과물이 남습니다.
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
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 14,
                    borderTop: "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11.5,
                      fontWeight: 800,
                      letterSpacing: ".08em",
                      color: p.color,
                      marginBottom: 6,
                    }}
                  >
                    결과물
                  </div>
                  <div
                    style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.5 }}
                  >
                    {p.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 혼자 vs 쩜넷 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
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
            혼자서도,
            <br />할 수 있지 않나요?
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
            맞아요, 시작은 혼자서도 할 수 있어요. 그런데 해봤다면 알 거예요 —
            완성은 다른 문제라는 걸. 같은 프로젝트가 어떻게 달라지는지 비교해
            볼게요.
          </p>
          <div
            style={{
              background: "#0e1018",
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 22,
              padding: "clamp(24px,3.6vw,42px)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            {versus.map((v, i) => (
              <div
                key={v.aspect}
                style={{
                  paddingBottom: i < versus.length - 1 ? 22 : 0,
                  borderBottom:
                    i < versus.length - 1
                      ? "1px solid rgba(255,255,255,.07)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 15.5,
                    fontWeight: 800,
                    letterSpacing: "-.01em",
                    marginBottom: 12,
                  }}
                >
                  {v.aspect}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(min(100%,280px),1fr))",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      background: "rgba(7,8,12,.55)",
                      border: "1px solid rgba(255,255,255,.08)",
                      borderRadius: 14,
                      padding: "16px 18px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11.5,
                        fontWeight: 700,
                        color: "rgba(240,242,246,.5)",
                        border: "1px solid rgba(255,255,255,.14)",
                        padding: "4px 10px",
                        borderRadius: 999,
                        marginBottom: 10,
                      }}
                    >
                      혼자 하면
                    </span>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "rgba(240,242,246,.55)",
                        fontWeight: 500,
                      }}
                    >
                      {v.alone}
                    </p>
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(160deg,rgba(134,195,250,.09),rgba(7,8,12,.55))",
                      border: "1px solid rgba(134,195,250,.3)",
                      borderRadius: 14,
                      padding: "16px 18px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: 11.5,
                        fontWeight: 700,
                        color: "#86C3FA",
                        background: "rgba(134,195,250,.08)",
                        border: "1px solid rgba(134,195,250,.4)",
                        padding: "4px 10px",
                        borderRadius: 999,
                        marginBottom: 10,
                      }}
                    >
                      쩜넷과 함께면
                    </span>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "rgba(240,242,246,.78)",
                        fontWeight: 500,
                      }}
                    >
                      {v.together}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <p
              style={{
                margin: 0,
                fontSize: "clamp(16px,1.9vw,20px)",
                fontWeight: 700,
                lineHeight: 1.5,
                paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,.1)",
              }}
            >
              혼자였다면 멈췄을 프로젝트가,{" "}
              <span style={{ color: "#86C3FA" }}>
                완성되고 — 무대에 올라요
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 진행 단계 타임라인 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
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
            참여하면,
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
            시작은 아무 때나, 끝은 분명하게 — Spark는 3개월, Growth는 6개월
            안에 완주해요. 들어온 순간부터 당신의 프로젝트를 중심으로 이 과정이
            굴러갑니다.
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
              href="#pricing"
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

      {/* 멘토진 */}
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
            당신의 커리어를 함께 설계할,
            <br />
            멘토들.
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
            익명이지만, 이력은 전부 진짜예요. 각기 다른 길을 직접 걸어온 20대
            멘토들이고, 트랙이 시작되면 이 중 당신의 목적에 맞는 전담 멘토가
            배정됩니다.
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
                  커리어 세션
                </div>
                <div
                  style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.55 }}
                >
                  프로젝트가 아니라, 당신의 스토리를 만듭니다 — 스택보다
                  스토리, 스토리를 커리어로, 결국 당신의 이야기.
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* 요금제 */}
      <section
        id="pricing"
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
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
            Spark 3개월 · Growth 6개월 완주 과정 — 혜택은 위로 갈수록 쌓입니다
            ·{" "}
            <span style={{ color: "#86C3FA", fontWeight: 700 }}>
              Spark ⊂ Growth
            </span>
          </p>

          {/* Growth · LinkedIn 커리어 코칭 */}
          <div
            style={{
              background:
                "linear-gradient(120deg,rgba(134,195,250,.14),#11131d 70%)",
              border: "1px solid rgba(134,195,250,.3)",
              borderRadius: 20,
              padding: "clamp(24px,3.4vw,36px)",
              marginBottom: 36,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                fontSize: 12.5,
                fontWeight: 800,
                letterSpacing: ".06em",
                color: "#00041A",
                background: "#86C3FA",
                padding: "5px 12px",
                borderRadius: 8,
              }}
            >
              GROWTH
            </span>
            <div
              style={{
                fontSize: "clamp(19px,2.4vw,26px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
                lineHeight: 1.3,
              }}
            >
              LinkedIn으로, 커리어의 규모를 키워요.
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: 720,
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "rgba(240,242,246,.72)",
                fontWeight: 500,
              }}
            >
              Growth 트랙에서는 프로젝트를 넘어 — LinkedIn 프로필 가꾸는 법,
              글 쓰는 법, 1촌 맺는 법까지, 실질적으로 커리어의 규모를 키우는
              방법을 가르쳐 드려요. 스타트업 개발자로 시작해 네이버·당근·레브잇
              동시 오퍼까지 받은 멘토가 직접 이야기합니다.
            </p>
          </div>

          <PricingPlans />
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

          {/* 웨비나 안내 */}
          <div
            style={{
              marginTop: 28,
              background: "linear-gradient(160deg,rgba(134,195,250,.12),#11131d)",
              border: "1px solid rgba(134,195,250,.28)",
              borderRadius: 20,
              padding: "clamp(24px,3.4vw,36px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                fontSize: "clamp(18px,2.2vw,24px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
              }}
            >
              아직 고민된다면, 웨비나에서 먼저 만나요.
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: 640,
                fontSize: 15,
                lineHeight: 1.6,
                color: "rgba(240,242,246,.68)",
                fontWeight: 500,
              }}
            >
              이 트랙이 나와 잘 맞을지 궁금하다면, 소개 웨비나를 신청하세요.
              온라인으로 부담 없이 듣고 결정해도 늦지 않아요.
            </p>
            <a
              href={SITE.links.webinar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                alignSelf: "flex-start",
                fontWeight: 700,
                fontSize: 14.5,
                padding: "13px 24px",
                borderRadius: 999,
              }}
            >
              웨비나 신청하기 →
            </a>
          </div>
        </div>
      </section>

      {/* 신청 CTA — 구글 폼 단일 */}
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
            이제, 당신의 커리어를
            <br />
            만들 차례예요<span style={{ color: "#86C3FA" }}>.</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 16.5,
              color: "rgba(240,242,246,.7)",
              fontWeight: 500,
            }}
          >
            상시 모집해요. 신청 폼을 작성하면 전담 멘토 배정과 첫 미팅 일정
            안내를 드릴게요.
          </p>
          <CtaButtons fontSize={16.5} />
        </div>
      </section>
    </>
  );
}
