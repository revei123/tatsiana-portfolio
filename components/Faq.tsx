"use client";

import { useLanguage } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section scroll-mt-28 border-t border-line">
      <div className="wrap">
        <div className="max-w-3xl">
        <p className="eyebrow">{t.faq.eyebrow}</p>
        <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">{t.faq.title}</h2>
        <div className="mt-8 border-t border-line">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-base font-semibold text-ink">
                {item.q}
                <span className="text-xl font-normal text-accent group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
