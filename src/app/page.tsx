'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { BottomTab } from '@/components/layout/bottom-tab';
import { RoutineCard } from '@/components/routines/routine-card';
import { Card } from '@/components/ui/card';
import { retrospectivesSeed } from '@/lib/data/routines';
import { getRecommendedRoutines, getRoutineById } from '@/lib/data/selectors';
import { readSession } from '@/lib/state/app-state';

export default function HomePage() {
  const [activeRoutineId, setActiveRoutineId] = useState<string | null>(null);
  const [doneCount, setDoneCount] = useState(0);
  const featured = getRecommendedRoutines(2);

  useEffect(() => {
    const session = readSession();
    if (!session.selectedRoutineId) return;
    const progress = session.todayByRoutine[session.selectedRoutineId];
    setActiveRoutineId(session.selectedRoutineId);
    setDoneCount((progress?.completedIds.length ?? 0) + (progress?.skippedIds.length ?? 0));
  }, []);

  const activeRoutine = useMemo(() => getRoutineById(activeRoutineId), [activeRoutineId]);
  const activeTimeline = activeRoutine.realisticTimeline;
  const progress = Math.round((doneCount / activeTimeline.length) * 100);
  const nextTask = activeTimeline[Math.min(doneCount, activeTimeline.length - 1)];

  return (
    <div className="space-y-4">
      <header>
        <p className="text-sm text-slate-500">대가의 습관 MVP</p>
        <h1 className="text-2xl font-bold">오늘도 루틴을 설계하는 하루</h1>
      </header>

      <Card className="space-y-3 bg-gradient-to-br from-blue-600 to-sky-500 text-white">
        <p className="text-sm">오늘의 루틴</p>
        <h2 className="text-xl font-bold">{activeRoutine.name}</h2>
        <p className="text-sm opacity-90">진행률 {progress}% · 다음 할 일: {nextTask.time} {nextTask.title}</p>
        <div className="h-2 rounded-full bg-white/30">
          <div className="h-2 rounded-full bg-white" style={{ width: `${progress}%` }} />
        </div>
        <Link href={`/today?routineId=${activeRoutine.id}`} className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand">
          지금 실행하기
        </Link>
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold">추천 루틴</h3>
        <div className="space-y-3">
          {featured.map((routine) => (
            <RoutineCard key={routine.id} routine={routine} />
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold">최근 회고 요약</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          {retrospectivesSeed.map((item) => (
            <li key={item.date} className="flex items-center justify-between rounded-xl border border-slate-100 p-2">
              <span>{item.summary}</span>
              <span className="text-slate-400">{item.date}</span>
            </li>
          ))}
        </ul>
      </Card>
      <BottomTab active="/" />
    </div>
  );
}
