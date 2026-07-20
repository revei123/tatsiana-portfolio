"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">{t.testimonials.title}</span>
          </h2>
          <p className="mt-3 text-muted">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover flex flex-col rounded-3xl p-6"
            >
              <Quote className="mb-4 text-neon-purple" size={28} />
              <div className="mb-4 flex gap-1 text-neon-cyan">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
