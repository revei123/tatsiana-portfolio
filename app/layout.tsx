import type { Metadata } from "next";
import { Literata, Manrope } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { LINKS, content } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  display: "swap",
});

const title = content.ru.meta.title;
const description = content.ru.meta.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
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
  "@type": "ProfessionalService",
  name: "Татьяна Яновская",
  url: SITE_URL,
  email: LINKS.emailRaw,
  image: `${SITE_URL}/og.png`,
  description,
  areaServed: "Remote",
  availableLanguage: ["Russian", "English"],
  sameAs: [LINKS.telegram, LINKS.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${literata.variable} antialiased`}
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
