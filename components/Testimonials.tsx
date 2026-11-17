"use client";

import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section border-t border-line">
      <div className="wrap">
        <p className="eyebrow">{t.reviews.eyebrow}</p>
        <h2 className="display mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">{t.reviews.title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {t.reviews.items.map((item) => (
            <figure key={item.author} className="flex flex-col border border-line bg-card p-6">
              <blockquote className="text-base leading-relaxed text-ink">
                <p>{item.text}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink">{item.author}</p>
                <p className="mt-1 text-sm text-muted">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
