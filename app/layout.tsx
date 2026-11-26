import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { LINKS, content } from "@/lib/content";
import { SEARCH_VERIFICATION, SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  display: "swap",
});

const title = content.ru.meta.title;
const description = content.ru.meta.description;

const verification: NonNullable<Metadata["verification"]> = {
  ...(SEARCH_VERIFICATION.google ? { google: SEARCH_VERIFICATION.google } : {}),
  ...(SEARCH_VERIFICATION.yandex ? { yandex: SEARCH_VERIFICATION.yandex } : {}),
  ...(SEARCH_VERIFICATION.bing
    ? { other: { "msvalidate.01": SEARCH_VERIFICATION.bing } }
    : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  verification,
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Татьяна Яновская",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Татьяна Яновская — сайты и Telegram-боты для малого бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Татьяна Яновская",
      alternateName: "Tatsiana Yanovskaya",
      url: SITE_URL,
      email: LINKS.emailRaw,
      image: `${SITE_URL}/portrait.webp`,
      sameAs: [LINKS.telegram, LINKS.github],
      knowsLanguage: ["ru", "en"],
    },
    {
      "@type": "ProfessionalService",
      name: "Татьяна Яновская",
      url: SITE_URL,
      email: LINKS.emailRaw,
      image: `${SITE_URL}/og.png`,
      description,
      areaServed: [
        { "@type": "Country", name: "Belarus" },
        { "@type": "Country", name: "Russia" },
      ],
      availableLanguage: ["Russian", "English"],
      founder: { "@type": "Person", name: "Татьяна Яновская" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} antialiased`}
    >
      <body className="font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
