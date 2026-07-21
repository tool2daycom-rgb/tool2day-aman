import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import { GuideHelplines } from "@/components/guide-helplines";
import { TAKE_IT_DOWN_CREATE_CASE } from "@/lib/official-tools";

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
        وصلتَ إلى المسار المناسب للقاصرين (أقل من 18). اضغط الزر لفتح Take It
        Down الرسمي فوراً، أو اقرأ الشرح العربي أولاً.
      </div>

      <a
        href={TAKE_IT_DOWN_CREATE_CASE}
        target="_blank"
        rel="noopener noreferrer"
        className="aman-btn w-full text-center sm:w-auto"
      >
        ابدأ قضية Take It Down الآن
      </a>

      <p className="mt-8 text-xs font-bold text-[var(--accent-dark)]">
        للقاصرين · أقل من 18
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
        Take It Down — خطوة بخطوة
      </h1>
      <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
        Take It Down خدمة من المركز الوطني للأطفال المفقودين والمستغلين (NCMEC)
        مخصصة لمن هم دون 18 سنة، أو لمن يساعدون قاصراً. تعمل عبر بصمة رقمية محلية
        — دون الحاجة لرفع الصورة الأصلية إلى أمان.
      </p>

      <div className="mt-6 rounded-2xl bg-[var(--accent-soft)] p-5">
        <p className="font-extrabold text-[var(--ink)]">الفرق المهم</p>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          StopNCII للبالغين. Take It Down للقاصرين. اختيار الأداة الصحيحة يزيد
          فرص الحماية.
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

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={TAKE_IT_DOWN_CREATE_CASE}
          target="_blank"
          rel="noopener noreferrer"
          className="aman-btn"
        >
          ابدأ قضية Take It Down
        </a>
        <Link href="/stopncii" className="aman-btn aman-btn-dark">
          أنا بالغ — StopNCII
        </Link>
      </div>
    </AmanShell>
  );
}
