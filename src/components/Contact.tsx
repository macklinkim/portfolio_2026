import { ArrowUpRight, GithubLogo, PenNib } from '@phosphor-icons/react'
import { Reveal } from './Reveal'
import { profile } from '../data/site'

/**
 * Contact + Footer — GitHub / Velog 만. 개인정보(전화·주소·원본 이메일) 노출 금지.
 * 풀블리드 다크 밴드(에디토리얼 클로징 모먼트), 다른 레이아웃 패밀리.
 */
export function Contact() {
  const links = [
    { label: 'GitHub', handle: 'github.com/macklinkim', href: profile.github, Icon: GithubLogo },
    { label: 'Velog', handle: 'velog.io/@mackhokim', href: profile.velog, Icon: PenNib },
  ]
  return (
    <footer id="contact" className="scroll-mt-24 bg-graphite-night text-paper">
      <div className="container-page py-20 sm:py-24">
        <Reveal>
          <p className="text-[13px] tracking-[0.04em] text-mist">Contact</p>
          <h2 className="font-display mt-5 max-w-[20ch] text-[clamp(30px,5vw,50px)] text-white">
            함께 만들 이야기가 있다면,{' '}
            <a href={profile.github} target="_blank" rel="noreferrer" className="ink-link" style={{ backgroundPosition: '0 92%' }}>
              연결
            </a>
            해요.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:max-w-xl">
          {links.map(({ label, handle, href, Icon }, i) => (
            <Reveal as="div" key={label} delay={0.05 * i}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[var(--radius-cards)] border border-white/12 bg-white/[0.04] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3.5">
                  <Icon size={22} weight="regular" className="text-slate-cyan" />
                  <span>
                    <span className="block text-[15px] font-medium text-white">{label}</span>
                    <span className="block text-[13px] text-mist">{handle}</span>
                  </span>
                </span>
                <ArrowUpRight size={18} weight="bold" className="text-mist transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-mist">
          <span>
            {profile.name} ({profile.alias}) · {profile.role}
          </span>
          <span>© 2026 Built with React · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
