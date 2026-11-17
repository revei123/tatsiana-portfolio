"use client";

import Image from "next/image";
import Mascot from "@/components/Mascot";
import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="section pb-8 pt-8 sm:pt-12">
      <div className="wrap grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em]">{t.hero.name}</p>
          <h1 className="display mt-3 max-w-3xl text-[2.15rem] sm:text-5xl lg:text-[3.35rem]">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lead}</p>
          <p className="display mt-7 text-4xl sm:text-5xl">{t.hero.price}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{t.hero.priceNote}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.hero.ctaTelegram}
            </a>
            <a href="#contacts" className="btn btn-secondary">
              {t.hero.ctaForm}
            </a>
          </div>
          <ol className="mt-8 max-w-lg space-y-2 text-sm leading-relaxed">
            {t.hero.aside.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="display text-coral">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-12 lg:max-w-none">
          <div className="portrait-frame relative aspect-[4/5]">
            <Image
              src="/portrait.webp"
              alt={t.hero.name}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-3 left-2 sm:bottom-2 sm:-left-4">
            <Mascot className="h-32 w-auto sm:h-40" title={t.hero.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
