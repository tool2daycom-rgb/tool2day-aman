"use client";

import { useRouter } from "next/navigation";
import {
  STOPNCII_CREATE_CASE,
  TAKE_IT_DOWN_CREATE_CASE,
} from "@/lib/official-tools";
import { loadAnswers, saveAnswers } from "@/lib/wizard";

const boxClass =
  "flex min-h-[4.5rem] items-center justify-center rounded-[22px] px-5 py-5 text-center text-xl font-extrabold tracking-tight transition hover:-translate-y-0.5 active:scale-[0.99] sm:text-2xl";

type Props = {
  /** Which path this page currently describes — highlights that box. */
  highlight?: "adult" | "minor";
};

export function AgeEntryBoxes({ highlight }: Props) {
  const router = useRouter();

  function goPreviousStep() {
    const answers = loadAnswers();
    saveAnswers({ ...answers, ageGroup: null });
    router.push("/guide");
  }

  return (
    <div className="mt-8 space-y-4">
      <button
        type="button"
        onClick={goPreviousStep}
        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--muted)] ring-1 ring-black/8 transition hover:text-[var(--foreground)]"
      >
        ← الخطوة السابقة
      </button>

      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={TAKE_IT_DOWN_CREATE_CASE}
          target="_blank"
          rel="noopener noreferrer"
          className={`${boxClass} ${
            highlight === "minor"
              ? "bg-[var(--ink)] text-white shadow-md"
              : "bg-white text-[var(--ink)] ring-1 ring-black/8 hover:bg-[var(--accent-soft)]"
          }`}
        >
          قاصر أقل من 18
        </a>
        <a
          href={STOPNCII_CREATE_CASE}
          target="_blank"
          rel="noopener noreferrer"
          className={`${boxClass} ${
            highlight === "adult"
              ? "bg-[var(--accent)] text-white shadow-md"
              : "bg-white text-[var(--ink)] ring-1 ring-black/8 hover:bg-[var(--accent-soft)]"
          }`}
        >
          +18
        </a>
      </div>
    </div>
  );
}
