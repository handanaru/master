import { cn } from '@/lib/utils';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn('rounded-2xl bg-white p-4 shadow-card', className)}>{children}</section>;
}
