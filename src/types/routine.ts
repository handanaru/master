export type RoutineCategory = '경제' | '스포츠' | '연예/자기관리' | '공부/생산성' | '창작';

export type HabitTag = '아침형' | '체력형' | '몰입형' | '현실형' | '고강도';

export type RoutineStep = {
  id: string;
  time: string;
  title: string;
  description: string;
  intensity: '낮음' | '중간' | '높음';
};

export type Routine = {
  id: string;
  name: string;
  roleModel: string;
  category: RoutineCategory;
  difficulty: '입문' | '중급' | '고급';
  keywords: string[];
  tags: HabitTag[];
  description: string;
  originalTimeline: RoutineStep[];
  realisticTimeline: RoutineStep[];
  recommendation: string;
};
