"use client";

import { useState, useEffect } from "react";
import { typeColors, rc, getPokeImage, getPokeImageByName, API_NAMES } from "../data/constants";
import { HERO_POKEMON, POKEMON } from "../data/pokemon";

// Altezza card compatta e overflow dell'immagine verso l'alto
const CARD_H   = 195; // altezza card visibile
const IMG_H    = 185; // altezza immagine
const IMG_BOT  = 92;  // distanza dal fondo del wrapper → piedi del Pokémon sopra l'area testo
// Overflow verso l'alto: CARD_H - IMG_BOT - IMG_H = 195 - 92 - 185 = -82px (sborda 82px sopra la card)

const HeroCard = ({ mon, rank, onSelect }: { mon: typeof HERO_POKEMON[0]; rank: number; onSelect?: (p: any) => void }) => {
  const [hov, setHov] = useState(false);
  const tc = typeColors[mon.type] || ["#888", "#666"];
  const r  = rc[mon.role];
  const apiName = API_NAMES[mon.id];
  const [imgSrc, setImgSrc] = useState(getPokeImage(mon.id));

  useEffect(() => {
    if (apiName) getPokeImageByName(apiName, mon.id).then(setImgSrc);
  }, [mon.id, apiName]);

  const handleClick = () => {
    if (!onSelect) return;
    const full = POKEMON.find(p => p.id === mon.id);
    if (full) onSelect(full);
  };

  return (
    // Wrapper: height fissa = altezza card. L'immagine sborda con valori negativi.
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={handleClick}
      style={{
        position: "relative",
        height: CARD_H,
        minWidth: 215, flex: "1 1 215px", maxWidth: 260,
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: hov ? "translateY(-6px) scale(1.04)" : "none",
      }}
    >
      {/* Card body: overflow hidden, contiene sfondo + glow + testo */}
      <div style={{
        position: "absolute", inset: 0,
        borderRadius: 14, overflow: "hidden",
        border: `1.5px solid ${hov ? tc[0] : "rgba(255,255,255,0.11)"}`,
        background: `linear-gradient(160deg, ${tc[0]}1e 0%, ${tc[1]}09 50%, rgba(10,8,22,0.98) 100%)`,
        boxShadow: hov ? `0 16px 42px ${tc[0]}38` : "0 3px 16px rgba(0,0,0,0.38)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}>
        {/* Glow a "pavimento" — visibile appena sotto i piedi del Pokémon */}
        <div style={{
          position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
          width: 120, height: 28, borderRadius: "50%",
          background: `radial-gradient(ellipse, ${tc[0]}48, transparent 70%)`,
          filter: "blur(14px)", zIndex: 1,
        }} />

        {/* Area testo in basso — occupa gli ultimi ~100px della card */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3,
          padding: "14px 12px 11px",
          background: `linear-gradient(180deg, transparent, rgba(6,4,18,0.82) 24%, rgba(6,4,18,0.97) 100%)`,
        }}>
          {/* Riga 1: numero rank + nome + ruolo */}
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7 }}>
            <span style={{
              flexShrink: 0, width: 20, height: 20, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 900, color: "#fff",
              background: rank === 1 ? "linear-gradient(135deg,#f59e0b,#f97316)"
                        : rank === 2 ? "linear-gradient(135deg,#94a3b8,#64748b)"
                        : rank === 3 ? "linear-gradient(135deg,#cd7f32,#92400e)"
                        : "rgba(255,255,255,0.14)",
            }}>{rank}</span>
            <span style={{
              flex: 1, color: "#f1f5f9", fontSize: 13, fontWeight: 800,
              whiteSpace: "nowrap",
            }}>{mon.name}</span>
            <span style={{
              flexShrink: 0, fontSize: 9, fontWeight: 700,
              padding: "2px 5px", borderRadius: 5,
              background: r?.bg || "rgba(255,255,255,0.1)",
              color: r?.text || "#fff",
              border: `1px solid ${r?.border || "#fff"}30`,
            }}>{mon.role}</span>
          </div>

          {/* Riga 2: win rate */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <span style={{ color: "#475569", fontSize: 10, fontWeight: 600, paddingBottom: 2 }}>Win Rate</span>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: tc[0], fontSize: 23, fontWeight: 900, lineHeight: 1 }}>
                {mon.winRate.toFixed(2)}%
              </div>
              <div style={{
                color: mon.winRateChange > 0 ? "#4ade80" : mon.winRateChange < 0 ? "#f87171" : "#64748b",
                fontSize: 10, fontWeight: 700, marginTop: 2,
              }}>
                {mon.winRateChange > 0 ? "▲" : mon.winRateChange < 0 ? "▼" : "●"}{" "}
                {mon.winRateChange > 0 ? "+" : ""}{mon.winRateChange.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Immagine Pokémon — sborda 68px sopra il bordo superiore della card */}
      <div style={{
        position: "absolute",
        bottom: IMG_BOT, left: "50%", transform: "translateX(-50%)",
        width: 178, height: IMG_H,
        zIndex: 10, pointerEvents: "none",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        filter: hov
          ? `drop-shadow(0 0 18px ${tc[0]}b0) drop-shadow(0 8px 22px rgba(0,0,0,0.9))`
          : "drop-shadow(0 6px 18px rgba(0,0,0,0.78))",
        transition: "filter 0.3s ease",
      }}>
        <img src={imgSrc} alt={mon.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
      </div>
    </div>
  );
};

export const HeroSection = ({ onSelect }: { onSelect?: (p: any) => void }) => (
  <section style={{ padding: "20px 0 0" }}>
    <div style={{ marginBottom: 20 }}>
      <h2 style={{ color: "#f8fafc", fontSize: 28, fontWeight: 900, margin: "0 0 6px" }}>Top 10 Meta al 22 febbraio 2026</h2>
      <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>I Pokémon con il miglior win rate in partite rankate</p>
    </div>
    {/*
      paddingTop: 80px crea lo spazio fisico sopra le card per le immagini che sbordano (~68px).
      Con overflowX: auto, overflowY diventa auto (CSS spec), ma il paddingTop è dentro il border-box
      quindi le immagini nel padding area NON vengono clippate.
    */}
    <div style={{
      display: "flex", gap: 14,
      overflowX: "auto", paddingTop: 80, paddingBottom: 10,
      scrollbarWidth: "thin", scrollbarColor: "rgba(139,92,246,0.3) transparent",
    }}>
      {HERO_POKEMON.map((mon, i) => (
        <HeroCard key={mon.id} mon={mon} rank={i + 1} onSelect={onSelect} />
      ))}
    </div>
  </section>
);
