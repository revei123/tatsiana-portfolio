"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { GithubIcon } from "@/components/GithubIcon";
import { LINKS } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

const particles = [
  { x: "12%", y: "18%", size: 6, delay: 0 },
  { x: "78%", y: "22%", size: 4, delay: 0.4 },
  { x: "88%", y: "58%", size: 8, delay: 0.8 },
  { x: "18%", y: "72%", size: 5, delay: 1.2 },
  { x: "55%", y: "12%", size: 3, delay: 0.6 },
  { x: "42%", y: "80%", size: 7, delay: 1.5 },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute rounded-full bg-neon-cyan/70"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 12px rgba(0, 240, 255, 0.8)",
          }}
          animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5">
            <BrandLogo
              priority
              height={80}
              className="h-16 w-auto rounded-lg object-contain sm:h-20"
            />
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base"
            >
              <Send size={18} />
              {t.hero.ctaTelegram}
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm text-foreground sm:text-base"
            >
              <GithubIcon size={18} />
              {t.hero.ctaGithub}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-3">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={LINKS.avatar}
                alt={t.hero.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent" />
            </div>
            <motion.pre
              className="pointer-events-none absolute bottom-6 left-6 right-6 overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f]/85 p-3 font-mono text-[10px] leading-relaxed text-neon-cyan/90 sm:text-xs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {`const engineer = {
  stack: ["Python", "LangChain", "aiogram"],
  openTo: "remote · USDT",
};`}
            </motion.pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
