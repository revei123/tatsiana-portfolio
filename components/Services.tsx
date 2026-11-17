"use client";

import Mascot from "@/components/Mascot";
import { visibleServices } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

const washes = ["bg-cream-2", "bg-sky", "bg-mint", "bg-yellow", "bg-cream-2"];

export default function Services() {
  const { locale, t } = useLanguage();
  const services = visibleServices();

  return (
    <section id="services" className="section scroll-mt-28">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-rust">{t.services.eyebrow}</p>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h2 className="display max-w-3xl text-3xl sm:text-5xl">{t.services.title}</h2>
          <Mascot pose="peek" className="h-20 w-auto shrink-0 sm:h-28" title={t.hero.name} />
        </div>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.services.lead}</p>

        <div className="mt-8 border-t-[3px] border-ink">
          {services.map((service, index) => {
            const copy = service[locale];
            const lines = service.lines?.[locale];
            return (
              <article
                key={service.id}
                className={`grid gap-4 border-b-[3px] border-ink px-4 py-6 sm:px-6 lg:grid-cols-[4.5rem_minmax(0,1fr)_auto] lg:items-start ${washes[index % washes.length]}`}
              >
                <p className="display text-2xl text-rust">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="display text-2xl sm:text-3xl">{copy.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{copy.summary}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide">{t.services.includes}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {copy.includes.map((item) => (
                      <li key={item} className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                  {lines && (
                    <ul className="mt-4 space-y-1 text-sm">
                      {lines.map((line) => (
                        <li key={line.label} className="flex justify-between gap-4 border-t border-ink/20 py-1">
                          <span>{line.label}</span>
                          <span className="font-bold">{line.amount}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className="sticker text-lg">{service.price[locale]}</p>
              </article>
            );
          })}
        </div>

        <div id="prices" className="scroll-mt-28 mt-14 rounded-[1.6rem] border-[3px] border-ink bg-yellow p-5 shadow-[6px_6px_0_#16140f] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em]">{t.prices.eyebrow}</p>
          <h2 className="display mt-2 text-3xl sm:text-4xl">{t.prices.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed">{t.prices.lead}</p>
          <table className="mt-6 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="py-2 pr-3 font-bold">
                  {t.prices.service}
                </th>
                <th scope="col" className="py-2 font-bold">
                  {t.prices.price}
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => {
                const lines = service.lines?.[locale];
                return (
                  <tr key={service.id} className="border-b border-ink/30 align-top">
                    <th scope="row" className="py-3 pr-3 font-semibold">
                      {service[locale].title}
                    </th>
                    <td className="py-3 font-bold">
                      {lines ? (
                        <ul>
                          {lines.map((line) => (
                            <li key={line.label}>
                              {line.label} — {line.amount}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        service.price[locale]
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
