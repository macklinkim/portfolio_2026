import type { ReactNode } from 'react'
import type { ProjectImage } from '../data/site'

/**
 * BrowserFrame — 프로젝트 스크린샷을 진짜 "창"처럼 보여준다.
 * 위아래로 긴 원본 스샷을 가로폭에 맞춰 축소(w-full·자연 높이)하고, 고정 높이 뷰포트 안에서
 * 사용자가 마우스 휠/드래그/키보드로 위→아래 스크롤하며 본다(실제 윈도우 스크롤바).
 * 토큰: Paper 표면 · Sage 보더 · elevatedcards radius. CLS 방지: 뷰포트 aspect 고정.
 * 접근성: 스크롤 영역 tabIndex=0 + aria-label, 키보드 화살표 스크롤 가능.
 */
export function BrowserFrame({
  image,
  children,
  className = '',
  eager = false,
  label,
}: {
  image?: ProjectImage
  children?: ReactNode
  className?: string
  eager?: boolean
  label?: string
}) {
  const aspect = image?.tall ? 'aspect-[16/11]' : 'aspect-[16/10]'
  return (
    <div
      className={`group/frame overflow-hidden rounded-[var(--radius-elevatedcards)] border border-hairline bg-paper transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-ink/30 ${className}`}
    >
      {/* 브라우저 크롬 바 */}
      <div className="flex items-center gap-2 border-b border-hairline bg-linen px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-mist" />
          <span className="size-2.5 rounded-full bg-mist" />
          <span className="size-2.5 rounded-full bg-mist" />
        </span>
        {label && (
          <span className="ml-1 truncate font-mono text-[11px] text-steel">{label}</span>
        )}
      </div>
      {/* 스크롤 뷰포트 — 휠/드래그/키보드로 위→아래 스크롤 */}
      <div
        className={`shot-scroll relative w-full overflow-y-auto overflow-x-hidden bg-paper ${aspect}`}
        tabIndex={0}
        role="group"
        aria-label={image ? `${image.alt} (위아래로 스크롤해 보기)` : '프로젝트 미리보기 (위아래로 스크롤)'}
      >
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className="block w-full"
          />
        ) : (
          children
        )}
      </div>
    </div>
  )
}
