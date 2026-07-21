import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import { ArtFrame } from "@/components/art-frame";
import { GuideHelplines } from "@/components/guide-helplines";
import { IllustProtectHand } from "@/components/illustrations";
import { STOPNCII_CREATE_CASE } from "@/lib/official-tools";

export const metadata: Metadata = {
  title: "StopNCII بالعربي — للبالغين",
  description:
    "شرح عربي لكيفية استخدام StopNCII.org: إنشاء بصمة رقمية محلياً دون رفع الصورة الأصلية.",
};

type Props = {
  searchParams: Promise<{ country?: string }>;
};

export default async function StopNciiPage({ searchParams }: Props) {
  const { country } = await searchParams;

  return (
    <AmanShell narrow activeHref="/resources">
      <div className="mb-6 rounded-[22px] bg-[var(--accent-soft)] p-4 text-sm leading-7 text-[var(--ink)]">
        وصلتَ إلى المسار المناسب للبالغين (18+). اضغط الزر الأخضر لفتح الأداة
        الرسمية فوراً، أو اقرأ الشرح العربي أولاً.
      </div>

      <a
        href={STOPNCII_CREATE_CASE}
        target="_blank"
        rel="noopener noreferrer"
        className="aman-btn w-full text-center sm:w-auto"
      >
        ابدأ قضية StopNCII الآن
      </a>

      <p className="mt-8 text-xs font-bold text-[var(--accent-dark)]">للبالغين · 18+</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--ink)]">
        StopNCII — خطوة بخطوة
      </h1>
      <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
        StopNCII.org أداة عالمية من SWGfL تساعد البالغين على منع إعادة نشر صور
        أو فيديوهات حميمة غير رضائية. الصورة لا تُرفع إلى خوادمهم؛ يُنشأ على
        جهازك بصمة رقمية مشفّرة (Hash) فقط.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ArtFrame>
          <Image
            src="/illustrations/stopncii-help.png"
            alt="يد تمتد للمساعدة — لست وحدك"
            width={554}
            height={532}
            className="h-auto w-full bg-white object-contain p-3"
          />
        </ArtFrame>
        <ArtFrame>
          <Image
            src="/illustrations/stopncii-protect.png"
            alt="حماية ودعم لمن يمر بمحنة"
            width={980}
            height={843}
            className="h-auto w-full bg-white object-contain p-3"
          />
        </ArtFrame>
      </div>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
        تذكّر: كل ما تشعر به أمر صحيح ومشروع. أنت ضحية إساءة استخدام — ولست
        وحدك في هذه الرحلة.
      </p>

      <div className="mt-8 rounded-2xl bg-[var(--accent-soft)] p-5">
        <p className="font-extrabold text-[var(--ink)]">لماذا لا نحذف الصور نحن؟</p>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          لا يمكن قانونياً وتقنياً لأي موقع خارجي مسح محتوى من سيرفرات فيسبوك أو
          تيك توك مباشرة. StopNCII يشارك البصمات مع المنصات المشاركة لحظر
          المطابق أو إزالته.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-[24px] bg-white p-6 text-center ring-1 ring-black/5">
        <IllustProtectHand className="size-16" />
        <h2 className="text-xl font-extrabold text-[var(--ink)]">
          نحن نحمي خصوصيتك
        </h2>
        <p className="text-sm leading-7 text-[var(--muted)]">
          التجزئة (Hashing) تتم على جهازك. الصورة الأصلية لا تُرفع إلى خوادم
          الأداة عبر هذه العملية.
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

      <GuideHelplines countryFromQuery={country} />

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={STOPNCII_CREATE_CASE}
          target="_blank"
          rel="noopener noreferrer"
          className="aman-btn"
        >
          ابدأ قضية StopNCII
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
