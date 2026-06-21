import { ShieldCheck, Scales, Pulse } from '@phosphor-icons/react'

/**
 * About "일하는 원칙" — 본문 아래 같은 너비의 가로 3열 블록(예전 우측 aside를 하단으로 이동).
 * 출처(원문 사실): 자기소개서_개선본_20260618.txt
 *   1) "운영 데이터 임의 수정·위험 명령을 가드 단에서 차단하는 안전장치를 가장 먼저 설계"
 *   2) "기존 프로젝트·기술은 유지, 새 기술은 맞는 자리에 적응 — 새 술은 새 부대"
 *   3) "매일 달리기 등 규칙적 운동 … 꾸준한 자기 관리야말로 개발자의 핵심 역량"
 * 상단 노드 모티프는 Hero 별자리 art-direction과 동일 언어(단일 Hudson Blue 악센트).
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

export function AboutPrinciples() {
  return (
    <div className="rounded-[var(--radius-elevatedcards)] border border-hairline bg-paper p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-steel">일하는 원칙</p>
        {/* 별자리 모티프 — Hero와 동일 시각 언어 */}
        <svg viewBox="0 0 140 28" aria-hidden className="h-[22px] w-[120px] shrink-0">
          <g stroke={HB} strokeWidth={1} opacity={0.3} fill="none">
            <path d="M10 20 L52 8 L94 20 L130 9" />
          </g>
          <circle cx={10} cy={20} r={3.5} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
          <circle cx={52} cy={8} r={4} fill={HB} />
          <circle cx={94} cy={20} r={3.5} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
          <circle cx={130} cy={9} r={3} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
        </svg>
      </div>

      <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-3">
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
  )
}
