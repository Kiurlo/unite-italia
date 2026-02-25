"use client";

import { useState } from "react";
import Link from "next/link";
import { POKEMON } from "../data/pokemon";
import { PokeIcon } from "../components/common";

const ROLES = ["Tutti", "Attaccante", "Velocista", "Versatile", "Difensore", "Supporto"];

const roleBadge: Record<string, { bg: string; color: string }> = {
  Attaccante: { bg: "rgba(255,60,60,0.2)",   color: "#ff6060" },
  Velocista:  { bg: "rgba(200,60,255,0.2)",   color: "#c83cff" },
  Versatile:  { bg: "rgba(255,170,0,0.2)",    color: "#ffaa00" },
  Difensore:  { bg: "rgba(60,180,255,0.2)",   color: "#3cb4ff" },
  Supporto:   { bg: "rgba(60,220,120,0.2)",   color: "#3cdc78" },
};

const RANK_COLORS = ["#FFD700", "#C0C0C0", "#CD7F32"];

function wrGradient(wr: number): string {
  // Range reale dei dati: ~45% → ~58%
  // Soglia neutra: 50%
  // Sotto 50: rosso acceso → arancio (più è basso, più è rosso)
  // Sopra 50: verde chiaro → verde intenso (più è alto, più è saturo)

  if (wr >= 50) {
    // t va da 0 (=50%) a 1 (=58%)
    const t = Math.min((wr - 50) / 8, 1);
    const g = Math.round(160 + 95 * t);      // 160 → 255
    const b = Math.round(80 - 80 * t);        // 80 → 0
    const c1 = `rgb(0, ${g}, ${b})`;
    const c2 = `rgb(${Math.round(40 - 40 * t)}, 255, ${Math.round(120 - 120 * t)})`;
    return `linear-gradient(90deg, ${c1}, ${c2})`;
  } else {
    // t va da 0 (=50%) a 1 (=44%)
    const t = Math.min((50 - wr) / 6, 1);
    const g = Math.round(200 - 170 * t);      // 200 → 30
    const c1 = `rgb(255, ${g}, 0)`;
    const c2 = `rgb(255, ${Math.round(g * 0.6)}, 0)`;
    return `linear-gradient(90deg, ${c1}, ${c2})`;
  }
}

export default function ClassificaPage() {
  const [activeRole, setActiveRole] = useState("Tutti");

  const sorted = [...POKEMON]
    .filter(p => p.winRate !== undefined)
    .sort((a, b) => (b.winRate ?? 0) - (a.winRate ?? 0));

  const filtered = activeRole === "Tutti"
    ? sorted
    : sorted.filter(p => p.role === activeRole);

  return (
    <div style={{ background: "#0d0d1a", minHeight: "100vh", padding: "40px 20px" }}>
      <style>{`
        .rank-row { transition: background 0.15s, border-color 0.15s, transform 0.15s; }
        .rank-row:hover {
          background: rgba(120,80,255,0.1) !important;
          border-color: rgba(120,80,255,0.3) !important;
          transform: translateX(3px);
        }
        .pill-btn { transition: all 0.15s; }
      `}</style>

      <div style={{ maxWidth: 820, margin: "0 auto" }}>

        {/* Intestazione */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 style={{
            fontSize: 34,
            fontWeight: 900,
            color: "#f1f5f9",
            margin: 0,
            letterSpacing: "-0.5px",
            fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
          }}>
            Classifica Win Rate
          </h1>
          <p style={{
            color: "#8b8aad",
            fontSize: 14,
            marginTop: 8,
            fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
          }}>
            Tutti i Pokémon ordinati per win rate — partite rankate
          </p>
        </div>

        {/* Filtri ruolo */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          marginBottom: 28,
        }}>
          {ROLES.map(role => {
            const active = activeRole === role;
            return (
              <button
                key={role}
                className="pill-btn"
                onClick={() => setActiveRole(role)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: active ? "none" : "1px solid rgba(255,255,255,0.15)",
                  background: active
                    ? "linear-gradient(135deg, #7040ff, #4080ff)"
                    : "rgba(255,255,255,0.05)",
                  boxShadow: active ? "0 0 14px rgba(112,64,255,0.5)" : "none",
                  color: "#f1f5f9",
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}
              >
                {role}
              </button>
            );
          })}
        </div>

        {/* Lista */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map((p, i) => {
            const rank = i + 1;
            const rankColor = rank <= 3 ? RANK_COLORS[rank - 1] : "#8b8aad";
            const badge = roleBadge[p.role] ?? { bg: "rgba(255,255,255,0.08)", color: "#ccc" };
            const wr = p.winRate ?? 0;
            const delta = p.winRateChange ?? 0;

            return (
              <Link
                key={p.id}
                href={`/pokemon/${p.id}`}
                className="rank-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 64px 1fr auto auto",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "10px 16px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {/* Rank */}
                <div style={{
                  textAlign: "center",
                  fontSize: rank <= 3 ? 18 : 15,
                  fontWeight: 900,
                  color: rankColor,
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}>
                  {rank}
                </div>

                {/* Avatar */}
                <PokeIcon p={p} size={58} />

                {/* Nome + badge ruolo */}
                <div>
                  <div style={{
                    fontWeight: 800,
                    color: "#f1f5f9",
                    fontSize: 15,
                    fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                  }}>
                    {p.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                    <span style={{
                      display: "inline-block",
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: badge.bg,
                      color: badge.color,
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                    }}>
                      {p.role}
                    </span>
                    {p.id === 865 && (
                      <span style={{
                        display: "inline-block",
                        padding: "2px 7px",
                        borderRadius: 999,
                        background: "rgba(251,191,36,0.18)",
                        color: "#fbbf24",
                        fontSize: 10,
                        fontWeight: 900,
                        fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                        letterSpacing: "0.5px",
                        border: "1px solid rgba(251,191,36,0.35)",
                      }}>
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                {/* Win Rate */}
                <div style={{
                  fontSize: 20,
                  fontWeight: 800,
                  backgroundImage: wrGradient(wr),
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: 84,
                  textAlign: "right",
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}>
                  {wr.toFixed(2)}%
                </div>

                {/* Delta */}
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: delta > 0 ? "#3cdc78" : delta < 0 ? "#ff6060" : "#8b8aad",
                  minWidth: 52,
                  textAlign: "right",
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}>
                  {delta === 0 ? "—" : `${delta > 0 ? "+" : ""}${delta.toFixed(2)}%`}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
