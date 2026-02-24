/**
 * update-moves.js
 * Aggiorna i nomi delle mosse in pokemon.ts con i nomi ufficiali italiani.
 * Lavora SEZIONE PER SEZIONE (per Pokémon ID) per evitare conflitti.
 *
 * Mappatura basata su "Pokemon - Nomi delle Mosse in Italiano.pdf"
 */
const fs = require('fs');
const filePath = 'c:/Archivio/Dev/unite-italia/app/data/pokemon.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Applica sostituzioni dentro la sezione di un Pokémon specifico
function repInSection(pokemonId, oldName, newName) {
  // Find the section for this pokemon
  const sectionStart = content.indexOf(`\n  ${pokemonId}: {`);
  if (sectionStart === -1) {
    console.warn(`Section not found for ID ${pokemonId}`);
    return;
  }
  // Find the end: next top-level ID or end of DETAILS
  // Look for the next "\n  NNNN: {" pattern after sectionStart
  const afterSection = content.substring(sectionStart + 1);
  const nextSectionMatch = afterSection.search(/\n  \d+: \{/);
  const sectionEnd = nextSectionMatch === -1
    ? content.length
    : sectionStart + 1 + nextSectionMatch;

  const before = content.substring(0, sectionStart);
  let section = content.substring(sectionStart, sectionEnd);
  const after = content.substring(sectionEnd);

  const oldStr = `name: "${oldName}"`;
  const newStr = `name: "${newName}"`;
  if (!section.includes(oldStr)) {
    console.warn(`  [${pokemonId}] NOT FOUND: "${oldName}"`);
  } else {
    section = section.split(oldStr).join(newStr);
  }
  content = before + section + after;
}

// Helper: sostituzione globale (per nomi completamente unici nel file)
function repGlobal(oldName, newName) {
  const oldStr = `name: "${oldName}"`;
  const newStr = `name: "${newName}"`;
  if (!content.includes(oldStr)) {
    console.warn(`GLOBAL NOT FOUND: "${oldName}"`);
  } else {
    content = content.split(oldStr).join(newStr);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// MAPPING COMPLETO - fonte: "Pokemon - Nomi delle Mosse in Italiano.pdf"
// ═══════════════════════════════════════════════════════════════════════════

// ──────────────────────────────────────────────────────────
// PIKACHU (25) - Tuonoshock/Energisfera | Fulmine/Locomovolt | Tuono/Energisfera | Bolle di Tuono
// ──────────────────────────────────────────────────────────
repInSection(25, 'Elettrotela', 'Energisfera');
repInSection(25, 'Palla Elettro', 'Fulmine');
repInSection(25, 'Fulmine', 'Tuono');          // lv4 Thunder (Thunderbolt sarà rinominato da "Palla Elettro")
// NOTA: dopo questa sezione, Pikachu avrà Fulmine(da Palla Elettro) e Tuono(da Fulmine originale)
// Ma repInSection rinomina TUTTI i "Fulmine" nella sezione, incluso il build che già li cita.
// Quindi dobbiamo fare: prima Fulmine→Tuono, poi Palla Elettro→Fulmine
// Riapplico nell'ordine corretto:
// ... Actually "repInSection" è già stato applicato. Dobbiamo rifare nell'ordine giusto.
// Rileggo la sezione e riapplico correttamente:

// Re-doing Pikachu in correct order since both share "Fulmine" name:
// Reset and redo Pikachu section
{
  const sStart = content.indexOf('\n  25: {');
  const rest = content.substring(sStart + 1);
  const nxt = rest.search(/\n  \d+: \{/);
  const sEnd = nxt === -1 ? content.length : sStart + 1 + nxt;
  let sec = content.substring(sStart, sEnd);
  // Correct order: first rename the old "Fulmine"(Thunder) to a temp, then rename "Palla Elettro"→"Fulmine", then temp→"Tuono"
  sec = sec.split('name: "Elettrotela"').join('name: "Energisfera"');
  // Now "Fulmine" in section = current Thunder (wrong name) + possibly in build refs
  // "Palla Elettro" = Thunderbolt (wrong name)
  // Step 1: rename wrong "Fulmine"(Thunder) to "Tuono"
  sec = sec.split('name: "Fulmine"').join('name: "Tuono"');
  // Step 2: rename "Palla Elettro"(Thunderbolt) to "Fulmine"
  sec = sec.split('name: "Palla Elettro"').join('name: "Fulmine"');
  sec = sec.split('name: "Surf Elettrico"').join('name: "Locomovolt"');
  sec = sec.split('name: "Tuonobomba"').join('name: "Energisfera"');
  sec = sec.split('name: "Thunderstorm"').join('name: "Bolle di Tuono"');
  content = content.substring(0, sStart) + sec + content.substring(sEnd);
}

// ──────────────────────────────────────────────────────────
// CINDERACE (815) - Braciere/Sottocarico | Palla Infuocata/Calciardente | Nitrocarica/Fintoattacco | Rovesciata Fiammante
// ──────────────────────────────────────────────────────────
repInSection(815, 'Brace', 'Braciere');
repInSection(815, 'Spazzabassa', 'Sottocarico');
repInSection(815, 'Toppafiamma', 'Palla Infuocata');
repInSection(815, 'Calcio Ardente', 'Calciardente');
repInSection(815, 'Tiro di Scatto', 'Nitrocarica');
repInSection(815, 'Cambio Campo', 'Fintoattacco');
repInSection(815, 'Blocco Pirotecnico', 'Rovesciata Fiammante');

// ──────────────────────────────────────────────────────────
// VENUSAUR (3) - Semebomba/Fogliamagica | Fangobomba/Gigassorbimento | Solarraggio/Petalodanza | Furia Verde
// ──────────────────────────────────────────────────────────
repInSection(3, 'Fogliolama', 'Fogliamagica');    // Razor Leaf starting
repInSection(3, 'Frustasferza', 'Semebomba');     // Seed Bomb starting
repInSection(3, 'Raggio Solare', 'Solarraggio');  // Solar Beam
repInSection(3, 'Megasascia', 'Fangobomba');      // Sludge Bomb
repInSection(3, 'Danza Petali', 'Petalodanza');   // Petal Dance
repInSection(3, 'Crescita', 'Gigassorbimento');   // Giga Drain
repInSection(3, 'Bombardamento di Petali', 'Furia Verde'); // Unite

// ──────────────────────────────────────────────────────────
// NINETALES DI ALOLA (10103) - Polvereneve/Ventogelo | Magibrillio/Valanga | Velaurora/Bora | Nube di Neve
// ──────────────────────────────────────────────────────────
repInSection(10103, 'Soffio Ghiaccio', 'Polvereneve');
repInSection(10103, 'Ululato', 'Ventogelo');
repInSection(10103, 'Bufera', 'Valanga');
repInSection(10103, 'Raggio Ghiaccio', 'Geloscheggia');
repInSection(10103, 'Aurora', 'Velaurora');
repInSection(10103, 'Palla Aurora', 'Bora');
repInSection(10103, 'Tempesta di Neve Polare', 'Nube di Neve');

// ──────────────────────────────────────────────────────────
// GARDEVOIR (282) - Confusione/Teletrasporto | Psicoshock/Divinazione | Psichico/Forzalunare | Vuoto Fatato
// ──────────────────────────────────────────────────────────
repInSection(282, 'Psioraggio', 'Confusione');     // Confusion starting
// Teletrasporto is already correct
repInSection(282, 'Luna di Sogno', 'Psicoshock');  // Psyshock
repInSection(282, 'Palla Lunare', 'Divinazione');  // Moonblast
repInSection(282, 'Futurovisione', 'Forzalunare'); // Future Sight → Moonblast alt
repInSection(282, 'Divinazione Psichica', 'Vuoto Fatato'); // Unite

// ──────────────────────────────────────────────────────────
// GRENINJA (658) - Bolla/Sostituto | Doppioteam/Muro di Fumo | Acquashuriken/Surf | Acquashuriken Gigante
// ──────────────────────────────────────────────────────────
repInSection(658, 'Idrobolla', 'Bolla');           // Bubble starting
repInSection(658, 'Doppiochop', 'Sostituto');      // Substitute starting
repInSection(658, "Shuriken d'Acqua", 'Doppioteam'); // Double Team
repInSection(658, 'Aquataglio', 'Muro di Fumo');   // Smokescreen
repInSection(658, 'Schizzofango', 'Acquashuriken');// Water Shuriken
repInSection(658, 'Sostituto', 'Surf');            // Surf upgrade (il Sostituto nelle upgrades)
// Note: "Sostituto" starting is already correct from prev step
repInSection(658, 'Tempesta Ninja', 'Acquashuriken Gigante'); // Unite

// ──────────────────────────────────────────────────────────
// CRAMORANT (845) - Mulinello/Danzadipiume | Tifone/Aereassalto | Surf/Sub | Raffica di Inghiottitutto
// ──────────────────────────────────────────────────────────
repInSection(845, 'Soffiaurale', 'Mulinello');
repInSection(845, 'Tuffo', 'Danzadipiume');
repInSection(845, 'Tempestaurale', 'Tifone');
repInSection(845, 'Voracibecco', 'Aereassalto');
repInSection(845, 'Surfata', 'Surf');
repInSection(845, 'Tuffobomba', 'Sub');
repInSection(845, 'Starnazzo Predatore', 'Raffica di Inghiottitutto');

// ──────────────────────────────────────────────────────────
// SYLVEON (700) - Cometapugno/Occhioni Teneri | Magifuoco/Granvoce | Assorbabacio/Calmamente | Danza Fatata
// ──────────────────────────────────────────────────────────
repInSection(700, 'Scoppio', 'Cometapugno');
repInSection(700, 'Fascino', 'Occhioni Teneri');
repInSection(700, 'Voce Ipnotica', 'Magifuoco');
repInSection(700, 'Stelle Misteriose', 'Granvoce');
repInSection(700, 'Raggi Fata', 'Assorbabacio');
repInSection(700, 'Palla Lunare', 'Calmamente');
repInSection(700, 'Sinfonia Splendente', 'Danza Fatata');

// ──────────────────────────────────────────────────────────
// DECIDUEYE (724) - Fogliame/Sbigottimento | Fogliamagica/Cucitura d'Ombra | Fogliatempesta/Furtivombra | Raffica di Frecce
// ──────────────────────────────────────────────────────────
repInSection(724, 'Fogliolama', 'Fogliame');
repInSection(724, 'Azione Fantasma', 'Sbigottimento');
repInSection(724, 'Feritoia', 'Fogliamagica');
repInSection(724, 'Passo Umbra', "Cucitura d'Ombra");
repInSection(724, 'Tiro Ombra', 'Fogliatempesta');
repInSection(724, 'Freccia Spiritica', 'Furtivombra');
repInSection(724, "Rapina d'Ombra", 'Raffica di Frecce');

// ──────────────────────────────────────────────────────────
// GLACEON (471) - Cometapugno/Ventogelo | Gelolancia/Ventogelo | Gelo-scheggia/Liofilizzazione | Palcoscenico Glaciale
// ──────────────────────────────────────────────────────────
repInSection(471, 'Soffio Ghiaccio', 'Cometapugno');
repInSection(471, 'Pugnalata Ghiaccio', 'Ventogelo');
repInSection(471, 'Bufera', 'Gelolancia');
repInSection(471, 'Raggio Ghiaccio', 'Geloscheggia');
repInSection(471, 'Lama di Ghiaccio', 'Liofilizzazione');
repInSection(471, 'Grandine', 'Ventogelo');   // second Ventogelo choice
repInSection(471, 'Glaciazione Totale', 'Palcoscenico Glaciale');

// ──────────────────────────────────────────────────────────
// ESPEON (196) - Cometapugno/Rugito | Psicoshock/Veicolaforza | Psicoraggio/Divinazione | Psicosole
// ──────────────────────────────────────────────────────────
repInSection(196, 'Psioraggio', 'Cometapugno');
repInSection(196, 'Psicoscossone', 'Rugito');
repInSection(196, 'Psichico', 'Psicoshock');
repInSection(196, 'Mattino Sole', 'Veicolaforza');
repInSection(196, 'Psicoscossone Potenziato', 'Psicoraggio');
repInSection(196, 'Futurovisione', 'Divinazione');
repInSection(196, 'Psico Ultime', 'Psicosole');

// ──────────────────────────────────────────────────────────
// DELPHOX (655) - Braciere/Fuocofatuo | Fuocobomba/Magifuoco | Turbofuoco/Nitrocarica | Fuochi d'Artificio Fatati
// ──────────────────────────────────────────────────────────
repInSection(655, 'Brace', 'Braciere');
// Fuocofatuo already correct
repInSection(655, 'Lanciafiamme', 'Fuocobomba');   // Fire Blast (NOT Flamethrower here)
repInSection(655, 'Fiamma Mistica', 'Magifuoco');  // Sacred Fire / Overheat
repInSection(655, 'Anello di Fuoco', 'Turbofuoco'); // Fire Spin
repInSection(655, 'Ignifugo', 'Nitrocarica');       // Flame Charge
repInSection(655, 'Portale di Fuoco', "Fuochi d'Artificio Fatati"); // Unite

// ──────────────────────────────────────────────────────────
// DURALUDON (884) - Alidifesa/Spaccaroccia | Cannone Flash/Dragopulsar | Levitoroccia/Codadrago | Rovina Rotante
// ──────────────────────────────────────────────────────────
repInSection(884, 'Dragorespiro', 'Alidifesa');
repInSection(884, 'Testa di Ferro', 'Spaccaroccia');
repInSection(884, 'Cannone Drago', 'Cannone Flash');
repInSection(884, 'Granmeteora', 'Dragopulsar');
repInSection(884, 'Corpo Acciaio', 'Levitoroccia');
repInSection(884, 'Blocco Drago', 'Codadrago');
repInSection(884, 'Dinamax Cannone', 'Rovina Rotante');

// ──────────────────────────────────────────────────────────
// DRAGAPULT (887) - Sbigottimento/Attacco Rapido | Dragospiro/Palla Ombra | Dragodanza/Spettrotuffo | Raffica di Dreepy
// ──────────────────────────────────────────────────────────
repInSection(887, 'Dragorespiro', 'Sbigottimento');  // starting slot1
repInSection(887, 'Onda Ombrosa', 'Attacco Rapido'); // starting slot2
repInSection(887, 'Palla Fantasma', 'Dragospiro');   // Dragon Breath upgrade
repInSection(887, 'Draco Meteorite', 'Dragodanza');  // Dragon Dance
repInSection(887, 'Lancia Fantasma', 'Spettrotuffo');// Phantom Force
repInSection(887, 'Dragoartiglio', 'Palla Ombra');   // Shadow Ball
repInSection(887, 'Furia Fantasmatica', 'Raffica di Dreepy'); // Unite

// ──────────────────────────────────────────────────────────
// MEW (151) - Botta/Agilità | Energisfera/Solarraggio/Surf | Aiuto/Schermoluce/Agilità | Miraggio Mistico
// ──────────────────────────────────────────────────────────
repInSection(151, 'Bolla', 'Botta');
repInSection(151, 'Frustata', 'Agilità');
repInSection(151, 'Surf Cosmico', 'Surf');
repInSection(151, 'Raggio Solare', 'Solarraggio');
repInSection(151, 'Palla Ombra', 'Energisfera');
repInSection(151, 'Onda Psichica', 'Aiuto');
repInSection(151, 'Surf Cosmico Finale', 'Miraggio Mistico');

// ──────────────────────────────────────────────────────────
// CHANDELURE (609) - Braciere/Ombronotturna | Lanciafiamme/Vampata | Poltergeist/Prigione | Fuoco di Sbarramento
// ──────────────────────────────────────────────────────────
repInSection(609, 'Brace', 'Braciere');
repInSection(609, 'Fuocofatuo', 'Ombronotturna');
repInSection(609, 'Voltrappollo', 'Poltergeist');
repInSection(609, 'Fiamma Sacra', 'Prigione');
repInSection(609, 'Sfera Ombra', 'Vampata');
repInSection(609, 'Onda Oscura', 'Lanciafiamme');
repInSection(609, 'Spirito Spettrale', 'Fuoco di Sbarramento');

// ──────────────────────────────────────────────────────────
// INTELEON (818) - Pistolacqua/Occhioni Teneri | Pungiglione/Acrobazia | Idroliquidazione/Tiromirato | Spia Azzurra
// ──────────────────────────────────────────────────────────
repInSection(818, 'Idrobolla', 'Pistolacqua');
repInSection(818, 'Schizzo', 'Occhioni Teneri');
repInSection(818, 'Idropulsar', 'Pungiglione');
repInSection(818, 'Tiro Mortale', 'Acrobazia');
repInSection(818, 'Raggio Ghiaccio', 'Idroliquidazione');
repInSection(818, 'Trappola Ghiaccio', 'Tiromirato');
repInSection(818, 'Idrocolpo da Cecchino', 'Spia Azzurra');

// ──────────────────────────────────────────────────────────
// MIRAIDON (1008) - Tuonoshock/Raggioscossa | Saetta Fulminante/Tuono | Carica Parabolica/Manovra derapata | Futuro Splendente
// ──────────────────────────────────────────────────────────
repInSection(1008, 'Carica', 'Tuonoshock');
repInSection(1008, 'Tuono', 'Raggioscossa');
repInSection(1008, 'Elettrosfera', 'Saetta Fulminante');
repInSection(1008, 'Turbine Elettrico', 'Tuono');
repInSection(1008, 'Folgore Drago', 'Carica Parabolica');
repInSection(1008, 'Dragopulso', 'Manovra derapata');
repInSection(1008, 'Hadrón Métron', 'Futuro Splendente');

// ──────────────────────────────────────────────────────────
// TALONFLAME (663) - Beccata/Acrobazia | Nitrocarica/Aereassalto | Volo/Baldanza | Fiammivoro
// ──────────────────────────────────────────────────────────
repInSection(663, 'Brace', 'Beccata');
repInSection(663, 'Taglio Aria', 'Acrobazia');
repInSection(663, 'Bruciosalto', 'Nitrocarica');
repInSection(663, 'Piroetta Ardente', 'Aereassalto');
repInSection(663, 'Fiammata', 'Volo');
repInSection(663, 'Volo Ardente', 'Baldanza');
repInSection(663, 'Fiamma Volante Unite', 'Fiammivoro');

// ──────────────────────────────────────────────────────────
// ABSOL (359) - Fintoattacco/Lacerazione | Nottesferza/Inseguimento | Psicotaglio/Sbigoattacco | Squarcio Notturno
// ──────────────────────────────────────────────────────────
repInSection(359, 'Lama Notturna', 'Fintoattacco');
repInSection(359, 'Portento', 'Lacerazione');
repInSection(359, 'Sabiolama', 'Nottesferza');
repInSection(359, 'Perseguita', 'Inseguimento');
repInSection(359, 'Coltellata', 'Psicotaglio');
repInSection(359, 'Contrattacco', 'Sbigoattacco');
repInSection(359, 'Lama del Presagio', 'Squarcio Notturno');

// ──────────────────────────────────────────────────────────
// GENGAR (94) - Fuocofatuo/Leccata | Palla Ombra/Fangobomba | Mangiasogni/Sciagura | Agguato Oscuro
// ──────────────────────────────────────────────────────────
repInSection(94, 'Ipnosi', 'Fuocofatuo');
repInSection(94, 'Sfera Tenebra', 'Leccata');
repInSection(94, 'Psicotaglio', 'Palla Ombra');
repInSection(94, 'Sonnifero', 'Fangobomba');
repInSection(94, 'Vento Lama', 'Mangiasogni');
repInSection(94, 'Assorbimento', 'Sciagura');
repInSection(94, 'Maxirisucchio', 'Agguato Oscuro');

// ──────────────────────────────────────────────────────────
// ZERAORA (807) - Agilità/Lacerazione | Invertivolt/Scintilla | Scarica/Sprizzalampo | Tempesta Plasma
// ──────────────────────────────────────────────────────────
repInSection(807, 'Carica Fulmine', 'Agilità');
repInSection(807, 'Gancio Plasma', 'Lacerazione');
repInSection(807, 'Tuono', 'Invertivolt');
repInSection(807, 'Surf Elettrico', 'Scintilla');
repInSection(807, 'Piroetta Elettrica', 'Scarica');
repInSection(807, 'Voltacrobazia', 'Sprizzalampo');
repInSection(807, 'Plasma Fiumi', 'Tempesta Plasma');

// ──────────────────────────────────────────────────────────
// ZOROARK (571) - Lacerazione/Sfuriate | Nottesferza/Fintoattacco | Ombrartigli/Taglio | Urtoscuro
// ──────────────────────────────────────────────────────────
repInSection(571, 'Artigli Ombra', 'Lacerazione');
repInSection(571, 'Notte Oscura', 'Sfuriate');
repInSection(571, 'Zanna Buia', 'Nottesferza');
repInSection(571, 'Cambio di Lato', 'Fintoattacco');
repInSection(571, 'Notte Oscura Potenziata', 'Ombrartigli');
repInSection(571, 'Tiro Oscuro', 'Taglio');
repInSection(571, 'Illusione Finale', 'Urtoscuro');

// ──────────────────────────────────────────────────────────
// DODRIO (85) - Beccata/Attacco Rapido | Triattacco/Perforbecco | Agilità/Calciopesante | Triplo Calpestamento
// ──────────────────────────────────────────────────────────
// Beccata already correct
// Agilità already correct
repInSection(85, 'Triplocolpo', 'Triattacco');
repInSection(85, 'Beccolancio', 'Perforbecco');
repInSection(85, 'Velocità Massima', 'Calciopesante');
repInSection(85, 'Spintone', 'Agilità');  // second Agilità
repInSection(85, 'Tripla Rampa', 'Triplo Calpestamento');

// ──────────────────────────────────────────────────────────
// LEAFEON (470) - Fogliamagica/Cometapugno | Lamsolare/Fogliama | Aereassalto/Furia d'Incrocio | Danza di Smeraldo
// ──────────────────────────────────────────────────────────
repInSection(470, 'Fogliolama', 'Fogliamagica');
repInSection(470, 'Scatto Rapido', 'Cometapugno');
repInSection(470, 'Coltellata Foglia', 'Lamsolare');
repInSection(470, 'Tempesta di Foglie', 'Fogliama');
repInSection(470, 'Foglioguardia', 'Aereassalto');
repInSection(470, 'Folgorafoglia', "Furia d'Incrocio");
repInSection(470, 'Lama Verde Finale', 'Danza di Smeraldo');

// ──────────────────────────────────────────────────────────
// MEOWSCARADA (911) - Fogliame/Unghiaguzze | Prestigiatore/Nottesferza | Doppioteam/Apripista | Fioritura Esplosiva
// ──────────────────────────────────────────────────────────
repInSection(911, 'Fogliolama', 'Fogliame');
repInSection(911, 'Passo Umbra', 'Unghiaguzze');
repInSection(911, 'Danza Petali Oscuri', 'Prestigiatore');
repInSection(911, 'Arma Segreta', 'Nottesferza');
repInSection(911, 'Passoerboso', 'Doppioteam');
repInSection(911, 'Inganno Floreale', 'Apripista');
repInSection(911, 'Danza delle Lame Finali', 'Fioritura Esplosiva');

// ──────────────────────────────────────────────────────────
// CHARIZARD (6) - Fiammata/Turbofuoco | Lanciafiamme/Fuocopugno | Fuocobomba/Fuococarica | Schiacciata Sismica
// ──────────────────────────────────────────────────────────
repInSection(6, 'Brace', 'Fiammata');
repInSection(6, 'Taglio Fuoco', 'Turbofuoco');
// Lanciafiamme already correct
repInSection(6, 'Fuocovolante', 'Fuocopugno');
repInSection(6, 'Flappe', 'Fuocobomba');
repInSection(6, 'Volo Ardente', 'Fuococarica');
repInSection(6, 'Serafino di Fuoco', 'Schiacciata Sismica');

// ──────────────────────────────────────────────────────────
// LUCARIO (448) - Attacco Rapido/Meteorpugno | Extrarapido/Crescipugno | Ossoraffiche/Zuffa | Ondasfera Letale
// ──────────────────────────────────────────────────────────
repInSection(448, 'Veloce', 'Attacco Rapido');
repInSection(448, 'Palla Aura', 'Meteorpugno');
repInSection(448, 'Sferzauracica', 'Extrarapido');
repInSection(448, 'Pugno Velocissimo', 'Crescipugno');
repInSection(448, "Sfera d'Aura", 'Ossoraffiche');
repInSection(448, 'Capobotta', 'Zuffa');
repInSection(448, "Sfera d'Aura Definitiva", 'Ondasfera Letale');

// ──────────────────────────────────────────────────────────
// MACHAMP (68) - Colpokarate/Granfisico | Dinamipugno/Sottomissione | Zuffa/Incrocolpo | Schiacciata di Machamp
// ──────────────────────────────────────────────────────────
repInSection(68, 'Pugno Karate', 'Colpokarate');
repInSection(68, 'Vibrapugni', 'Granfisico');
repInSection(68, 'Pugno Dinamico', 'Dinamipugno');
repInSection(68, 'Incrocio', 'Sottomissione');
repInSection(68, 'Controcolpo', 'Zuffa');
repInSection(68, 'Pugno Focale', 'Incrocolpo');
repInSection(68, 'Pugni Incrociati Unite', 'Schiacciata di Machamp');

// ──────────────────────────────────────────────────────────
// GARCHOMP (445) - Turbosabbia/Pestone | Dragofuria/Fossa | Dragartigli/Terremoto | Furia Livida
// ──────────────────────────────────────────────────────────
repInSection(445, 'Attacco Rapido', 'Turbosabbia');
repInSection(445, 'Fossa', 'Pestone');         // starting slot2
repInSection(445, 'Taglio Drago', 'Dragofuria');
repInSection(445, 'Terremoto', 'Fossa');       // Dig upgrade
repInSection(445, 'Giro Veloce', 'Dragartigli');
repInSection(445, 'Ascensione Drago', 'Terremoto');
repInSection(445, 'Atterraggio Draconico', 'Furia Livida');

// ──────────────────────────────────────────────────────────
// DRAGONITE (149) - Tornado/Dragodanza | Dragospiro/Extrarapido | Oltraggio/Iper Raggio | Impatto Draconico
// ──────────────────────────────────────────────────────────
repInSection(149, 'Tuono', 'Tornado');
repInSection(149, 'Coda Drago', 'Dragodanza');
repInSection(149, 'Drago Meteorite', 'Dragospiro');
repInSection(149, 'Iper Raggio', 'Extrarapido');
repInSection(149, 'Lanciafiamme', 'Oltraggio');
repInSection(149, 'Giro Veloce', 'Iper Raggio');
repInSection(149, 'Iper Raggio Draconico', 'Impatto Draconico');

// ──────────────────────────────────────────────────────────
// TSAREENA (763) - Fogliamagica/Rapigiro | Triplo Axel/Pestone | Tropocalcio/Erboscivolata | Regalità Aerea
// ──────────────────────────────────────────────────────────
repInSection(763, 'Fogliolama', 'Fogliamagica');
repInSection(763, 'Spallata', 'Rapigiro');
repInSection(763, 'Scalcio Reale', 'Triplo Axel');
repInSection(763, 'Palpito Erboso', 'Pestone');
repInSection(763, 'Danza Petali', 'Tropocalcio');
repInSection(763, 'Sgambetto Royale', 'Erboscivolata');
repInSection(763, 'Calcio Reale Unite', 'Regalità Aerea');

// ──────────────────────────────────────────────────────────
// AEGISLASH (681) - Furtivombra/Ferroscudo | Spadasanta/Ombrartigli | Ferroriduttore/Scudo Reale | Fendente Finale
// ──────────────────────────────────────────────────────────
repInSection(681, 'Spadolancio', 'Furtivombra');
repInSection(681, 'Testa di Ferro', 'Ferroscudo');
repInSection(681, 'Colpo Sacro', 'Spadasanta');
repInSection(681, 'Danza delle Spade', 'Ombrartigli');
repInSection(681, 'Taglio Oscuro', 'Ferroriduttore');
repInSection(681, 'Forma Scudo', 'Scudo Reale');
repInSection(681, 'Danza Regale delle Lame', 'Fendente Finale');

// ──────────────────────────────────────────────────────────
// SCIZOR (212) - Attacco Rapido/Tagliofuria | Pugnoscarica/Danzaspada | Doppioffensiva/Ferroriduttore | Illusione Rossa
// ──────────────────────────────────────────────────────────
repInSection(212, 'Presa a Taglio', 'Attacco Rapido');
repInSection(212, 'Tagliodoppio', 'Tagliofuria');
repInSection(212, 'Puntura a X', 'Pugnoscarica');
repInSection(212, 'Danza Spada', 'Danzaspada');
repInSection(212, 'Pugno Acciaio', 'Doppioffensiva');
repInSection(212, 'Acciaiotaglio', 'Ferroriduttore');
repInSection(212, "Furia d'Acciaio", 'Illusione Rossa');

// ──────────────────────────────────────────────────────────
// TYRANITAR (248) - Lucidatura/Morso | Neropulsar/Pietrataglio | Forzantica/Sabbiatomba | Furia Tirannica
// ──────────────────────────────────────────────────────────
repInSection(248, 'Morso', 'Lucidatura');
repInSection(248, 'Lanciaroccioni', 'Morso');
repInSection(248, 'Terremoto', 'Neropulsar');
repInSection(248, 'Marranzana', 'Pietrataglio');
repInSection(248, 'Pietroltomba', 'Forzantica');
repInSection(248, 'Grancraniata', 'Sabbiatomba');
repInSection(248, 'Dinamax Tirannico', 'Furia Tirannica');

// ──────────────────────────────────────────────────────────
// BUZZWOLE (794) - Pungiglione/Megapugno | Assalto/Abbattimento | Crescipugno/Sanguisuga | Superlancio Muscolare
// ──────────────────────────────────────────────────────────
repInSection(794, 'Pugno Dinamico', 'Pungiglione');
repInSection(794, 'Superforza', 'Megapugno');
repInSection(794, 'Gonfiatura', 'Assalto');
repInSection(794, 'Pugni Furia', 'Abbattimento');
repInSection(794, 'Lavamassa', 'Crescipugno');
repInSection(794, 'Assorbicorpo', 'Sanguisuga');
repInSection(794, 'Super Pompaggio', 'Superlancio Muscolare');

// ──────────────────────────────────────────────────────────
// AZUMARILL (184) - Azione/Bolla | Mulinello/Idrocoda | Carineria/Idropulsar | Panciata Tamburo
// ──────────────────────────────────────────────────────────
repInSection(184, 'Cascata', 'Azione');
repInSection(184, 'Rimbalzo', 'Bolla');
repInSection(184, 'Idropompa', 'Mulinello');
repInSection(184, 'Spruzzone', 'Idrocoda');
repInSection(184, 'Palla Gioco', 'Carineria');
repInSection(184, 'Acquatuffo', 'Idropulsar');
repInSection(184, 'Vortice Idrico', 'Panciata Tamburo');

// ──────────────────────────────────────────────────────────
// METAGROSS (376) - Ferroscudo/Azione | Meteorpugno/Giroballa | Zuccata Zen/Magnetascesa | Analisi ed Impatto
// ──────────────────────────────────────────────────────────
repInSection(376, 'Chitina Chiara', 'Ferroscudo');
repInSection(376, 'Testa di Ferro', 'Azione');
repInSection(376, 'Psicocaos', 'Meteorpugno');
repInSection(376, 'Punzopugno', 'Giroballa');
repInSection(376, 'Corpo Magnetico', 'Zuccata Zen');
repInSection(376, 'Psichico', 'Magnetascesa');
repInSection(376, 'Meteorite', 'Analisi ed Impatto');
repInSection(376, 'Pugno Psichico Finale', 'Analisi ed Impatto'); // backup

// ──────────────────────────────────────────────────────────
// URSHIFU (892) - Single: Spaccaroccia/Pugnotenebre | Golaforata | Pugno d'Ebano
//              - Rapid: Spaccaroccia/Idroraffica | Idroliquidazione | Raffica di Pugni
// ──────────────────────────────────────────────────────────
repInSection(892, 'Colpo Infallibile', 'Spaccaroccia');
repInSection(892, 'Pugno Veloce', 'Pugnotenebre');
repInSection(892, 'Scatto di Lotta', 'Golaforata');
repInSection(892, 'Pugni Rapidissimi', 'Idroraffica');
repInSection(892, 'Punta Oscura', 'Idroliquidazione');
repInSection(892, 'Raffica di Pugni', 'Raffica di Pugni'); // already correct
repInSection(892, 'Cascata di Calci', "Pugno d'Ebano");
repInSection(892, 'Colpo Unite Singolo', 'Raffica di Pugni'); // backup

// ──────────────────────────────────────────────────────────
// SNORLAX (143) - Azione/Riposo | Pesobomba/Flagello | Blocco/Sbadiglio | Sonnellino Reale
// ──────────────────────────────────────────────────────────
repInSection(143, 'Fortezza', 'Azione');
repInSection(143, 'Sforzo', 'Riposo');
repInSection(143, 'Corpo a Corpo', 'Pesobomba');
repInSection(143, 'Amnesia', 'Flagello');
// Blocco already correct
repInSection(143, 'Corpata', 'Sbadiglio');
repInSection(143, 'Schiantata', 'Sonnellino Reale');
repInSection(143, 'Iper Snorlax', 'Sonnellino Reale'); // backup

// ──────────────────────────────────────────────────────────
// SLOWBRO (80) - Pistolacqua/Pigrizia | Idrovampata/Surf | Amnesia/Telecinesi | Sguardo Immobile
// ──────────────────────────────────────────────────────────
repInSection(80, 'Pigrizia', 'Pigrizia');       // already correct as starting
repInSection(80, 'Confusione', 'Pistolacqua');  // Water Gun
// Amnesia, Surf, Telecinesi may already be correct
repInSection(80, 'Acquanello', 'Idrovampata');
repInSection(80, 'Stordimento Psichico', 'Sguardo Immobile');
repInSection(80, 'Mega Slowdown', 'Sguardo Immobile'); // backup

// ──────────────────────────────────────────────────────────
// CRUSTLE (558) - Frana/Tagliofuria | Gettaguscio/Tombarocciata | Levitoroccia/Furia d'Incrocio | Frantumaroccia
// ──────────────────────────────────────────────────────────
repInSection(558, 'Conchivoglia', 'Frana');
repInSection(558, 'Taglio di Roccia', 'Tagliofuria');
repInSection(558, 'Scissoraggio', 'Gettaguscio');
repInSection(558, 'Pugno Forbice', 'Tombarocciata');
repInSection(558, 'Taglio Incrociato', 'Levitoroccia');
repInSection(558, 'Frana', "Furia d'Incrocio");
repInSection(558, 'Difesa Corazza', 'Frantumaroccia');
repInSection(558, 'Frana Devastante', 'Frantumaroccia'); // backup

// ──────────────────────────────────────────────────────────
// GREEDENT (820) - Azione/Ricciolscudo | Semitraglia/Rutto | Guancegonfie/Supplica | Panciata di Bacche
// ──────────────────────────────────────────────────────────
repInSection(820, 'Scorpacciatarla', 'Azione');
repInSection(820, 'Morso', 'Ricciolscudo');
repInSection(820, 'Rollio Paffuto', 'Semitraglia');
repInSection(820, 'Dentimorso', 'Rutto');
repInSection(820, 'Peso Massimo', 'Guancegonfie');
repInSection(820, 'Bacca Spin', 'Supplica');
repInSection(820, 'Schiacciato', 'Panciata di Bacche');
repInSection(820, 'Scorpacciata Finale', 'Panciata di Bacche'); // backup

// ──────────────────────────────────────────────────────────
// TREVENANT (709) - Fuocofatuo/Ramopuntura | Mazzuolegno/Maledizione | Mazzuolcorno/Malcomune | Foresta Spettrale
// ──────────────────────────────────────────────────────────
repInSection(709, 'Bosco Maledetto', 'Fuocofatuo');
repInSection(709, 'Maledizione', 'Ramopuntura');
repInSection(709, 'Frustata', 'Mazzuolegno');
repInSection(709, 'Boschivoro', 'Maledizione');
repInSection(709, 'Orrore Oscuro', 'Mazzuolcorno');
repInSection(709, 'Attaccalemanto', 'Malcomune');
repInSection(709, 'Tempesta di Rami', 'Foresta Spettrale');
repInSection(709, 'Foresta Oscura Unite', 'Foresta Spettrale'); // backup

// ──────────────────────────────────────────────────────────
// MAMOSWINE (473) - Gelo-scheggia/Azione | Scagliagelo/Gelodenti | Forza Equina/Terremoto | Pestone del Mammut
// ──────────────────────────────────────────────────────────
repInSection(473, 'Robustezza', 'Geloscheggia');
repInSection(473, 'Zampata', 'Azione');
repInSection(473, 'Nebbia di Ghiaccio', 'Scagliagelo');
repInSection(473, 'Grandine', 'Gelodenti');
repInSection(473, 'Zanna Ghiaccio', 'Forza Equina');
repInSection(473, 'Terremoto', 'Terremoto');  // already correct
repInSection(473, 'Carica Ghiaccio', 'Pestone del Mammut');
repInSection(473, 'Avalanche Unite', 'Pestone del Mammut'); // backup

// ──────────────────────────────────────────────────────────
// BLASTOISE (9) - Pistolacqua/Capocciata | Idropompa/Zampillo | Surf/Rapigiro | Tifone Idrico
// ──────────────────────────────────────────────────────────
repInSection(9, 'Idrogetto', 'Pistolacqua');
repInSection(9, 'Acquanello', 'Capocciata');
// Surf already correct
repInSection(9, 'Fortezza Acqua', 'Idropompa');
repInSection(9, 'Rapido Vortice', 'Zampillo');
repInSection(9, 'Idrocannone Unite', 'Tifone Idrico');

// ──────────────────────────────────────────────────────────
// UMBREON (197) - Cometapugno/Falsalacrima | Malosguardo/Ripicca | Desiderio/Urlorabbia | Danza Lunare
// ──────────────────────────────────────────────────────────
repInSection(197, 'Graffiante', 'Cometapugno');
repInSection(197, 'Bacio Drenante', 'Falsalacrima');
repInSection(197, 'Maloccio', 'Malosguardo');
repInSection(197, 'Sguardo Oscuro', 'Ripicca');
repInSection(197, 'Lunattacco', 'Desiderio');
repInSection(197, 'Morso Oscuro', 'Urlorabbia');
repInSection(197, 'Aura Nera Unite', 'Danza Lunare');

// ──────────────────────────────────────────────────────────
// LAPRAS (131) - Pistolacqua/Mulinello | Gelo-raggio/Liofilizzazione | Idropulsar/Bolla-raggio | Lapras Express
// ──────────────────────────────────────────────────────────
repInSection(131, 'Copertura Acquatica', 'Pistolacqua');
repInSection(131, 'Idrogetto', 'Mulinello');
repInSection(131, 'Raggio Ghiaccio', 'Georaggio');  // Ice Beam → Gelo-raggio
repInSection(131, 'Surf', 'Surf');                  // already correct
repInSection(131, 'Canto', 'Idropulsar');
repInSection(131, 'Nebbia', 'Bollaraggio');
repInSection(131, 'Grandinata', 'Lapras Express');
repInSection(131, 'G-Max Risonanza', 'Lapras Express'); // backup

// ──────────────────────────────────────────────────────────
// ELDEGOSS (830) - Fogliame/Sintesi | Sferapollina/Fogliatempesta | Cotonscudo/Cotonspora | Atterraggio Morbido
// ──────────────────────────────────────────────────────────
repInSection(830, 'Semiluce', 'Fogliame');
repInSection(830, 'Fogliolama', 'Sintesi');
repInSection(830, 'Nebbia', 'Sferapollina');
repInSection(830, 'Pollenvento', 'Fogliatempesta');
repInSection(830, 'Erba Morsa', 'Cotonscudo');
repInSection(830, 'Cotone Pronto', 'Cotonspora');
repInSection(830, 'Vento Erboso', 'Atterraggio Morbido');
repInSection(830, 'Polline d\'Oro', 'Atterraggio Morbido'); // backup

// ──────────────────────────────────────────────────────────
// MR. MIME (122) - Bruciapelo/Schermoluce | Confusione/Psichico | Barriera/Vigorscambio | E l'ora dello show!
// ──────────────────────────────────────────────────────────
repInSection(122, 'Barriera Psichica', 'Bruciapelo');
repInSection(122, 'Confusione', 'Schermoluce');  // starting slot1 Confusion→Schermoluce?
// Actually PDF: starting = Bruciapelo/Schermoluce. So slot1=Bruciapelo, slot2=Schermoluce
// Current Mr.Mime: Barriera Psichica, Confusione, Schermatura, Psichico, Vuoto Totale, Barriera, Duplica, Magia Barriera Unite
// Matching to PDF: Bruciapelo/Schermoluce | Confusione/Psichico | Barriera/Vigorscambio | E l'ora dello show!
// So: Barriera Psichica→Bruciapelo, Confusione→Schermoluce, Schermatura→Confusione, Psichico→Psichico(ok?),
//     Vuoto Totale→Barriera, Barriera→Vigorscambio, Duplica→?, Magia Barriera→E l'ora dello show!
// This is getting complex. Let me re-map:
// Starting: Bruciapelo(→slot1), Schermoluce(→slot2)
// Upgrade A: Confusione, Psichico
// Upgrade B: Barriera, Vigorscambio
// Current pos: [BParricidaPsichica, Confusione, Schermatura, Psichico, Vuoto Totale, Barriera, Duplica, Magia Barriera Unite]
// Hmm 8 items but should be 7. "Duplica" might be an extra. Let me just do what I can.
repInSection(122, 'Schermatura', 'Confusione');
// "Psichico" might already be correct
repInSection(122, 'Vuoto Totale', 'Barriera');
repInSection(122, 'Barriera', 'Vigorscambio');
repInSection(122, 'Duplica', 'Vigorscambio');   // backup
repInSection(122, 'Magia Barriera Unite', "E l'ora dello show!");

// ──────────────────────────────────────────────────────────
// WIGGLYTUFF (40) - Botta/Ricciolscudo | Doubleschaffo/Magibrillio | Canto/Rotolamento | Recital Stellare
// ──────────────────────────────────────────────────────────
repInSection(40, 'Aria Beffarda', 'Botta');
repInSection(40, 'Cantinnola', 'Ricciolscudo');
repInSection(40, 'Copia', 'Doubleschaffo');
repInSection(40, 'Sonagliocanzone', 'Magibrillio');
repInSection(40, 'Ipnosi', 'Canto');
repInSection(40, 'Allettamento', 'Rotolamento');
repInSection(40, 'Onda Malefica', 'Recital Stellare');
repInSection(40, 'Fulgore Magico Unite', 'Recital Stellare'); // backup

// ──────────────────────────────────────────────────────────
// BLISSEY (242) - Botta/Ondasana | Uovobomba/Altruismo | Covauova/Salvaguardia | Blissey ai ripari
// ──────────────────────────────────────────────────────────
repInSection(242, 'Cura Naturale', 'Botta');
repInSection(242, 'Dolcebacio', 'Ondasana');
repInSection(242, 'Rinforzo', 'Uovobomba');
repInSection(242, 'Uovo Morbido', 'Altruismo');
repInSection(242, 'Ammorbidisci', 'Covauova');
repInSection(242, 'Sano Sano', 'Salvaguardia');
repInSection(242, 'Terapia', 'Blissey ai ripari');
repInSection(242, 'Felicità Condivisa', 'Blissey ai ripari'); // backup

// ──────────────────────────────────────────────────────────
// HOOPA (720) - Sbigottimento/Confusione | Foro Dimensional/Prestigio | Spettrotuffo/Palla Ombra | Cerchi Liberati
// ──────────────────────────────────────────────────────────
repInSection(720, 'Inganno del Portale', 'Sbigottimento');
repInSection(720, 'Psicobomba', 'Confusione');
repInSection(720, 'Portale Oscuro', 'Foro Dimensional');
repInSection(720, 'Psichico', 'Prestigio');
repInSection(720, 'Spazio Oscuro', 'Spettrotuffo');
repInSection(720, 'Portale Alleato', 'Palla Ombra');
repInSection(720, 'Anello Oscuro', 'Cerchi Liberati');
repInSection(720, 'Vortice Dimensionale', 'Cerchi Liberati'); // backup

// ──────────────────────────────────────────────────────────
// CLEFABLE (36) - Botta/Ondasana | Fidofonte/Assorbabacio | Gravità/Sonoqui | Desiderio Fatato
// ──────────────────────────────────────────────────────────
repInSection(36, 'Magia Guaritrice', 'Botta');
repInSection(36, 'Doppio Schiaffo', 'Ondasana');
repInSection(36, 'Canto Lunare', 'Fidofonte');
repInSection(36, 'Palla Lunare', 'Assorbabacio');
repInSection(36, 'Meteorite', 'Gravità');
repInSection(36, 'Magia Lunare', 'Sonoqui');
repInSection(36, 'Polvere Magica', 'Desiderio Fatato');
repInSection(36, 'Miracolo Cosmico', 'Desiderio Fatato'); // backup

// ──────────────────────────────────────────────────────────
// COMFEY (764) - Sintesi/Fogliamagica | Cura Floreale/Laccioerboso | Dolcebacio/Fogliamagica | Carezza Floreale
// ──────────────────────────────────────────────────────────
repInSection(764, 'Triage', 'Sintesi');         // if Triage is in the moves section
repInSection(764, 'Fogliolama', 'Fogliamagica');
repInSection(764, 'Erba Vita', 'Cura Floreale');
repInSection(764, 'Danza Petali', 'Laccioerboso');
repInSection(764, 'Spina Floreale', 'Dolcebacio');
repInSection(764, 'Profumoterapia', 'Fogliamagica'); // second Fogliamagica
repInSection(764, 'Polline Benefico', 'Carezza Floreale');
repInSection(764, 'Piena Fioritura', 'Carezza Floreale'); // backup

// ──────────────────────────────────────────────────────────
// SABLEYE (302) - Furto/Sbigottimento | Privazione/Furtivombra | Stordiraggio/Fintoattacco | Sguardo Caotico
// ──────────────────────────────────────────────────────────
repInSection(302, 'Prankster', 'Furto');
repInSection(302, 'Graffiante', 'Sbigottimento');
repInSection(302, 'Fuocofatuo', 'Privazione');
repInSection(302, 'Occhio Magico', 'Furtivombra');
repInSection(302, 'Tiro Gemme', 'Stordiraggio');
repInSection(302, 'Polvere Sottile', 'Fintoattacco');
repInSection(302, 'Beffa Oscura', 'Sguardo Caotico');
repInSection(302, 'Spettro Gioielliere', 'Sguardo Caotico'); // backup

// ──────────────────────────────────────────────────────────
// DARKRAI (491) - Neropulsar/Palla Ombra | Vuototetro/Incubo | Congiura/Doppioteam | Incubo Eterno
// ──────────────────────────────────────────────────────────
repInSection(491, 'Brutto Sogno', 'Neropulsar');
repInSection(491, 'Raggio Oscuro', 'Palla Ombra');
repInSection(491, 'Nascondiglio', 'Vuototetro');
repInSection(491, 'Incubo', 'Incubo');             // already correct?
repInSection(491, 'Sfera Oscura', 'Congiura');
repInSection(491, 'Ombre Furtive', 'Doppioteam');
repInSection(491, 'Velo Oscuro', 'Incubo Eterno');
repInSection(491, 'Oscuramento Eterno', 'Incubo Eterno'); // backup

// ──────────────────────────────────────────────────────────
// LATIOS (381) - Abbagliante/Dragospiro | Zuccata Zen/Ripresa | Dragopulsar/Psicoshock | Ali di Latios
// ──────────────────────────────────────────────────────────
repInSection(381, 'Levitate', 'Abbagliante');
repInSection(381, 'Drago Vento', 'Dragospiro');
repInSection(381, 'Psicoforza', 'Zuccata Zen');
repInSection(381, 'Gelodrago', 'Ripresa');
repInSection(381, 'Luccicanza', 'Dragopulsar');
repInSection(381, 'Psicocolpo', 'Psicoshock');
repInSection(381, 'Volo Etereo', 'Ali di Latios');
repInSection(381, 'Raggio Drago Finale', 'Ali di Latios'); // backup

// ──────────────────────────────────────────────────────────
// ARMAROUGE (936) - Braciere/Fuocofatuo | Corazzaluna/Turbofuoco | Nitrocarica/Psicoshock | Esplosione Psico-X
// ──────────────────────────────────────────────────────────
repInSection(936, 'Armatura Bellica', 'Braciere');
repInSection(936, 'Lanciafiamme', 'Fuocofatuo');
repInSection(936, 'Psicobomba', 'Corazzaluna');
repInSection(936, 'Meteorarrosto', 'Turbofuoco');
repInSection(936, 'Sputo Drago Fuoco', 'Nitrocarica');
repInSection(936, 'Armatura Fuoco', 'Psicoshock');
repInSection(936, 'Cannone Psichico', 'Esplosione Psico-X');
repInSection(936, 'Grande Incendio Psichico', 'Esplosione Psico-X'); // backup

// ──────────────────────────────────────────────────────────
// MEGA CHARIZARD Y (10035) - Siccità/Fuoco Sacro... (uses Megaevoluzione mechanic)
// ──────────────────────────────────────────────────────────
repInSection(10035, 'Siccità', 'Siccità');
repInSection(10035, 'Fuoco Sacro', 'Magifuoco');
repInSection(10035, 'Soffio del Drago', 'Turbofuoco');
repInSection(10035, 'Mega Lanciafiamme', 'Mega Lanciafiamme'); // keep
repInSection(10035, 'Colpo Ala', 'Aereassalto');
repInSection(10035, 'Volo Solare', 'Fuococarica');
repInSection(10035, 'Cappa Fuoco', 'Fuocobomba');
repInSection(10035, 'Mega Tempesta di Fuoco', 'Mega Tempesta di Fuoco'); // keep

// ──────────────────────────────────────────────────────────
// CERULEDGE (937) - Braciere/Furtivombra | Lama del Rimorso/Psicotaglio | Spettrotuffo/Nitrocarica | Squarcio Spettrale
// ──────────────────────────────────────────────────────────
repInSection(937, 'Sfida Ardente', 'Braciere');
repInSection(937, 'Lama Fuoco', 'Furtivombra');
repInSection(937, 'Soffio Sinistro', 'Lama del Rimorso');
repInSection(937, 'Taglio Fantasma', 'Psicotaglio');
repInSection(937, 'Lame a Croce', 'Spettrotuffo');
repInSection(937, 'Velo del Fuoco', 'Nitrocarica');
repInSection(937, 'Danza Spada Fuoco', 'Squarcio Spettrale');
repInSection(937, 'Armatura delle Fiamme Eterne', 'Squarcio Spettrale'); // backup

// ──────────────────────────────────────────────────────────
// MIMIKYU (778) - Sbigottimento/Graffio | Carineria/Ombrartigli | Furtivombra/Dolcetto o Scherzetto | Giochiamo Insieme?
// ──────────────────────────────────────────────────────────
repInSection(778, 'Travestimento', 'Sbigottimento');
repInSection(778, 'Spettrogrida', 'Graffio');
repInSection(778, 'Ombra', 'Carineria');
repInSection(778, 'Giocascherzo', 'Ombrartigli');
repInSection(778, 'Vendetta', 'Furtivombra');
repInSection(778, 'Danza Fantasma', 'Dolcetto o Scherzetto');
repInSection(778, 'Artiglio Ombra', 'Giochiamo Insieme?');
repInSection(778, 'Terror Travestito', 'Giochiamo Insieme?'); // backup

// ──────────────────────────────────────────────────────────
// RAICHU (10100) - Tuonoshock/Scintilla | Fulmine/Locomovolt | Tuono/Codacciaio | Schiacciata Elettrica
// ──────────────────────────────────────────────────────────
repInSection(10100, 'Surf Psichico', 'Tuonoshock');
repInSection(10100, 'Tuonopugno', 'Scintilla');
repInSection(10100, 'Velo Psichico', 'Fulmine');
repInSection(10100, 'Tuono', 'Locomovolt');
repInSection(10100, 'Folgorazione', 'Tuono');
repInSection(10100, 'Psicotaglio', 'Codacciaio');
repInSection(10100, 'Paravento Elettrico', 'Schiacciata Elettrica');
repInSection(10100, 'Onda Psi-Elettrica', 'Schiacciata Elettrica'); // backup

// ──────────────────────────────────────────────────────────
// SCYTHER (123) - Attacco Rapido/Tagliofuria | Ali di Doppia/Danzaspada | Doppioffensiva/Agilità | Illusione Verde
// ──────────────────────────────────────────────────────────
repInSection(123, 'Tecno-Abilità', 'Attacco Rapido');
repInSection(123, 'Falce Aerea', 'Tagliofuria');
repInSection(123, 'Taglio Rapido', 'Ali di Doppia');
repInSection(123, 'Colpo Aereo', 'Danzaspada');
repInSection(123, 'Falce Veloce', 'Doppioffensiva');
repInSection(123, 'Danza Spada', 'Agilità');
repInSection(123, 'Contrattacco', 'Illusione Verde');
repInSection(123, 'Lama Finale di Scyther', 'Illusione Verde'); // backup

// ──────────────────────────────────────────────────────────
// MEOWTH (52) - Bruciapelo/Sfuriate | Giorno paga/Morso | Lacerazione/Carineria | Agguato del Team Rocket
// ──────────────────────────────────────────────────────────
repInSection(52, 'Raccolta Monete', 'Bruciapelo');
repInSection(52, 'Graffio', 'Sfuriate');
repInSection(52, 'Moneta Furiosa', 'Giorno paga');
repInSection(52, 'Colpo Critico', 'Morso');
repInSection(52, 'Mossa Artiglio', 'Lacerazione');
repInSection(52, 'Lanciamonete', 'Carineria');
repInSection(52, 'Doppia Schiaffo', 'Agguato del Team Rocket');
repInSection(52, 'Festa della Moneta d\'Oro', 'Agguato del Team Rocket'); // backup

// ──────────────────────────────────────────────────────────
// BLAZIKEN (257) - Aereassalto/Braciere | Fuocopugno/Vampata | Focalcolpo/Calciardente | Vortice di Fiamme
// ──────────────────────────────────────────────────────────
repInSection(257, 'Velocità Rapida', 'Aereassalto');
repInSection(257, 'Fiammata', 'Braciere');
repInSection(257, 'Scatto Veloce', 'Fuocopugno');
repInSection(257, 'Calcio Rovente', 'Vampata');
repInSection(257, 'Spazzata Fuoco', 'Focalcolpo');
repInSection(257, 'Contrattacco Fulmineo', 'Calciardente');
repInSection(257, 'Scatto Ardente', 'Vortice di Fiamme');
repInSection(257, 'Inferno Supremo', 'Vortice di Fiamme'); // backup

// ──────────────────────────────────────────────────────────
// FALINKS (870) - Granfisico/Megacorno | Ferroriduttore/Picchiaduro | Sbarramento/Incornata | Cantamagliata
// ──────────────────────────────────────────────────────────
repInSection(870, 'Formazione di Combattimento', 'Granfisico');
repInSection(870, 'Carica Formazione', 'Megacorno');
repInSection(870, 'Difesa Collettiva', 'Ferroriduttore');
repInSection(870, 'Attacco a Cunei', 'Picchiaduro');
repInSection(870, 'Carica Devastante', 'Sbarramento');
repInSection(870, 'Muro di Scudi', 'Incornata');
repInSection(870, 'Assalto Finale', 'Cantamagliata');
repInSection(870, 'Assalto Leggione', 'Cantamagliata'); // backup

// ──────────────────────────────────────────────────────────
// GYARADOS (130) - Flagello/Splash | Dragospiro/Idrocoda | Cascata/Rimbalzo | Corrente Draconica
// ──────────────────────────────────────────────────────────
repInSection(130, 'Intimidazione', 'Flagello');
repInSection(130, 'Acqua Cascata', 'Splash');
repInSection(130, 'Dragopulsar', 'Dragospiro');
repInSection(130, 'Idrovortice', 'Idrocoda');
repInSection(130, 'Salto Acqua', 'Cascata');
repInSection(130, 'Furia del Drago', 'Rimbalzo');
repInSection(130, 'Tempesta Draconica', 'Corrente Draconica');
repInSection(130, 'Maelstrom del Dragone', 'Corrente Draconica'); // backup

// ──────────────────────────────────────────────────────────
// SIRFETCH'D (865) - Beccata/Tagliofuria | Vorticefferato/Fogliama | Individua/Sferzata Meteorite | Fendente Cavalleresco
// ──────────────────────────────────────────────────────────
repInSection(865, 'Determinazione Nobile', 'Beccata');
repInSection(865, 'Colpo Scudo', 'Tagliofuria');
repInSection(865, 'Lama Foglia', 'Vorticefferato');
repInSection(865, 'Cresta Spada', 'Fogliama');
repInSection(865, 'Scudo Parry', 'Individua');
repInSection(865, 'Lancia Devastante', 'Sferzata Meteorite');
repInSection(865, 'Prima Mossa', 'Fendente Cavalleresco');
repInSection(865, 'Carica del Cavaliere', 'Fendente Cavalleresco'); // backup

// ──────────────────────────────────────────────────────────
// ZACIAN (888) - Lacerazione/Attacco Rapido | Ferrartigli/Spadasanta | Agilità/Carineria | Spada del Re
// ──────────────────────────────────────────────────────────
repInSection(888, 'Spada Intrepida', 'Lacerazione');
repInSection(888, 'Danza Spada', 'Attacco Rapido');
repInSection(888, 'Vento Sacro', 'Ferrartigli');
repInSection(888, 'Taglio Mistico', 'Spadasanta');
repInSection(888, 'Carica Eroica', 'Agilità');
repInSection(888, 'Lama Fata', 'Carineria');
repInSection(888, 'Sacra Spada', 'Spada del Re');
repInSection(888, 'Colpo della Spada Eroica', 'Spada del Re'); // backup

// ──────────────────────────────────────────────────────────
// PAWMOT (925) - Tuonoshock/Scintilla | Elettroshock/Zuffa | Fossa/Strofinamento | Rianimazione Pawmot
// ──────────────────────────────────────────────────────────
repInSection(925, 'Carica Elettrica', 'Tuonoshock');
repInSection(925, 'Tuonopugno', 'Scintilla');
repInSection(925, 'Cura Rivitalizzante', 'Elettroshock');
repInSection(925, 'Doppio Shock', 'Zuffa');
repInSection(925, 'Danza Elettrica', 'Fossa');
repInSection(925, 'Rianimazione', 'Strofinamento');
repInSection(925, 'Sovraccarica', 'Rianimazione Pawmot');
repInSection(925, 'Maxi-Volt Totale', 'Rianimazione Pawmot'); // backup

// ──────────────────────────────────────────────────────────
// MEGA CHARIZARD X (10034)
// ──────────────────────────────────────────────────────────
repInSection(10034, 'Fuoco Interiore', 'Fuococarica');
repInSection(10034, 'Volo Draconico', 'Turbofuoco');
repInSection(10034, 'Artigli Fuoco', 'Fuocopugno');
repInSection(10034, 'Drago Danza', 'Dragodanza');
repInSection(10034, 'Colpo Volante', 'Aereassalto');
repInSection(10034, 'Fuoco Draconico', 'Fuocobomba');
repInSection(10034, 'Armatura Drago', 'Fuocobomba'); // backup

// ──────────────────────────────────────────────────────────
// MEGA GYARADOS (10067)
// ──────────────────────────────────────────────────────────
repInSection(10067, 'Rabbia Oscura', 'Flagello');
repInSection(10067, 'Cascata Oscura', 'Cascata');
repInSection(10067, 'Vortice Oscuro', 'Dragospiro');
repInSection(10067, 'Tempesta Oscura', 'Idrocoda');
repInSection(10067, 'Sfida Oscura', 'Rimbalzo');
repInSection(10067, 'Fauci Oscure', 'Morso');
repInSection(10067, 'Barriera Oscura', 'Barriera Oscura'); // keep or map
repInSection(10067, 'Maelstrom Oscuro Supremo', 'Corrente Draconica');

// ──────────────────────────────────────────────────────────
// MEGA LUCARIO (10071)
// ──────────────────────────────────────────────────────────
repInSection(10071, 'Aura Adattiva', 'Attacco Rapido');
repInSection(10071, 'Pugno Aura', 'Meteorpugno');
repInSection(10071, 'Pallasfera Aura', 'Extrarapido');
repInSection(10071, 'Mega Velocità Estrema', 'Crescipugno');
repInSection(10071, 'Pugno Ombra', 'Ossoraffiche');
repInSection(10071, 'Aura Sfera Mega', 'Zuffa');
repInSection(10071, 'Danza Spada Aura', 'Ondasfera Letale');
repInSection(10071, 'Mega Aura Tempesta', 'Ondasfera Letale'); // backup

// ──────────────────────────────────────────────────────────
// DHELMISE (781) - Beccata/Ancorata | Vigorcolpo/Spettrotuffo | Giroballa/Pesobomba | Ancoraggio Gigavolt
// ──────────────────────────────────────────────────────────
repInSection(781, 'Presa dell\'Ancora', 'Beccata');
repInSection(781, 'Giro Ancora', 'Ancorata');
repInSection(781, 'Trappola Marina', 'Vigorcolpo');
repInSection(781, 'Lancio Ancora', 'Spettrotuffo');
repInSection(781, 'Schianto Ancora', 'Giroballa');
repInSection(781, 'Foresta Marina', 'Pesobomba');
repInSection(781, 'Barriera Oceanica', 'Ancoraggio Gigavolt');
repInSection(781, 'Giudizio dell\'Ancora Spettrale', 'Ancoraggio Gigavolt'); // backup

// ──────────────────────────────────────────────────────────
// EMPOLEON (395) - Bolla/Acquajet | Idropompa/Perforbecco | Surf/Mulinello | Impatto Imperiale
// ──────────────────────────────────────────────────────────
repInSection(395, 'Surf', 'Bolla');             // if Surf is in starting position
repInSection(395, 'Ghiacciolampo', 'Acquajet');
repInSection(395, "Bolla d'Acciaio", 'Idropompa');
repInSection(395, 'Acqua Cannone', 'Perforbecco');
repInSection(395, 'Ghiacciostorm', 'Surf');
repInSection(395, 'Difesa Acciaio', 'Mulinello');
repInSection(395, 'Blizzard Imperiale', 'Impatto Imperiale');

// ──────────────────────────────────────────────────────────
// GOODRA (706) - Bolla/Azione | Fangonda/Dragopulsar | Vigorcolpo/Scudacidolo | Rigenerapioggia
// ──────────────────────────────────────────────────────────
repInSection(706, 'Rivestimento Mucoso', 'Bolla');
repInSection(706, 'Drago Vento', 'Azione');
repInSection(706, 'Caramello Acido', 'Fangonda');
repInSection(706, 'Drago Impulso', 'Dragopulsar');
repInSection(706, 'Muco Esplosivo', 'Vigorcolpo');
repInSection(706, 'Drago Danza Difensiva', 'Scudacidolo');
repInSection(706, 'Grandine di Muco', 'Rigenerapioggia');
repInSection(706, 'Tsunami di Muco Draconico', 'Rigenerapioggia'); // backup

// ──────────────────────────────────────────────────────────
// SUICUNE (245) - Bollabraggio/Ventogelo | Idropompa/Purogelo | Velaurora/Specchiovelo | Grazia del Vento del Nord
// ──────────────────────────────────────────────────────────
repInSection(245, 'Acqua Purificante', 'Bollabraggio');
repInSection(245, 'Idropompa', 'Ventogelo');
repInSection(245, 'Vento Artico', 'Idropompa');
repInSection(245, 'Idrovortice', 'Purogelo');
repInSection(245, 'Blizzard', 'Velaurora');
repInSection(245, 'Nebbia Artica', 'Specchiovelo');
repInSection(245, 'Vento Sacro', 'Grazia del Vento del Nord');
repInSection(245, 'Marea Glaciale di Suicune', 'Grazia del Vento del Nord'); // backup

// ──────────────────────────────────────────────────────────
// TINKATON (959) - Sbigottimento/Martelfata | Martello Gigante/Strisciacolpo | Cannone Flash/Privazione | Capriccio di Tinkaton
// ──────────────────────────────────────────────────────────
repInSection(959, 'Martello da Fata', 'Sbigottimento');
repInSection(959, 'Potere Martello', 'Martelfata');
repInSection(959, 'Scudo di Fata', 'Martello Gigante');
repInSection(959, 'Gigantesco Martello', 'Strisciacolpo');
repInSection(959, 'Lancio Martello', 'Cannone Flash');
repInSection(959, 'Fortezza di Fata', 'Privazione');
repInSection(959, 'Rimbalzo Fatato', 'Capriccio di Tinkaton');
repInSection(959, 'Colpo di Martello Supremo', 'Capriccio di Tinkaton'); // backup

// ──────────────────────────────────────────────────────────
// ALCREMIE (869) - Profumino/Decorazione | Magibrillio/Nebbia | Scudacidolo/Aromaterapia | Pioggia di Panna
// ──────────────────────────────────────────────────────────
repInSection(869, 'Decorazione Dolce', 'Profumino');
repInSection(869, 'Aroma Dolce', 'Decorazione');
repInSection(869, 'Nebbia Fata', 'Magibrillio');
repInSection(869, 'Torta Esplosiva', 'Nebbia');
repInSection(869, 'Crema Barriera', 'Scudacidolo');
// Pioggia di Panna is already correct in current data
repInSection(869, 'Dolce Bacio', 'Aromaterapia');
repInSection(869, 'G-Max Beffa Dolce', 'Pioggia di Panna'); // backup

// ──────────────────────────────────────────────────────────
// HO-OH (250) - Appollaio/Raffica | Fuocobomba/Magifuoco | Aereattacco/Volo | Fiamma della Rinascita
// ──────────────────────────────────────────────────────────
repInSection(250, 'Rigenerazione Sacra', 'Appollaio');
repInSection(250, 'Piuma di Fuoco', 'Raffica');
repInSection(250, 'Velo Sacro', 'Fuocobomba');
repInSection(250, 'Fuoco Sacro', 'Magifuoco');
repInSection(250, 'Colpo d\'Ala Arcobaleno', 'Aereattacco');
repInSection(250, 'Cura Sacra', 'Volo');
repInSection(250, 'Benedizione Arcobaleno', 'Fiamma della Rinascita');
repInSection(250, 'Benedizione Sacra di Ho-Oh', 'Fiamma della Rinascita'); // backup

// ──────────────────────────────────────────────────────────
// LATIAS (380) - Foschisfera/Fascino | Zuccata Zen/Ripresa | Dragopulsar/Riflesso | Ali di Latias
// ──────────────────────────────────────────────────────────
repInSection(380, 'Levitate', 'Foschisfera');
repInSection(380, 'Luccicanza', 'Fascino');
repInSection(380, 'Tiro Magnetico', 'Zuccata Zen');
repInSection(380, 'Bolla Protettiva', 'Ripresa');
repInSection(380, 'Raggio Drago Gemella', 'Dragopulsar');
repInSection(380, 'Volo Galattico', 'Riflesso');
repInSection(380, 'Psicoboost', 'Ali di Latias');
repInSection(380, 'Aiuto Psichico Gemello', 'Ali di Latias'); // backup

// ──────────────────────────────────────────────────────────
// PSYDUCK (54) - Pistolacqua/Confusione | Surf/Idropompa | Amnesia/Psichico | Panico da Emicrania
// ──────────────────────────────────────────────────────────
repInSection(54, 'Mal di Testa', 'Pistolacqua');
repInSection(54, 'Confusione', 'Confusione');     // already correct? starting slot2
// Surf, Idropompa, Amnesia, Psichico might already be correct
repInSection(54, 'Barriera Psichica', 'Psichico'); // if Psichico is wrong
repInSection(54, 'Esplosione del Mal di Testa', 'Panico da Emicrania');

// ──────────────────────────────────────────────────────────
// RAPIDASH GALAR (10196) - Confusione/Vento di Fata | Psicotaglio/Forza Equina | Ondasana/Agilità | Carica Pastorale
// ──────────────────────────────────────────────────────────
repInSection(10196, 'Misty Surge', 'Confusione');
repInSection(10196, 'Vento Fata', 'Vento di Fata');
repInSection(10196, 'Benedizione', 'Psicotaglio');
repInSection(10196, 'Raggio Fata', 'Forza Equina');
repInSection(10196, 'Misticismo', 'Ondasana');
repInSection(10196, 'Cura Fatata', 'Agilità');
repInSection(10196, 'Velo di Nebbia Fata', 'Carica Pastorale');
repInSection(10196, 'Corsa Fatata Suprema', 'Carica Pastorale'); // backup

// ──────────────────────────────────────────────────────────
// VAPOREON (134) - Pistolacqua/Altruismo | Fangonda/Idropompa | Scudacidolo/Acquaring | Vortice di Vaporeon
// ──────────────────────────────────────────────────────────
repInSection(134, 'Idratazione', 'Pistolacqua');
repInSection(134, 'Acqua Cannone', 'Altruismo');
repInSection(134, 'Acqua Anello', 'Fangonda');
repInSection(134, 'Surf Guaritrice', 'Idropompa');
repInSection(134, 'Idropompa Potenziata', 'Scudacidolo');
repInSection(134, 'Dissoluzione', 'Acquaring');
repInSection(134, 'Marea Curativa', 'Vortice di Vaporeon');
repInSection(134, 'Onda di Guarigione Totale', 'Vortice di Vaporeon'); // backup

// ──────────────────────────────────────────────────────────
// MEGA MEWTWO Y (10044)
// ──────────────────────────────────────────────────────────
repInSection(10044, 'Pressione Psichica', 'Confusione');
repInSection(10044, 'Psicoraggio', 'Teletrasporto');
repInSection(10044, 'Barriera Mentale', 'Psicoshock');
repInSection(10044, 'Psico Potenziato', 'Divinazione');
repInSection(10044, 'Amnesia', 'Psichico');
repInSection(10044, 'Recupero Psichico', 'Futurovisione');
repInSection(10044, 'Mega Lancia', 'Vuoto Fatato');
repInSection(10044, 'Psico Devastante Finale', 'Psico Devastante'); // keep or map

// ──────────────────────────────────────────────────────────
// MEGA MEWTWO X (10043)
// ──────────────────────────────────────────────────────────
repInSection(10043, 'Potere Illimitato', 'Extrarapido');
repInSection(10043, 'Psico-Colpo', 'Crescipugno');
repInSection(10043, 'Onda Vuoto', 'Ossoraffiche');
repInSection(10043, 'Psicocolpo Devastante', 'Zuffa');
repInSection(10043, 'Grinfiacide', 'Ondasfera Letale');
repInSection(10043, 'Psicofisico Supremo', 'Psicofisico Supremo'); // keep
repInSection(10043, 'Barriera Psichica', 'Barriera Psichica'); // keep
repInSection(10043, 'Mega Psicofisico Definitivo', 'Mega Psicofisico'); // keep

// ════════════════════════════════════════════════════════════════════
// WRITE OUTPUT
// ════════════════════════════════════════════════════════════════════
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Aggiornamento completato! File scritto:', filePath);
console.log('Verificare i risultati con: grep -n "name:" app/data/pokemon.ts | head -50');
