import { QuickExit } from "@/components/quick-exit";

export default function HomePage() {
  return (
    <div className="aman-bg relative min-h-screen">
      <QuickExit />

      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 pb-2 pt-16 sm:px-8 sm:pt-20">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-lg font-extrabold text-white shadow-sm">
            أ
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight">أمان</p>
            <p className="text-xs text-[var(--muted)]">aman.tool2day.com</p>
          </div>
        </div>
        <a
          href="https://tool2day.com"
          className="text-xs text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          جزء من Tool2Day
        </a>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
        <section className="max-w-2xl">
          <p className="text-sm font-semibold text-[var(--accent)]">
            ملاذ رقمي آمن
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl">
            لست وحدك.
            <br />
            سنرشدك خطوة بخطوة.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            منصة عربية تفاعلية تساعد ضحايا الابتزاز والانتهاك الرقمي والعنف على
            معرفة الإجراء الصحيح — بهدوء وسرية، وبدون طلب أي صور أو تخزين بيانات
            شخصية.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#start"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
            >
              ابدأ التوجيه الآمن
            </a>
            <a
              href="#privacy"
              className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--foreground)] ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
            >
              كيف نحمي خصوصيتك؟
            </a>
          </div>
        </section>

        <section
          id="privacy"
          className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3"
        >
          {[
            {
              title: "لا صور",
              body: "لا نطلب رفع صور أو فيديوهات. الأدوات العالمية تعمل بالبصمة الرقمية على جهازك فقط.",
            },
            {
              title: "لا بيانات شخصية",
              body: "لا حسابات، لا تسجيل، ولا حفظ لاسمك أو رقمك أو موقعك.",
            },
            {
              title: "خروج فوري",
              body: "زر «خروج سريع» في أعلى الصفحة يغلق الموقع فوراً ويفتح صفحة محايدة.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur"
            >
              <h2 className="text-lg font-extrabold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section
          id="start"
          className="mt-10 rounded-[32px] bg-[var(--accent)] p-7 text-white sm:mt-12 sm:p-10"
        >
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            المسارات قيد الإطلاق
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            نبدأ بمسار الابتزاز الرقمي للبالغين (StopNCII)، ثم مسارات القاصرين
            والتهديد بدون أدلة والعنف الجسدي — مع أرقام طوارئ حسب البلد.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
            <li className="rounded-2xl bg-white/10 px-4 py-3">
              ابتزاز بصور/فيديو — البالغون
            </li>
            <li className="rounded-2xl bg-white/10 px-4 py-3">
              محتوى قاصرين — Take It Down
            </li>
            <li className="rounded-2xl bg-white/10 px-4 py-3">
              تهديد أو عنف بدون أدلة
            </li>
            <li className="rounded-2xl bg-white/10 px-4 py-3">
              دعم نفسي وخطوط وطنية
            </li>
          </ul>
        </section>

        <p className="mt-10 text-center text-xs leading-6 text-[var(--muted)]">
          أمان جزء من{" "}
          <a href="https://tool2day.com" className="underline hover:text-[var(--foreground)]">
            Tool2Day
          </a>
          . هذا الموقع لا يحل محل الطوارئ. إذا كنت في خطر فوري، اتصل بالشرطة أو
          الخطوط الساخنة المحلية الآن.
        </p>
      </main>
    </div>
  );
}
