import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "المصادر والدعم",
  description:
    "مصادر دعم Take It Down وNCMEC، وأدوات أمان للتوجيه العربي الآمن.",
};

const EXTERNAL = {
  takeItDownResources:
    "https://takeitdown.ncmec.org/ar/%d8%a7%d9%84%d9%85%d8%b5%d8%a7%d8%af%d8%b1-%d9%88%d8%a7%d9%84%d8%af%d8%b9%d9%85/",
  explicitContent:
    "https://www.missingkids.org/gethelpnow/isyourexplicitcontentoutthere",
  cyberTip: "https://www.missingkids.org/gethelpnow/cybertipline",
  mentalHealth: "https://www.missingkids.org/gethelpnow/support",
  takeItDown: "https://takeitdown.ncmec.org/ar/",
  ncmec: "https://www.missingkids.org/",
} as const;

export default function ResourcesPage() {
  return (
    <AmanShell activeHref="/resources" narrow>
      <div className="rounded-[28px] bg-[#f0f0f0] px-6 py-10 text-center sm:px-10">
        <h1 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
          المصادر والدعم
        </h1>
        <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-6">
          <a
            href={EXTERNAL.takeItDown}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5"
          >
            <Image
              src="/partners/take-it-down-logo.svg"
              alt="Take It Down"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          </a>
          <a
            href={EXTERNAL.ncmec}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5"
          >
            <Image
              src="/partners/ncmec-logo.png"
              alt="National Center for Missing & Exploited Children"
              width={200}
              height={55}
              className="h-10 w-auto"
            />
          </a>
        </div>
      </div>

      <p className="mt-10 text-base leading-8 text-[var(--foreground)]">
        نوع المساعدة يختلف من شخص لآخر. هناك العديد من الطرق التي تحصل بها على
        الدعم من المركز الوطني للأطفال المفقودين والمستغَلين.
      </p>

      {/* Section 1 — platform reporting */}
      <section className="mt-12 grid items-start gap-6 sm:grid-cols-[1fr_180px]">
        <div>
          <p className="text-base leading-8 text-[var(--foreground)]">
            إذا أردت مزيداً من المساعدة لإزالة المحتوى على الإنترنت من موقع معين
            بما في ذلك المعلومات بشأن الإبلاغ مباشرة على المنصات المختلفة عبر
            الإنترنت:
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
            قم بزيارة{" "}
            <a
              href={EXTERNAL.explicitContent}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--accent-dark)] underline"
            >
              MissingKids.org/IsYourExplicitContentOutThere
            </a>
            : لمعلومات عن مصادر دعم أخرى يمكن للمركز القومي للأطفال المفقودين أو
            المستغلين توفيرها والحصول على تعليمات خطوة بخطوة بشأن طريقة التواصل
            مع منصة عبر الإنترنت مباشرة لإلغاء صورك غير اللائقة أو مقاطع الفيديو
            الجنسية الفاضحة. في بعض الأحيان يمكن أن يكون هذا هو المسار الأسرع
            لإزالة صورك أو فيديوهاتك ويمكن تنبيه المنصة لتقديم بلاغ إلى المركز
            القومي للأطفال المفقودين أو المستغلين مع معلومات إضافية قيمة.
          </p>
          <a
            href={EXTERNAL.explicitContent}
            target="_blank"
            rel="noopener noreferrer"
            className="aman-btn aman-btn-dark mt-6 w-full sm:w-auto"
          >
            هل المحتوى الفاضح الخاص بك متاح بالفعل؟
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
          <Image
            src="/partners/support-platforms.jpg"
            alt=""
            width={388}
            height={388}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Section 2 — CyberTipline */}
      <section className="mt-14 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <div className="grid items-start gap-6 sm:grid-cols-[1fr_200px]">
          <div>
            <p className="text-base font-extrabold leading-8 text-[var(--ink)]">
              إذا أردت الإبلاغ عن أي شخص يقوم بتهديدك بهذه الصور أو أي أشكال أخرى
              من الاستغلال:
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
              يقوم المركز القومي للأطفال المفقودين أو المستغلين بتشغيل نظام
              CyberTipline – وهو نظام إبلاغ عبر الإنترنت لجميع أنواع الاستغلال
              الجنسي. يمكنك تقديم بلاغ عبر CyberTipline، حتى لو كنت قد أرسلت
              بالفعل الرمز الرقمي المميز لصورتك أو الفيديو الخاص بك لـ Take It
              Down. تتاح بلاغات CyberTipline لسلطات إنفاذ القوانين من أجل إجراء
              التحريات الممكنة.
            </p>
          </div>
          <a
            href={EXTERNAL.cyberTip}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-full max-w-[200px] overflow-hidden rounded-2xl bg-[#f7f7f7] p-3 ring-1 ring-black/8"
          >
            <Image
              src="/partners/cybertipline-logo.jpg"
              alt="CyberTipline — NCMEC"
              width={264}
              height={154}
              className="h-auto w-full object-contain"
            />
            <p className="mt-2 text-center text-[11px] text-[var(--muted)]" dir="ltr">
              CyberTipline.org · 1-800-THE-LOST
            </p>
          </a>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10 sm:hidden">
          <Image
            src="/partners/support-report.jpg"
            alt=""
            width={388}
            height={388}
            className="h-auto w-full object-cover"
          />
        </div>
        <a
          href={EXTERNAL.cyberTip}
          target="_blank"
          rel="noopener noreferrer"
          className="aman-btn aman-btn-dark mt-6 w-full text-center sm:w-auto"
        >
          زر CyberTipline التابع للمركز القومي للأطفال المفقودين أو المستغلين
        </a>
      </section>

      {/* Section 3 — US mental health */}
      <section className="mt-14 rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
        <div className="grid items-start gap-6 sm:grid-cols-[1fr_180px]">
          <div>
            <p className="text-base font-extrabold leading-8 text-[var(--ink)]">
              إذا كنت في الولايات المتحدة وترغب في مزيد من المعلومات بشأن الدعم
              النفسي:
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]">
              يمكنك النقر أدناه لمعرفة المزيد عن خدمات الصحة النفسية التابعة
              للمركز القومي للأطفال المفقودين أو المستغلين وهناك أكثر من طريقة
              لطلب المساعدة: اتصل على الرقم{" "}
              <span dir="ltr" className="font-bold">
                1-800-THE-LOST (1-800-843-5678)
              </span>{" "}
              أو أرسل رسالة نصية إلى نفس الرقم، وأرسل بريداً إلكترونياً إلى{" "}
              <a
                href="mailto:TakeItDown@ncmec.org"
                className="font-bold text-[var(--accent-dark)] underline"
                dir="ltr"
              >
                TakeItDown@ncmec.org
              </a>{" "}
              وسوف يتواصل شخص معك.
            </p>
            <a
              href={EXTERNAL.mentalHealth}
              target="_blank"
              rel="noopener noreferrer"
              className="aman-btn mt-6 w-full text-center sm:w-auto"
            >
              معلومات عن الدعم النفسي
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-black/10">
            <Image
              src="/partners/support-mental.jpg"
              alt=""
              width={388}
              height={388}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center rounded-2xl bg-[#f7f7f7] p-4">
          <Image
            src="/partners/ncmec-logo.png"
            alt="NCMEC"
            width={220}
            height={60}
            className="h-12 w-auto"
          />
        </div>
      </section>

      <p className="mt-8 text-xs leading-6 text-[var(--muted)]">
        الشعارات والصور من مصادر{" "}
        <a
          href={EXTERNAL.takeItDownResources}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Take It Down
        </a>{" "}
        و{" "}
        <a
          href={EXTERNAL.ncmec}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          NCMEC
        </a>
        . أمان يعرضها للتسهيل ولا يستبدل المواقع الرسمية.
      </p>

      <h2 className="mt-16 text-2xl font-extrabold text-[var(--ink)]">
        مصادر أمان الإضافية
      </h2>
      <div className="mt-6 grid gap-4">
        {[
          {
            title: "Take It Down — شرح عربي داخل أمان",
            body: "خطوات استخدام الأداة للقاصرين.",
            href: "/take-it-down",
            cta: "افتح الشرح",
          },
          {
            title: "StopNCII — للبالغين (18+)",
            body: "إذا كان العمر 18 أو أكثر.",
            href: "/stopncii",
            cta: "افتح الشرح",
          },
          {
            title: "أرقام الطوارئ حسب البلد",
            body: "اختر بلدك داخل التوجيه الآمن.",
            href: "/guide",
            cta: "ابدأ التوجيه",
          },
          {
            title: "الموقع الرسمي لـ Take It Down",
            body: "افتح صفحة المصادر الأصلية مباشرة.",
            href: EXTERNAL.takeItDownResources,
            cta: "فتح الموقع",
            external: true,
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[22px] bg-white p-5 shadow-sm ring-1 ring-black/5"
          >
            <h3 className="text-lg font-extrabold text-[var(--ink)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
              {item.body}
            </p>
            {"external" in item && item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="aman-link mt-3 inline-flex text-sm"
              >
                {item.cta} ←
              </a>
            ) : (
              <Link href={item.href} className="aman-link mt-3 inline-flex text-sm">
                {item.cta} ←
              </Link>
            )}
          </article>
        ))}
      </div>
    </AmanShell>
  );
}
