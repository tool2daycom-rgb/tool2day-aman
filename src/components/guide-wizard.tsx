"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCountry, searchCountries, type CountryId } from "@/lib/countries";
import {
  clearAnswers,
  initialAnswers,
  loadAnswers,
  resolveToolPath,
  saveAnswers,
  type AgeGroup,
  type Situation,
  type WizardAnswers,
} from "@/lib/wizard";
import { PathResult } from "@/components/path-result";

type Step =
  | "safe"
  | "browsing"
  | "country"
  | "situation"
  | "age"
  | "result";

const choiceBtn =
  "w-full rounded-[22px] bg-white px-5 py-4 text-start text-base font-bold text-[var(--foreground)] shadow-sm ring-1 ring-black/5 transition hover:bg-[var(--accent-soft)] hover:ring-[var(--nav-pill)] active:scale-[0.99]";

const secondaryBtn =
  "rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--muted)] ring-1 ring-black/8 transition hover:text-[var(--foreground)]";

export function GuideWizard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<Step>("safe");
  const [answers, setAnswers] = useState<WizardAnswers>(initialAnswers);
  const [countryQuery, setCountryQuery] = useState("");

  useEffect(() => {
    const loaded = loadAnswers();
    setAnswers(loaded);

    const tool = resolveToolPath(loaded);
    if (tool) {
      router.replace(tool);
      return;
    }

    if (loaded.safeNow === false) setStep("result");
    else if (loaded.countryId && loaded.situation && loaded.ageGroup)
      setStep("result");
    else if (loaded.countryId && loaded.situation) setStep("age");
    else if (loaded.countryId) setStep("situation");
    else if (loaded.safeNow === true) setStep("browsing");
    setReady(true);
  }, [router]);

  function update(patch: Partial<WizardAnswers>, next: Step) {
    const nextAnswers = { ...answers, ...patch };
    setAnswers(nextAnswers);
    saveAnswers(nextAnswers);

    const tool = resolveToolPath(nextAnswers);
    if (tool && next === "result") {
      router.push(tool);
      return;
    }
    setStep(next);
  }

  function chooseAge(ageGroup: AgeGroup) {
    const nextAnswers = { ...answers, ageGroup };
    setAnswers(nextAnswers);
    saveAnswers(nextAnswers);

    const tool = resolveToolPath(nextAnswers);
    if (tool) {
      router.push(tool);
      return;
    }
    setStep("result");
  }

  function restart() {
    clearAnswers();
    setAnswers(initialAnswers);
    setCountryQuery("");
    setStep("safe");
  }

  if (!ready) {
    return (
      <div className="rounded-[28px] bg-white/70 p-8 text-center text-sm text-[var(--muted)]">
        جارٍ التحضير…
      </div>
    );
  }

  if (step === "result") {
    return <PathResult answers={answers} onRestart={restart} />;
  }

  return (
    <div className="space-y-6">
      <Progress step={step} />

      {step === "safe" && (
        <Question
          title="هل أنت في أمان الآن؟"
          body="إذا كنت في خطر فوري أو شخص يهددك الآن، الأولوية للنجاة والاتصال بالطوارئ."
        >
          <button
            type="button"
            className={choiceBtn}
            onClick={() => update({ safeNow: true }, "browsing")}
          >
            نعم، أنا في مكان آمن حالياً
          </button>
          <button
            type="button"
            className={`${choiceBtn} !bg-[#fff1f0] !text-[#8a1f16] ring-[#f3c0bb]`}
            onClick={() => update({ safeNow: false }, "result")}
          >
            لا — أحتاج مساعدة فورية
          </button>
        </Question>
      )}

      {step === "browsing" && (
        <Question
          title="هل جهازك آمن للتصفح؟"
          body="إذا كان هناك احتمال أن شخصاً يراقب هاتفك أو حاسوبك، استخدم وضع التصفح الخاص، أو جهاز شخص تثق به."
        >
          <button
            type="button"
            className={choiceBtn}
            onClick={() => setStep("country")}
          >
            نعم، يمكنني المتابعة بهدوء
          </button>
          <Link href="/safe-browsing" className={`${choiceBtn} block`}>
            أريد نصائح للتصفح الآمن أولاً
          </Link>
          <button type="button" className={secondaryBtn} onClick={() => setStep("safe")}>
            رجوع
          </button>
        </Question>
      )}

      {step === "country" && (
        <Question
          title="في أي بلد أنت؟"
          body="كل الدول العربية متاحة مع أرقام الطوارئ. لا نجمع موقعك الجغرافي."
        >
          <input
            type="search"
            value={countryQuery}
            onChange={(e) => setCountryQuery(e.target.value)}
            placeholder="ابحث عن بلدك…"
            className="w-full rounded-2xl border-0 bg-white px-4 py-3.5 text-sm outline-none ring-1 ring-black/10 placeholder:text-[var(--muted)] focus:ring-[var(--accent)]/40"
            autoComplete="off"
          />
          <div className="max-h-[52vh] overflow-y-auto overscroll-contain pe-1">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {searchCountries(countryQuery).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={choiceBtn}
                  onClick={() => {
                    setCountryQuery("");
                    update({ countryId: c.id }, "situation");
                  }}
                >
                  <span className="me-2" aria-hidden>
                    {c.flag}
                  </span>
                  {c.name}
                </button>
              ))}
            </div>
            {searchCountries(countryQuery).length === 0 ? (
              <p className="py-6 text-center text-sm text-[var(--muted)]">
                لا توجد نتيجة — جرّب اسماً آخر
              </p>
            ) : null}
          </div>
          <p className="text-xs leading-6 text-[var(--muted)]">
            الأرقام من مصادر عامة وقد تتغيّر. في الخطر الفوري اتصل بالطوارئ المحلية
            مباشرة.
          </p>
          <button type="button" className={secondaryBtn} onClick={() => setStep("browsing")}>
            رجوع
          </button>
        </Question>
      )}

      {step === "situation" && (
        <Question
          title="ما أقرب وصف لموقفك؟"
          body="اختر ما يناسبك الآن. يمكنك تغيير المسار لاحقاً."
        >
          {(
            [
              {
                id: "images" as Situation,
                label: "ابتزاز أو تهديد بنشر صور / فيديو",
              },
              {
                id: "threat_no_images" as Situation,
                label: "تهديد أو مضايقة بدون صور",
              },
              {
                id: "physical" as Situation,
                label: "عنف جسدي أو جنسي",
              },
              {
                id: "helping_other" as Situation,
                label: "أريد مساعدة شخص آخر",
              },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              className={choiceBtn}
              onClick={() => {
                if (item.id === "helping_other") {
                  update(
                    { situation: "images", forSomeoneElse: true },
                    "age",
                  );
                } else if (item.id === "images") {
                  update(
                    { situation: item.id, forSomeoneElse: false },
                    "age",
                  );
                } else {
                  update(
                    {
                      situation: item.id,
                      forSomeoneElse: false,
                      ageGroup: null,
                    },
                    "result",
                  );
                }
              }}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className={secondaryBtn} onClick={() => setStep("country")}>
            رجوع
          </button>
        </Question>
      )}

      {step === "age" && (
        <Question
          title={
            answers.forSomeoneElse
              ? "هل الشخص المعني أقل من 18 سنة؟"
              : "هل عمرك أقل من 18 سنة؟"
          }
          body="هذا السؤال يحدد الأداة المناسبة فوراً: البالغون → StopNCII · القاصرون → Take It Down."
        >
          {(
            [
              {
                id: "adult" as AgeGroup,
                label: "18 سنة أو أكثر → StopNCII",
              },
              {
                id: "minor" as AgeGroup,
                label: "أقل من 18 سنة → Take It Down",
              },
              {
                id: "unsure" as AgeGroup,
                label: "غير متأكد / أفضل المسارين",
              },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              className={choiceBtn}
              onClick={() => chooseAge(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className={secondaryBtn} onClick={() => setStep("situation")}>
            رجوع
          </button>
        </Question>
      )}

      {answers.countryId ? (
        <p className="text-center text-xs text-[var(--muted)]">
          البلد المختار: {getCountry(answers.countryId as CountryId)?.name}
        </p>
      ) : null}
    </div>
  );
}

function Progress({ step }: { step: Step }) {
  const order: Step[] = ["safe", "browsing", "country", "situation", "age", "result"];
  const idx = Math.max(0, order.indexOf(step));
  const pct = Math.round((idx / (order.length - 1)) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-[var(--muted)]">
        <span>توجيه خطوة بخطوة</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-black/5">
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Question({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <h1 className="text-2xl font-extrabold leading-snug tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h1>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
        {body}
      </p>
      <div className="mt-6 flex flex-col gap-3">{children}</div>
    </section>
  );
}
