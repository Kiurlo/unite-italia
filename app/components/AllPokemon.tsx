"use client";

import { useState, useMemo } from "react";
import { rc, tierC, ROLES, TIERS } from "../data/constants";
import { POKEMON, DETAILS } from "../data/pokemon";
import { PokeIcon } from "./common";

const NEW_POKEMON_IDS = new Set([865, 52]);

const PokemonCard = ({ p, onClick }: { p: any; onClick: (p: any) => void }) => {
  const c2 = rc[p.role];
  const [hov, setHov] = useState(false);
  const isNew = NEW_POKEMON_IDS.has(p.id);
  return (
    <div onClick={() => onClick(p)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? "linear-gradient(145deg,#252040,#302850)" : "linear-gradient(145deg,#1e1b2e,#2a2540)",
      borderRadius: 16, border: `1px solid ${hov ? c2.border : c2.border + "33"}`, cursor: "pointer",
      transition: "all 0.3s", overflow: "hidden", position: "relative",
      transform: hov ? "translateY(-6px) scale(1.02)" : "none",
      boxShadow: hov ? `0 12px 40px ${c2.border}30` : "0 2px 8px rgba(0,0,0,0.2)",
    }}>
      <div style={{ position: "absolute", top: 8, right: 8, background: tierC[p.tier], color: "#fff", fontWeight: 800, fontSize: 11, padding: "2px 8px", borderRadius: 6, letterSpacing: 1, zIndex: 2 }}>{p.tier}</div>
      {isNew && <div style={{ position: "absolute", top: 8, left: 8, background: "linear-gradient(135deg,#f59e0b,#fbbf24)", color: "#1a1000", fontWeight: 900, fontSize: 10, padding: "2px 8px", borderRadius: 6, letterSpacing: 1, zIndex: 2, boxShadow: "0 2px 8px rgba(245,158,11,0.5)" }}>NEW!</div>}
      <div style={{ display: "flex", justifyContent: "center", padding: "12px 8px 0px", background: `radial-gradient(circle at 50% 80%,${c2.border}18,transparent 70%)` }}><PokeIcon p={p} size={100} /></div>
      <div style={{ padding: "6px 12px 14px", textAlign: "center" }}>
        <div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15, marginBottom: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 5, flexWrap: "nowrap" }}>
          <span style={{ background: c2.bg, color: c2.text, fontSize: 12, padding: "3px 9px", borderRadius: 20, fontWeight: 600, border: `1px solid ${c2.border}44`, whiteSpace: "nowrap" }}>{c2.icon} {p.role}</span>
          <span style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8", fontSize: 12, padding: "3px 9px", borderRadius: 20, whiteSpace: "nowrap" }}>{p.style}</span>
        </div>
      </div>
    </div>
  );
};

export const AllPokemonSection = ({ onSelect }: { onSelect: (p: any) => void }) => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("Tutti");
  const [tier, setTier] = useState("Tutti");
  const filtered = useMemo(() => POKEMON.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (role === "Tutti" || p.role === role) &&
    (tier === "Tutti" || p.tier === tier)
  ).sort((a, b) => a.name.localeCompare(b.name, "it")), [search, role, tier]);
  const counts = useMemo(() => {
    const c: Record<string, number> = { Tutti: POKEMON.length };
    ROLES.slice(1).forEach(r => { c[r] = POKEMON.filter(p => p.role === r).length; });
    return c;
  }, []);
  return (
    <div>
      <input type="text" placeholder="Cerca Pokémon..." value={search} onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, color: "#f1f5f9", fontSize: 15, outline: "none", boxSizing: "border-box", marginBottom: 16 }} />
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {ROLES.map(r => { const a = role === r; const c2 = r !== "Tutti" ? rc[r] : null; return (
          <button key={r} onClick={() => setRole(r)} style={{ padding: "8px 16px", borderRadius: 12, border: a ? `1px solid ${c2 ? c2.border : "#8b5cf6"}` : "1px solid rgba(255,255,255,0.08)", background: a ? (c2 ? c2.bg : "rgba(139,92,246,0.15)") : "rgba(255,255,255,0.03)", color: a ? (c2 ? c2.text : "#c4b5fd") : "#64748b", fontWeight: a ? 700 : 500, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>{c2 && c2.icon} {r} <span style={{ fontSize: 11, opacity: 0.7 }}>({counts[r]})</span></button>
        ); })}
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 20, alignItems: "center" }}>
        <span style={{ color: "#64748b", fontSize: 12, fontWeight: 600, marginRight: 4 }}>TIER:</span>
        {TIERS.map(t => { const a = tier === t; return (
          <button key={t} onClick={() => setTier(t)} style={{ padding: "5px 12px", borderRadius: 8, border: a ? `1px solid ${t !== "Tutti" ? tierC[t] : "#8b5cf6"}` : "1px solid rgba(255,255,255,0.06)", background: a ? `${t !== "Tutti" ? tierC[t] : "#8b5cf6"}22` : "transparent", color: a ? (t !== "Tutti" ? tierC[t] : "#c4b5fd") : "#475569", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{t}</button>
        ); })}
      </div>
      <div style={{ color: "#64748b", fontSize: 13, marginBottom: 16 }}>{filtered.length} Pokémon trovati</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 14 }}>
        {filtered.map(p => <PokemonCard key={p.id} p={p} onClick={onSelect} />)}
      </div>
      {filtered.length === 0 && <div style={{ textAlign: "center", padding: "60px 20px", color: "#475569" }}><div style={{ fontSize: 16, fontWeight: 600 }}>Nessun Pokémon trovato</div></div>}
    </div>
  );
};