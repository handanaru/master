'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { retrospectOptions } from '@/lib/data/content';
import { getRoutineById } from '@/lib/data/selectors';
import { appendSavedRoutine, readSession, saveRetrospect } from '@/lib/state/app-state';

export default function RetrospectPage() {
  const searchParams = useSearchParams();
  const session = readSession();

  const routineId = searchParams.get('routineId') ?? session.selectedRoutineId;
  const [saved, setSaved] = useState(false);

  const routine = useMemo(() => getRoutineById(routineId), [routineId]);
  const todayState = session.todayByRoutine[routine.id];
  const storedRetrospect = session.retrospectByRoutine[routine.id];

  const [goodHabits, setGoodHabits] = useState<string[]>(storedRetrospect?.goodHabits ?? []);
  const [hardHabits, setHardHabits] = useState<string[]>(storedRetrospect?.hardHabits ?? []);
  const [note, setNote] = useState(storedRetrospect?.note ?? '');

  const total = routine.realisticTimeline.length;
  const completed = todayState?.completedIds.length ?? 0;
  const rate = Math.round((completed / total) * 100);

  const toggle = (list: string[], value: string, setter: (next: string[]) => void) => {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  const onSaveRetrospect = () => {
    saveRetrospect(routine.id, {
      goodHabits,
      hardHabits,
      note,
      updatedAt: new Date().toISOString()
    });
  };

  const onSaveRoutine = () => {
    onSaveRetrospect();
    appendSavedRoutine({
      id: `${routine.id}-custom`,
      sourceRoutineId: routine.id,
      name: `${routine.name} (내 루틴)`,
      savedAt: new Date().toISOString(),
      items: routine.realisticTimeline.map((item) => ({ id: item.id, time: item.time, title: item.title }))
    });
    setSaved(true);
  };

  return (
    <div className="space-y-4 pb-8">
      <h1 className="text-2xl font-bold">오늘의 회고</h1>
      <Card>
        <p className="text-sm text-slate-500">오늘 달성률</p>
        <p className="text-3xl font-bold">{rate}%</p>
        <p className="mt-1 text-sm text-slate-500">기준 루틴: {routine.name}</p>
      </Card>

      <Card>
        <h2 className="font-semibold">잘 맞았던 습관</h2>
        <div className="mt-2 space-y-2">
          {retrospectOptions.goodHabits.map((habit) => (
            <label key={habit} className="flex items-center gap-2 rounded-lg border p-2">
              <input type="checkbox" checked={goodHabits.includes(habit)} onChange={() => toggle(goodHabits, habit, setGoodHabits)} /> {habit}
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">부담스러웠던 습관</h2>
        <div className="mt-2 space-y-2">
          {retrospectOptions.hardHabits.map((habit) => (
            <label key={habit} className="flex items-center gap-2 rounded-lg border p-2">
              <input type="checkbox" checked={hardHabits.includes(habit)} onChange={() => toggle(hardHabits, habit, setHardHabits)} /> {habit}
            </label>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">한 줄 회고</h2>
        <input className="mt-2 w-full rounded-lg border p-3" value={note} onChange={(event) => setNote(event.target.value)} />
      </Card>

      <button onClick={onSaveRoutine} className="block w-full rounded-xl bg-brand py-3 text-center font-semibold text-white">
        {saved ? '저장 완료! 내 루틴에서 확인하세요' : '내 루틴으로 저장'}
      </button>

      <Link href="/my-routines" className="block rounded-xl border border-slate-300 py-3 text-center font-semibold">
        내 루틴으로 이동
      </Link>
    </div>
  );
}
