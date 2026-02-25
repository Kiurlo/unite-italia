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
            <p style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 640, margin: "0 auto" }}>
              © 2023 Pokémon. © 1995–2023 Nintendo / Creatures Inc. / GAME FREAK inc. © 2023 Tencent. Tutti i diritti riservati.
            </p>
            <p style={{ color: "#64748b", fontSize: 11, lineHeight: 1.6, maxWidth: 640, margin: "6px auto 0" }}>
              UNITE Italia è un sito fan-made non affiliato, associato, autorizzato o approvato da nessuna delle società sopracitate.
              Questo sito fornisce esclusivamente informazioni e guide per il gioco Pokémon UNITE.
            </p>
            <p style={{ color: "#64748b", fontSize: 11, marginTop: 8, lineHeight: 1.6 }}>
              Quest&apos;opera è distribuita con{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#94a3b8", textDecoration: "underline", textUnderlineOffset: 2 }}
              >
                Licenza Creative Commons Attribuzione - Non commerciale - Non opere derivate 4.0 Internazionale
              </a>
              .
            </p>
            <p style={{ color: "#475569", fontSize: 11, marginTop: 8 }}>UNITE Italia — 2026</p>
          </div>
        </div>
      </body>
    </html>
  );
}
