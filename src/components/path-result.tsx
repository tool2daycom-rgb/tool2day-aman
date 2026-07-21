"use client";

import Link from "next/link";
import { getCountry, type CountryId } from "@/lib/countries";
import type { WizardAnswers } from "@/lib/wizard";

type Props = {
  answers: WizardAnswers;
  onRestart: () => void;
};

export function PathResult({ answers, onRestart }: Props) {
  const country = getCountry(answers.countryId as CountryId | null);

  if (answers.safeNow === false) {
    return (
      <ResultCard
        tone="urgent"
        title="أولويتك الآن: السلامة"
        onRestart={onRestart}
      >
        <p>
          إذا كنت في خطر فوري، اتصل بالطوارئ أو اطلب مساعدة من شخص تثق به في
          مكانك الحالي.
        </p>
        {country ? (
          <Helplines countryId={country.id} urgent />
        ) : (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <a
              href="tel:911"
              className="block rounded-2xl bg-white/15 px-4 py-3 text-center font-bold"
            >
              اتصال طوارئ شائع: 911
            </a>
            <a
              href="tel:999"
              className="block rounded-2xl bg-white/15 px-4 py-3 text-center font-bold"
            >
              اتصال طوارئ شائع: 999
            </a>
          </div>
        )}
        <p className="mt-4 text-sm opacity-80">
          يمكنك العودة لاحقاً عندما تكون في مكان أكثر أماناً لإكمال التوجيه.
        </p>
      </ResultCard>
    );
  }

  if (answers.situation === "physical") {
    return (
      <ResultCard title="مسار العنف الجسدي أو الجنسي" onRestart={onRestart}>
        <CalmIntro forSomeoneElse={answers.forSomeoneElse} />
        <ol className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
          <li>
            <strong className="text-[var(--foreground)]">1. السلامة أولاً.</strong>{" "}
            ابتعد عن مصدر الخطر إن أمكن، واتصل بالطوارئ إذا استمر التهديد.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">2. التوثيق الطبي.</strong>{" "}
            التوجه للطب الشرعي أو قسم الطوارئ يساعد على توثيق الآثار الجسدية
            والنفسية قانونياً — حتى لو لم تكن هناك صور.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">3. الإفادة الرسمية.</strong>{" "}
            شهادة الضحية بلاغ معتبر. لا يُشترط وجود أدلة رقمية لطلب الحماية.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">4. الدعم النفسي.</strong>{" "}
            الخطوط الساخنة ومؤسسات حماية الأسرة موجودة لهذا الغرض.
          </li>
        </ol>
        {country ? <Helplines countryId={country.id} /> : null}
      </ResultCard>
    );
  }

  if (answers.situation === "threat_no_images") {
    return (
      <ResultCard title="مسار التهديد بدون صور" onRestart={onRestart}>
        <CalmIntro forSomeoneElse={answers.forSomeoneElse} />
        <ol className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
          <li>
            <strong className="text-[var(--foreground)]">1. لا تستجب للضغط.</strong>{" "}
            لا تدفع مالاً ولا ترسل مزيداً من المحتوى أو البيانات.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">2. احفظ الأدلة بهدوء.</strong>{" "}
            لقطات شاشة للمحادثات والتهديدات وأرقام الحسابات — بدون مشاركة مع
            أشخاص غير موثوقين.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">3. الإبلاغ الرسمي.</strong>{" "}
            شهادة الضحية كافية لفتح بلاغ لدى الشرطة أو وحدة الجرائم الإلكترونية.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">4. الدعم.</strong> يمكنك
            طلب المساعدة من الخطوط الوطنية حتى بدون أدلة مادية.
          </li>
        </ol>
        {country ? (
          <>
            <Helplines countryId={country.id} />
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {country.cyberNote}
            </p>
          </>
        ) : null}
      </ResultCard>
    );
  }

  const isMinor =
    answers.ageGroup === "minor" || answers.ageGroup === "unsure";
  const isAdult =
    answers.ageGroup === "adult" || answers.ageGroup === "unsure";

  return (
    <ResultCard
      title={
        answers.forSomeoneElse
          ? "مسار المساعدة لشخص آخر — محتوى حساس"
          : "مسار الابتزاز بصور أو فيديو"
      }
      onRestart={onRestart}
    >
      <CalmIntro forSomeoneElse={answers.forSomeoneElse} />

      <div className="mt-5 rounded-2xl bg-[var(--accent-soft)] p-4 text-sm leading-7 text-[var(--foreground)]">
        <p className="font-bold">مهم جداً</p>
        <p className="mt-1 text-[var(--muted)]">
          لا يمكن لأي موقع خارجي حذف الصور مباشرة من فيسبوك أو تيك توك أو غيرهما.
          الحل العملي يعتمد على أدوات عالمية تحوّل الملف محلياً إلى بصمة رقمية
          (Hash) دون رفع الصورة الأصلية.
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {isAdult ? (
          <a
            href="https://stopncii.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[22px] bg-[var(--accent)] px-5 py-4 text-white shadow-sm transition hover:brightness-110"
          >
            <span className="font-extrabold">افتح StopNCII.org الآن — للبالغين</span>
            <span className="mt-1 block text-sm font-normal text-white/85">
              الأداة الرسمية · ثم ارجع لشرح أمان إن احتجت
            </span>
          </a>
        ) : null}
        {isAdult ? (
          <Link
            href={`/stopncii${answers.countryId ? `?country=${answers.countryId}` : ""}`}
            className="block rounded-[22px] bg-white px-5 py-4 shadow-sm outline outline-black/6 transition hover:-translate-y-0.5"
          >
            <span className="font-extrabold">شرح StopNCII بالعربي داخل أمان</span>
          </Link>
        ) : null}
        {isMinor ? (
          <a
            href="https://takeitdown.ncmec.org"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[22px] bg-[var(--ink)] px-5 py-4 text-white shadow-sm transition hover:brightness-110"
          >
            <span className="font-extrabold">افتح Take It Down الآن — للقاصرين</span>
            <span className="mt-1 block text-sm font-normal text-white/85">
              الأداة الرسمية من NCMEC
            </span>
          </a>
        ) : null}
        {isMinor ? (
          <Link
            href={`/take-it-down${answers.countryId ? `?country=${answers.countryId}` : ""}`}
            className="block rounded-[22px] bg-white px-5 py-4 shadow-sm outline outline-black/6 transition hover:-translate-y-0.5"
          >
            <span className="font-extrabold">شرح Take It Down بالعربي داخل أمان</span>
          </Link>
        ) : null}
      </div>

      <ol className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted)]">
        <li>1. لا تدفع ولا ترسل المزيد من الصور.</li>
        <li>2. أغلق أو قيّد الحسابات المستخدمة في التواصل مع المعتدي إن أمكن.</li>
        <li>3. استخدم الأداة المناسبة أعلاه على جهازك.</li>
        <li>4. قدّم بلاغاً رسمياً وفق بلدك عند القدرة.</li>
      </ol>

      {country ? (
        <>
          <Helplines countryId={country.id} />
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            {country.cyberNote}
          </p>
        </>
      ) : null}
    </ResultCard>
  );
}

function CalmIntro({ forSomeoneElse }: { forSomeoneElse: boolean }) {
  return (
    <p className="text-sm leading-7 text-[var(--muted)]">
      {forSomeoneElse
        ? "أنت تساعد شخصاً آخر — ابقَ هادئاً، ولا تطلب منه مشاركة الصور معك. وجّهه للأدوات والجهات المناسبة."
        : "خذ نفساً. لست مضطراً لحل كل شيء دفعة واحدة. اتبع الخطوات بالترتيب الذي تستطيعه الآن."}
    </p>
  );
}

function Helplines({
  countryId,
  urgent = false,
}: {
  countryId: CountryId;
  urgent?: boolean;
}) {
  const country = getCountry(countryId);
  if (!country) return null;

  const lines = urgent
    ? country.emergency
    : [...country.emergency, ...country.support];

  return (
    <div className="mt-6">
      <h2
        className={`text-sm font-extrabold ${
          urgent ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        أرقام مفيدة — {country.name}
      </h2>
      <ul className="mt-3 grid gap-2">
        {lines.map((line) => (
          <li key={`${line.label}-${line.value}`}>
            <a
              href={`tel:${line.value.replace(/\s/g, "")}`}
              className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm ${
                urgent
                  ? "bg-white/15"
                  : "bg-white ring-1 ring-black/5"
              }`}
            >
              <span>
                <span className="block font-bold">{line.label}</span>
                {line.note ? (
                  <span
                    className={`mt-0.5 block text-xs ${
                      urgent ? "text-white/70" : "text-[var(--muted)]"
                    }`}
                  >
                    {line.note}
                  </span>
                ) : null}
              </span>
              <span
                className={`shrink-0 font-extrabold ${
                  urgent ? "text-white" : "text-[var(--accent)]"
                }`}
                dir="ltr"
              >
                {line.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResultCard({
  title,
  children,
  onRestart,
  tone = "calm",
}: {
  title: string;
  children: React.ReactNode;
  onRestart: () => void;
  tone?: "calm" | "urgent";
}) {
  const urgent = tone === "urgent";
  return (
    <section
      className={`rounded-[28px] p-6 shadow-sm sm:p-8 ${
        urgent
          ? "bg-[#8a1f16] text-white"
          : "bg-white shadow-sm ring-1 ring-black/5"
      }`}
    >
      <h1 className="text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h1>
      <div className={`mt-4 ${urgent ? "text-white/90" : ""}`}>{children}</div>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onRestart}
          className={`rounded-full px-5 py-2.5 text-sm font-bold ${
            urgent
              ? "bg-white text-[#8a1f16]"
              : "bg-[var(--accent)] text-white"
          }`}
        >
          ابدأ من جديد
        </button>
        <Link
          href="/privacy"
          className={`rounded-full px-5 py-2.5 text-sm font-semibold ${
            urgent
              ? "bg-white/15 text-white"
              : "bg-[var(--accent-soft)] text-[var(--ink)]"
          }`}
        >
          الخصوصية
        </Link>
      </div>
    </section>
  );
}
