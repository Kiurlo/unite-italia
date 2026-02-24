/**
 * Extracts move structure from pokemon.ts for comparison with PDF data.
 * Outputs: for each pokemon ID, the list of current move names.
 */
const fs = require('fs');

const content = fs.readFileSync('c:/Archivio/Dev/unite-italia/app/data/pokemon.ts', 'utf8');

// Pokemon ID to name mapping (from first section)
const idToName = {
  25: 'Pikachu', 815: 'Cinderace', 3: 'Venusaur', 10103: 'Ninetales Alola',
  282: 'Gardevoir', 658: 'Greninja', 845: 'Cramorant', 700: 'Sylveon',
  724: 'Decidueye', 471: 'Glaceon', 196: 'Espeon', 655: 'Delphox',
  884: 'Duraludon', 887: 'Dragapult', 151: 'Mew', 609: 'Chandelure',
  818: 'Inteleon', 1008: 'Miraidon', 663: 'Talonflame', 359: 'Absol',
  94: 'Gengar', 807: 'Zeraora', 571: 'Zoroark', 85: 'Dodrio',
  470: 'Leafeon', 911: 'Meowscarada', 6: 'Charizard', 448: 'Lucario',
  68: 'Machamp', 445: 'Garchomp', 149: 'Dragonite', 763: 'Tsareena',
  681: 'Aegislash', 212: 'Scizor', 248: 'Tyranitar', 794: 'Buzzwole',
  184: 'Azumarill', 376: 'Metagross', 892: 'Urshifu', 143: 'Snorlax',
  80: 'Slowbro', 558: 'Crustle', 820: 'Greedent', 709: 'Trevenant',
  473: 'Mamoswine', 9: 'Blastoise', 197: 'Umbreon', 131: 'Lapras',
  830: 'Eldegoss', 122: 'Mr. Mime', 40: 'Wigglytuff', 242: 'Blissey',
  720: 'Hoopa', 36: 'Clefable', 764: 'Comfey', 302: 'Sableye',
  491: 'Darkrai', 381: 'Latios', 936: 'Armarouge', 10035: 'Mega Charizard Y',
  10044: 'Mega Mewtwo Y', 937: 'Ceruledge', 778: 'Mimikyu', 10100: 'Raichu',
  123: 'Scyther', 52: 'Meowth', 257: 'Blaziken', 870: 'Falinks',
  130: 'Gyarados', 865: "Sirfetch'd", 888: 'Zacian', 925: 'Pawmot',
  10034: 'Mega Charizard X', 10067: 'Mega Gyarados', 10071: 'Mega Lucario',
  10043: 'Mega Mewtwo X', 781: 'Dhelmise', 395: 'Empoleon', 706: 'Goodra',
  245: 'Suicune', 959: 'Tinkaton', 869: 'Alcremie', 250: 'Ho-Oh',
  380: 'Latias', 54: 'Psyduck', 10196: 'Rapidash Galar', 134: 'Vaporeon',
  // Additional ones
  474: 'Porygon-Z', 866: 'Mr. Rime', 10007: 'Mewtwo', 249: 'Lugia',
  10025: 'Pikachu Libre', 745: 'Lycanroc', 10150: 'Raichu Alola',
  384: 'Rayquaza', 483: 'Dialga', 484: 'Palkia', 382: 'Kyogre', 383: 'Groudon',
};

// Extract sections for each pokemon by finding their ID entries in DETAILS
const detailsStart = content.indexOf('export const DETAILS');
const detailsSection = content.substring(detailsStart);

// Find all pokemon IDs in the details section
const idPattern = /^\s+(\d+):\s*\{/gm;
const ids = [];
let idMatch;
while ((idMatch = idPattern.exec(detailsSection)) !== null) {
  ids.push({ id: parseInt(idMatch[1]), index: idMatch.index });
}

const output = [];

for (let i = 0; i < ids.length; i++) {
  const { id, index } = ids[i];
  const nextIndex = i + 1 < ids.length ? ids[i + 1].index : detailsSection.length;
  const section = detailsSection.substring(index, nextIndex);

  const name = idToName[id] || `Unknown_${id}`;
  const moves = [];

  // Extract move names from this section
  const namePattern = /name:\s*"([^"]+)"/g;
  let nm;
  const passiveNames = ['Statico', 'Libero', 'Sincronizzazione', 'Torrent', 'Adorazione',
    'Lungo Raggio', 'Freddo Pungente', 'Fotosintesi', 'Stregoneria delle Erbe',
    'Fuoco Vivo', 'Passo Costante', 'Pugno di Ferro', 'Pelle Sabbia', 'Multiscaglia',
    'Punta di Forza', 'Cambio di Forma', 'Forza Bruta', 'Sabbiabuffera', 'Bestia Assorbente',
    'Gigaforza', 'Infiltratore', 'Nuovo Specie', 'Corpo Fiamma', 'Furtivo',
    'Motore Elettrico', 'Fiamma Viva', 'Super Fortuna', 'Divorasogni', 'Forzafulmine',
    'Illusione', 'Corsa Rapida', 'Graminaceo', 'Velo Neve', 'Corpo Metallico',
    'Ingordigia', 'Cambio di Forma', 'Attacco'];

  while ((nm = namePattern.exec(section)) !== null) {
    const n = nm[1];
    if (!n.startsWith('Build:') && !n.startsWith('Percorso') && !passiveNames.includes(n)) {
      moves.push(n);
    }
  }

  // Remove duplicates (from builds)
  const unique = [...new Set(moves)];
  output.push(`${id} (${name}): ${unique.join(', ')}`);
}

fs.writeFileSync('c:/Archivio/Dev/unite-italia/moves-by-pokemon.txt', output.join('\n'));
console.log('Done! Written to moves-by-pokemon.txt');
console.log('Sample:', output.slice(0, 3).join('\n'));
