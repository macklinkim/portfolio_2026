/**
 * 사이트 콘텐츠 데이터 — 모든 사실은 원본 근거에서만 가져옴.
 * 출처: _AGENT_CONTEXT.md, README_*.md, MCP_하네스.txt, 자기소개서_개선본_20260618.txt, 이력서.
 * 창작 금지. URL/수치/스택은 원문 그대로.
 */

export const profile = {
  name: '김천호',
  alias: 'Mack',
  role: '풀스택 소프트웨어 엔지니어',
  focus: '백엔드 중심 · AI 개발환경 자체 구축',
  identity:
    'AI를 가져다 쓰는 데서 멈추지 않고, 직접 환경을 설계·구축해 생산성과 운영 안정성을 함께 추구하는 개발자.',
  experience: '약 7년 11개월',
  github: 'https://github.com/macklinkim',
  velog: 'https://velog.io/@mackhokim',
} as const

export const nav = [
  { id: 'profile', label: 'Profile' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
] as const

export type ProjectImage = { src: string; alt: string; tall?: boolean }

export type Project = {
  index: string
  title: string
  tagline: string
  body: string
  stack: string[]
  highlights: { value: string; label: string }[]
  live: { label: string; href: string }
  repos: { label: string; href: string }[]
  images: ProjectImage[]
  disclaimer?: string
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'AI 시장분석 대시보드',
    tagline: 'LangGraph 멀티 에이전트로 미국 섹터 순환매를 읽는다',
    body: 'Data·News·Analyst 세 개의 LangGraph 에이전트와 Claude를 엮어 미국 섹터 순환매를 분석한다. 신호를 3단계로 교차 검증해 환각을 걸러내고, FastAPI와 APScheduler로 분석 배치를 자동화했다.',
    stack: ['LangGraph', 'Claude', 'FastAPI', 'APScheduler', 'Supabase'],
    highlights: [
      { value: '3-Agent', label: 'Data · News · Analyst 파이프라인' },
      { value: '3단계', label: '시그널 교차 검증' },
    ],
    live: { label: 'sectoranalyzerfrontend2026.kopserf.workers.dev', href: 'https://sectoranalyzerfrontend2026.kopserf.workers.dev' },
    repos: [
      { label: 'macklinkim/sector_analyzer', href: 'https://github.com/macklinkim/sector_analyzer' },
      { label: 'sector-analyzer-frontend', href: 'https://github.com/macklinkim/sector-analyzer-frontend' },
    ],
    images: [
      { src: '/projects/sector-analyzer-1.png', alt: 'AI 시장분석 대시보드 — 섹터 히트맵, 경제 캘린더, 종목별 스파크라인과 순위 바 차트', tall: true },
      { src: '/projects/sector-analyzer-2.png', alt: 'AI 인사이트 화면 — 비즈니스 사이클 클락, RRG 상대강도 그래프, AI 섹터 로테이션 시그널', tall: true },
    ],
  },
  {
    index: '02',
    title: 'Geo Pixel Board',
    tagline: '그 장소에 실제로 있어야만 그릴 수 있는 지도 위 픽셀 캔버스',
    body: '실제 그 위치에 있어야만 한 픽셀을 찍을 수 있는 위치 기반 실시간 협업 캔버스. Cloudflare Durable Objects를 지도 셀당 하나씩 두고 WebSocket Hibernation으로 연결을 유지하며, 위치 검증은 서버 권위로 게이트해 위변조를 막는다.',
    stack: ['Cloudflare Workers', 'Durable Objects', 'WebSocket Hibernation', '서버권위 위치게이트'],
    highlights: [
      { value: '셀당 1 DO', label: '지도 셀 단위 분산 상태' },
      { value: 'Server-authoritative', label: '위치 게이트 · 프라이버시 설계' },
    ],
    live: { label: 'geo-pixel-board.kopserf.workers.dev', href: 'https://geo-pixel-board.kopserf.workers.dev' },
    repos: [{ label: 'macklinkim/geo_pixel_canvas', href: 'https://github.com/macklinkim/geo_pixel_canvas' }],
    images: [
      { src: '/projects/geo-pixel-board.png', alt: 'Geo Pixel Board 랜딩 — "Turn real places into pixel canvases" 헤드라인과 지도 위 실시간 픽셀 캔버스 미리보기' },
    ],
  },
  {
    index: '03',
    title: '좋소판별기',
    tagline: '국민연금 공공데이터 55만 사업장으로 읽는 중소기업 근무여건',
    body: '국민연금 공공데이터 약 55만 개 사업장 정보로 중소기업의 근무여건 위험도를 추정·시각화한다. 라이브러리 없이 직접 그린 SVG 차트와 컬럼형 JSON + 지연 인덱스 구조로 데이터 적재량을 약 96배 절감했다.',
    stack: ['Next.js 15', '무라이브러리 SVG 차트', '컬럼형 JSON', '지연 인덱스'],
    highlights: [
      { value: '55만', label: '사업장 공공데이터' },
      { value: '약 96×', label: '데이터 적재량 절감' },
    ],
    live: { label: 'jotsopan.vercel.app', href: 'https://jotsopan.vercel.app' },
    repos: [{ label: 'macklinkim/joatsopan', href: 'https://github.com/macklinkim/joatsopan' }],
    images: [
      { src: '/projects/jotsopan.png', alt: '좋소판별기 — 사업장 근무여건 위험도 게이지, 핵심 지표, 추이 차트와 주변 회사 추천 목록', tall: true },
    ],
    disclaimer:
      '공개 데이터에 기반한 추정치이며 특정 기업에 대한 비방이 아닙니다.',
  },
]

export const engineering = {
  lead: '사내 레거시 JSP 프로젝트(맑은프레임워크, 운영 35대 멀티사이트)에 Claude Code 기반 개발 환경을 직접 설계해 도입했다. AI를 붙이기 전에 안전장치부터 세웠다.',
  pillars: [
    {
      title: 'MCP 서버 8종 자체 제작',
      body: 'Node.js 6종 + Python(paramiko) 2종. 로컬·개발·운영 DB 조회 채널을 분리하고 운영은 read-only로 강제했다.',
    },
    {
      title: '시맨틱 코드 검색',
      body: 'Qdrant와 Voyage Code 3 임베딩으로 JSP·Java 1,878개 파일을 인덱싱해 AI가 프로젝트 맥락을 이해한 채 일하게 했다.',
    },
    {
      title: '운영 35대 안전 배포',
      body: '35대 운영 서버를 대상으로 병렬·백업·dry-run·카나리를 지원하는 SSH 배포 도구를 직접 만들었다.',
    },
    {
      title: '거버넌스 · 가드',
      body: '운영 데이터의 임의 수정과 위험 명령을 deny 정책과 pre-edit 훅으로 가드 단에서 차단한다. 지식관리는 memory·docs·wiki 3계층으로 운영한다.',
    },
  ],
}

export type Job = {
  company: string
  period: string
  role: string
  detail: string
}

export const career: Job[] = [
  {
    company: '맑은소프트',
    period: '2026.02 ~ 재직',
    role: '과장 · 웹 개발',
    detail:
      'LMS ‘EHRD’ 백엔드. 성명 양방향 암호화를 35대 운영 서버에 무중단 마이그레이션, KG모빌리언스 통합결제 모듈 단독 구축(HMAC-SHA256 무결성 검증·자동 망취소·PII 암호화), AI 로그관제 파일럿(Gemini + Fluent Bit + Next.js).',
  },
  {
    company: '신원글로벌',
    period: '2025.10 ~ 2026.02',
    role: 'SmartFactory MES · 전자세관신고',
    detail:
      'Spring Framework, MyBatis, Nexacro 기반 MES와 전자세관신고(인도네시아 출장). 펌웨어용 HA 이중화·데몬 서비스 구축, AWS S3 연동 파일 관리, Caffeine 캐시로 응답속도 개선.',
  },
  {
    company: '티맥스데이터 외',
    period: '이전 경력',
    role: '시스템 SW · 웹 · DB',
    detail:
      '티맥스데이터에서 출발해 국군제3707부대 군무원, 대한건설협회, 국민건강보험공단 등에서 시스템 소프트웨어(OS 개발)·웹·DB까지 폭넓은 실무를 거쳤다.',
  },
]

export const credentials = {
  education: { school: '숭실대학교 컴퓨터학부', detail: '졸업 · 학점 3.5 / 4.5' },
  certs: ['TOEIC 835', '정보처리기사', 'OCJP (Oracle Certified Java)', '리눅스마스터 2급'],
}

/* ─── Profile snapshot — 출처: intro_text.txt (이력서 원문) ─── */

export const positioning =
  '7년 11개월, 시스템 소프트웨어·웹·DB부터 AI 개발 환경 구축까지 두루 거친 백엔드 중심 풀스택 엔지니어.'

export type CareerRow = { period: string; company: string; team: string; role: string }

export const careerCompact: CareerRow[] = [
  { period: '2026.02 – 재직', company: '맑은소프트', team: '환급·글로벌 사업팀', role: '과장' },
  { period: '2025.10 – 2026.01', company: '㈜신원', team: 'Smart Factory', role: '대리' },
  { period: '2020.02 – 2023.10', company: '국군 제3707부대', team: '정보기획실', role: '6급 군무원' },
  { period: '2017.08 – 2019.01', company: '대한건설협회', team: '정보관리실', role: '사원' },
  { period: '2016.07 – 2017.08', company: '국민건강보험공단', team: '정보기획실', role: '주임' },
  { period: '2015.03 – 2015.10', company: '㈜티맥스데이터', team: '연구개발1실', role: '연구원' },
]

export const educationList = [
  { period: '2007.03 – 2014.08', school: '숭실대학교 (서울)', detail: '컴퓨터학 전공 · 학점 3.5 / 4.5' },
  { period: '2004.03 – 2007.02', school: '북평고등학교 (강원)', detail: '이과 계열' },
]

export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Framework', 'MyBatis', 'Node.js', 'Nest.js', 'RESTful API'] },
  { label: 'Data · DB', items: ['PostgreSQL', 'Oracle', 'MSSQL', 'MySQL', 'MongoDB', '쿼리 튜닝'] },
  { label: 'Cloud · DevOps', items: ['AWS (S3·Lambda·EC2·CloudFront·EB)', 'Linux 서버 운영', 'GitHub / GitLab CI/CD', '모니터링 툴 제작'] },
  { label: 'Frontend · AI', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Claude Code · MCP', 'Gemini CLI'] },
  { label: 'Systems', items: ['C · C++ (Kernel / OS)'] },
]

export const competencies = [
  'Java · Spring Boot · MyBatis 백엔드 시스템 개발 7년 이상 실무',
  'PostgreSQL · Oracle · MSSQL · MySQL · MongoDB 활용·튜닝 7년 이상',
  'Linux 웹/DB 서버 운영 5년 이상, AWS 클라우드 구축·운영',
  'LMS 백엔드 · 35대 운영 서버 무중단 암호화 · 다중 PG 결제 연동',
  'Claude Code · MCP 기반 AI 개발 환경 자체 구축(바이브 코딩)',
  '해외 프로젝트 수행 · 영어 회화(TOEIC 835) · C/C++ 커널 기능 개발 다수',
]
