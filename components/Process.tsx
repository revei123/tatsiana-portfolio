"use client";

import { useLanguage } from "@/lib/i18n";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section scroll-mt-28">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-rust">{t.process.eyebrow}</p>
        <h2 className="display mt-2 max-w-3xl text-3xl sm:text-5xl">{t.process.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.process.lead}</p>
        <ol className="step-rail mt-8">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="relative pb-7 pl-8">
              <span className="absolute -left-[1.15rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-yellow font-bold">
                {index + 1}
              </span>
              <h3 className="display text-xl">{step.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
