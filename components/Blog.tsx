"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type Article = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
};

export default function Blog() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Article | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="blog" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">{t.blog.title}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{t.blog.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.blog.items.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass glass-hover flex flex-col rounded-3xl p-6 sm:p-8"
            >
              <BookOpen className="mb-4 text-neon-cyan" size={24} />
              <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                {article.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted">{article.excerpt}</p>
              <button
                type="button"
                onClick={() => setActive(article)}
                className="btn-secondary mt-6 w-fit rounded-xl px-4 py-2 text-sm text-foreground"
              >
                {t.blog.read}
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="blog-modal-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3
                  id="blog-modal-title"
                  className="font-display text-xl font-semibold text-white sm:text-2xl"
                >
                  {active.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-lg border border-white/10 p-2 text-muted hover:text-neon-cyan"
                  aria-label={t.blog.close}
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-base leading-relaxed text-muted whitespace-pre-line">
                {active.body}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="btn-primary mt-8 rounded-xl px-5 py-2.5 text-sm"
              >
                {t.blog.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
