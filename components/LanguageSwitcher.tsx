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
        className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
          active
            ? "bg-neon-cyan/15 text-neon-cyan"
            : "text-muted hover:text-neon-cyan"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {btn("ru", "RU")}
      {btn("en", "EN")}
    </div>
  );
}
