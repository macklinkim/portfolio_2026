import { useEffect, useState } from 'react'
import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { nav, profile } from '../data/site'

/**
 * Floating Pill Nav — 다크 그래파이트 알약, 중앙에 떠 있는 섬(풀폭 sticky 금지).
 * 데스크탑: 전체 링크 + GitHub 고스트 CTA. 모바일(<md): 컴팩트 알약 + 햄버거 드롭다운.
 * 활성 섹션은 IntersectionObserver로 추적.
 */
export function Nav() {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    nav.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4 sm:pt-5">
      {/* Desktop pill */}
      <nav
        aria-label="주요 내비게이션"
        className="hidden max-w-[min(100%,960px)] items-center gap-1 rounded-[var(--radius-nav)] bg-graphite-night/95 px-2 py-1.5 text-paper backdrop-blur-md md:flex"
        style={{ boxShadow: 'var(--shadow-floatnav)' }}
      >
        <a
          href="#top"
          className="ml-1.5 mr-1 flex shrink-0 items-center gap-2 rounded-[var(--radius-nav)] px-3 py-1.5 text-[15px] font-semibold tracking-tight"
        >
          <span aria-hidden className="size-2 rounded-full bg-slate-cyan" />
          {profile.alias}
        </a>
        <ul className="flex items-center gap-0.5">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`block whitespace-nowrap rounded-[var(--radius-nav)] px-3 py-1.5 text-[15px] tracking-tight transition-colors duration-200 ${
                  active === item.id ? 'bg-paper/12 text-paper' : 'text-mist hover:text-paper'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group ml-1 flex shrink-0 items-center gap-1 rounded-[var(--radius-buttons)] bg-obsidian px-3 py-1.5 text-[15px] font-medium text-paper ring-1 ring-white/10 transition-colors duration-200 hover:bg-black"
        >
          GitHub
          <ArrowUpRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>

      {/* Mobile compact pill */}
      <nav
        aria-label="주요 내비게이션"
        className="flex w-full max-w-sm items-center justify-between rounded-[var(--radius-nav)] bg-graphite-night/95 py-1.5 pl-4 pr-1.5 text-paper backdrop-blur-md md:hidden"
        style={{ boxShadow: 'var(--shadow-floatnav)' }}
      >
        <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span aria-hidden className="size-2 rounded-full bg-slate-cyan" />
          {profile.alias}
        </a>
        <button
          type="button"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-[var(--radius-nav)] text-paper transition-colors hover:bg-white/10"
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 w-full max-w-sm overflow-hidden rounded-[var(--radius-cards)] border border-white/10 bg-graphite-night/97 p-2 text-paper backdrop-blur-md md:hidden"
            style={{ boxShadow: 'var(--shadow-floatnav)' }}
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`block rounded-[var(--radius-buttons)] px-3 py-2.5 text-[15px] transition-colors ${
                      active === item.id ? 'bg-paper/12 text-paper' : 'text-mist hover:bg-white/5 hover:text-paper'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-white/10 pt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-[var(--radius-buttons)] px-3 py-2.5 text-[15px] font-medium text-paper hover:bg-white/5"
                >
                  GitHub
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
