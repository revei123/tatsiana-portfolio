"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Box,
  Brain,
  Building2,
  Code2,
  FileCode,
  Globe,
  Radar,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { TECH_STACK } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

const iconMap: Record<string, LucideIcon> = {
  FileCode,
  Code2,
  Brain,
  Zap,
  Bot,
  Radar,
  Box,
  Building2,
  Sparkles,
  Globe,
};

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="tech" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">{t.tech.title}</span>
          </h2>
          <p className="mt-3 text-muted">{t.tech.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {TECH_STACK.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Code2;
            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass glass-hover group flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neon-cyan transition-shadow group-hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]">
                  <Icon size={22} />
                </span>
                <h3 className="text-sm font-semibold sm:text-base">{item.name}</h3>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
