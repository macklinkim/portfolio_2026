import { ArrowRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/site'

/**
 * Full-Bleed Illustrated Hero — 풀블리드 회화풍 배경 위에 좌하단 프로스티드 글래스 카드.
 * 배경 일러스트(hero.jpg)는 "엣지/분산/AI" 분위기의 회화풍. 없을 경우 딥 그래파이트 캔버스로 폴백.
 */
export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden bg-graphite-night">
      {/* 회화풍 일러스트 배경 (다음 반복에서 생성 자산으로 교체) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundColor: '#1b1b24',
          backgroundImage:
            'radial-gradient(120% 90% at 78% 12%, rgba(65,161,207,0.22), transparent 55%), radial-gradient(90% 80% at 12% 100%, rgba(0,129,192,0.16), transparent 60%)',
        }}
      />
      {/* 하단 가독성 스크림 */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="container-page relative flex min-h-[100dvh] flex-col justify-end pb-14 pt-28 sm:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-[44rem] rounded-[var(--radius-herocards)] border border-white/15 bg-white/10 p-7 backdrop-blur-xl sm:p-9"
          style={{ boxShadow: 'var(--shadow-frosted)' }}
        >
          <p className="text-[13px] uppercase tracking-[0.18em] text-white/70">
            {profile.name} · {profile.alias} — {profile.role}
          </p>
          <h1 className="font-display mt-5 text-[clamp(34px,6vw,54px)] text-white">
            AI 개발 환경을 직접{' '}
            <a href="#engineering" className="ink-link" style={{ backgroundPosition: '0 92%' }}>
              설계하는
            </a>{' '}
            풀스택 엔지니어.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-white/85 sm:text-[18px]">
            {profile.identity}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-white"
            >
              <span className="ink-link" style={{ backgroundPosition: '0 100%' }}>
                Selected work 보기
              </span>
              <ArrowRight size={17} weight="bold" className="text-slate-cyan transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="text-[14px] text-white/55">경력 {profile.experience}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
