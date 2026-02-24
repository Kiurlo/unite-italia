const fs = require('fs');
const content = fs.readFileSync('c:/Archivio/Dev/unite-italia/app/data/pokemon.ts', 'utf8');

// Extract all name: "value" occurrences
const moveNameRegex = /name:\s*"([^"]+)"/g;
const names = new Set();
let m;
while ((m = moveNameRegex.exec(content)) !== null) {
  const n = m[1];
  // Filter out known non-move names
  const exclude = [
    'Attacco', 'Statico', 'Libero', 'Sincronizzazione', 'Torrent', 'Adorazione',
    'Lungo Raggio', 'Freddo Pungente', 'Fotosintesi', 'Stregoneria delle Erbe',
    'Fuoco Vivo', 'Passo Costante', 'Pugno di Ferro', 'Pelle Sabbia', 'Multiscaglia',
    'Punta di Forza', 'Cambio di Forma', 'Forza Bruta', 'Sabbiabuffera', 'Bestia Assorbente',
    'Gigaforza', 'Infiltratore', 'Nuovo Specie', 'Corpo Fiamma', 'Furtivo',
    'Motore Elettrico', 'Fiamma Viva', 'Super Fortuna', 'Divorasogni', 'Forzafulmine',
    'Illusione', 'Corsa Rapida', 'Graminaceo', 'Velo Neve', 'Corpo Metallico',
    'Ingordigia', 'Pikachu', 'Cinderace', 'Venusaur', 'Gardevoir', 'Greninja',
    'Snorlax', 'Lucario', 'Charizard', 'Gengar', 'Leafeon', 'Darkrai', 'Meowth',
    'Celebi', 'Blissey', 'Eldegoss', 'Clefable',
  ];
  if (!n.startsWith('Build:') && !n.startsWith('Percorso') && !exclude.includes(n)) {
    names.add(n);
  }
}
const sorted = [...names].sort();
fs.writeFileSync('c:/Archivio/Dev/unite-italia/all-move-names.txt', sorted.join('\n'));
console.log('Total unique names:', sorted.length);
console.log('First 50:', sorted.slice(0, 50).join(', '));
