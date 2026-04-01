import { routines } from '@/lib/data/routines';
import { onboardingRecommendations } from '@/lib/data/content';

export function getRoutineById(id?: string | null) {
  if (!id) return routines[0];
  return routines.find((routine) => routine.id === id) ?? routines[0];
}

export function getRecommendedRoutines(count = 3) {
  return routines.slice(0, count);
}

export function getRoutinesByIds(ids: string[]) {
  return ids.map((id) => routines.find((routine) => routine.id === id)).filter(Boolean) as typeof routines;
}

export function getOnboardingRecommendations(goal: keyof typeof onboardingRecommendations) {
  return getRoutinesByIds(onboardingRecommendations[goal] ?? []);
}
