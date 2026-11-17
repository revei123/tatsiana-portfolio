"use client";

import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#works", label: t.nav.works },
    { href: "#process", label: t.nav.process },
    { href: "#prices", label: t.nav.prices },
    { href: "#faq", label: t.nav.faq },
    { href: "#contacts", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-cream">
      <a href="#content" className="skip-link">
        {t.nav.skip}
      </a>
      <div className="wrap flex items-center justify-between gap-3 py-2.5">
        <a href="#top" className="shrink-0" aria-label={t.hero.name}>
          <BrandLogo priority />
        </a>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="inline-flex min-h-12 items-center text-sm font-semibold hover:text-rust">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <a href="#contacts" className="btn btn-primary px-4">
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream-2"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t-2 border-ink bg-yellow xl:hidden" aria-label="Main">
          <div className="wrap flex flex-col gap-1 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-3 text-base font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setOpen(false)} className="btn btn-primary mt-2">
              {t.nav.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
