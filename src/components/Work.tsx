import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { BrowserFrame } from './BrowserFrame'
import { projects, type Project } from '../data/site'

function ProjectEntry({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal as="article" className="border-t border-sage pt-12 first:border-t-0 first:pt-0">
      <div className="grid items-start gap-x-12 gap-y-8 lg:grid-cols-2">
        {/* 텍스트 컬럼 */}
        <div className={flip ? 'lg:order-2' : 'lg:order-1'}>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[20px] text-slate-cyan">{project.index}</span>
            <h3 className="font-display text-[clamp(24px,3.2vw,34px)] text-ink">{project.title}</h3>
          </div>
          <p className="mt-3 max-w-[44ch] text-[17px] font-medium leading-snug text-carbon">
            {project.tagline}
          </p>
          <p className="mt-4 max-w-[48ch] text-[15.5px] leading-[1.65] text-iron">{project.body}</p>

          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {project.highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-display text-[26px] leading-none text-ink">{h.value}</dt>
                <dd className="mt-1.5 text-[13px] text-steel">{h.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-[var(--radius-buttons)] border border-sage bg-linen px-2.5 py-1 text-[12.5px] text-iron"
              >
                {s}
              </li>
            ))}
          </ul>

          {project.disclaimer && (
            <p className="mt-5 max-w-[52ch] border-l-2 border-mist pl-3 text-[13px] leading-relaxed text-steel">
              {project.disclaimer}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={project.live.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[15px] font-medium text-ink"
            >
              <span className="ink-link">Live</span>
              <span className="min-w-0 break-all text-[13px] text-steel">{project.live.label}</span>
              <ArrowUpRight size={15} weight="bold" className="shrink-0 text-slate-cyan transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {project.repos.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full items-center gap-1.5 text-[13.5px] text-steel transition-colors hover:text-ink"
              >
                <GithubLogo size={16} weight="regular" className="shrink-0" />
                <span className="min-w-0 break-all">{r.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 이미지 컬럼 — 통일된 브라우저 프레임 (2장이면 살짝 오프셋해 스택) */}
        <div className={`grid gap-5 lg:sticky lg:top-28 ${flip ? 'lg:order-1' : 'lg:order-2'}`}>
          <BrowserFrame image={project.images[0]} />
          {project.images[1] && (
            <div className="ml-auto w-[90%] sm:w-[86%]">
              <BrowserFrame image={project.images[1]} />
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export function Work() {
  return (
    <Section id="work" label="Selected Work">
      <Reveal>
        <h2 className="font-display text-[clamp(26px,4vw,40px)] leading-[1.12] text-ink">
          직접 만들고 운영까지 끌고 간 세 가지.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-14">
        {projects.map((p, i) => (
          <ProjectEntry key={p.index} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  )
}
