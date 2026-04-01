'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BottomTab } from '@/components/layout/bottom-tab';
import { Card } from '@/components/ui/card';
import { getRoutineById } from '@/lib/data/selectors';
import { readSession, SavedRoutine } from '@/lib/state/app-state';

export default function MyRoutinesPage() {
  const [saved, setSaved] = useState<SavedRoutine[]>([]);

  useEffect(() => {
    setSaved(readSession().savedRoutines);
  }, []);

  return (
    <div className="space-y-4 pb-8">
      <h1 className="text-2xl font-bold">내 루틴</h1>

      {saved.length === 0 && (
        <Card>
          <p className="text-sm text-slate-600">아직 저장한 루틴이 없습니다. 회고 화면에서 저장해보세요.</p>
        </Card>
      )}

      {saved.map((savedRoutine) => {
        const source = getRoutineById(savedRoutine.sourceRoutineId);
        return (
          <Card key={savedRoutine.id} className="space-y-3">
            <div>
              <h2 className="font-semibold">{savedRoutine.name}</h2>
              <p className="text-sm text-slate-500">기반 롤모델: {source.roleModel}</p>
              <p className="text-sm text-slate-500">루틴 항목 수: {savedRoutine.items.length}개</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link href={`/today?routineId=${source.id}&mode=realistic`} className="rounded-lg bg-brand px-3 py-2 text-center text-white">
                시작
              </Link>
              <Link href={`/my-routines/${savedRoutine.id}/edit`} className="rounded-lg border border-slate-300 px-3 py-2 text-center">
                수정
              </Link>
            </div>
          </Card>
        );
      })}
      <BottomTab active="/my-routines" />
    </div>
  );
}
