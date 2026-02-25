import type { Metadata } from "next";
import { Geist, Geist_Mono, Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "UNITE Italia — La guida italiana a Pokémon UNITE",
  description: "Tier list, build, statistiche e guide per Pokémon UNITE in italiano.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable}`}>
        <div style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg,#0f0d1a 0%,#1a1528 30%,#0f0d1a 100%)",
          fontFamily: "'Segoe UI',system-ui,sans-serif",
        }}>
          <Header />
          {children}
          <div style={{ padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <p style={{ color: "#475569", fontSize: 11, lineHeight: 1.6, maxWidth: 600, margin: "0 auto" }}>
              Pokémon UNITE è un marchio di The Pokémon Company / TiMi Studio Group. Questo è un sito fan-made non affiliato.
            </p>
            <p style={{ color: "#334155", fontSize: 11, marginTop: 8 }}>UNITE Italia — 2026</p>
          </div>
        </div>
      </body>
    </html>
  );
}
