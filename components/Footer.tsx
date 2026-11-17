"use client";

import { GithubIcon } from "@/components/GithubIcon";
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
    <footer className="border-t border-line bg-paper">
      <div className="wrap py-10">
        <p className="font-semibold text-ink">{t.hero.name}</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{t.footer.note}</p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-accent"
          >
            Telegram
          </a>
          <a href={LINKS.email} className="text-ink hover:text-accent">
            {LINKS.emailRaw}
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink hover:text-accent"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
        <p className="mt-8 text-xs text-muted">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
