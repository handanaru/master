import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '대가의 습관 | 웹 MVP',
  description: '롤모델 루틴 체험 기반 습관 설계 서비스 MVP'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-auto min-h-screen w-full max-w-md px-4 pb-24 pt-6">{children}</main>
      </body>
    </html>
  );
}
