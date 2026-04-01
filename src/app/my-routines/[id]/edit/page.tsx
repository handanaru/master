'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { readSession, SavedRoutine, updateSavedRoutine } from '@/lib/state/app-state';

export default function EditRoutinePage() {
  const params = useParams<{ id: string }>();
  const [routine, setRoutine] = useState<SavedRoutine | null>(null);

  useEffect(() => {
    const saved = readSession().savedRoutines.find((item) => item.id === params.id) ?? null;
    setRoutine(saved);
  }, [params.id]);

  const onDeleteItem = (itemId: string) => {
    if (!routine) return;
    setRoutine({ ...routine, items: routine.items.filter((item) => item.id !== itemId) });
  };

  const onUpdateName = (name: string) => {
    if (!routine) return;
    setRoutine({ ...routine, name });
  };

  const onUpdateItemTitle = (itemId: string, title: string) => {
    if (!routine) return;
    setRoutine({
      ...routine,
      items: routine.items.map((item) => (item.id === itemId ? { ...item, title } : item))
    });
  };

  const onSave = () => {
    if (!routine) return;
    updateSavedRoutine(routine.id, {
      name: routine.name,
      items: routine.items
    });
  };

  if (!routine) {
    return (
      <div className="space-y-4 pb-8">
        <p className="text-sm text-slate-500">편집할 루틴을 찾을 수 없습니다.</p>
        <Link href="/my-routines" className="text-sm text-brand">
          내 루틴으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-8">
      <Link href="/my-routines" className="text-sm text-slate-500">
        ← 내 루틴으로
      </Link>
      <h1 className="text-2xl font-bold">루틴 편집</h1>

      <Card>
        <label className="text-sm text-slate-500">루틴 이름</label>
        <input className="mt-2 w-full rounded-lg border border-slate-200 p-3" value={routine.name} onChange={(event) => onUpdateName(event.target.value)} />
      </Card>

      <Card className="space-y-2">
        {routine.items.map((item) => (
          <div key={item.id} className="rounded-lg border border-slate-200 p-3">
            <p className="text-sm text-slate-500">{item.time}</p>
            <input
              value={item.title}
              onChange={(event) => onUpdateItemTitle(item.id, event.target.value)}
              className="mt-1 w-full rounded border border-slate-200 px-2 py-1"
            />
            <div className="mt-2 flex gap-2 text-sm">
              <button onClick={() => onDeleteItem(item.id)} className="rounded bg-red-50 px-2 py-1 text-red-600">
                삭제
              </button>
            </div>
          </div>
        ))}
      </Card>

      <button onClick={onSave} className="w-full rounded-xl bg-brand py-3 font-semibold text-white">
        저장
      </button>
    </div>
  );
}
