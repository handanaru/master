export type RoutineMode = 'original' | 'realistic';

export type RoutineRuntimeState = {
  completedIds: string[];
  skippedIds: string[];
  memo: string;
  updatedAt: string;
};

export type RetrospectState = {
  goodHabits: string[];
  hardHabits: string[];
  note: string;
  updatedAt: string;
};

export type SavedRoutine = {
  id: string;
  sourceRoutineId: string;
  name: string;
  savedAt: string;
  items: Array<{ id: string; time: string; title: string }>;
};

export type AppSession = {
  selectedRoutineId: string | null;
  selectedMode: RoutineMode;
  todayByRoutine: Record<string, RoutineRuntimeState>;
  retrospectByRoutine: Record<string, RetrospectState>;
  savedRoutines: SavedRoutine[];
};

const SESSION_KEY = 'masters.appSession.v1';

const initialSession: AppSession = {
  selectedRoutineId: null,
  selectedMode: 'realistic',
  todayByRoutine: {},
  retrospectByRoutine: {},
  savedRoutines: []
};

function parseJson<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function readSession(): AppSession {
  if (typeof window === 'undefined') return initialSession;
  return {
    ...initialSession,
    ...parseJson<AppSession>(window.localStorage.getItem(SESSION_KEY), initialSession)
  };
}

export function writeSession(next: AppSession) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(next));
}

export function patchSession(patch: (prev: AppSession) => AppSession) {
  const current = readSession();
  const next = patch(current);
  writeSession(next);
  return next;
}

export function saveSelectedRoutine(routineId: string, mode: RoutineMode) {
  return patchSession((prev) => ({ ...prev, selectedRoutineId: routineId, selectedMode: mode }));
}

export function saveTodayProgress(routineId: string, value: RoutineRuntimeState) {
  return patchSession((prev) => ({
    ...prev,
    selectedRoutineId: routineId,
    todayByRoutine: {
      ...prev.todayByRoutine,
      [routineId]: value
    }
  }));
}

export function saveRetrospect(routineId: string, value: RetrospectState) {
  return patchSession((prev) => ({
    ...prev,
    retrospectByRoutine: {
      ...prev.retrospectByRoutine,
      [routineId]: value
    }
  }));
}

export function appendSavedRoutine(item: SavedRoutine) {
  return patchSession((prev) => ({
    ...prev,
    savedRoutines: [item, ...prev.savedRoutines.filter((savedItem) => savedItem.id !== item.id)]
  }));
}

export function updateSavedRoutine(routineId: string, patch: Partial<SavedRoutine>) {
  return patchSession((prev) => ({
    ...prev,
    savedRoutines: prev.savedRoutines.map((item) => (item.id === routineId ? { ...item, ...patch } : item))
  }));
}
