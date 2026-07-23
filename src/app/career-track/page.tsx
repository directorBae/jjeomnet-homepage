import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import CountdownTimer from "@/components/CountdownTimer";
import ReviewMarquee from "@/components/ReviewMarquee";
import MentorShowcase from "@/components/MentorShowcase";
import PricingPlans from "@/components/PricingPlans";
import Faq from "@/components/Faq";
import { SITE, SITE_URL } from "@/lib/site";
import { COHORT } from "@/lib/cohort";

export const metadata: Metadata = {
  title: "커리어 트랙",
  description: `커리어 트랙 1기 모집 중 — ${COHORT.deadlineFull} 마감 · ${COHORT.kickoff} 시작 · 6개월 완주 과정(3개월 옵션). 첫 미팅에서 관심사를 목표와 6개월 일정으로 설계하고, 배포와 데모데이까지 멘토와 함께 갑니다.`,
  alternates: { canonical: "/career-track" },
  openGraph: {
    title: "커리어 트랙 · 쩜넷",
    description: `멘토와 함께, 커리어를 만든다. 1기 ${COHORT.kickoff} 시작 — 6개월 완주 과정(3개월 옵션), 모집은 ${COHORT.deadlineFull} 마감.`,
    url: "/career-track",
  },
};

const heroBg = "/images/hero-bg.jpg";

const stats = [
  {
    value: "−43%",
    title: "신입 개발 공고 감소",
    sub: "’23 → ’25 상반기 · 995 → 564건",
  },
  {
    value: "−73%",
    title: "IT·통신 신입 공고 급감",
    sub: "’26.3 · 전년 대비",
  },
];

/** 문은 좁아졌지만, 뽑히는 사람의 기준은 또렷하다 — 링크드인·AI 활용자 */
const winStats = [
  {
    value: "+71%",
    title: "링크드인 커리어 관리 취업률",
    sub: "상세 프로필 보유 vs 미보유 지원자 · ResumeGo 이력서 24,570건 실험",
    color: "#5EF479",
  },
  {
    value: "88%",
    title: "실제 기획부터 구축까지 풀스택 역량 선호",
    sub: "Microsoft · LinkedIn Work Trend Index 2024",
    color: "#86C3FA",
  },
];

/** 일반 프로젝트가 커리어가 되려면 쌓아야 하는, 남들이 따라오기 힘든 세 가지 */
const moats = [
  {
    n: "01",
    title: "엔지니어링 스킬",
    desc: "따라 만든 코드가 아니라, 배포와 운영까지 직접 부딪히며 쌓은 기술 깊이예요.",
  },
  {
    n: "02",
    title: "고객 니즈를 반영한 기획",
    desc: "만들고 싶은 것이 아니라, 실제 고객의 문제에서 출발한 기획이에요.",
  },
  {
    n: "03",
    title: "수정·피드백 반영의 경험",
    desc: "피드백을 받고, 고치고, 다시 내놓는 반복 — 실무가 일하는 방식 그대로의 경험이에요.",
  },
];

/** 프로그램의 세 가지 축 — 멘토 · 동료 · 커리어 */
const pillars: {
  n: string;
  color: string;
  title: string;
  desc: React.ReactNode;
}[] = [
  {
    n: "01",
    color: "#86C3FA",
    title: "멘토가 이끌어줘요.",
    desc: (
      <>
        동아리처럼 학생들끼리만 하다 보면 프로젝트는 금방 지지부진해져요. 또{" "}
        <span style={{ color: "#F0F2F6", fontWeight: 800 }}>
          차별성 있는 결과
        </span>
        를 기대하기 힘들죠.
        <br />
        쩜넷은 소수정예로 모여, 기획부터 완성까지 멘토가 직접 이끌어주고,{" "}
        <span style={{ color: "#F0F2F6", fontWeight: 800 }}>
          남들이 따라하기 힘든 스킬
        </span>
        을 만들어줘요.
      </>
    ),
  },
  {
    n: "02",
    color: "#5EF479",
    title: "동료들을 만나요.",
    desc: (
      <>
        함께 프로젝트를 진행하는 동료들과 같이 나아가요.
        <br />
        월 1회, 프로젝트 성과를 공유하고 친분을 쌓는 세션도 열립니다.
      </>
    ),
  },
  {
    n: "03",
    color: "#FFBABA",
    title: "뛰어난 커리어로 만들어요.",
    desc: "데모데이를 실행하고, 링크드인 꾸미기부터 목표 방향에 맞춘 커리어 설계, 취업·창업 같은 다음 스텝까지 멘토가 함께합니다.",
  },
];

/** 히어로 하단 — 1기 핵심 정보. 모집 마감만 박스로 강조하고 나머지는 텍스트로. */
const cohortFacts = [
  { k: "모집 마감", v: `2026년 ${COHORT.deadlineFull}`, boxed: true },
  { k: "일정", v: `${COHORT.kickoff} 킥오프`, boxed: false },
  { k: "정원", v: `${COHORT.capacity} 한정`, boxed: false },
];

/** v0 참여자 리뷰 — 타이머 아래에 놓는 사회적 증거 */
const reviews = [
  {
    name: "박OO",
    text: "취업하고 나서 면접에서 저를 어디서 좋게 봤냐고 물어봤는데 쩜넷이랑 같이 한 프로젝트였어요. 쩜넷에서 프로젝트 시작부터 시장 진입까지 도와줬는데 프로젝트 완수 및 관리 경험을 좋게 보셨더라구요.",
    by: "쩜넷 커리어 트랙 v0 참여자",
  },
  {
    name: "정OO",
    text: "단순히 프로젝트 뿐만이 아니라 네트워크까지 확장할 수 있는 프로그램이어서 좋았어요. 쩜넷 커리어 트랙을 하면서 하고 싶은 걸 할 수 있었고, 그걸 쩜넷 멘토분들과 함께할 수 있다는 게 너무 좋았어요.",
    by: "쩜넷 커리어 트랙 v0 참여자",
  },
  {
    name: "임OO",
    text: "화학공학 쪽 다니는데 게임을 너무 만들고 싶었거든요. 쩜넷이랑 같이 하고 싶었던 거 할 수 있어서 너무 좋았던 것 같아요. 코딩은 어떻게 하는 거고 AI를 어떻게 써야 할지도 감이 안 잡혔는데, 쩜넷 덕분에 할 수 있었어요.",
    by: "쩜넷 커리어 트랙 v0 참여자",
  },
  {
    name: "최OO",
    text: "쩜넷과 함께 진행해서 표창까지 받았어요. 학교를 위해 제가 만든 프로젝트를 사용했는데 표창까지 받아서, 좋은 커리어로 활용하려구요!",
    by: "쩜넷 커리어 트랙 v0 참여자",
  },
];

/** 6개월 후 손에 남는 실물 — 배경 사진 위에 그래디언트를 덮은 세로 블록.
 *  fade: 문서형 세로 이미지는 vertical(상→하), 현장 가로 사진은 horizontal(우→좌) */
const outcomes: {
  chip: string;
  color: string;
  title: string;
  desc: React.ReactNode;
  img: string;
  fade: "vertical" | "horizontal";
}[] = [
  {
    chip: "실물",
    color: "#86C3FA",
    title: "Resume / CV.",
    desc: "프로젝트에서 뭘 배웠고 왜 이 프로젝트를 했는지 — 여러분이 목표하는 기업이 좋아할 만한 방향으로, 멘토와 함께 레주메를 작성해 줘요.",
    img: "/images/portfolio.png",
    fade: "vertical",
  },
  {
    chip: "커리어",
    color: "#A594F7",
    title: "완성된 LinkedIn 프로필",
    desc: "여러분의 활동이 담긴 LinkedIn 프로필을 멘토와 함께 작성하고, 아티클 쓰는 법과 1촌 맺는 법까지 가르쳐 줘요.",
    img: "/images/linkedin.png",
    fade: "vertical",
  },
  {
    chip: "무대",
    color: "#FFBABA",
    title: "데모데이 발표 경험",
    desc: (
      <>
        대학생들이 매달 모이는{" "}
        <Link
          href="/events#vanilla"
          style={{
            color: "#FFBABA",
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          바닐라쩜넷
        </Link>
        에서 내 프로젝트를 발표해요.
      </>
    ),
    img: "/images/vanilla.jpg",
    fade: "horizontal",
  },
  {
    chip: "시장",
    color: "#5EF479",
    title: "고객 탐색",
    desc: "예비 고객군을 만나 인터뷰를 진행하고, 멘토가 인터뷰 진행까지 함께 도와줘요.",
    img: "/images/interview.png",
    fade: "horizontal",
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
    title: "첫 기획 미팅 — 방향과 6개월 일정을 함께",
    desc: "첫 기획 미팅에서는 멘토와 오랜 시간을 들여, 관심사를 바탕으로 목표와 6개월 일정을 함께 설계해요. 온라인으로도 가능해요. 무엇을 만들지, 몇 주 차에 뭘 끝낼지 — 로드맵을 손에 들고 개발을 시작합니다.",
  },
  {
    n: "03",
    title: "팀 빌딩",
    desc: "쩜넷 커뮤니티에서 팀원을 모집할 수도 있고, 함께하고 싶은 팀원을 직접 데려와 참가시킬 수도 있어요. 물론 혼자 시작해도 괜찮아요.",
  },
  {
    n: "04",
    title: "프로젝트 수행",
    desc: "기획이 잡히면 프로젝트 분야별 멘토들과 함께해요. 멘토들과 정기적으로 미팅하여 방향성과 목표를 꾸준히 점검받고, 막히는 지점을 그때그때 풀어요.",
  },
  {
    n: "05",
    title: "데모데이, 그리고 커리어로.",
    desc: "원하는 날의 바닐라쩜넷 무대에서 데모데이를 열 수 있어요. 취업과 창업에 맞게 커리어 빌딩과 시장 탐색을 진행해요.",
  },
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
    desc: "등록하지 않은 팀원을 몰래 참여시키는 것은 엄격히 금지돼요. 모두가 함께 같은 도움을 받기 위함이에요.",
  },
];

const faqs = [
  {
    q: "기수제인가요?",
    a: `네, 기수제로 운영합니다. 1기는 ${COHORT.kickoff} 시작 → ${COHORT.finish} 수료의 6개월 과정이고, 군입대·교환학생처럼 일정이 정해진 분을 위한 3개월 옵션이 있어요. 기수가 끝나도 커뮤니티·행사·디스코드 멤버십은 계속됩니다.`,
  },
  {
    q: "1기 일정이 어떻게 되나요?",
    a: `모집은 ${COHORT.deadlineFull}에 마감되고, ${COHORT.kickoff} 킥오프에서 함께 시작해요. 6개월 과정(Growth)은 ${COHORT.finish}에, 3개월 옵션(Spark)은 ${COHORT.optionFinish}에 수료합니다. 수료 후 원하면 월 단위로 연장할 수 있어요.`,
  },
  {
    q: "일주일에 시간을 얼마나 써야 하나요?",
    a: "정해진 시간은 없어요. 첫 미팅에서 목표와 일정에 맞춰 주당 작업량을 멘토와 함께 조율하고, 월 1회 오프라인 세션과 멘토 세션에 참여하면 돼요. 나머지는 당신의 속도대로 진행합니다.",
  },
  {
    q: "지방에 사는데(오프라인 참석이 어려운데) 참여할 수 있나요?",
    a: `네. 정기 세션은 ${COHORT.location}에서 열리지만 온라인으로도 참여할 수 있고, 멘토 미팅은 기본적으로 온라인으로 진행돼요. 수도권에 쏠린 기회를 지방으로 넓히는 게 쩜넷의 미션이기도 합니다.`,
  },
  {
    q: "군입대를 앞두고 있는데 참여할 수 있나요?",
    a: `네, 그래서 3개월 옵션을 만들었어요. 입대 전까지 내 프로젝트를 배포까지 완주하고, 전역 후에도 커뮤니티·행사·디스코드 멤버십은 그대로 유지됩니다. 돌아와서 다음 기수로 이어가도 좋아요.`,
  },
  {
    q: "결제는 언제부터 시작되나요? 중간에 그만두면요?",
    a: `결제는 1기 킥오프(${COHORT.kickoff})부터 시작되고, 납부는 일시납과 분납을 선택할 수 있어요. 중도 중단 시에도 기수 참여 기간(6개월 또는 3개월) 동안 계속 비용을 납부해야 하며, 중도 중단 시 환불은 불가능해요. 쩜넷은 비영리단체로 기관 내 수익이 발생하지 않고 참가비가 팀 지원금으로 배정되기 때문에 — 소수정예로 운영하는 만큼 모든 참가자에게 고른 기회를 제공하기 위해 환불 규정을 엄격하게 두고 있어요.`,
  },
  {
    q: "신청하면 다 받아주나요?",
    a: `1기는 ${COHORT.capacity} 한정이에요. 선착순이 아니라, 첫 미팅에서 관심사를 바탕으로 목표와 일정을 함께 설계해 보고 서로 맞는지 확인한 뒤 확정합니다.`,
  },
  {
    q: "혼자 참여해도 되나요?",
    a: "네. 팀/개인 모두 가능하며, 팀 매칭을 지원합니다. 팀은 2~4인까지 구성할 수 있습니다.",
  },
  {
    q: "꼭 개발을 할 줄 알아야 하나요?",
    a: "관심사·태도·도메인이 더 중요합니다. 요즘 개발은 AI로 다 하잖아요. AI 도움 받아 잘 개발하기 위한 환경을 멘토가 함께 만들어 줄 거예요.",
  },
  {
    q: "요금제는 중간에 바꿀 수 있나요?",
    a: "요금은 3개월/6개월 묶음 기준으로 결제하고, 기수가 진행되는 동안에는 선택한 요금제로 완주해요. 기수 종료 후 이어갈 때 Spark ↔ Growth를 바꿔서 선택할 수 있습니다.",
  },
  {
    q: "기수가 끝난 뒤에도 연장할 수 있나요?",
    a: "네. 기수 종료 후 한 달 단위로 연장할 수 있고, 요금은 요금제 섹션에서 확인할 수 있어요. 3개월 세션이 끝난 뒤 다시 3개월 세션을 신청할 수도 있는데, 이때는 묶음 할인이 다시 적용됩니다.",
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
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(40px,6vw,82px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-.04em",
            }}
          >
            어떻게 해야
            <br />
            취업할 수 있을까<span style={{ color: "#86C3FA" }}>?</span>
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 720,
              fontSize: "clamp(19px,2.4vw,27px)",
              lineHeight: 1.5,
              letterSpacing: "-.02em",
              color: "#F0F2F6",
              fontWeight: 700,
            }}
          >
            여러분의 커리어 빌딩을 위한{" "}
            <span style={{ color: "#86C3FA" }}>쩜넷</span>의 커리어 트랙
            <span style={{ color: "#86C3FA", fontSize: "1.5em", fontWeight: 800, lineHeight: 0 }}>
              .
            </span>
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

          {/* 남은 신청 시간 타이머 */}
          <CountdownTimer
            target={COHORT.deadlineISO}
            title={`${COHORT.label} 신청 마감까지 — ${COHORT.deadlineFull} 마감 · ${COHORT.kickoff} 시작`}
          />

          {/* 1기 핵심 정보 — 한눈에 */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: 14,
              marginTop: 12,
            }}
          >
            {cohortFacts.map((f) => (
              <div
                key={f.k}
                style={{
                  background: f.boxed ? "#11131d" : "transparent",
                  border: f.boxed
                    ? "1px solid rgba(134,195,250,.22)"
                    : "1px solid transparent",
                  borderRadius: 18,
                  padding: "clamp(20px,2.6vw,28px)",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#86C3FA",
                    letterSpacing: ".03em",
                    marginBottom: 10,
                  }}
                >
                  {f.k}
                </div>
                <div
                  style={{
                    fontSize: "clamp(21px,2.6vw,30px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    lineHeight: 1.25,
                  }}
                >
                  {f.v}
                </div>
              </div>
            ))}
          </div>

          {/* v0 참여자 리뷰 — 무한 슬라이드 */}
          <ReviewMarquee reviews={reviews} />
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
                <div
                  style={{
                    marginTop: 16,
                    fontSize: "clamp(18px,2.2vw,23px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: "rgba(240,242,246,.38)",
                    fontWeight: 500,
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
          {/* 그런데 — 뽑히는 사람의 기준은 또렷해졌다 */}
          <p
            style={{
              margin: "44px 0 24px",
              maxWidth: 760,
              fontSize: "clamp(24px,3.4vw,40px)",
              lineHeight: 1.2,
              letterSpacing: "-.03em",
              color: "#F0F2F6",
              fontWeight: 800,
            }}
          >
            기업은 실전 커리어를 원해요.
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
            {winStats.map((s) => (
              <div
                key={s.value}
                style={{
                  background: "#11131d",
                  border: `1px solid ${s.color}44`,
                  borderRadius: 18,
                  padding: 34,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(46px,6.4vw,68px)",
                    fontWeight: 800,
                    color: s.color,
                    letterSpacing: "-.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    marginTop: 16,
                    fontSize: "clamp(18px,2.2vw,23px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: "rgba(240,242,246,.38)",
                    fontWeight: 500,
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background:
                "linear-gradient(160deg,rgba(134,195,250,.12),#11131d)",
              border: "1px solid rgba(134,195,250,.28)",
              borderRadius: 18,
              padding: "clamp(24px,3.4vw,34px)",
              marginBottom: 16,
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: 760,
                fontSize: "clamp(15px,1.8vw,18px)",
                lineHeight: 1.7,
                fontWeight: 400,
                color: "rgba(240,242,246,.68)",
              }}
            >
              단순히 만드는 것만으로는 부족해요.
            </p>
            <p
              style={{
                margin: "10px 0 0",
                maxWidth: 760,
                fontSize: "clamp(16px,2vw,20px)",
                lineHeight: 1.7,
                fontWeight: 800,
              }}
            >
              포트폴리오 채우기용 프로젝트와{" "}
              <span style={{ color: "#86C3FA" }}>실전 프로젝트</span>는 분명히
              큰 차이가 있습니다.
            </p>
          </div>

          <p
            style={{
              margin: "0 0 44px",
              fontSize: 11,
              color: "rgba(240,242,246,.28)",
              fontWeight: 500,
            }}
          >
            출처 · 조선비즈, 중앙일보 (2025–2026) · ResumeGo 필드 실험 (2019) ·
            Microsoft·LinkedIn Work Trend Index (2024)
          </p>
        </div>
      </section>

      {/* 일반 프로젝트 vs 커리어 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#07080c",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 44px",
              fontSize: "clamp(28px,3.8vw,48px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
              lineHeight: 1.16,
            }}
          >
            일반 프로젝트와 커리어,
            <br />
            무엇이 다를까?
          </h2>

          {/* 대비 카드 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
              gap: 18,
            }}
          >
            <div
              style={{
                background: "#10121a",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 18,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: ".06em",
                  color: "rgba(240,242,246,.4)",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "5px 12px",
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                일반 프로젝트
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(17px,2vw,21px)",
                  lineHeight: 1.55,
                  fontWeight: 500,
                  color: "rgba(240,242,246,.62)",
                }}
              >
                졸업 프로젝트, 사이드 프로젝트의 결과물은 평범한 웹/앱
                서비스예요. AI가 코드를 짜 주는 시대
                <br />
                —{" "}
                <span style={{ color: "#F0F2F6", fontWeight: 800 }}>
                  누구나 금방 따라 만들 수 있죠.
                </span>
              </p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg,rgba(134,195,250,.1),rgba(134,195,250,.03))",
                border: "1px solid rgba(134,195,250,.4)",
                borderRadius: 18,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: ".06em",
                  color: "#00041A",
                  background: "#86C3FA",
                  padding: "5px 12px",
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                커리어가 되는 프로젝트
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(17px,2vw,21px)",
                  lineHeight: 1.55,
                  fontWeight: 600,
                  color: "#F0F2F6",
                }}
              >
                남들이 쉽게 따라올 수 없는 것들이 프로젝트 안에 쌓여 있어요
                <br />
                — <span style={{ color: "#86C3FA" }}>바로 아래 세 가지죠. ↓</span>
              </p>
            </div>
          </div>

          {/* 따라오기 힘든 세 가지 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
              gap: 34,
              marginTop: 56,
            }}
          >
            {moats.map((m) => (
              <div key={m.n}>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#86C3FA" }}>
                  {m.n}
                </div>
                <div
                  style={{
                    height: 1,
                    background: "rgba(255,255,255,.12)",
                    margin: "16px 0 18px",
                  }}
                />
                <div style={{ fontSize: 21, fontWeight: 800, marginBottom: 12 }}>
                  {m.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "rgba(240,242,246,.62)",
                    fontWeight: 500,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "clamp(56px,7vw,80px) auto 0",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(26px,3.8vw,44px)",
                fontWeight: 800,
                letterSpacing: "-.03em",
                lineHeight: 1.2,
              }}
            >
              그래서, <span style={{ color: "#86C3FA" }}>쩜넷</span>이
              만들었어요.
            </h3>
          </div>
        </div>
      </section>

      {/* 프로그램 소개 — 멘토 · 동료 · 커리어 세 가지 축 */}
      <section
        style={{
          padding: "clamp(74px,9vw,128px) clamp(20px,5vw,56px)",
          background: "#0b0d15",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2
            style={{
              margin: "0 0 clamp(48px,7vw,80px)",
              fontSize: "clamp(32px,4.4vw,56px)",
              fontWeight: 800,
              letterSpacing: "-.035em",
              lineHeight: 1.14,
            }}
          >
            이렇게 시작해요<span style={{ color: "#86C3FA" }}>.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pillars.map((p, i) => (
              <div
                key={p.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,1fr)",
                  gap: "clamp(14px,2vw,22px)",
                  alignItems: "start",
                  padding: "clamp(34px,5vw,60px) 0",
                  borderTop:
                    i === 0
                      ? "none"
                      : "1px solid rgba(255,255,255,.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "clamp(16px,3vw,32px)",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "clamp(56px,10vw,120px)",
                      fontWeight: 800,
                      lineHeight: 0.9,
                      letterSpacing: "-.04em",
                      color: p.color,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {p.n}
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "clamp(26px,4vw,48px)",
                      fontWeight: 800,
                      letterSpacing: "-.03em",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  style={{
                    margin: 0,
                    maxWidth: 720,
                    fontSize: "clamp(16px,1.9vw,20px)",
                    lineHeight: 1.7,
                    color: "rgba(240,242,246,.7)",
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

      {/* 시작하면 무엇부터 — 전담 멘토 배정 · 멘토진 */}
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
            시작하면
            <br />
            무엇부터 하나요?
          </h2>
          <div
            style={{
              maxWidth: 760,
              margin: "0 0 clamp(40px,5vw,56px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(20px,2.6vw,30px)",
                fontWeight: 800,
                letterSpacing: "-.025em",
                lineHeight: 1.4,
              }}
            >
              전담 멘토가 배정되고, 프로젝트의 기획과 일정을 함께
              만들어갑니다.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(16px,1.9vw,19px)",
                lineHeight: 1.6,
                color: "rgba(240,242,246,.66)",
                fontWeight: 500,
              }}
            >
              취업, 창업 등 다양한 목표와 개인 관심사를 바탕으로, 여러분의
              커리어를 만들어갑니다.
            </p>
          </div>
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
                    fontSize: "clamp(18px,2.2vw,22px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    lineHeight: 1.4,
                  }}
                >
                  멘토들이 여러분의 목표에 맞게 참여합니다.
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* 6개월 후 남는 것 */}
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
            6개월 후,
            <br />
            당신에게 남는 것.
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
            수료증 같은, 아무 의미 없는 종이는 커리어에 아무 필요가 없어요.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(16px,2.4vw,24px)",
            }}
          >
            {outcomes.map((o) => {
              const vertical = o.fade === "vertical";
              return (
              <div
                key={o.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  isolation: "isolate",
                  borderRadius: 22,
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "#11131d",
                  padding: "clamp(30px,4.4vw,52px)",
                  minHeight: vertical
                    ? "clamp(400px,48vw,560px)"
                    : "clamp(210px,26vw,300px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: vertical ? "flex-end" : "center",
                }}
              >
                {/* 배경 사진 — 세로형은 위에서 아래로, 가로형은 오른쪽에서 왼쪽으로 투명해지는 그래디언트에 덮임 */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: vertical
                      ? `url("${o.img}") right top / auto 100% no-repeat`
                      : `url("${o.img}") right center / cover no-repeat`,
                    zIndex: -2,
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: vertical
                      ? "linear-gradient(180deg,rgba(17,19,29,.1) 0%,rgba(17,19,29,.5) 44%,#11131d 80%)"
                      : "linear-gradient(90deg,#11131d 0%,#11131d 42%,rgba(17,19,29,.72) 66%,rgba(17,19,29,.24) 100%)",
                    zIndex: -1,
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: o.color,
                    background: "rgba(7,8,12,.5)",
                    border: `1px solid ${o.color}44`,
                    padding: "5px 11px",
                    borderRadius: 999,
                    marginBottom: 16,
                  }}
                >
                  {o.chip}
                </span>
                <div
                  style={{
                    fontSize: "clamp(22px,2.8vw,32px)",
                    fontWeight: 800,
                    letterSpacing: "-.025em",
                    marginBottom: 12,
                    lineHeight: 1.25,
                  }}
                >
                  {o.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    maxWidth: 540,
                    fontSize: "clamp(14.5px,1.7vw,16.5px)",
                    lineHeight: 1.65,
                    color: "rgba(240,242,246,.78)",
                    fontWeight: 500,
                  }}
                >
                  {o.desc}
                </p>
              </div>
              );
            })}
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
            참여하면,
            <br />이 흐름을 따라가요.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", marginTop: "clamp(40px,5vw,52px)" }}>
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
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "clamp(19px,2.2vw,24px)",
                      fontWeight: 800,
                      letterSpacing: "-.02em",
                    }}
                  >
                    {s.title}
                  </h3>
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
                fontSize: "clamp(17px,2vw,21px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
                lineHeight: 1.4,
              }}
            >
              요금제에 따라 세부 일정이 달라져요.
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
              margin: "0 0 44px",
              fontSize: "clamp(28px,3.6vw,46px)",
              fontWeight: 800,
              letterSpacing: "-.03em",
            }}
          >
            요금제 비교
          </h2>

          <PricingPlans />

          {/* 결제 전 안전판 — 무료 첫 미팅 */}
          <div
            style={{
              marginTop: 28,
              background: "#11131d",
              border: "1px solid rgba(94,244,121,.3)",
              borderRadius: 20,
              padding: "clamp(24px,3.4vw,36px)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                fontSize: 12.5,
                fontWeight: 700,
                color: "#5EF479",
                background: "rgba(94,244,121,.08)",
                border: "1px solid rgba(94,244,121,.4)",
                padding: "5px 11px",
                borderRadius: 999,
              }}
            >
              웨비나
            </span>
            <div
              style={{
                fontSize: "clamp(18px,2.2vw,24px)",
                fontWeight: 800,
                letterSpacing: "-.02em",
              }}
            >
              결제는 웨비나 후에 결정해도 돼요.
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: 720,
                fontSize: 15,
                lineHeight: 1.65,
                color: "rgba(240,242,246,.68)",
                fontWeight: 500,
              }}
            >
              웨비나에서 프로젝트 진행에 대해 질문하고, 본인의 관심사나
              상황이 쩜넷에 적합할지 질문해요.
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
            1기 모집은 {COHORT.deadlineFull}에 마감됩니다. 지금 신청하면{" "}
            {COHORT.kickoff} 킥오프에서 함께 시작해요 —
            <br />
            가장 먼저, 무료 첫 미팅에서 6개월 계획을 함께 설계합니다.
          </p>
          <CtaButtons fontSize={16.5} />
        </div>
      </section>
    </>
  );
}
