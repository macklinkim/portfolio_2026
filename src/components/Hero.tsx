import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/site'
import { HeroBackdrop } from './HeroBackdrop'
import { BrowserFrame } from './BrowserFrame'

/**
 * Hero — 라이트 에디토리얼. 단일 Hudson Blue 악센트. 좌: 세리프 투톤 헤드라인 + 다크 CTA.
 * 우: 대표 사진을 프로젝트 화면과 같은 BrowserFrame 카드로(텍스트와 한 행으로 그룹). 배경: 확장 별자리.
 */
export function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden">
      <HeroBackdrop />
      <div className="container-page relative grid items-center gap-x-10 gap-y-12 pb-16 pt-32 lg:grid-cols-[minmax(0,1fr)_clamp(300px,30vw,400px)] lg:pt-28">
        <div className="relative z-10 max-w-[46rem]">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow"
          >
            {profile.name} · {profile.alias} — 풀스택 엔지니어
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="font-display mt-6 text-balance break-keep text-[clamp(34px,5vw,54px)] leading-[1.1] text-ink"
          >
            AI 개발 환경을 직접{' '}
            <a href="#engineering" className="ink-link whitespace-nowrap">
              설계하는
            </a>{' '}
            <span className="text-ink-soft">풀스택 엔지니어.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.18 }}
            className="mt-6 max-w-[46ch] break-keep text-[17px] leading-[1.7] text-iron sm:text-[18px]"
          >
            {profile.identity}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-[var(--radius-buttons)] bg-graphite-night px-5 py-2.5 text-[15px] font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              Selected work 보기
              <ArrowRight size={17} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-[var(--radius-buttons)] border border-hairline bg-paper px-5 py-2.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              GitHub
              <ArrowUpRight size={15} weight="bold" className="text-hudson-blue transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="ml-1 font-mono text-[12.5px] text-steel">경력 {profile.experience}</span>
          </motion.div>
        </div>

        {/* 대표 사진 — 프로젝트 화면과 동일한 BrowserFrame 카드. 위치/크기 조절 노브:
            · 좌우: 아래 className의 lg:mr-[0px] 값 ↑ = 왼쪽 / ↓ = 오른쪽 이동
            · 크기(데스크탑): 위 그리드의 clamp(300px,30vw,400px) 중 400px(최대폭) 조절
            · 크기(모바일): 아래 max-w-[340px] 조절 */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.34 }}
          className="relative z-100 mx-auto w-full max-w-[340px] lg:mx-0 lg:mr-[0px] lg:max-w-none lg:justify-self-end"
        >
          <BrowserFrame
            eager
            image={{
              src: '/profile.webp',
              alt: `${profile.name}(${profile.alias}) 프로필 사진`,
              fit: true,
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
