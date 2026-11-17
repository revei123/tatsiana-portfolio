"use client";

import { useLanguage } from "@/lib/i18n";

export default function Why() {
  const { t } = useLanguage();

  return (
    <section className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow">{t.why.eyebrow}</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">{t.why.title}</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2">
          {t.why.items.map((item, index) => (
            <li key={item.title} className="border-t border-line pt-5">
              <p className="display text-lg text-accent">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
