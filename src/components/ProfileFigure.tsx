import { motion, useReducedMotion } from 'motion/react'

/**
 * Profile 시각 앵커 — "운영 규모의 시스템" 추상 아키텍처.
 * 페이지 공통 별자리 언어(가는 라인 + 둥근 노드 · slate-cyan/hudson-blue 단일 악센트)로
 * 통일 — Hero 별자리 / AboutAside 노드 모티프와 같은 시각 어휘(사각형 그리드 대신 점).
 * AI 클라이언트 → 백엔드 코어(허브) → 고객사 운영 서버 50여개(7×7 노드). 보유기술 리스트와 중복 아님.
 * 사실 출처: 고객사 운영 서버 50여개(사용자 확인). 캡션은 HTML이라 한글 끊김 0.
 * 노드 펄스 모션은 reduced-motion 시 정적.
 */

const HB = 'var(--color-hudson-blue)'
const SC = 'var(--color-slate-cyan)'
const MIST = 'var(--color-mist)'

/* 고객사 운영 서버 50여개 ≈ 7열 × 7행(49) 노드 클러스터 */
const COLS = 7
const ROWS = 7
const STEP_X = 26
const STEP_Y = 21
const GRID_X = 492
const GRID_Y = 48
const accented = new Set([3, 9, 17, 24, 31, 38, 45]) // 희소 활성 노드

function ServerCluster() {
  const dots = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const i = r * COLS + c
      const on = accented.has(i)
      dots.push(
        <circle
          key={i}
          cx={GRID_X + c * STEP_X}
          cy={GRID_Y + r * STEP_Y}
          r={on ? 4.5 : 3}
          fill={on ? HB : MIST}
        />,
      )
    }
  }
  return <g>{dots}</g>
}

export function ProfileFigure() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <div className="overflow-hidden rounded-[var(--radius-elevatedcards)] border border-hairline bg-paper">
      <svg
        viewBox="0 0 720 200"
        role="img"
        aria-label="AI 클라이언트에서 백엔드 코어를 거쳐 고객사 운영 서버 50여개로 이어지는 시스템 구조 일러스트"
        className="block h-auto w-full"
      >
        {/* 좌(클라이언트) → 코어 허브 수렴선 */}
        <g stroke={HB} strokeWidth={1} opacity={0.26} fill="none">
          <path d="M78 64 L303 100" />
          <path d="M78 100 L303 100" />
          <path d="M78 136 L303 100" />
        </g>
        {/* 코어 허브 → 서버 클러스터 팬아웃 */}
        <g stroke={HB} strokeWidth={1} opacity={0.26} fill="none">
          <path d="M337 100 L486 72" />
          <path d="M337 100 L486 100" />
          <path d="M337 100 L486 128" />
        </g>

        {/* 좌측 AI·클라이언트 노드 */}
        {[64, 100, 136].map((y) => (
          <circle key={y} cx={70} cy={y} r={6} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
        ))}

        {/* 백엔드 코어 허브 */}
        <circle cx={320} cy={100} r={17} fill="var(--color-paper)" stroke={HB} strokeWidth={1.5} />
        <circle cx={320} cy={100} r={5} fill={HB} />

        {/* 고객사 운영 서버 50여개 클러스터 */}
        <ServerCluster />

        {/* 데이터 펄스 (reduced-motion 시 정적 점) */}
        {reduce ? (
          <circle cx={320} cy={100} r={3.5} fill={HB} />
        ) : (
          <>
            <motion.circle
              r={3}
              fill={HB}
              initial={{ cx: 78, cy: 100, opacity: 0 }}
              animate={{ cx: [78, 303], cy: [100, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, ease }}
            />
            <motion.circle
              r={3}
              fill={HB}
              initial={{ cx: 337, cy: 100, opacity: 0 }}
              animate={{ cx: [337, 486], cy: [100, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, delay: 0.8, ease }}
            />
          </>
        )}
      </svg>

      {/* 캡션 — 각 라벨을 위 도형(클라이언트 x70 · 허브 x320 · 클러스터중심 x570 / viewBox 720)
          바로 아래에 정렬. 절대배치 + translateX(-50%). HTML이라 한글 끊김 0. */}
      <div className="relative border-t border-hairline py-3 font-mono text-[10px] leading-tight text-steel sm:text-[11.5px]">
        <span aria-hidden className="invisible">·</span>
        <span className="absolute inset-y-0 left-[11%] flex -translate-x-1/2 items-center whitespace-nowrap">
          AI · 클라이언트
        </span>
        <span className="absolute inset-y-0 left-[44.4%] flex -translate-x-1/2 items-center whitespace-nowrap text-iron">
          백엔드 코어
        </span>
        <span className="absolute inset-y-0 left-[79.2%] flex -translate-x-1/2 items-center whitespace-nowrap">
          고객사 운영 서버&nbsp;<span className="text-ink">50여개</span>
        </span>
      </div>
    </div>
  )
}
