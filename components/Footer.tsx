"use client";

import { GithubIcon } from "@/components/GithubIcon";
import Mascot from "@/components/Mascot";
import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#works", label: t.nav.works },
    { href: "#process", label: t.nav.process },
    { href: "#prices", label: t.nav.prices },
    { href: "#faq", label: t.nav.faq },
    { href: "#contacts", label: t.nav.contact },
  ];

  return (
    <footer className="border-t-[3px] border-ink bg-ink text-cream">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Mascot className="h-24 w-auto" />
          <p className="display mt-2 text-2xl text-cream">{t.hero.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-cream-on-ink">{t.footer.note}</p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="inline-flex min-h-12 items-center text-sm text-cream hover:text-yellow">
                {link.label}
              </a>
            ))}
          </nav>
          <p className="mt-6 text-sm text-cream-on-ink">{t.footer.copyright}</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm font-bold">
          <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow">
            Telegram
          </a>
          <a href={LINKS.email} className="hover:text-yellow">
            {LINKS.emailRaw}
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-yellow">
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
