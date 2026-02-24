"use client";

import { useState, useEffect } from "react";
import { typeColors, rc, getPokeImage, getPokeImageByName, API_NAMES } from "../data/constants";
import { HERO_POKEMON, POKEMON } from "../data/pokemon";

const HeroCard = ({ mon, rank, onSelect }: { mon: typeof HERO_POKEMON[0]; rank: number; onSelect?: (p: any) => void }) => {
  const [hov, setHov] = useState(false);
  const tc = typeColors[mon.type] || ["#888", "#666"];
  const r = rc[mon.role];
  const apiName = API_NAMES[mon.id];
  const [imgSrc, setImgSrc] = useState(getPokeImage(mon.id));

  useEffect(() => {
    if (apiName) {
      getPokeImageByName(apiName, mon.id).then(setImgSrc);
    }
  }, [mon.id, apiName]);
  const handleClick = () => {
    if (!onSelect) return;
    const full = POKEMON.find(p => p.id === mon.id);
    if (full) onSelect(full);
  };

  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={handleClick} style={{
      position: "relative", minWidth: 220, height: 320, borderRadius: 18, overflow: "hidden", cursor: "pointer",
      border: `1.5px solid ${hov ? tc[0] : "rgba(255,255,255,0.1)"}`,
      background: `linear-gradient(180deg, ${tc[0]}18 0%, ${tc[1]}08 40%, rgba(15,13,26,0.95) 100%)`,
      transition: "all 0.35s ease", transform: hov ? "translateY(-8px) scale(1.03)" : "none",
      boxShadow: hov ? `0 20px 50px ${tc[0]}30` : "0 4px 20px rgba(0,0,0,0.3)", flex: "1 1 220px", maxWidth: 280,
    }}>
      <div style={{
        position: "absolute", top: 12, left: 12, zIndex: 3, width: 32, height: 32, borderRadius: "50%",
        background: rank === 1 ? "linear-gradient(135deg,#f59e0b,#f97316)" : rank === 2 ? "linear-gradient(135deg,#94a3b8,#64748b)" : "linear-gradient(135deg,#b45309,#92400e)",
        display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}>{rank}</div>
      <div style={{
        position: "absolute", top: 14, right: 12, zIndex: 3, background: r?.bg || "rgba(255,255,255,0.1)",
        color: r?.text || "#fff", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 8, border: `1px solid ${r?.border || "#fff"}44`,
      }}>{r?.icon} {mon.role}</div>
      <div style={{ position: "absolute", top: 52, left: 0, right: 0, zIndex: 3, textAlign: "center" }}>
        <div style={{ color: "#f8fafc", fontSize: 18, fontWeight: 800 }}>{mon.name}</div>
      </div>
      <div style={{
        position: "absolute", bottom: 50, left: "50%", transform: "translateX(-50%)", width: 180, height: 180, zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        filter: hov ? `drop-shadow(0 0 20px ${tc[0]}66)` : "none", transition: "filter 0.35s",
      }}>
        <img src={imgSrc} alt={mon.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
      </div>
      <div style={{
        position: "absolute", bottom: 60, left: "50%", transform: "translateX(-50%)", width: 140, height: 50,
        borderRadius: "50%", background: `radial-gradient(ellipse, ${tc[0]}40, transparent 70%)`, filter: "blur(15px)", zIndex: 1,
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, padding: "14px 16px",
        background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.7) 30%)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: 600 }}>Win Rate</span>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: tc[0], fontSize: 26, fontWeight: 900, lineHeight: 1 }}>{mon.winRate.toFixed(2)}%</div>
            <div style={{
              color: mon.winRateChange > 0 ? "#4ade80" : mon.winRateChange < 0 ? "#f87171" : "#94a3b8",
              fontSize: 11, fontWeight: 700, marginTop: 2,
            }}>
              {mon.winRateChange > 0 ? "▲" : mon.winRateChange < 0 ? "▼" : "●"} {mon.winRateChange > 0 ? "+" : ""}{mon.winRateChange.toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroSection = ({ onSelect }: { onSelect?: (p: any) => void }) => (
  <section style={{ padding: "40px 0 48px" }}>
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ color: "#f8fafc", fontSize: 28, fontWeight: 900, margin: "0 0 6px" }}>Top 10 Meta al 22 febbraio 2026</h2>
      <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>I Pokémon con il miglior win rate in partite rankate</p>
    </div>
    <div style={{ display: "flex", gap: 18, overflowX: "auto", paddingBottom: 8, scrollbarWidth: "thin", scrollbarColor: "rgba(139,92,246,0.3) transparent" }}>
      {HERO_POKEMON.map((mon, i) => <HeroCard key={mon.id} mon={mon} rank={i + 1} onSelect={onSelect} />)}
    </div>
  </section>
);