import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * Hero 라이트 배경 — refero "graph paper" 위 희소한 라인 별자리(분산/AI 모티프).
 * 투명 배경이라 페이지의 단일 캔버스 색·도트 그리드가 그대로 비침(색 일체성).
 * 스크롤 패럴랙스(깊이별 드리프트) + 노드 미세 트윙클. reduced-motion 시 정적.
 */

const nodes = [
  { x: 1180, y: 150, r: 3.2 }, { x: 1300, y: 230, r: 2.2 }, { x: 1075, y: 250, r: 2.4 },
  { x: 1365, y: 330, r: 2.8 }, { x: 1205, y: 320, r: 2.0 }, { x: 980, y: 185, r: 2.2 },
  { x: 1120, y: 395, r: 1.8 }, { x: 1300, y: 440, r: 2.4 }, { x: 1030, y: 450, r: 2.0 },
  { x: 1235, y: 530, r: 1.8 }, { x: 1395, y: 205, r: 2.0 }, { x: 1150, y: 480, r: 1.8 },
]
const links: [number, number][] = [
  [0, 1], [0, 2], [0, 5], [1, 3], [1, 4], [2, 4], [2, 6], [3, 7], [4, 6],
  [6, 8], [7, 9], [8, 9], [9, 11], [3, 10], [0, 10], [5, 8],
]

export function HeroBackdrop() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const yFar = useTransform(scrollY, [0, 700], [0, -60])
  const yNear = useTransform(scrollY, [0, 700], [0, -120])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity: reduce ? 0.7 : opacity }}
    >
      <motion.svg
        className="absolute right-0 top-0 h-full w-[68%] min-w-[680px]"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: reduce ? 0 : yFar }}
      >
        {/* 코발트 헤일로 */}
        <defs>
          <radialGradient id="halo" cx="82%" cy="16%" r="50%">
            <stop offset="0%" stopColor="var(--color-cobalt)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="var(--color-cobalt)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="760" fill="url(#halo)" />
        <g stroke="var(--color-cobalt)" strokeWidth="1" opacity="0.28">
          {links.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
          ))}
        </g>
      </motion.svg>

      <motion.svg
        className="absolute right-0 top-0 h-full w-[68%] min-w-[680px]"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: reduce ? 0 : yNear }}
      >
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={i % 3 === 0 ? 'var(--color-cobalt)' : '#9aa3ad'}
            animate={reduce ? undefined : { opacity: [0.4, 0.95, 0.4] }}
            transition={reduce ? undefined : { duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: (i % 6) * 0.4 }}
            style={{ opacity: reduce ? 0.75 : undefined }}
          />
        ))}
      </motion.svg>
    </motion.div>
  )
}
