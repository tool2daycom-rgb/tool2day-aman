import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import { GuideWizard } from "@/components/guide-wizard";

export const metadata: Metadata = {
  title: "البداية — التوجيه الآمن",
  description:
    "أسئلة قصيرة خطوة بخطوة لتوجيهك للمسار الصحيح — بدون تسجيل أو رفع صور.",
};

export default function GuidePage() {
  return (
    <AmanShell narrow activeHref="/">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--ink)] sm:text-3xl">
            البداية
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            سؤال واحد في كل شاشة · بدون صور · بدون تسجيل
          </p>
        </div>
        <Link href="/" className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)]">
          العودة
        </Link>
      </div>
      <GuideWizard />
    </AmanShell>
  );
}
