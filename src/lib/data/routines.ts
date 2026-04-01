import { Routine } from '@/types/routine';

export const routines: Routine[] = [
  {
    id: 'buffett-style',
    name: '워렌 버핏 스타일 루틴',
    roleModel: '워렌 버핏 스타일',
    category: '경제',
    difficulty: '중급',
    keywords: ['독서', '의사결정', '장기집중'],
    tags: ['아침형', '몰입형', '현실형'],
    description: '빠른 실행보다 깊은 사고를 우선하는 투자형 루틴',
    recommendation: '깊은 집중이 필요한 기획/전략 직군에 추천',
    originalTimeline: [
      { id: '1', time: '05:30', title: '기상과 간단 스트레칭', description: '몸을 깨우고 오늘의 핵심 질문 1개 설정', intensity: '낮음' },
      { id: '2', time: '06:00', title: '재무 리포트 읽기', description: '기업 실적과 시장 흐름을 90분 집중 분석', intensity: '중간' },
      { id: '3', time: '09:00', title: '핵심 투자 미팅', description: '짧고 명확한 기준으로 포트폴리오 의사결정', intensity: '높음' },
      { id: '4', time: '13:00', title: '장기 독서 블록', description: '연간 목표 독서량을 채우는 고정 블록', intensity: '중간' },
      { id: '5', time: '20:30', title: '회고 메모', description: '오늘의 판단 중 잘한 점/흔들린 점 기록', intensity: '낮음' }
    ],
    realisticTimeline: [
      { id: '1', time: '06:30', title: '기상과 오늘 질문 설정', description: '오늘 일에서 가장 중요한 질문 1개 적기', intensity: '낮음' },
      { id: '2', time: '07:00', title: '뉴스레터 30분 정독', description: '정보 소비를 줄이고 핵심 지표 위주로 읽기', intensity: '중간' },
      { id: '3', time: '10:00', title: '우선순위 의사결정', description: '오늘 할 일 3개만 확정 후 실행', intensity: '중간' },
      { id: '4', time: '21:30', title: '판단 회고 5분', description: '결정 이유를 짧게 남겨 다음 의사결정에 반영', intensity: '낮음' }
    ]
  },
  {
    id: 'ronaldo-style',
    name: '호날두 스타일 루틴',
    roleModel: '호날두 스타일',
    category: '스포츠',
    difficulty: '고급',
    keywords: ['체력', '식단', '훈련'],
    tags: ['아침형', '체력형', '고강도'],
    description: '고강도 퍼포먼스를 위한 반복 훈련 중심 루틴',
    recommendation: '체력 관리가 중요한 직무/운동 병행 라이프에 추천',
    originalTimeline: [
      { id: '1', time: '05:00', title: '기상 & 수분 보충', description: '수분/호흡 루틴으로 몸 상태 점검', intensity: '낮음' },
      { id: '2', time: '06:00', title: '근력+민첩 훈련', description: '인터벌 중심의 고강도 트레이닝', intensity: '높음' },
      { id: '3', time: '11:30', title: '회복 식단', description: '단백질/복합탄수 비율 유지', intensity: '중간' },
      { id: '4', time: '16:00', title: '기술 훈련', description: '개인 약점 교정 훈련', intensity: '높음' },
      { id: '5', time: '21:00', title: '스트레칭 & 수면 준비', description: '회복을 위한 루틴 고정', intensity: '낮음' }
    ],
    realisticTimeline: [
      { id: '1', time: '06:40', title: '기상 후 10분 코어', description: '맨몸 루틴으로 중심 근육 활성화', intensity: '중간' },
      { id: '2', time: '12:30', title: '점심 후 20분 걷기', description: '활동량 확보 및 회복 강화', intensity: '낮음' },
      { id: '3', time: '19:30', title: '45분 운동 블록', description: '근력/유산소 혼합 루틴 실행', intensity: '높음' },
      { id: '4', time: '22:30', title: '수면 전 스트레칭', description: '다음날 피로 최소화', intensity: '낮음' }
    ]
  },
  {
    id: 'idol-balance',
    name: '아이돌 밸런스 루틴',
    roleModel: '연예인 자기관리 스타일',
    category: '연예/자기관리',
    difficulty: '중급',
    keywords: ['자기관리', '표현력', '회복'],
    tags: ['체력형', '현실형'],
    description: '일정이 바쁜 날에도 유지 가능한 자기관리 루틴',
    recommendation: '외부 일정이 잦은 직장인에게 추천',
    originalTimeline: [
      { id: '1', time: '06:00', title: '체형 관리 운동', description: '필라테스/유산소 조합', intensity: '중간' },
      { id: '2', time: '09:00', title: '보컬/발성 연습', description: '호흡 훈련 및 발음 정리', intensity: '중간' },
      { id: '3', time: '14:00', title: '스케줄 진행', description: '촬영/미팅/리허설', intensity: '높음' },
      { id: '4', time: '20:00', title: '피부/회복 케어', description: '회복 루틴과 수면 준비', intensity: '낮음' }
    ],
    realisticTimeline: [
      { id: '1', time: '07:20', title: '아침 15분 스트레칭', description: '부종/피로 감소 중심', intensity: '낮음' },
      { id: '2', time: '13:00', title: '물 1잔 + 자세 리셋', description: '업무 중 컨디션 유지', intensity: '낮음' },
      { id: '3', time: '20:30', title: '30분 홈트', description: '코어 + 하체 루틴', intensity: '중간' },
      { id: '4', time: '22:00', title: '회복 체크리스트', description: '피부/수면/식단 기록', intensity: '낮음' }
    ]
  },
  {
    id: 'deep-work-scholar',
    name: '딥워크 학자 루틴',
    roleModel: '공부 몰입형 스타일',
    category: '공부/생산성',
    difficulty: '고급',
    keywords: ['딥워크', '집중', '학습'],
    tags: ['아침형', '몰입형', '고강도'],
    description: '중요 과업을 시간 블록으로 쪼개 완성하는 루틴',
    recommendation: '시험/프로젝트 준비 기간에 추천',
    originalTimeline: [
      { id: '1', time: '05:30', title: '계획 점검', description: '오늘의 딥워크 블록 설정', intensity: '낮음' },
      { id: '2', time: '06:00', title: '딥워크 1차', description: '방해요소 차단 후 2시간 몰입', intensity: '높음' },
      { id: '3', time: '10:00', title: '복습/정리', description: '핵심 노트화', intensity: '중간' },
      { id: '4', time: '14:00', title: '딥워크 2차', description: '문제 해결 집중 시간', intensity: '높음' },
      { id: '5', time: '21:00', title: '회고와 계획', description: '내일 집중 주제 선행 설정', intensity: '낮음' }
    ],
    realisticTimeline: [
      { id: '1', time: '07:00', title: '90분 집중 블록', description: '핸드폰 off, 핵심 과업 1개', intensity: '높음' },
      { id: '2', time: '12:20', title: '20분 복습', description: '오전 성과 정리', intensity: '중간' },
      { id: '3', time: '19:30', title: '60분 집중 블록', description: '미완료 과업 마무리', intensity: '중간' },
      { id: '4', time: '22:10', title: '내일 TODO 3개', description: '선택 피로 줄이기', intensity: '낮음' }
    ]
  },
  {
    id: 'founder-focus',
    name: '창업가 포커스 루틴',
    roleModel: '스타트업 창업가 스타일',
    category: '경제',
    difficulty: '중급',
    keywords: ['실행', '우선순위', '커뮤니케이션'],
    tags: ['몰입형', '현실형'],
    description: '핵심 실행과 빠른 피드백을 반복하는 루틴',
    recommendation: '작은 팀 리더에게 추천',
    originalTimeline: [
      { id: '1', time: '06:00', title: '전략 노트 작성', description: '지표/문제/실험 우선순위 설정', intensity: '중간' },
      { id: '2', time: '09:30', title: '팀 싱크 미팅', description: '핵심 목표 정렬', intensity: '중간' },
      { id: '3', time: '11:00', title: '빌드 블록', description: '제품 개선 실행', intensity: '높음' },
      { id: '4', time: '17:00', title: '고객 피드백 정리', description: '인터뷰/문의 분석', intensity: '중간' }
    ],
    realisticTimeline: [
      { id: '1', time: '08:00', title: '오늘 목표 1개 선정', description: '매출/제품/운영 중 하나만 고르기', intensity: '낮음' },
      { id: '2', time: '11:00', title: '90분 실행 스프린트', description: '메신저 닫고 실제 작업', intensity: '높음' },
      { id: '3', time: '16:30', title: '피드백 체크', description: '고객 반응 3개 요약', intensity: '중간' },
      { id: '4', time: '21:20', title: '내일 실험 설정', description: '작은 개선 1개 정하기', intensity: '낮음' }
    ]
  },
  {
    id: 'writer-creator',
    name: '크리에이터 작가 루틴',
    roleModel: '창작자 몰입 스타일',
    category: '창작',
    difficulty: '중급',
    keywords: ['창작', '아웃풋', '리서치'],
    tags: ['몰입형', '현실형'],
    description: '리서치-초안-발행을 끊김 없이 이어가는 루틴',
    recommendation: '콘텐츠 생산성을 높이고 싶은 사람에게 추천',
    originalTimeline: [
      { id: '1', time: '05:40', title: '자유 글쓰기', description: '검열 없이 30분 초안 작성', intensity: '중간' },
      { id: '2', time: '08:00', title: '리서치 블록', description: '자료 수집 및 레퍼런스 분석', intensity: '중간' },
      { id: '3', time: '13:00', title: '원고 집필', description: '핵심 메시지 완성', intensity: '높음' },
      { id: '4', time: '18:30', title: '발행/소통', description: '콘텐츠 업로드 및 반응 체크', intensity: '중간' }
    ],
    realisticTimeline: [
      { id: '1', time: '07:40', title: '15분 아이디어 캡처', description: '생각나는 주제 3개 저장', intensity: '낮음' },
      { id: '2', time: '20:00', title: '45분 초안 작성', description: '하나의 메시지에 집중', intensity: '중간' },
      { id: '3', time: '21:00', title: '10분 발행 체크', description: '발행 일정 예약/정리', intensity: '낮음' }
    ]
  },
  {
    id: 'exam-athlete',
    name: '수험생 체력관리 루틴',
    roleModel: '장기 수험 최적화 스타일',
    category: '공부/생산성',
    difficulty: '입문',
    keywords: ['지속성', '회복', '집중'],
    tags: ['현실형', '아침형'],
    description: '긴 공부 기간에 번아웃을 줄이는 현실형 루틴',
    recommendation: '매일 일정한 페이스가 필요한 사람에게 추천',
    originalTimeline: [
      { id: '1', time: '06:00', title: '기상/산책', description: '20분 햇빛 노출로 컨디션 확보', intensity: '낮음' },
      { id: '2', time: '07:00', title: '암기 과목 집중', description: '아침 집중 시간 활용', intensity: '중간' },
      { id: '3', time: '15:00', title: '문제풀이 세션', description: '실전 감각 유지', intensity: '중간' },
      { id: '4', time: '22:30', title: '가벼운 스트레칭', description: '수면 질 개선', intensity: '낮음' }
    ],
    realisticTimeline: [
      { id: '1', time: '07:10', title: '기상 후 10분 정리', description: '책상 정돈 + 오늘 과목 설정', intensity: '낮음' },
      { id: '2', time: '08:00', title: '60분 집중 학습', description: '핵심 1과목만 집중', intensity: '중간' },
      { id: '3', time: '17:30', title: '30분 문제풀이', description: '오답 포인트 확인', intensity: '중간' },
      { id: '4', time: '22:00', title: '내일 계획 3줄', description: '작게 적고 바로 취침 준비', intensity: '낮음' }
    ]
  },
  {
    id: 'actor-presence',
    name: '배우 몰입 관리 루틴',
    roleModel: '배우 퍼포먼스 스타일',
    category: '연예/자기관리',
    difficulty: '중급',
    keywords: ['표현력', '감정관리', '체력'],
    tags: ['체력형', '몰입형'],
    description: '집중력과 감정 에너지를 균형 있게 쓰는 루틴',
    recommendation: '프레젠테이션/소통이 중요한 직군에 추천',
    originalTimeline: [
      { id: '1', time: '06:20', title: '호흡/명상', description: '감정 컨디션 안정화', intensity: '낮음' },
      { id: '2', time: '10:00', title: '대본 분석', description: '의도와 감정선 이해', intensity: '중간' },
      { id: '3', time: '15:00', title: '연기/표현 연습', description: '반복 리허설', intensity: '높음' },
      { id: '4', time: '21:30', title: '감정 디브리핑', description: '하루 감정 소모 정리', intensity: '낮음' }
    ],
    realisticTimeline: [
      { id: '1', time: '07:30', title: '5분 호흡', description: '긴장 완화 루틴', intensity: '낮음' },
      { id: '2', time: '12:40', title: '표현 연습 15분', description: '목소리/표정 훈련', intensity: '중간' },
      { id: '3', time: '19:40', title: '30분 회복 운동', description: '어깨/목 중심 풀기', intensity: '중간' },
      { id: '4', time: '22:20', title: '감정 메모', description: '하루 에너지 패턴 기록', intensity: '낮음' }
    ]
  }
];

export const categories = ['전체', '경제', '스포츠', '연예/자기관리', '공부/생산성', '창작'] as const;
export const filterTags = ['아침형', '체력형', '몰입형', '현실형', '고강도'] as const;

export const retrospectivesSeed = [
  { date: '03.31', summary: '아침 루틴 유지, 야간 회고 성공' },
  { date: '03.30', summary: '운동 루틴 70% 달성' },
  { date: '03.29', summary: '몰입 블록 2회 완료' }
];
