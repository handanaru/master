'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { BottomTab } from '@/components/layout/bottom-tab';
import { Timeline } from '@/components/routines/timeline';
import { Card } from '@/components/ui/card';
import { getRoutineById } from '@/lib/data/selectors';
import { readSession, saveSelectedRoutine, saveTodayProgress } from '@/lib/state/app-state';

export default function TodayRoutinePage() {
  const searchParams = useSearchParams();
  const session = readSession();

  const routineId = searchParams.get('routineId') ?? session.selectedRoutineId;
  const mode = searchParams.get('mode') === 'original' ? 'original' : session.selectedMode;

  const routine = getRoutineById(routineId);
  const timeline = mode === 'original' ? routine.originalTimeline : routine.realisticTimeline;

  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [skippedIds, setSkippedIds] = useState<string[]>([]);
  const [memo, setMemo] = useState('');

  useEffect(() => {
    const currentSession = readSession();
    const current = currentSession.todayByRoutine[routine.id];
    setCompletedIds(current?.completedIds ?? []);
    setSkippedIds(current?.skippedIds ?? []);
    setMemo(current?.memo ?? '오늘 컨디션 메모를 남겨보세요.');
    saveSelectedRoutine(routine.id, mode);
  }, [mode, routine.id]);

  useEffect(() => {
    saveTodayProgress(routine.id, {
      completedIds,
      skippedIds,
      memo,
      updatedAt: new Date().toISOString()
    });
  }, [completedIds, memo, routine.id, skippedIds]);

  const currentStep = useMemo(
    () => timeline.find((item) => !completedIds.includes(item.id) && !skippedIds.includes(item.id)) ?? timeline[timeline.length - 1],
    [completedIds, skippedIds, timeline]
  );

  const doneCount = completedIds.length + skippedIds.length;
  const progress = Math.round((doneCount / timeline.length) * 100);

  const onComplete = () => {
    if (!completedIds.includes(currentStep.id)) {
      setCompletedIds((prev) => [...prev, currentStep.id]);
    }
  };

  const onSkip = () => {
    if (!skippedIds.includes(currentStep.id)) {
      setSkippedIds((prev) => [...prev, currentStep.id]);
    }
  };

  return (
    <div className="space-y-4 pb-8">
      <h1 className="text-2xl font-bold">오늘의 루틴 실행</h1>

      <Card className="space-y-3 border border-blue-200 bg-blue-50">
        <p className="text-sm text-slate-600">지금 해야 할 일</p>
        <h2 className="text-xl font-bold">{currentStep.title}</h2>
        <p className="text-sm text-slate-600">
          {currentStep.time} · {currentStep.description}
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={onComplete} className="rounded-xl bg-brand px-3 py-2 text-white">
            완료
          </button>
          <button onClick={onSkip} className="rounded-xl border border-slate-300 bg-white px-3 py-2">
            건너뛰기
          </button>
        </div>
      </Card>

      <Card className="space-y-2">
        <p className="text-sm text-slate-500">
          전체 진행률 {progress}% (완료 {completedIds.length} / 건너뜀 {skippedIds.length})
        </p>
        <div className="h-2 rounded-full bg-slate-200">
          <div className="h-2 rounded-full bg-brand" style={{ width: `${progress}%` }} />
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold">오늘 타임라인</h3>
        <Timeline items={timeline} highlightId={currentStep.id} />
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold">메모</h3>
        <textarea className="h-24 w-full rounded-xl border border-slate-200 p-3" value={memo} onChange={(event) => setMemo(event.target.value)} />
      </Card>

      <Link href={`/retrospect?routineId=${routine.id}`} className="block rounded-xl bg-ink py-3 text-center font-semibold text-white">
        오늘 회고로 이동
      </Link>

      <BottomTab active="/today" />
    </div>
  );
}
