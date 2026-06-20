function App() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="container-page py-20">
        <p className="text-caption uppercase tracking-[0.16em] text-steel">
          Mack · 김천호
        </p>
        <h1 className="font-display mt-6 text-[40px] sm:text-[48px] lg:text-[54px] text-ink">
          AI 개발 환경을 직접{' '}
          <a className="ink-link" href="#engineering">
            설계하는
          </a>{' '}
          풀스택 엔지니어.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[18px] leading-[1.5] text-carbon">
          토큰 파이프라인 부트스트랩 완료 — 디자인 시스템(컬러·타이포·spacing·radius·shadow)이
          Tailwind v4 <code>@theme</code>에 연결되었습니다. 다음 반복에서 실제 섹션을 구현합니다.
        </p>
      </section>
    </main>
  )
}

export default App
