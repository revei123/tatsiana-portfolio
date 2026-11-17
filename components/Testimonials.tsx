"use client";

import { useLanguage } from "@/lib/i18n";

const paints = ["bg-yellow", "bg-sky", "bg-mint", "bg-cream-2"];
const tilts = ["-rotate-1", "rotate-1", "rotate-2", "-rotate-2"];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-rust">{t.reviews.eyebrow}</p>
        <h2 className="display mt-2 max-w-3xl text-3xl sm:text-5xl">{t.reviews.title}</h2>
        <div className="mt-8 columns-1 gap-4 md:columns-2">
          {t.reviews.items.map((item, index) => (
            <figure
              key={item.author}
              className={`bubble mb-4 break-inside-avoid p-5 ${paints[index % paints.length]} ${tilts[index % tilts.length]}`}
            >
              <blockquote className="text-base leading-relaxed">
                <p>{item.text}</p>
              </blockquote>
              <figcaption className="mt-4 border-t-2 border-ink pt-3">
                <p className="font-bold">{item.author}</p>
                <p className="text-sm">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
