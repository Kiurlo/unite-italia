"use client";

import { useState } from "react";
import { typeColors, rc, tierC } from "../data/constants";
import { DETAILS } from "../data/pokemon";
import { Ico, Badge, PokeIcon, Placeholder } from "./common";

const NEW_POKEMON_IDS = new Set([865, 52]);

const Sidebar = ({ p, d }: { p: any; d: any }) => {
  const c = rc[p.role];
  const tc2 = typeColors[p.type] || ["#888", "#666"];
  const isNew = NEW_POKEMON_IDS.has(p.id);
  return (
    <div style={{ width: 260, flexShrink: 0, background: "rgba(255,255,255,0.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", padding: 20, position: "sticky", top: 68 }}>
      <div style={{ textAlign: "center", marginBottom: 16, position: "relative" }}>
        {isNew && <div style={{ position: "absolute", top: 0, left: 0, background: "linear-gradient(135deg,#f59e0b,#fbbf24)", color: "#1a1000", fontWeight: 900, fontSize: 10, padding: "2px 8px", borderRadius: 6, letterSpacing: 1, zIndex: 2, boxShadow: "0 2px 8px rgba(245,158,11,0.5)" }}>NEW!</div>}
        <div style={{ display: "flex", justifyContent: "center" }}><PokeIcon p={p} size={130} /></div>
        <h2 style={{ color: "#f8fafc", fontSize: 20, fontWeight: 800, margin: "10px 0 4px" }}>{p.name}</h2>
        <p style={{ color: "#8b8aad", fontSize: 11, margin: "0 0 10px" }}>Build, Mosse, Statistiche</p>
        <div style={{ marginBottom: 10 }}><Badge text={p.tag} color={tc2[0]} /></div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
          <Badge text={p.style} color="#64748b" /><Badge text={p.difficulty} color="#64748b" /><Badge text={p.role} color={c.border} />
        </div>
      </div>
      {d && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, marginTop: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#94a3b8", fontSize: 13, fontWeight: 700, marginBottom: 10 }}><span>Livello</span><span>15</span></div>
          {([["PS", d.stats.ps], ["Attacco", d.stats.atk], ["Difesa", d.stats.def], ["Att. Sp.", d.stats.atksp], ["Dif. Sp.", d.stats.defsp], ["Tasso Critico", d.stats.crit], ["Rid. Ricarica", d.stats.cd], ["Rubavita", d.stats.life]] as [string, any][]).map(([l, v]) => (
            <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <span style={{ color: "#94a3b8", fontSize: 12 }}>{l}</span><span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MovesTab = ({ d, c }: { d: any; c: string }) => {
  if (!d) return <Placeholder />;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 18, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <Ico color="#f59e0b" size={44} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>{d.passive.name}</span><span style={{ color: "#f59e0b", fontSize: 11, fontWeight: 600 }}>Abilità Passiva</span></div>
            <p style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6, margin: "6px 0 0" }}>{d.passive.desc}</p>
          </div>
        </div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 18, border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <Ico color="#94a3b8" size={44} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>{d.basic.name}</span><span style={{ color: "#94a3b8", fontSize: 11 }}>Attacco Base</span></div>
            <p style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6, margin: "6px 0 8px" }}>{d.basic.desc}</p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              <div><div style={{ color: "#64748b", fontSize: 10, fontWeight: 600 }}>Danno - Base:</div><div style={{ color: "#ef4444", fontSize: 11, fontWeight: 600 }}>{d.basic.dmgBase}</div></div>
              <div><div style={{ color: "#64748b", fontSize: 10, fontWeight: 600 }}>Danno - Potenziato:</div><div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 600 }}>{d.basic.dmgBoost}</div></div>
            </div>
          </div>
        </div>
      </div>
      {d.moves.map((m: any, i: number) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 18, border: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <Ico color={c} size={44} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 15 }}>{m.name}</span><span style={{ color: "#94a3b8", fontSize: 11 }}>Mossa {m.slot}</span></div>
              <div style={{ display: "flex", gap: 6, margin: "6px 0", flexWrap: "wrap" }}>
                <span style={{ background: "rgba(139,92,246,0.15)", color: "#c4b5fd", padding: "2px 8px", borderRadius: 8, fontSize: 10, fontWeight: 600 }}>{m.cd}</span>
                {m.tags.map((t: string, j: number) => <span key={j} style={{ background: "rgba(34,197,94,0.15)", color: "#86efac", padding: "2px 8px", borderRadius: 8, fontSize: 10, fontWeight: 600 }}>{t}</span>)}
              </div>
              <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 600, margin: "4px 0" }}>Livello {m.level}</div>
              <p style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
            </div>
          </div>
        </div>
      ))}
      {d.upgrades.map((u: any, i: number) => (
        <div key={i}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "8px 0 12px" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} /><span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>Scelta Evoluzione Mossa {u.slot}</span><div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {u.choices.map((ch: any, j: number) => (
              <div key={j} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 14, padding: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                  <Ico color={c} size={38} />
                  <div><div style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14 }}>{ch.name}</div>
                    <div style={{ display: "flex", gap: 4, marginTop: 3 }}>
                      <span style={{ background: "rgba(139,92,246,0.15)", color: "#c4b5fd", padding: "1px 6px", borderRadius: 6, fontSize: 9, fontWeight: 600 }}>{ch.cd}</span>
                      {ch.tags.map((t: string, k: number) => <span key={k} style={{ background: "rgba(34,197,94,0.15)", color: "#86efac", padding: "1px 6px", borderRadius: 6, fontSize: 9, fontWeight: 600 }}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Livello {ch.level}</div>
                <p style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.5, margin: 0 }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ background: "linear-gradient(135deg,rgba(245,158,11,0.1),rgba(139,92,246,0.1))", borderRadius: 14, padding: 18, border: "1px solid rgba(245,158,11,0.25)" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <Ico color="#f59e0b" size={48} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: "#fcd34d", fontWeight: 800, fontSize: 16 }}>{d.unite.name}</span><span style={{ color: "#f59e0b", fontSize: 11, fontWeight: 600 }}>Mossa Unite</span></div>
            <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 600, margin: "4px 0" }}>Livello {d.unite.level}</div>
            <p style={{ color: "#c4b5fd", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{d.unite.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuildsTab = ({ d, c }: { d: any; c: string }) => {
  if (!d || !d.builds) return <Placeholder />;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {d.builds.map((b: any, i: number) => (
        <div key={i} style={{ background: "linear-gradient(135deg,rgba(45,27,105,0.5),rgba(30,80,140,0.3))", borderRadius: 16, border: "1px solid rgba(139,92,246,0.2)", overflow: "hidden" }}>
          <div style={{ padding: "18px 20px 14px" }}>
            <h3 style={{ color: "#f8fafc", fontSize: 17, fontWeight: 800, margin: 0 }}>{b.name}</h3>
            <p style={{ color: "#94a3b8", fontSize: 12, margin: "2px 0 0" }}>Percorso: {b.path}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, padding: "12px 20px 16px", flexWrap: "wrap" }}>
            {b.moveLevels.map((m: any, j: number) => (
              <div key={j} style={{ textAlign: "center" }}>
                <Ico color={c} size={52} />
                <div style={{ color: "#e2e8f0", fontSize: 11, fontWeight: 600, marginTop: 4 }}>{m.name}</div>
                <div style={{ color: "#f59e0b", fontSize: 10, fontWeight: 600 }}>Livello {m.lv}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: "0 20px 6px" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 6, flexWrap: "wrap" }}>
              <span style={{ color: "#c4b5fd", fontSize: 11, fontWeight: 700 }}>Assegnabili</span>
              <span style={{ color: "#94a3b8", fontSize: 11 }}>Alt</span>
              <span style={{ color: "#c4b5fd", fontSize: 11, fontWeight: 700 }}>Lotta</span>
              <span style={{ color: "#94a3b8", fontSize: 11 }}>Alt</span>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", paddingBottom: 14 }}>
              {b.held.map((h: string, j: number) => (
                <div key={j} style={{ textAlign: "center" }}>
                  <div style={{ width: 50, height: 50, borderRadius: 10, background: "rgba(139,92,246,0.12)", border: "2px solid rgba(139,92,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(139,92,246,0.3)" }} />
                  </div>
                  <div style={{ color: "#c4b5fd", fontSize: 9, marginTop: 3, maxWidth: 56, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{h}</div>
                </div>
              ))}
              {b.heldAlt && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 50, height: 50, borderRadius: 10, background: "rgba(100,116,139,0.1)", border: "2px dashed rgba(100,116,139,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(100,116,139,0.2)" }} />
                  </div>
                  <div style={{ color: "#64748b", fontSize: 9, marginTop: 3, maxWidth: 56, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.heldAlt}</div>
                </div>
              )}
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(245,158,11,0.12)", border: "2px solid rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(245,158,11,0.3)" }} />
                </div>
                <div style={{ color: "#fcd34d", fontSize: 9, marginTop: 3 }}>{b.battle}</div>
              </div>
              {b.battleAlt && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "rgba(100,116,139,0.1)", border: "2px dashed rgba(100,116,139,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(100,116,139,0.2)" }} />
                  </div>
                  <div style={{ color: "#64748b", fontSize: 9, marginTop: 3 }}>{b.battleAlt}</div>
                </div>
              )}
            </div>
          </div>
          {b.note && <div style={{ background: "rgba(245,158,11,0.08)", padding: "10px 20px", borderTop: "1px solid rgba(245,158,11,0.15)" }}><p style={{ color: "#f59e0b", fontSize: 11, margin: 0 }}>{b.note}</p></div>}
          <div style={{ padding: "8px 20px 14px" }}>
            {(b.emblems || []).map((e: string, j: number) => <div key={j} style={{ color: "#c4b5fd", fontSize: 11, lineHeight: 1.6 }}>{e}</div>)}
          </div>
        </div>
      ))}
    </div>
  );
};

const MetaTab = ({ d }: { d: any }) => {
  if (!d) return <Placeholder />;
  const m = d.meta;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "18px 20px" }}>
          <div style={{ color: "#64748b", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Tier Attuale</div>
          <div style={{ color: tierC[m.tier], fontSize: 36, fontWeight: 900, marginTop: 6 }}>{m.tier}</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "18px 20px" }}>
          <div style={{ color: "#64748b", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Corsia Consigliata</div>
          <div style={{ color: "#e2e8f0", fontSize: 16, fontWeight: 700, marginTop: 8 }}>{m.lane}</div>
        </div>
      </div>
      <div style={{ background: "rgba(34,197,94,0.08)", borderRadius: 14, padding: "16px 20px", border: "1px solid rgba(34,197,94,0.15)" }}>
        <div style={{ color: "#86efac", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Punti di Forza</div>
        <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{m.strengths}</div>
      </div>
      <div style={{ background: "rgba(239,68,68,0.08)", borderRadius: 14, padding: "16px 20px", border: "1px solid rgba(239,68,68,0.15)" }}>
        <div style={{ color: "#fca5a5", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Punti Deboli</div>
        <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{m.weaknesses}</div>
      </div>
    </div>
  );
};

export const PokemonPage = ({ p, onBack }: { p: any; onBack: () => void }) => {
  const [tab, setTab] = useState("moves");
  const c2 = rc[p.role];
  const d = DETAILS[p.id];
  const tabs = [{ k: "moves", l: "Mosse e Statistiche" }, { k: "build", l: "Build" }, { k: "meta", l: "Meta" }];
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#0f0d1a 0%,#1a1528 30%,#0f0d1a 100%)", fontFamily: "'Segoe UI',system-ui,sans-serif" }}>
      <div style={{ background: "rgba(15,13,26,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "10px 20px", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#c4b5fd", padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>{"< Indietro"}</button>
          <span style={{ color: "#64748b", fontSize: 13 }}>/ {p.name}</span>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", gap: 4 }}>
            {tabs.map(t => (
              <button key={t.k} onClick={() => setTab(t.k)} style={{ padding: "8px 16px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: tab === t.k ? 700 : 500, color: tab === t.k ? "#f1f5f9" : "#64748b", background: tab === t.k ? "rgba(139,92,246,0.15)" : "transparent", borderBottom: tab === t.k ? "2px solid #8b5cf6" : "2px solid transparent", borderRadius: "8px 8px 0 0", transition: "all 0.2s" }}>{t.l}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 20px 60px", display: "flex", gap: 24, alignItems: "flex-start" }}>
        <Sidebar p={p} d={d} />
        <div style={{ flex: 1, minWidth: 0 }}>
          {tab === "moves" && <MovesTab d={d} c={c2.border} />}
          {tab === "build" && <BuildsTab d={d} c={c2.border} />}
          {tab === "meta" && <MetaTab d={d} />}
        </div>
      </div>
    </div>
  );
};