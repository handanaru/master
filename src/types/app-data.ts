import { HabitTag } from '@/types/routine';

export type Persona = {
  id: string;
  label: string;
  description: string;
  preferredTags: HabitTag[];
};

export type OnboardingGoal = '집중력 향상' | '체력 관리' | '아침 루틴 정착';

export type RetrospectOptionGroup = {
  goodHabits: string[];
  hardHabits: string[];
};
