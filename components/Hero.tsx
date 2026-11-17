"use client";

import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="section pt-10 sm:pt-16">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.75fr)] lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-muted">{t.hero.name}</p>
          <h1 className="display mt-3 max-w-3xl text-[2rem] text-ink sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t.hero.lead}
          </p>
          <p className="display mt-8 text-3xl text-ink sm:text-4xl">{t.hero.price}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {t.hero.priceNote}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.hero.ctaTelegram}
            </a>
            <a href="#contacts" className="btn btn-secondary">
              {t.hero.ctaForm}
            </a>
          </div>
        </div>

        <aside className="border border-line bg-card p-6 sm:p-8">
          <h2 className="display text-2xl text-ink">{t.hero.asideTitle}</h2>
          <ol className="mt-5 space-y-4">
            {t.hero.aside.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="display text-base text-accent">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
