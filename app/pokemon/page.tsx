"use client";

import { useRouter } from "next/navigation";
import { AllPokemonSection } from "../components/AllPokemon";

export default function PokemonListPage() {
  const router = useRouter();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "58px 20px 40px" }}>
      <div style={{ paddingTop: 24 }}>
        <AllPokemonSection onSelect={(p) => router.push(`/pokemon/${p.id}`)} />
      </div>
    </div>
  );
}
