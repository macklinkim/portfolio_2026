import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * Hero 라이트 배경 — refero "graph paper" 위 희소한 라인 별자리(분산/AI 모티프).
 * 투명 배경이라 페이지의 단일 캔버스 색·도트 그리드가 그대로 비침(색 일체성).
 * 스크롤 패럴랙스(깊이별 드리프트) + 노드 미세 트윙클. reduced-motion 시 정적.
 */

/* 확장된 데이터 별자리 — 우측 전반을 덮고 우하단(대표 사진)으로 수렴해 "네트워크의 중심에 사람".
   인덱스 15(1200,560)가 사진 상단의 허브 노드. */
const nodes = [
  // 상단 우측 클러스터
  { x: 980, y: 175, r: 2.2 }, { x: 1180, y: 150, r: 3.2 }, { x: 1370, y: 200, r: 2.0 },
  { x: 1075, y: 250, r: 2.4 }, { x: 1290, y: 250, r: 2.4 }, { x: 1432, y: 320, r: 1.8 },
  // 중단
  { x: 868, y: 300, r: 2.0 }, { x: 1190, y: 330, r: 2.2 }, { x: 1362, y: 360, r: 2.6 },
  { x: 1012, y: 388, r: 2.0 }, { x: 928, y: 470, r: 1.8 }, { x: 1132, y: 452, r: 2.2 },
  { x: 1284, y: 470, r: 2.4 }, { x: 1424, y: 472, r: 1.8 },
  // 하단 — 사진 쪽으로 수렴
  { x: 1020, y: 560, r: 2.0 }, { x: 1200, y: 560, r: 3.2 }, { x: 1352, y: 582, r: 2.0 },
  { x: 880, y: 602, r: 1.8 }, { x: 1082, y: 672, r: 2.0 }, { x: 1272, y: 682, r: 2.2 },
  { x: 1402, y: 660, r: 1.8 }, { x: 958, y: 692, r: 1.6 },
]
const links: [number, number][] = [
  // 상단
  [1, 0], [1, 3], [1, 4], [1, 2], [2, 4], [2, 5], [0, 6], [0, 3], [3, 7], [4, 7], [4, 8], [8, 5],
  // 중단
  [6, 9], [7, 9], [9, 10], [7, 11], [11, 12], [8, 12], [12, 13], [11, 9], [10, 14],
  // 하단 수렴(허브 15)
  [14, 15], [11, 15], [12, 15], [15, 16], [16, 13], [14, 17], [6, 17], [15, 18], [18, 17],
  [15, 19], [16, 19], [19, 20], [18, 21], [21, 17], [19, 12],
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
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      style={{ opacity: reduce ? 0.7 : opacity }}
      // 앰비언트 드리프트 — 별자리 전체가 천천히 떠다님(라인·노드 함께 → 연결 유지)
      animate={reduce ? undefined : { x: [0, 24, -18, 0], y: [0, -16, 12, 0] }}
      transition={reduce ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.svg
        className="absolute right-0 top-0 h-full w-[68%] min-w-[680px]"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: reduce ? 0 : yFar }}
      >
        {/* Hudson Blue 헤일로 — 상단 우측 + 하단 우측(사진 앵커) */}
        <defs>
          <radialGradient id="halo" cx="82%" cy="16%" r="50%">
            <stop offset="0%" stopColor="var(--color-hudson-blue)" stopOpacity="0.10" />
            <stop offset="100%" stopColor="var(--color-hudson-blue)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="halo2" cx="84%" cy="88%" r="44%">
            <stop offset="0%" stopColor="var(--color-hudson-blue)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--color-hudson-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="760" fill="url(#halo)" />
        <rect width="1440" height="760" fill="url(#halo2)" />
        <g stroke="var(--color-hudson-blue)" strokeWidth="1" opacity="0.34">
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
            fill={i % 3 === 0 ? 'var(--color-hudson-blue)' : '#9aa3ad'}
            animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={reduce ? undefined : { duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: (i % 6) * 0.4 }}
            style={{ opacity: reduce ? 0.75 : undefined }}
          />
        ))}
      </motion.svg>
    </motion.div>
  )
}
