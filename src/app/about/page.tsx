import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import { IllustShield } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "نبذة عنا",
  description: "لماذا وُجد أمان، وما الذي نعدك به بشأن الخصوصية والتوجيه.",
};

export default function AboutPage() {
  return (
    <AmanShell activeHref="/about" narrow>
      <div className="grid items-center gap-8 sm:grid-cols-[1fr_0.7fr]">
        <div>
          <h1 className="text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            نبذة عنا
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--foreground)]">
            أمان مشروع من Tool2Day صُمم ليكون ملاذاً رقمياً عربياً بسيطاً. لاحظنا
            أن كثيراً من الضحايا يواجهون صفحات طويلة صعبة القراءة تحت الضغط، أو
            أرقاماً بلا توجيه، أو مواقع غربية غير مهيأة ثقافياً ولغوياً.
          </p>
        </div>
        <IllustShield className="mx-auto h-auto w-full max-w-[220px]" />
      </div>

      <div className="mt-10 space-y-6 text-base leading-8 text-[var(--foreground)]">
        <p>
          لذلك بنينا توجيهاً تفاعلياً: سؤال واحد في كل شاشة، لغة هادئة، وزر خروج
          سريع. لا نطلب صوراً، ولا نسجّل حساباً، ولا نستخدم تتبّعاً تسويقياً.
        </p>
        <p>
          مهم أن تعرف: أمان لا يحذف المحتوى من منصات أخرى مباشرة. نرشدك إلى
          الأدوات العالمية الصحيحة (مثل StopNCII وTake It Down) وإلى المسارات
          القانونية والطبية والاجتماعية عند الحاجة.
        </p>
        <p className="rounded-2xl bg-[var(--accent-soft)] p-5 text-sm leading-7">
          المحتوى إرشادي ولا يُعد استشارة قانونية أو طبية. في الخطر الفوري اتصل
          بالطوارئ المحلية فوراً.
        </p>
      </div>

      <Link href="/guide" className="aman-btn mt-10">
        ابدأ التوجيه
      </Link>
    </AmanShell>
  );
}
