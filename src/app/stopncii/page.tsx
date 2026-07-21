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
    <AmanShell narrow>
      <Back />
      <article className="rounded-[28px] bg-white/85 p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <p className="text-xs font-bold text-[var(--accent)]">للبالغين · 18+</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          StopNCII — خطوة بخطوة
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          StopNCII.org أداة عالمية من SWGfL تساعد البالغين على منع إعادة نشر صور
          أو فيديوهات حميمة غير رضائية. الصورة لا تُرفع إلى خوادمهم؛ يُنشأ على
          جهازك بصمة رقمية مشفّرة (Hash) فقط.
        </p>

        <Callout title="لماذا لا نحذف الصور نحن؟">
          لا يمكن قانونياً وتقنياً لأي موقع خارجي مسح محتوى من سيرفرات فيسبوك أو
          تيك توك أو غيرهما مباشرة. StopNCII يشارك البصمات مع المنصات المشاركة
          لحظر المطابق أو إزالته.
        </Callout>

        <Steps
          items={[
            "افتح الموقع الرسمي من جهاز آمن (يفضّل وضع التصفح الخاص).",
            "اختر إنشاء بصمة للمحتوى الحساس على جهازك.",
            "حدد الملف محلياً — لا تُرسل الصورة الأصلية خارج جهازك عبر هذه الأداة.",
            "تُولَّد بصمة Hash وتُشارك مع المنصات المشاركة (مثل Meta وTikTok وغيرها حسب الشراكات الحالية).",
            "إذا رُفع محتوى مطابق لاحقاً، تساعد البصمة على اكتشافه ومنعه أو إزالته.",
            "يمكنك أيضاً الإبلاغ داخل كل منصة عبر أدوات الإبلاغ الرسمية.",
          ]}
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://stopncii.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-white"
          >
            فتح StopNCII.org
          </a>
          <Link
            href="/guide"
            className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-semibold text-[var(--muted)]"
          >
            العودة للتوجيه
          </Link>
        </div>

        <p className="mt-6 text-xs leading-6 text-[var(--muted)]">
          إذا كان الشخص المعني أقل من 18 سنة، استخدم{" "}
          <Link href="/take-it-down" className="underline">
            Take It Down
          </Link>{" "}
          بدل StopNCII.
        </p>
      </article>
    </AmanShell>
  );
}

function Back() {
  return (
    <div className="mb-6">
      <Link
        href="/guide"
        className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← العودة للتوجيه
      </Link>
    </div>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 rounded-2xl bg-[var(--accent-soft)] p-4">
      <p className="text-sm font-extrabold">{title}</p>
      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{children}</p>
    </div>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="mt-6 space-y-3">
      {items.map((item, i) => (
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
  );
}
