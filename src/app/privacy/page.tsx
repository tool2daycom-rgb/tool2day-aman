import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "الخصوصية",
};

export default function PrivacyPage() {
  return (
    <AmanShell narrow>
      <h1 className="text-3xl font-extrabold text-[var(--ink)]">سياسة الخصوصية</h1>
      <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
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
          قد تُحفظ إجابات التوجيه مؤقتاً في sessionStorage على جهازك فقط، وتُمسح
          عند إغلاق التبويب أو اختيار «ابدأ من جديد».
        </li>
        <li>
          <strong className="text-[var(--foreground)]">بدون تتبع تسويقي.</strong> لا
          نستخدم Google Analytics ولا بكسل إعلاني.
        </li>
        <li>
          <strong className="text-[var(--foreground)]">خروج سريع.</strong> زر أعلى
          الصفحة (أو Escape) ينقلك فوراً إلى صفحة محايدة.
        </li>
      </ul>
      <Link href="/guide" className="aman-btn mt-10">
        ابدأ التوجيه
      </Link>
    </AmanShell>
  );
}
