"use client";

import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const btn = (code: Locale, label: string) => {
    const active = locale === code;
    return (
      <button
        type="button"
        onClick={() => setLocale(code)}
        aria-pressed={active}
        className={`rounded-md px-2 py-1 text-xs font-semibold tracking-wide ${
          active ? "bg-accent text-[#f7f4ee]" : "text-muted hover:text-ink"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-md border border-line bg-card p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn("ru", "RU")}
      {btn("en", "EN")}
    </div>
  );
}
