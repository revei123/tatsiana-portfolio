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
  title: "Tatsiana Yanovskaya — AI Engineer & Python Developer",
  description:
    "AI-инженер из Беларуси. Telegram-боты, LangChain, автоматизация и веб-разработка. Remote · USDT.",
  openGraph: {
    title: "Tatsiana Yanovskaya — AI Engineer",
    description:
      "Intelligent solutions: Telegram bots, LangChain pipelines, 3D automation & web.",
    type: "website",
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
      className={`${manrope.variable} ${unbounded.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="bg-mesh min-h-full font-sans text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
