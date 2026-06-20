import { motion, useReducedMotion } from 'motion/react'

/**
 * Profile 시각 앵커 — "운영 규모의 시스템" 추상 아키텍처 일러스트.
 * HeroBackdrop / EngineeringDiagram과 같은 art-direction(라이트 캔버스·헤어라인·
 * slate-cyan/hudson-blue 단일 악센트·희소 기하). 보유기술 리스트와 중복 아님:
 * 여기선 *시스템*(AI 클라이언트 → 백엔드 코어 → 운영 서버 35대)을 그린다.
 * 사실 출처: '운영 35대' (MCP_하네스.txt / 이력서). 캡션은 HTML이라 한글 끊김 0.
 * 노드 펄스 모션은 reduced-motion 시 정적.
 */

const HB = 'var(--color-hudson-blue)'
const SC = 'var(--color-slate-cyan)'
const SAGE = 'var(--color-sage)'

/* 운영 서버 35대 = 7열 × 5행 그리드 */
const COLS = 7
const ROWS = 5
const CELL_W = 22
const CELL_H = 16
const GAP = 6
const GRID_X = 480
const GRID_Y = 48
const accented = new Set([4, 12, 23, 30]) // 희소 활성 노드

function ServerGrid() {
  const cells = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const i = r * COLS + c
      const on = accented.has(i)
      cells.push(
        <rect
          key={i}
          x={GRID_X + c * (CELL_W + GAP)}
          y={GRID_Y + r * (CELL_H + GAP)}
          width={CELL_W}
          height={CELL_H}
          rx={2}
          fill={on ? 'var(--color-ice)' : 'var(--color-paper)'}
          stroke={on ? HB : SAGE}
          strokeWidth={on ? 1.25 : 1}
        />,
      )
    }
  }
  return <g>{cells}</g>
}

export function ProfileFigure() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <div className="overflow-hidden rounded-[var(--radius-elevatedcards)] border border-hairline bg-paper">
      <svg
        viewBox="0 0 720 200"
        role="img"
        aria-label="AI 클라이언트에서 백엔드 코어를 거쳐 운영 서버 35대로 이어지는 시스템 구조 일러스트"
        className="block h-auto w-full"
      >
        {/* 좌→코어 수렴선 */}
        <g stroke={HB} strokeWidth={1} opacity={0.28} fill="none">
          <path d="M82 62 L250 100" />
          <path d="M82 100 L250 100" />
          <path d="M82 138 L250 100" />
        </g>
        {/* 코어→서버 팬아웃 */}
        <g stroke={HB} strokeWidth={1} opacity={0.28} fill="none">
          <path d="M400 100 L470 72" />
          <path d="M400 100 L470 100" />
          <path d="M400 100 L470 128" />
        </g>

        {/* 좌측 AI·클라이언트 노드 */}
        <g>
          {[62, 100, 138].map((y) => (
            <circle key={y} cx={70} cy={y} r={7} fill="var(--color-paper)" stroke={SC} strokeWidth={1.5} />
          ))}
        </g>

        {/* 백엔드 코어 */}
        <g>
          <rect x={250} y={64} width={150} height={72} rx={8} fill="var(--color-linen)" stroke="var(--color-ink)" strokeOpacity={0.14} />
          <circle cx={266} cy={80} r={3} fill={SC} />
          <line x1={266} y1={100} x2={384} y2={100} stroke={SAGE} strokeWidth={1} />
          <line x1={266} y1={116} x2={358} y2={116} stroke={SAGE} strokeWidth={1} />
        </g>

        {/* 운영 서버 35대 그리드 */}
        <ServerGrid />

        {/* 데이터 펄스 (reduced-motion 시 정적 점) */}
        {reduce ? (
          <circle cx={325} cy={100} r={3.5} fill={HB} />
        ) : (
          <>
            <motion.circle
              r={3.5}
              fill={HB}
              initial={{ cx: 82, cy: 100, opacity: 0 }}
              animate={{ cx: [82, 250], cy: [100, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, ease }}
            />
            <motion.circle
              r={3.5}
              fill={HB}
              initial={{ cx: 400, cy: 100, opacity: 0 }}
              animate={{ cx: [400, 540], cy: [100, 100], opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.6, delay: 0.8, ease }}
            />
          </>
        )}
      </svg>

      {/* 캡션 — HTML(한글 안전, 끊김 0) */}
      <div className="grid grid-cols-3 gap-2 break-keep border-t border-hairline px-4 py-3 text-center font-mono text-[10px] leading-tight text-steel sm:px-7 sm:text-[11.5px]">
        <span>AI · 클라이언트</span>
        <span className="text-iron">백엔드 코어</span>
        <span>
          운영 서버 <span className="text-ink">35대</span>
        </span>
      </div>
    </div>
  )
}
