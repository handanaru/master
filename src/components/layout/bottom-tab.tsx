import Link from 'next/link';
import { cn } from '@/lib/utils';

const tabs = [
  { href: '/', label: '홈' },
  { href: '/explore', label: '탐색' },
  { href: '/today', label: '오늘의 루틴' },
  { href: '/my-routines', label: '내 루틴' }
];

export function BottomTab({ active }: { active: string }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 mx-auto flex w-full max-w-md items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-2 safe-bottom backdrop-blur">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={cn(
            'rounded-xl px-3 py-2 text-sm font-medium',
            active === tab.href ? 'bg-blue-50 text-brand' : 'text-slate-500'
          )}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
