export type Situation =
  | "images"
  | "threat_no_images"
  | "physical"
  | "helping_other";

export type AgeGroup = "adult" | "minor" | "unsure";

export type WizardAnswers = {
  safeNow: boolean | null;
  countryId: string | null;
  situation: Situation | null;
  ageGroup: AgeGroup | null;
  forSomeoneElse: boolean;
};

export const initialAnswers: WizardAnswers = {
  safeNow: null,
  countryId: null,
  situation: null,
  ageGroup: null,
  forSomeoneElse: false,
};

export const STORAGE_KEY = "aman-guide-v1";

/** Client-only, no personal identifiers — only anonymous path choices. */
export function loadAnswers(): WizardAnswers {
  if (typeof window === "undefined") return initialAnswers;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return initialAnswers;
    return { ...initialAnswers, ...JSON.parse(raw) };
  } catch {
    return initialAnswers;
  }
}

export function saveAnswers(answers: WizardAnswers) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    /* private mode / blocked storage — continue without persistence */
  }
}

export function clearAnswers() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** Where the guide should send the user for image/video blackmail paths. */
export function resolveToolPath(answers: WizardAnswers): string | null {
  if (answers.safeNow === false) return null;
  if (answers.situation !== "images") return null;
  if (answers.ageGroup === "adult") {
    const q = answers.countryId ? `?country=${answers.countryId}` : "";
    return `/stopncii${q}`;
  }
  if (answers.ageGroup === "minor") {
    const q = answers.countryId ? `?country=${answers.countryId}` : "";
    return `/take-it-down${q}`;
  }
  return null;
}

