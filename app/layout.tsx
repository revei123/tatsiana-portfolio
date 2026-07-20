import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Татьяна Яновская — разработчик ПО | AI Engineer",
  description:
    "AI-инженер из Беларуси. Telegram-боты, LangChain, автоматизация и веб-разработка. Remote · USDT.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: "Татьяна Яновская — разработчик ПО",
    description:
      "AI Engineer & Python Developer. Telegram-боты, LangChain, автоматизация и веб.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Татьяна Яновская — разработчик ПО",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Татьяна Яновская — разработчик ПО",
    description:
      "AI Engineer & Python Developer. Telegram-боты, LangChain, автоматизация и веб.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="font-sans text-foreground">
        <div className="site-bg" aria-hidden="true" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
