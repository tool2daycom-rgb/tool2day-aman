import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "تصفح آمن",
  description: "نصائح هادئة للتصفح الخاص عندما قد يكون الجهاز مراقباً.",
};

export default function SafeBrowsingPage() {
  return (
    <AmanShell narrow>
      <div className="mb-6">
        <Link
          href="/guide"
          className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          ← متابعة التوجيه
        </Link>
      </div>

      <article className="rounded-[28px] bg-white/85 p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight">
          هل جهازك آمن للتصفح؟
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          أحياناً يكون المعتدي قريباً أو يراقب الجهاز. هذه نصائح بسيطة — اختر ما
          تستطيعه الآن.
        </p>

        <ol className="mt-6 space-y-3">
          {[
            "استخدم وضع التصفح الخاص (Incognito / Private).",
            "لا تحفظ كلمات المرور ولا تفعّل «تذكّرني» على مواقع حساسة.",
            "امسح السجل لاحقاً إن استخدمت تصفحاً عادياً بالخطأ.",
            "إن أمكن، استخدم جهاز شخص تثق به أو شبكة مختلفة.",
            "أغلق الصفحة بزر «خروج سريع» إذا اقترب أحد فجأة.",
          ].map((item, i) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-white px-4 py-3 text-sm leading-7 ring-1 ring-black/5"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-extrabold text-white">
                {i + 1}
              </span>
              <span className="text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/guide"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white"
          >
            متابعة التوجيه
          </Link>
          <Link
            href="/privacy"
            className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-semibold text-[var(--muted)]"
          >
            الخصوصية
          </Link>
        </div>
      </article>
    </AmanShell>
  );
}
