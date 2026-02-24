# PROJECT_CONTEXT.md — UNITE Italia

> File di contesto da leggere all'inizio di ogni nuova sessione di lavoro.

---

## 1. Panoramica del progetto

**UNITE Italia** è una guida fan-made italiana per **Pokémon UNITE** (il MOBA di The Pokémon Company / TiMi Studio Group).
Obiettivo: fornire ai giocatori italiani una risorsa completa in lingua italiana con schede dettagliate di ogni Pokémon giocabile, build consigliate, statistiche reali, note patch e meta aggiornato.
Il sito è **non ufficiale e non affiliato** con The Pokémon Company.

---

## 2. Stack tecnologico

| Tecnologia | Versione | Note |
|---|---|---|
| Next.js | 16.1.6 | App Router, no Pages Router |
| React | 19.2.3 | — |
| TypeScript | ^5 | Strict mode |
| Font | Geist / Geist Mono / **Exo 2** | via `next/font/google` — Exo 2 aggiunto per header gaming |
| Styling | **Inline styles ONLY** | Nessun Tailwind, nessun CSS module (tranne `page.module.css` non usato), nessuna libreria UI |
| Immagini Pokémon | PokeAPI GitHub raw | URL base + risoluzione dinamica via PokeAPI per forme speciali |

**Comando dev:** `npm run dev`
**Build:** `npm run build`

---

## 3. Struttura del progetto

```
unite-italia/
├── app/
│   ├── page.tsx                        # Entry point: monta <App />
│   ├── layout.tsx                      # Root layout — Exo 2 aggiunto, metadata aggiornati, lang="it"
│   ├── globals.css                     # Reset CSS globale minimale
│   ├── page.module.css                 # Non usato
│   ├── favicon.ico
│   │
│   ├── unite-italia-landing.tsx        # Componente App principale: gestisce routing state (home/pokemon/dettaglio)
│   │                                   # Contiene il nuovo header gaming (gradient, particelle, Pokémon overflow)
│   │
│   ├── components/
│   │   ├── common.tsx                  # Componenti condivisi: Ico, Badge, PokeIcon (con risoluzione immagine async), Placeholder
│   │   ├── AllPokemon.tsx              # Griglia di tutti i Pokémon con filtri (ruolo, tier, ricerca)
│   │   ├── PokemonPage.tsx             # Scheda dettaglio singolo Pokémon (sidebar + tab Mosse/Build/Meta)
│   │   ├── HeroSection.tsx             # Top 10 Meta — card clickabili, risoluzione immagine async, accetta onSelect
│   │   ├── PatchNotes.tsx              # Lista patch note + pagina dettaglio patch
│   │   └── MediaSection.tsx            # Griglia video YouTube (3 video con thumbnail e link)
│   │
│   └── data/
│       ├── constants.ts                # typeColors, ROLES, TIERS, rc, tierC, API_NAMES, getPokeImageByName(), getPokeImage()
│       ├── pokemon.ts                  # POKEMON[] (87 entries) + DETAILS{} (87 schede) + HERO_POKEMON[]
│       ├── patches.ts                  # PATCH_NOTES[] (3 patch: gen-2026, spirito-indomabile, gen-2026-01)
│       └── videos.ts                   # VIDEOS[] (3 video YouTube — titoli/descrizioni da aggiornare)
│
├── public/                             # Solo SVG placeholder di default Next.js
├── package.json
├── tsconfig.json
├── next.config.ts
└── eslint.config.mjs
```

---

## 4. Stato attuale — Funzionalità implementate

### Header (gaming style — implementato)
- Sfondo gradiente blu→viola→nero con luci radiali decorative
- Logo "UNITE Italia" con font Exo 2, shimmer animato su "Italia", tagline
- Navigazione Home / Tutti i Pokémon
- 8 particelle animate in background
- Linea decorativa gradient in fondo
- 3 Pokémon che sbordano sotto l'header (Pikachu, Gengar, Charizard) con float animation e glow colorato
- `overflow: visible` sul header, `paddingTop: 58px` sul contenuto per compensare

### Pagina Home
- **HeroSection**: top 10 Pokémon del meta con winrate, card animate con hover, **click → apre scheda Pokémon**
- Titolo: "Top 10 Meta al 22 febbraio 2026"
- **PatchNotesSection**: 3 patch note reali (gennaio 2026), con apertura pagina dettaglio
- **MediaSection**: 3 video YouTube con thumbnail, player esterno al click
- Footer con disclaimer fan-made

### Sezione Pokémon
- **87 Pokémon** nel roster (versione mondiale al 18/02/2026)
- Griglia responsive con card animate (hover lift + glow)
- Filtri: ricerca per nome, filtro per ruolo (5 ruoli), filtro per tier (S/A/B/C)
- Ordinamento **alfabetico** (localeCompare italiano)
- Badge **NEW!** giallo per Sirfetch'd (id:865) e Meowth (id:52)
- Contatore Pokémon trovati

### Scheda Pokémon (PokemonPage)
- Sidebar sticky con: immagine centrata, badge NEW!, nome, tipo, stile/difficoltà/ruolo, **statistiche a Livello 15** (ps, atk, def, atksp, defsp, crit%, cd%, life%)
- Tab **Mosse e Statistiche**: passiva, attacco base, 2 mosse iniziali, evoluzioni mossa (scelta), Mossa Unite
- Tab **Build**: build consigliate con path, oggetti tenuti, oggetto lotta, emblemi, note
- Tab **Meta**: tier attuale, corsia consigliata, punti di forza, punti deboli
- Pulsante "< Indietro" per tornare alla griglia

### Dati
- **Nomi mosse in DETAILS corretti** per tutti e 87 i Pokémon — i nomi in `DETAILS[id].moves`, `.upgrades`, `.unite` ora corrispondono ai nomi nelle colonne `moves[]` e `uniteMove` dell'array `POKEMON`
- Statistiche a **Livello 15** reali per 86/87 Pokémon (Mamoswine/473 ha valori approssimati)
- `interface Pokemon` include i campi opzionali `moves?: string[]` e `uniteMove?: string`

---

## 5. Sistema immagini Pokémon

### Come funziona (aggiornato)

In `app/data/constants.ts`:

```typescript
// Mappa ID dataset → nome PokeAPI kebab-case per forme speciali
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

// Risolve nome → ID reale PokeAPI con cache in memoria
export async function getPokeImageByName(apiName: string, fallbackId: number): Promise<string>

// URL diretto (fallback sync)
export function getPokeImage(id: number): string
```

- `PokeIcon` (common.tsx) e `HeroCard` (HeroSection.tsx): partono con `getPokeImage(id)` come fallback immediato, poi risolvono via API se il Pokémon è in `API_NAMES`
- Cache in-memory (`Map<string, string>`) evita chiamate duplicate
- Se la chiamata PokeAPI fallisce → usa l'ID numerico del dataset come fallback

**Per aggiungere un nuovo Pokémon con sprite errato**: aggiungere una riga in `API_NAMES` con `id_dataset: "nome-pokeapi-kebab"`.

---

## 6. Convenzioni e principi

### Styling
- **Solo inline styles** — nessuna classe CSS, nessun Tailwind
- Tema: sfondo scuro `#0f0d1a` / `#1a1528`, testo chiaro `#f8fafc`
- Palette accenti: viola `#8b5cf6`, ambra `#f59e0b`, per ruoli vedi `rc` in constants.ts
- Hover con `translateY(-6px) scale(1.02)` + glow colorato in base al ruolo/tipo

### Terminologia — ATTENZIONE
> ⚠️ I nomi delle mosse in `POKEMON[].moves[]` e `POKEMON[].uniteMove` sono le **fonti di verità** nel dataset — i DETAILS sono stati allineati ad essi.
> Tuttavia alcuni nomi potrebbero ancora non corrispondere ai nomi ufficiali italiani del gioco.
> I nomi in `patches.ts` (derivati dalle note patch ufficiali italiane) sono corretti e possono servire da riferimento.

### Identificatori Pokémon
- ID standard PokeAPI per forme normali (es. Pikachu=25, Snorlax=143)
- ID forma alternativa per Mega/forme regionali: vedi `API_NAMES` in constants.ts
- Pokémon con `id` nel dataset che non corrisponde all'ID PokeAPI (es. Pawmot: 925 nel dataset, 923 in PokeAPI) → gestiti da `API_NAMES`

### Struttura DETAILS
```typescript
DETAILS[id] = {
  stats: { ps, atk, def, atksp, defsp, crit: "X%", cd: "X%", life: "X%" },  // Livello 15
  passive: { name, desc },
  basic: { name, desc, dmgBase, dmgBoost },
  moves: [{ slot, name, level: "1 o 3", cd, tags: [], desc }],  // mosse iniziali
  upgrades: [{ slot, choices: [{ name, level, cd, tags, desc }] }],
  unite: { name, level, desc },
  builds: [{ name, path, moveLevels: [{name, lv}], held: [], heldAlt?, battle, battleAlt?, note?, emblems: [] }],
  meta: { tier, lane, strengths, weaknesses },
}
```

### Badge NEW!
- `const NEW_POKEMON_IDS = new Set([865, 52])` — definito sia in AllPokemon.tsx che PokemonPage.tsx
- Da aggiornare manualmente quando arrivano nuovi Pokémon

---

## 7. Problemi aperti / Prossimi passi

### Priorità alta

1. **Routing browser** — PROBLEMA IDENTIFICATO, NON ANCORA RISOLTO
   - Attualmente tutta la navigazione è gestita via `useState` in `unite-italia-landing.tsx` (SPA senza URL unici)
   - Il tasto "indietro" del browser esce dal sito invece di tornare alla vista precedente
   - Soluzione concordata: da decidere tra **Next.js App Router** (route file-based `/pokemon/[id]`) oppure **`history.pushState` + `popstate`** (meno invasivo, mantiene struttura attuale)

### Priorità media

2. **Aggiornare titoli e descrizioni video** in `app/data/videos.ts` (attualmente tutti placeholder)
3. **Aggiornare HERO_POKEMON e winrate** in `pokemon.ts` con dati meta reali quando disponibili
4. **Aggiornare tier list** con meta corrente
5. **Badge NEW!** — rimuovere/aggiornare per Sirfetch'd e Meowth quando non saranno più "nuovi"

### Priorità bassa / Futuro
6. Pagina oggetti (held items, battle items)
7. Pagina emblemi
8. Tier list interattiva
9. Sistema di ricerca unificata (mosse, oggetti, Pokémon)

---

## 8. Note importanti

- **Routing**: non usa Next.js App Router per navigazione — tutto è gestito via `useState` in `unite-italia-landing.tsx`. Non esistono route separate `/pokemon/[id]`. Conseguenza: il tasto back del browser esce dal sito (da risolvere).

- **File più grande**: `app/data/pokemon.ts` supera 256KB (~2600+ righe). Non si può leggere tutto in una volta con il tool Read — usare `offset` + `limit` o `Grep` per cercare sezioni specifiche.

- **Immagini**: servite direttamente da GitHub PokeAPI CDN, nessun file locale in `/public/`. La risoluzione dinamica via `getPokeImageByName()` gestisce le forme speciali (Mega, regionali).

- **Statistiche Mamoswine (id:473)**: non presenti nei dati ufficiali forniti — i valori attuali sono approssimati.

- **Nomi mosse nei patch notes**: i nomi in `patches.ts` sono corretti perché derivati dalle note patch ufficiali italiane — usarli come riferimento per verificare i nomi in `pokemon.ts`.

- **"use client"**: tutti i componenti interattivi hanno la direttiva `"use client"` — non usare Server Components per la logica UI.

- **Font Exo 2**: caricato in `layout.tsx` con CSS variable `--font-exo2`, pesi 400/700/900. Usato nell'header per logo e nav.
