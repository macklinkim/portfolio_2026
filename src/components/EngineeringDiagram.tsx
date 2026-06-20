import { Database, Stack, MagnifyingGlass, ShieldCheck } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * MCP 하네스 아키텍처 다이어그램 — 스타일 레퍼런스의 "Diagram Card"(Paper·Sage·희소 기하).
 * 카드 그리드 대신 연결된 시스템 흐름으로 보여 색감/언어 일체성 유지(Background 타임라인과 같은 레일 패턴).
 * 출처: MCP_하네스.txt. 노드 스태거 등장(reduced-motion 시 정적).
 */

const branches = [
  {
    Icon: Database,
    title: 'DB 조회 채널 분리',
    detail: '로컬 · 개발 · 운영(read-only) 채널을 분리해 운영 데이터 오조작 차단',
  },
  {
    Icon: Stack,
    title: '운영 35대 SSH 배포',
    detail: '병렬 · 백업 · dry-run · 카나리를 지원하는 배포 도구 자체 제작',
  },
  {
    Icon: MagnifyingGlass,
    title: 'Qdrant + Voyage 시맨틱 검색',
    detail: 'JSP · Java 1,878개 파일 인덱싱 → AI가 맥락을 이해한 채 작업',
  },
]

function Node({
  children,
  delay,
  className = '',
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function EngineeringDiagram() {
  return (
    <div className="rounded-[var(--radius-elevatedcards)] border border-hairline bg-paper p-6 sm:p-8">
      {/* 진입점 */}
      <Node delay={0}>
        <div className="inline-flex items-center gap-2 rounded-[var(--radius-buttons)] bg-graphite-night px-3.5 py-2 text-[14px] font-medium text-paper">
          <span aria-hidden className="size-2 rounded-full bg-slate-cyan" />
          Claude Code 개발 환경
        </div>
      </Node>

      {/* 가드 레이어 커넥터 */}
      <Node delay={0.08} className="ml-4 mt-1">
        <div className="flex items-center gap-2 border-l border-sage py-3 pl-5 text-[13px] text-steel">
          <ShieldCheck size={16} weight="regular" className="text-hudson-blue" />
          <span>
            거버넌스 가드 — <span className="text-iron">deny 정책 · pre-edit 훅</span>으로 위험 명령 차단
          </span>
        </div>
      </Node>

      {/* MCP 허브 */}
      <Node delay={0.16} className="ml-4">
        <div className="inline-flex flex-wrap items-baseline gap-x-2 rounded-[var(--radius-buttons)] border border-ink/15 bg-linen px-3.5 py-2">
          <span className="font-display text-[17px] text-ink">MCP 서버 8종 자체 제작</span>
          <span className="text-[12.5px] text-steel">Node.js 6 + Python(paramiko) 2</span>
        </div>
      </Node>

      {/* 브랜치 레일 */}
      <div className="ml-4 mt-1 border-l border-sage">
        {branches.map((b, i) => (
          <Node key={b.title} delay={0.24 + i * 0.08} className="relative flex gap-3.5 py-3.5 pl-5">
            <span
              aria-hidden
              className="absolute -left-[5px] top-[18px] size-[9px] rounded-full border-2 border-paper bg-slate-cyan"
            />
            <b.Icon size={20} weight="regular" className="mt-0.5 shrink-0 text-iron" />
            <div>
              <p className="font-display text-[16px] text-ink">{b.title}</p>
              <p className="mt-1 text-[13.5px] leading-[1.55] text-steel">{b.detail}</p>
            </div>
          </Node>
        ))}
      </div>
    </div>
  )
}
