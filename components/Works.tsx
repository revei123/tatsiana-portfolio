"use client";

import Image from "next/image";
import { WORKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Works() {
  const { locale, t } = useLanguage();

  return (
    <section id="works" className="section scroll-mt-28 bg-ink text-cream">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow">{t.works.eyebrow}</p>
        <h2 className="display mt-2 max-w-3xl text-3xl text-cream sm:text-5xl">{t.works.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream-on-ink">{t.works.lead}</p>

        <div className="mt-10 space-y-12">
          {WORKS.map((work, index) => {
            const copy = work[locale];
            return (
              <article
                key={work.id}
                className={`work-row grid items-center gap-6 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>a]:order-2" : ""}`}
              >
                <a href={work.href} target="_blank" rel="noopener noreferrer" className="work-shot relative block aspect-[16/10]">
                  <Image
                    src={work.image}
                    alt={copy.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-top"
                  />
                </a>
                <div>
                  {work.demo && (
                    <p className="inline-block rounded-full bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                      {t.works.demo}
                    </p>
                  )}
                  {work.realClient && (
                    <p className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                      {t.works.real}
                    </p>
                  )}
                  <h3 className="display mt-3 text-2xl text-cream sm:text-3xl">{copy.title}</h3>
                  {work.example && (
                    <p className="mt-3 inline-block rounded-2xl border-2 border-yellow bg-yellow px-3 py-2 text-sm font-semibold text-ink">
                      {work.example[locale]}
                    </p>
                  )}
                  <dl className="mt-4 space-y-3 text-sm leading-relaxed text-cream-on-ink">
                    <div>
                      <dt className="font-bold text-yellow">{t.works.task}</dt>
                      <dd>{copy.task}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-yellow">{t.works.solution}</dt>
                      <dd>{copy.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-yellow">{t.works.result}</dt>
                      <dd>{copy.result}</dd>
                    </div>
                  </dl>
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-5 w-fit"
                  >
                    {copy.link}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
