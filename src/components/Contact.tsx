import { ArrowUpRight, GithubLogo, PenNib } from '@phosphor-icons/react'
import { Reveal } from './Reveal'
import { profile } from '../data/site'

/**
 * Contact + Footer — 라이트 캔버스(페이지 전체와 동일한 색). GitHub / Velog 만.
 * 개인정보(전화·주소·원본 이메일) 노출 금지. 하단 hairline 분리(그림자 없음).
 */
export function Contact() {
  const links = [
    { label: 'GitHub', handle: 'github.com/macklinkim', href: profile.github, Icon: GithubLogo },
    { label: 'Velog', handle: 'velog.io/@mackhokim', href: profile.velog, Icon: PenNib },
  ]
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-hairline">
      <div className="container-page pt-14 pb-24 sm:pt-16 sm:pb-28">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="font-display mt-5 max-w-[18ch] break-keep text-[clamp(30px,5vw,52px)] leading-[1.08] text-ink">
            함께 만들 이야기,{' '}
            <a href={profile.github} target="_blank" rel="noreferrer" className="ink-link whitespace-nowrap">
              연결
            </a>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:max-w-xl">
          {links.map(({ label, handle, href, Icon }, i) => (
            <Reveal as="div" key={label} delay={0.05 * i}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[var(--radius-cards)] border border-hairline bg-paper px-5 py-4 transition-colors duration-200 hover:border-ink"
              >
                <span className="flex items-center gap-3.5">
                  <Icon size={22} weight="regular" className="text-hudson-blue" />
                  <span>
                    <span className="block text-[15px] font-medium text-ink">{label}</span>
                    <span className="block font-mono text-[12.5px] text-steel">{handle}</span>
                  </span>
                </span>
                <ArrowUpRight size={18} weight="bold" className="text-steel transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 font-mono text-[12px] text-steel">
          <span>
            {profile.name} ({profile.alias}) · 풀스택 소프트웨어 엔지니어
          </span>
          <span>© 2026 · Built with React · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
