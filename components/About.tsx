"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">{t.about.title}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {t.about.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.about.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
