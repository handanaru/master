import { RoutineStep } from '@/types/routine';
import { cn } from '@/lib/utils';

export function Timeline({ items, highlightId }: { items: RoutineStep[]; highlightId?: string }) {
  return (
    <ol className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            'rounded-xl border border-slate-200 bg-white p-3',
            item.id === highlightId && 'border-brand bg-blue-50'
          )}
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold">{item.time}</p>
            <span className="text-xs text-slate-500">강도 {item.intensity}</span>
          </div>
          <p className="mt-1 font-medium">{item.title}</p>
          <p className="text-sm text-slate-600">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
