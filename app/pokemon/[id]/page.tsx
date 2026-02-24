"use client";

import { useParams, useRouter } from "next/navigation";
import { POKEMON } from "../../data/pokemon";
import { PokemonPage } from "../../components/PokemonPage";

export default function PokemonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const pokemon = POKEMON.find((p) => p.id === id);

  if (!pokemon) return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px 40px", textAlign: "center", color: "#94a3b8" }}>
      <div style={{ fontSize: 15, fontWeight: 600 }}>Pokémon non trovato</div>
    </div>
  );

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "58px 20px 40px" }}>
      <PokemonPage p={pokemon} onBack={() => router.back()} />
    </div>
  );
}
