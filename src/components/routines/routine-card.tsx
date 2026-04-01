import Link from 'next/link';
import { Routine } from '@/types/routine';
import { Card } from '@/components/ui/card';
import { Chip } from '@/components/ui/chip';

export function RoutineCard({ routine }: { routine: Routine }) {
  return (
    <Card className="space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm text-slate-500">{routine.category}</p>
          <h3 className="text-lg font-semibold">{routine.name}</h3>
        </div>
        <Chip>{routine.difficulty}</Chip>
      </div>
      <p className="text-sm text-slate-600">{routine.description}</p>
      <div className="flex flex-wrap gap-2">
        {routine.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      <Link href={`/routines/${routine.id}?mode=realistic`} className="inline-block text-sm font-semibold text-brand">
        루틴 자세히 보기 →
      </Link>
    </Card>
  );
}
