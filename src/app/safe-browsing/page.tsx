import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "تصفح آمن",
};

export default function SafeBrowsingPage() {
  return (
    <AmanShell narrow activeHref="/resources">
      <h1 className="text-3xl font-extrabold text-[var(--ink)]">
        هل جهازك آمن للتصفح؟
      </h1>
      <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
        أحياناً يكون المعتدي قريباً أو يراقب الجهاز. هذه نصائح بسيطة — اختر ما
        تستطيعه الآن.
      </p>
      <ol className="mt-8 space-y-4">
        {[
          "استخدم وضع التصفح الخاص (Incognito / Private).",
          "لا تحفظ كلمات المرور ولا تفعّل «تذكّرني» على مواقع حساسة.",
          "امسح السجل لاحقاً إن استخدمت تصفحاً عادياً بالخطأ.",
          "إن أمكن، استخدم جهاز شخص تثق به أو شبكة مختلفة.",
          "أغلق الصفحة بزر «خروج سريع» إذا اقترب أحد فجأة.",
        ].map((item, i) => (
          <li key={item} className="flex gap-3 text-sm leading-7">
            <span className="aman-step-dot mt-0.5">{i + 1}</span>
            <span className="text-[var(--muted)]">{item}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/guide" className="aman-btn">
          متابعة التوجيه
        </Link>
        <Link href="/privacy" className="aman-btn aman-btn-dark">
          الخصوصية
        </Link>
      </div>
    </AmanShell>
  );
}
