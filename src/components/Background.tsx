import { CreditCard, Factory, Cpu } from '@phosphor-icons/react'
import { Section } from './Section'
import { Reveal } from './Reveal'
import { career } from '../data/site'

/**
 * Background — 주요 경력의 성과 중심 타임라인(상세). 이력서와 일치.
 * 학력·자격·전체 경력 목록은 Profile(Snapshot) 섹션이 담당.
 * 레일 노드에 도메인 아이콘(결제·팩토리·시스템) + 성과 키워드 칩 — 페이지 공통
 * phosphor·chip 시각 언어와 일치. 칩 문구는 detail 원문 사실에서 추출.
 */

const roleIcons = [CreditCard, Factory, Cpu] // career 순서와 1:1 (LMS·결제 / MES·펌웨어 / 시스템SW)

export function Background() {
  return (
    <Section id="background" label="Background">
      <Reveal>
        <h2 className="font-display text-[clamp(26px,4vw,40px)] leading-[1.12] text-ink">
          운영 규모의 책임
        </h2>
      </Reveal>

      <ol className="mt-10 border-l border-sage">
        {career.map((job, i) => {
          const Icon = roleIcons[i] ?? Cpu
          return (
            <Reveal as="li" key={job.company} delay={0.05 * i} className="relative pb-10 pl-9 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[15px] top-0 grid size-[30px] place-items-center rounded-full border border-sage bg-cream"
              >
                <Icon size={15} weight="regular" className="text-hudson-blue" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-display text-[21px] text-ink">{job.company}</h3>
                <span className="text-[13px] tabular-nums text-steel">{job.period}</span>
              </div>
              <p className="mt-1 text-[14px] font-medium text-iron">{job.role}</p>
              <p className="mt-2.5 max-w-[64ch] break-keep text-[14.5px] leading-[1.65] text-carbon">{job.detail}</p>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <li
                    key={t}
                    className="break-keep rounded-[var(--radius-buttons)] border border-sage bg-linen px-2.5 py-1 text-[12px] text-iron"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
