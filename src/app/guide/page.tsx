import type { Metadata } from "next";
import Link from "next/link";
import { AmanShell } from "@/components/aman-shell";
import { GuideWizard } from "@/components/guide-wizard";

export const metadata: Metadata = {
  title: "ابدأ التوجيه الآمن",
  description:
    "أسئلة قصيرة خطوة بخطوة لتوجيهك للمسار الصحيح — بدون تسجيل أو رفع صور.",
};

export default function GuidePage() {
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
      <GuideWizard />
    </AmanShell>
  );
}
