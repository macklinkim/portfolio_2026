import { Section } from './Section'
import { Reveal } from './Reveal'
import { career, credentials } from '../data/site'

/**
 * Background — 경력 타임라인 + 학력 + 자격. 이력서와 일치.
 * 타임라인 레이아웃 패밀리(좌측 보더 레일).
 */
export function Background() {
  return (
    <Section id="background" label="Background">
      <Reveal>
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] text-ink">
          시스템 소프트웨어부터 운영 규모의 책임까지.
        </h2>
      </Reveal>

      <ol className="mt-10 border-l border-sage">
        {career.map((job, i) => (
          <Reveal as="li" key={job.company} delay={0.05 * i} className="relative pb-9 pl-7 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 size-[9px] rounded-full border-2 border-cream bg-slate-cyan"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-display text-[21px] text-ink">{job.company}</h3>
              <span className="text-[13px] tabular-nums text-steel">{job.period}</span>
            </div>
            <p className="mt-1 text-[14px] font-medium text-iron">{job.role}</p>
            <p className="mt-2.5 max-w-[64ch] text-[14.5px] leading-[1.65] text-carbon">{job.detail}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-8 border-t border-sage pt-8 sm:grid-cols-2">
          <div>
            <p className="text-[13px] tracking-[0.04em] text-steel">Education</p>
            <p className="font-display mt-3 text-[20px] text-ink">{credentials.education.school}</p>
            <p className="mt-1 text-[14px] text-iron">{credentials.education.detail}</p>
          </div>
          <div>
            <p className="text-[13px] tracking-[0.04em] text-steel">Certifications</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {credentials.certs.map((c) => (
                <li
                  key={c}
                  className="rounded-[var(--radius-buttons)] border border-sage bg-linen px-2.5 py-1 text-[13px] text-iron"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
