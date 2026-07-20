"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Locale } from "./content";

type Content = (typeof content)["ru"];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ru" ? "en" : "ru"));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: content[locale] as Content,
    }),
    [locale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
