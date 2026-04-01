'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Chip } from '@/components/ui/chip';
import { Card } from '@/components/ui/card';
import { onboardingGoals, personas } from '@/lib/data/content';
import { getOnboardingRecommendations } from '@/lib/data/selectors';
import { OnboardingGoal } from '@/types/app-data';

export default function OnboardingPage() {
  const [goal, setGoal] = useState<OnboardingGoal>('집중력 향상');
  const [personaId, setPersonaId] = useState(personas[0].id);

  const selectedPersona = personas.find((persona) => persona.id === personaId) ?? personas[0];
  const recommendations = useMemo(() => {
    const base = getOnboardingRecommendations(goal);
    return base.filter((routine) => routine.tags.some((tag) => selectedPersona.preferredTags.includes(tag))).slice(0, 3);
  }, [goal, selectedPersona.preferredTags]);

  return (
    <div className="space-y-4 pb-8">
      <h1 className="text-2xl font-bold">온보딩</h1>
      <Card>
        <h2 className="font-semibold">앱 소개</h2>
        <p className="mt-1 text-sm text-slate-600">롤모델 루틴을 먼저 체험한 뒤 나에게 맞는 습관만 골라 저장하세요.</p>
      </Card>

      <Card>
        <h2 className="font-semibold">목표 선택</h2>
        <div className="mt-2 space-y-2">
          {onboardingGoals.map((item) => (
            <button key={item} onClick={() => setGoal(item)} className="w-full text-left">
              <div className="flex items-center justify-between rounded-lg border p-2">
                <span>{item}</span>
                <Chip active={goal === item}>{goal === item ? '선택됨' : '선택'}</Chip>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">페르소나 선택</h2>
        <div className="mt-2 space-y-2">
          {personas.map((persona) => (
            <button key={persona.id} onClick={() => setPersonaId(persona.id)} className="w-full text-left">
              <div className="rounded-lg border p-2">
                <p className="font-medium">{persona.label}</p>
                <p className="text-sm text-slate-500">{persona.description}</p>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">추천 루틴</h2>
        <p className="mt-1 text-sm text-slate-500">선택 목표: {goal}</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-600">
          {recommendations.map((item) => (
            <li key={item.id} className="rounded-lg border border-slate-200 p-2">
              <p className="font-medium text-ink">{item.name}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Link href="/" className="block rounded-xl bg-brand py-3 text-center font-semibold text-white">
        추천 루틴으로 시작하기
      </Link>
    </div>
  );
}
