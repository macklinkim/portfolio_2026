import { Section } from './Section'
import { Reveal } from './Reveal'
import { career } from '../data/site'

/**
 * Background — 주요 경력의 성과 중심 타임라인(상세). 이력서와 일치.
 * 학력·자격·전체 경력 목록은 Profile(Snapshot) 섹션이 담당.
 */
export function Background() {
  return (
    <Section id="background" label="Background">
      <Reveal>
        <h2 className="font-display text-[clamp(26px,4vw,40px)] leading-[1.12] text-ink">
          운영 규모의 책임을 맡아왔습니다.
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
    </Section>
  )
}
