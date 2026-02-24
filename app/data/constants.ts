export const typeColors: Record<string, [string, string]> = {
  electric: ["#F7D02C", "#F5C518"],
  fire: ["#EE8130", "#DD6610"],
  grass: ["#7AC74C", "#5CA935"],
  ice: ["#96D9D6", "#6FC4C0"],
  fairy: ["#D685AD", "#C5638E"],
  water: ["#6390F0", "#4A78DE"],
  psychic: ["#F95587", "#E83D6F"],
  ghost: ["#735797", "#5B4080"],
  dark: ["#705746", "#5A4639"],
  fighting: ["#C22E28", "#A82520"],
  normal: ["#A8A77A", "#918F62"],
  flying: ["#A98FF3", "#8B6FE0"],
  bug: ["#A6B91A", "#8FA115"],
  dragon: ["#6F35FC", "#5B2BE0"],
  steel: ["#B7B7CE", "#9F9FBA"],
  rock: ["#B6A136", "#9E8B2E"],
  poison: ["#A33EA1", "#8B2E89"],
  ground: ["#E2BF65", "#CBA94E"],
};

export const ROLES = ["Tutti", "Attaccante", "Velocista", "Versatile", "Difensore", "Supporto"];
export const TIERS = ["Tutti", "S", "A", "B", "C"];

export const rc: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  Attaccante: { bg: "rgba(239,68,68,0.15)", border: "#ef4444", text: "#fca5a5", icon: "\u2694\uFE0F" },
  Velocista: { bg: "rgba(59,130,246,0.15)", border: "#3b82f6", text: "#93c5fd", icon: "\u26A1" },
  Versatile: { bg: "rgba(245,158,11,0.15)", border: "#f59e0b", text: "#fcd34d", icon: "\uD83D\uDD30" },
  Difensore: { bg: "rgba(34,197,94,0.15)", border: "#22c55e", text: "#86efac", icon: "\uD83D\uDEE1\uFE0F" },
  Supporto: { bg: "rgba(168,85,247,0.15)", border: "#a855f7", text: "#c4b5fd", icon: "\uD83D\uDC9C" },
};

export const tierC: Record<string, string> = {
  S: "#ff6b6b",
  A: "#ffa94d",
  B: "#69db7c",
  C: "#74c0fc",
};

const BASE_ARTWORK = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

// Mappa ID dataset → nome PokeAPI kebab-case per Pokémon che richiedono risoluzione dinamica
export const API_NAMES: Record<number, string> = {
  10034: "charizard-mega-x",
  10035: "charizard-mega-y",
  10043: "mewtwo-mega-x",
  10044: "mewtwo-mega-y",
  10067: "gyarados-mega",
  10071: "lucario-mega",
  10100: "raichu-alola",
  10103: "ninetales-alola",
  10196: "rapidash-galar",
  925:   "pawmot",
};

const _imageCache = new Map<string, string>();

export async function getPokeImageByName(apiName: string, fallbackId: number): Promise<string> {
  if (_imageCache.has(apiName)) return _imageCache.get(apiName)!;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${apiName}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as { id: number };
    const url = `${BASE_ARTWORK}${data.id}.png`;
    _imageCache.set(apiName, url);
    return url;
  } catch {
    const url = `${BASE_ARTWORK}${fallbackId}.png`;
    _imageCache.set(apiName, url);
    return url;
  }
}

export function getPokeImage(id: number): string {
  return `${BASE_ARTWORK}${id}.png`;
}