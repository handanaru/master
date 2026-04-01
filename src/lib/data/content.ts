import { OnboardingGoal, Persona, RetrospectOptionGroup } from '@/types/app-data';

export const personas: Persona[] = [
  {
    id: 'balanced-worker',
    label: '현실형 직장인',
    description: '과하지 않게 지속 가능한 루틴 선호',
    preferredTags: ['현실형', '아침형']
  },
  {
    id: 'deep-focus',
    label: '몰입형 메이커',
    description: '집중 블록과 성과 중심 루틴 선호',
    preferredTags: ['몰입형', '고강도']
  },
  {
    id: 'fitness-first',
    label: '체력 우선형',
    description: '운동/회복을 중심으로 하루를 설계',
    preferredTags: ['체력형', '아침형']
  }
];

export const onboardingGoals: OnboardingGoal[] = ['집중력 향상', '체력 관리', '아침 루틴 정착'];

export const onboardingRecommendations: Record<OnboardingGoal, string[]> = {
  '집중력 향상': ['buffett-style', 'deep-work-scholar', 'writer-creator'],
  '체력 관리': ['ronaldo-style', 'idol-balance', 'actor-presence'],
  '아침 루틴 정착': ['buffett-style', 'exam-athlete', 'founder-focus']
};

export const retrospectOptions: RetrospectOptionGroup = {
  goodHabits: ['아침 독서', '핵심 과업 먼저 하기', '저녁 회고'],
  hardHabits: ['이른 기상', '고강도 운동', '저녁 업무 차단']
};
