import type { Metadata } from "next";
import { AmanShell } from "@/components/aman-shell";
import { AgeEntryBoxes } from "@/components/age-entry-boxes";
import { GuideHelplines } from "@/components/guide-helplines";

export const metadata: Metadata = {
  title: "Take It Down بالعربي — للقاصرين",
};

type Props = {
  searchParams: Promise<{ country?: string }>;
};

export default async function TakeItDownPage({ searchParams }: Props) {
  const { country } = await searchParams;

  return (
    <AmanShell narrow activeHref="/resources">
      <div className="mb-6 rounded-[22px] bg-[var(--accent-soft)] p-4 text-sm leading-7 text-[var(--ink)]">
        وصلتَ إلى المسار المناسب للقاصرين (أقل من 18). اختر المربع المناسب لفتح
        الأداة الرسمية فوراً، أو اقرأ الشرح العربي أولاً.
      </div>

      <AgeEntryBoxes highlight="minor" />

      <p className="mt-8 text-xs font-bold text-[var(--accent-dark)]">
        للقاصرين · أقل من 18
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
        خطوة بخطوة
      </h1>
      <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
        Take It Down خدمة من المركز الوطني للأطفال المفقودين والمستغلين (NCMEC)
        مخصصة لمن هم دون 18 سنة، أو لمن يساعدون قاصراً. تعمل عبر بصمة رقمية محلية
        — دون الحاجة لرفع الصورة الأصلية إلى أمان.
      </p>

      <div className="mt-6 rounded-2xl bg-[var(--accent-soft)] p-5">
        <p className="font-extrabold text-[var(--ink)]">الفرق المهم</p>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          +18 يستخدم StopNCII. القاصر أقل من 18 يستخدم Take It Down.
        </p>
      </div>

      <ol className="mt-8 space-y-4">
        {[
          "استخدم جهازاً آمناً، ويفضّل مع شخص بالغ موثوق إن أمكن.",
          "افتح موقع Take It Down الرسمي.",
          "اتبع التعليمات لإنشاء بصمة المحتوى محلياً على الجهاز.",
          "لا ترسل الصور عبر واتساب أو البريد لأشخاص غير مختصين.",
          "أبلغ أيضاً عبر أدوات الإبلاغ داخل المنصات، وقدّم بلاغاً رسمياً عند القدرة.",
        ].map((item, i) => (
          <li key={item} className="flex gap-3 text-sm leading-7">
            <span className="aman-step-dot mt-0.5">{i + 1}</span>
            <span className="text-[var(--muted)]">{item}</span>
          </li>
        ))}
      </ol>

      <GuideHelplines countryFromQuery={country} />

      <AgeEntryBoxes highlight="minor" />
    </AmanShell>
  );
}
