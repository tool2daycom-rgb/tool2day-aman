import Link from "next/link";
import Image from "next/image";
import { QuickExit } from "@/components/quick-exit";

const nav = [
  { href: "/", label: "البداية" },
  { href: "/resources", label: "المصادر والدعم" },
  { href: "/about", label: "نبذة عنا" },
  { href: "/faq", label: "الأسئلة الأكثر شيوعاً" },
] as const;

type Props = {
  children: React.ReactNode;
  narrow?: boolean;
  activeHref?: string;
};

export function AmanShell({
  children,
  narrow = false,
  activeHref = "/",
}: Props) {
  return (
    <div className="aman-bg relative min-h-screen">
      <QuickExit />

      <header className="border-b border-black/5 bg-[var(--background)]/95 pt-14 backdrop-blur sm:pt-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2.5 pe-2">
              <Image
                src="/brand/leaves-mark.png"
                alt=""
                width={72}
                height={72}
                className="size-16 object-contain sm:size-[4.5rem]"
                priority
              />
              <span className="text-lg font-extrabold tracking-tight text-[var(--ink)]">
                أمان
              </span>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map((item) => {
                const active = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-3.5 py-2 text-sm font-bold transition ${
                      active
                        ? "bg-[var(--nav-pill)] text-[var(--ink)]"
                        : "text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
            <span className="rounded-full bg-white px-3 py-1.5 ring-1 ring-black/8">
              العربية
            </span>
            <Link href="/privacy" className="hidden sm:inline hover:text-[var(--foreground)]">
              الخصوصية
            </Link>
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-black/5 px-4 py-2 lg:hidden">
          {nav.map((item) => {
            const active = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
                  active
                    ? "bg-[var(--nav-pill)] text-[var(--ink)]"
                    : "text-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main
        className={`mx-auto px-4 pb-20 pt-8 sm:px-8 sm:pt-12 ${
          narrow ? "max-w-3xl" : "max-w-6xl"
        }`}
      >
        {children}
      </main>

      <footer className="bg-[var(--footer)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-xl font-extrabold">أمان</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
              ملاذ رقمي عربي يوجّهك خطوة بخطوة — بدون طلب صور أو تسجيل بيانات
              شخصية.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--accent)]">روابط</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-white">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--accent)]">تذكير مهم</p>
            <p className="mt-3 text-sm leading-7 text-white/65">
              أمان جزء من Tool2Day. المحتوى إرشادي ولا يحل محل الطوارئ أو
              الاستشارة القانونية.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/45 sm:px-8">
          © {new Date().getFullYear()} أمان · Tool2Day. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
