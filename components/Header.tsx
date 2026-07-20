"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-white"
        >
          TY<span className="text-neon-cyan">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:border-neon-cyan/40 hover:text-neon-cyan"
            aria-label="Switch language"
          >
            {locale === "ru" ? "EN" : "RU"}
          </button>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-xl px-4 py-2 text-sm"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-neon-cyan"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold uppercase"
                >
                  {locale === "ru" ? "EN" : "RU"}
                </button>
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 rounded-xl px-4 py-2 text-center text-sm"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.cta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
