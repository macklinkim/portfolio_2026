import type { ProjectImage } from '../data/site'

/**
 * BrowserFrame — 모든 프로젝트 스크린샷을 동일한 브라우저 크롬 카드로 감싸 색감 일체성 확보.
 * (라이트/다크 내부 테마가 섞여 있어도 프레임이 일정해 페이지가 하나로 읽힘.)
 * 토큰: Paper 표면 · Sage 보더 · elevatedcards radius · 레이어드 그림자.
 * 긴 대시보드 샷은 고정 비율 창에서 호버 시 아래로 천천히 팬(동적 + 긴 비율 처리).
 * CLS 방지: aspect-ratio 고정. 모션: object-position/transform만, reduced-motion 시 전역 CSS가 비활성.
 */
export function BrowserFrame({
  image,
  className = '',
  eager = false,
}: {
  image: ProjectImage
  className?: string
  eager?: boolean
}) {
  return (
    <div
      className={`group/frame overflow-hidden rounded-[var(--radius-elevatedcards)] border border-sage bg-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${className}`}
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* 브라우저 크롬 바 */}
      <div className="flex items-center gap-2 border-b border-sage bg-linen px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-mist" />
          <span className="size-2.5 rounded-full bg-mist" />
          <span className="size-2.5 rounded-full bg-mist" />
        </span>
      </div>
      {/* 뷰포트 */}
      <div className={`relative w-full overflow-hidden ${image.tall ? 'aspect-[16/11]' : 'aspect-[16/10]'}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 size-full object-cover ${
            image.tall
              ? 'object-top transition-[object-position] duration-[5000ms] ease-linear group-hover/frame:object-bottom'
              : 'object-center transition-transform duration-700 ease-out group-hover/frame:scale-[1.04]'
          }`}
        />
      </div>
    </div>
  )
}
