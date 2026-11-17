"use client";

import { useLanguage } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section scroll-mt-28">
      <div className="wrap">
        <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-coral">{t.faq.eyebrow}</p>
        <h2 className="display mt-2 text-3xl sm:text-5xl">{t.faq.title}</h2>
        <div className="mt-6">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border-b-[3px] border-ink">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-lg font-bold">
                {item.q}
                <span className="display text-2xl text-coral group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
