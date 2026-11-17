"use client";

import { useLanguage } from "@/lib/i18n";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section scroll-mt-28 border-t border-line">
      <div className="wrap">
        <p className="eyebrow">{t.process.eyebrow}</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">{t.process.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.process.lead}</p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="border border-line bg-card p-5">
              <p className="display text-lg text-accent">{index + 1}</p>
              <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
