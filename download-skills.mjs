#!/usr/bin/env node
/**
 * download-skills.mjs
 * Scarica le immagini delle mosse da CDN e le salva in public/skills/
 *
 * Uso: node download-skills.mjs
 *
 * Estrae da pokemon.ts:
 *  - POKEMON[].moves[]     → mosse iniziali + evolute (con dedup)
 *  - POKEMON[].uniteMove   → mossa Unite
 *  - DETAILS[id].passive   → nome abilità passiva
 *
 * URL CDN:   https://d275t8dp8rxb42.cloudfront.net/skills/{Pokémon}/{Mossa}.png
 * Salva in:  public/skills/{Pokémon}/{Mossa}.png
 */

import fs   from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http  from 'node:http';
import { fileURLToPath } from 'node:url';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const POKEMON_FILE = path.join(__dirname, 'app/data/pokemon.ts');
const OUTPUT_DIR   = path.join(__dirname, 'public/skills');
const CDN_BASE     = 'https://d275t8dp8rxb42.cloudfront.net/skills';
const CONCURRENCY  = 5; // download paralleli

// ─── 1. Parsing pokemon.ts ────────────────────────────────────────────────────

const src = fs.readFileSync(POKEMON_FILE, 'utf-8');

// Mappa: nome Pokémon → Set<nome mossa>
const pokemonMoves = new Map();
// Mappa: id numerico → nome Pokémon (serve per correlare DETAILS)
const idToName = new Map();

// Estrai POKEMON[] — ogni entry è su una riga singola
// Formato: {id:25,name:"Pikachu",...,moves:["A","B","C","D","E","F"],uniteMove:"G"}
const pokeRx = /\{id:(\d+),name:"([^"]+)"[^\n]*moves:\[([^\]]+)\][^\n]*uniteMove:"([^"]+)"/g;
let m;
while ((m = pokeRx.exec(src)) !== null) {
  const [, id, name, movesStr, uniteMove] = m;
  idToName.set(Number(id), name);

  // Estrai i nomi dalla stringa "A","B","C"... e aggiungi uniteMove
  const movesRaw = [...movesStr.matchAll(/"([^"]+)"/g)].map(r => r[1]);
  const moves = new Set([...movesRaw, uniteMove]);
  pokemonMoves.set(name, moves);
}

// Estrai nomi passive da DETAILS (linea per linea nella sezione DETAILS)
// Ogni entry di primo livello inizia con "  id: {" (2 spazi, poi numero)
const detailsIdx = src.indexOf('\nexport const DETAILS');
if (detailsIdx >= 0) {
  const detailsSrc = src.slice(detailsIdx);
  let currentId = null;
  for (const line of detailsSrc.split('\n')) {
    // Nuovo blocco Pokémon: "  12345: {"
    const idLine = line.match(/^  (\d+): \{/);
    if (idLine) {
      currentId = Number(idLine[1]);
    }
    // Nome passive: "    passive: { name: "NomeMossa" ..."
    if (currentId !== null) {
      const passiveLine = line.match(/passive:\s*\{\s*name:\s*"([^"]+)"/);
      if (passiveLine) {
        const name = idToName.get(currentId);
        if (name && pokemonMoves.has(name)) {
          pokemonMoves.get(name).add(passiveLine[1]);
        }
      }
    }
  }
}

const totalPoke  = pokemonMoves.size;
const totalMoves = [...pokemonMoves.values()].reduce((n, s) => n + s.size, 0);

console.log(`Pokémon trovati:        ${totalPoke}`);
console.log(`Immagini da scaricare:  ~${totalMoves} (${totalMoves - totalPoke} mosse + ${totalPoke} passive)`);
console.log(`Cartella output:        ${OUTPUT_DIR}`);
console.log(`Concorrenza:            ${CONCURRENCY} download paralleli\n`);

// ─── 2. HTTP helpers ──────────────────────────────────────────────────────────

function fetchBuffer(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error('Troppi redirect'));
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { timeout: 12_000 }, (res) => {
      // Segui redirect
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return resolve(fetchBuffer(res.headers.location, redirects + 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

/** Rimuove caratteri non validi nei nomi file (Windows-safe) */
function safeName(str) {
  return str.replace(/[<>:"/\\|?*\x00-\x1f]/g, '_');
}

// ─── 3. Runner con concorrenza limitata ───────────────────────────────────────

async function runConcurrent(tasks, limit) {
  let i = 0;
  const worker = async () => {
    while (i < tasks.length) await tasks[i++]();
  };
  await Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, worker));
}

// ─── 4. Main ─────────────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const stats = { ok: 0, skip: 0, err: 0 };
  const tasks = [];

  for (const [pokeName, moves] of pokemonMoves) {
    const pokeDir = path.join(OUTPUT_DIR, safeName(pokeName));

    for (const moveName of moves) {
      const destPath = path.join(pokeDir, safeName(moveName) + '.png');

      tasks.push(async () => {
        // Salta se già scaricato
        if (fs.existsSync(destPath)) {
          stats.skip++;
          return;
        }

        const url = `${CDN_BASE}/${encodeURIComponent(pokeName)}/${encodeURIComponent(moveName)}.png`;

        try {
          const buf = await fetchBuffer(url);
          fs.mkdirSync(pokeDir, { recursive: true });
          fs.writeFileSync(destPath, buf);
          stats.ok++;
          console.log(`  ✓  ${pokeName}/${moveName}.png`);
        } catch (e) {
          stats.err++;
          console.log(`  ✗  ${pokeName}/${moveName}.png  — ${e.message}`);
        }
      });
    }
  }

  console.log(`Avvio download di ${tasks.length} immagini...\n`);
  await runConcurrent(tasks, CONCURRENCY);

  console.log('\n──────────────────────────────────────────────');
  console.log('Completato!');
  console.log(`  ✓  Scaricati:          ${stats.ok}`);
  console.log(`  ↩  Già presenti:       ${stats.skip}`);
  console.log(`  ✗  Non trovati/errori: ${stats.err}`);
  console.log('──────────────────────────────────────────────');

  if (stats.ok > 0) {
    console.log(`\nImmagini salvate in: public/skills/`);
  }
}

main().catch(err => {
  console.error('\nErrore fatale:', err.message);
  process.exit(1);
});
