"use client";

import Link from "next/link";
import Mascot from "@/components/Mascot";
import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main id="content" className="section">
      <div className="wrap flex min-h-[70vh] max-w-xl flex-col items-start justify-center">
        <Mascot pose="lost" className="h-56 w-auto" title={t.hero.name} />
        <h1 className="display mt-4 text-4xl sm:text-5xl">{t.notFound.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{t.notFound.text}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            {t.notFound.home}
          </Link>
          <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.notFound.write}
          </a>
        </div>
      </div>
    </main>
  );
}
