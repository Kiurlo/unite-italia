import ScatterPlotMeta from "../components/ScatterPlotMeta";

export const metadata = {
  title: "Mappa del Meta — UNITE Italia",
  description: "Analisi interattiva del metagame: Win Rate vs Pick Rate per tutti i Pokémon di Pokémon UNITE.",
};

export default function MetaPage() {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, #0a0a1a 0%, #0d1025 40%, #110d20 100%)",
        minHeight: "100vh",
        padding: "40px 20px 60px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Intestazione ── */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: 999,
              padding: "6px 18px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 16 }}>📊</span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#c4b5fd",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
              }}
            >
              Analisi del Metagame
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 900,
              margin: "0 0 12px",
              letterSpacing: "-0.5px",
              fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
              background:
                "linear-gradient(135deg, #f1f5f9 0%, #c4b5fd 50%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mappa del Meta
          </h1>
          <p
            style={{
              color: "#8b8aad",
              fontSize: 15,
              margin: 0,
              fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
            }}
          >
            Win Rate vs Pick Rate — Ultima Settimana
          </p>
        </div>

        {/* ── Scatter Plot ── */}
        <ScatterPlotMeta />

        {/* ── Nota metodologica ── */}
        <div
          style={{
            marginTop: 32,
            padding: "14px 20px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12,
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>ℹ️</span>
          <p
            style={{
              color: "#64748b",
              fontSize: 13,
              margin: 0,
              lineHeight: 1.6,
              fontFamily: "var(--font-exo2, 'Exo 2', sans-serif)",
            }}
          >
            I dati mostrati si riferiscono alle partite ranked dell&apos;ultima settimana.
            Le linee tratteggiate indicano le medie generali di Win Rate e Pick Rate,
            dividendo il grafico in quattro quadranti che classificano il ruolo
            di ogni Pokémon nel metagame corrente.
          </p>
        </div>

      </div>
    </div>
  );
}
