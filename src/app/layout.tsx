import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aman.tool2day.com"),
  title: {
    default: "أمان — ملاذ آمن للتوجيه الرقمي",
    template: "%s · أمان",
  },
  description:
    "منصة عربية تفاعلية توجّه ضحايا الابتزاز والانتهاك الرقمي خطوة بخطوة — بدون طلب صور أو تخزين بيانات شخصية.",
  openGraph: {
    title: "أمان · Tool2Day",
    description:
      "توجيه آمن وسري خطوة بخطوة. لا نطلب صوراً ولا نخزّن بيانات شخصية.",
    url: "https://aman.tool2day.com",
    siteName: "أمان",
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
