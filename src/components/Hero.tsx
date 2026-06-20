import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/site'
import { HeroBackdrop } from './HeroBackdrop'

/**
 * Hero — 라이트 에디토리얼(refero "graph paper"). 페이지 전체와 동일한 한 가지 캔버스 색.
 * 모노 eyebrow + 세리프 투톤 헤드라인 + 코발트 인라인 링크 + 라임 프라이머리 CTA(1개).
 * 다크 밴드/끊김 없음 — 본문과 매끄럽게 연결.
 */
export function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden">
      <HeroBackdrop />
      <div className="container-page relative pb-16 pt-32 lg:pt-28">
        <div className="max-w-[46rem]">
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
            className="font-display mt-6 text-balance text-[clamp(34px,5.2vw,56px)] leading-[1.1] text-ink"
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
            className="mt-6 max-w-[46ch] text-[17px] leading-[1.7] text-iron sm:text-[18px]"
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
              <ArrowUpRight size={15} weight="bold" className="text-cobalt transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="ml-1 font-mono text-[12.5px] text-steel">경력 {profile.experience}</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
