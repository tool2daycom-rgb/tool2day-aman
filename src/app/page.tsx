import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import {
  IllustBirds,
  IllustDesk,
  IllustPhone,
  IllustShield,
  IllustTalk,
} from "@/components/illustrations";

export default function HomePage() {
  return (
    <AmanShell activeHref="/">
      {/* Hero — Take It Down style */}
      <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 lg:order-1">
          <IllustShield className="mx-auto h-auto w-full max-w-md" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl">
            .أمان
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.35] text-[var(--ink)] sm:text-4xl lg:text-[2.6rem]">
            وجود صور أو تهديدات على الإنترنت محنة مخيفة — لكن الآن أصبحت هناك
            فرصة واضحة للتصرف بهدوء.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--foreground)]">
            أمان منصة عربية تفاعلية ترشد ضحايا الابتزاز والانتهاك الرقمي خطوة
            بخطوة إلى الإجراء الصحيح. لا نطلب صوراً، ولا نسجّل بياناتك الشخصية،
            ونحافظ على خصوصيتك في كل مرحلة.
          </p>
          <Link href="/guide" className="aman-btn mt-8">
            البداية +
          </Link>
        </div>
      </section>

      {/* Three question cards */}
      <section className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          {
            href: "#what",
            title: "ما هي خدمة أمان؟",
            Illust: IllustTalk,
          },
          {
            href: "#who",
            title: "لمن تقدم خدمة أمان؟",
            Illust: IllustBirds,
            highlight: true,
          },
          {
            href: "#how",
            title: "كيف تعمل خدمة أمان؟",
            Illust: IllustPhone,
          },
        ].map((card) => (
          <a
            key={card.title}
            href={card.href}
            className={`rounded-[28px] bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 ${
              card.highlight
                ? "ring-2 ring-[var(--nav-pill)]"
                : "ring-1 ring-black/5"
            }`}
          >
            <card.Illust className="mx-auto h-36 w-full" />
            <h2 className="mt-4 text-lg font-extrabold text-[var(--ink)]">
              {card.title}
            </h2>
            <p className="aman-link mt-3 text-sm">
              اعرف المزيد ↓
            </p>
          </a>
        ))}
      </section>

      {/* What is Aman */}
      <section id="what" className="mt-24 scroll-mt-28">
        <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
          ما هي خدمة أمان؟
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--foreground)]">
          أمان خدمة مجانية وتفاعلية باللغة العربية، تساعدك على فهم ما يجب فعله
          إذا تعرّضت لابتزاز بصور أو فيديو، أو تهديد بدون أدلة، أو عنف جسدي/جنسي.
          نوجّهك إلى الأدوات العالمية المناسبة وأرقام الطوارئ في بلدك — دون أن
          نطلب منك رفع أي محتوى حساس إلى موقعنا.
        </p>
      </section>

      {/* Who */}
      <section
        id="who"
        className="mt-20 grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
      >
        <div>
          <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            لمن تقدم خدمة أمان؟
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
            لأي شخص في العالم العربي يحتاج توجيهاً هادئاً وسرياً: البالغون
            والقاصرون، أو من يساعد شخصاً آخر. إذا كان العمر أقل من 18 سنة نوجّهك
            إلى Take It Down؛ وإذا كان 18 أو أكثر نوجّهك إلى StopNCII — مع شرح
            عربي واضح لكل خطوة.
          </p>
          <Link href="/guide" className="aman-btn mt-8">
            البداية
          </Link>
        </div>
        <IllustDesk className="mx-auto h-auto w-full max-w-sm" />
      </section>

      {/* How it works */}
      <section id="how" className="mt-24 scroll-mt-28">
        <h2 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
          كيف تعمل خدمة أمان؟
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--foreground)]">
          لا يستطيع أي موقع خارجي حذف الصور مباشرة من سيرفرات فيسبوك أو تيك توك.
          لذلك يعتمد الحل الآمن على أدوات عالمية تحوّل الملف على جهازك إلى{" "}
          <strong>بصمة رقمية فريدة (Hash)</strong> دون رفع الصورة الأصلية.
        </p>
        <h3 className="mt-10 text-xl font-extrabold text-[var(--ink)]">
          وهذه هي طريقة العمل:
        </h3>
        <ol className="mt-6 max-w-3xl space-y-5">
          {[
            "تجيب عن أسئلة قصيرة جداً (سؤال واحد في كل شاشة) لنختار المسار المناسب لحالتك وبلدك.",
            "إذا كان هناك محتوى حساس، نرشدك إلى StopNCII أو Take It Down لإنشاء البصمة الرقمية محلياً على جهازك. لا تُرسل الصورة الأصلية إلى أمان.",
            "تُشارك البصمات مع المنصات المشاركة لمساعدتها على اكتشاف المحتوى المطابق ومنعه أو إزالته.",
            "نقدّم أيضاً أرقام الطوارئ والدعم حسب البلد، ومسارات للتهديد بدون صور أو العنف الجسدي.",
          ].map((text, i) => (
            <li key={text} className="flex gap-3 text-base leading-8">
              <span className="aman-step-dot mt-1">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-2xl border border-red-300/70 bg-white p-5 text-sm leading-7 text-[var(--muted)]">
          <strong className="text-[var(--foreground)]">رجاءً تذكّر:</strong> لا
          ترسل الصور أو الفيديوهات عبر واتساب أو البريد لأشخاص غير مختصين. بعد
          إضافة البصمة الرقمية، قد تستعين المنصات بها لفحص خدماتها — فلا تعِد رفع
          المحتوى بنفسك على الشبكات العامة.
        </div>
      </section>

      {/* Not alone banner */}
      <section className="mt-20 overflow-hidden rounded-[28px] bg-[var(--accent-soft)] px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg font-extrabold leading-8 text-[var(--ink)] sm:text-xl">
            والأهم من ذلك: عليك أن تتذكر أنك لست وحدك. لمزيد من المعلومات عن
            الأدوات والمصادر، تصفّح صفحة المصادر والدعم.
          </p>
          <Link href="/resources" className="aman-btn aman-btn-dark shrink-0">
            استعرض المصادر
          </Link>
        </div>
      </section>

      <p className="mt-12 text-center text-xs leading-6 text-[var(--muted)]">
        أمان جزء من{" "}
        <a href="https://tool2day.com" className="underline">
          Tool2Day
        </a>
        . إذا كنت في خطر فوري، اتصل بالطوارئ في بلدك الآن.
      </p>
    </AmanShell>
  );
}
