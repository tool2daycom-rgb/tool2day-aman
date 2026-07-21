import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "الخصوصية",
  description:
    "كيف يعمل أمان بدون طلب صور أو تخزين بيانات شخصية، وبدون تتبع غير ضروري.",
};

export default function PrivacyPage() {
  return (
    <AmanShell narrow>
      <div className="mb-6">
        <Link
          href="/"
          className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          ← العودة للرئيسية
        </Link>
      </div>

      <article className="rounded-[28px] bg-white/85 p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight">الخصوصية</h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          أمان صُمم ليكون ملاذاً رقمياً هادئاً. الثقة تبدأ من عدم طلب ما لا نحتاجه.
        </p>

        <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
          <li>
            <strong className="text-[var(--foreground)]">لا صور ولا فيديوهات.</strong>{" "}
            لا نطلب رفع أي محتوى حساس إلى خوادمنا.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">لا حساب ولا تسجيل.</strong>{" "}
            لا نطلب اسماً ولا جوالاً ولا بريداً لاستخدام التوجيه.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">اختيارات المسار فقط.</strong>{" "}
            قد تُحفظ إجابات التوجيه مؤقتاً في sessionStorage على جهازك فقط لتسهيل
            الرجوع داخل الجلسة، وتُمسح عند إغلاق التبويب أو اختيار «ابدأ من جديد».
          </li>
          <li>
            <strong className="text-[var(--foreground)]">بدون تتبع تسويقي.</strong>{" "}
            لا نستخدم Google Analytics ولا بكسل إعلاني في هذا الموقع.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">خروج سريع.</strong> زر
            أعلى الصفحة (أو مفتاح Escape) ينقلك فوراً إلى صفحة محايدة.
          </li>
        </ul>

        <p className="mt-6 text-xs leading-6 text-[var(--muted)]">
          أمان جزء من Tool2Day. المحتوى إرشادي ولا يُعد استشارة قانونية أو طبية.
          في الخطر الفوري اتصل بالطوارئ المحلية.
        </p>
      </article>
    </AmanShell>
  );
}
