import { motion, useReducedMotion } from 'motion/react'

/**
 * Hero 배경 — 회화풍 트와일라잇 캔버스(풀블리드).
 * 컨셉 스파인: 분산 시스템 / AI = 데이터가 흐르는 야경 도시 + 신경망 별자리.
 * 단일 블루 악센트(Hudson/Slate). 좌하단은 가장 어둡게 유지(프로스티드 카드 가독성).
 * 추상 그라데이션 슬롭이 아니라 의도된 저채도 톤 그레이드 + 별자리 + 스카이라인 실루엣.
 */

// 별자리 노드 (1440x900 좌표계, 우상단 군집) — 결정적 배치
const nodes = [
  { x: 1180, y: 150, r: 2.6 }, { x: 1290, y: 230, r: 1.8 }, { x: 1080, y: 250, r: 2.0 },
  { x: 1360, y: 330, r: 2.4 }, { x: 1200, y: 310, r: 1.6 }, { x: 980, y: 180, r: 1.8 },
  { x: 1110, y: 380, r: 1.5 }, { x: 1300, y: 430, r: 2.0 }, { x: 900, y: 300, r: 1.4 },
  { x: 1020, y: 440, r: 1.7 }, { x: 1230, y: 520, r: 1.5 }, { x: 1390, y: 200, r: 1.6 },
  { x: 820, y: 210, r: 1.3 }, { x: 1140, y: 470, r: 1.4 },
]
// 인접 노드 연결(희소한 네트워크 토폴로지)
const links: [number, number][] = [
  [0, 1], [0, 2], [0, 5], [1, 3], [1, 4], [2, 4], [2, 6], [3, 7], [4, 6],
  [5, 12], [6, 9], [7, 10], [8, 9], [9, 13], [10, 13], [3, 11], [0, 11], [8, 5],
]
// 트와일라잇 스카이라인 실루엣 (하단, 다양한 높이)
const buildings = [
  { x: 0, w: 70, h: 90 }, { x: 70, w: 48, h: 140 }, { x: 118, w: 60, h: 70 },
  { x: 178, w: 40, h: 180 }, { x: 218, w: 80, h: 110 }, { x: 298, w: 52, h: 220 },
  { x: 350, w: 64, h: 130 }, { x: 414, w: 44, h: 90 }, { x: 458, w: 72, h: 160 },
  { x: 530, w: 50, h: 100 }, { x: 580, w: 90, h: 200 }, { x: 670, w: 46, h: 120 },
  { x: 716, w: 70, h: 150 }, { x: 786, w: 54, h: 90 }, { x: 840, w: 60, h: 240 },
  { x: 900, w: 48, h: 130 }, { x: 948, w: 82, h: 170 }, { x: 1030, w: 44, h: 100 },
  { x: 1074, w: 66, h: 210 }, { x: 1140, w: 52, h: 120 }, { x: 1192, w: 76, h: 160 },
  { x: 1268, w: 48, h: 230 }, { x: 1316, w: 64, h: 110 }, { x: 1380, w: 60, h: 180 },
]

export function HeroBackdrop() {
  const reduce = useReducedMotion()
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <svg
        className="size-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <defs>
          {/* 저채도 트와일라잇 톤 그레이드 (palette-matched) */}
          <linearGradient id="sky" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#20222e" />
            <stop offset="48%" stopColor="#191a24" />
            <stop offset="100%" stopColor="#121219" />
          </linearGradient>
          {/* 우상단 데이터 광원 (Hudson Blue, 절제) */}
          <radialGradient id="glow" cx="80%" cy="14%" r="55%">
            <stop offset="0%" stopColor="#0081c0" stopOpacity="0.28" />
            <stop offset="45%" stopColor="#0081c0" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0081c0" stopOpacity="0" />
          </radialGradient>
          {/* 좌하단 심도 비네트(카드 가독성) */}
          <radialGradient id="vignette" cx="14%" cy="100%" r="80%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#000000" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          {/* 필름 그레인 */}
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#sky)" />
        <rect width="1440" height="900" fill="url(#glow)" />

        {/* 별자리 연결선 */}
        <g stroke="#41a1cf" strokeWidth="1" opacity="0.22">
          {links.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
          ))}
        </g>
        {/* 별자리 노드 */}
        <g>
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={i % 4 === 0 ? '#0081c0' : '#9fb6c4'}
              initial={false}
              animate={reduce ? undefined : { opacity: [0.45, 0.95, 0.45] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 4 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: (i % 7) * 0.4 }
              }
              style={{ opacity: reduce ? 0.8 : undefined }}
            />
          ))}
        </g>

        {/* 트와일라잇 스카이라인 실루엣 */}
        <g fill="#0d0d13">
          {buildings.map((b, i) => (
            <rect key={i} x={b.x} y={900 - b.h} width={b.w - 2} height={b.h} />
          ))}
        </g>
        {/* 스카이라인 위 옅은 도시 헤이즈 */}
        <rect x="0" y="640" width="1440" height="260" fill="#0081c0" opacity="0.05" />

        <rect width="1440" height="900" fill="url(#vignette)" />
        {/* 그레인 오버레이 (정적, GPU 저비용) */}
        <rect width="1440" height="900" filter="url(#grain)" opacity="0.05" />
      </svg>
    </div>
  )
}
