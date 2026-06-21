import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  label: string
  children: ReactNode
  /** 섹션 색 밴드 톤(data-tone). index.css의 [data-tone='...'] 규칙과 매칭. */
  tone?: 'profile' | 'about' | 'work' | 'engineering' | 'background'
  className?: string
}

/**
 * 에디토리얼 섹션 셸 — 좌측 사이드바 라벨 + 우측 콘텐츠(스타일 레퍼런스의 시그니처 리듬).
 * 각 섹션은 풀블리드 색 밴드(data-tone)로, 명시적 구분선 없이 미묘한 톤 전환으로 분리된다.
 * 세로 리듬은 밴드 자체의 py가 소유 → 인접 밴드가 맞닿아 톤이 끊김 없이 이어진다.
 */
export function Section({ id, label, children, tone, className }: SectionProps) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className ?? ''}`}
    >
      <div className="container-page grid grid-cols-1 gap-y-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-16">
        <Reveal as="div">
          <p className="eyebrow lg:sticky lg:top-28">{label}</p>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  )
}
