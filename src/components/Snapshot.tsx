import { Section } from './Section'
import { Reveal } from './Reveal'
import { ProfileFigure } from './ProfileFigure'
import {
  positioning,
  competencies,
  skillGroups,
  careerCompact,
  educationList,
  credentials,
} from '../data/site'

/**
 * Profile — 포트폴리오 시작부의 "한눈에" 경험 요약.
 * 경력·학력·보유스킬·핵심역량을 간단·스캔 가능하게. 출처: intro_text.txt(이력서).
 * 디자인은 우리 에디토리얼 토큰 시스템(참조 사이트 디자인 차용 아님).
 */

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-sage pt-7">
      <h3 className="text-[13px] font-medium tracking-[0.04em] text-steel">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function Snapshot() {
  return (
    <Section id="profile" label="Profile">
      <Reveal>
        <h2 className="font-display max-w-[24ch] text-[clamp(26px,4vw,40px)] leading-[1.12] text-ink">
          {positioning}
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-9">
          <ProfileFigure />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-8">
        {/* 핵심 역량 */}
        <Reveal>
          <Block title="핵심 역량">
            <ul className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {competencies.map((c) => (
                <li key={c} className="flex gap-2.5 text-[14.5px] leading-snug text-carbon">
                  <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-slate-cyan" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Block>
        </Reveal>

        {/* 보유 기술 */}
        <Reveal>
          <Block title="보유 기술">
            <dl className="grid gap-3">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-2 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-4">
                  <dt className="pt-1 text-[13px] text-steel">{group.label}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <li
                          key={s}
                          className="rounded-[var(--radius-buttons)] border border-sage bg-linen px-2.5 py-1 text-[12.5px] text-iron"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Block>
        </Reveal>

        {/* 경력 */}
        <Reveal>
          <Block title="경력">
            <ul className="grid gap-y-3">
              {careerCompact.map((row) => (
                <li
                  key={row.company + row.period}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-0.5 border-b border-mist/60 pb-3 last:border-b-0 sm:grid-cols-[150px_minmax(0,1fr)_auto]"
                >
                  <span className="order-2 text-[12.5px] tabular-nums text-steel sm:order-1">{row.period}</span>
                  <span className="order-1 sm:order-2">
                    <span className="font-display text-[17px] text-ink">{row.company}</span>
                    <span className="ml-2 text-[13px] text-steel">{row.team}</span>
                  </span>
                  <span className="order-3 text-[13px] text-iron">{row.role}</span>
                </li>
              ))}
            </ul>
          </Block>
        </Reveal>

        {/* 학력 · 자격 */}
        <Reveal>
          <Block title="학력 · 자격">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <ul className="grid gap-4">
                  {educationList.map((e) => (
                    <li key={e.school}>
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-display text-[17px] text-ink">{e.school}</span>
                        <span className="text-[12.5px] tabular-nums text-steel">{e.period}</span>
                      </div>
                      <p className="mt-0.5 text-[13.5px] text-iron">{e.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-[13px] text-steel">자격 · 어학</p>
                <ul className="flex flex-wrap gap-2">
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
          </Block>
        </Reveal>
      </div>
    </Section>
  )
}
