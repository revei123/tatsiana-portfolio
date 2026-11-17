"use client";

import { useLanguage } from "@/lib/i18n";

const spots = ["bg-yellow", "bg-sky", "bg-mint", "bg-coral", "bg-cream-2"];

export default function Why() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="wrap">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-rust">{t.why.eyebrow}</p>
        <h2 className="display mt-2 max-w-3xl text-3xl sm:text-5xl">{t.why.title}</h2>
        <ol className="mt-8 space-y-4">
          {t.why.items.map((item, index) => (
            <li
              key={item.title}
              className={`grid gap-3 rounded-[1.4rem] border-[3px] border-ink p-5 shadow-[5px_5px_0_#16140f] sm:grid-cols-[auto_1fr] sm:items-center ${spots[index % spots.length]} ${index % 2 ? "sm:ml-10" : "sm:mr-10"}`}
            >
              <p className="display text-3xl">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="display text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
