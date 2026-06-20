import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  label: string
  children: ReactNode
  className?: string
}

/**
 * 에디토리얼 섹션 셸 — 좌측 사이드바 라벨 + 우측 콘텐츠(스타일 레퍼런스의 시그니처 리듬).
 * 라벨은 조용한 마커(steel), 비명 지르는 eyebrow가 아님. 섹션 간 48px+ 리듬은 부모에서.
 */
export function Section({ id, label, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className ?? ''}`}>
      <div className="container-page grid grid-cols-1 gap-y-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-16">
        <Reveal as="div">
          <div className="flex items-center gap-3 lg:sticky lg:top-28 lg:block">
            <span aria-hidden className="h-px w-8 bg-sage lg:mb-4 lg:w-12" />
            <p className="text-[13px] font-medium tracking-[0.04em] text-steel">{label}</p>
          </div>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  )
}
