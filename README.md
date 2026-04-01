# 대가의 습관 웹 MVP

Next.js + TypeScript + Tailwind CSS 기반 웹 MVP입니다.

## 실행

```bash
npm install
npm run dev
```

- 홈: `/`
- 탐색: `/explore`
- 루틴 상세: `/routines/[id]`
- 오늘의 루틴: `/today`
- 회고: `/retrospect`
- 내 루틴: `/my-routines`
- 내 루틴 편집: `/my-routines/[id]/edit`
- 온보딩: `/onboarding`

## npm install 403 점검 결과

### 프로젝트 내부 문제 여부
- `.npmrc` 파일 없음 (프로젝트에서 레지스트리 강제하지 않음)
- `package.json` 의존성은 일반 public 패키지(Next/React/TypeScript 계열)로 구성
- 의존성 이름/버전 자체가 403을 유발하는 패턴은 확인되지 않음

### 환경/레지스트리 문제 가능성
- 에러: `403 Forbidden - GET https://registry.npmjs.org/@types%2fnode`
- 경고: `Unknown env config "http-proxy"`
- 위 조합상 사내 보안 정책/프록시/registry 인증 계층에서 차단될 가능성이 큼

### 점검 커맨드
- `npm config get registry`
- `npm config list -l | rg -n "proxy|https-proxy|http-proxy"`
- `npm whoami`
- `npm view @types/node version`

## 구조

- `src/lib/data/routines.ts`: 중앙 루틴/카테고리/타임라인 시드
- `src/lib/data/content.ts`: 페르소나/온보딩 추천 매핑/회고 옵션
- `src/lib/data/selectors.ts`: 화면 공용 selector
- `src/lib/state/app-state.ts`: localStorage 세션 상태
- `src/app/*`: 화면 라우트
- `src/components/*`: UI 컴포넌트

## 데이터 흐름

- 탐색(`/explore`) → 루틴 상세(`/routines/[id]`) → 오늘(`/today`) → 회고(`/retrospect`) → 내 루틴(`/my-routines`)이
  동일 `routineId` 컨텍스트와 중앙 데이터 레이어를 기준으로 동작
- localStorage 세션에 선택 루틴/진행상태/회고/저장 루틴이 유지됨
- 내 루틴 편집 화면에서 이름/항목 변경 후 저장 시 localStorage에 반영됨

## 다음 단계

1. localStorage 상태를 API/DB(Prisma)로 동기화
2. edit 화면을 saved routine 엔티티와 연결
3. 회고/진행 데이터를 기반으로 추천 알고리즘 개선
