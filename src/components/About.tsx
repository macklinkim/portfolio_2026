import { Section } from './Section'
import { Reveal } from './Reveal'

/**
 * About — 자기소개서 서사 기반. 과장/허위 없음.
 * 시골 출신 → 숭실대 → 티맥스 → 시스템SW·웹·DB → 풀스택+AI, 안전장치 우선, 균형감.
 */
export function About() {
  return (
    <Section id="about" label="About">
      <Reveal>
        <h2 className="font-display text-[clamp(28px,4.4vw,44px)] text-ink">
          시골에서 컴퓨터 프로그래머를 꿈꾸던 아이가,{' '}
          <a href="#engineering" className="ink-link">
            AI 개발 환경
          </a>
          을 직접 설계하는 엔지니어가 되기까지.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-6 text-[16px] leading-[1.65] text-carbon sm:text-[17px]">
        <Reveal delay={0.05}>
          <p>
            숭실대학교 컴퓨터학부를 졸업하고 티맥스데이터에서 경력을 시작했습니다. 이후 시스템
            소프트웨어와 웹, 데이터베이스를 두루 거치며 백엔드 역량을 쌓았고, Spring Framework와
            Spring Boot 기반의 서버 개발·쿼리 설계·RESTful API 연동·캐싱을 경험했습니다.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            다만 AI를 단순히 가져다 쓰는 데서 멈추고 싶지 않았습니다. 사내 바이브 코딩 교육을 이수한
            뒤, DB·SSH·운영 서버를 직접 연결한 Claude Code 기반 개발 환경을 환경에 맞춰 자체
            구축했습니다. 이때도 운영 데이터의 임의 수정과 위험 명령을 가드 단에서 차단하는
            안전장치를 가장 먼저 설계해, 생산성과 운영 안정성을 함께 추구했습니다.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p>
            ‘새 술은 새 부대에 담아야 한다’는 말처럼, 안정적인 기존 기술은 유지하면서 새로운
            서비스에 새 기술을 적응시키는 균형감을 중요하게 생각합니다. 매일 달리기로 체력을
            관리하며 꾸준함을 무기로 삼습니다. 기술적으로도 인간적으로도 성장하는 개발자가 되는 것이
            목표입니다.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
