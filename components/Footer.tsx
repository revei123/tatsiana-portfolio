"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative pb-10 pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/15" />
          <h2 className="relative font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-gradient">{t.footer.cta}</span>
          </h2>
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary relative mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base"
          >
            <Send size={18} />
            {t.footer.button}
          </a>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-muted">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-neon-cyan"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-neon-cyan"
            >
              <Send size={18} />
              Telegram
            </a>
            <a
              href={LINKS.email}
              className="inline-flex items-center gap-2 transition-colors hover:text-neon-cyan"
            >
              <Mail size={18} />
              {LINKS.emailRaw}
            </a>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted sm:text-sm">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
