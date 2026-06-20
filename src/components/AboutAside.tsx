import { ShieldCheck, Scales, Pulse } from '@phosphor-icons/react'

/**
 * About 사이드 — "일하는 원칙" 카드. About 본문(자기소개서 서사)의 가치관을 스캔 가능하게 요약.
 * 출처(원문 사실): 자기소개서_개선본_20260618.txt
 *   1) "운영 데이터 임의 수정·위험 명령을 가드 단에서 차단하는 안전장치를 가장 먼저 설계"
 *   2) "기존 프로젝트·기술은 유지, 새 기술은 맞는 자리에 적응 — 새 술은 새 부대"
 *   3) "매일 달리기 등 규칙적 운동 … 꾸준한 자기 관리야말로 개발자의 핵심 역량"
 * 상단 노드 모티프는 Hero 별자리 art-direction과 동일 언어(라이트·slate-cyan/hudson-blue 단일 악센트).
 */

const HB = 'var(--color-hudson-blue)'
const SC = 'var(--color-slate-cyan)'

const principles = [
  {
    Icon: ShieldCheck,
    title: '안전장치 우선',
    body: '위험 명령·운영 데이터 오조작을 가드 단에서 먼저 막고, 그 위에서 생산성을 올린다.',
  },
  {
    Icon: Scales,
    title: '균형감',
    body: '검증된 기술은 지키고, 새 기술은 맞는 자리에만 들인다 — 새 술은 새 부대에.',
  },
  {
    Icon: Pulse,
    title: '꾸준함',
    body: '매일 달리며 체력을 관리하고, 그 위에서 안정적인 퍼포먼스를 낸다.',
  },
]

export function AboutAside() {
  return (
    <aside className="self-start lg:sticky lg:top-28">
      <div className="rounded-[var(--radius-elevatedcards)] border border-hairline bg-paper p-6 sm:p-7">
        {/* 별자리 모티프 — Hero와 동일 시각 언어 */}
        <svg viewBox="0 0 200 52" aria-hidden className="mb-5 h-auto w-full max-w-[188px]">
          <g stroke={HB} strokeWidth={1} opacity={0.3} fill="none">
            <path d="M16 36 L78 16" />
            <path d="M78 16 L140 40" />
            <path d="M140 40 L186 18" />
            <path d="M78 16 L186 18" />
          </g>
          <circle cx={16} cy={36} r={4.5} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
          <circle cx={78} cy={16} r={5} fill={HB} />
          <circle cx={140} cy={40} r={4.5} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
          <circle cx={186} cy={18} r={4} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
        </svg>

        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-steel">일하는 원칙</p>

        <ul className="mt-5 grid gap-5">
          {principles.map((p) => (
            <li key={p.title} className="flex gap-3.5">
              <p.Icon size={20} weight="regular" className="mt-0.5 shrink-0 text-hudson-blue" aria-hidden />
              <div>
                <p className="font-display text-[16px] text-ink">{p.title}</p>
                <p className="mt-1 break-keep text-[13.5px] leading-[1.55] text-steel">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
