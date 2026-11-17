"use client";

import { visibleServices } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Services() {
  const { locale, t } = useLanguage();
  const services = visibleServices();

  return (
    <section id="services" className="section scroll-mt-28 border-t border-line">
      <div className="wrap">
        <p className="eyebrow">{t.services.eyebrow}</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
          {t.services.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {t.services.lead}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const copy = service[locale];
            return (
              <article key={service.id} className="flex flex-col border border-line bg-card p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="display text-2xl text-ink">{copy.title}</h3>
                  <p className="shrink-0 text-sm font-semibold text-accent">{service.price[locale]}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{copy.summary}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink">
                  {t.services.includes}
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {copy.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div id="prices" className="scroll-mt-28 mt-16">
          <p className="eyebrow">{t.prices.eyebrow}</p>
          <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">{t.prices.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.prices.lead}</p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
              <thead className="bg-paper">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold text-ink">
                    {t.prices.service}
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-ink">
                    {t.prices.price}
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-t border-line">
                    <th scope="row" className="px-4 py-3 font-medium text-ink">
                      {service[locale].title}
                    </th>
                    <td className="px-4 py-3 text-accent">{service.price[locale]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
