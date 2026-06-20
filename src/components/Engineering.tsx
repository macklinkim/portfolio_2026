import { Section } from './Section'
import { Reveal } from './Reveal'
import { EngineeringDiagram } from './EngineeringDiagram'
import { engineering } from '../data/site'

/**
 * Engineering at work — MCP 하네스. 배포 제품이 아니라 실무 인프라.
 * 리드 텍스트 + 아키텍처 흐름 다이어그램(카드 그리드 대신 연결된 시스템).
 */
export function Engineering() {
  return (
    <Section id="engineering" label="Engineering at work">
      <Reveal>
        <h2 className="font-display text-[clamp(26px,4vw,40px)] leading-[1.12] text-ink">
          운영 환경에 맞춘{' '}
          <span className="ink-link" style={{ backgroundPosition: '0 92%' }}>
            AI 하네스
          </span>
          를 직접 구축했습니다.
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-5 max-w-[60ch] text-[16px] leading-[1.7] text-carbon">
          {engineering.lead}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10">
          <EngineeringDiagram />
        </div>
      </Reveal>
    </Section>
  )
}
