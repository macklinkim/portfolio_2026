import { Section } from './Section'
import { Reveal } from './Reveal'
import { AboutAside } from './AboutAside'

/**
 * About — 자기소개서 서사 기반. 과장/허위 없음.
 * 시골 출신 → 숭실대 → 티맥스 → 시스템SW·웹·DB → 풀스택+AI, 안전장치 우선, 균형감.
 */
export function About() {
  return (
    <Section id="about" label="About">
      <Reveal>
        <h2 className="font-display whitespace-nowrap text-[clamp(26px,4vw,40px)] leading-[1.12] text-ink">
          <a href="#engineering" className="ink-link">
            직접 만드는
          </a>{' '}
          개발자
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,58ch)_minmax(0,1fr)] lg:gap-16">
        <div className="grid content-start gap-5 break-keep text-[16px] leading-[1.7] text-carbon">
          <Reveal delay={0.05}>
            <p>
              숭실대 컴퓨터학부를 졸업하고 티맥스데이터에서 시작해, 시스템 소프트웨어·웹·DB를 두루
              거치며 백엔드 역량을 쌓았습니다. Spring 기반 서버 개발과 쿼리 설계, API 연동을 주로
              다뤘습니다.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              AI는 단순히 쓰는 데서 멈추고 싶지 않았습니다. DB·SSH·운영 서버를 직접 연결한 Claude Code
              개발 환경을 자체 구축하면서, 위험한 명령을 가드 단에서 막는 안전장치부터 설계해 생산성과
              안정성을 함께 잡았습니다.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              검증된 기술은 지키면서 새 기술은 맞는 자리에 들이는 균형을 중요하게 생각합니다. 매일
              달리며 꾸준함을 관리하고, 기술과 사람 모두에서 성장하려 합니다.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <AboutAside />
        </Reveal>
      </div>
    </Section>
  )
}
