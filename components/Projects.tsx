"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">{t.projects.title}</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project, index) => {
            const isPrivate = "private" in project && project.private;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass glass-hover flex flex-col rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {isPrivate && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-neon-purple">
                      <Lock size={10} />
                      Private
                    </span>
                  )}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1 text-xs text-neon-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary mt-6 inline-flex w-fit items-center gap-2 rounded-xl px-4 py-2 text-sm text-foreground"
                  >
                    {t.projects.view}
                    <ArrowUpRight size={16} />
                  </a>
                ) : isPrivate ? (
                  <span className="mt-6 inline-flex w-fit rounded-xl border border-neon-purple/30 bg-neon-purple/10 px-4 py-2 text-sm text-neon-purple">
                    {t.projects.private}
                  </span>
                ) : (
                  <span className="mt-6 inline-flex w-fit rounded-xl border border-white/10 px-4 py-2 text-sm text-muted">
                    {t.projects.soon}
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
