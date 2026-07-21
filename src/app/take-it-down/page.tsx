import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "Take It Down بالعربي — للقاصرين",
  description:
    "شرح عربي لأداة Take It Down التابعة لـ NCMEC لمن هم دون 18 سنة.",
};

export default function TakeItDownPage() {
  return (
    <AmanShell narrow>
      <div className="mb-6">
        <Link
          href="/guide"
          className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          ← العودة للتوجيه
        </Link>
      </div>

      <article className="rounded-[28px] bg-white/85 p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <p className="text-xs font-bold text-[var(--accent)]">للقاصرين · أقل من 18</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          Take It Down — خطوة بخطوة
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          Take It Down خدمة من المركز الوطني للأطفال المفقودين والمستغلين
          (NCMEC) مخصصة لمن هم دون 18 سنة، أو لمن يساعدون قاصراً. تعمل عبر بصمة
          رقمية محلية مشابهة لـ StopNCII — دون الحاجة لرفع الصورة الأصلية إلى
          أمان.
        </p>

        <div className="mt-6 rounded-2xl bg-[var(--accent-soft)] p-4">
          <p className="text-sm font-extrabold">الفرق المهم</p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
            StopNCII للبالغين. Take It Down للقاصرين. اختيار الأداة الصحيحة يزيد
            فرص الحماية.
          </p>
        </div>

        <ol className="mt-6 space-y-3">
          {[
            "استخدم جهازاً آمناً، ويفضّل مع شخص بالغ موثوق إن أمكن.",
            "افتح موقع Take It Down الرسمي.",
            "اتبع التعليمات لإنشاء بصمة المحتوى محلياً على الجهاز.",
            "لا ترسل الصور عبر واتساب أو البريد لأشخاص غير مختصين.",
            "أبلغ أيضاً عبر أدوات الإبلاغ داخل المنصات، وقدّم بلاغاً رسمياً عند القدرة.",
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
          <a
            href="https://takeitdown.ncmec.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white"
          >
            فتح Take It Down
          </a>
          <Link
            href="/stopncii"
            className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-semibold text-[var(--muted)]"
          >
            أنا بالغ — StopNCII
          </Link>
        </div>
      </article>
    </AmanShell>
  );
}
