"use client";

import Image from "next/image";
import { WORKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Works() {
  const { locale, t } = useLanguage();

  return (
    <section id="works" className="section scroll-mt-28 border-t border-line">
      <div className="wrap">
        <p className="eyebrow">{t.works.eyebrow}</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">{t.works.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{t.works.lead}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {WORKS.map((work) => {
            const copy = work[locale];
            return (
              <article key={work.id} className="flex flex-col border border-line bg-card">
                <a href={work.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/10] bg-paper">
                    <Image
                      src={work.image}
                      alt={copy.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover object-top"
                    />
                  </div>
                </a>
                <div className="flex flex-1 flex-col p-6">
                  {work.demo && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {t.works.demo}
                    </p>
                  )}
                  {work.realClient && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {t.works.real}
                    </p>
                  )}
                  <h3 className="display mt-2 text-2xl text-ink">{copy.title}</h3>
                  <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                    <div>
                      <dt className="font-semibold text-ink">{t.works.task}</dt>
                      <dd className="mt-1 text-muted">{copy.task}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">{t.works.solution}</dt>
                      <dd className="mt-1 text-muted">{copy.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-ink">{t.works.result}</dt>
                      <dd className="mt-1 text-muted">{copy.result}</dd>
                    </div>
                  </dl>
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary mt-6 w-fit"
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
