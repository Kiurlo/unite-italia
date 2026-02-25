"use client";

import { useState } from "react";
import Link from "next/link";

const BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const FLOATERS = [
  { id: 445, side: "left",  offset: "3%",  width: 130, opacity: 0.92, delay: "0s",   fg: true  },
  { id: 282, side: "right", offset: "3%",  width: 115, opacity: 0.92, delay: "1.2s", fg: true  },
  { id: 131, side: "left",  offset: "18%", width: 85,  opacity: 0.75, delay: "0.6s", fg: false },
  { id: 143, side: "right", offset: "18%", width: 75,  opacity: 0.75, delay: "1.8s", fg: false },
] as const;

export default function PokemonBanner() {
  const [hov, setHov] = useState(false);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

      <Link
        href="/pokemon"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "block",
          position: "relative",
          height: 200,
          borderRadius: 18,
          overflow: "hidden",
          textDecoration: "none",
          border: "1px solid rgba(120,80,255,0.25)",
          boxShadow: hov
            ? "0 12px 56px rgba(100,60,255,0.35)"
            : "0 8px 40px rgba(0,0,0,0.4)",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a0a3a 30%, #0d1a4a 60%, #0a1530 100%)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Stelle/particelle */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: [
            "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 80% 15%, rgba(255,255,255,0.3) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.5) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 25% 60%, rgba(180,120,255,0.6) 0%, transparent 100%)",
            "radial-gradient(2px 2px at 70% 75%, rgba(255,255,255,0.3) 0%, transparent 100%)",
            "radial-gradient(1px 1px at 40% 35%, rgba(255,255,255,0.4) 0%, transparent 100%)",
          ].join(","),
        }} />

        {/* Glow centrale */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500, height: 200, pointerEvents: "none",
          background: "radial-gradient(ellipse, rgba(100,60,255,0.15) 0%, transparent 70%)",
        }} />

        {/* Pokémon fluttuanti */}
        {FLOATERS.map((f) => (
          <div
            key={f.id}
            style={{
              position: "absolute", bottom: 0,
              [f.side]: f.offset,
              width: f.width,
              opacity: f.opacity,
              pointerEvents: "none",
              filter: f.fg
                ? `drop-shadow(0 0 ${hov ? "20px" : "12px"} rgba(120,80,255,${hov ? "0.75" : "0.5"}))`
                : "drop-shadow(0 0 8px rgba(100,160,255,0.4)) brightness(0.85)",
              animation: `float 4s ease-in-out ${f.delay} infinite`,
              transition: "filter 0.3s ease",
            }}
          >
            <img
              src={`${BASE}${f.id}.png`}
              alt=""
              style={{ width: "100%", display: "block" }}
              loading="lazy"
            />
          </div>
        ))}

        {/* Contenuto testuale */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 12, zIndex: 10, padding: "0 20px",
          textAlign: "center",
        }}>
          {/* Badge pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 20, padding: "4px 14px",
            fontSize: 12, fontWeight: 600, color: "rgba(220,220,240,0.85)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#7cfc00", display: "inline-block",
              animation: "pulse-dot 2s ease-in-out infinite",
            }} />
            86 Pokémon disponibili
          </div>

          {/* Titolo */}
          <div style={{
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 800, color: "#fff", lineHeight: 1.2,
          }}>
            Tutti i Pokémon,{" "}
            <span style={{
              background: "linear-gradient(90deg, #a06eff, #60aaff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              mosse e build consigliate
            </span>
          </div>

          {/* Sottotitolo */}
          <div style={{
            fontSize: 14, color: "rgba(200,200,220,0.7)", marginTop: -4,
          }}>
            Statistiche, ruoli e i migliori set per ogni campione
          </div>

          {/* CTA */}
          <div style={{
            background: "linear-gradient(135deg, #7040ff, #4080ff)",
            borderRadius: 50, padding: "10px 24px",
            fontSize: 14, fontWeight: 700, color: "#fff",
            boxShadow: hov
              ? "0 6px 28px rgba(100,60,255,0.65)"
              : "0 4px 20px rgba(100,60,255,0.4)",
            transform: hov ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}>
            Esplora la guida →
          </div>
        </div>
      </Link>
    </>
  );
}
