"use client";

export function QuickExit() {
  function exitNow() {
    try {
      window.location.replace("https://www.google.com");
    } catch {
      window.location.href = "https://www.google.com";
    }
  }

  return (
    <button
      type="button"
      onClick={exitNow}
      className="fixed start-3 top-3 z-50 rounded-full bg-[var(--danger)] px-4 py-2 text-xs font-bold text-white shadow-lg transition hover:brightness-110 sm:start-5 sm:top-5 sm:text-sm"
      aria-label="خروج سريع — يغلق الصفحة فوراً"
    >
      خروج سريع
    </button>
  );
}
