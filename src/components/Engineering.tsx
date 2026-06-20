import { Section } from './Section'
import { Reveal } from './Reveal'
import { engineering } from '../data/site'

/**
 * Engineering at work — MCP 하네스. 배포 제품이 아니라 실무 인프라.
 * Work(스택 엔트리)와 다른 레이아웃 패밀리: 리드 + 다이어그램 카드 2x2.
 */
export function Engineering() {
  return (
    <Section id="engineering" label="Engineering at work">
      <Reveal>
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] text-ink">
          AI를 붙이기 전에,{' '}
          <span className="ink-link" style={{ backgroundPosition: '0 92%' }}>
            안전장치
          </span>
          부터 세웠다.
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-6 max-w-[64ch] text-[16px] leading-[1.65] text-carbon sm:text-[17px]">
          {engineering.lead}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {engineering.pillars.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delay={0.05 * i}
            as="div"
            className="rounded-[var(--radius-elevatedcards)] border border-sage bg-paper p-6"
          >
            <div style={{ boxShadow: 'none' }}>
              <h3 className="font-display text-[20px] text-ink">{pillar.title}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-iron">{pillar.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
