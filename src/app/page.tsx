import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export default function HomePage() {
  return (
    <AmanShell>
      <section className="max-w-2xl">
        <p className="text-sm font-semibold text-[var(--accent)]">ملاذ رقمي آمن</p>
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
          <Link
            href="/guide"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
          >
            ابدأ التوجيه الآمن
          </Link>
          <Link
            href="/privacy"
            className="rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--foreground)] ring-1 ring-black/5 backdrop-blur transition hover:bg-white"
          >
            كيف نحمي خصوصيتك؟
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-3">
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
            body: "زر «خروج سريع» أو مفتاح Escape يغلق الموقع فوراً ويفتح صفحة محايدة.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur"
          >
            <h2 className="text-lg font-extrabold tracking-tight">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[32px] bg-[var(--accent)] p-7 text-white sm:mt-12 sm:p-10">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          ماذا يغطي التوجيه؟
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          سؤال واحد في كل شاشة. نبني مساراً مناسباً لحالتك وبلدك — ثم نوجّهك
          للأدوات والأرقام.
        </p>
        <ul className="mt-6 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
          <li className="rounded-2xl bg-white/10 px-4 py-3">
            ابتزاز بصور/فيديو → StopNCII أو Take It Down
          </li>
          <li className="rounded-2xl bg-white/10 px-4 py-3">
            تهديد بدون صور → بلاغ ودعم
          </li>
          <li className="rounded-2xl bg-white/10 px-4 py-3">
            عنف جسدي/جنسي → طوارئ وطب شرعي
          </li>
          <li className="rounded-2xl bg-white/10 px-4 py-3">
            كل الدول العربية · أرقام طوارئ حقيقية
          </li>
        </ul>
        <Link
          href="/guide"
          className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[var(--accent)]"
        >
          ابدأ الآن
        </Link>
      </section>

      <p className="mt-10 text-center text-xs leading-6 text-[var(--muted)]">
        أمان جزء من{" "}
        <a
          href="https://tool2day.com"
          className="underline hover:text-[var(--foreground)]"
        >
          Tool2Day
        </a>
        . هذا الموقع لا يحل محل الطوارئ. إذا كنت في خطر فوري، اتصل بالشرطة أو
        الخطوط الساخنة المحلية الآن.
      </p>
    </AmanShell>
  );
}
