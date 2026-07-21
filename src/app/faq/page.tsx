import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";

export const metadata: Metadata = {
  title: "الأسئلة الأكثر شيوعاً",
};

const faqs = [
  {
    q: "هل تطلبون صوري أو فيديوهاتي؟",
    a: "لا. أمان لا يطلب رفع أي محتوى حساس. الأدوات العالمية تنشئ بصمة رقمية على جهازك فقط.",
  },
  {
    q: "هل يمكن لأمان حذف الصور من فيسبوك أو تيك توك؟",
    a: "لا يمكن لأي موقع خارجي مسح محتوى مباشرة من سيرفرات منصات أخرى. الحل عبر أدوات مثل StopNCII وTake It Down والإبلاغ الرسمي.",
  },
  {
    q: "ما الفرق بين StopNCII وTake It Down؟",
    a: "StopNCII للبالغين (18+). Take It Down للقاصرين (أقل من 18). كلاهما يعتمد على بصمة رقمية محلية.",
  },
  {
    q: "ماذا لو لم تكن لديّ صور أو أدلة؟",
    a: "شهادة الضحية مهمة. يمكنك الإبلاغ للشرطة أو وحدات الجرائم الإلكترونية، وطلب دعم طبي/نفسي عبر الخطوط الوطنية.",
  },
  {
    q: "هل تحفظون بياناتي؟",
    a: "لا نسجّل اسماً أو جوالاً أو موقعاً. قد تُحفظ اختيارات المسار مؤقتاً على جهازك فقط داخل الجلسة.",
  },
  {
    q: "ماذا يفعل زر الخروج السريع؟",
    a: "يغلق صفحة أمان فوراً ويفتح صفحة محايدة (مثل Google). يمكنك أيضاً الضغط على Escape.",
  },
];

export default function FaqPage() {
  return (
    <AmanShell activeHref="/faq" narrow>
      <h1 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
        الأسئلة الأكثر شيوعاً
      </h1>
      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-[22px] bg-white p-5 shadow-sm ring-1 ring-black/5 open:ring-[var(--nav-pill)]"
          >
            <summary className="cursor-pointer list-none text-base font-extrabold text-[var(--ink)]">
              {item.q}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.a}</p>
          </details>
        ))}
      </div>
      <Link href="/guide" className="aman-btn mt-10">
        البداية +
      </Link>
    </AmanShell>
  );
}
