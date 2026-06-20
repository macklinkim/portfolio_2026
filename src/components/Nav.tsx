import { useEffect, useState } from 'react'
import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { nav, profile } from '../data/site'

/**
 * Floating Pill Nav — 라이트 페이퍼 알약(refero). 페이지 단일 색과 일체.
 * hairline 보더 · 모노 라벨 · Hudson Blue 활성. 데스크탑 풀 알약 / 모바일 햄버거.
 */
export function Nav() {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    nav.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const pill = 'bg-paper/85 backdrop-blur-md border border-hairline'

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-4 sm:pt-5">
      {/* Desktop pill */}
      <nav
        aria-label="주요 내비게이션"
        className={`hidden max-w-[min(100%,980px)] items-center gap-1 rounded-[var(--radius-nav)] px-2 py-1.5 md:flex ${pill}`}
        style={{ boxShadow: 'rgba(0,0,0,0.05) 0px 4px 14px 0px' }}
      >
        <a
          href="#top"
          className="ml-1.5 mr-1 flex shrink-0 items-center gap-2 rounded-[var(--radius-nav)] px-2.5 py-1.5 font-mono text-[14px] font-semibold tracking-tight text-ink"
        >
          <span aria-hidden className="size-2 rounded-full bg-hudson-blue" />
          {profile.alias}
        </a>
        <ul className="flex items-center gap-0.5">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={`block whitespace-nowrap rounded-[var(--radius-nav)] px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors duration-200 ${
                  active === item.id ? 'bg-ice text-hudson-blue' : 'text-steel hover:text-ink'
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
          className="group ml-1 flex shrink-0 items-center gap-1 rounded-[var(--radius-nav)] border border-hairline px-3 py-1.5 text-[14px] font-medium text-ink transition-colors duration-200 hover:border-ink"
        >
          GitHub
          <ArrowUpRight size={14} weight="bold" className="text-hudson-blue transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>

      {/* Mobile compact pill */}
      <nav
        aria-label="주요 내비게이션"
        className={`flex w-full max-w-sm items-center justify-between rounded-[var(--radius-nav)] py-1.5 pl-4 pr-1.5 md:hidden ${pill}`}
        style={{ boxShadow: 'rgba(0,0,0,0.05) 0px 4px 14px 0px' }}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-[14px] font-semibold tracking-tight text-ink" onClick={() => setOpen(false)}>
          <span aria-hidden className="size-2 rounded-full bg-hudson-blue" />
          {profile.alias}
        </a>
        <button
          type="button"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-[var(--radius-nav)] text-ink transition-colors hover:bg-ice"
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
            className="mt-2 w-full max-w-sm overflow-hidden rounded-[var(--radius-cards)] border border-hairline bg-paper/95 p-2 backdrop-blur-md md:hidden"
            style={{ boxShadow: 'rgba(0,0,0,0.06) 0px 6px 20px 0px' }}
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`block rounded-[var(--radius-buttons)] px-3 py-2.5 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors ${
                      active === item.id ? 'bg-ice text-hudson-blue' : 'text-steel hover:bg-linen hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-hairline pt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-[var(--radius-buttons)] px-3 py-2.5 text-[14px] font-medium text-ink hover:bg-linen"
                >
                  GitHub
                  <ArrowUpRight size={16} weight="bold" className="text-hudson-blue" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
