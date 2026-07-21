"use client";

import { getCountry, type CountryId } from "@/lib/countries";
import { loadAnswers } from "@/lib/wizard";
import { useEffect, useState } from "react";

/** Shows country helplines from guide answers or ?country= query. */
export function GuideHelplines({ countryFromQuery }: { countryFromQuery?: string }) {
  const [countryId, setCountryId] = useState<CountryId | null>(null);

  useEffect(() => {
    if (countryFromQuery) {
      setCountryId(countryFromQuery as CountryId);
      return;
    }
    const answers = loadAnswers();
    if (answers.countryId) setCountryId(answers.countryId as CountryId);
  }, [countryFromQuery]);

  const country = getCountry(countryId);
  if (!country) return null;

  const lines = [...country.emergency, ...country.support];

  return (
    <div className="mt-8 rounded-[22px] bg-white p-5 ring-1 ring-black/5">
      <h2 className="text-sm font-extrabold text-[var(--ink)]">
        أرقام مفيدة — {country.name}
      </h2>
      <p className="mt-1 text-xs text-[var(--muted)]">{country.cyberNote}</p>
      <ul className="mt-3 grid gap-2">
        {lines.map((line) => (
          <li key={`${line.label}-${line.value}`}>
            <a
              href={`tel:${line.value.replace(/\s/g, "")}`}
              className="flex items-center justify-between gap-3 rounded-2xl bg-[#f7f7f7] px-4 py-3 text-sm"
            >
              <span>
                <span className="block font-bold">{line.label}</span>
                {line.note ? (
                  <span className="mt-0.5 block text-xs text-[var(--muted)]">
                    {line.note}
                  </span>
                ) : null}
              </span>
              <span className="shrink-0 font-extrabold text-[var(--accent)]" dir="ltr">
                {line.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
