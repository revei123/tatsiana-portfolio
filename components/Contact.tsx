"use client";

import { useState, type FormEvent } from "react";
import Mascot from "@/components/Mascot";
import { LINKS, telegramHref } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const need = String(data.get("need") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const example = String(data.get("example") || "").trim();

    if (!need) {
      setError(t.contact.needError);
      return;
    }

    setError("");
    const lines = [t.contact.greeting, `${t.contact.need}: ${need}`];
    if (budget) lines.push(`${t.contact.budget}: ${budget}`);
    if (example) lines.push(`${t.contact.example}: ${example}`);
    const text = lines.join("\n");

    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    const channel = submitter instanceof HTMLButtonElement ? submitter.value : "telegram";

    if (channel === "email") {
      window.location.href = `mailto:${LINKS.emailRaw}?subject=${encodeURIComponent(t.contact.mailSubject)}&body=${encodeURIComponent(text)}`;
      return;
    }

    window.open(telegramHref(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacts" className="section scroll-mt-28">
      <div className="wrap grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-rust">{t.contact.eyebrow}</p>
          <h2 className="display mt-2 text-3xl sm:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.contact.lead}</p>
          <Mascot pose="wave" className="mt-2 h-44 w-auto" title={t.hero.name} />
          <ul className="mt-4 space-y-2 text-sm font-bold">
            <li>
              <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="underline decoration-coral decoration-2 underline-offset-4">
                {t.contact.telegram}
              </a>
            </li>
            <li>
              <a href={LINKS.email} className="underline decoration-coral decoration-2 underline-offset-4">
                {LINKS.emailRaw}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            {t.contact.quickItems.map((item) => (
              <a
                key={item.label}
                href={telegramHref(item.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-fit"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[1.6rem] border-[3px] border-ink bg-sky p-5 shadow-[7px_7px_0_#16140f] sm:p-7"
          noValidate
          aria-describedby="form-note"
        >
          <div className="space-y-4">
            <label className="block text-sm font-bold" htmlFor="need">
              {t.contact.need}
              <input
                id="need"
                name="need"
                required
                placeholder={t.contact.needPlaceholder}
                className="mt-2 w-full rounded-xl border-2 border-ink bg-cream px-3 py-3 text-base font-normal"
                aria-invalid={error ? true : undefined}
              />
            </label>
            <label className="block text-sm font-bold" htmlFor="budget">
              {t.contact.budget}
              <input
                id="budget"
                name="budget"
                placeholder={t.contact.budgetPlaceholder}
                className="mt-2 w-full rounded-xl border-2 border-ink bg-cream px-3 py-3 text-base font-normal"
              />
            </label>
            <label className="block text-sm font-bold" htmlFor="example">
              {t.contact.example}
              <input
                id="example"
                name="example"
                type="text"
                inputMode="url"
                placeholder={t.contact.examplePlaceholder}
                className="mt-2 w-full rounded-xl border-2 border-ink bg-cream px-3 py-3 text-base font-normal"
              />
            </label>
          </div>
          {error && (
            <p className="mt-3 text-sm font-bold" role="alert">
              {error}
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" value="telegram" className="btn btn-primary">
              {t.contact.submitTelegram}
            </button>
            <button type="submit" value="email" className="btn btn-secondary">
              {t.contact.submitEmail}
            </button>
          </div>
          <p id="form-note" className="mt-4 text-sm leading-relaxed">
            {t.contact.formNote}
          </p>
          <noscript>
            <p className="mt-3 text-sm font-bold">
              <a href={LINKS.telegram}>{t.contact.telegram}</a>
            </p>
          </noscript>
        </form>
      </div>
    </section>
  );
}
