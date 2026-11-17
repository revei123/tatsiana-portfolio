"use client";

import { useState, type FormEvent } from "react";
import { LINKS, telegramHref } from "@/lib/content";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
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
    <section id="contacts" className="section scroll-mt-28 border-t border-line">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.contact.lead}</p>

          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent"
              >
                {t.contact.telegram}
              </a>
            </li>
            <li>
              <a
                href={LINKS.email}
                className="font-semibold text-ink underline decoration-line underline-offset-4 hover:text-accent"
              >
                {LINKS.emailRaw}
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm font-semibold text-ink">{t.contact.quick}</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {t.contact.quickItems.map((item) => (
              <a
                key={item.label}
                href={telegramHref(item.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="border border-line bg-card p-6 sm:p-8" noValidate>
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-ink" htmlFor="need">
              {t.contact.need}
              <input
                id="need"
                name="need"
                required
                placeholder={t.contact.needPlaceholder}
                className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base font-normal text-ink placeholder:text-muted"
                aria-invalid={error ? true : undefined}
              />
            </label>
            <label className="block text-sm font-semibold text-ink" htmlFor="budget">
              {t.contact.budget}
              <input
                id="budget"
                name="budget"
                placeholder={t.contact.budgetPlaceholder}
                className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base font-normal text-ink placeholder:text-muted"
              />
            </label>
            <label className="block text-sm font-semibold text-ink" htmlFor="example">
              {t.contact.example}
              <input
                id="example"
                name="example"
                type="text"
                inputMode="url"
                placeholder={t.contact.examplePlaceholder}
                className="mt-2 w-full border border-line bg-paper px-3 py-3 text-base font-normal text-ink placeholder:text-muted"
              />
            </label>
          </div>
          {error && (
            <p className="mt-3 text-sm text-accent" role="alert">
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
          <p className="mt-4 text-xs leading-relaxed text-muted">{t.contact.formNote}</p>
        </form>
      </div>
    </section>
  );
}
