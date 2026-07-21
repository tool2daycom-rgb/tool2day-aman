import Link from "next/link";
import { QuickExit } from "@/components/quick-exit";

type Props = {
  children: React.ReactNode;
  narrow?: boolean;
};

export function AmanShell({ children, narrow = false }: Props) {
  return (
    <div className="aman-bg relative min-h-screen">
      <QuickExit />

      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 pb-2 pt-16 sm:px-8 sm:pt-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-[var(--accent)] text-base font-extrabold text-white shadow-sm">
            أ
          </div>
          <div>
            <p className="text-base font-extrabold tracking-tight">أمان</p>
            <p className="text-[11px] text-[var(--muted)]">بدون تسجيل · بدون صور</p>
          </div>
        </Link>
        <Link
          href="/privacy"
          className="text-xs text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          الخصوصية
        </Link>
      </header>

      <main
        className={`mx-auto px-5 pb-24 pt-8 sm:px-8 ${
          narrow ? "max-w-xl" : "max-w-3xl"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
