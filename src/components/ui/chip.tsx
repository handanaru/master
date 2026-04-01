import { cn } from '@/lib/utils';

export function Chip({ active, children }: { active?: boolean; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'rounded-full border px-3 py-1 text-sm',
        active ? 'border-brand bg-blue-50 text-brand' : 'border-slate-200 bg-white text-slate-600'
      )}
    >
      {children}
    </span>
  );
}
