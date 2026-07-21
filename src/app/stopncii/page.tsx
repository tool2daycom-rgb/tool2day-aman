import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "StopNCII بالعربي — للبالغين",
  description:
    "شرح عربي لكيفية استخدام StopNCII.org: إنشاء بصمة رقمية محلياً دون رفع الصورة الأصلية.",
};

export default function StopNciiPage() {
  return (
    <AmanShell narrow activeHref="/resources">
      <p className="text-xs font-bold text-[var(--accent-dark)]">للبالغين · 18+</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
        StopNCII — خطوة بخطوة
      </h1>
      <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
        StopNCII.org أداة عالمية من SWGfL تساعد البالغين على منع إعادة نشر صور
        أو فيديوهات حميمة غير رضائية. الصورة لا تُرفع إلى خوادمهم؛ يُنشأ على
        جهازك بصمة رقمية مشفّرة (Hash) فقط.
      </p>

      <div className="mt-6 rounded-2xl bg-[var(--accent-soft)] p-5">
        <p className="font-extrabold text-[var(--ink)]">لماذا لا نحذف الصور نحن؟</p>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          لا يمكن قانونياً وتقنياً لأي موقع خارجي مسح محتوى من سيرفرات فيسبوك أو
          تيك توك مباشرة. StopNCII يشارك البصمات مع المنصات المشاركة لحظر
          المطابق أو إزالته.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-extrabold text-[var(--ink)]">
        وهذه هي طريقة عمل الخدمة:
      </h2>
      <ol className="mt-5 space-y-4">
        {[
          "افتح الموقع الرسمي من جهاز آمن (يفضّل وضع التصفح الخاص).",
          "اختر إنشاء بصمة للمحتوى الحساس على جهازك.",
          "حدد الملف محلياً — لا تُرسل الصورة الأصلية خارج جهازك عبر هذه الأداة.",
          "تُولَّد بصمة Hash وتُشارك مع المنصات المشاركة.",
          "إذا رُفع محتوى مطابق لاحقاً، تساعد البصمة على اكتشافه ومنعه أو إزالته.",
        ].map((item, i) => (
          <li key={item} className="flex gap-3 text-sm leading-7">
            <span className="aman-step-dot mt-0.5">{i + 1}</span>
            <span className="text-[var(--muted)]">{item}</span>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://stopncii.org"
          target="_blank"
          rel="noopener noreferrer"
          className="aman-btn"
        >
          فتح StopNCII.org
        </a>
        <Link href="/guide" className="aman-btn aman-btn-dark">
          العودة للتوجيه
        </Link>
      </div>

      <p className="mt-6 text-xs leading-6 text-[var(--muted)]">
        إذا كان الشخص المعني أقل من 18 سنة، استخدم{" "}
        <Link href="/take-it-down" className="underline">
          Take It Down
        </Link>
        .
      </p>
    </AmanShell>
  );
}
