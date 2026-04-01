'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { notFound, useParams, useSearchParams } from 'next/navigation';
import { Timeline } from '@/components/routines/timeline';
import { Chip } from '@/components/ui/chip';
import { Card } from '@/components/ui/card';
import { routines } from '@/lib/data/routines';
import { saveSelectedRoutine } from '@/lib/state/app-state';

export default function RoutineDetailPage() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<'original' | 'realistic'>(
    searchParams.get('mode') === 'original' ? 'original' : 'realistic'
  );

  const routine = useMemo(() => routines.find((item) => item.id === params.id), [params.id]);
  if (!routine) notFound();

  const timeline = mode === 'original' ? routine.originalTimeline : routine.realisticTimeline;

  return (
    <div className="space-y-4 pb-8">
      <Link href="/explore" className="text-sm text-slate-500">
        ← 탐색으로
      </Link>
      <header className="space-y-2">
        <p className="text-sm text-slate-500">{routine.category}</p>
        <h1 className="text-2xl font-bold">{routine.name}</h1>
        <div className="flex flex-wrap gap-2">
          <Chip>{routine.difficulty}</Chip>
          {routine.keywords.map((keyword) => (
            <Chip key={keyword}>{keyword}</Chip>
          ))}
        </div>
        <p className="text-slate-600">{routine.description}</p>
      </header>

      <Card>
        <h2 className="font-semibold">루틴 특징</h2>
        <p className="mt-1 text-sm text-slate-600">{routine.recommendation}</p>
      </Card>

      <Card className="space-y-3">
        <div className="flex gap-2">
          <button onClick={() => setMode('original')}>
            <Chip active={mode === 'original'}>원본형</Chip>
          </button>
          <button onClick={() => setMode('realistic')}>
            <Chip active={mode === 'realistic'}>현실형</Chip>
          </button>
        </div>
        <Timeline items={timeline} />
      </Card>

      <Link
        href={`/today?routineId=${routine.id}&mode=${mode}`}
        onClick={() => saveSelectedRoutine(routine.id, mode)}
        className="block rounded-xl bg-brand px-4 py-3 text-center font-semibold text-white"
      >
        {mode === 'original' ? '원본형으로 시작하기' : '현실형으로 시작하기'}
      </Link>
    </div>
  );
}
