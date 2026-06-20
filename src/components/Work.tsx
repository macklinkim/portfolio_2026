import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { projects, type Project } from '../data/site'

function ProjectEntry({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="border-t border-sage pt-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-[20px] text-slate-cyan">{project.index}</span>
        <h3 className="font-display text-[clamp(24px,3.4vw,34px)] text-ink">{project.title}</h3>
      </div>
      <p className="mt-3 max-w-[60ch] text-[17px] font-medium leading-snug text-carbon">
        {project.tagline}
      </p>
      <p className="mt-4 max-w-[64ch] text-[15.5px] leading-[1.65] text-iron">{project.body}</p>

      {/* 핵심 지표 — 카드 그리드 아님, 가벼운 인라인 메트릭 */}
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
        <p className="mt-5 max-w-[60ch] border-l-2 border-mist pl-3 text-[13px] leading-relaxed text-steel">
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
    </Reveal>
  )
}

export function Work() {
  return (
    <Section id="work" label="Selected Work">
      <Reveal>
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] text-ink">
          직접 설계하고 운영까지 끌고 간 세 가지.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-10">
        {projects.map((p) => (
          <ProjectEntry key={p.index} project={p} />
        ))}
      </div>
    </Section>
  )
}
