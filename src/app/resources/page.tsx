import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import { ArtFrame, LineArtPhoto } from "@/components/art-frame";
import { IllustWomanPeace } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "المصادر والدعم",
  description:
    "أدوات عالمية، أرقام طوارئ عربية، ومسارات دعم لضحايا الابتزاز والانتهاك الرقمي.",
};

export default function ResourcesPage() {
  return (
    <AmanShell activeHref="/resources" narrow>
      <div className="grid items-center gap-6 rounded-[28px] bg-[var(--accent-soft)] px-6 py-8 sm:grid-cols-[1fr_160px] sm:px-8">
        <div>
          <p className="text-lg font-extrabold leading-8 text-[var(--ink)] sm:text-xl">
            والأهم من ذلك عليك أن تتذكر أنك لست وحدك! لمزيد من المعلومات عن هذه
            الخدمة والمصادر الأخرى، ابدأ من هنا.
          </p>
          <Link href="/guide" className="aman-btn aman-btn-dark mt-6">
            ابدأ التوجيه
          </Link>
        </div>
        <ArtFrame className="mx-auto w-full max-w-[160px]">
          <IllustWomanPeace className="h-auto w-full" />
        </ArtFrame>
      </div>

      <div className="mx-auto mt-10 max-w-xs">
        <LineArtPhoto
          src="/illustrations/portrait-peace.png"
          alt="رسم خطّي داعم"
        />
      </div>

      <h1 className="mt-14 text-center text-3xl font-extrabold text-[var(--muted)] sm:text-4xl">
        المصادر والدعم
      </h1>

      <div className="mt-10 grid gap-6">
        {[
          {
            title: "StopNCII — للبالغين (18+)",
            body: "إذا أردت منع إعادة نشر صور أو فيديوهات حميمة غير رضائية وأنت بالغ، استخدم StopNCII. الشرح العربي متوفر داخل أمان.",
            href: "/stopncii",
            cta: "تصفح المصدر",
          },
          {
            title: "Take It Down — للقاصرين",
            body: "إذا كان العمر أقل من 18 سنة، أو تساعد قاصراً، فالأداة المناسبة هي Take It Down التابعة لـ NCMEC.",
            href: "/take-it-down",
            cta: "تصفح المصدر",
          },
          {
            title: "أرقام الطوارئ حسب البلد",
            body: "إذا كنت في خطر فوري أو تحتاج جهات محلية، ابدأ التوجيه واختر بلدك لعرض الأرقام المناسبة.",
            href: "/guide",
            cta: "اختر بلدك",
          },
          {
            title: "التصفح الآمن",
            body: "إذا كان هناك احتمال أن الجهاز مراقب، راجع نصائح وضع التصفح الخاص والخروج السريع.",
            href: "/safe-browsing",
            cta: "اعرف المزيد",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5"
          >
            <h2 className="text-xl font-extrabold text-[var(--ink)]">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {item.body}
            </p>
            <Link href={item.href} className="aman-link mt-4 inline-flex text-sm">
              {item.cta} ←
            </Link>
          </article>
        ))}
      </div>
    </AmanShell>
  );
}
