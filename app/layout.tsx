import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tous Mandats — Fiscalité, immobilier & gestion à Genève",
    template: "%s · Tous Mandats",
  },
  description:
    "Cabinet genevois spécialisé en fiscalité immobilière, optimisation fiscale, gestion administrative et transactions. Perly, Genève.",
  metadataBase: new URL("https://tous-mandats.ch"),
  openGraph: {
    title: "Tous Mandats — Fiscalité immobilière à Genève",
    description: "Optimisez votre fiscalité, gérez vos démarches, valorisez votre patrimoine.",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-paper text-ink min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
