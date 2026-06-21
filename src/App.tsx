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
        {/* 에디토리얼 본문 — 각 섹션이 풀블리드 색 밴드(맞닿아 톤 전환으로 분리), 1200px 중앙 정렬 */}
        <Snapshot />
        <About />
        <Work />
        <Engineering />
        <Background />
        <Contact />
      </main>
    </>
  )
}

export default App
