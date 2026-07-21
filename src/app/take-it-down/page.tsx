import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "Take It Down بالعربي — للقاصرين",
};

export default function TakeItDownPage() {
  return (
    <AmanShell narrow activeHref="/resources">
      <p className="text-xs font-bold text-[var(--accent-dark)]">للقاصرين · أقل من 18</p>
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

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://takeitdown.ncmec.org"
          target="_blank"
          rel="noopener noreferrer"
          className="aman-btn"
        >
          فتح Take It Down
        </a>
        <Link href="/stopncii" className="aman-btn aman-btn-dark">
          أنا بالغ — StopNCII
        </Link>
      </div>
    </AmanShell>
  );
}
