/**
 * LogConsole — AI 로그 관제 시스템(log_analyzer)의 재현형 콘솔 프리뷰.
 * 실제 제품 스크린샷이 없어, README가 규정한 출력 형식(심각도 P1–P3 · 근본원인 · 조치 ·
 * 분산 공격 집계 · 5분 중복 제거)을 그대로 따른 *대표 예시*를 보여준다. 창 안에서 위→아래로
 * 스크롤해 로그를 훑는다(긴 로그 뷰어 메타포). 팔레트는 페이지 규칙대로 단일 Hudson Blue + 중립.
 * 로그 내용은 시스템 동작을 보여주기 위한 예시이며 특정 사건의 기록이 아니다.
 */

type Row = { t: string; sev?: 'P1' | 'P2' | 'P3'; server?: string; msg: string; verdict: string; sys?: boolean }

const rows: Row[] = [
  { t: '09:42:11', sev: 'P1', server: 'web-03', msg: '다중 IP에서 /login 401 폭주', verdict: '분산 인증 공격 추정 · IP 대역 차단 권고' },
  { t: '09:41:58', sev: 'P2', server: 'api-01', msg: 'DB 커넥션 풀 고갈 (timeout ×12)', verdict: '풀 사이즈·커넥션 누수 점검' },
  { t: '09:40:33', sev: 'P3', server: 'web-01', msg: '헬스체크 일시 지연 1회', verdict: '일시적 · 조치 불필요' },
  { t: '09:39:07', sys: true, msg: '중복 제거: 동일 스택트레이스 31건 → 1건', verdict: '5분 윈도우 · MD5 정규화 해시' },
  { t: '09:38:02', sev: 'P1', server: 'web-02', msg: '동일 패턴 SQLi 시도 24건', verdict: '입력 검증 우회 시도 · WAF 룰 추가' },
  { t: '09:36:44', sev: 'P2', server: 'batch-1', msg: '야간 배치 OOM 종료', verdict: '힙 상향 또는 청크 분할 처리' },
  { t: '09:35:19', sys: true, msg: '분산 공격 집계: 5개 서버 교차 동일 페이로드', verdict: '게이트웨이 단 차단 권고' },
  { t: '09:33:50', sev: 'P3', server: 'api-02', msg: '404 급증 (봇 크롤링 패턴)', verdict: 'robots·요청 스로틀 검토' },
  { t: '09:32:08', sev: 'P2', server: 'db-01', msg: '슬로우 쿼리 3.4s (인덱스 미스)', verdict: '복합 인덱스 제안 · 실행계획 첨부' },
  { t: '09:30:41', sev: 'P1', server: 'web-03', msg: '디스크 사용률 96% 임계 초과', verdict: '로그 로테이션·정리 즉시 필요' },
  { t: '09:29:12', sys: true, msg: 'Edge DDoS 알림 필터: 저신뢰 노이즈 47건 차단', verdict: '3단계 게이트 1차 · AI 분석 생략' },
  { t: '09:27:55', sev: 'P3', server: 'api-01', msg: '외부 API 5xx 재시도 후 성공', verdict: '자동 복구 · 모니터링만' },
  { t: '09:26:30', sev: 'P2', server: 'web-01', msg: 'TLS 핸드셰이크 실패 산발', verdict: '구버전 클라이언트 · 인증서 체인 점검' },
  { t: '09:24:48', sev: 'P1', server: 'auth-1', msg: '비정상 토큰 재사용 감지', verdict: '세션 무효화 · 계정 잠금 권고' },
]

function SevTag({ sev }: { sev: Row['sev'] }) {
  if (!sev) {
    return <span className="rounded-[3px] border border-white/15 px-1.5 py-0.5 text-[10px] text-white/45">SYS</span>
  }
  const style =
    sev === 'P1'
      ? 'bg-hudson-blue text-white'
      : sev === 'P2'
        ? 'border border-hudson-blue/70 text-[#7fc4e6]'
        : 'border border-white/15 text-white/55'
  return <span className={`rounded-[3px] px-1.5 py-0.5 text-[10px] font-semibold ${style}`}>{sev}</span>
}

export function LogConsole() {
  return (
    <div className="min-h-full bg-graphite-night font-mono text-paper">
      {/* 콘솔 헤더 */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-white/10 bg-graphite-night/95 px-4 py-2.5 backdrop-blur">
        <span className="flex items-center gap-2 text-[11px] text-white/70">
          <span className="size-1.5 rounded-full bg-hudson-blue" />
          관제 스트림 · 7 서버
        </span>
        <span className="flex gap-1 text-[10px] text-white/40">
          <span className="rounded-[3px] bg-white/10 px-1.5 py-0.5 text-white/80">전체</span>
          <span className="px-1.5 py-0.5">P1</span>
          <span className="px-1.5 py-0.5">P2</span>
          <span className="px-1.5 py-0.5">P3</span>
        </span>
      </div>

      {/* 로그 행 */}
      <ul className="divide-y divide-white/[0.06]">
        {rows.map((r) => (
          <li key={r.t} className="flex gap-3 px-4 py-2.5">
            <span className="shrink-0 pt-0.5 text-[10.5px] tabular-nums text-white/35">{r.t}</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <SevTag sev={r.sev} />
                {r.server && <span className="text-[10.5px] text-white/45">{r.server}</span>}
                <span className="break-keep text-[12px] text-white/90">{r.msg}</span>
              </div>
              <p className="mt-1 flex items-start gap-1.5 break-keep text-[11px] leading-snug text-white/55">
                <span aria-hidden className="mt-1 size-1 shrink-0 rounded-full bg-hudson-blue" />
                {r.verdict}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="px-4 py-3 text-[10px] text-white/30">
        예시 출력 · Gemini 분석 → 텔레그램 인라인 대응(IP 차단·음소거)
      </p>
    </div>
  )
}
