import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Snapshot } from './components/Snapshot'
import { About } from './components/About'
import { Work } from './components/Work'
import { Engineering } from './components/Engineering'
import { Background } from './components/Background'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-buttons)] focus:bg-obsidian focus:px-4 focus:py-2 focus:text-paper"
      >
        본문으로 건너뛰기
      </a>
      <Nav />
      <main>
        <Hero />
        {/* 에디토리얼 본문: 48px+ 섹션 리듬, 1200px 중앙 정렬 */}
        <div className="space-y-24 py-24 sm:space-y-28 sm:py-28">
          <Snapshot />
          <About />
          <Work />
          <Engineering />
          <Background />
        </div>
        <Contact />
      </main>
    </>
  )
}

export default App
