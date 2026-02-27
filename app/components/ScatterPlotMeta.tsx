"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { POKEMON } from "../data/pokemon";

/* ─── Costanti ────────────────────────────────────────────────── */

const BASE_ART =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

/** Mappa ID interno → ID PokeAPI per official-artwork */
const ARTWORK_ID: Record<number, number> = {
  10103: 10116, // Ninetales di Alola
  10100: 10100, // Raichu di Alola
  10196: 10196, // Rapidash di Galar
  10034: 6,     // Mega Charizard X
  10035: 6,     // Mega Charizard Y
  10043: 150,   // Mega Mewtwo X
  10044: 150,   // Mega Mewtwo Y
  10067: 130,   // Mega Gyarados
  10071: 448,   // Mega Lucario
};

function artworkUrl(id: number): string {
  return `${BASE_ART}${ARTWORK_ID[id] ?? id}.png`;
}

const ROLE_COLORS: Record<string, string> = {
  Attaccante: "#ef4444",
  Velocista:  "#3b82f6",
  Versatile:  "#f59e0b",
  Difensore:  "#22c55e",
  Supporto:   "#a855f7",
};

const ROLES = ["Tutti", "Attaccante", "Velocista", "Versatile", "Difensore", "Supporto"];

const M = { top: 40, right: 36, bottom: 55, left: 62 };
const CHART_H = 520;
const POINT_R = 18;

/* ─── Tipi ────────────────────────────────────────────────────── */

interface TooltipState {
  pokemon: (typeof POKEMON)[0];
  x: number; // relativo al container
  y: number;
  quadrant: string;
}

/* ─── Helper ──────────────────────────────────────────────────── */

function makeTicks(min: number, max: number, step: number): number[] {
  const ticks: number[] = [];
  const start = Math.ceil(min / step) * step;
  for (let v = start; v <= max + 0.001; v += step) ticks.push(+v.toFixed(4));
  return ticks;
}

function quadrantLabel(wr: number, pr: number, avgWR: number, avgPR: number): string {
  if (wr >= avgWR && pr >= avgPR) return "⭐ Meta Dominante";
  if (wr >= avgWR && pr < avgPR)  return "💎 Gemma Nascosta";
  if (wr < avgWR  && pr >= avgPR) return "🪤 Trappola Popolare";
  return "👻 Dimenticato";
}

/* ─── Componente ──────────────────────────────────────────────── */

export default function ScatterPlotMeta() {
  const [activeRole, setActiveRole] = useState("Tutti");
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [containerW, setContainerW] = useState(860);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Responsive width */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setContainerW(w);
    });
    ro.observe(el);
    setContainerW(el.clientWidth || 860);
    return () => ro.disconnect();
  }, []);

  const svgW  = containerW - 16; // container has padding 8 each side
  const plotW = svgW  - M.left - M.right;
  const plotH = CHART_H - M.top - M.bottom;

  /* Dataset */
  const allData = POKEMON.filter(
    (p) => p.winRate !== undefined && p.pickRate !== undefined
  );
  const viewData =
    activeRole === "Tutti"
      ? allData
      : allData.filter((p) => p.role === activeRole);

  /* Statistiche (sempre sull'intero dataset per linee coerenti) */
  const avgWR = allData.reduce((s, p) => s + (p.winRate ?? 0), 0) / allData.length;
  const avgPR = allData.reduce((s, p) => s + (p.pickRate ?? 0), 0) / allData.length;

  /* Range assi — sempre sull'intero dataset */
  const prValues = allData.map((p) => p.pickRate ?? 0);
  const wrValues = allData.map((p) => p.winRate ?? 0);
  const prMin = Math.max(0, Math.min(...prValues) - 1);
  const prMax = Math.min(50, Math.max(...prValues) + 2);
  const wrMin = Math.max(44, Math.min(...wrValues) - 0.5);
  const wrMax = Math.min(59, Math.max(...wrValues) + 0.5);

  const sx = useCallback(
    (pr: number) => ((pr - prMin) / (prMax - prMin)) * plotW,
    [prMin, prMax, plotW]
  );
  const sy = useCallback(
    (wr: number) => plotH - ((wr - wrMin) / (wrMax - wrMin)) * plotH,
    [wrMin, wrMax, plotH]
  );

  const qx = sx(avgPR);
  const qy = sy(avgWR);

  const xTicks = makeTicks(prMin, prMax, 5).filter((v) => v >= prMin && v <= prMax);
  const yTicks = makeTicks(wrMin, wrMax, 1).filter((v) => v >= wrMin && v <= wrMax);

  /* Statistiche view */
  const visibleAvgWR = viewData.length
    ? viewData.reduce((s, p) => s + (p.winRate ?? 0), 0) / viewData.length
    : 0;
  const visibleAvgPR = viewData.length
    ? viewData.reduce((s, p) => s + (p.pickRate ?? 0), 0) / viewData.length
    : 0;

  /* Handler tooltip — posizione relativa al container div */
  const handleEnter = useCallback(
    (
      e: React.MouseEvent<SVGGElement>,
      p: (typeof POKEMON)[0],
      px: number,
      py: number
    ) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      setHovered(p.id);
      setTooltip({
        pokemon: p,
        x: relX,
        y: relY,
        quadrant: quadrantLabel(p.winRate ?? 0, p.pickRate ?? 0, avgWR, avgPR),
      });
    },
    [avgWR, avgPR]
  );

  return (
    <div style={{ fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
      {/* ── Filtri ruolo ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        {ROLES.map((role) => {
          const active = activeRole === role;
          const color = ROLE_COLORS[role];
          return (
            <button
              key={role}
              onClick={() => { setActiveRole(role); setTooltip(null); setHovered(null); }}
              style={{
                padding: "7px 20px",
                borderRadius: 999,
                border: active && color
                  ? `1.5px solid ${color}`
                  : "1px solid rgba(255,255,255,0.13)",
                background: active
                  ? color ? `${color}20` : "rgba(139,92,246,0.18)"
                  : "rgba(255,255,255,0.04)",
                color: active ? (color || "#c4b5fd") : "#94a3b8",
                fontSize: 13,
                fontWeight: active ? 700 : 500,
                cursor: "pointer",
                fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                boxShadow: active ? `0 0 12px ${color ?? "#8b5cf6"}40` : "none",
                transition: "all 0.15s",
              }}
            >
              {role}
            </button>
          );
        })}
      </div>

      {/* ── Container grafico ── */}
      <div
        ref={containerRef}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          width={svgW}
          height={CHART_H}
          style={{ display: "block", overflow: "visible" }}
          onMouseLeave={() => { setTooltip(null); setHovered(null); }}
        >
          <defs>
            {allData.map((p) => (
              <clipPath key={`clip-${p.id}`} id={`scat-clip-${p.id}`}>
                <circle cx={0} cy={0} r={POINT_R} />
              </clipPath>
            ))}
          </defs>

          <g transform={`translate(${M.left},${M.top})`}>

            {/* ── Sfondi quadranti ── */}
            {/* ⭐ Meta Dominante — destra/alto — giallo */}
            <rect
              x={qx} y={0} width={plotW - qx} height={qy}
              fill="rgba(234,179,8,0.07)"
            />
            {/* 💎 Gemme Nascoste — sinistra/alto — verde */}
            <rect
              x={0} y={0} width={qx} height={qy}
              fill="rgba(34,197,94,0.06)"
            />
            {/* 🪤 Trappole Popolari — destra/basso — rosso */}
            <rect
              x={qx} y={qy} width={plotW - qx} height={plotH - qy}
              fill="rgba(239,68,68,0.06)"
            />
            {/* 👻 Dimenticati — sinistra/basso — grigio */}
            <rect
              x={0} y={qy} width={qx} height={plotH - qy}
              fill="rgba(148,163,184,0.04)"
            />

            {/* ── Griglia ── */}
            {xTicks.map((v) => (
              <line
                key={`gx-${v}`}
                x1={sx(v)} y1={0} x2={sx(v)} y2={plotH}
                stroke="rgba(255,255,255,0.05)" strokeWidth={1}
              />
            ))}
            {yTicks.map((v) => (
              <line
                key={`gy-${v}`}
                x1={0} y1={sy(v)} x2={plotW} y2={sy(v)}
                stroke="rgba(255,255,255,0.05)" strokeWidth={1}
              />
            ))}

            {/* ── Linee divisorie quadranti ── */}
            <line
              x1={qx} y1={0} x2={qx} y2={plotH}
              stroke="rgba(255,255,255,0.22)" strokeWidth={1.5}
              strokeDasharray="7 4"
            />
            <line
              x1={0} y1={qy} x2={plotW} y2={qy}
              stroke="rgba(255,255,255,0.22)" strokeWidth={1.5}
              strokeDasharray="7 4"
            />

            {/* ── Label quadranti ── */}
            {qx < plotW - 10 && (
              <text
                x={qx + 10} y={14}
                fill="rgba(234,179,8,0.55)" fontSize={11} fontWeight={700}
              >
                ⭐ Meta Dominante
              </text>
            )}
            {qx > 10 && (
              <text
                x={8} y={14}
                fill="rgba(34,197,94,0.55)" fontSize={11} fontWeight={700}
              >
                💎 Gemme Nascoste
              </text>
            )}
            {qx < plotW - 10 && qy < plotH - 10 && (
              <text
                x={qx + 10} y={plotH - 8}
                fill="rgba(239,68,68,0.55)" fontSize={11} fontWeight={700}
              >
                🪤 Trappole Popolari
              </text>
            )}
            {qx > 10 && qy < plotH - 10 && (
              <text
                x={8} y={plotH - 8}
                fill="rgba(148,163,184,0.4)" fontSize={11} fontWeight={700}
              >
                👻 Dimenticati
              </text>
            )}

            {/* ── Asse X: ticks + label ── */}
            {xTicks.map((v) => (
              <g key={`xt-${v}`} transform={`translate(${sx(v)},${plotH})`}>
                <line y2={5} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
                <text
                  y={18} textAnchor="middle"
                  fill="#64748b" fontSize={11}
                >{v}%</text>
              </g>
            ))}
            <text
              x={plotW / 2} y={plotH + 45}
              textAnchor="middle" fill="#94a3b8" fontSize={13} fontWeight={600}
            >
              Pick Rate (%)
            </text>

            {/* ── Asse Y: ticks + label ── */}
            {yTicks.map((v) => (
              <g key={`yt-${v}`} transform={`translate(0,${sy(v)})`}>
                <line x2={-5} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
                <text
                  x={-8} textAnchor="end" dominantBaseline="middle"
                  fill="#64748b" fontSize={11}
                >{v}%</text>
              </g>
            ))}
            <text
              transform={`translate(-50,${plotH / 2}) rotate(-90)`}
              textAnchor="middle" fill="#94a3b8" fontSize={13} fontWeight={600}
            >
              Win Rate (%)
            </text>

            {/* ── Punti dati (Pokémon non hoverd prima, hovered sopra) ── */}
            {[...viewData]
              .sort((a, b) => (a.id === hovered ? 1 : b.id === hovered ? -1 : 0))
              .map((p) => {
                const px = sx(p.pickRate ?? 0);
                const py = sy(p.winRate ?? 0);
                const color = ROLE_COLORS[p.role] || "#8b5cf6";
                const isH = hovered === p.id;
                const imgUrl = artworkUrl(p.id);

                return (
                  <g
                    key={p.id}
                    transform={`translate(${px},${py})`}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => handleEnter(e, p, px, py)}
                    onMouseLeave={() => { setHovered(null); setTooltip(null); }}
                  >
                    {/* Glow esterno al hover */}
                    {isH && (
                      <circle
                        r={POINT_R + 9}
                        fill={`${color}18`}
                        stroke={color}
                        strokeWidth={2}
                      />
                    )}
                    {/* Alone colorato ruolo */}
                    <circle r={POINT_R + 2} fill={color} opacity={isH ? 0.35 : 0.2} />
                    {/* Immagine ritagliata in cerchio */}
                    <image
                      href={imgUrl}
                      x={-POINT_R} y={-POINT_R}
                      width={POINT_R * 2} height={POINT_R * 2}
                      clipPath={`url(#scat-clip-${p.id})`}
                      preserveAspectRatio="xMidYMid meet"
                    />
                    {/* Bordo anello */}
                    <circle
                      r={POINT_R}
                      fill="none"
                      stroke={color}
                      strokeWidth={isH ? 2.5 : 1.5}
                    />
                  </g>
                );
              })}
          </g>
        </svg>

        {/* ── Tooltip HTML ── */}
        {tooltip && (
          <div
            style={{
              position: "absolute",
              left:
                tooltip.x > containerW * 0.62
                  ? tooltip.x - 224
                  : tooltip.x + 24,
              top: Math.max(8, tooltip.y - 80),
              background: "rgba(10,10,26,0.97)",
              border: `1px solid ${ROLE_COLORS[tooltip.pokemon.role] ?? "#8b5cf6"}55`,
              borderRadius: 12,
              padding: "12px 16px",
              pointerEvents: "none",
              zIndex: 50,
              minWidth: 210,
              boxShadow: "0 8px 28px rgba(0,0,0,0.6)",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 14,
                color: "#f1f5f9",
                fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                marginBottom: 8,
              }}
            >
              {tooltip.pokemon.name}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div
                style={{
                  fontSize: 12,
                  color: ROLE_COLORS[tooltip.pokemon.role] ?? "#c4b5fd",
                  fontWeight: 700,
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}
              >
                {tooltip.pokemon.role}
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
                Win Rate:{" "}
                <span style={{ color: "#f1f5f9", fontWeight: 700 }}>
                  {(tooltip.pokemon.winRate ?? 0).toFixed(2)}%
                </span>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
                Pick Rate:{" "}
                <span style={{ color: "#f1f5f9", fontWeight: 700 }}>
                  {(tooltip.pokemon.pickRate ?? 0).toFixed(2)}%
                </span>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#64748b",
                  marginTop: 4,
                  paddingTop: 4,
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
                }}
              >
                {tooltip.quadrant}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Legenda quadranti + statistiche ── */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Legenda */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[
            { label: "⭐ Meta Dominante",   color: "rgba(234,179,8,0.7)",   desc: "Alto WR + Alto PR" },
            { label: "💎 Gemme Nascoste",   color: "rgba(34,197,94,0.7)",   desc: "Alto WR + Basso PR" },
            { label: "🪤 Trappole Popolari", color: "rgba(239,68,68,0.7)",  desc: "Basso WR + Alto PR" },
            { label: "👻 Dimenticati",       color: "rgba(148,163,184,0.6)", desc: "Basso WR + Basso PR" },
          ].map((q) => (
            <div
              key={q.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 8,
                padding: "6px 12px",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: q.color, fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
                {q.label}
              </div>
              <div style={{ fontSize: 11, color: "#64748b", fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
                {q.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Statistiche */}
        <div
          style={{
            display: "flex",
            gap: 16,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10,
            padding: "8px 16px",
          }}
        >
          {[
            { label: "Pokémon", value: String(viewData.length) },
            { label: "Media WR", value: `${visibleAvgWR.toFixed(2)}%` },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#c4b5fd", fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: "#64748b", fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Legenda colori ruoli ── */}
      <div
        style={{
          marginTop: 14,
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        {Object.entries(ROLE_COLORS).map(([role, color]) => (
          <div
            key={role}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: color,
                boxShadow: `0 0 6px ${color}88`,
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "#94a3b8",
                fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
              }}
            >
              {role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
