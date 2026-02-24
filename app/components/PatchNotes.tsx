"use client";

import { useState } from "react";
import { PATCH_NOTES, PatchNote } from "../data/patches";

export const PatchDetailPage = ({ patch, onBack }: { patch: PatchNote; onBack: () => void }) => (
  <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#0f0d1a 0%,#1a1528 30%,#0f0d1a 100%)", fontFamily: "'Segoe UI',system-ui,sans-serif" }}>
    <div style={{ background: "rgba(15,13,26,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 20px", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={onBack} style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#c4b5fd", padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>{"< Indietro"}</button>
        <span style={{ color: "#64748b", fontSize: 13 }}>/ Patch Notes</span>
      </div>
    </div>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 60px" }}>
      <div style={{ marginBottom: 8 }}>
        <span style={{ background: `${patch.tagColor}22`, color: patch.tagColor, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, border: `1px solid ${patch.tagColor}44` }}>{patch.tag}</span>
        <span style={{ color: "#64748b", fontSize: 13, marginLeft: 12 }}>{patch.date}</span>
      </div>
      <h1 style={{ color: "#f8fafc", fontSize: 28, fontWeight: 900, margin: "12px 0 32px" }}>{patch.title}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {patch.sections.map((s, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h3 style={{ color: "#e2e8f0", fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>{s.heading}</h3>
            <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7, margin: 0, whiteSpace: "pre-wrap" }}>{s.content}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(139,92,246,0.08)", borderRadius: 12, border: "1px solid rgba(139,92,246,0.15)" }}>
        <p style={{ color: "#c4b5fd", fontSize: 12, margin: 0 }}>
          Fonte: <a href="https://community.pokemon.com/en-us/categories/unite-news-announcements" target="_blank" rel="noopener noreferrer" style={{ color: "#8b5cf6", textDecoration: "underline" }}>Pokémon Community Forums — UNITE News & Announcements</a>
        </p>
      </div>
    </div>
  </div>
);

const PatchCard = ({ patch, onClick }: { patch: PatchNote; onClick: () => void }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", borderRadius: 16, padding: "22px 24px",
      border: `1px solid ${hov ? patch.tagColor + "44" : "rgba(255,255,255,0.06)"}`, cursor: "pointer",
      transition: "all 0.3s", transform: hov ? "translateY(-3px)" : "none",
      boxShadow: hov ? `0 8px 30px ${patch.tagColor}15` : "none",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <span style={{ background: `${patch.tagColor}22`, color: patch.tagColor, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, border: `1px solid ${patch.tagColor}44` }}>{patch.tag}</span>
        <span style={{ color: "#64748b", fontSize: 12 }}>{patch.date}</span>
      </div>
      <h3 style={{ color: "#f1f5f9", fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>{patch.title}</h3>
      <p style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6, margin: "0 0 12px" }}>{patch.summary}</p>
      <span style={{ color: patch.tagColor, fontSize: 12, fontWeight: 600 }}>Leggi tutto →</span>
    </div>
  );
};

export const PatchNotesSection = ({ onOpenPatch }: { onOpenPatch: (p: PatchNote) => void }) => (
  <section style={{ padding: "0 0 48px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
      <h2 style={{ color: "#f8fafc", fontSize: 22, fontWeight: 800, margin: 0, whiteSpace: "nowrap" }}>Ultime Patch Notes</h2>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {PATCH_NOTES.map(p => <PatchCard key={p.id} patch={p} onClick={() => onOpenPatch(p)} />)}
    </div>
  </section>
);