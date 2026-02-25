"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPokeImage } from "../data/constants";

const tabs = [
  { href: "/",           label: "Home" },
  { href: "/pokemon",    label: "Tutti i Pokémon" },
  { href: "/classifica", label: "Classifica" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes header-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes particle-drift {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
          15%  { opacity: 0.75; }
          85%  { opacity: 0.35; }
          100% { transform: translateY(-90px) translateX(18px); opacity: 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.35; transform: scaleX(1) scaleY(1); }
          50%       { opacity: 0.75; transform: scaleX(1.2) scaleY(1.3); }
        }
      `}</style>

      <div style={{
        background: "linear-gradient(135deg, #080214 0%, #0d0520 18%, #1a0540 40%, #2d1b69 58%, #1a0540 78%, #080214 100%)",
        position: "relative",
        overflow: "visible",
        zIndex: 10,
      }}>
        {/* Luci radiali di profondità */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 90% at 12% 55%, rgba(139,92,246,0.22), transparent)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 45% 65% at 50% 25%, rgba(99,102,241,0.16), transparent)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 75% at 85% 55%, rgba(59,130,246,0.13), transparent)" }} />
        </div>

        {/* Particelle animate */}
        {[
          { left: "8%",  top: "60%", color: "rgba(139,92,246,0.8)",  size: 4, dur: "3.2s", delay: "0s"   },
          { left: "18%", top: "40%", color: "rgba(99,102,241,0.7)",  size: 3, dur: "4.1s", delay: "0.8s" },
          { left: "30%", top: "70%", color: "rgba(255,255,255,0.6)", size: 2, dur: "3.7s", delay: "1.5s" },
          { left: "42%", top: "50%", color: "rgba(139,92,246,0.7)",  size: 3, dur: "4.4s", delay: "0.4s" },
          { left: "55%", top: "65%", color: "rgba(59,130,246,0.75)", size: 4, dur: "3.5s", delay: "1.1s" },
          { left: "65%", top: "35%", color: "rgba(255,255,255,0.5)", size: 2, dur: "5.0s", delay: "0.2s" },
          { left: "72%", top: "75%", color: "rgba(196,181,253,0.7)", size: 3, dur: "3.9s", delay: "1.8s" },
          { left: "82%", top: "45%", color: "rgba(139,92,246,0.65)", size: 5, dur: "4.3s", delay: "0.6s" },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: p.color,
            animation: `particle-drift ${p.dur} ease-in-out ${p.delay} infinite`,
            pointerEvents: "none",
          }} />
        ))}

        {/* Contenuto centrato */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "22px 20px 0", position: "relative", zIndex: 2 }}>
          {/* Logo + tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, fontWeight: 900, color: "#fff",
                boxShadow: "0 4px 20px rgba(139,92,246,0.55), 0 0 0 1px rgba(139,92,246,0.3)",
                fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                flexShrink: 0,
              }}>U</div>
            </Link>

            <div>
              <Link href="/" style={{ textDecoration: "none" }}>
                <h1 style={{
                  color: "#f8fafc",
                  fontSize: 30,
                  fontWeight: 900,
                  margin: 0,
                  letterSpacing: "-0.5px",
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                  lineHeight: 1.1,
                }}>
                  UNITE{" "}
                  <span style={{
                    background: "linear-gradient(90deg, #8b5cf6, #c4b5fd, #f0abfc, #f59e0b, #8b5cf6)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 3.5s linear infinite",
                  }}>Italia</span>
                </h1>
              </Link>
              <p style={{
                color: "#8b8aad",
                fontSize: 13,
                margin: 0,
                fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                letterSpacing: "0.3px",
              }}>La guida italiana a Pokémon UNITE</p>
            </div>
          </div>

          {/* Nav tabs */}
          <div style={{ display: "flex", gap: 4 }}>
            {tabs.map(t => {
              const active = isActive(t.href);
              return (
                <Link key={t.href} href={t.href} style={{
                  display: "inline-block",
                  padding: "10px 22px",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: active ? 700 : 600,
                  color: active ? "#f1f5f9" : "#94a3b8",
                  background: active ? "rgba(139,92,246,0.18)" : "transparent",
                  borderBottom: active ? "2px solid #8b5cf6" : "2px solid transparent",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: "10px 10px 0 0",
                  transition: "all 0.2s",
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}>{t.label}</Link>
              );
            })}
          </div>
        </div>

        {/* Linea decorativa in fondo */}
        <div style={{
          height: 2,
          background: "linear-gradient(90deg, transparent, #8b5cf6 20%, #6366f1 50%, #3b82f6 80%, transparent)",
          opacity: 0.7,
        }} />

        {/* Pokémon che sbordano */}
        <div style={{
          position: "absolute",
          right: "max(20px, calc((100% - 1200px) / 2 + 20px))",
          bottom: 0,
          display: "flex",
          alignItems: "flex-end",
          gap: 0,
          pointerEvents: "none",
          zIndex: 5,
        }}>
          {/* Pikachu #25 — glow giallo */}
          <div style={{ position: "relative", bottom: -45 }}>
            <img
              src={getPokeImage(25)}
              alt="Pikachu"
              style={{
                width: 160, height: 160,
                objectFit: "contain",
                filter: "drop-shadow(0 0 14px rgba(251,191,36,0.75))",
                animation: "header-float 3.8s ease-in-out infinite",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: -6, left: "50%",
              transform: "translateX(-50%)",
              width: 80, height: 18,
              background: "rgba(251,191,36,0.5)",
              borderRadius: "50%",
              filter: "blur(10px)",
              animation: "pulse-glow 3.8s ease-in-out infinite",
            }} />
          </div>

          {/* Gengar #94 — glow viola */}
          <div style={{ position: "relative", bottom: -50 }}>
            <img
              src={getPokeImage(94)}
              alt="Gengar"
              style={{
                width: 185, height: 185,
                objectFit: "contain",
                filter: "drop-shadow(0 0 16px rgba(139,92,246,0.85))",
                animation: "header-float 4.4s ease-in-out 0.6s infinite",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: -6, left: "50%",
              transform: "translateX(-50%)",
              width: 90, height: 20,
              background: "rgba(139,92,246,0.55)",
              borderRadius: "50%",
              filter: "blur(11px)",
              animation: "pulse-glow 4.4s ease-in-out 0.6s infinite",
            }} />
          </div>

          {/* Charizard #6 — glow arancione */}
          <div style={{ position: "relative", bottom: -38 }}>
            <img
              src={getPokeImage(6)}
              alt="Charizard"
              style={{
                width: 168, height: 168,
                objectFit: "contain",
                filter: "drop-shadow(0 0 18px rgba(249,115,22,0.9))",
                animation: "header-float 5.0s ease-in-out 1.2s infinite",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", bottom: -6, left: "50%",
              transform: "translateX(-50%)",
              width: 85, height: 20,
              background: "rgba(249,115,22,0.55)",
              borderRadius: "50%",
              filter: "blur(11px)",
              animation: "pulse-glow 5.0s ease-in-out 1.2s infinite",
            }} />
          </div>
        </div>
      </div>
    </>
  );
}
