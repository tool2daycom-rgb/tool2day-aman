"use client";

import { useEffect } from "react";

type Props = {
  exitUrl?: string;
};

export function QuickExit({ exitUrl = "https://www.google.com" }: Props) {
  function exitNow() {
    try {
      window.location.replace(exitUrl);
    } catch {
      window.location.href = exitUrl;
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        exitNow();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exitUrl]);

  return (
    <button
      type="button"
      onClick={exitNow}
      className="fixed start-3 top-3 z-50 rounded-full bg-[var(--danger)] px-4 py-2.5 text-xs font-bold text-white shadow-lg transition hover:brightness-110 sm:start-5 sm:top-5 sm:text-sm"
      aria-label="خروج سريع — يغلق الصفحة فوراً. أو اضغط Escape"
      title="خروج سريع (Escape)"
    >
      خروج سريع
    </button>
  );
}
