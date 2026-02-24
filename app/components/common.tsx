"use client";

import { useState, useEffect } from "react";
import { typeColors, getPokeImage, getPokeImageByName, API_NAMES } from "../data/constants";

export const Ico = ({ color = "#f59e0b", size = 44 }: { color?: string; size?: number }) => (
  <div style={{
    width: size, height: size, borderRadius: "50%",
    background: `radial-gradient(circle at 35% 35%,${color}55,${color}22)`,
    border: `2px solid ${color}66`,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  }}>
    <div style={{
      width: size * 0.45, height: size * 0.45, borderRadius: "50%",
      background: `${color}44`, border: `1.5px solid ${color}88`,
    }} />
  </div>
);

export const Badge = ({ text, color = "#8b5cf6" }: { text: string; color?: string }) => (
  <span style={{
    background: `${color}22`, color,
    padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600,
    border: `1px solid ${color}44`,
  }}>{text}</span>
);

export const PokeIcon = ({ p, size = 80 }: { p: any; size?: number }) => {
  const tc = typeColors[p.type] || ["#888", "#666"];
  const apiName = p.apiName || API_NAMES[p.id];
  const [imgSrc, setImgSrc] = useState(getPokeImage(p.id));

  useEffect(() => {
    if (apiName) {
      getPokeImageByName(apiName, p.id).then(setImgSrc);
    }
  }, [p.id, apiName]);

  return (
    <div style={{
      width: size, height: size, flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      filter: `drop-shadow(0 4px 16px ${tc[0]}55)`,
    }}>
      <img
        src={imgSrc}
        alt={p.name}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        loading="lazy"
        onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
      />
    </div>
  );
};

export const Placeholder = () => (
  <div style={{
    background: "rgba(255,255,255,0.03)", borderRadius: 16, padding: 40,
    textAlign: "center", border: "1px solid rgba(255,255,255,0.06)",
  }}>
    <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
    <div style={{ color: "#94a3b8", fontSize: 15, fontWeight: 600 }}>Scheda in costruzione</div>
    <div style={{ color: "#64748b", fontSize: 13, marginTop: 6 }}>I dati dettagliati saranno disponibili a breve!</div>
  </div>
);