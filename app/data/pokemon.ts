export interface Pokemon {
  id: number;
  name: string;
  role: string;
  style: string;
  damage: string;
  difficulty: string;
  tier: string;
  type: string;
  tag: string;
  winRate?: number;
  winRateChange?: number;
  moves?: string[];
  uniteMove?: string;
}

export const POKEMON: Pokemon[] = [
  {id:25,name:"Pikachu",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"A",type:"electric",tag:"Att. Speciale",winRate:48.11,winRateChange:-0.25,moves:["Tuonoshock","Energisfera","Fulmine","Locomovolt","Tuono","Energisfera"],uniteMove:"Bolle di Tuono"},
  {id:815,name:"Cinderace",role:"Attaccante",style:"Distanza",damage:"Fisico",difficulty:"Principiante",tier:"S",type:"fire",tag:"Att. Fisico",winRate:49.58,winRateChange:1.22,moves:["Braciere","Sottocarico","Palla Infuocata","Calciardente","Nitrocarica","Fintoattacco"],uniteMove:"Rovesciata Fiammante"},
  {id:3,name:"Venusaur",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"grass",tag:"Att. Speciale",winRate:47.79,winRateChange:-0.79,moves:["Semebomba","Fogliamagica","Fangobomba","Gigassorbimento","Solarraggio","Petalodanza"],uniteMove:"Furia Verde"},
  {id:10103,name:"Ninetales di Alola",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"ice",tag:"Att. Speciale",winRate:48.26,winRateChange:0.74,moves:["Polvereneve","Ventogelo","Magibrillio","Valanga","Velaurora","Bora"],uniteMove:"Nube di Neve"},
  {id:282,name:"Gardevoir",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"B",type:"psychic",tag:"Att. Speciale",winRate:50.38,winRateChange:0.66,moves:["Confusione","Teletrasporto","Psicoshock","Divinazione","Psichico","Forzalunare"],uniteMove:"Vuoto Fatato"},
  {id:658,name:"Greninja",role:"Attaccante",style:"Distanza",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"water",tag:"Att. Fisico",winRate:48.8,winRateChange:-0.12,moves:["Bolla","Sostituto","Doppioteam","Muro di Fumo","Acquashuriken","Surf"],uniteMove:"Acquashuriken Gigante"},
  {id:845,name:"Cramorant",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Esperto",tier:"C",type:"flying",tag:"Att. Speciale",winRate:47.24,winRateChange:1.54,moves:["Mulinello","Danzadipiume","Tifone","Eaerassalto","Surf","Sub"],uniteMove:"Raffica di Inghiottitutto"},
  {id:700,name:"Sylveon",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"fairy",tag:"Att. Speciale",winRate:47.43,winRateChange:0.25,moves:["Cometapugno","Occhioni Teneri","Magifuoco","Granvoce","Assorbabacio","Calmamente"],uniteMove:"Danza Fatata"},
  {id:724,name:"Decidueye",role:"Attaccante",style:"Distanza",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"grass",tag:"Att. Fisico",winRate:50.51,winRateChange:-0.74,moves:["Fogliame","Sbigottimento","Fogliamagica","Cucitura d'Ombra","Fogliatempesta","Furtivombra"],uniteMove:"Raffica di Frecce"},
  {id:471,name:"Glaceon",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"ice",tag:"Att. Speciale",winRate:48.9,winRateChange:-0.21,moves:["Cometapugno","Ventogelo","Gelolancia","Ventogelo","Gelo-scheggia","Liofilizzazione"],uniteMove:"Palcoscenico Glaciale"},
  {id:196,name:"Espeon",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"B",type:"psychic",tag:"Att. Speciale",winRate:49.3,winRateChange:-0.19,moves:["Cometapugno","Rugito","Psicoshock","Veicolaforza","Psicoraggio","Divinazione"],uniteMove:"Psicosole"},
  {id:655,name:"Delphox",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"B",type:"fire",tag:"Att. Speciale",winRate:50.73,winRateChange:0.82,moves:["Braciere","Fuocofatuo","Fuocobomba","Magifuoco","Turbofuoco","Nitrocarica"],uniteMove:"Fuochi d'Artificio Fatati"},
  {id:884,name:"Duraludon",role:"Attaccante",style:"Distanza",damage:"Fisico",difficulty:"Intermedio",tier:"C",type:"steel",tag:"Att. Fisico",winRate:49.62,winRateChange:-1.69,moves:["Alidifesa","Spaccaroccia","Cannone Flash","Dragopulsar","Levitoroccia","Codadrago"],uniteMove:"Rovina Rotante"},
  {id:887,name:"Dragapult",role:"Attaccante",style:"Distanza",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"dragon",tag:"Att. Fisico",winRate:49.34,winRateChange:0.59,moves:["Sbigottimento","Attacco Rapido","Dragospiro","Palla Ombra","Dragodanza","Spettrotuffo"],uniteMove:"Raffica di Dreepy"},
  {id:151,name:"Mew",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"A",type:"psychic",tag:"Att. Speciale",winRate:48.49,winRateChange:0.11,moves:["Botta","Agilità","Energisfera","Solarraggio","Surf","Aiuto","Schermoluce"],uniteMove:"Miraggio Mistico"},
  {id:609,name:"Chandelure",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"A",type:"ghost",tag:"Att. Speciale",winRate:48.1,winRateChange:-1.02,moves:["Braciere","Ombronotturna","Lanciafiamme","Vampata","Poltergeist","Prigione"],uniteMove:"Fuoco di Sbarramento"},
  {id:818,name:"Inteleon",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"B",type:"water",tag:"Att. Speciale",winRate:50.24,winRateChange:-0.15,moves:["Pistolacqua","Occhioni Teneri","Pungiglione","Acrobazia","Idroliquidazione","Tiromirato"],uniteMove:"Spia Azzurra"},
  {id:1008,name:"Miraidon",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"S",type:"electric",tag:"Att. Speciale",winRate:48.97,winRateChange:-0.88,moves:["Tuonoshock","Raggioscossa","Saetta Fulminante","Tuono","Carica Parabolica","Manovra Derapata"],uniteMove:"Futuro Splendente"},
  {id:663,name:"Talonflame",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"A",type:"fire",tag:"Att. Fisico",winRate:49.92,winRateChange:-0.01,moves:["Beccata","Acrobazia","Nitrocarica","Aereassalto","Volo","Baldavace"],uniteMove:"Fiammivoro"},
  {id:359,name:"Absol",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"B",type:"dark",tag:"Att. Fisico",winRate:47.02,winRateChange:1.1,moves:["Fintoattacco","Lacerazione","Nottesferza","Inseguimento","Psicotaglio","Sbigoattacco"],uniteMove:"Squarcio Notturno"},
  {id:94,name:"Gengar",role:"Velocista",style:"Mischia",damage:"Sp.",difficulty:"Esperto",tier:"A",type:"ghost",tag:"Att. Speciale",winRate:51.1,winRateChange:0.08,moves:["Fuocofatuo","Leccata","Palla Ombra","Fangobomba","Mangiasogni","Sciagura"],uniteMove:"Agguato Oscuro"},
  {id:807,name:"Zeraora",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"A",type:"electric",tag:"Att. Fisico",winRate:47,winRateChange:-0.7,moves:["Agilità","Lacerazione","Invertivolt","Scintilla","Scarica","Sprizzalampo"],uniteMove:"Tempesta Plasma"},
  {id:571,name:"Zoroark",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"dark",tag:"Att. Fisico",winRate:46.14,winRateChange:0.72,moves:["Lacerazione","Sfuriate","Nottesferza","Fintoattacco","Ombrartigli","Taglio"],uniteMove:"Urtoscuro"},
  {id:85,name:"Dodrio",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"B",type:"normal",tag:"Att. Fisico",winRate:50.45,winRateChange:-0.56,moves:["Beccata","Attacco Rapido","Triattacco","Perforbecco","Agilità","Calciopesante"],uniteMove:"Triplo Calpestamento"},
  {id:470,name:"Leafeon",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"grass",tag:"Att. Fisico",winRate:47.06,winRateChange:-2.08,moves:["Fogliamagica","Cometapugno","Lamsolare","Fogliama","Aereassalto","Furia d'Incrocio"],uniteMove:"Danza di Smeraldo"},
  {id:911,name:"Meowscarada",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"S",type:"grass",tag:"Att. Fisico",winRate:49.13,winRateChange:0.99,moves:["Fogliame","Unghiaguzze","Prestigiatore","Nottesferza","Doppioteam","Apripista"],uniteMove:"Fioritura Esplosiva"},
  {id:6,name:"Charizard",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"A",type:"fire",tag:"Att. Fisico",winRate:49.82,winRateChange:0.39,moves:["Fiammata","Turbofuoco","Lanciafiamme","Fuocopugno","Fuocobomba","Fuococarica"],uniteMove:"Schiacciata Sismica"},
  {id:448,name:"Lucario",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"fighting",tag:"Att. Fisico",winRate:48.79,winRateChange:0.67,moves:["Attacco Rapido","Meteorpugno","Extrarapido","Crescipugno","Ossoraffiche","Zuffa"],uniteMove:"Ondasfera Letale"},
  {id:68,name:"Machamp",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"fighting",tag:"Att. Fisico",winRate:51.15,winRateChange:1.14,moves:["Colpokarate","Granfisico","Dinamipugno","Sottomissione","Zuffa","Incrocolpo"],uniteMove:"Schiacciata di Machamp"},
  {id:445,name:"Garchomp",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"dragon",tag:"Att. Fisico",winRate:51.15,winRateChange:1.28,moves:["Turbosabbia","Pestone","Dragofuria","Fossa","Dragartigli","Terremoto"],uniteMove:"Furia Livida"},
  {id:149,name:"Dragonite",role:"Versatile",style:"Distanza",damage:"Fisico",difficulty:"Principiante",tier:"A",type:"dragon",tag:"Att. Fisico",winRate:47.57,winRateChange:-2.84,moves:["Tornado","Dragodanza","Dragospiro","Extrarapido","Oltraggio","Iper Raggio"],uniteMove:"Impatto Draconico"},
  {id:763,name:"Tsareena",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"grass",tag:"Att. Fisico",winRate:50.74,winRateChange:-0.92,moves:["Fogliamagica","Rapigiro","Triplo Axel","Pestone","Tropocalcio","Erboscivolata"],uniteMove:"Regalità Aerea"},
  {id:681,name:"Aegislash",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"B",type:"steel",tag:"Att. Fisico",winRate:47.6,winRateChange:1.82,moves:["Furtivombra","Ferroscudo","Spadasanta","Ombrartigli","Ferroriduttore","Scudo Reale"],uniteMove:"Fendente Finale"},
  {id:212,name:"Scizor",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"bug",tag:"Att. Fisico",winRate:49.64,winRateChange:-0.32,moves:["Attacco Rapido","Tagliofuria","Pugnoscarica","Danzaspada","Doppioffensiva","Ferroriduttore"],uniteMove:"Illusione Rossa"},
  {id:248,name:"Tyranitar",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"rock",tag:"Att. Fisico",winRate:51.9,winRateChange:1.16,moves:["Lucidatura","Morso","Neropulsar","Pietrataglio","Forzantica","Sabbiatomba"],uniteMove:"Furia Tirannica"},
  {id:794,name:"Buzzwole",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"bug",tag:"Att. Fisico",winRate:46.37,winRateChange:-0.49,moves:["Pungiglione","Megapugno","Assalto","Abbattimento","Crescipugno","Sanguisuga"],uniteMove:"Superlancio Muscolare"},
  {id:184,name:"Azumarill",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"C",type:"water",tag:"Att. Fisico",winRate:47.61,winRateChange:1.26,moves:["Azione","Bolla","Mulinello","Idrocoda","Carineria","Idropulsar"],uniteMove:"Panciata Tamburo"},
  {id:376,name:"Metagross",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"S",type:"steel",tag:"Att. Fisico",winRate:47.52,winRateChange:-1.68,moves:["Ferroscudo","Azione","Meteorpugno","Giroballa","Zuccata Zen","Magnetascesa"],uniteMove:"Analisi ed Impatto"},
  {id:892,name:"Urshifu",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"fighting",tag:"Att. Fisico",winRate:51.81,winRateChange:1.47,moves:["Spaccaroccia","Pugnotenebre","Golaforata","Spaccaroccia","Idroraffica","Idroliquidazione"],uniteMove:"Pugno d'Ebano / Raffica di Pugni"},
  {id:143,name:"Snorlax",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"S",type:"normal",tag:"Att. Fisico",winRate:48.58,winRateChange:-1.3,moves:["Azione","Riposo","Pesobomba","Flagello","Blocco","Sbadiglio"],uniteMove:"Sonnellino Reale"},
  {id:80,name:"Slowbro",role:"Difensore",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"water",tag:"Att. Speciale",winRate:48.91,winRateChange:0.49,moves:["Pistolacqua","Pigrizia","Idrovampata","Surf","Amnesia","Telecinesi"],uniteMove:"Sguardo Immobile"},
  {id:558,name:"Crustle",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"B",type:"bug",tag:"Att. Fisico",winRate:48.45,winRateChange:-1.09,moves:["Frana","Tagliofuria","Gettaguscio","Tombarocciata","Levitoroccia","Furia d'Incrocio"],uniteMove:"Frantumaroccia"},
  {id:820,name:"Greedent",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"normal",tag:"Att. Fisico",winRate:51.86,winRateChange:1.49,moves:["Azione","Ricciolscudo","Semitraglia","Rutto","Guancegonfie","Supplica"],uniteMove:"Panciata di Bacche"},
  {id:709,name:"Trevenant",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"ghost",tag:"Att. Fisico",winRate:48.59,winRateChange:-1.1,moves:["Fuocofatuo","Ramopuntura","Mazzuolegno","Maledizione","Mazzuolcorno","Malcomune"],uniteMove:"Foresta Spettrale"},
  {id:473,name:"Mamoswine",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"ice",tag:"Att. Fisico",winRate:49.37,winRateChange:0.49,moves:["Gelo-scheggia","Azione","Scagliagelo","Gelodenti","Forza Equina","Terremoto"],uniteMove:"Pestone del Mammut"},
  {id:9,name:"Blastoise",role:"Difensore",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"water",tag:"Att. Speciale",winRate:52.44,winRateChange:0.51,moves:["Pistolacqua","Capocciata","Idropompa","Zampillo","Surf","Rapigiro"],uniteMove:"Tifone Idrico"},
  {id:197,name:"Umbreon",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"S",type:"dark",tag:"Att. Fisico",winRate:49.21,winRateChange:0.58,moves:["Cometapugno","Falsalacrima","Malosguardo","Ripicca","Desiderio","Urlorabbia"],uniteMove:"Danza Lunare"},
  {id:131,name:"Lapras",role:"Difensore",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"water",tag:"Att. Speciale",winRate:47.63,winRateChange:-0.76,moves:["Pistolacqua","Mulinello","Gelo-raggio","Liofilizzazione","Idropulsar","Bolla-raggio"],uniteMove:"Lapras Express"},
  {id:830,name:"Eldegoss",role:"Supporto",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"B",type:"grass",tag:"Att. Speciale",winRate:49.7,winRateChange:0.29,moves:["Fogliame","Sintesi","Sferapollina","Fogliatempesta","Cotonscudo","Cotonspora"],uniteMove:"Atterraggio Morbido"},
  {id:122,name:"Mr. Mime",role:"Supporto",style:"Mischia",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"psychic",tag:"Att. Speciale",winRate:51.78,winRateChange:0.49,moves:["Bruciapelo","Schermoluce","Confusione","Psichico","Barriera","Vigorscambio"],uniteMove:"È l'ora dello show!"},
  {id:40,name:"Wigglytuff",role:"Supporto",style:"Mischia",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"fairy",tag:"Att. Speciale",winRate:50.47,winRateChange:-0.65,moves:["Botta","Ricciolscudo","Doubleschaffo","Magibrillio","Canto","Rotolamento"],uniteMove:"Recital Stellare"},
  {id:242,name:"Blissey",role:"Supporto",style:"Mischia",damage:"Sp.",difficulty:"Principiante",tier:"S",type:"normal",tag:"Att. Speciale",winRate:47.78,winRateChange:0.16,moves:["Botta","Ondasana","Uovobomba","Altruismo","Covauova","Salvaguardia"],uniteMove:"Blissey ai Ripari"},
  {id:720,name:"Hoopa",role:"Supporto",style:"Distanza",damage:"Sp.",difficulty:"Esperto",tier:"S",type:"psychic",tag:"Att. Speciale",winRate:50.09,winRateChange:-0.21,moves:["Sbigottimento","Confusione","Foro Dimensional","Prestigio","Spettrotuffo","Palla Ombra"],uniteMove:"Cerchi Liberati"},
  {id:36,name:"Clefable",role:"Supporto",style:"Mischia",damage:"Sp.",difficulty:"Principiante",tier:"A",type:"fairy",tag:"Att. Speciale",winRate:47.93,winRateChange:-0.08,moves:["Botta","Ondasana","Fidofonte","Assorbabacio","Gravità","Sonoqui"],uniteMove:"Desiderio Fatato"},
  {id:764,name:"Comfey",role:"Supporto",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"S",type:"fairy",tag:"Att. Speciale",winRate:48.18,winRateChange:0.36,moves:["Sintesi","Fogliamagica","Cura Floreale","Laccioerboso","Dolcebacio","Fogliamagica"],uniteMove:"Carezza Floreale"},
  {id:302,name:"Sableye",role:"Supporto",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"B",type:"dark",tag:"Att. Fisico",winRate:46.49,winRateChange:1.28,moves:["Furto","Sbigottimento","Privazione","Furtivombra","Stordiraggio","Fintoattacco"],uniteMove:"Sguardo Caotico"},
  // Attaccanti aggiuntivi
  {id:491,name:"Darkrai",role:"Velocista",style:"Distanza",damage:"Sp.",difficulty:"Esperto",tier:"S",type:"dark",tag:"Att. Speciale",winRate:50.34,winRateChange:-0.35,moves:["Neropulsar","Palla Ombra","Vuototetro","Incubo","Congiura","Doppioteam"],uniteMove:"Incubo Eterno"},
  {id:381,name:"Latios",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"dragon",tag:"Att. Speciale",winRate:48.12,winRateChange:-0.98,moves:["Abbagliante","Dragospiro","Zuccata Zen","Ripresa","Dragopulsar","Psicoshock"],uniteMove:"Ali di Latios"},
  {id:936,name:"Armarouge",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"fire",tag:"Att. Speciale",winRate:50.22,winRateChange:-0.39,moves:["Braciere","Fuocofatuo","Corazzaluna","Turbofuoco","Nitrocarica","Psicoshock"],uniteMove:"Esplosione Psico-X"},
  {id:10035,name:"Mega Charizard Y",role:"Versatile",style:"Distanza",damage:"Sp.",difficulty:"Esperto",tier:"S",type:"fire",tag:"Att. Speciale",winRate:57.11,winRateChange:0.72,moves:["Fiammata","Turbofuoco","Lanciafiamme","Fuocopugno","Fuocobomba","Fuococarica"],uniteMove:"Megaevoluzione"},
  {id:10044,name:"Mega Mewtwo Y",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Esperto",tier:"S",type:"psychic",tag:"Att. Speciale",winRate:53.31,winRateChange:0.19,moves:["Tuonoshock","Raggioscossa","Saetta Fulminante","Tuono","Carica Parabolica","Manovra Derapata"],uniteMove:"Futuro Splendente"},
  // Velocisti aggiuntivi
  {id:937,name:"Ceruledge",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"A",type:"fire",tag:"Att. Fisico",winRate:51.81,winRateChange:0.12,moves:["Braciere","Furtivombra","Lama del Rimorso","Psicotaglio","Spettrotuffo","Nitrocarica"],uniteMove:"Squarcio Spettrale"},
  {id:778,name:"Mimikyu",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"ghost",tag:"Att. Fisico",winRate:51.04,winRateChange:-0.32,moves:["Sbigottimento","Graffio","Carineria","Ombrartigli","Furtivombra","Dolcetto o Scherzetto"],uniteMove:"Giochiamo Insieme?"},
  {id:10100,name:"Raichu",role:"Versatile",style:"Mischia",damage:"Sp.",difficulty:"Intermedio",tier:"B",type:"electric",tag:"Att. Speciale",winRate:48.21,winRateChange:0.58,moves:["Tuonoshock","Scintilla","Fulmine","Locomovolt","Tuono","Codacciaio"],uniteMove:"Surfsplash di Alola"},
  {id:123,name:"Scyther",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"B",type:"bug",tag:"Att. Fisico"},
  {id:52,name:"Meowth",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"normal",tag:"Att. Fisico",winRate:50.76,winRateChange:0.48,moves:["Bruciapelo","Sfuriate","Giorno Paga","Morso","Lacerazione","Carineria"],uniteMove:"Agguato del Team Rocket"},
  // Versatili aggiuntivi
  {id:257,name:"Blaziken",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"A",type:"fire",tag:"Att. Fisico",winRate:50.24,winRateChange:0.24,moves:["Aereassalto","Braciere","Fuocopugno","Vampata","Focalcolpo","Calciardente"],uniteMove:"Vortice di Fiamme"},
  {id:870,name:"Falinks",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"B",type:"fighting",tag:"Att. Fisico",winRate:48.51,winRateChange:1.89,moves:["Granfisico","Megacorno","Ferroriduttore","Picchiaduro","Sbarramento","Incornata"],uniteMove:"Cantamagliata"},
  {id:130,name:"Gyarados",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"water",tag:"Att. Fisico",winRate:52.32,winRateChange:-0.63,moves:["Flagello","Splash","Dragospiro","Idrocoda","Cascata","Rimbalzo"],uniteMove:"Corrente Draconica"},
  {id:865,name:"Sirfetch'd",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"fighting",tag:"Att. Fisico",winRate:49.46,winRateChange:0.81,moves:["Beccata","Tagliofuria","Vorticefferato","Fogliama","Individua","Sferzata Meteorite"],uniteMove:"Fendente Cavalleresco"},
  {id:888,name:"Zacian",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"fairy",tag:"Att. Fisico",winRate:49.05,winRateChange:0.92,moves:["Lacerazione","Attacco Rapido","Ferrartigli","Spadasanta","Agilità","Carineria"],uniteMove:"Spada del Re"},
  {id:925,name:"Pawmot",role:"Velocista",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"electric",tag:"Att. Fisico",winRate:49.47,winRateChange:-0.96,moves:["Tuonoshock","Scintilla","Elettroshock","Zuffa","Fossa","Strofinamento"],uniteMove:"Rianimazione Pawmot"},
  {id:10034,name:"Mega Charizard X",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"dragon",tag:"Att. Fisico",winRate:49.22,winRateChange:-0.73,moves:["Fiammata","Turbofuoco","Lanciafiamme","Fuocopugno","Fuocobomba","Fuococarica"],uniteMove:"Megaevoluzione"},
  {id:10067,name:"Mega Gyarados",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"water",tag:"Att. Fisico",winRate:56.8,winRateChange:-0.43,moves:["Flagello","Splash","Dragospiro","Idrocoda","Cascata","Rimbalzo"],uniteMove:"Corrente Draconica"},
  {id:10071,name:"Mega Lucario",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"fighting",tag:"Att. Fisico",winRate:53.17,winRateChange:0.14,moves:["Attacco Rapido","Meteorpugno","Extrarapido","Crescipugno","Ossoraffiche","Zuffa"],uniteMove:"Ondasfera Letale"},
  {id:10043,name:"Mega Mewtwo X",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Esperto",tier:"S",type:"psychic",tag:"Att. Fisico",winRate:46.78,winRateChange:-1.07,moves:["Sbigottimento","Graffio","Carineria","Ombrartigli","Furtivombra","Dolcetto o Scherzetto"],uniteMove:"Giochiamo Insieme?"},
  // Difensori aggiuntivi
  {id:781,name:"Dhelmise",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"B",type:"ghost",tag:"Att. Fisico",winRate:48.18,winRateChange:0.02,moves:["Beccata","Ancorata","Vigorcolpo","Spettrotuffo","Giroballa","Pesobomba"],uniteMove:"Ancoraggio Gigavolt"},
  {id:395,name:"Empoleon",role:"Difensore",style:"Mischia",damage:"Fisico",difficulty:"Principiante",tier:"A",type:"water",tag:"Att. Fisico",winRate:49.33,winRateChange:0.51},
  {id:706,name:"Goodra",role:"Difensore",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"dragon",tag:"Att. Speciale",winRate:46.64,winRateChange:0.19,moves:["Bolla","Azione","Fangonda","Dragopulsar","Vigorcolpo","Scudacidolo"],uniteMove:"Rigenerapioggia"},
  {id:245,name:"Suicune",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"B",type:"water",tag:"Att. Speciale",winRate:48.82,winRateChange:0.97,moves:["Bollabraggio","Ventogelo","Idropompa","Purogelo","Velaurora","Specchiovelo"],uniteMove:"Grazia del Vento del Nord"},
  {id:959,name:"Tinkaton",role:"Versatile",style:"Mischia",damage:"Fisico",difficulty:"Intermedio",tier:"A",type:"fairy",tag:"Att. Fisico",winRate:49.07,winRateChange:0.92,moves:["Sbigottimento","Martelfata","Martello Gigante","Strisciacolpo","Cannone Flash","Privazione"],uniteMove:"Capriccio di Tinkaton"},
  // Supporto aggiuntivi
  {id:869,name:"Alcremie",role:"Supporto",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"B",type:"fairy",tag:"Att. Speciale",winRate:50.32,winRateChange:0.94,moves:["Profumino","Decorazione","Magibrillio","Nebbia","Scudacidolo","Aromaterapia"],uniteMove:"Pioggia di Panna"},
  {id:250,name:"Ho-Oh",role:"Difensore",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"fire",tag:"Att. Speciale",winRate:48.89,winRateChange:-2.26,moves:["Appollaio","Raffica","Fuocobomba","Magifuoco","Aereattacco","Volo"],uniteMove:"Fiamma della Rinascita"},
  {id:380,name:"Latias",role:"Attaccante",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"A",type:"dragon",tag:"Att. Speciale",winRate:50.55,winRateChange:0.24,moves:["Foschisfera","Fascino","Zuccata Zen","Ripresa","Dragopulsar","Riflesso"],uniteMove:"Ali di Latias"},
  {id:54,name:"Psyduck",role:"Supporto",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"B",type:"water",tag:"Att. Speciale",winRate:51.78,winRateChange:-0.25,moves:["Pistolacqua","Confusione","Surf","Idropompa","Amnesia","Psichico"],uniteMove:"Panico da Emicrania"},
  {id:10196,name:"Rapidash",role:"Velocista",style:"Distanza",damage:"Sp.",difficulty:"Intermedio",tier:"B",type:"psychic",tag:"Att. Speciale",winRate:51.13,winRateChange:1.54,moves:["Confusione","Vento di Fata","Psicotaglio","Forza Equina","Ondasana","Agilità"],uniteMove:"Carica Pastorale"},
  {id:134,name:"Vaporeon",role:"Supporto",style:"Distanza",damage:"Sp.",difficulty:"Principiante",tier:"A",type:"water",tag:"Att. Speciale",winRate:51.64,winRateChange:-0.64,moves:["Pistolacqua","Altruismo","Fangonda","Idropompa","Scudacidolo","Acquaring"],uniteMove:"Vortice di Vaporeon"},
];

export const DETAILS: Record<number, any> = {
  25: {
    stats: { ps: 6300, atk: 290, def: 240, atksp: 954, defsp: 200, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Statico", desc: "Quando subisce danni, paralizza i nemici vicini (30s di ricarica). La velocità dei nemici paralizzati diminuisce del 30% per 2.5s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni aumentati e paralizzando il nemico colpito.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 10 x (Livello - 1) + 200" },
    moves: [
      { slot: 1, name: "Tuonoshock", level: "1 o 3", cd: "5.00s", tags: ["Colpo Sicuro"], desc: "Rilascia elettricità verso il nemico designato, danneggiando e paralizzando i nemici nell'area d'effetto." },
      { slot: 2, name: "Energisfera", level: "1 o 3", cd: "8.00s", tags: ["CC"], desc: "Lancia una tela elettrica che stordisce e rallenta i nemici colpiti nell'area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fulmine", level: 4, cd: "5.50s", tags: ["Colpo Sicuro"], desc: "Lancia una sfera elettrica verso il nemico, danneggiando e paralizzando i nemici nell'area. Lv.11: Danni nel tempo maggiori." },
        { name: "Locomovolt", level: 4, cd: "7.00s", tags: ["Area"], desc: "Evoca fulmini devastanti nell'area designata, colpendo ogni 0.5s per 2.5s (fino a 5 volte). Lv.11: Danni nel tempo maggiori." },
      ]},
      { slot: 2, choices: [
        { name: "Tuono", level: 6, cd: "10.00s", tags: ["Scatto"], desc: "Pikachu cavalca un'onda elettrica verso i nemici, infliggendo danni e paralizzando. Lv.13: Aumenta la velocità durante l'uso." },
        { name: "Energisfera", level: 6, cd: "8.00s", tags: ["CC", "Area"], desc: "Scaglia un proiettile elettrico che esplode al contatto, paralizzando i nemici. Lv.13: Riduce il tempo di ricarica." },
      ]},
    ],
    unite: { name: "Bolle di Tuono", level: 9, desc: "Scatena una tempesta elettrica devastante nell'area circostante, infliggendo danni massicci a tutti i nemici." },
    builds: [
      { name: "Build: Fulmine Totale", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Energisfera" }, { lv: 4, name: "Fulmine" }, { lv: 6, name: "Tuono" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], heldAlt: "Barrierlente", battle: "Pulsantefuga", battleAlt: "Raggeloluce",
        emblems: ["Rid. Ricarica Att. Speciale - Resistenza per Sopravvivenza", "Rid. Ricarica Att. Speciale - Mobilità per Sopravvivenza"] },
      { name: "Build: Elettro Tackle", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Energisfera" }, { lv: 4, name: "Locomovolt" }, { lv: 6, name: "Energisfera" }],
        held: ["Lente Astuta", "Muscolbanda", "Amplienergia"], heldAlt: "Lente Guida", battle: "Pulsantefuga", battleAlt: "Raggeloluce",
        note: "La Lente Guida può essere usata come terzo oggetto alternativo." },
    ],
    meta: { tier: "A", lane: "Corsia Inferiore", strengths: "Burst elevato, CC eccellente con paralisi, facile da usare, ottimo in teamfight", weaknesses: "Fragile, scarsa mobilità, vulnerabile ai Velocisti, dipende dal posizionamento" },
  },

  // ──────────────────────────────────────────────
  // ATTACCANTI
  // ──────────────────────────────────────────────

  815: { // Cinderace
    stats: { ps: 6000, atk: 418, def: 268, atksp: 119, defsp: 232, crit: "30%", cd: "0%", life: "15%" },
    passive: { name: "Libero", desc: "Quando Cinderace usa una mossa, il suo prossimo attacco base cambia tipo in base alla mossa usata, infliggendo danni aggiuntivi di quel tipo." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati al nemico colpito.", dmgBase: "100% Atk + 5 x (Livello - 1) + 0", dmgBoost: "175% Atk + 15 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Braciere", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia una piccola fiamma verso il nemico designato, infliggendo danni di fuoco." },
      { slot: 2, name: "Sottocarico", level: "1 o 3", cd: "7.00s", tags: ["Rallentamento"], desc: "Colpisce con un calcio basso, infliggendo danni e riducendo la velocità dei nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Palla Infuocata", level: 4, cd: "5.00s", tags: ["Proiettile", "Area"], desc: "Calcia una palla di fuoco ad alta velocità che colpisce una piccola area. Lv.11: Danni aumentati." },
        { name: "Calciardente", level: 4, cd: "7.00s", tags: ["Scatto", "Critico"], desc: "Scatta verso il nemico e lo colpisce con un calcio infuocato ad alta probabilità di critico. Lv.11: Danno al critico aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Nitrocarica", level: 6, cd: "10.00s", tags: ["Scatto"], desc: "Scatta in avanti con una serie di calci rotanti. Lv.13: Distanza aumentata." },
        { name: "Fintoattacco", level: 6, cd: "12.00s", tags: ["Supporto", "Area"], desc: "Inverte gli effetti di terreno nell'area: trasforma le zone avversarie in alleate. Lv.13: Durata aumentata." },
      ]},
    ],
    unite: { name: "Rovesciata Fiammante", level: 9, desc: "Cinderace salta in aria e bombarda l'area con una serie di palle di fuoco esplosive, infliggendo enormi danni." },
    builds: [
      { name: "Build: Toppa da Cecchino", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Sottocarico" }, { lv: 4, name: "Palla Infuocata" }, { lv: 6, name: "Nitrocarica" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], heldAlt: "Lente Astuta", battle: "Pulsantefuga", battleAlt: "X-Attacco",
        emblems: ["Att. Fisico - Mobilità per Agilità"] },
      { name: "Build: Calcio Critico", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Sottocarico" }, { lv: 4, name: "Calciardente" }, { lv: 6, name: "Fintoattacco" }],
        held: ["Lente Guida", "Muscolbanda", "Pietra Levitante"], battle: "Pulsantefuga",
        note: "Ottimale con Calcio Ardente: massimizza i danni al critico." },
    ],
    meta: { tier: "S", lane: "Corsia Inferiore", strengths: "Danno fisico elevatissimo, ottima mobilità, scaling eccellente, uno dei migliori Attaccanti del meta", weaknesses: "Richiede farming per scalare, fragile con pochi HP, dipende molto dal posizionamento" },
  },

  3: { // Venusaur
    stats: { ps: 6800, atk: 292, def: 281, atksp: 962, defsp: 240, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Graminaceo", desc: "Quando i PS scendono sotto il 50%, la potenza delle mosse di tipo Erba aumenta del 30%." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati e avvelenando il nemico per 3s.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "40% AttSp + 12 x (Livello - 1) + 180" },
    moves: [
      { slot: 1, name: "Semebomba", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia una raffica di foglie affilate verso il nemico, infliggendo danni multipli." },
      { slot: 2, name: "Fogliamagica", level: "1 o 3", cd: "7.00s", tags: ["CC"], desc: "Colpisce con una frusta vegetale, infliggendo danni e rallentando i nemici." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fangobomba", level: 4, cd: "8.00s", tags: ["Carica", "Area"], desc: "Carica energia solare e poi spara un raggio devastante in linea retta. Lv.11: Danno e raggio aumentati." },
        { name: "Gigassorbimento", level: 4, cd: "5.50s", tags: ["Area", "Veleno"], desc: "Lancia bombe di veleno nell'area designata. Avvelena i nemici colpiti. Lv.11: Danni veleno aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Solarraggio", level: 6, cd: "10.00s", tags: ["Scatto", "Area"], desc: "Venusaur si muove lanciando petali in tutte le direzioni. Cura HP durante l'esecuzione. Lv.13: Durata aumentata." },
        { name: "Petalodanza", level: 6, cd: "9.00s", tags: ["Potenziamento"], desc: "Aumenta temporaneamente l'Att. Speciale e la velocità d'attacco. Lv.13: Bonus aumentati." },
      ]},
    ],
    unite: { name: "Furia Verde", level: 9, desc: "Venusaur bombarda l'area con un'ondata di petali velenosi, infliggendo danni enormi e avvelenando tutti i nemici nell'area." },
    builds: [
      { name: "Build: Raggio Solare", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Semebomba" }, { lv: 3, name: "Fogliamagica" }, { lv: 4, name: "Fangobomba" }, { lv: 6, name: "Solarraggio" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Veleno Totale", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Semebomba" }, { lv: 3, name: "Fogliamagica" }, { lv: 4, name: "Gigassorbimento" }, { lv: 6, name: "Petalodanza" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Ottimo danno speciale ad area, auto-cura con Danza Petali, resistente grazie agli HP", weaknesses: "Raggio Solare richiede carica, mobilità limitata, vulnerabile ai Velocisti" },
  },

  10103: { // Ninetales di Alola
    stats: { ps: 6299, atk: 289, def: 225, atksp: 1002, defsp: 175, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Velo Neve", desc: "Quando Ninetales di Alola è nella neve o nel ghiaccio, la sua velocità di movimento aumenta del 20% e infligge danni bonus ai nemici rallentati." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati e rallentando il nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "35% AttSp + 10 x (Livello - 1) + 160" },
    moves: [
      { slot: 1, name: "Polvereneve", level: "1 o 3", cd: "7.00s", tags: ["Raffreddamento"], desc: "Soffia aria gelida verso i nemici, infliggendo danni di ghiaccio e rallentandoli." },
      { slot: 2, name: "Ventogelo", level: "1 o 3", cd: "9.00s", tags: ["CC", "Area"], desc: "Emette un ululato agghiacciante che riduce le statistiche dei nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Magibrillio", level: 4, cd: "7.50s", tags: ["Area", "Congelamento"], desc: "Scatena una tempesta di neve che congela i nemici nell'area. Lv.11: Area e durata aumentate." },
        { name: "Valanga", level: 4, cd: "6.00s", tags: ["Proiettile", "Congelamento"], desc: "Spara un raggio ghiacciato che congela il primo nemico colpito. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Velaurora", level: 6, cd: "11.00s", tags: ["CC", "Area", "Cura"], desc: "Crea un'aurora boreale che rallenta e paralizza i nemici, curando gli alleati nell'area. Lv.13: Effetti aumentati." },
        { name: "Bora", level: 6, cd: "9.00s", tags: ["Proiettile", "CC"], desc: "Lancia una sfera di ghiaccio che blocca i nemici sul percorso e li rallenta. Lv.13: Raggio aumentato." },
      ]},
    ],
    unite: { name: "Nube di Neve", level: 9, desc: "Scatena un blizzard enorme che copre un'ampia area, infliggendo danni di ghiaccio e congelando tutti i nemici colpiti." },
    builds: [
      { name: "Build: Tempesta Congelante", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Polvereneve" }, { lv: 3, name: "Ventogelo" }, { lv: 4, name: "Magibrillio" }, { lv: 6, name: "Velaurora" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Raggeloluce" },
      { name: "Build: Raggio Singolo", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Polvereneve" }, { lv: 3, name: "Ventogelo" }, { lv: 4, name: "Valanga" }, { lv: 6, name: "Bora" }],
        held: ["Lente Astuta", "Lente Scelta", "Campanello Conchiglia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Eccellente CC con congelamenti, buon danno ad area, forte in teamfight e nelle risse di corsia", weaknesses: "Molto fragile, richiede buon posizionamento, dipende dalla combinazione di mosse" },
  },

  282: { // Gardevoir
    stats: { ps: 6700, atk: 291, def: 280, atksp: 1050, defsp: 230, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Sincronizzazione", desc: "Quando Gardevoir subisce un'alterazione di stato, la trasmette anche al nemico che l'ha causata con la stessa durata." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni psichici aumentati e riducendo brevemente la velocità del nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "42% AttSp + 12 x (Livello - 1) + 200" },
    moves: [
      { slot: 1, name: "Confusione", level: "1 o 3", cd: "5.50s", tags: ["Proiettile"], desc: "Spara raggi psichici verso il nemico, infliggendo danni speciali." },
      { slot: 2, name: "Teletrasporto", level: "1 o 3", cd: "10.00s", tags: ["Scatto"], desc: "Si teletrasporta in una posizione vicina, schivando gli attacchi." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Psicoshock", level: 4, cd: "7.00s", tags: ["Area", "CC"], desc: "Crea un campo psichico nell'area designata che infligge danni e rallenta i nemici. Lv.11: Area aumentata." },
        { name: "Divinazione", level: 4, cd: "9.00s", tags: ["Area", "Sonno"], desc: "Lancia una luna onirica che addormenta i nemici nell'area colpita. Lv.11: Durata sonno aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Psichico", level: 6, cd: "8.00s", tags: ["Proiettile"], desc: "Lancia una sfera di energia lunare che infligge danni elevati al primo nemico colpito. Lv.13: Danno aumentato." },
        { name: "Forzalunare", level: 6, cd: "7.00s", tags: ["Previsione", "Area"], desc: "Predice il futuro e crea un'esplosione psichica ritardata nella posizione designata. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Vuoto Fatato", level: 9, desc: "Gardevoir libera tutta la sua energia psichica, infliggendo danni enormi ai nemici vicini e respingendoli." },
    builds: [
      { name: "Build: Psichico Totale", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Confusione" }, { lv: 3, name: "Teletrasporto" }, { lv: 4, name: "Psicoshock" }, { lv: 6, name: "Psichico" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Luna Addormentante", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Confusione" }, { lv: 3, name: "Teletrasporto" }, { lv: 4, name: "Divinazione" }, { lv: 6, name: "Forzalunare" }],
        held: ["Lente Astuta", "Lente Scelta", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Alto danno speciale nel late game, buon CC con sonno e rallentamenti, eccellente in teamfight", weaknesses: "Molto fragile, lenta nella fase iniziale, dipende dal raggiungere alti livelli" },
  },

  658: { // Greninja
    stats: { ps: 5420, atk: 500, def: 250, atksp: 119, defsp: 149, crit: "30%", cd: "0%", life: "15%" },
    passive: { name: "Torrent", desc: "Quando i PS di Greninja scendono sotto il 50%, la velocità di movimento e i danni delle mosse Acqua aumentano. Greninja può vedere i nemici nascosti vicini." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e riducendo brevemente la difesa del nemico.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "165% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Bolla", level: "1 o 3", cd: "5.00s", tags: ["Proiettile"], desc: "Lancia una bolla d'acqua che infligge danni al primo nemico colpito." },
      { slot: 2, name: "Sostituto", level: "1 o 3", cd: "7.00s", tags: ["Scatto"], desc: "Scatta verso il nemico e lo colpisce due volte con artigli veloci." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Doppioteam", level: 4, cd: "6.00s", tags: ["Proiettile", "Multiplo"], desc: "Lancia più shuriken d'acqua verso il nemico designato, infliggendo danni multipli. Lv.11: Numero di shuriken aumentato." },
        { name: "Muro di Fumo", level: 4, cd: "8.00s", tags: ["Scatto", "Critico"], desc: "Scatta verso il nemico e lo colpisce con un taglio d'acqua ad alta probabilità di critico. Lv.11: Danno critico aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Acquashuriken", level: 6, cd: "9.00s", tags: ["Area", "Rallentamento"], desc: "Crea uno schizzone di fango che rallenta i nemici nell'area. Lv.13: Area aumentata." },
        { name: "Surf", level: 6, cd: "7.00s", tags: ["Scatto", "Schivata"], desc: "Crea un sostituto e scatta nella direzione designata, evitando i danni per breve tempo. Lv.13: Distanza aumentata." },
      ]},
    ],
    unite: { name: "Acquashuriken Gigante", level: 9, desc: "Greninja scatena un'ondata di shuriken d'acqua in rapida successione sull'area circostante, infliggendo danni massicci." },
    builds: [
      { name: "Build: Shuriken Ninja", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Bolla" }, { lv: 3, name: "Sostituto" }, { lv: 4, name: "Doppioteam" }, { lv: 6, name: "Acquashuriken" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Critico Aqua", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Bolla" }, { lv: 3, name: "Sostituto" }, { lv: 4, name: "Muro di Fumo" }, { lv: 6, name: "Surf" }],
        held: ["Lente Guida", "Muscolbanda", "Pietra Levitante"], battle: "Pulsantefuga",
        note: "Aquataglio con Lente Guida offre burst elevatissimo." },
    ],
    meta: { tier: "S", lane: "Jungla / Corsia Inferiore", strengths: "Altissimo DPS, eccellente mobilità, ottimo per eliminare bersagli singoli, forte nei duelli 1v1", weaknesses: "Molto fragile, richiede meccaniche avanzate, dipende dal early game" },
  },

  845: { // Cramorant
    stats: { ps: 6301, atk: 286, def: 300, atksp: 739, defsp: 200, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Ingordigia", desc: "Dopo aver usato Surfata o Tuffo, Cramorant inghiotte una preda. Se viene colpito, la sputa contro i nemici infliggendo danni extra." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati e stordendo brevemente il nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 10 x (Livello - 1) + 170" },
    moves: [
      { slot: 1, name: "Mulinello", level: "1 o 3", cd: "6.50s", tags: ["Proiettile"], desc: "Emette un'onda sonora verso i nemici, infliggendo danni e riducendo la velocità." },
      { slot: 2, name: "Danzadipiume", level: "1 o 3", cd: "8.00s", tags: ["Scatto"], desc: "Si tuffa in un'onda e si lancia verso i nemici, infliggendo danni." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Tifone", level: 4, cd: "7.00s", tags: ["Area", "CC"], desc: "Crea una tempesta sonora che stordisce i nemici nell'area e infligge danni. Lv.11: Durata stordimento aumentata." },
        { name: "Eaerassalto", level: 4, cd: "9.00s", tags: ["Proiettile", "CC"], desc: "Inghiotte l'avversario e lo sputa via, infliggendo danni e respingendolo. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Surf", level: 6, cd: "10.00s", tags: ["Scatto", "Area"], desc: "Cramorant cavalca un'onda e travolge i nemici sul percorso. Lv.13: Velocità e danni aumentati." },
        { name: "Sub", level: 6, cd: "8.00s", tags: ["Proiettile", "Area"], desc: "Si tuffa dall'alto e atterra su un'area ampia, infliggendo danni ad area. Lv.13: Area aumentata." },
      ]},
    ],
    unite: { name: "Raffica di Inghiottitutto", level: 9, desc: "Cramorant si tuffa ripetutamente sull'area nemica, sputando prede e infliggendo danni a più nemici." },
    builds: [
      { name: "Build: Stordimento Aurale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Mulinello" }, { lv: 3, name: "Danzadipiume" }, { lv: 4, name: "Tifone" }, { lv: 6, name: "Surf" }],
        held: ["Lente Astuta", "Lente Scelta", "Campanello Conchiglia"], battle: "Raggeloluce" },
      { name: "Build: Danni ad Area", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Mulinello" }, { lv: 3, name: "Danzadipiume" }, { lv: 4, name: "Eaerassalto" }, { lv: 6, name: "Sub" }],
        held: ["Lente Astuta", "Amplienergia", "Campanello Conchiglia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "C", lane: "Corsia Superiore", strengths: "Passiva unica con meccanica preda, CC con stordimento, funziona bene in combinazione con alleati", weaknesses: "Molto fragile, meccaniche complesse, basso impatto meta rispetto ad altri Attaccanti" },
  },

  700: { // Sylveon
    stats: { ps: 7350, atk: 363, def: 260, atksp: 720, defsp: 240, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Adorazione", desc: "Quando Sylveon si lega a un alleato, condivide una parte dei danni subiti e cura periodicamente l'alleato a cui è legata." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fata aumentati e curando una piccola quantità di HP propri.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 160" },
    moves: [
      { slot: 1, name: "Cometapugno", level: "1 o 3", cd: "6.00s", tags: ["Area", "CC"], desc: "Emette un'esplosione di energia fata che infligge danni e rallenta i nemici vicini." },
      { slot: 2, name: "Occhioni Teneri", level: "1 o 3", cd: "8.00s", tags: ["Riduzione Difesa"], desc: "Usa il suo fascino per ridurre le statistiche dei nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Magifuoco", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Emette un canto ipnotico che stordisce i nemici nell'area. Lv.11: Area e durata aumentate." },
        { name: "Granvoce", level: 4, cd: "6.00s", tags: ["Proiettile", "Area"], desc: "Lancia stelle di energia che inseguono i nemici e infliggendo danni multipli. Lv.11: Numero di stelle aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Assorbabacio", level: 6, cd: "10.00s", tags: ["Proiettile", "CC"], desc: "Spara raggi di energia fata verso i nemici, riducendo le loro statistiche. Lv.13: Durata riduzione aumentata." },
        { name: "Calmamente", level: 6, cd: "8.00s", tags: ["Proiettile", "Danno"], desc: "Lancia una sfera di energia lunare verso il nemico designato. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Danza Fatata", level: 9, desc: "Sylveon scatena un'onda di energia fata che infligge danni massicci ai nemici e cura gli alleati nell'area." },
    builds: [
      { name: "Build: Ipnosi Fata", path: "Percorso Danni/Controllo", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Occhioni Teneri" }, { lv: 4, name: "Magifuoco" }, { lv: 6, name: "Assorbabacio" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Stelle Inseguitrici", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Occhioni Teneri" }, { lv: 4, name: "Granvoce" }, { lv: 6, name: "Calmamente" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Danno speciale solido, CC con ipnosi, ibrido attaccante/supporto utile in team", weaknesses: "Passiva richiede un alleato vicino, fragile senza scudo, meno impatto in late game" },
  },

  724: { // Decidueye
    stats: { ps: 6000, atk: 450, def: 270, atksp: 150, defsp: 330, crit: "30%", cd: "0%", life: "25%" },
    passive: { name: "Lungo Raggio", desc: "Gli attacchi di Decidueye hanno una gittata superiore alla norma. Il danno aumenta in base alla distanza dal bersaglio." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e riducendo la velocità del nemico.", dmgBase: "100% Atk + 5 x (Livello - 1) + 0", dmgBoost: "170% Atk + 14 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fogliame", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia foglie affilate che inseguono il nemico designato." },
      { slot: 2, name: "Sbigottimento", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "CC"], desc: "Spara una freccia spettrale che attraversa i nemici infliggendo danni." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fogliamagica", level: 4, cd: "5.00s", tags: ["Proiettile", "Piazzamento"], desc: "Punta il bersaglio e spara una freccia velocissima ad alta distanza. Lv.11: Danni aumentati." },
        { name: "Cucitura d'Ombra", level: 4, cd: "8.00s", tags: ["Scatto"], desc: "Si teletrasporta dietro al nemico designato e lo colpisce con un attacco. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Fogliatempesta", level: 6, cd: "7.00s", tags: ["Proiettile", "Critico"], desc: "Carica e spara una freccia spettrale potenziata con alta probabilità di critico. Lv.13: Danno critico aumentato." },
        { name: "Furtivombra", level: 6, cd: "9.00s", tags: ["Area", "Rallentamento"], desc: "Spara frecce in un arco ampio che rallentano tutti i nemici colpiti. Lv.13: Area aumentata." },
      ]},
    ],
    unite: { name: "Raffica di Frecce", level: 9, desc: "Decidueye scatta a velocità fulminea attraverso il campo, sparando frecce spettrali a tutti i nemici sul percorso." },
    builds: [
      { name: "Build: Cecchino Ombra", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fogliame" }, { lv: 3, name: "Sbigottimento" }, { lv: 4, name: "Fogliamagica" }, { lv: 6, name: "Fogliatempesta" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Area Frecce", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fogliame" }, { lv: 3, name: "Sbigottimento" }, { lv: 4, name: "Cucitura d'Ombra" }, { lv: 6, name: "Furtivombra" }],
        held: ["Lente Guida", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Ottima gittata, danni fisici elevati dalla distanza, buon burst con critico", weaknesses: "Difficile da manovrare in teamfight ravvicinati, fragile, richiede buon posizionamento" },
  },

  471: { // Glaceon
    stats: { ps: 6700, atk: 116, def: 275, atksp: 880, defsp: 230, crit: "20%", cd: "10%", life: "0%" },
    passive: { name: "Freddo Pungente", desc: "Ogni mossa di Glaceon crea un campo di ghiaccio nell'area colpita. I nemici che si trovano nel campo di ghiaccio subiscono danni ridotti ma rallentati." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni di ghiaccio aumentati e rallentando il nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 11 x (Livello - 1) + 175" },
    moves: [
      { slot: 1, name: "Cometapugno", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Rallentamento"], desc: "Emette aria fredda che infligge danni e rallenta i nemici sul percorso." },
      { slot: 2, name: "Ventogelo", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia punte di ghiaccio verso il nemico designato." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Gelolancia", level: 4, cd: "8.00s", tags: ["Area", "Congelamento"], desc: "Scatena una tempesta di neve nell'area designata che congela i nemici. Lv.11: Area e durata aumentate." },
        { name: "Ventogelo", level: 4, cd: "6.00s", tags: ["Proiettile", "Congelamento"], desc: "Spara un raggio di ghiaccio che congela il bersaglio. Lv.11: Danno e durata congelamento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Gelo-scheggia", level: 6, cd: "7.00s", tags: ["Area", "Critico"], desc: "Crea lame di ghiaccio rotanti intorno a sé con alta probabilità di critico. Lv.13: Numero di lame aumentato." },
        { name: "Liofilizzazione", level: 6, cd: "9.00s", tags: ["Area"], desc: "Crea una zona di grandine che infligge danni continui ai nemici nell'area. Lv.13: Durata e danni aumentati." },
      ]},
    ],
    unite: { name: "Palcoscenico Glaciale", level: 9, desc: "Glaceon congela il terreno circostante e lancia una raffica di cristalli di ghiaccio, infliggendo enormi danni ad area." },
    builds: [
      { name: "Build: Bufera Glaciale", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Ventogelo" }, { lv: 4, name: "Gelolancia" }, { lv: 6, name: "Gelo-scheggia" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Raggeloluce" },
      { name: "Build: Critico Ghiaccio", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Ventogelo" }, { lv: 4, name: "Ventogelo" }, { lv: 6, name: "Liofilizzazione" }],
        held: ["Lente Astuta", "Lente Scelta", "Campanello Conchiglia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Eccellente controllo del campo con ghiaccio, ottimo danno da fermo, forte in difesa della base", weaknesses: "Nessuna mobilità, completamente immobile durante alcune mosse, vulnerabile ai Velocisti" },
  },

  196: { // Espeon
    stats: { ps: 6700, atk: 289, def: 275, atksp: 999, defsp: 230, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Sincronizzazione", desc: "Quando Espeon subisce un'alterazione di stato, la trasmette al nemico che l'ha causata. Inoltre, il danno delle mosse psichiche aumenta del 10% per ogni nemico nelle vicinanze." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni psichici aumentati e aumentando brevemente la velocità di movimento.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "40% AttSp + 11 x (Livello - 1) + 185" },
    moves: [
      { slot: 1, name: "Cometapugno", level: "1 o 3", cd: "5.50s", tags: ["Proiettile"], desc: "Lancia raggi psichici verso il nemico, infliggendo danni speciali." },
      { slot: 2, name: "Rugito", level: "1 o 3", cd: "7.00s", tags: ["Area", "CC"], desc: "Emette onde psichiche intorno a sé che rallentano i nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Psicoshock", level: 4, cd: "7.00s", tags: ["Area", "Rallentamento"], desc: "Crea una zona psichica che infligge danni e rallenta i nemici. Lv.11: Area aumentata." },
        { name: "Veicolaforza", level: 4, cd: "9.00s", tags: ["Cura", "Potenziamento"], desc: "Cura gli HP propri e aumenta l'Att. Speciale per un breve periodo. Lv.11: Recupero e bonus aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Psicoraggio", level: 6, cd: "7.50s", tags: ["Area", "CC"], desc: "Emette onde psichiche più potenti che stordiscono i nemici vicini. Lv.13: Durata stordimento aumentata." },
        { name: "Divinazione", level: 6, cd: "7.00s", tags: ["Previsione", "Danno"], desc: "Marca il bersaglio: dopo alcuni secondi, esplode per danni elevati. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Psicosole", level: 9, desc: "Espeon scatena un'enorme scarica psichica dall'alto che infligge danni enormi a tutti i nemici nell'area." },
    builds: [
      { name: "Build: Burst Psichico", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Rugito" }, { lv: 4, name: "Psicoshock" }, { lv: 6, name: "Psicoraggio" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Recupero Psichico", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Rugito" }, { lv: 4, name: "Veicolaforza" }, { lv: 6, name: "Divinazione" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Danno speciale burst, sincronizzazione utile, buona gittata con Futurovisione", weaknesses: "Fragile, ottimale solo con bersagli mirati, meno versatile di altri Attaccanti speciali" },
  },

  655: { // Delphox
    stats: { ps: 6290, atk: 292, def: 175, atksp: 950, defsp: 225, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Fiamma Viva", desc: "Quando i PS scendono sotto il 50%, la potenza delle mosse di fuoco aumenta del 25% e Delphox riceve un bonus di velocità di movimento." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni di fuoco aumentati e causando bruciatura al nemico per 2s.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "37% AttSp + 11 x (Livello - 1) + 170" },
    moves: [
      { slot: 1, name: "Braciere", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia una piccola brace verso il nemico che brucia leggermente." },
      { slot: 2, name: "Fuocofatuo", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "Bruciatura"], desc: "Lancia pallottole di fuoco fatuo che bruciano e rallentano i nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fuocobomba", level: 4, cd: "7.00s", tags: ["Proiettile", "Bruciatura"], desc: "Spara un getto continuo di fiamme in una direzione, bruciando i nemici sul percorso. Lv.11: Danni aumentati." },
        { name: "Magifuoco", level: 4, cd: "9.00s", tags: ["Area", "CC"], desc: "Crea un pilastro di fuoco mistico che brucia e blocca i nemici nell'area. Lv.11: Durata CC aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Turbofuoco", level: 6, cd: "10.00s", tags: ["Area", "Bruciatura"], desc: "Crea un anello di fuoco intorno a sé che brucia i nemici che lo attraversano. Lv.13: Dimensione e danni aumentati." },
        { name: "Nitrocarica", level: 6, cd: "8.00s", tags: ["Proiettile", "Danno"], desc: "Lancia una sfera di fuoco concentrata che esplode al contatto infliggendo danni elevati. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Fuochi d'Artificio Fatati", level: 9, desc: "Delphox apre un portale mistico di fuoco che brucia e intrappola i nemici nell'area, infliggendo enormi danni nel tempo." },
    builds: [
      { name: "Build: Fiamma Continua", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Fuocofatuo" }, { lv: 4, name: "Fuocobomba" }, { lv: 6, name: "Turbofuoco" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Mistica Bruciante", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Fuocofatuo" }, { lv: 4, name: "Magifuoco" }, { lv: 6, name: "Nitrocarica" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Buon danno da fuoco nel tempo, discreto CC, facile da usare per i principianti", weaknesses: "Danni complessivi inferiori ad altri Attaccanti speciali, mobilità scarsa, poco impatto nel late game" },
  },

  884: { // Duraludon
    stats: { ps: 5397, atk: 500, def: 301, atksp: 119, defsp: 200, crit: "20%", cd: "0%", life: "25%" },
    passive: { name: "Corpo Metallico", desc: "Duraludon riduce permanentemente il 15% dei danni subiti grazie al suo corpo metallico. Ogni mossa aumenta anche la sua resistenza per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e riducendo la difesa del nemico brevemente.", dmgBase: "100% Atk + 5 x (Livello - 1) + 0", dmgBoost: "162% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Alidifesa", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Spara un proiettile di energia drago che paralizza brevemente il nemico colpito." },
      { slot: 2, name: "Spaccaroccia", level: "1 o 3", cd: "8.00s", tags: ["Scatto", "CC"], desc: "Scatta verso i nemici e li colpisce con la testa metallica, stordendoli brevemente." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Cannone Flash", level: 4, cd: "7.50s", tags: ["Proiettile", "Area"], desc: "Spara un potente raggio drago che colpisce in linea retta. Lv.11: Danni e raggio aumentati." },
        { name: "Dragopulsar", level: 4, cd: "9.00s", tags: ["Proiettile", "Danno"], desc: "Carica e lancia una meteora metallica sul nemico con danni enormi. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Levitoroccia", level: 6, cd: "10.00s", tags: ["Scudo", "Potenziamento"], desc: "Attiva uno scudo metallico che assorbe i danni in arrivo per alcuni secondi. Lv.13: Durata e resistenza aumentate." },
        { name: "Codadrago", level: 6, cd: "8.00s", tags: ["Scatto", "CC"], desc: "Scatta e imprigiona il nemico con la struttura metallica, bloccandolo brevemente. Lv.13: Durata blocco aumentata." },
      ]},
    ],
    unite: { name: "Rovina Rotante", level: 9, desc: "Duraludon si gigantizza e spara un cannone di energia drago devastante che infligge danni enormi a tutto ciò che tocca." },
    builds: [
      { name: "Build: Raggio Drago", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Alidifesa" }, { lv: 3, name: "Spaccaroccia" }, { lv: 4, name: "Cannone Flash" }, { lv: 6, name: "Levitoroccia" }],
        held: ["Muscolbanda", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
      { name: "Build: Tank Metallico", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Alidifesa" }, { lv: 3, name: "Spaccaroccia" }, { lv: 4, name: "Dragopulsar" }, { lv: 6, name: "Codadrago" }],
        held: ["Elmo Pietroso", "Fisico di Ferro", "Amplienergia"], battle: "Barriera X" },
    ],
    meta: { tier: "C", lane: "Corsia Superiore", strengths: "Molto resistente per un Attaccante, buon danno fisico, passiva utile in difesa", weaknesses: "Danno complessivo basso rispetto al tier, lento, poco impatto nel meta attuale" },
  },

  887: { // Dragapult
    stats: { ps: 6000, atk: 500, def: 240, atksp: 114, defsp: 160, crit: "25%", cd: "0%", life: "15%" },
    passive: { name: "Infiltratore", desc: "Le mosse di Dragapult ignorano gli scudi degli avversari. Infligge danni bonus agli avversari che usano barriere o scudi." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e attraversando i nemici per colpirne più di uno.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "172% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Sbigottimento", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Spara un proiettile di energia drago che rallenta il nemico colpito." },
      { slot: 2, name: "Attacco Rapido", level: "1 o 3", cd: "7.00s", tags: ["Proiettile"], desc: "Lancia un'onda di energia oscura verso i nemici, infliggendo danni." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Dragospiro", level: 4, cd: "6.00s", tags: ["Proiettile", "Ignora Scudo"], desc: "Spara una sfera fantasma ad alta velocità che ignora gli scudi. Lv.11: Danni aumentati." },
        { name: "Palla Ombra", level: 4, cd: "8.00s", tags: ["Area", "Danno"], desc: "Evoca meteore drago che piovono sull'area designata. Lv.11: Numero di meteore aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Dragodanza", level: 6, cd: "7.00s", tags: ["Scatto", "Proiettile"], desc: "Lancia Dreepy verso i nemici come proiettili viventi, poi si teletrasporta. Lv.13: Danni aumentati." },
        { name: "Spettrotuffo", level: 6, cd: "9.00s", tags: ["Scatto", "CC"], desc: "Scatta verso il nemico e lo colpisce con artigli di drago, respingendolo. Lv.13: Distanza respinta aumentata." },
      ]},
    ],
    unite: { name: "Raffica di Dreepy", level: 9, desc: "Dragapult scatena un'ondata di Dreepy fantasma in tutte le direzioni, infliggendo danni enormi a tutti i nemici nell'area." },
    builds: [
      { name: "Build: Palla Fantasma Burst", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Attacco Rapido" }, { lv: 4, name: "Dragospiro" }, { lv: 6, name: "Dragodanza" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Meteora Drago", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Attacco Rapido" }, { lv: 4, name: "Palla Ombra" }, { lv: 6, name: "Spettrotuffo" }],
        held: ["Lente Guida", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "S", lane: "Jungla", strengths: "Burst fisico elevatissimo, passiva rompe scudi, eccellente contro Difensori e Supporti con barriere", weaknesses: "Molto fragile, richiede meccaniche avanzate, dipende dall'iniziare gli scontri nel momento giusto" },
  },

  151: { // Mew
    stats: { ps: 6500, atk: 300, def: 230, atksp: 900, defsp: 180, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Nuovo Specie", desc: "Mew può imparare mosse di qualsiasi tipo. Ogni mossa ha un bonus extra in base al tipo usato. Può anche cambiare combo di mosse in base alla situazione." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni aumentati basati sul tipo della mossa più recente usata.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 12 x (Livello - 1) + 160" },
    moves: [
      { slot: 1, name: "Botta", level: "1 o 3", cd: "5.50s", tags: ["Proiettile", "Rallentamento"], desc: "Lancia bolle d'acqua verso i nemici che li rallentano." },
      { slot: 2, name: "Agilità", level: "1 o 3", cd: "7.00s", tags: ["Proiettile"], desc: "Colpisce con una frusta di energia, infliggendo danni fisici." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Energisfera", level: 4, cd: "7.00s", tags: ["Area", "Danni"], desc: "Mew cavalca un'onda cosmica che investe i nemici. Lv.11: Danni aumentati." },
        { name: "Solarraggio", level: 4, cd: "8.00s", tags: ["Carica", "Proiettile"], desc: "Carica un raggio solare e lo spara in una linea retta. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Surf", level: 6, cd: "7.00s", tags: ["Proiettile", "Riduzione"], desc: "Lancia una sfera di energia oscura che riduce l'Att. Speciale del nemico. Lv.13: Riduzione aumentata." },
        { name: "Aiuto", level: 6, cd: "9.00s", tags: ["Area", "CC"], desc: "Emette un'onda psichica che respinge e rallenta i nemici nell'area. Lv.13: Area e forza aumentate." },
      ]},
    ],
    unite: { name: "Miraggio Mistico", level: 9, desc: "Mew cavalca un'onda di energia cosmica che abbatte i nemici e cura gli alleati sul percorso." },
    builds: [
      { name: "Build: Versatile Cosmico", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Agilità" }, { lv: 4, name: "Energisfera" }, { lv: 6, name: "Surf" }],
        held: ["Lente Astuta", "Amplienergia", "Campanello Conchiglia"], battle: "Pulsantefuga" },
      { name: "Build: Raggio Solare", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Agilità" }, { lv: 4, name: "Solarraggio" }, { lv: 6, name: "Aiuto" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla / Flessibile", strengths: "Versatilità unica, può adattarsi a molte situazioni, buona mobilità", weaknesses: "Richiede molta esperienza per sfruttarlo al massimo, danni medi rispetto agli Attaccanti puri" },
  },

  609: { // Chandelure
    stats: { ps: 6300, atk: 295, def: 200, atksp: 1005, defsp: 203, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Corpo Fiamma", desc: "Quando Chandelure subisce danni da attacchi fisici ravvicinati, ha una possibilità di bruciare l'attaccante per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni di fuoco e fantasma aumentati con effetto bruciatura.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "42% AttSp + 13 x (Livello - 1) + 190" },
    moves: [
      { slot: 1, name: "Braciere", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Bruciatura"], desc: "Lancia un nugolo di braci verso i nemici, infliggendo danni di fuoco." },
      { slot: 2, name: "Ombronotturna", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "Bruciatura"], desc: "Lancia pallottole di fuoco fatuo che bruciano i nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Lanciafiamme", level: 4, cd: "8.00s", tags: ["CC", "Area"], desc: "Intrappola i nemici con anime ardenti, bloccandoli nell'area. Lv.11: Numero di anime e danno aumentati." },
        { name: "Vampata", level: 4, cd: "7.00s", tags: ["Area", "Bruciatura"], desc: "Crea un pilastro di fuoco sacro che brucia i nemici nell'area. Lv.11: Area e danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Poltergeist", level: 6, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia una sfera di energia oscura ad alta velocità. Lv.13: Danni aumentati." },
        { name: "Prigione", level: 6, cd: "9.00s", tags: ["Area", "Riduzione"], desc: "Emette un'onda di energia oscura che riduce l'Att. Speciale dei nemici. Lv.13: Area e riduzione aumentate." },
      ]},
    ],
    unite: { name: "Fuoco di Sbarramento", level: 9, desc: "Chandelure evoca spiriti infuocati che circolano nell'area e si lanciano su tutti i nemici, infliggendo danni enormi." },
    builds: [
      { name: "Build: Trappola di Fuoco", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Ombronotturna" }, { lv: 4, name: "Lanciafiamme" }, { lv: 6, name: "Poltergeist" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Raggeloluce" },
      { name: "Build: Fuoco Sacro", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Ombronotturna" }, { lv: 4, name: "Vampata" }, { lv: 6, name: "Prigione" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Alto burst speciale, ottimo CC con Voltrappollo, combo devastante su bersagli fermi", weaknesses: "Richiede di bloccare i nemici per massimizzare il danno, fragile, bassa mobilità" },
  },

  818: { // Inteleon
    stats: { ps: 6550, atk: 115, def: 260, atksp: 900, defsp: 260, crit: "10%", cd: "10%", life: "0%" },
    passive: { name: "Furtivo", desc: "Inteleon ottiene un bonus ai danni quando attacca da lontano. Il danno aumenta in base alla distanza dal bersaglio. Può vedere i nemici nascosti." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati con alta probabilità di infliggere bruciatura da ghiaccio.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 165" },
    moves: [
      { slot: 1, name: "Pistolacqua", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia una bolla d'acqua precisa verso il bersaglio." },
      { slot: 2, name: "Occhioni Teneri", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Rallentamento"], desc: "Schizza acqua verso i nemici, infliggendo danni e rallentandoli." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Pungiglione", level: 4, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Spara un potente raggio d'acqua che attraversa i nemici sul percorso. Lv.11: Danno aumentato." },
        { name: "Acrobazia", level: 4, cd: "5.50s", tags: ["Proiettile", "Critico"], desc: "Mira con precisione e spara un colpo ad alta probabilità di critico. Lv.11: Danno critico aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Idroliquidazione", level: 6, cd: "6.50s", tags: ["Proiettile", "Congelamento"], desc: "Spara un raggio di ghiaccio che congela il primo nemico colpito. Lv.13: Durata congelamento aumentata." },
        { name: "Tiromirato", level: 6, cd: "9.00s", tags: ["Trappola", "Congelamento"], desc: "Posiziona trappole di ghiaccio invisibili che congelano i nemici che le calpestano. Lv.13: Numero trappole aumentato." },
      ]},
    ],
    unite: { name: "Spia Azzurra", level: 9, desc: "Inteleon si posiziona su un punto elevato e bombarda l'area con potenti proiettili d'acqua in rapida successione." },
    builds: [
      { name: "Build: Cecchino Ghiaccio", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Occhioni Teneri" }, { lv: 4, name: "Pungiglione" }, { lv: 6, name: "Idroliquidazione" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Idropulsar", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Occhioni Teneri" }, { lv: 4, name: "Acrobazia" }, { lv: 6, name: "Tiromirato" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Ottima gittata da cecchino, danno aumentato dalla distanza, trappole utili in zona obiettivo", weaknesses: "Richiede molto posizionamento, fragile a corto raggio, dipende dalla distanza dal bersaglio" },
  },

  1008: { // Miraidon
    stats: { ps: 7300, atk: 330, def: 320, atksp: 1000, defsp: 280, crit: "0%", cd: "20%", life: "0%" },
    passive: { name: "Motore Elettrico", desc: "Miraidon genera un campo elettrico intorno a sé. I nemici nel campo subiscono danni ridotti ma rallentati. Ogni attacco potenziato ricarica le mosse più velocemente." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni elettrici speciali enormi e paralizzando brevemente il nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "45% AttSp + 14 x (Livello - 1) + 210" },
    moves: [
      { slot: 1, name: "Tuonoshock", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con velocità elettrica, stordendolo." },
      { slot: 2, name: "Raggioscossa", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Lancia un fulmine verso il nemico, paralizzandolo brevemente." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Saetta Fulminante", level: 4, cd: "7.50s", tags: ["Area", "CC"], desc: "Crea una sfera elettrica espandibile che stordisce i nemici nell'area. Lv.11: Area e durata aumentate." },
        { name: "Tuono", level: 4, cd: "9.00s", tags: ["Area", "Danno"], desc: "Genera un vortice elettrico che aspira e danneggia i nemici vicini. Lv.13: Danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Carica Parabolica", level: 6, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Scaglia un fulgore di energia drago/elettrica che attraversa più nemici. Lv.13: Danno aumentato." },
        { name: "Manovra Derapata", level: 6, cd: "8.00s", tags: ["Area", "CC"], desc: "Emette un'onda di energia drago che respinge e rallenta i nemici. Lv.13: Area e forza aumentate." },
      ]},
    ],
    unite: { name: "Futuro Splendente", level: 9, desc: "Miraidon scatena il suo motore al massimo, creando un campo elettrico devastante che paralizza tutti i nemici nell'area e infligge danni enormi." },
    builds: [
      { name: "Build: Elettro Dominio", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Raggioscossa" }, { lv: 4, name: "Saetta Fulminante" }, { lv: 6, name: "Carica Parabolica" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Controllo Elettrico", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Raggioscossa" }, { lv: 4, name: "Tuono" }, { lv: 6, name: "Manovra Derapata" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore / Jungla", strengths: "Danni speciali elevatissimi, eccellente CC, forte sia in early che late game, ottimo in teamfight", weaknesses: "Richiede buona conoscenza del gioco, fragile senza supporto, dipende dai tempi giusti delle mosse" },
  },

  // ──────────────────────────────────────────────
  // VELOCISTI
  // ──────────────────────────────────────────────

  663: { // Talonflame
    stats: { ps: 6400, atk: 710, def: 320, atksp: 117, defsp: 215, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Fiamma Viva", desc: "Quando Talonflame usa una mossa, aumenta temporaneamente la sua velocità di movimento. Le mosse di fuoco infliggono danni bonus ai nemici con meno del 50% di HP." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni di fuoco aumentati e lasciando una scia di fiamme.", dmgBase: "100% Atk + 5 x (Livello - 1) + 0", dmgBoost: "168% Atk + 15 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Beccata", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia braci verso il nemico, infliggendo danni di fuoco." },
      { slot: 2, name: "Acrobazia", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Spara lame d'aria che rallentano i nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Nitrocarica", level: 4, cd: "7.00s", tags: ["Scatto", "Area", "Bruciatura"], desc: "Si lancia a terra bruciando tutti i nemici nell'area d'atterraggio. Lv.11: Area e danni aumentati." },
        { name: "Aereassalto", level: 4, cd: "9.00s", tags: ["Scatto", "Invincibilità"], desc: "Vola verso il bersaglio, diventando invincibile durante il tragitto. Lv.11: Distanza aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Volo", level: 6, cd: "8.00s", tags: ["Scatto", "Area"], desc: "Ruota a velocità folle creando un vortice di fiamme intorno a sé. Lv.13: Danni e durata aumentati." },
        { name: "Baldavace", level: 6, cd: "6.00s", tags: ["Proiettile", "Bruciatura"], desc: "Spara un potente getto di fiamme verso i nemici. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Fiammivoro", level: 9, desc: "Talonflame si lancia a velocità supersonica tracciando un percorso di fuoco, infliggendo danni enormi a tutti i nemici sul tragitto." },
    builds: [
      { name: "Build: Fuoco Veloce", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Acrobazia" }, { lv: 4, name: "Nitrocarica" }, { lv: 6, name: "Volo" }],
        held: ["Lente Guida", "Muscolbanda", "Pietra Levitante"], battle: "Pulsantefuga" },
      { name: "Build: Volo Invincibile", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Acrobazia" }, { lv: 4, name: "Aereassalto" }, { lv: 6, name: "Baldavace" }],
        held: ["Muscolbanda", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Ottima mobilità, burst su bersagli a bassa vita, facile da usare, ottimo per inseguire i nemici", weaknesses: "Danni nella media per un Velocista, dipende dalla passiva per massimizzare i danni" },
  },

  359: { // Absol
    stats: { ps: 6200, atk: 670, def: 300, atksp: 118, defsp: 200, crit: "10%", cd: "20%", life: "10%" },
    passive: { name: "Super Fortuna", desc: "La probabilità di colpo critico di Absol è permanentemente aumentata. Ogni attacco critico riduce il tempo di ricarica delle mosse di 0.5s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici critici enormi e riducendo la velocità del nemico.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "180% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fintoattacco", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Critico"], desc: "Scatta verso il nemico e lo colpisce con la lama sulla fronte con alta probabilità di critico." },
      { slot: 2, name: "Lacerazione", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "CC"], desc: "Lancia un'onda di oscurità che rallenta i nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Nottesferza", level: 4, cd: "5.50s", tags: ["Scatto", "Critico"], desc: "Scatta velocemente verso il bersaglio con una lama di sabbia oscura, inflando danni critici. Lv.11: Danno critico aumentato." },
        { name: "Inseguimento", level: 4, cd: "7.00s", tags: ["Scatto", "Rallentamento"], desc: "Insegue il nemico designato infliggendo danni e impedendogli di fuggire. Lv.11: Distanza aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Psicotaglio", level: 6, cd: "8.00s", tags: ["Scatto", "Critico"], desc: "Si teletrasporta dietro al nemico e lo colpisce con un potente fendente. Lv.13: Danno critico aumentato." },
        { name: "Sbigoattacco", level: 6, cd: "10.00s", tags: ["Scudo", "Contrattacco"], desc: "Si prepara a contrattaccare: se colpito durante questa fase, risponde con un attacco potentissimo. Lv.13: Danno contrattacco aumentato." },
      ]},
    ],
    unite: { name: "Squarcio Notturno", level: 9, desc: "Absol scatta attraverso il campo con velocità devastante, colpendo tutti i nemici con fendenti critici." },
    builds: [
      { name: "Build: Critico Oscuro", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fintoattacco" }, { lv: 3, name: "Lacerazione" }, { lv: 4, name: "Nottesferza" }, { lv: 6, name: "Psicotaglio" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Contrattacco", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Fintoattacco" }, { lv: 3, name: "Lacerazione" }, { lv: 4, name: "Inseguimento" }, { lv: 6, name: "Sbigoattacco" }],
        held: ["Lente Guida", "Pietra Levitante", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "B", lane: "Jungla", strengths: "Altissimo danno critico, passiva riduce i cooldown, eccellente in duelli 1v1 con bersagli isolati", weaknesses: "Molto fragile, richiede meccaniche precise, difficile da usare nel chaos dei teamfight" },
  },

  94: { // Gengar
    stats: { ps: 7200, atk: 115, def: 320, atksp: 690, defsp: 210, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Divorasogni", desc: "Gengar ruba una piccola percentuale di HP ai nemici nelle vicinanze ogni secondo. Quando un nemico è addormentato, il furto di HP è triplicato." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali e rubando HP al nemico colpito.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "40% AttSp + 12 x (Livello - 1) + 180" },
    moves: [
      { slot: 1, name: "Fuocofatuo", level: "1 o 3", cd: "9.00s", tags: ["CC", "Sonno"], desc: "Emette un'onda ipnotica che addormenta i nemici nelle vicinanze." },
      { slot: 2, name: "Leccata", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Lancia una sfera di oscurità che rallenta il nemico colpito." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Palla Ombra", level: 4, cd: "6.50s", tags: ["Scatto", "Danno"], desc: "Attraversa il nemico con un taglio psichico devastante. Lv.11: Danni aumentati." },
        { name: "Fangobomba", level: 4, cd: "9.00s", tags: ["Area", "Sonno"], desc: "Addormenta tutti i nemici in un'area ampia. Lv.11: Area e durata aumentate." },
      ]},
      { slot: 2, choices: [
        { name: "Mangiasogni", level: 6, cd: "8.00s", tags: ["Area", "Danno"], desc: "Crea lame di vento oscuro che colpiscono più volte i nemici vicini. Lv.13: Numero di colpi aumentato." },
        { name: "Sciagura", level: 6, cd: "7.00s", tags: ["Proiettile", "Drain"], desc: "Assorbe l'energia vitale del nemico, infliggendo danni e curandosi. Lv.13: Recupero HP aumentato." },
      ]},
    ],
    unite: { name: "Agguato Oscuro", level: 9, desc: "Gengar assorbe l'energia vitale di tutti i nemici nelle vicinanze, infliggendo danni enormi e recuperando HP massivi." },
    builds: [
      { name: "Build: Drain Totale", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Fuocofatuo" }, { lv: 3, name: "Leccata" }, { lv: 4, name: "Palla Ombra" }, { lv: 6, name: "Mangiasogni" }],
        held: ["Lente Astuta", "Campanello Conchiglia", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Psicotaglio Burst", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fuocofatuo" }, { lv: 3, name: "Leccata" }, { lv: 4, name: "Fangobomba" }, { lv: 6, name: "Sciagura" }],
        held: ["Lente Astuta", "Lente Scelta", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Passiva furto HP unica, ottimo CC con sonno, danno speciale solido, può sopravvivere in combattimento", weaknesses: "Richiede il sonno del nemico per il massimo impatto, complesso da usare bene" },
  },

  807: { // Zeraora
    stats: { ps: 6319, atk: 649, def: 300, atksp: 118, defsp: 200, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Forzafulmine", desc: "Dopo aver usato una mossa, Zeraora ottiene uno scudo brevemente. Gli attacchi fisici infliggono danni elettrici bonus ai nemici con lo scudo attivo." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni elettrici fisici enormi e paralizzando brevemente il nemico.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "178% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Agilità", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con velocità fulminea, stordendolo brevemente." },
      { slot: 2, name: "Lacerazione", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Lancia un uncino di plasma che attira il nemico verso di sé." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Invertivolt", level: 4, cd: "7.50s", tags: ["Area", "CC"], desc: "Evoca un fulmine che cade sull'area designata, stordendo i nemici. Lv.11: Area e durata stordimento aumentati." },
        { name: "Scintilla", level: 4, cd: "5.00s", tags: ["Scatto", "Danno"], desc: "Scatta verso il nemico con velocità elettrica, infliggendo danni e ricaricando la mossa rapidamente. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Scarica", level: 6, cd: "8.00s", tags: ["Area", "Scatto"], desc: "Ruota velocemente creando un campo elettrico che danneggia i nemici vicini. Lv.13: Area e danni aumentati." },
        { name: "Sprizzalampo", level: 6, cd: "10.00s", tags: ["Scatto", "CC"], desc: "Compie acrobazie fulminee intorno al nemico, stordendolo e infliggendo danni multipli. Lv.13: Numero di colpi aumentato." },
      ]},
    ],
    unite: { name: "Tempesta Plasma", level: 9, desc: "Zeraora libera tutta la sua energia elettrica in un'esplosione devastante, paralizzando e infliggendo danni enormi a tutti i nemici nell'area." },
    builds: [
      { name: "Build: Surf Rapido", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Agilità" }, { lv: 3, name: "Lacerazione" }, { lv: 4, name: "Invertivolt" }, { lv: 6, name: "Scarica" }],
        held: ["Muscolbanda", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
      { name: "Build: Tuono Stordente", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Agilità" }, { lv: 3, name: "Lacerazione" }, { lv: 4, name: "Scintilla" }, { lv: 6, name: "Sprizzalampo" }],
        held: ["Muscolbanda", "Lente Guida", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Alta mobilità, danni fisici elevati, buon CC, scudo passivo permette di sopravvivere negli scontri", weaknesses: "Richiede ottima gestione dei cooldown, meno burst di Zoroark e Meowscarada" },
  },

  571: { // Zoroark
    stats: { ps: 6200, atk: 660, def: 260, atksp: 120, defsp: 180, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Illusione", desc: "Zoroark può prendere le sembianze di un alleato, ingannando i nemici. Il travestimento si rompe quando subisce danni. Le mosse inflitte mentre è travestito hanno danni bonus." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni oscuri fisici enormi e riducendo brevemente la velocità del nemico.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "185% Atk + 20 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Lacerazione", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Scatta verso il nemico e lo graffia con artigli di oscurità." },
      { slot: 2, name: "Sfuriate", level: "1 o 3", cd: "7.00s", tags: ["Area", "CC"], desc: "Crea un campo di oscurità che acceca e rallenta i nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Nottesferza", level: 4, cd: "6.00s", tags: ["Scatto", "Critico"], desc: "Attacca il nemico con una zanna oscura con alta probabilità di critico. Lv.11: Danno critico aumentato." },
        { name: "Fintoattacco", level: 4, cd: "8.00s", tags: ["Scatto", "Schivata"], desc: "Si teletrasporta alle spalle del nemico schivando i suoi attacchi. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Ombrartigli", level: 6, cd: "8.00s", tags: ["Area", "CC"], desc: "Genera un campo di buio più ampio che intrappola i nemici nell'oscurità. Lv.13: Area e durata aumentate." },
        { name: "Taglio", level: 6, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia sferze di oscurità verso il nemico, infliggendo danni multipli. Lv.13: Numero di colpi aumentato." },
      ]},
    ],
    unite: { name: "Urtoscuro", level: 9, desc: "Zoroark crea un'illusione di sé stesso e scatena un attacco oscuro devastante da più direzioni contemporaneamente." },
    builds: [
      { name: "Build: Burst Oscuro", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Lacerazione" }, { lv: 3, name: "Sfuriate" }, { lv: 4, name: "Nottesferza" }, { lv: 6, name: "Ombrartigli" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Illusione Critica", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Lacerazione" }, { lv: 3, name: "Sfuriate" }, { lv: 4, name: "Fintoattacco" }, { lv: 6, name: "Taglio" }],
        held: ["Lente Guida", "Pietra Levitante", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "S", lane: "Jungla", strengths: "Passiva illusione unica, burst oscuro elevatissimo, eccellente per cacciare bersagli singoli, ottimo early game", weaknesses: "L'illusione si rompe facilmente, richiede meccaniche avanzate, fragile se scoperto" },
  },

  85: { // Dodrio
    stats: { ps: 6300, atk: 625, def: 298, atksp: 118, defsp: 200, crit: "10%", cd: "0%", life: "0%" },
    passive: { name: "Corsa Rapida", desc: "Dopo aver usato una mossa, Dodrio ottiene un boost di velocità per 3s. La velocità massima di Dodrio è superiore a quella di qualsiasi altro Pokémon." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati con tre becchi simultanei.", dmgBase: "100% Atk + 5 x (Livello - 1) + 0", dmgBoost: "165% Atk + 15 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Beccata", level: "1 o 3", cd: "5.50s", tags: ["Proiettile"], desc: "Attacca con il becco tre volte in rapida successione." },
      { slot: 2, name: "Attacco Rapido", level: "1 o 3", cd: "8.00s", tags: ["Potenziamento"], desc: "Aumenta drasticamente la velocità di movimento per alcuni secondi." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Triattacco", level: 4, cd: "6.00s", tags: ["Scatto", "Multiplo"], desc: "Attacca tre volte di fila scattando tra i nemici. Lv.11: Danni aumentati." },
        { name: "Perforbecco", level: 4, cd: "7.50s", tags: ["Proiettile", "Penetrazione"], desc: "Lancia i becchi come proiettili che attraversano i nemici sul percorso. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Agilità", level: 6, cd: "10.00s", tags: ["Scatto", "Potenziamento"], desc: "Aumenta la velocità al massimo e diventa invincibile per una breve fase d'accelerazione. Lv.13: Durata e bonus aumentati." },
        { name: "Calciopesante", level: 6, cd: "8.00s", tags: ["Scatto", "CC"], desc: "Carica a tutta velocità respingendo i nemici sul percorso. Lv.13: Distanza e forza aumentate." },
      ]},
    ],
    unite: { name: "Triplo Calpestamento", level: 9, desc: "Dodrio corre alla massima velocità attraverso il campo, colpendo tutti i nemici sul percorso con tre attacchi simultanei dei suoi becchi." },
    builds: [
      { name: "Build: Velocità Pura", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Attacco Rapido" }, { lv: 4, name: "Triattacco" }, { lv: 6, name: "Agilità" }],
        held: ["Muscolbanda", "Pietra Levitante", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Becco Penetrante", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Attacco Rapido" }, { lv: 4, name: "Perforbecco" }, { lv: 6, name: "Calciopesante" }],
        held: ["Lente Guida", "Muscolbanda", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "B", lane: "Jungla", strengths: "Velocità di movimento record, ottimo per occupare obiettivi rapidamente, gap-closing eccellente", weaknesses: "Danni nella media, richiede molto spazio aperto, meno burst dei top Velocisti" },
  },

  470: { // Leafeon
    stats: { ps: 6250, atk: 660, def: 290, atksp: 116, defsp: 210, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Fotosintesi", desc: "Leafeon recupera HP ogni secondo quando si trova in zone di erba o terreno. La velocità di recupero aumenta del 50% quando è a bassa vita." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di erba aumentati e causando effetto avvelenamento.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "172% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fogliamagica", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia foglie affilate verso il nemico designato." },
      { slot: 2, name: "Cometapugno", level: "1 o 3", cd: "7.00s", tags: ["Scatto"], desc: "Scatta velocemente verso il nemico, avvicinandosi rapidamente." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Lamsolare", level: 4, cd: "5.50s", tags: ["Scatto", "Critico"], desc: "Si avvicina al nemico e lo colpisce con una lama di foglie con alta probabilità di critico. Lv.11: Danno critico aumentato." },
        { name: "Fogliama", level: 4, cd: "8.00s", tags: ["Area", "Danno"], desc: "Genera una tempesta di foglie affilate intorno a sé, infliggendo danni ai nemici vicini. Lv.11: Danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Aereassalto", level: 6, cd: "10.00s", tags: ["Scudo", "Potenziamento"], desc: "Si copre di foglie corazzate che assorbono i danni e aumentano la resistenza. Lv.13: Durata e assorbimento aumentati." },
        { name: "Furia d'Incrocio", level: 6, cd: "7.00s", tags: ["Scatto", "Danno"], desc: "Si lancia a tutta velocità verso il nemico in un turbine di foglie affilate. Lv.13: Danni aumentati." },
      ]},
    ],
    unite: { name: "Danza di Smeraldo", level: 9, desc: "Leafeon si trasforma in una lama vegetale vivente e attraversa il campo a velocità folle, infliggendo danni enormi a tutti i nemici sul percorso." },
    builds: [
      { name: "Build: Critico Verde", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fogliamagica" }, { lv: 3, name: "Cometapugno" }, { lv: 4, name: "Lamsolare" }, { lv: 6, name: "Aereassalto" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Tank Verde", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Fogliamagica" }, { lv: 3, name: "Cometapugno" }, { lv: 4, name: "Fogliama" }, { lv: 6, name: "Furia d'Incrocio" }],
        held: ["Muscolbanda", "Cookie Aeos", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Passiva recupero HP unica, buon danno fisico, resistente grazie alla rigenerazione, utile in zona erba", weaknesses: "Dipende dalle zone erbose per il massimo impatto, meno burst di Zoroark o Meowscarada" },
  },

  911: { // Meowscarada
    stats: { ps: 6490, atk: 630, def: 340, atksp: 114, defsp: 230, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Stregoneria delle Erbe", desc: "Meowscarada può diventare invisibile brevemente dopo aver usato una mossa. Le mosse inflitte uscendo dall'invisibilità hanno danni e probabilità di critico aumentati." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici enormi con un attacco che attraversa i nemici.", dmgBase: "100% Atk + 8 x (Livello - 1) + 0", dmgBoost: "190% Atk + 22 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fogliame", level: "1 o 3", cd: "5.50s", tags: ["Proiettile"], desc: "Lancia foglie affilate verso il nemico designato." },
      { slot: 2, name: "Unghiaguzze", level: "1 o 3", cd: "8.00s", tags: ["Scatto"], desc: "Si muove nell'ombra diventando temporaneamente invisibile." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Prestigiatore", level: 4, cd: "7.00s", tags: ["Scatto", "Area", "Critico"], desc: "Compie una danza tra le ombre lanciando petali oscuri con alta probabilità di critico. Lv.11: Danno critico aumentato." },
        { name: "Nottesferza", level: 4, cd: "9.00s", tags: ["Proiettile", "Danno"], desc: "Lancia fiori esplosivi verso il nemico che esplodono al contatto. Lv.11: Danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Doppioteam", level: 6, cd: "6.00s", tags: ["Scatto", "Invisibilità"], desc: "Scatta verso il nemico nell'ombra e lo colpisce uscendo dall'invisibilità per massimizzare i danni. Lv.13: Danno d'uscita aumentato." },
        { name: "Apripista", level: 6, cd: "8.00s", tags: ["Trappola", "CC"], desc: "Posiziona trappole floreali che bloccano i nemici che le calpestano. Lv.13: Numero trappole aumentato." },
      ]},
    ],
    unite: { name: "Fioritura Esplosiva", level: 9, desc: "Meowscarada entra nell'invisibilità e poi si scatena in una danza di lame oscure devastante, infliggendo danni critici a tutti i nemici nell'area." },
    builds: [
      { name: "Build: Assassino Oscuro", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fogliame" }, { lv: 3, name: "Unghiaguzze" }, { lv: 4, name: "Prestigiatore" }, { lv: 6, name: "Doppioteam" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Trappola Floreale", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Fogliame" }, { lv: 3, name: "Unghiaguzze" }, { lv: 4, name: "Nottesferza" }, { lv: 6, name: "Apripista" }],
        held: ["Lente Guida", "Pietra Levitante", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "S", lane: "Jungla", strengths: "Invisibilità passiva unica, burst critico devastante, eccellente per eliminare bersagli isolati, ottimo in ogni fase della partita", weaknesses: "Molto fragile, richiede ottima gestione dei tempi di entrata/uscita dall'invisibilità" },
  },

  // ──────────────────────────────────────────────
  // VERSATILI
  // ──────────────────────────────────────────────

  6: { // Charizard
    stats: { ps: 7700, atk: 462, def: 400, atksp: 115, defsp: 320, crit: "30%", cd: "0%", life: "15%" },
    passive: { name: "Fuoco Vivo", desc: "Quando i PS scendono sotto il 50%, la potenza delle mosse di fuoco aumenta del 30%. Dopo l'evoluzione, Charizard ottiene un boost permanente alle statistiche." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di fuoco aumentati e bruciando il nemico per 2s.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "174% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fiammata", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Bruciatura"], desc: "Lancia braci verso il nemico infliggendo danni di fuoco." },
      { slot: 2, name: "Turbofuoco", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "Danno"], desc: "Scatta verso il nemico con un attacco infuocato." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Lanciafiamme", level: 4, cd: "7.00s", tags: ["Proiettile", "Bruciatura"], desc: "Spara un getto di fiamme che brucia i nemici sul percorso. Lv.11: Danni aumentati." },
        { name: "Fuocopugno", level: 4, cd: "9.00s", tags: ["Scatto", "Area"], desc: "Vola e si lancia a terra in una zona, infliggendo danni ad area. Lv.11: Area e danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Fuocobomba", level: 6, cd: "6.00s", tags: ["Area", "CC"], desc: "Sventola le ali generando onde d'urto che respingono i nemici. Lv.13: Area e forza aumentate." },
        { name: "Fuococarica", level: 6, cd: "8.00s", tags: ["Scatto", "Danno"], desc: "Vola verso il bersaglio e lo investe con tutto il peso in picchiata. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Schiacciata Sismica", level: 9, desc: "Charizard si trasforma in Mega Charizard e spara un Iper Raggio fiammeggiante devastante che infligge danni enormi." },
    builds: [
      { name: "Build: Lanciafiamme", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fiammata" }, { lv: 3, name: "Turbofuoco" }, { lv: 4, name: "Lanciafiamme" }, { lv: 6, name: "Fuocobomba" }],
        held: ["Muscolbanda", "Amplienergia", "Cookie Aeos"], battle: "Pulsantefuga" },
      { name: "Build: Fuoco Tuffante", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fiammata" }, { lv: 3, name: "Turbofuoco" }, { lv: 4, name: "Fuocopugno" }, { lv: 6, name: "Fuococarica" }],
        held: ["Muscolbanda", "Pietra Levitante", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla / Corsia Superiore", strengths: "Versatile, danni fisici solidi, buona resistenza per un Versatile, facile per i principianti", weaknesses: "Meno burst dei top Versatili, dipende dall'evoluzione, poco CC" },
  },

  448: { // Lucario
    stats: { ps: 7249, atk: 429, def: 390, atksp: 115, defsp: 300, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Passo Costante", desc: "Dopo aver usato una mossa, Lucario ottiene un bonus di velocità di movimento e le successive mosse infliggono danni dell'Aura aumentati per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici dell'aura aumentati e aumentando temporaneamente la propria velocità d'attacco.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "176% Atk + 20 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Attacco Rapido", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Multiplo"], desc: "Attacca rapidamente il nemico con una serie di pugni veloci." },
      { slot: 2, name: "Meteorpugno", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia una sfera di energia dell'Aura verso il nemico." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Extrarapido", level: 4, cd: "6.00s", tags: ["Scatto", "Area"], desc: "Lancia un'onda di Aura che colpisce i nemici in un arco ampio. Lv.11: Area e danni aumentati." },
        { name: "Crescipugno", level: 4, cd: "5.00s", tags: ["Scatto", "Multiplo"], desc: "Attacca il nemico con una serie di pugni fulminei prima di tornare alla posizione iniziale. Lv.11: Numero di colpi aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Ossoraffiche", level: 6, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Spara una sfera d'Aura potenziata ad alta velocità. Lv.13: Danno aumentato." },
        { name: "Zuffa", level: 6, cd: "8.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con un colpo devastante che lo respinge. Lv.13: Distanza respinta aumentata." },
      ]},
    ],
    unite: { name: "Ondasfera Letale", level: 9, desc: "Lucario carica e spara una Sfera d'Aura enorme che infligge danni enormi al primo nemico colpito e all'area intorno." },
    builds: [
      { name: "Build: Pugno Combo", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Attacco Rapido" }, { lv: 3, name: "Meteorpugno" }, { lv: 4, name: "Extrarapido" }, { lv: 6, name: "Ossoraffiche" }],
        held: ["Muscolbanda", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
      { name: "Build: Aura d'Onda", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Attacco Rapido" }, { lv: 3, name: "Meteorpugno" }, { lv: 4, name: "Crescipugno" }, { lv: 6, name: "Zuffa" }],
        held: ["Muscolbanda", "Cookie Aeos", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Altissimo burst fisico, mobilità eccellente, molto resistente per un Versatile, ottimo in ogni situazione", weaknesses: "Richiede meccaniche avanzate, necessita gestione ottimale dei cooldown per il massimo output" },
  },

  68: { // Machamp
    stats: { ps: 7650, atk: 479, def: 510, atksp: 114, defsp: 350, crit: "20%", cd: "0%", life: "20%" },
    passive: { name: "Pugno di Ferro", desc: "Le mosse di lotta di Machamp infliggono danni bonus basati sul 3% degli HP massimi del bersaglio. La sua probabilità di critico aumenta del 5% dopo ogni attacco riuscito (fino a 5 volte)." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di lotta enormi con un gancio che stordisce brevemente.", dmgBase: "100% Atk + 8 x (Livello - 1) + 0", dmgBoost: "180% Atk + 20 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Colpokarate", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Colpisce il nemico con un potente pugno di karate." },
      { slot: 2, name: "Granfisico", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Genera onde d'urto con i pugni che rallentano i nemici." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Dinamipugno", level: 4, cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con un uppercut che lo stordisce. Lv.11: Durata stordimento aumentata." },
        { name: "Sottomissione", level: 4, cd: "7.50s", tags: ["Area", "Danno"], desc: "Colpisce in modo incrociato tutti i nemici davanti a sé. Lv.11: Area e danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Zuffa", level: 6, cd: "8.00s", tags: ["Scatto", "CC"], desc: "Sgambetta il nemico e lo lancia a terra, immobilizzandolo brevemente. Lv.13: Durata aumentata." },
        { name: "Incrocolpo", level: 6, cd: "10.00s", tags: ["Carica", "Danno"], desc: "Carica e libera un pugno concentrato devastante sul nemico designato. Lv.13: Danno aumentato." },
      ]},
    ],
    unite: { name: "Schiacciata di Machamp", level: 9, desc: "Machamp libera una combinazione di pugni devastante su tutti i nemici di fronte, infliggendo danni enormi e lanciandoli in aria." },
    builds: [
      { name: "Build: Stordimento Totale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Colpokarate" }, { lv: 3, name: "Granfisico" }, { lv: 4, name: "Dinamipugno" }, { lv: 6, name: "Zuffa" }],
        held: ["Muscolbanda", "Cookie Aeos", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Burst di Forza", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Colpokarate" }, { lv: 3, name: "Granfisico" }, { lv: 4, name: "Sottomissione" }, { lv: 6, name: "Incrocolpo" }],
        held: ["Muscolbanda", "Amplienergia", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Ottimo CC con stordimenti, buon danno basato sugli HP del nemico, efficace contro Difensori", weaknesses: "Meno burst di Lucario, richiede di avvicinarsi ai nemici, vulnerabile ai kite" },
  },

  445: { // Garchomp
    stats: { ps: 8150, atk: 516, def: 520, atksp: 114, defsp: 410, crit: "15%", cd: "0%", life: "15%" },
    passive: { name: "Pelle Sabbia", desc: "Quando Garchomp subisce danni, genera una tempesta di sabbia che rallenta i nemici vicini per 2s. Questo effetto ha un cooldown di 5s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di drago aumentati e riducendo brevemente la difesa del nemico.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "172% Atk + 17 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Turbosabbia", level: "1 o 3", cd: "5.00s", tags: ["Scatto"], desc: "Si avvicina velocemente al nemico infliggendo un attacco rapido." },
      { slot: 2, name: "Pestone", level: "1 o 3", cd: "8.00s", tags: ["Trappola", "CC"], desc: "Scava una fossa che blocca i nemici che ci cadono dentro." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Dragofuria", level: 4, cd: "6.00s", tags: ["Scatto", "Critico"], desc: "Scatta verso il nemico e lo colpisce con la pinna drago, alta probabilità di critico. Lv.11: Danno critico aumentato." },
        { name: "Fossa", level: 4, cd: "9.00s", tags: ["Area", "CC"], desc: "Si lancia a terra causando un'onda sismica che danneggia e rallenta tutti i nemici nell'area. Lv.11: Area aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Dragartigli", level: 6, cd: "7.00s", tags: ["Scatto", "Area"], desc: "Ruota velocemente colpendo tutti i nemici vicini con la coda. Lv.13: Danni aumentati." },
        { name: "Terremoto", level: 6, cd: "8.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso l'alto portando il nemico con sé, poi lo sbatte a terra. Lv.13: Danno di caduta aumentato." },
      ]},
    ],
    unite: { name: "Furia Livida", level: 9, desc: "Garchomp vola in alto e si tuffa sull'area designata, causando un'enorme esplosione di terra che danneggia e respinge tutti i nemici." },
    builds: [
      { name: "Build: Critico Drago", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Turbosabbia" }, { lv: 3, name: "Pestone" }, { lv: 4, name: "Dragofuria" }, { lv: 6, name: "Dragartigli" }],
        held: ["Lente Guida", "Muscolbanda", "Cookie Aeos"], battle: "Pulsantefuga" },
      { name: "Build: Terremoto", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Turbosabbia" }, { lv: 3, name: "Pestone" }, { lv: 4, name: "Fossa" }, { lv: 6, name: "Terremoto" }],
        held: ["Cookie Aeos", "Amplienergia", "Muscolbanda"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Buona resistenza, CC con fossa e terremoto, ottimo contro gruppi di nemici", weaknesses: "Scaling lento, meno burst dei top Versatili, dipende da Terremoto per il massimo impatto" },
  },

  149: { // Dragonite
    stats: { ps: 7750, atk: 550, def: 465, atksp: 115, defsp: 360, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Multiscaglia", desc: "Quando Dragonite subisce danni per la prima volta in un combattimento, li riduce del 50%. Questo effetto si ricarica dopo 10s fuori dal combattimento." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di drago aumentati con un proiettile a lungo raggio.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "170% Atk + 17 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Tornado", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Spara un fulmine verso il nemico che lo paralizza brevemente." },
      { slot: 2, name: "Dragodanza", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Colpisce con la coda potente, respingendo il nemico." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Dragospiro", level: 4, cd: "8.00s", tags: ["Area", "Danno"], desc: "Evoca meteore di energia drago sull'area designata. Lv.11: Numero di meteore e danni aumentati." },
        { name: "Extrarapido", level: 4, cd: "10.00s", tags: ["Proiettile", "Danno"], desc: "Spara un raggio potentissimo in una linea retta dopo una breve carica. Lv.11: Danno aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Oltraggio", level: 6, cd: "7.00s", tags: ["Proiettile", "Bruciatura"], desc: "Spara un getto di fiamme che brucia i nemici sul percorso. Lv.13: Danni aumentati." },
        { name: "Iper Raggio", level: 6, cd: "6.00s", tags: ["Scatto", "Area"], desc: "Ruota velocemente colpendo tutti i nemici vicini con la coda. Lv.13: Danni e area aumentati." },
      ]},
    ],
    unite: { name: "Impatto Draconico", level: 9, desc: "Dragonite carica e spara il suo Iper Raggio definitivo, infliggendo danni devastanti a tutto ciò che colpisce in una linea retta." },
    builds: [
      { name: "Build: Meteora Drago", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Tornado" }, { lv: 3, name: "Dragodanza" }, { lv: 4, name: "Dragospiro" }, { lv: 6, name: "Oltraggio" }],
        held: ["Muscolbanda", "Amplienergia", "Cookie Aeos"], battle: "Pulsantefuga" },
      { name: "Build: Iper Raggio", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Tornado" }, { lv: 3, name: "Dragodanza" }, { lv: 4, name: "Extrarapido" }, { lv: 6, name: "Iper Raggio" }],
        held: ["Muscolbanda", "Lente Guida", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Passiva riduzione danni ottima, versatile nelle mosse, buon danno a distanza e in mischia", weaknesses: "Passiva ha un cooldown lungo, meno burst di Lucario e Metagross, lento all'inizio" },
  },

  763: { // Tsareena
    stats: { ps: 7298, atk: 460, def: 410, atksp: 115, defsp: 340, crit: "20%", cd: "0%", life: "20%" },
    passive: { name: "Punta di Forza", desc: "Quando Tsareena usa una mossa con successo, il tempo di ricarica della mossa successiva è ridotto di 1s. Ogni terzo attacco critico ripristina un utilizzo di mossa." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di erba aumentati con un calcio rotante.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "168% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fogliamagica", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia foglie affilate verso il nemico." },
      { slot: 2, name: "Rapigiro", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico e lo spinge con una spallata." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Triplo Axel", level: 4, cd: "5.50s", tags: ["Scatto", "CC"], desc: "Colpisce il nemico con un calcio dall'alto che lo blocca a terra. Lv.11: Durata blocco aumentata." },
        { name: "Pestone", level: 4, cd: "7.00s", tags: ["Area", "Danno"], desc: "Crea un campo erboso pulsante che infligge danni ai nemici nell'area. Lv.11: Area e danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Tropocalcio", level: 6, cd: "8.00s", tags: ["Scatto", "Area"], desc: "Compie una danza tra i nemici lanciando petali in tutte le direzioni. Lv.13: Danni aumentati." },
        { name: "Erboscivolata", level: 6, cd: "7.00s", tags: ["Scatto", "CC"], desc: "Sgambetta il nemico e lo ribalta, immobilizzandolo brevemente. Lv.13: Danno e durata aumentati." },
      ]},
    ],
    unite: { name: "Regalità Aerea", level: 9, desc: "Tsareena colpisce ripetutamente con calci devastanti tutti i nemici nell'area, infliggendo danni enormi e respingendoli." },
    builds: [
      { name: "Build: Scalcio Combo", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Fogliamagica" }, { lv: 3, name: "Rapigiro" }, { lv: 4, name: "Triplo Axel" }, { lv: 6, name: "Tropocalcio" }],
        held: ["Muscolbanda", "Amplienergia", "Cookie Aeos"], battle: "Pulsantefuga" },
      { name: "Build: Danza Erbosa", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Fogliamagica" }, { lv: 3, name: "Rapigiro" }, { lv: 4, name: "Pestone" }, { lv: 6, name: "Erboscivolata" }],
        held: ["Muscolbanda", "Lente Guida", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Ottimo CC con blocchi multipli, buon burst, passiva riduzione cooldown unica, molto efficace in combo", weaknesses: "Richiede di entrare in mischia, vulnerabile se isolata, meno burst dei top Versatili" },
  },

  681: { // Aegislash
    stats: { ps: 7302, atk: 357, def: 280, atksp: 115, defsp: 200, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Cambio di Forma", desc: "Aegislash alterna tra Forma Scudo (alta difesa, basso attacco) e Forma Spada (alto attacco, bassa difesa). L'alternanza avviene automaticamente in base alle mosse usate." },
    basic: { name: "Attacco", desc: "In Forma Spada: ogni terzo attacco infligge danni fisici enormi. In Forma Scudo: ogni terzo attacco genera un piccolo scudo.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "176% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Furtivombra", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Danno"], desc: "Lancia la spada verso il nemico infliggendo danni fisici." },
      { slot: 2, name: "Ferroscudo", level: "1 o 3", cd: "8.00s", tags: ["Scatto", "CC"], desc: "Colpisce con lo scudo metallico, stordendo brevemente il nemico." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Spadasanta", level: 4, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Spara una lama sacra che attraversa i nemici infliggendo danni enormi. Lv.11: Danni aumentati." },
        { name: "Ombrartigli", level: 4, cd: "9.00s", tags: ["Potenziamento"], desc: "Attiva la Forma Spada e aumenta drasticamente l'Attacco per 5s. Lv.11: Bonus e durata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Ferroriduttore", level: 6, cd: "7.00s", tags: ["Scatto", "Critico"], desc: "Scatta verso il nemico con un taglio oscuro ad alta probabilità di critico. Lv.13: Danno critico aumentato." },
        { name: "Scudo Reale", level: 6, cd: "10.00s", tags: ["Scudo", "Resistenza"], desc: "Entra in Forma Scudo aumentando drasticamente la difesa e assorbendo i danni. Lv.13: Scudo aumentato." },
      ]},
    ],
    unite: { name: "Fendente Finale", level: 9, desc: "Aegislash alterna rapidamente tra Forma Spada e Forma Scudo durante una danza devastante, infliggendo danni enormi e assorbendo gli attacchi." },
    builds: [
      { name: "Build: Spada Sacra", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Furtivombra" }, { lv: 3, name: "Ferroscudo" }, { lv: 4, name: "Spadasanta" }, { lv: 6, name: "Ferroriduttore" }],
        held: ["Muscolbanda", "Lente Guida", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Forma Scudo Tank", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Furtivombra" }, { lv: 3, name: "Ferroscudo" }, { lv: 4, name: "Ombrartigli" }, { lv: 6, name: "Scudo Reale" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Amplienergia"], battle: "Barriera X" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Meccanica di cambio forma unica, ottimo bilanciamento tra attacco e difesa, utile sia in offensiva che difensiva", weaknesses: "Richiede comprensione del cambio forma, meno burst dei top Versatili, non eccelle in un solo ruolo" },
  },

  212: { // Scizor
    stats: { ps: 8600, atk: 460, def: 620, atksp: 115, defsp: 410, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Forza Bruta", desc: "Le mosse di Scizor infliggono danni bonus basati sul 2% degli HP massimi del bersaglio. Dopo ogni scatto, gli attacchi base successivi hanno danni aumentati per 2s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di acciaio enormi con una forbice affilata.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "178% Atk + 19 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Attacco Rapido", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Scatta verso il nemico e lo afferra con le forbici." },
      { slot: 2, name: "Tagliofuria", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Multiplo"], desc: "Lancia due lame affilate verso il nemico." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Pugnoscarica", level: 4, cd: "6.00s", tags: ["Scatto", "Critico"], desc: "Attacca il nemico formando una X con le forbici, alta probabilità di critico. Lv.11: Danno critico aumentato." },
        { name: "Danzaspada", level: 4, cd: "9.00s", tags: ["Potenziamento"], desc: "Aumenta drasticamente l'Attacco e la velocità d'attacco per un breve periodo. Lv.11: Bonus e durata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Doppioffensiva", level: 6, cd: "7.00s", tags: ["Scatto", "Danno"], desc: "Si lancia verso il nemico con un potente pugno metallico. Lv.13: Danno aumentato." },
        { name: "Ferroriduttore", level: 6, cd: "8.00s", tags: ["Area", "Danno"], desc: "Taglia in un arco ampio con le forbici di acciaio, colpendo tutti i nemici davanti. Lv.13: Area e danni aumentati." },
      ]},
    ],
    unite: { name: "Illusione Rossa", level: 9, desc: "Scizor attacca a velocità folle con le forbici, infliggendo danni enormi a tutti i nemici in rapida successione." },
    builds: [
      { name: "Build: Forbice Critica", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Attacco Rapido" }, { lv: 3, name: "Tagliofuria" }, { lv: 4, name: "Pugnoscarica" }, { lv: 6, name: "Doppioffensiva" }],
        held: ["Lente Guida", "Muscolbanda", "Pietra Levitante"], battle: "Pulsantefuga" },
      { name: "Build: Danza Acciaio", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Attacco Rapido" }, { lv: 3, name: "Tagliofuria" }, { lv: 4, name: "Danzaspada" }, { lv: 6, name: "Ferroriduttore" }],
        held: ["Muscolbanda", "Amplienergia", "Cookie Aeos"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Danni fisici elevati, passiva danni % sugli HP utile contro i Difensori, buona mobilità con scatti multipli", weaknesses: "Richiede avvicinarsi ai bersagli, meno CC di altri Versatili, vulnerabile al kite" },
  },

  248: { // Tyranitar
    stats: { ps: 8950, atk: 450, def: 520, atksp: 114, defsp: 395, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Sabbiabuffera", desc: "Tyranitar genera automaticamente una tempesta di sabbia intorno a sé. I nemici nella tempesta subiscono danni continui e la loro visuale è ridotta." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici rocciosi enormi e causando una piccola tempesta di sabbia locale.", dmgBase: "100% Atk + 7 x (Livello - 1) + 0", dmgBoost: "176% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Lucidatura", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Morde il nemico con le enormi fauci, bloccandolo brevemente." },
      { slot: 2, name: "Morso", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Area"], desc: "Lancia massi verso i nemici, infliggendo danni ad area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Neropulsar", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Genera un enorme terremoto che danneggia e rallenta tutti i nemici nell'area. Lv.11: Area aumentata." },
        { name: "Pietrataglio", level: 4, cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico e lo afferra, trascinandolo. Lv.11: Durata presa aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Forzantica", level: 6, cd: "9.00s", tags: ["Proiettile", "Area", "CC"], desc: "Evoca rocce enormi che cadono sull'area designata, stordendo i nemici. Lv.13: Numero rocce e danni aumentati." },
        { name: "Sabbiatomba", level: 6, cd: "7.00s", tags: ["Scatto", "CC"], desc: "Carica verso i nemici con la testa, respingendoli violentemente. Lv.13: Distanza aumentata." },
      ]},
    ],
    unite: { name: "Furia Tirannica", level: 9, desc: "Tyranitar si gigantizza e scatena una tempesta di sabbia e rocce devastante che infligge danni enormi a tutti i nemici nell'area." },
    builds: [
      { name: "Build: Terremoto Totale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Lucidatura" }, { lv: 3, name: "Morso" }, { lv: 4, name: "Neropulsar" }, { lv: 6, name: "Forzantica" }],
        held: ["Cookie Aeos", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Presa e Sbattitura", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Lucidatura" }, { lv: 3, name: "Morso" }, { lv: 4, name: "Pietrataglio" }, { lv: 6, name: "Sabbiatomba" }],
        held: ["Muscolbanda", "Cookie Aeos", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Passiva sabbia unica, buona resistenza, ottimo CC con terremoto, forte contro gruppi di nemici", weaknesses: "Lento, scaling difficile nelle prime fasi, meno efficace in 1v1 contro Velocisti agili" },
  },

  794: { // Buzzwole
    stats: { ps: 7800, atk: 452, def: 500, atksp: 115, defsp: 380, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Bestia Assorbente", desc: "Ogni attacco fisico riuscito di Buzzwole recupera una piccola percentuale di HP. Dopo aver usato una mossa, il recupero HP è triplicato per 2s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici enormi e recuperando una quantità significativa di HP.", dmgBase: "100% Atk + 8 x (Livello - 1) + 0", dmgBoost: "182% Atk + 20 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Pungiglione", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con un uppercut potente che lo stordisce." },
      { slot: 2, name: "Megapugno", level: "1 o 3", cd: "7.00s", tags: ["Danno", "Drain"], desc: "Colpisce il nemico con forza sovrumana e assorbe parte dei danni inflitti come HP." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Assalto", level: 4, cd: "9.00s", tags: ["Potenziamento", "Scudo"], desc: "Gonfia i muscoli al massimo, ottenendo uno scudo e aumentando l'Attacco. Lv.11: Scudo e bonus aumentati." },
        { name: "Abbattimento", level: 4, cd: "7.00s", tags: ["Area", "Multiplo"], desc: "Attacca in rapida successione con una serie di pugni che colpiscono l'area. Lv.11: Numero di colpi aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Crescipugno", level: 6, cd: "8.00s", tags: ["Area", "CC"], desc: "Si lancia a terra causando un terremoto che blocca i nemici nell'area. Lv.13: Area e durata blocco aumentati." },
        { name: "Sanguisuga", level: 6, cd: "7.00s", tags: ["Scatto", "Drain"], desc: "Abbraccia il nemico assorbendo i suoi HP. Lv.13: Recupero HP aumentato." },
      ]},
    ],
    unite: { name: "Superlancio Muscolare", level: 9, desc: "Buzzwole si gonfia al massimo e scatena una serie di pugni devastanti su tutti i nemici vicini, recuperando enormi quantità di HP." },
    builds: [
      { name: "Build: Drain Tank", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Pungiglione" }, { lv: 3, name: "Megapugno" }, { lv: 4, name: "Assalto" }, { lv: 6, name: "Crescipugno" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Muscolbanda"], battle: "Pulsantefuga" },
      { name: "Build: Burst di Pugni", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Pungiglione" }, { lv: 3, name: "Megapugno" }, { lv: 4, name: "Abbattimento" }, { lv: 6, name: "Sanguisuga" }],
        held: ["Muscolbanda", "Amplienergia", "Cookie Aeos"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Passiva drain HP eccellente per la sopravvivenza, molto resistente, buon danno fisico, difficile da eliminare", weaknesses: "Poco CC rispetto ad altri Tank, non eccelle in mobilità, richiede di restare in mischia" },
  },

  184: { // Azumarill
    stats: { ps: 7850, atk: 461, def: 399, atksp: 115, defsp: 399, crit: "0%", cd: "0%", life: "10%" },
    passive: { name: "Gigaforza", desc: "Il potere di Attacco di Azumarill è raddoppiato. Nonostante l'apparenza, infligge danni fisici elevatissimi. Le mosse d'acqua hanno anche effetti di rallentamento." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici enormi (amplificati da Gigaforza) e respingendo il nemico.", dmgBase: "100% Atk + 6 x (Livello - 1) + 0", dmgBoost: "170% Atk + 17 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Azione", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico colpendolo con un attacco d'acqua che lo respinge." },
      { slot: 2, name: "Bolla", level: "1 o 3", cd: "8.00s", tags: ["Scatto"], desc: "Rimbalza verso il nemico con il suo corpo rotondo." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Mulinello", level: 4, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia un potente getto d'acqua verso il nemico. Lv.11: Danno aumentato." },
        { name: "Idrocoda", level: 4, cd: "9.00s", tags: ["Area", "CC"], desc: "Crea uno spruzzo d'acqua enorme che rallenta tutti i nemici nell'area. Lv.11: Area aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Carineria", level: 6, cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si trasforma in una palla e si lancia contro il nemico, stordendolo. Lv.13: Durata stordimento aumentata." },
        { name: "Idropulsar", level: 6, cd: "8.00s", tags: ["Scatto", "Area"], desc: "Si tuffa in una bolla d'acqua e si lancia su un'area ampia. Lv.13: Area e danni aumentati." },
      ]},
    ],
    unite: { name: "Panciata Tamburo", level: 9, desc: "Azumarill crea un enorme vortice d'acqua che aspira e danneggia tutti i nemici nell'area, poi esplode infliggendo danni enormi." },
    builds: [
      { name: "Build: Pump Attack", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Azione" }, { lv: 3, name: "Bolla" }, { lv: 4, name: "Mulinello" }, { lv: 6, name: "Carineria" }],
        held: ["Muscolbanda", "Cookie Aeos", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Controllo Acqua", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Azione" }, { lv: 3, name: "Bolla" }, { lv: 4, name: "Idrocoda" }, { lv: 6, name: "Idropulsar" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Muscolbanda"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "C", lane: "Corsia Superiore", strengths: "Passiva Gigaforza sorprendente, discreto danno fisico, buona resistenza per un Versatile", weaknesses: "Lento, meno burst dei top Versatili, poco impatto nel meta competitivo attuale" },
  },

  376: { // Metagross
    stats: { ps: 8150, atk: 530, def: 550, atksp: 114, defsp: 410, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Chitina Chiara", desc: "Metagross riduce i danni subiti del 20% in modo permanente. Ogni mossa usata aumenta ulteriormente la resistenza per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di acciaio enormi e riducendo la difesa del nemico.", dmgBase: "100% Atk + 8 x (Livello - 1) + 0", dmgBoost: "183% Atk + 22 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Ferroscudo", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Carica verso il nemico con la testa metallica, stordendolo brevemente." },
      { slot: 2, name: "Azione", level: "1 o 3", cd: "7.00s", tags: ["Area", "CC"], desc: "Genera un campo psichico che rallenta i nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Meteorpugno", level: 4, cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Attacca il nemico con un pugno martellante ad altissimo danno. Lv.11: Danno aumentato." },
        { name: "Giroballa", level: 4, cd: "9.00s", tags: ["Area", "CC"], desc: "Crea un campo magnetico che attira i nemici vicini verso di sé. Lv.11: Raggio aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Zuccata Zen", level: 6, cd: "7.00s", tags: ["Area", "Rallentamento"], desc: "Crea un'esplosione psichica nell'area che danneggia e rallenta i nemici. Lv.13: Area e danni aumentati." },
        { name: "Magnetascesa", level: 6, cd: "8.00s", tags: ["Proiettile", "Danno"], desc: "Lancia una pioggia di meteoriti psichici sull'area designata. Lv.13: Numero di meteoriti aumentato." },
      ]},
    ],
    unite: { name: "Analisi ed Impatto", level: 9, desc: "Metagross carica e libera un pugno di energia psichica devastante che infligge danni enormi a tutti i nemici davanti a sé." },
    builds: [
      { name: "Build: Pugno Totale", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Ferroscudo" }, { lv: 3, name: "Azione" }, { lv: 4, name: "Meteorpugno" }, { lv: 6, name: "Zuccata Zen" }],
        held: ["Muscolbanda", "Amplienergia", "Cookie Aeos"], battle: "Pulsantefuga" },
      { name: "Build: Magnetismo Totale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Ferroscudo" }, { lv: 3, name: "Azione" }, { lv: 4, name: "Giroballa" }, { lv: 6, name: "Magnetascesa" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Amplienergia"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Eccezionale resistenza passiva, danni fisici altissimi, efficace sia in offensiva che difensiva, difficilissimo da eliminare", weaknesses: "Lento, manca di mobilità, richiede di essere in mischia per il massimo output" },
  },

  892: { // Urshifu
    stats: { ps: 7900, atk: 480, def: 430, atksp: 115, defsp: 340, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Colpo Infallibile", desc: "Le mosse di Urshifu ignorano completamente gli scudi e le barriere. Ogni attacco critico ha una probabilità di ridurre il tempo di ricarica della mossa attiva." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di lotta enormi e ignorando qualsiasi scudo del nemico.", dmgBase: "100% Atk + 8 x (Livello - 1) + 0", dmgBoost: "186% Atk + 22 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Spaccaroccia", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Multiplo"], desc: "Attacca il nemico con una serie di pugni rapidissimi." },
      { slot: 2, name: "Pugnotenebre", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con un calcio che lo respinge." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Golaforata", level: 4, cd: "6.00s", tags: ["Scatto", "Multiplo", "Ignora Scudo"], desc: "Attacca con una serie di pugni fulminei che ignorano gli scudi. Lv.11: Numero di colpi e danni aumentati." },
        { name: "Spaccaroccia", level: 4, cd: "7.00s", tags: ["Scatto", "Critico", "Ignora Scudo"], desc: "Scatta verso il nemico con un colpo oscuro penetrante ad alta probabilità di critico. Lv.11: Danno critico aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Idroraffica", level: 6, cd: "8.00s", tags: ["Area", "Multiplo"], desc: "Attacca tutti i nemici vicini con una raffica di pugni potentissimi. Lv.13: Danni aumentati." },
        { name: "Idroliquidazione", level: 6, cd: "7.00s", tags: ["Scatto", "Multiplo"], desc: "Colpisce il nemico con una cascata di calci in rapida successione. Lv.13: Numero di colpi aumentato." },
      ]},
    ],
    unite: { name: "Pugno d'Ebano / Raffica di Pugni", level: 9, desc: "Urshifu concentra tutta la sua forza in un singolo colpo devastante che ignora tutti gli scudi e infligge danni enormi." },
    builds: [
      { name: "Build: Assassino di Scudi", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Spaccaroccia" }, { lv: 3, name: "Pugnotenebre" }, { lv: 4, name: "Golaforata" }, { lv: 6, name: "Idroraffica" }],
        held: ["Lente Guida", "Muscolbanda", "Amplienergia"], battle: "Pulsantefuga" },
      { name: "Build: Critico Oscuro", path: "Percorso Danni", moveLevels: [{ lv: 1, name: "Spaccaroccia" }, { lv: 3, name: "Pugnotenebre" }, { lv: 4, name: "Spaccaroccia" }, { lv: 6, name: "Idroliquidazione" }],
        held: ["Lente Guida", "Muscolbanda", "Pietra Levitante"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "S", lane: "Jungla", strengths: "Unico a ignorare tutti gli scudi, burst fisico devastante, counter diretto a tutti i Difensori e Supporti con barriere", weaknesses: "Fragile per un Versatile, meno efficace contro nemici senza scudi, richiede ottimo timing" },
  },

  // ──────────────────────────────────────────────
  // DIFENSORI
  // ──────────────────────────────────────────────

  143: { // Snorlax
    stats: { ps: 10400, atk: 345, def: 640, atksp: 116, defsp: 490, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Fortezza", desc: "Snorlax riduce i danni subiti da tutte le fonti del 10%. Quando il suo scudo è attivo, riduce i danni del 20% aggiuntivo. Genera uno scudo all'inizio di ogni scontro." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e stordendo brevemente il nemico colpito.", dmgBase: "100% Atk + 4 x (Livello - 1) + 0", dmgBoost: "145% Atk + 12 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Azione", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con tutto il peso, respingendolo." },
      { slot: 2, name: "Riposo", level: "1 o 3", cd: "8.00s", tags: ["Recupero", "Scudo"], desc: "Snorlax si addormenta e recupera HP, generando uno scudo durante il sonno." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Sbadiglio", level: 4, cd: "10.00s", tags: ["CC", "Area"], desc: "Emette un enorme sbadiglio che addormenta i nemici vicini. Lv.11: Area aumentata." },
        { name: "Blocco", level: 4, cd: "8.00s", tags: ["CC", "Area"], desc: "Blocca il percorso con il suo corpo, impedendo ai nemici di passare per alcuni secondi. Lv.11: Durata aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Pesobomba", level: 6, cd: "7.00s", tags: ["Scatto", "CC"], desc: "Si tuffa addosso ai nemici nell'area designata con tutto il suo peso, stordendoli. Lv.13: Area aumentata." },
        { name: "Flagello", level: 6, cd: "9.00s", tags: ["Area", "CC", "Danno"], desc: "Agita violentemente il corpo colpendo i nemici circostanti più volte. Lv.13: Danni e durata aumentati." },
      ]},
    ],
    unite: { name: "Sonnellino Reale", level: 9, desc: "Snorlax si addormenta nell'area, generando un potente scudo e infliggendo danni ai nemici circostanti. Al risveglio, lancia tutti i nemici vicini in aria." },
    builds: [
      { name: "Build: Muro Invalicabile", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Azione" }, { lv: 3, name: "Riposo" }, { lv: 4, name: "Blocco" }, { lv: 6, name: "Pesobomba" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
      { name: "Build: Scudo Totale", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Azione" }, { lv: 3, name: "Riposo" }, { lv: 4, name: "Sbadiglio" }, { lv: 6, name: "Flagello" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Barriera X" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Il miglior Difensore del gioco, CC continuo e devastante, scudo massiccio, blocco del percorso unico, eccellente protezione per gli alleati", weaknesses: "Lentissimo, danno basso, inutile senza alleati da proteggere, contro team mobili può essere aggirato" },
  },

  80: { // Slowbro
    stats: { ps: 9350, atk: 292, def: 480, atksp: 411, defsp: 420, crit: "0%", cd: "0%", life: "0%" },
    passive: { name: "Pigrizia", desc: "Quando Slowbro rientra in base, recupera HP extra proporzionali al tempo trascorso fuori. I suoi attacchi speciali rallentano i nemici colpiti per 1s aggiuntivo." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati e rallentando il nemico colpito.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 160" },
    moves: [
      { slot: 1, name: "Pistolacqua", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Spara un raggio psichico che confonde e rallenta il nemico colpito." },
      { slot: 2, name: "Pigrizia", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Rallentamento"], desc: "Lancia un getto d'acqua che rallenta i nemici." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Idrovampata", level: 4, cd: "7.00s", tags: ["Area", "CC"], desc: "Crea una zona psichica che rallenta tutti i nemici nell'area. Lv.11: Area aumentata." },
        { name: "Surf", level: 4, cd: "9.00s", tags: ["CC", "Lancio"], desc: "Solleva il nemico in aria con la telecinesi e lo sbatte a terra dopo 2s. Lv.11: Durata aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Amnesia", level: 6, cd: "8.00s", tags: ["Area", "CC"], desc: "Genera un'onda che spinge i nemici indietro e li rallenta. Lv.13: Area e forza aumentate." },
        { name: "Telecinesi", level: 6, cd: "10.00s", tags: ["Area", "CC", "Scudo"], desc: "Genera un campo psichico che stordisce i nemici vicini e genera uno scudo per gli alleati nell'area. Lv.13: Area e durata aumentati." },
      ]},
    ],
    unite: { name: "Sguardo Immobile", level: 9, desc: "Slowbro rallenta drasticamente il tempo per tutti i nemici nell'area, rendendoli quasi immobili per 4s mentre subiscono danni." },
    builds: [
      { name: "Build: Controllo Totale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Pigrizia" }, { lv: 4, name: "Surf" }, { lv: 6, name: "Telecinesi" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Raggeloluce" },
      { name: "Build: Surf Psichico", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Pigrizia" }, { lv: 4, name: "Idrovampata" }, { lv: 6, name: "Amnesia" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Eccellente CC, Telecinesi devastante in teamfight, ottima protezione degli alleati, passiva utile per il recupero", weaknesses: "Lento, dipende dal CC per avere impatto, meno resistente di Snorlax e Umbreon" },
  },

  558: { // Crustle
    stats: { ps: 9900, atk: 344, def: 640, atksp: 116, defsp: 460, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Conchivoglia", desc: "Crustle porta la sua roccia sulla schiena come armatura. Quando i PS scendono sotto il 50%, l'armatura si rompe liberando energia: ottiene un potenziamento temporaneo all'Attacco e alla velocità." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e piazzando una piccola roccia sul terreno.", dmgBase: "100% Atk + 4 x (Livello - 1) + 0", dmgBoost: "142% Atk + 12 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Frana", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Danno"], desc: "Taglia il nemico con la chela rocciosa infliggendo danni fisici." },
      { slot: 2, name: "Tagliofuria", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "CC"], desc: "Afferra il nemico con le chele e lo sbatte, stordendolo." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Gettaguscio", level: 4, cd: "6.00s", tags: ["Scatto", "Danno"], desc: "Attacca il nemico con entrambe le forbici in un colpo crociato. Lv.11: Danni aumentati." },
        { name: "Tombarocciata", level: 4, cd: "7.50s", tags: ["Area", "Danno"], desc: "Taglia in un arco ampio con entrambe le chele, colpendo più nemici. Lv.11: Area aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Levitoroccia", level: 6, cd: "9.00s", tags: ["Piazzamento", "CC"], desc: "Lancia massi che bloccano il percorso, intrappolando i nemici nell'area. Lv.13: Numero di massi aumentato." },
        { name: "Furia d'Incrocio", level: 6, cd: "10.00s", tags: ["Scudo", "Resistenza"], desc: "Entra in posizione difensiva massima assorbendo tutti i danni per 3s. Lv.13: Durata e resistenza aumentate." },
      ]},
    ],
    unite: { name: "Frantumaroccia", level: 9, desc: "Crustle scatena una frana enorme sull'area designata, bloccando il percorso e infliggendo danni enormi ai nemici." },
    builds: [
      { name: "Build: Muro di Roccia", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Frana" }, { lv: 3, name: "Tagliofuria" }, { lv: 4, name: "Tombarocciata" }, { lv: 6, name: "Levitoroccia" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
      { name: "Build: Corazza Totale", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Frana" }, { lv: 3, name: "Tagliofuria" }, { lv: 4, name: "Gettaguscio" }, { lv: 6, name: "Furia d'Incrocio" }],
        held: ["Cookie Aeos", "Barrierlente", "Elmo Pietroso"], battle: "Barriera X" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Ottimo per bloccare i percorsi con Frana, passiva fornisce burst sorprendente a bassa vita, buona resistenza", weaknesses: "Lento, poco CC rispetto a Snorlax e Slowbro, dipende dal posizionamento di Frana" },
  },

  820: { // Greedent
    stats: { ps: 9099, atk: 345, def: 540, atksp: 117, defsp: 460, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Scorpacciatarla", desc: "Greedent raccoglie bacche che incrementano le sue statistiche. Ogni bacca aumenta PS massimi, Attacco e Difesa. Può immagazzinare fino a 5 bacche contemporaneamente." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e lasciando cadere una bacca che Greedent può raccogliere.", dmgBase: "100% Atk + 4 x (Livello - 1) + 0", dmgBoost: "145% Atk + 12 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Azione", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Morde il nemico con i denti affilati, stordendolo brevemente." },
      { slot: 2, name: "Ricciolscudo", level: "1 o 3", cd: "8.00s", tags: ["Scatto", "CC"], desc: "Si arrotola e rotola verso i nemici, travolgendoli." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Semitraglia", level: 4, cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Attacca con i denti più volte di fila, infliggendo danni multipli. Lv.11: Numero di morsi aumentato." },
        { name: "Rutto", level: 4, cd: "7.00s", tags: ["Area", "CC"], desc: "Si getta con tutto il peso sui nemici, stordendo quelli nell'area. Lv.11: Area e durata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Guancegonfie", level: 6, cd: "9.00s", tags: ["Area", "Cura"], desc: "Rotola lanciando bacche in tutte le direzioni: curano Greedent se le raccoglie. Lv.13: Numero bacche aumentato." },
        { name: "Supplica", level: 6, cd: "7.00s", tags: ["Scatto", "CC"], desc: "Si lancia con tutta la forza su un nemico bloccandolo a terra. Lv.13: Durata blocco aumentata." },
      ]},
    ],
    unite: { name: "Panciata di Bacche", level: 9, desc: "Greedent inghiotte un numero enorme di bacche ottenendo un massiccio potenziamento temporaneo e poi scarica energia su tutti i nemici vicini." },
    builds: [
      { name: "Build: Accumulo Bacche", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Azione" }, { lv: 3, name: "Ricciolscudo" }, { lv: 4, name: "Semitraglia" }, { lv: 6, name: "Guancegonfie" }],
        held: ["Cookie Aeos", "Fisico di Ferro", "Elmo Pietroso"], battle: "Barriera X" },
      { name: "Build: Peso Stordente", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Azione" }, { lv: 3, name: "Ricciolscudo" }, { lv: 4, name: "Rutto" }, { lv: 6, name: "Supplica" }],
        held: ["Cookie Aeos", "Barrierlente", "Elmo Pietroso"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Passiva bacche unica per accumulo statistiche, molto resistente nel late game, auto-cura con Bacca Spin", weaknesses: "Dipende dall'accumulo di bacche per il massimo potenziale, lento, poco CC iniziale" },
  },

  709: { // Trevenant
    stats: { ps: 9599, atk: 330, def: 520, atksp: 117, defsp: 421, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Bosco Maledetto", desc: "Trevenant genera un campo di foresta oscura intorno a sé. Nemici nel campo subiscono danni continui e non possono fuggire facilmente. Alleati nel campo recuperano HP." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici di fantasma/erba aumentati e rallentando il nemico.", dmgBase: "100% Atk + 4 x (Livello - 1) + 0", dmgBoost: "148% Atk + 14 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fuocofatuo", level: "1 o 3", cd: "8.00s", tags: ["CC", "Danno nel Tempo"], desc: "Maledice il nemico infliggendo danni nel tempo e riducendo la sua velocità." },
      { slot: 2, name: "Ramopuntura", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Colpisce con rami fantasma che rallentano i nemici." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Mazzuolegno", level: 4, cd: "7.00s", tags: ["Area", "Drain"], desc: "Crea radici che assorbono gli HP dei nemici nell'area e le trasferisce a Trevenant. Lv.11: Recupero aumentato." },
        { name: "Maledizione", level: 4, cd: "9.00s", tags: ["Area", "CC"], desc: "Genera un campo di orrore che blocca e spaventa i nemici nell'area. Lv.11: Area e durata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Mazzuolcorno", level: 6, cd: "8.00s", tags: ["Scatto", "CC"], desc: "Si teletrasporta verso il nemico tramite i rami e lo blocca. Lv.13: Durata blocco aumentata." },
        { name: "Malcomune", level: 6, cd: "7.00s", tags: ["Area", "Danno"], desc: "Lancia rami appuntiti in tutte le direzioni infliggendo danni ai nemici vicini. Lv.13: Danni aumentati." },
      ]},
    ],
    unite: { name: "Foresta Spettrale", level: 9, desc: "Trevenant espande il suo campo boschivo all'intera area, intrappolando tutti i nemici e infliggendo danni enormi mentre cura gli alleati." },
    builds: [
      { name: "Build: Bosco Trappola", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Fuocofatuo" }, { lv: 3, name: "Ramopuntura" }, { lv: 4, name: "Maledizione" }, { lv: 6, name: "Mazzuolcorno" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Raggeloluce" },
      { name: "Build: Drain Foresta", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Fuocofatuo" }, { lv: 3, name: "Ramopuntura" }, { lv: 4, name: "Mazzuolegno" }, { lv: 6, name: "Malcomune" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Passiva bosco unica, ottimo controllo dell'area, drain HP eccellente, molto difficile da combattere nel suo campo", weaknesses: "Passiva richiede che i nemici restino nel campo, lento, poco burst" },
  },

  473: { // Mamoswine
    stats: { ps: 4700, atk: 136, def: 84, atksp: 38, defsp: 70, crit: "0%", cd: "0%", life: "0%" },
    passive: { name: "Robustezza", desc: "Mamoswine non può essere respinto o stordito dai nemici di livello inferiore. Le sue mosse di ghiaccio infliggono danni bonus ai nemici rallentati." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fisici aumentati e rallentando il nemico per 2s.", dmgBase: "100% Atk + 5 x (Livello - 1) + 0", dmgBoost: "152% Atk + 14 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Gelo-scheggia", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Si lancia verso il nemico con uno zampone che lo respinge." },
      { slot: 2, name: "Azione", level: "1 o 3", cd: "8.00s", tags: ["Area", "Rallentamento"], desc: "Emette nebbia gelata che rallenta tutti i nemici nell'area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Scagliagelo", level: 4, cd: "8.00s", tags: ["Area", "Congelamento"], desc: "Evoca una grandine di ghiaccio che congela i nemici nell'area. Lv.11: Area e durata congelamento aumentati." },
        { name: "Gelodenti", level: 4, cd: "6.00s", tags: ["Scatto", "Congelamento"], desc: "Si avvicina al nemico e lo colpisce con una zanna di ghiaccio, congelandolo. Lv.11: Durata congelamento aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Forza Equina", level: 6, cd: "9.00s", tags: ["Area", "CC"], desc: "Calpesta il terreno generando un'onda sismica che danneggia e rallenta i nemici. Lv.13: Area aumentata." },
        { name: "Terremoto", level: 6, cd: "7.00s", tags: ["Scatto", "CC"], desc: "Carica verso i nemici come una valanga di ghiaccio, respingendoli. Lv.13: Distanza e forza aumentate." },
      ]},
    ],
    unite: { name: "Pestone del Mammut", level: 9, desc: "Mamoswine genera una valanga di ghiaccio devastante che travolge tutti i nemici nell'area, congelandoli e infliggendo danni enormi." },
    builds: [
      { name: "Build: Valanga Gelata", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Gelo-scheggia" }, { lv: 3, name: "Azione" }, { lv: 4, name: "Scagliagelo" }, { lv: 6, name: "Forza Equina" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Raggeloluce" },
      { name: "Build: Zanna Corsa", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Gelo-scheggia" }, { lv: 3, name: "Azione" }, { lv: 4, name: "Gelodenti" }, { lv: 6, name: "Terremoto" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Passiva anti-CC unica, ottimo CC con congelamenti, eccellente initiation con Carica Ghiaccio, molto resistente", weaknesses: "Lento, dipende dai congelamenti per il massimo output, vulnerabile ai kite a distanza" },
  },

  9: { // Blastoise
    stats: { ps: 10300, atk: 292, def: 650, atksp: 412, defsp: 455, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Torrent", desc: "Quando i PS scendono sotto il 50%, la potenza delle mosse d'acqua aumenta del 30% e Blastoise genera uno scudo proporzionale ai danni subiti." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali d'acqua aumentati e respingendo il nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 160" },
    moves: [
      { slot: 1, name: "Pistolacqua", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Spara un getto d'acqua che respinge il nemico colpito." },
      { slot: 2, name: "Capocciata", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Rallentamento"], desc: "Spruzza acqua verso i nemici, rallentandoli." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Idropompa", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Genera un'onda enorme che spinge tutti i nemici indietro. Lv.11: Area e forza aumentate." },
        { name: "Zampillo", level: 4, cd: "10.00s", tags: ["Scudo", "Resistenza"], desc: "Ritrae nella corazza generando un enorme scudo d'acqua. Lv.11: Scudo aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Surf", level: 6, cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Spara un getto d'acqua potentissimo che spinge i nemici indietro. Lv.13: Danni e forza aumentati." },
        { name: "Rapigiro", level: 6, cd: "9.00s", tags: ["Area", "CC"], desc: "Crea un vortice d'acqua che aspira e rallenta i nemici nell'area. Lv.13: Area aumentata." },
      ]},
    ],
    unite: { name: "Tifone Idrico", level: 9, desc: "Blastoise spara tutti i cannoni ad acqua simultaneamente, generando un'enorme ondata che travolge i nemici e li lancia lontano." },
    builds: [
      { name: "Build: Onda Difensiva", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Capocciata" }, { lv: 4, name: "Idropompa" }, { lv: 6, name: "Surf" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Raggeloluce" },
      { name: "Build: Fortezza d'Acqua", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Capocciata" }, { lv: 4, name: "Zampillo" }, { lv: 6, name: "Rapigiro" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Ottimo push dei nemici con Surf, buona resistenza, passiva utile a bassa vita, buon CC d'acqua", weaknesses: "Meno CC immediato di Snorlax, dipende da Surf per l'iniziazione, poco burst" },
  },

  197: { // Umbreon
    stats: { ps: 9550, atk: 350, def: 560, atksp: 114, defsp: 450, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Sincronizzazione", desc: "Quando Umbreon subisce un'alterazione di stato, trasmette lo stesso effetto al nemico che l'ha causata. I vicini nemici subiscono danni oscuri continui." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni oscuri fisici aumentati e applicando un debuff di Att. Speciale al nemico.", dmgBase: "100% Atk + 4 x (Livello - 1) + 0", dmgBoost: "148% Atk + 14 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Cometapugno", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Graffia il nemico con artigli oscuri infliggendo danni fisici." },
      { slot: 2, name: "Falsalacrima", level: "1 o 3", cd: "8.00s", tags: ["Scatto", "Drain"], desc: "Assorbe gli HP del nemico con un tocco oscuro." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Malosguardo", level: 4, cd: "9.00s", tags: ["CC", "Riduzione"], desc: "Lancia un maleficio che riduce Attacco e velocità del nemico. Lv.11: Riduzione e durata aumentate." },
        { name: "Ripicca", level: 4, cd: "7.00s", tags: ["CC", "Area"], desc: "Emette un'aura spaventosa che paralizza temporaneamente tutti i nemici vicini. Lv.11: Area e durata aumentate." },
      ]},
      { slot: 2, choices: [
        { name: "Desiderio", level: 6, cd: "8.00s", tags: ["Area", "CC", "Cura"], desc: "Lancia un raggio lunare che infligge danni e cura Umbreon per ogni nemico colpito. Lv.13: Recupero aumentato." },
        { name: "Urlorabbia", level: 6, cd: "6.00s", tags: ["Scatto", "CC"], desc: "Morde il nemico con fauci oscure, stordendolo brevemente. Lv.13: Durata stordimento aumentata." },
      ]},
    ],
    unite: { name: "Danza Lunare", level: 9, desc: "Umbreon sprigiona una potente aura oscura che debuffa tutti i nemici vicini e li infligge di danni enormi nel tempo per 6s." },
    builds: [
      { name: "Build: Debuff Totale", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Falsalacrima" }, { lv: 4, name: "Malosguardo" }, { lv: 6, name: "Desiderio" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Raggeloluce" },
      { name: "Build: Aura Oscura", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Cometapugno" }, { lv: 3, name: "Falsalacrima" }, { lv: 4, name: "Ripicca" }, { lv: 6, name: "Urlorabbia" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Eccellente debuffer, passiva sincronizzazione unica, molto resistente, ideale per proteggere i carry e indebolire i nemici", weaknesses: "Basso danno offensivo, efficace principalmente come supporto-tank, dipende dalla presenza di carry da proteggere" },
  },

  131: { // Lapras
    stats: { ps: 9800, atk: 310, def: 625, atksp: 430, defsp: 512, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Copertura Acquatica", desc: "Lapras genera un campo d'acqua ghiacciata intorno a sé. I nemici nel campo sono rallentati del 20%. Alleati nel campo recuperano HP ogni secondo." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati e rallentando il nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 155" },
    moves: [
      { slot: 1, name: "Pistolacqua", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Spara un getto d'acqua che respinge il nemico." },
      { slot: 2, name: "Mulinello", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Congelamento"], desc: "Spara un raggio ghiacciato che congela il primo nemico colpito." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Gelo-raggio", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Genera un'onda che spinge i nemici indietro e li rallenta. Lv.11: Area e forza aumentate." },
        { name: "Liofilizzazione", level: 4, cd: "10.00s", tags: ["Area", "Sonno"], desc: "Canta una melodia addormentante che mette a dormire i nemici vicini. Lv.11: Area e durata aumentate." },
      ]},
      { slot: 2, choices: [
        { name: "Idropulsar", level: 6, cd: "11.00s", tags: ["Area", "Supporto"], desc: "Genera una nebbia che riduce la precisione dei nemici e cura gli alleati nell'area. Lv.13: Effetti aumentati." },
        { name: "Bolla-raggio", level: 6, cd: "9.00s", tags: ["Area", "Congelamento"], desc: "Crea una grandinata di ghiaccio che congela tutti i nemici nell'area. Lv.13: Danni e durata aumentati." },
      ]},
    ],
    unite: { name: "Lapras Express", level: 9, desc: "Lapras si gigantizza e genera un campo energetico enorme che infligge danni di ghiaccio/acqua e cura massivamente gli alleati nell'area." },
    builds: [
      { name: "Build: Canto Gelato", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Mulinello" }, { lv: 4, name: "Liofilizzazione" }, { lv: 6, name: "Idropulsar" }],
        held: ["Cookie Aeos", "Barrierlente", "Fisico di Ferro"], battle: "Raggeloluce" },
      { name: "Build: Surf e Nebbia", path: "Percorso Tank", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Mulinello" }, { lv: 4, name: "Gelo-raggio" }, { lv: 6, name: "Bolla-raggio" }],
        held: ["Cookie Aeos", "Elmo Pietroso", "Fisico di Ferro"], battle: "Barriera X" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Passiva cura alleati unica, ottimo CC con sonno e congelamenti, ibrido Difensore/Supporto molto utile in team", weaknesses: "Lento, dipende da Canto per il massimo impatto, meno pura resistenza di Snorlax" },
  },

  // ──────────────────────────────────────────────
  // SUPPORTO
  // ──────────────────────────────────────────────

  830: { // Eldegoss
    stats: { ps: 8002, atk: 310, def: 200, atksp: 670, defsp: 149, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Semiluce", desc: "Quando Eldegoss usa una mossa di cura, genera una nube di semi luminosi che curano periodicamente tutti gli alleati vicini per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali di erba aumentati e guarendo una piccola quantità di HP propri.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "32% AttSp + 8 x (Livello - 1) + 140" },
    moves: [
      { slot: 1, name: "Fogliame", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia foglie affilate verso il nemico designato." },
      { slot: 2, name: "Sintesi", level: "1 o 3", cd: "9.00s", tags: ["Area", "Supporto"], desc: "Genera una nebbia che riduce i danni subiti dagli alleati nell'area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Sferapollina", level: 4, cd: "7.00s", tags: ["Area", "Cura"], desc: "Lancia polline curativo nell'area che ripristina HP degli alleati. Lv.11: Recupero aumentato." },
        { name: "Fogliatempesta", level: 4, cd: "6.00s", tags: ["Proiettile", "Rallentamento"], desc: "Spara frutti erbosi verso i nemici rallentandoli e infliggendo danni. Lv.11: Danni e rallentamento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Cotonscudo", level: 6, cd: "10.00s", tags: ["Scudo", "Cura", "Supporto"], desc: "Lancia cuscinetti di cotone verso un alleato, scudandolo e curandolo. Lv.13: Scudo e cura aumentati." },
        { name: "Cotonspora", level: 6, cd: "9.00s", tags: ["Area", "CC", "Cura"], desc: "Genera una raffica di vento erboso che respinge i nemici e cura gli alleati nell'area. Lv.13: Forza e cura aumentate." },
      ]},
    ],
    unite: { name: "Atterraggio Morbido", level: 9, desc: "Eldegoss rilascia una nuvola dorata di polline curativo che cura massivamente tutti gli alleati nell'area per 5s." },
    builds: [
      { name: "Build: Cura Totale", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Fogliame" }, { lv: 3, name: "Sintesi" }, { lv: 4, name: "Sferapollina" }, { lv: 6, name: "Cotonscudo" }],
        held: ["Barrierlente", "Fisico di Ferro", "Campanello Conchiglia"], battle: "Pulsantefuga" },
      { name: "Build: Vento e Cura", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Fogliame" }, { lv: 3, name: "Sintesi" }, { lv: 4, name: "Fogliatempesta" }, { lv: 6, name: "Cotonspora" }],
        held: ["Barrierlente", "Cookie Aeos", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Cura costante e affidabile, facile da usare, ottimo per proteggere un carry adiacente", weaknesses: "Cura meno potente di Blissey e Comfey, poco CC, vulnerabile senza un alleato a proteggerlo" },
  },

  122: { // Mr. Mime
    stats: { ps: 9200, atk: 293, def: 480, atksp: 450, defsp: 420, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Barriera Psichica", desc: "Mr. Mime può posizionare barriere psichiche invisibili sul campo che bloccano il percorso dei nemici e assorbono i proiettili. Ogni mossa usata ripristina una barriera." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni psichici speciali aumentati e generando una piccola barriera davanti a sé.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "34% AttSp + 9 x (Livello - 1) + 150" },
    moves: [
      { slot: 1, name: "Bruciapelo", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Lancia un raggio psichico che confonde e rallenta il nemico." },
      { slot: 2, name: "Schermoluce", level: "1 o 3", cd: "9.00s", tags: ["Scudo", "Supporto"], desc: "Crea uno scudo psichico attorno a sé e agli alleati vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Confusione", level: 4, cd: "7.50s", tags: ["Area", "CC"], desc: "Crea un campo psichico che rallenta e respinge i nemici. Lv.11: Area e forza aumentate." },
        { name: "Psichico", level: 4, cd: "9.00s", tags: ["Area", "Silenziamento"], desc: "Crea una zona di silenzio assoluto che impedisce ai nemici di usare mosse. Lv.11: Durata aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Barriera", level: 6, cd: "11.00s", tags: ["Piazzamento", "Scudo"], desc: "Posiziona una barriera fisica sul campo che blocca completamente il percorso. Lv.13: Resistenza e durata aumentate." },
        { name: "Vigorscambio", level: 6, cd: "10.00s", tags: ["Scudo", "Potenziamento"], desc: "Crea un duplicato di sé stesso che assorbe i danni al posto suo. Lv.13: Durata duplicato aumentata." },
      ]},
    ],
    unite: { name: "È l'ora dello show!", level: 9, desc: "Mr. Mime crea un labirinto di barriere psichiche intorno ai nemici, imprigionandoli e infliggendo danni psichici enormi." },
    builds: [
      { name: "Build: Barriera Controllo", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Bruciapelo" }, { lv: 3, name: "Schermoluce" }, { lv: 4, name: "Psichico" }, { lv: 6, name: "Barriera" }],
        held: ["Barrierlente", "Fisico di Ferro", "Campanello Conchiglia"], battle: "Raggeloluce" },
      { name: "Build: Silenzio Psichico", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Bruciapelo" }, { lv: 3, name: "Schermoluce" }, { lv: 4, name: "Confusione" }, { lv: 6, name: "Vigorscambio" }],
        held: ["Barrierlente", "Cookie Aeos", "Fisico di Ferro"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Barriere uniche per bloccare il percorso, Vuoto Totale devastante in teamfight, buona protezione degli alleati", weaknesses: "Richiede ottimo posizionamento delle barriere, meno cura di Blissey, vulnerabile in scontri aperti" },
  },

  40: { // Wigglytuff
    stats: { ps: 9452, atk: 310, def: 539, atksp: 552, defsp: 482, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Aria Beffarda", desc: "Il canto di Wigglytuff riduce l'Attacco dei nemici nelle vicinanze del 10%. Dopo aver usato una mossa di sonno, ottiene un boost di velocità e le sue mosse curano gli alleati per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali fata aumentati e generando uno scudo per Wigglytuff.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "33% AttSp + 9 x (Livello - 1) + 145" },
    moves: [
      { slot: 1, name: "Botta", level: "1 o 3", cd: "8.00s", tags: ["Area", "Sonno"], desc: "Canta una melodia che addormenta i nemici vicini." },
      { slot: 2, name: "Ricciolscudo", level: "1 o 3", cd: "9.00s", tags: ["Supporto"], desc: "Copia la mossa dell'alleato più vicino per usarla una volta." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Doubleschaffo", level: 4, cd: "8.00s", tags: ["Area", "CC", "Cura"], desc: "Suona un sonaglio che stordisce i nemici e cura gli alleati nell'area. Lv.11: Area e cura aumentate." },
        { name: "Magibrillio", level: 4, cd: "10.00s", tags: ["CC", "Sonno"], desc: "Addormenta profondamente il nemico designato per un lungo periodo. Lv.11: Durata aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Canto", level: 6, cd: "11.00s", tags: ["CC", "Attrazione"], desc: "Attira i nemici verso di sé con il suo fascino, immobilizzandoli brevemente. Lv.13: Raggio e durata aumentati." },
        { name: "Rotolamento", level: 6, cd: "9.00s", tags: ["Area", "CC"], desc: "Lancia un'onda che infligge danni e riduce le statistiche dei nemici nell'area. Lv.13: Area aumentata." },
      ]},
    ],
    unite: { name: "Recital Stellare", level: 9, desc: "Wigglytuff si gonfia e rilascia un'esplosione di energia fata che addormenta i nemici e cura gli alleati nell'intera area." },
    builds: [
      { name: "Build: Sonno Totale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Ricciolscudo" }, { lv: 4, name: "Magibrillio" }, { lv: 6, name: "Canto" }],
        held: ["Barrierlente", "Fisico di Ferro", "Campanello Conchiglia"], battle: "Raggeloluce" },
      { name: "Build: Supporto Combo", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Ricciolscudo" }, { lv: 4, name: "Doubleschaffo" }, { lv: 6, name: "Rotolamento" }],
        held: ["Barrierlente", "Cookie Aeos", "Fisico di Ferro"], battle: "Pulsantefuga" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Eccellente CC con sonno e allettamento, buona protezione, passiva debuff passivo sui nemici vicini", weaknesses: "Meno cura pura di Blissey, richiede buon timing del sonno per il massimo impatto" },
  },

  242: { // Blissey
    stats: { ps: 10000, atk: 310, def: 200, atksp: 600, defsp: 300, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Cura Naturale", desc: "Blissey recupera HP ogni secondo. Il recupero è raddoppiato quando è a meno del 50% di HP. Ogni mossa usata cura anche l'alleato vicino con meno HP." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni speciali aumentati e curando l'alleato più vicino di una piccola quantità di HP.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "30% AttSp + 8 x (Livello - 1) + 130" },
    moves: [
      { slot: 1, name: "Botta", level: "1 o 3", cd: "8.00s", tags: ["CC", "Sonno"], desc: "Bacia il nemico addormentandolo brevemente." },
      { slot: 2, name: "Ondasana", level: "1 o 3", cd: "9.00s", tags: ["Cura", "Supporto"], desc: "Cura un alleato vicino e aumenta le sue statistiche per 5s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Uovobomba", level: 4, cd: "9.00s", tags: ["Cura", "Scudo"], desc: "Lancia un uovo morbido verso un alleato che lo cura e gli genera uno scudo. Lv.11: Cura e scudo aumentati." },
        { name: "Altruismo", level: 4, cd: "8.00s", tags: ["Riduzione", "Area"], desc: "Riduce le statistiche di tutti i nemici nell'area. Lv.11: Riduzione e area aumentate." },
      ]},
      { slot: 2, choices: [
        { name: "Covauova", level: 6, cd: "11.00s", tags: ["Cura", "Resurrezione"], desc: "Cura massivamente un alleato gravemente ferito e rimuove le sue alterazioni di stato. Lv.13: Recupero aumentato." },
        { name: "Salvaguardia", level: 6, cd: "10.00s", tags: ["Cura", "Area", "Supporto"], desc: "Guarisce tutti gli alleati nell'area e rimuove le loro alterazioni di stato. Lv.13: Area e cura aumentate." },
      ]},
    ],
    unite: { name: "Blissey ai Ripari", level: 9, desc: "Blissey condivide tutta la sua felicità curando massivamente tutti gli alleati nelle vicinanze e potenziando le loro statistiche per 6s." },
    builds: [
      { name: "Build: Healer Puro", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Ondasana" }, { lv: 4, name: "Uovobomba" }, { lv: 6, name: "Covauova" }],
        held: ["Barrierlente", "Cookie Aeos", "Campanello Conchiglia"], battle: "Pulsantefuga" },
      { name: "Build: Terapia d'Area", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Ondasana" }, { lv: 4, name: "Altruismo" }, { lv: 6, name: "Salvaguardia" }],
        held: ["Barrierlente", "Fisico di Ferro", "Cookie Aeos"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Il miglior healer del gioco, cura singola e d'area potentissima, passiva recupero HP continuo, ottimo per proteggere qualsiasi carry", weaknesses: "Quasi nessun danno offensivo, dipende completamente dagli alleati, vulnerabile se lasciato solo" },
  },

  720: { // Hoopa
    stats: { ps: 7902, atk: 309, def: 299, atksp: 619, defsp: 200, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Inganno del Portale", desc: "Hoopa può aprire portali dimensionali sul campo. Gli alleati possono teletrasportarsi attraverso i portali di Hoopa. I nemici che attraversano i portali subiscono danni." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni psichici speciali aumentati e aprendo un mini portale che spara un proiettile extra.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 158" },
    moves: [
      { slot: 1, name: "Sbigottimento", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Area"], desc: "Lancia una bomba psichica che esplode colpendo i nemici vicini." },
      { slot: 2, name: "Confusione", level: "1 o 3", cd: "9.00s", tags: ["Portale", "Supporto"], desc: "Apre un portale oscuro che consente agli alleati di teletrasportarsi." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Foro Dimensional", level: 4, cd: "7.00s", tags: ["Area", "CC"], desc: "Crea un campo psichico potenziato che rallenta i nemici. Lv.11: Area e rallentamento aumentati." },
        { name: "Prestigio", level: 4, cd: "9.00s", tags: ["Area", "CC"], desc: "Apre una rift dimensionale che intrappola i nemici nell'area. Lv.11: Area e durata aumentate." },
      ]},
      { slot: 2, choices: [
        { name: "Spettrotuffo", level: 6, cd: "12.00s", tags: ["Portale", "Supporto"], desc: "Apre portali bidirezionali: gli alleati possono attraversarli in entrambe le direzioni. Lv.13: Raggio dei portali aumentato." },
        { name: "Palla Ombra", level: 6, cd: "10.00s", tags: ["Area", "CC", "Danno"], desc: "Crea un anello oscuro che danneggia e rallenta i nemici all'interno. Lv.13: Area e danni aumentati." },
      ]},
    ],
    unite: { name: "Cerchi Liberati", level: 9, desc: "Hoopa apre un portale enorme che aspira i nemici dentro e li sputa via infliggendo danni enormi, poi teletrasporta tutti gli alleati vicini in posizione sicura." },
    builds: [
      { name: "Build: Portale Tattico", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Confusione" }, { lv: 4, name: "Foro Dimensional" }, { lv: 6, name: "Spettrotuffo" }],
        held: ["Barrierlente", "Cookie Aeos", "Fisico di Ferro"], battle: "Pulsantefuga" },
      { name: "Build: Controllo Oscuro", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Confusione" }, { lv: 4, name: "Prestigio" }, { lv: 6, name: "Palla Ombra" }],
        held: ["Lente Astuta", "Barrierlente", "Amplienergia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Portali unici per riposizionare i team, eccellente per rotazioni rapide, ottimo CC con Spazio Oscuro, game-changing se usato bene", weaknesses: "Meccanica portali richiede molta esperienza e coordinazione con il team, fragile se scoperto" },
  },

  36: { // Clefable
    stats: { ps: 9000, atk: 300, def: 300, atksp: 670, defsp: 330, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Magia Guaritrice", desc: "Le mosse di cura di Clefable hanno un'efficacia aumentata del 20%. Ogni volta che cura un alleato, ottiene un bonus di velocità di movimento per 2s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni fata speciali aumentati e curando una piccola quantità di HP propri.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "32% AttSp + 9 x (Livello - 1) + 142" },
    moves: [
      { slot: 1, name: "Botta", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Multiplo"], desc: "Colpisce il nemico due volte con le zampette." },
      { slot: 2, name: "Ondasana", level: "1 o 3", cd: "9.00s", tags: ["Cura", "Supporto"], desc: "Canta una melodia lunare che cura Clefable e gli alleati vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fidofonte", level: 4, cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Lancia una sfera di energia lunare che rallenta i nemici sul percorso. Lv.11: Rallentamento e danni aumentati." },
        { name: "Assorbabacio", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Evoca meteoriti che cadono sull'area designata rallentando i nemici. Lv.11: Numero di meteoriti aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Gravità", level: 6, cd: "11.00s", tags: ["Cura", "Area", "Scudo"], desc: "Genera un campo lunare che cura tutti gli alleati nell'area e li scuda per 3s. Lv.13: Cura e scudo aumentati." },
        { name: "Sonoqui", level: 6, cd: "10.00s", tags: ["Area", "CC", "Supporto"], desc: "Lancia polvere magica che paralizza i nemici e aumenta le statistiche degli alleati nell'area. Lv.13: Durata aumentata." },
      ]},
    ],
    unite: { name: "Desiderio Fatato", level: 9, desc: "Clefable canalizza l'energia della luna e cura massivamente tutti gli alleati nell'area mentre infligge danni fata ai nemici." },
    builds: [
      { name: "Build: Cura Lunare", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Ondasana" }, { lv: 4, name: "Fidofonte" }, { lv: 6, name: "Gravità" }],
        held: ["Barrierlente", "Cookie Aeos", "Campanello Conchiglia"], battle: "Pulsantefuga" },
      { name: "Build: Polvere e Meteoriti", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Botta" }, { lv: 3, name: "Ondasana" }, { lv: 4, name: "Assorbabacio" }, { lv: 6, name: "Sonoqui" }],
        held: ["Barrierlente", "Fisico di Ferro", "Cookie Aeos"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Buona cura degli alleati, discreta combo di CC, passiva cura potenziata, facile da usare per principianti nel ruolo", weaknesses: "Cura inferiore a Blissey e Comfey, meno CC di Hoopa e Wigglytuff, poco impatto da solo" },
  },

  764: { // Comfey
    stats: { ps: 5900, atk: 290, def: 250, atksp: 650, defsp: 220, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Triage", desc: "Comfey può agganciarsi a un alleato e condividere tutti gli effetti delle sue mosse con lui. Le mosse di cura usate mentre è agganciato hanno priorità massima e costo ridotto." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: se agganciato a un alleato, lo cura. Se non agganciato, infligge danni fata speciali aumentati.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "30% AttSp + 8 x (Livello - 1) + 130" },
    moves: [
      { slot: 1, name: "Sintesi", level: "1 o 3", cd: "6.00s", tags: ["Proiettile"], desc: "Lancia foglie fiorite verso il nemico infliggendo danni." },
      { slot: 2, name: "Fogliamagica", level: "1 o 3", cd: "8.00s", tags: ["Cura", "Supporto"], desc: "Cura l'alleato a cui è agganciata o, se sola, sé stessa." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Cura Floreale", level: 4, cd: "8.00s", tags: ["Area", "Cura"], desc: "Danza rilasciando petali curativi che guariscono gli alleati nell'area. Lv.11: Cura aumentata." },
        { name: "Laccioerboso", level: 4, cd: "6.00s", tags: ["Proiettile", "CC"], desc: "Lancia spine floreali che rallentano i nemici sul percorso. Lv.11: Danni e rallentamento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Dolcebacio", level: 6, cd: "10.00s", tags: ["Cura", "Rimozione CC"], desc: "Cura massivamente l'alleato agganciato e rimuove tutte le sue alterazioni di stato. Lv.13: Recupero aumentato." },
        { name: "Fogliamagica", level: 6, cd: "9.00s", tags: ["Area", "Cura", "Potenziamento"], desc: "Rilascia polline benefico che cura e potenzia le statistiche di tutti gli alleati nell'area. Lv.13: Effetti aumentati." },
      ]},
    ],
    unite: { name: "Carezza Floreale", level: 9, desc: "Comfey esplode in una piena fioritura, curando massivamente tutti gli alleati e potenziando le loro statistiche per 8s." },
    builds: [
      { name: "Build: Agganciata al Carry", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Sintesi" }, { lv: 3, name: "Fogliamagica" }, { lv: 4, name: "Cura Floreale" }, { lv: 6, name: "Dolcebacio" }],
        held: ["Barrierlente", "Cookie Aeos", "Campanello Conchiglia"], battle: "Pulsantefuga",
        note: "Agganciati sempre al carry principale della tua squadra per il massimo impatto." },
      { name: "Build: Supporto d'Area", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Sintesi" }, { lv: 3, name: "Fogliamagica" }, { lv: 4, name: "Laccioerboso" }, { lv: 6, name: "Fogliamagica" }],
        held: ["Barrierlente", "Fisico di Ferro", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Meccanica di aggancio unica, cura potenziata in modo eccezionale, Profumoterapia rimuove il CC salvando i carry, il miglior supporto in coppia con un carry forte", weaknesses: "Completamente dipendente dagli alleati, inutile da solo, richiede coordinazione e comunicazione col team" },
  },

  302: { // Sableye
    stats: { ps: 6900, atk: 300, def: 200, atksp: 120, defsp: 150, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Prankster", desc: "Le mosse non-danno di Sableye (come CC e supporto) hanno priorità aumentata. Sableye vede sempre i nemici nascosti nelle zone d'erba. Il primo attacco su un nemico ignora parte della sua difesa." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, infliggendo danni oscuri fisici aumentati e rubando breve­mente la visuale del nemico.", dmgBase: "100% Atk + 4 x (Livello - 1) + 0", dmgBoost: "148% Atk + 14 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Furto", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Graffia il nemico con artigli di gemma oscura infliggendo danni." },
      { slot: 2, name: "Sbigottimento", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "Bruciatura"], desc: "Lancia pallottole di fuoco fatuo che bruciano i nemici." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Privazione", level: 4, cd: "9.00s", tags: ["CC", "Supporto"], desc: "Rivela tutti i nemici nell'area e riduce le loro statistiche. Lv.11: Area e riduzione aumentate." },
        { name: "Furtivombra", level: 4, cd: "6.00s", tags: ["Proiettile", "Multiplo"], desc: "Lancia gemme preziose verso i nemici infliggendo danni multipli. Lv.11: Numero di gemme aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Stordiraggio", level: 6, cd: "10.00s", tags: ["Area", "CC"], desc: "Lancia polvere tossica che paralizza e avvelena i nemici nell'area. Lv.13: Area e durata aumentate." },
        { name: "Fintoattacco", level: 6, cd: "8.00s", tags: ["CC", "Danno"], desc: "Beffa il nemico scambiando le sue statistiche di Attacco e Difesa per 5s. Lv.13: Durata aumentata." },
      ]},
    ],
    unite: { name: "Sguardo Caotico", level: 9, desc: "Sableye diventa incorporeo e attacca i nemici con un diluvio di gemme preziose, infliggendo danni e riducendo le loro statistiche per 6s." },
    builds: [
      { name: "Build: Disturbo Tattico", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Furto" }, { lv: 3, name: "Sbigottimento" }, { lv: 4, name: "Privazione" }, { lv: 6, name: "Stordiraggio" }],
        held: ["Barrierlente", "Pietra Levitante", "Fisico di Ferro"], battle: "Pulsantefuga" },
      { name: "Build: Polvere e Gemme", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Furto" }, { lv: 3, name: "Sbigottimento" }, { lv: 4, name: "Furtivombra" }, { lv: 6, name: "Fintoattacco" }],
        held: ["Pietra Levitante", "Amplienergia", "Fisico di Ferro"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Jungla", strengths: "Visione dei nemici nascosti unica, ottimo disturbo delle statistiche avversarie, utile per il rilevamento e il controllo dell'erba", weaknesses: "Basso danno, poco impatto diretto nei teamfight, richiede giocatori esperti per sfruttarne le meccaniche" },
  },

  491: { // Darkrai
    stats: { ps: 7500, atk: 360, def: 350, atksp: 720, defsp: 260, crit: "0%", cd: "20%", life: "0%" },
    passive: { name: "Brutto Sogno", desc: "Darkrai infligge danni bonus ai nemici addormentati o in stato di incubo. I nemici colpiti da questo effetto subiscono danni nel tempo per 3s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, proiettando ombre oscure che causano addormentamento brevissimo al nemico.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "42% AttSp + 12 x (Livello - 1) + 180" },
    moves: [
      { slot: 1, name: "Neropulsar", level: "1 o 3", cd: "5.00s", tags: ["Proiettile", "Danno"], desc: "Lancia un raggio d'ombra verso il nemico infliggendo danni speciali. Riduce temporaneamente le statistiche dei nemici colpiti." },
      { slot: 2, name: "Palla Ombra", level: "1 o 3", cd: "8.00s", tags: ["Scudo", "Mobilità"], desc: "Darkrai si nasconde nell'ombra diventando temporaneamente invisibile e aumentando la propria velocità di movimento." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Vuototetro", level: 4, cd: "7.00s", tags: ["CC", "Danno continuo"], desc: "Addormenta il nemico bersaglio infliggendo danni nel tempo per la durata del sonno. Lv.11: Durata e danni aumentati." },
        { name: "Incubo", level: 4, cd: "6.00s", tags: ["Proiettile", "Area"], desc: "Lancia una sfera di oscurità che esplode all'impatto, infliggendo danni ad area. Lv.11: Esplosione più grande." },
      ]},
      { slot: 2, choices: [
        { name: "Congiura", level: 6, cd: "10.00s", tags: ["Invisibilità", "Posizionamento"], desc: "Darkrai si dissolve nell'ombra e riappare in un punto designato con un bonus di danno al prossimo attacco. Lv.13: Danno bonus aumentato." },
        { name: "Doppioteam", level: 6, cd: "9.00s", tags: ["Scudo", "Area"], desc: "Crea un velo d'oscurità attorno a Darkrai che assorbe danni e rallenta i nemici vicini. Lv.13: Scudo e rallentamento potenziati." },
      ]},
    ],
    unite: { name: "Incubo Eterno", level: 9, desc: "Darkrai avvolge l'intera area in una coltre di incubi, addormentando tutti i nemici visibili e infliggendo danni massicci per 6s." },
    builds: [
      { name: "Build: Carry dell'Incubo", path: "Percorso Incubo", moveLevels: [{ lv: 1, name: "Neropulsar" }, { lv: 3, name: "Palla Ombra" }, { lv: 4, name: "Vuototetro" }, { lv: 6, name: "Congiura" }],
        held: ["Amplienergia", "Occhiali Saggio", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Massimizza i danni sui nemici addormentati con Incubo: il burst è devastante." },
      { name: "Build: Controllo Oscuro", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Neropulsar" }, { lv: 3, name: "Palla Ombra" }, { lv: 4, name: "Incubo" }, { lv: 6, name: "Doppioteam" }],
        held: ["Amplienergia", "Occhiali Saggio", "Fisico di Ferro"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Jungla", strengths: "Addormentamento devastante, danno speciale altissimo, ottimo in fight ravvicinati con Incubo, passivo che moltiplica il danno su nemici dormienti", weaknesses: "Fragile se scoperto, richiede timing perfetto sull'addormentamento, scarso impatto senza Incubo attivo" },
  },

  381: { // Latios
    stats: { ps: 6200, atk: 310, def: 260, atksp: 900, defsp: 291, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Levitate", desc: "Latios è immune agli effetti delle trappole a terra e ai danni da terreno. Riduce del 20% i danni subiti dagli attacchi base nemici." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, sparando un proiettile psico-drago che attraversa i nemici.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 10 x (Livello - 1) + 160" },
    moves: [
      { slot: 1, name: "Abbagliante", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Danno"], desc: "Lancia un vento dragonico verso i nemici che infligge danni e rallenta i bersagli colpiti." },
      { slot: 2, name: "Dragospiro", level: "1 o 3", cd: "8.00s", tags: ["Area", "CC"], desc: "Genera una forza psichica intorno a Latios che respinge e stordisce i nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Zuccata Zen", level: 4, cd: "8.00s", tags: ["Proiettile", "Congelamento"], desc: "Spara un proiettile di ghiaccio draconico che congela il primo nemico colpito. Lv.11: Danni e durata congelamento aumentati." },
        { name: "Ripresa", level: 4, cd: "6.00s", tags: ["Proiettile", "Multiplo"], desc: "Latios spara tre raggi lucenti in rapida successione. Lv.11: Numero di colpi aumentato a cinque." },
      ]},
      { slot: 2, choices: [
        { name: "Dragopulsar", level: 6, cd: "9.00s", tags: ["Area", "Danno"], desc: "Scatena un'esplosione psichica ad area ampia intorno a Latios. Lv.13: Area e danni aumentati." },
        { name: "Psicoshock", level: 6, cd: "11.00s", tags: ["Mobilità", "Scudo"], desc: "Latios compie un volo veloce verso la destinazione, ottenendo uno scudo temporaneo al termine." },
      ]},
    ],
    unite: { name: "Ali di Latios", level: 9, desc: "Latios emette un potentissimo raggio drago che attraversa l'intera area di gioco, infliggendo danni enormi a tutti i nemici colpiti." },
    builds: [
      { name: "Build: Raggio Puro", path: "Percorso Distanza", moveLevels: [{ lv: 1, name: "Abbagliante" }, { lv: 3, name: "Dragospiro" }, { lv: 4, name: "Zuccata Zen" }, { lv: 6, name: "Dragopulsar" }],
        held: ["Amplienergia", "Occhiali Saggio", "Nocciola Enerbia"], battle: "Pulsantescatto" },
      { name: "Build: Mobilità e Burst", path: "Percorso Agilità", moveLevels: [{ lv: 1, name: "Abbagliante" }, { lv: 3, name: "Dragospiro" }, { lv: 4, name: "Ripresa" }, { lv: 6, name: "Psicoshock" }],
        held: ["Amplienergia", "Occhiali Saggio", "Pietra Levitante"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore / Corsia Inferiore", strengths: "Danno speciale consistente a distanza, immunità ai terreni, buona mobilità con Volo Etereo, ottimo poke nella corsia", weaknesses: "Bassa resistenza, richiede buon posizionamento, vulnerabile al burst ravvicinato" },
  },

  936: { // Armarouge
    stats: { ps: 7200, atk: 350, def: 300, atksp: 700, defsp: 240, crit: "0%", cd: "20%", life: "0%" },
    passive: { name: "Armatura Bellica", desc: "Armarouge trasforma le proprie braccia in cannoni potenziando le mosse speciali. Ogni mossa offensiva accumulata riduce il cooldown della mossa successiva del 10%." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, sparando un proiettile di fuoco psichico che infligge danni speciali aumentati.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "40% AttSp + 11 x (Livello - 1) + 170" },
    moves: [
      { slot: 1, name: "Braciere", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Bruciatura"], desc: "Spara un getto di fiamme psichiche verso i nemici, infliggendo danni e bruciando i colpiti." },
      { slot: 2, name: "Fuocofatuo", level: "1 o 3", cd: "9.00s", tags: ["Area", "Esplosione"], desc: "Lancia una bomba psichica che esplode causando danni ad area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Corazzaluna", level: 4, cd: "8.00s", tags: ["Area", "Danno"], desc: "Evoca pioggia di meteoriti infuocati su un'area designata. Lv.11: Numero di meteoriti e danni aumentati." },
        { name: "Turbofuoco", level: 4, cd: "6.50s", tags: ["Proiettile", "Penetrante"], desc: "Spara un proiettile ignifugo che attraversa tutti i nemici sulla traiettoria. Lv.11: Danni e lunghezza aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Nitrocarica", level: 6, cd: "10.00s", tags: ["Scudo", "Danno di ritorno"], desc: "Armarouge si avvolge in un'armatura ignea che assorbe danni e li riflette parzialmente. Lv.13: Scudo e danno riflesso aumentati." },
        { name: "Psicoshock", level: 6, cd: "9.00s", tags: ["Proiettile", "Stordimento"], desc: "Carica e spara un potente colpo psichico che stordisce il nemico colpito. Lv.13: Stordimento più lungo." },
      ]},
    ],
    unite: { name: "Esplosione Psico-X", level: 9, desc: "Armarouge concentra tutta la sua energia psico-ignea e scatena un'esplosione devastante su vasta area, infliggendo danni enormi e bruciando tutti i nemici colpiti per 5s." },
    builds: [
      { name: "Build: Cannone Fuoco", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Fuocofatuo" }, { lv: 4, name: "Corazzaluna" }, { lv: 6, name: "Nitrocarica" }],
        held: ["Amplienergia", "Occhiali Saggio", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Ottima combo: Cannone Psichico per stordire + Meteorarrosto per danno ad area." },
      { name: "Build: Tank Offensivo", path: "Percorso Resistente", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Fuocofatuo" }, { lv: 4, name: "Turbofuoco" }, { lv: 6, name: "Psicoshock" }],
        held: ["Amplienergia", "Fisico di Ferro", "Nocciola Enerbia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Eccellente danno ad area, buona sopravvivenza con Armatura Fuoco, passivo che riduce i cooldown, forte nei teamfight", weaknesses: "Mobilità limitata, richiede buon posizionamento per massimizzare i danni ad area, perde efficacia contro nemici mobili" },
  },

  10035: { // Mega Charizard Y
    stats: { ps: 7700, atk: 462, def: 400, atksp: 115, defsp: 320, crit: "30%", cd: "0%", life: "15%" },
    passive: { name: "Siccità", desc: "Mega Charizard Y potenzia le mosse Fuoco di tutta la squadra del 10%. Le proprie mosse Fuoco infliggono danni del 20% superiori. Il sole ardente aumenta la rigenerazione di PS." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, sputando una sfera di fuoco mega-potenziata che brucia il nemico per 3s.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "45% AttSp + 14 x (Livello - 1) + 200" },
    moves: [
      { slot: 1, name: "Fiammata", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Bruciatura"], desc: "Lancia una sfera di fuoco sacro che brucia gravemente i nemici colpiti e lascia fiamme a terra." },
      { slot: 2, name: "Turbofuoco", level: "1 o 3", cd: "8.00s", tags: ["Cono", "Danno"], desc: "Sputa un vasto cono di fiamme draghe davanti a sé, infliggendo danni a tutti i nemici nell'area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Lanciafiamme", level: 4, cd: "7.00s", tags: ["Raggio", "Bruciatura"], desc: "Emette un raggio di fuoco continuo per 3s che brucia tutto ciò che tocca. Lv.11: Durata e danno al secondo aumentati." },
        { name: "Fuocopugno", level: 4, cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Mega Charizard Y scatta in avanti con le ali fiammanti, danneggiando i nemici nel percorso. Lv.11: Danno e distanza aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Fuocobomba", level: 6, cd: "12.00s", tags: ["Area", "Danno massiccio"], desc: "Sale in alto e scende con un bombardamento solare devastante su ampia area. Lv.13: Area e danni potenziati." },
        { name: "Fuococarica", level: 6, cd: "10.00s", tags: ["Scudo", "Danno di ritorno"], desc: "Si avvolge in un mantello di fiamme che assorbe danni e li converte in ulteriori attacchi infuocati. Lv.13: Scudo maggiore." },
      ]},
    ],
    unite: { name: "Megaevoluzione", level: 9, desc: "Mega Charizard Y sale in cielo e scatena un'inferno di fuoco su tutta la mappa, infliggendo danni catastrofici ad area enorme e bruciando tutti i nemici per 8s." },
    builds: [
      { name: "Build: Fuoco Supremo", path: "Percorso Fuoco", moveLevels: [{ lv: 1, name: "Fiammata" }, { lv: 3, name: "Turbofuoco" }, { lv: 4, name: "Lanciafiamme" }, { lv: 6, name: "Fuocobomba" }],
        held: ["Amplienergia", "Occhiali Saggio", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Il carry da distanza definitivo: Mega Lanciafiamme + Volo Solare spazzano via i teamfight." },
      { name: "Build: Resistenza Ignea", path: "Percorso Sopravvivenza", moveLevels: [{ lv: 1, name: "Fiammata" }, { lv: 3, name: "Turbofuoco" }, { lv: 4, name: "Fuocopugno" }, { lv: 6, name: "Fuococarica" }],
        held: ["Amplienergia", "Fisico di Ferro", "Nocciola Enerbia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Danno speciale fuoco elevatissimo, passivo che potenzia l'intera squadra, ottimo nella fase tarda, devastante nei teamfight aperti", weaknesses: "Forma mega richiede tempo per raggiungere il pieno potenziale, vulnerabile al burst precoce, mobilità limitata" },
  },

  10044: { // Mega Mewtwo Y
    stats: { ps: 6800, atk: 116, def: 250, atksp: 830, defsp: 230, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Pressione Psichica", desc: "La semplice presenza di Mega Mewtwo Y riduce la rigenerazione di PS dei nemici vicini del 50%. Ogni mossa infligge un debuff di concentrazione riducendo l'accuratezza nemica." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato, scatenando un'esplosione psichica che infligge danni ingenti e riduce la velocità di movimento nemica.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "48% AttSp + 15 x (Livello - 1) + 220" },
    moves: [
      { slot: 1, name: "Tuonoshock", level: "1 o 3", cd: "5.00s", tags: ["Proiettile", "Danno"], desc: "Lancia un devastante raggio psichico che attraversa tutti i nemici sulla linea, infliggendo danni enormi." },
      { slot: 2, name: "Raggioscossa", level: "1 o 3", cd: "10.00s", tags: ["Scudo", "Riflessione"], desc: "Crea una barriera mentale che assorbe danni e riflette i proiettili nemici per 2s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Saetta Fulminante", level: 4, cd: "7.00s", tags: ["Area", "Stordimento"], desc: "Mega Mewtwo Y scatena un'esplosione psichica ad area che stordisce tutti i nemici colpiti. Lv.11: Area e stordimento aumentati." },
        { name: "Tuono", level: 4, cd: "9.00s", tags: ["Auto-potenziamento"], desc: "Aumenta drasticamente l'AttSp di Mega Mewtwo Y per 6s. Lv.11: Bonus e durata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Carica Parabolica", level: 6, cd: "12.00s", tags: ["Cura"], desc: "Mega Mewtwo Y recupera un'enorme quantità di PS usando l'energia psichica. Lv.13: Cura aumentata." },
        { name: "Manovra Derapata", level: 6, cd: "8.00s", tags: ["Proiettile", "Penetrante"], desc: "Scaglia un gigantesco proiettile psichico che attraversa l'intera area di gioco. Lv.13: Danno massiccio aumentato." },
      ]},
    ],
    unite: { name: "Futuro Splendente", level: 9, desc: "Mega Mewtwo Y riversa tutta la propria energia psichica in un'esplosione cosmica che colpisce l'intera zona, azzerando i PS dei nemici più deboli e infliggendo enormi danni a tutti." },
    builds: [
      { name: "Build: Burst Psichico", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Raggioscossa" }, { lv: 4, name: "Tuono" }, { lv: 6, name: "Manovra Derapata" }],
        held: ["Amplienergia", "Occhiali Saggio", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Amnesia prima dell'engage + Mega Lancia: combo devastante che elimina carry avversari in un secondo." },
      { name: "Build: Dominio Totale", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Raggioscossa" }, { lv: 4, name: "Saetta Fulminante" }, { lv: 6, name: "Carica Parabolica" }],
        held: ["Amplienergia", "Occhiali Saggio", "Fisico di Ferro"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "Danno speciale stellare, passivo che debilita la rigenerazione nemica, eccellente burst a distanza, quasi impossibile da counter in fase tarda", weaknesses: "Fragilissimo (PS più bassi della categoria), richiede protezione costante, performa poco nelle fasi iniziali" },
  },

  937: { // Ceruledge
    stats: { ps: 7850, atk: 430, def: 320, atksp: 116, defsp: 380, crit: "20%", cd: "0%", life: "10%" },
    passive: { name: "Sfida Ardente", desc: "Ceruledge guadagna un accumulo di Ardore ogni volta che colpisce un nemico. A 5 accumuli, il prossimo attacco infligge danni bonus basati sui PS mancanti del nemico." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Ceruledge colpisce con entrambe le lame del fuoco infliggendo danni doppi e accumulando Ardore.", dmgBase: "105% Atk + 6 x (Livello - 1) + 0", dmgBoost: "175% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Braciere", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Danno"], desc: "Ceruledge scatta in avanti colpendo con le lame accese, infliggendo danni e riducendo la difesa nemica." },
      { slot: 2, name: "Furtivombra", level: "1 o 3", cd: "8.00s", tags: ["Area", "Bruciatura"], desc: "Emette un'onda di fuoco spettrale che brucia e rallenta i nemici nell'area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Lama del Rimorso", level: 4, cd: "7.00s", tags: ["Scatto", "Danno critico"], desc: "Ceruledge scatta e colpisce con un attacco spettrale che ha alta probabilità critica. Lv.11: Probabilità critica e danno aumentati." },
        { name: "Psicotaglio", level: 4, cd: "6.00s", tags: ["Area ravvicinata", "Danno"], desc: "Ceruledge colpisce a croce con entrambe le lame, danneggiando tutti i nemici vicini. Lv.11: Area e danni potenziati." },
      ]},
      { slot: 2, choices: [
        { name: "Spettrotuffo", level: 6, cd: "11.00s", tags: ["Scudo", "Bruciatura"], desc: "Si avvolge in un velo di fiamme spettrali che assorbe danni e brucia automaticamente i nemici vicini. Lv.13: Scudo e danno bruciatura aumentati." },
        { name: "Nitrocarica", level: 6, cd: "9.00s", tags: ["Auto-potenziamento", "Mobilità"], desc: "Ceruledge esegue una danza con le lame aumentando la propria velocità di attacco e movimento per 5s. Lv.13: Bonus aumentati." },
      ]},
    ],
    unite: { name: "Squarcio Spettrale", level: 9, desc: "Ceruledge si trasforma in una versione potenziata per 8s, con velocità di attacco e danni duplicati e immunità ai CC. Al termine, esplode in una colonna di fuoco." },
    builds: [
      { name: "Build: Critico Spettrale", path: "Percorso Critico", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Furtivombra" }, { lv: 4, name: "Lama del Rimorso" }, { lv: 6, name: "Spettrotuffo" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Stivali Veloci"], battle: "Pulsantescatto",
        note: "Danza Spada prima di engage + Taglio Fantasma per burst critico: uno dei Velocisti più pericolosi del meta." },
      { name: "Build: Survivability", path: "Percorso Resistente", moveLevels: [{ lv: 1, name: "Braciere" }, { lv: 3, name: "Furtivombra" }, { lv: 4, name: "Psicotaglio" }, { lv: 6, name: "Nitrocarica" }],
        held: ["Guanto del Campione", "Fisico di Ferro", "Nocciola Enerbia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Jungla", strengths: "Burst fisico altissimo, ottimo engage e disengage, danno potenziato sui PS mancanti, eccellente nella fase 1vs1", weaknesses: "Richiede accumuli per il burst massimo, vulnerabile ai CC prima dell'engage, meno efficace nei teamfight aperti" },
  },

  778: { // Mimikyu
    stats: { ps: 7800, atk: 420, def: 460, atksp: 115, defsp: 420, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Travestimento", desc: "Mimikyu entra in battaglia con un travestimento che assorbe un attacco nemico (funziona come uno scudo una tantum per scontro). Una volta rimosso il travestimento, guadagna un bonus temporaneo di danno." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Mimikyu rivela il vero sé infliggendo danni aumentati e spaventando brevemente il nemico.", dmgBase: "102% Atk + 5 x (Livello - 1) + 0", dmgBoost: "155% Atk + 15 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Sbigottimento", level: "1 o 3", cd: "7.00s", tags: ["Area", "CC"], desc: "Mimikyu emette un grido spettrale che spaventa tutti i nemici vicini, riducendo il loro ATK per 3s." },
      { slot: 2, name: "Graffio", level: "1 o 3", cd: "9.00s", tags: ["Scatto", "Invisibilità"], desc: "Mimikyu si nasconde nell'ombra diventando invisibile per 2s e guadagnando un potenziamento al prossimo attacco." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Carineria", level: 4, cd: "8.00s", tags: ["CC", "Scambio posizione"], desc: "Mimikyu si scambia di posizione con il nemico designato e lo stordisce. Lv.11: Raggio e stordimento aumentati." },
        { name: "Ombrartigli", level: 4, cd: "7.00s", tags: ["Danno", "Scudo"], desc: "Infligge danni basati sui danni subiti recentemente e genera uno scudo proporzionale. Lv.11: Danno e scudo potenziati." },
      ]},
      { slot: 2, choices: [
        { name: "Furtivombra", level: 6, cd: "11.00s", tags: ["Auto-potenziamento", "Elusione"], desc: "Mimikyu esegue una danza aumentando la propria velocità e rendendosi parzialmente incorporeo per 4s (riduzione danni 30%). Lv.13: Durata e riduzione aumentati." },
        { name: "Dolcetto o Scherzetto", level: 6, cd: "8.00s", tags: ["Scatto", "Danno"], desc: "Mimikyu attacca con un poderoso artiglio spettrale che azzera temporaneamente la difesa del nemico. Lv.13: Riduzione difesa aumentata." },
      ]},
    ],
    unite: { name: "Giochiamo Insieme?", level: 9, desc: "Mimikyu si espande in un'ombra gigantesca che avvolge l'area, spaventando tutti i nemici per 3s e infliggendo danni ingenti basati sui PS massimi dei bersagli." },
    builds: [
      { name: "Build: Assassino dell'Ombra", path: "Percorso Burst", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Graffio" }, { lv: 4, name: "Ombrartigli" }, { lv: 6, name: "Furtivombra" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Stivali Veloci"], battle: "Pulsantescatto",
        note: "Mimikyu eccelle nell'eliminare carry isolati: usa Ombra per avvicinarti, poi Artiglio Ombra + Vendetta per burst." },
      { name: "Build: Disturbo Tattico", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Graffio" }, { lv: 4, name: "Carineria" }, { lv: 6, name: "Dolcetto o Scherzetto" }],
        held: ["Pietra Levitante", "Fisico di Ferro", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Jungla", strengths: "Passivo scudo unico, ottimo 1vs1 contro carry, danni basati sui PS massimi nemici, difficile da burstare grazie al Travestimento", weaknesses: "Il passivo perde efficacia se rimosso troppo presto, poco impatto nei teamfight multipli, richiede engage precisi" },
  },

  10100: { // Raichu (Alolan)
    stats: { ps: 6854, atk: 116, def: 250, atksp: 750, defsp: 220, crit: "0%", cd: "25%", life: "0%" },
    passive: { name: "Surf Psichico", desc: "Raichu di Alola cavalca la propria coda psichica, guadagnando velocità di movimento aumentata del 20% e l'immunità ai rallentamenti per 3s ogni volta che usa una mossa." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Raichu sfrutta la propria coda psichica per sparare scariche elettro-psichiche ad ampia copertura.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 10 x (Livello - 1) + 150" },
    moves: [
      { slot: 1, name: "Tuonoshock", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Paralisi"], desc: "Raichu si lancia sul nemico con un pugno elettrico, infliggendo danni e paralizzando il bersaglio per 1.5s." },
      { slot: 2, name: "Scintilla", level: "1 o 3", cd: "9.00s", tags: ["Scudo", "Velocità"], desc: "Genera un campo psichico attorno a Raichu che lo protegge e ne aumenta la velocità per 3s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fulmine", level: 4, cd: "7.00s", tags: ["Proiettile", "Paralisi"], desc: "Evoca un fulmine che colpisce il nemico designato, paralizzandolo e infliggendo danni speciali elevati. Lv.11: Danno e durata paralisi aumentati." },
        { name: "Locomovolt", level: 4, cd: "5.50s", tags: ["Area", "Catena"], desc: "Scarica elettricità che si propaga da nemico a nemico. Lv.11: Catena fino a 4 bersagli aggiuntivi." },
      ]},
      { slot: 2, choices: [
        { name: "Tuono", level: 6, cd: "10.00s", tags: ["Scatto", "Danno"], desc: "Raichu scatta psichicamente verso il nemico tagliandolo con la propria coda. Lv.13: Danno e portata aumentati." },
        { name: "Codacciaio", level: 6, cd: "12.00s", tags: ["Scudo", "CC"], desc: "Crea una barriera elettrica che blocca i proiettili nemici e paralizza chiunque tenti di attraversarla. Lv.13: Scudo più resistente." },
      ]},
    ],
    unite: { name: "Surfsplash di Alola", level: 9, desc: "Raichu cavalca un'ondata di energia elettro-psichica che attraversa l'area, paralizzando tutti i nemici e infliggendo danni enormi. Ottiene poi un potenziamento di velocità e danni per 6s." },
    builds: [
      { name: "Build: Burst Elettrico", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Scintilla" }, { lv: 4, name: "Fulmine" }, { lv: 6, name: "Tuono" }],
        held: ["Amplienergia", "Occhiali Saggio", "Stivali Veloci"], battle: "Pulsantescatto",
        note: "Ottima combo per eliminare carry: Psicotaglio per avvicinarsi + Tuono per paralisi + burst." },
      { name: "Build: Controllo Elettrico", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Scintilla" }, { lv: 4, name: "Locomovolt" }, { lv: 6, name: "Codacciaio" }],
        held: ["Amplienergia", "Fisico di Ferro", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Jungla", strengths: "Mobilità eccellente grazie al passivo, buona paralisi, danno speciale rispettabile, coda psichica offre kit unico tra i Velocisti", weaknesses: "Bassa resistenza, necessita del passivo per la mobilità, meno burst puro rispetto ad altri Velocisti" },
  },

  123: { // Scyther
    stats: { ps: 6800, atk: 630, def: 360, atksp: 115, defsp: 200, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Tecno-Abilità", desc: "Scyther è immune ai rallentamenti durante il dash. Ogni attacco critico riduce i cooldown delle mosse di 0.5s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Scyther colpisce con entrambe le falci infliggendo danni fisici elevati con alta probabilità critica.", dmgBase: "106% Atk + 7 x (Livello - 1) + 0", dmgBoost: "172% Atk + 20 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Falce Aerea", level: "1 o 3", cd: "5.00s", tags: ["Scatto", "Danno"], desc: "Scyther esegue un rapido scatto aereo colpendo il nemico con le falci. Ottimo per avvicinarsi." },
      { slot: 2, name: "Taglio Rapido", level: "1 o 3", cd: "7.00s", tags: ["Multiplo", "Velocità"], desc: "Colpisce il nemico ripetutamente con tagli veloci, aumentando la propria velocità di attacco per 4s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Colpo Aereo", level: 4, cd: "6.00s", tags: ["Scatto", "Critico"], desc: "Potenziamento di Falce Aerea con alta probabilità critica. Lv.11: Danno critico e distanza di scatto aumentati." },
        { name: "Falce Veloce", level: 4, cd: "4.50s", tags: ["Multiplo", "Danno"], desc: "Scyther esegue una serie di tagli fulminei sulla stessa destinazione. Lv.11: Numero di tagli aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Danza Spada", level: 6, cd: "10.00s", tags: ["Auto-potenziamento"], desc: "Scyther esegue la Danza Spada aumentando del 50% il proprio ATK per 6s. Lv.13: Bonus di ATK e durata aumentati." },
        { name: "Contrattacco", level: 6, cd: "9.00s", tags: ["Parry", "Contro-attacco"], desc: "Scyther para il prossimo attacco nemico e risponde con un colpo potente. Lv.13: Danno del contro-attacco aumentato." },
      ]},
    ],
    unite: { name: "Lama Finale di Scyther", level: 9, desc: "Scyther scatta a velocità supersonica attraverso tutti i nemici nell'area, infliggendo danni enormi e riducendo la loro difesa del 50% per 5s." },
    builds: [
      { name: "Build: Critico Puro", path: "Percorso Critico", moveLevels: [{ lv: 1, name: "Falce Aerea" }, { lv: 3, name: "Taglio Rapido" }, { lv: 4, name: "Colpo Aereo" }, { lv: 6, name: "Danza Spada" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Stivali Veloci"], battle: "Pulsantescatto",
        note: "Il Velocista critico per eccellenza: Danza Spada + Colpo Aereo con critici ottiene burst altissimi." },
      { name: "Build: Assassino Veloce", path: "Percorso Velocità", moveLevels: [{ lv: 1, name: "Falce Aerea" }, { lv: 3, name: "Taglio Rapido" }, { lv: 4, name: "Falce Veloce" }, { lv: 6, name: "Contrattacco" }],
        held: ["Guanto del Campione", "Nocciola Enerbia", "Stivali Veloci"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "B", lane: "Jungla", strengths: "Velocità di attacco elevatissima, ottima probabilità critica, buona mobilità con i dash, semplice da giocare per i principianti", weaknesses: "Bassa resistenza, scarso impatto a distanza, perde efficacia contro difensori con alta difesa fisica" },
  },

  52: { // Meowth
    stats: { ps: 7000, atk: 630, def: 300, atksp: 116, defsp: 300, crit: "10%", cd: "20%", life: "0%" },
    passive: { name: "Raccolta Monete", desc: "Ogni nemico eliminato o struttura abbattuta genera monete d'oro che aumentano le statistiche di Meowth per tutta la partita. Più monete accumulate, maggiori i bonus." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Meowth lancia una moneta d'oro affilata che infligge danni fisici aumentati e stordisce brevemente il bersaglio.", dmgBase: "104% Atk + 5 x (Livello - 1) + 0", dmgBoost: "160% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Bruciapelo", level: "1 o 3", cd: "5.50s", tags: ["Scatto", "Danno"], desc: "Meowth graffia rapidamente il nemico con gli artigli affilati, infliggendo danni fisici." },
      { slot: 2, name: "Sfuriate", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "Stordimento"], desc: "Lancia una pioggia di monete verso i nemici. Il primo nemico colpito viene stordito." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Giorno Paga", level: 4, cd: "6.00s", tags: ["Danno critico", "Scatto"], desc: "Meowth colpisce con un attacco con altissima probabilità critica. Lv.11: Danno critico e probabilità aumentati." },
        { name: "Morso", level: 4, cd: "5.00s", tags: ["Multiplo", "Riduzione difesa"], desc: "Colpisce il nemico 3 volte con gli artigli, riducendo la sua difesa. Lv.11: Colpi e riduzione difesa aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Lacerazione", level: 6, cd: "9.00s", tags: ["Proiettile", "Monete"], desc: "Lancia una pioggia di monete d'oro su un'area ampia. Le monete rimangono a terra e generano oro extra. Lv.13: Monete e area aumentati." },
        { name: "Carineria", level: 6, cd: "7.00s", tags: ["Danno", "Velocità"], desc: "Meowth colpisce rapidamente due volte con velocità fulminea. Lv.13: Danni e velocità di esecuzione aumentati." },
      ]},
    ],
    unite: { name: "Agguato del Team Rocket", level: 9, desc: "Meowth fa piovere una cascata di monete d'oro che danneggia tutti i nemici nell'area e lascia monete a terra che aumentano ulteriormente le sue statistiche per il resto della partita." },
    builds: [
      { name: "Build: Farming Aggressivo", path: "Percorso Monete", moveLevels: [{ lv: 1, name: "Bruciapelo" }, { lv: 3, name: "Sfuriate" }, { lv: 4, name: "Giorno Paga" }, { lv: 6, name: "Lacerazione" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Stivali Veloci"], battle: "Pulsantescatto",
        note: "Priorità al farming: più monete accumuli prima, più diventi dominante nella fase tarda della partita." },
      { name: "Build: Burst da Mischia", path: "Percorso Burst", moveLevels: [{ lv: 1, name: "Bruciapelo" }, { lv: 3, name: "Sfuriate" }, { lv: 4, name: "Morso" }, { lv: 6, name: "Carineria" }],
        held: ["Guanto del Campione", "Nocciola Enerbia", "Stivali Veloci"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "B", lane: "Jungla / Corsia Inferiore", strengths: "Scala enormemente con le monete accumulate, farming efficiente, buon potenziale carry nella fase tarda, critico alto", weaknesses: "Debole nelle fasi iniziali, dipende dal farming per la potenza, scarsa resistenza, richiede partite dove riesce a farmfare" },
  },

  257: { // Blaziken
    stats: { ps: 7800, atk: 490, def: 458, atksp: 115, defsp: 351, crit: "10%", cd: "0%", life: "15%" },
    passive: { name: "Velocità Rapida", desc: "Blaziken non può essere rallentato. Ogni 5s, il prossimo attacco o mossa infligge danni bonus del 20% e aumenta la velocità di movimento per 2s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Blaziken scatta verso il nemico con un calcio infuocato che infligge danni fisici massicci.", dmgBase: "108% Atk + 8 x (Livello - 1) + 0", dmgBoost: "185% Atk + 22 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Aereassalto", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Bruciatura"], desc: "Blaziken si lancia in avanti con un calcio fiammante che brucia il nemico e lo respinge." },
      { slot: 2, name: "Braciere", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "Elusione"], desc: "Blaziken schiva gli attacchi nemici e si posiziona alle spalle del bersaglio guadagnando un potenziamento." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fuocopugno", level: 4, cd: "7.00s", tags: ["Scatto", "Area", "Danno"], desc: "Blaziken esegue un calcio potente che crea un'onda di fuoco attorno al punto di impatto. Lv.11: Area e danni aumentati." },
        { name: "Vampata", level: 4, cd: "6.00s", tags: ["Area ravvicinata", "Danno"], desc: "Spazza l'area circostante con calci infuocati, colpendo tutti i nemici vicini. Lv.11: Numero di calci e area aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Focalcolpo", level: 6, cd: "10.00s", tags: ["Parry", "Danno"], desc: "Blaziken para il prossimo attacco e risponde con un calcio + pugno devastante. Lv.13: Danno di counter aumentato." },
        { name: "Calciardente", level: 6, cd: "8.00s", tags: ["Scatto", "Velocità", "Danno"], desc: "Blaziken compie una serie di tre scatti veloci con danni ad ogni impatto. Lv.13: Danni e velocità degli scatti aumentati." },
      ]},
    ],
    unite: { name: "Vortice di Fiamme", level: 9, desc: "Blaziken si trasforma in un tornado di fuoco e pugnì, colpendo tutti i nemici nell'area con danni devastanti per 5s. Al termine, esplode con un'onda di calore che brucia i sopravvissuti." },
    builds: [
      { name: "Build: Burst Fisico", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Aereassalto" }, { lv: 3, name: "Braciere" }, { lv: 4, name: "Fuocopugno" }, { lv: 6, name: "Focalcolpo" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Contrattacco Fulmineo è fondamentale: usalo per punire i nemici che ti attaccano in mischia." },
      { name: "Build: Mobilità Fuoco", path: "Percorso Velocità", moveLevels: [{ lv: 1, name: "Aereassalto" }, { lv: 3, name: "Braciere" }, { lv: 4, name: "Vampata" }, { lv: 6, name: "Calciardente" }],
        held: ["Guanto del Campione", "Stivali Veloci", "Nocciola Enerbia"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore / Jungla", strengths: "Danno fisico elevatissimo, mobilità eccezionale, immune ai rallentamenti, ottimo nel 1vs1 e nel dive sui carry", weaknesses: "Richiede impegno ravvicinato, rischioso contro team con molto CC, curva di apprendimento ripida per l'engage ottimale" },
  },

  870: { // Falinks
    stats: { ps: 8000, atk: 430, def: 460, atksp: 115, defsp: 360, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Formazione di Combattimento", desc: "Falinks è in realtà una formazione di sei soldatini. Ad ogni attacco o mossa, un soldatino aggiuntivo si aggiunge all'azione. Più soldatini attivi, maggiori i danni e la resistenza." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: l'intera formazione di Falinks attacca simultaneamente infliggendo danni multipli.", dmgBase: "105% Atk + 6 x (Livello - 1) + 0", dmgBoost: "170% Atk + 18 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Granfisico", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "Area"], desc: "L'intera formazione si lancia in avanti travolgendo i nemici e rispingendoli." },
      { slot: 2, name: "Megacorno", level: "1 o 3", cd: "9.00s", tags: ["Scudo", "Formazione"], desc: "La formazione si riunisce creando uno scudo collettivo che riduce i danni subiti del 40% per 4s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Ferroriduttore", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "La formazione si dispone a cuneo e sfonda le difese nemiche stordendo i bersagli. Lv.11: Area e stordimento aumentati." },
        { name: "Picchiaduro", level: 4, cd: "6.50s", tags: ["Scatto", "Danno massiccio"], desc: "Potenziamento della carica con danno aumentato proporzionale al numero di soldatini. Lv.11: Moltiplicatore di danni aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Sbarramento", level: 6, cd: "11.00s", tags: ["Scudo", "Barriera"], desc: "Crea una barriera di scudi davanti a Falinks che blocca i proiettili e respinge i nemici. Lv.13: Durata e resistenza aumentati." },
        { name: "Incornata", level: 6, cd: "9.00s", tags: ["Area", "Danno"], desc: "Tutti i soldatini attaccano insieme su un'area, infliggendo danni massicci. Lv.13: Area e danni potenziati." },
      ]},
    ],
    unite: { name: "Cantamagliata", level: 9, desc: "La formazione completa di Falinks si espande e attacca simultaneamente su un'area enorme, infliggendo danni catastrofici e stordendo tutti i nemici per 3s." },
    builds: [
      { name: "Build: Formazione Offensiva", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Granfisico" }, { lv: 3, name: "Megacorno" }, { lv: 4, name: "Picchiaduro" }, { lv: 6, name: "Incornata" }],
        held: ["Fisico di Ferro", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Accumula soldatini durante le fasi iniziali e scatena l'Assalto Finale nei teamfight per danni enormi." },
      { name: "Build: Baluardo", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Granfisico" }, { lv: 3, name: "Megacorno" }, { lv: 4, name: "Ferroriduttore" }, { lv: 6, name: "Sbarramento" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Kit unico con formazione di soldatini, buona resistenza, ottimo engage con la carica, versatile in attacco e difesa", weaknesses: "Meccanica di formazione complessa, meno burst puro rispetto ad altri Versatili, richiede comprensione avanzata" },
  },

  130: { // Gyarados
    stats: { ps: 7150, atk: 400, def: 450, atksp: 115, defsp: 345, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Intimidazione", desc: "La presenza di Gyarados riduce dell'ATK dei nemici vicini del 15%. Quando Gyarados viene colpito da un CC, ottiene uno stack di Furia che aumenta i propri danni del 5% (fino a 5 stack)." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Gyarados sputa un torrente d'acqua esplosivo che infligge danni ad area ai nemici davanti a sé.", dmgBase: "107% Atk + 7 x (Livello - 1) + 0", dmgBoost: "178% Atk + 20 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Flagello", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "CC"], desc: "Gyarados si lancia verso il nemico con una cascata d'acqua che lo respinge e lo stordisce." },
      { slot: 2, name: "Splash", level: "1 o 3", cd: "8.00s", tags: ["Cono", "Danno"], desc: "Gyarados emette un potente soffio draconico in cono, infliggendo danni ingenti a tutti i nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Dragospiro", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Gyarados crea un vortice d'acqua che risucchia e stordisce i nemici nell'area. Lv.11: Raggio e stordimento aumentati." },
        { name: "Idrocoda", level: 4, cd: "6.50s", tags: ["Scatto", "Danno"], desc: "Gyarados si lancia con potenza verso il nemico, danneggiando tutti i nemici nel percorso. Lv.11: Danno e portata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Cascata", level: 6, cd: "11.00s", tags: ["Auto-potenziamento", "CC Immunità"], desc: "Gyarados entra in uno stato di furia per 5s, guadagnando immunità ai CC e danni aumentati. Lv.13: Durata e potenziamento aumentati." },
        { name: "Rimbalzo", level: 6, cd: "9.00s", tags: ["Area", "Danno"], desc: "Gyarados crea una tempesta di energia draconica ad area. Lv.13: Area e danni aumentati." },
      ]},
    ],
    unite: { name: "Corrente Draconica", level: 9, desc: "Gyarados scatena un vortice draconico gigantesco che risucchia tutti i nemici nell'area, infliggendo danni enormi e stordendoli per 4s. Ottiene poi stacks massimi di Furia." },
    builds: [
      { name: "Build: Furia Devastante", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Flagello" }, { lv: 3, name: "Splash" }, { lv: 4, name: "Dragospiro" }, { lv: 6, name: "Cascata" }],
        held: ["Fisico di Ferro", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Accumula stack di Furia lasciandoti colpire dai CC, poi attiva Furia del Drago per un burst enorme e immune." },
      { name: "Build: Controllo Acqua", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Flagello" }, { lv: 3, name: "Splash" }, { lv: 4, name: "Idrocoda" }, { lv: 6, name: "Rimbalzo" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "PS elevatissimi, passivo di intimidazione, ottimo engage con CC, scala bene con gli stack di Furia, difficile da abbattere", weaknesses: "Lento senza mosse attive, richiede mosse per il massimo impatto, meno efficace in fase iniziale prima di avere le mosse" },
  },

  865: { // Sirfetch'd
    stats: { ps: 7800, atk: 460, def: 500, atksp: 116, defsp: 470, crit: "20%", cd: "0%", life: "20%" },
    passive: { name: "Determinazione Nobile", desc: "Quando Sirfetch'd subisce danni che lo porterebbero sotto il 30% di PS, ottiene uno scudo e un potenziamento di ATK del 30% per 5s (1 volta ogni 30s)." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Sirfetch'd colpisce con lo scudo e la lancia infliggendo danni fisici massivi e riducendo brevemente la DEF nemica.", dmgBase: "106% Atk + 7 x (Livello - 1) + 0", dmgBoost: "180% Atk + 22 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Beccata", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "CC"], desc: "Sirfetch'd carica verso il nemico con lo scudo stordendolo brevemente e infliggendo danni." },
      { slot: 2, name: "Tagliofuria", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia la lancia come un proiettile penetrante che attraversa i nemici sulla traiettoria." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Vorticefferato", level: 4, cd: "8.00s", tags: ["Area", "Danno massiccio"], desc: "Sirfetch'd attacca con la spada su una vasta area davanti a sé con un colpo potentissimo. Lv.11: Area e danno aumentati." },
        { name: "Fogliama", level: 4, cd: "7.00s", tags: ["Parry", "Contro-attacco"], desc: "Para perfettamente il prossimo attacco nemico e risponde con un colpo critico garantito. Lv.11: Danno del contro-attacco aumentato." },
      ]},
      { slot: 2, choices: [
        { name: "Individua", level: 6, cd: "10.00s", tags: ["Proiettile", "Stordimento"], desc: "Lancia la lancia con tutta la forza stordendo il primo nemico colpito. Lv.13: Danno e stordimento aumentati." },
        { name: "Sferzata Meteorite", level: 6, cd: "12.00s", tags: ["Danno massiccio", "Critico"], desc: "Attacco a una mossa con carica lenta ma danno devastante e critico garantito. Lv.13: Danno massiccio aumentato." },
      ]},
    ],
    unite: { name: "Fendente Cavalleresco", level: 9, desc: "Sirfetch'd monta in carica attraverso il campo di battaglia, travolgendo tutti i nemici con lancia e scudo per 6s, infliggendo danni enormi e stordendo ogni bersaglio colpito." },
    builds: [
      { name: "Build: Scudo e Spada", path: "Percorso Cavaliere", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Tagliofuria" }, { lv: 4, name: "Vorticefferato" }, { lv: 6, name: "Individua" }],
        held: ["Fisico di Ferro", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Forte nei teamfight: Cresta Spada per danno ad area + Lancia Devastante per stordire il carry nemico." },
      { name: "Build: Duellante", path: "Percorso 1vs1", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Tagliofuria" }, { lv: 4, name: "Fogliama" }, { lv: 6, name: "Sferzata Meteorite" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Passivo salva-vita, danno fisico ottimo, Scudo Parry eccellente contro nemici fisici, buona presenza nei teamfight con Cresta Spada", weaknesses: "Mobilità limitata, richiede buon timing per il parry, meno efficace contro team con molto danno speciale" },
  },

  888: { // Zacian
    stats: { ps: 8000, atk: 580, def: 440, atksp: 115, defsp: 350, crit: "10%", cd: "0%", life: "15%" },
    passive: { name: "Spada Intrepida", desc: "Zacian porta sempre con sé la spada mistica che potenzia tutti gli attacchi. Ogni 4 attacchi base, la spada conferisce un bonus di critico garantito. In combattimento, l'ATK aumenta progressivamente fino al 20% dopo 10s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Zacian colpisce con la spada mistica infliggendo danni enormi e aumentando temporaneamente il proprio ATK.", dmgBase: "110% Atk + 9 x (Livello - 1) + 0", dmgBoost: "190% Atk + 25 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Lacerazione", level: "1 o 3", cd: "8.00s", tags: ["Auto-potenziamento"], desc: "Zacian esegue la Danza Spada aumentando il proprio ATK del 60% per 6s." },
      { slot: 2, name: "Attacco Rapido", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia un'onda di energia sacra che infligge danni e rallenta i nemici colpiti." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Ferrartigli", level: 4, cd: "8.00s", tags: ["Area", "Danno massiccio"], desc: "Zacian colpisce con un taglio enorme ad area davanti a sé, infliggendo danni devastanti. Lv.11: Area e danno massiccio aumentati." },
        { name: "Spadasanta", level: 4, cd: "7.00s", tags: ["Scatto", "CC"], desc: "Zacian carica verso il nemico e lo stordisce con la forza d'impatto. Lv.11: Distanza, danno e stordimento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Agilità", level: 6, cd: "11.00s", tags: ["Proiettile", "Riduzione difesa"], desc: "Lancia la spada come un boomerang che azzera la DEF del nemico colpito per 4s. Lv.13: Riduzione difesa e durata aumentati." },
        { name: "Carineria", level: 6, cd: "9.00s", tags: ["Scatto", "Danno critico"], desc: "Zacian usa la mossa sacra infliggendo danno enorme con critico garantito. Lv.13: Danno critico aumentato." },
      ]},
    ],
    unite: { name: "Spada del Re", level: 9, desc: "Zacian eleva la propria spada mistica al cielo e scatena un attacco leggendario che colpisce tutti i nemici nell'area con danno astronomico, ignorando parte della loro difesa." },
    builds: [
      { name: "Build: Leggenda del Burst", path: "Percorso Leggendario", moveLevels: [{ lv: 1, name: "Lacerazione" }, { lv: 3, name: "Attacco Rapido" }, { lv: 4, name: "Ferrartigli" }, { lv: 6, name: "Agilità" }],
        held: ["Guanto del Campione", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Danza Spada + Sacra Spada = combo burst devastante che elimina quasi qualsiasi nemico in 2 secondi." },
      { name: "Build: Controllo del Campo", path: "Percorso Tattico", moveLevels: [{ lv: 1, name: "Lacerazione" }, { lv: 3, name: "Attacco Rapido" }, { lv: 4, name: "Spadasanta" }, { lv: 6, name: "Carineria" }],
        held: ["Fisico di Ferro", "Pietra Levitante", "Nocciola Enerbia"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "ATK stellare con scala progressiva, burst critico devastante, Danza Spada lo trasforma in un carry inarrestabile, top tier nelle mani di un buon giocatore", weaknesses: "Richiede diversi secondi di ramp-up in combattimento, scarso contro kite pesante, dipende dall'avere Danza Spada pronta" },
  },

  925: { // Pawmot
    stats: { ps: 9000, atk: 475, def: 560, atksp: 115, defsp: 400, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Carica Elettrica", desc: "Pawmot accumula cariche elettriche mentre combatte. A 10 cariche, il prossimo attacco libera un'esplosione elettrica che infligge danni bonus e paralizza brevemente il nemico." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Pawmot colpisce con le zampe cariche di elettricità infliggendo danni misti (fisici + speciali) e generando cariche doppie.", dmgBase: "104% Atk + 6 x (Livello - 1) + 0", dmgBoost: "168% Atk + 19 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Tuonoshock", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Paralisi"], desc: "Pawmot si lancia sul nemico con un pugno elettrico paralizzante." },
      { slot: 2, name: "Scintilla", level: "1 o 3", cd: "12.00s", tags: ["Cura", "Supporto"], desc: "Pawmot revitalizza sé stesso o un alleato vicino, recuperando PS e rimuovendo uno stato di status." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Elettroshock", level: 4, cd: "7.00s", tags: ["Danno", "Paralisi"], desc: "Pawmot esegue due pugni elettrici rapidi in successione. Lv.11: Danni e probabilità di paralisi aumentati." },
        { name: "Zuffa", level: 4, cd: "9.00s", tags: ["Area", "Paralisi"], desc: "Esegue una danza scaricando elettricità su tutti i nemici circostanti. Lv.11: Area e paralisi aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Fossa", level: 6, cd: "20.00s", tags: ["Cura", "Supporto Speciale"], desc: "Pawmot può rianimare un alleato KO con un piccolo residuo di PS (1 uso per partita). Lv.13: PS di rianimazione aumentati." },
        { name: "Strofinamento", level: 6, cd: "10.00s", tags: ["Auto-potenziamento"], desc: "Pawmot si sovraccarica di elettricità per 6s, aumentando la velocità di attacco e i danni. Lv.13: Potenziamento aumentato." },
      ]},
    ],
    unite: { name: "Rianimazione Pawmot", level: 9, desc: "Pawmot libera tutta la propria energia elettrica in un'esplosione totale ad area enorme, paralizzando tutti i nemici per 3s e infliggendo danni enormi sia fisici che speciali." },
    builds: [
      { name: "Build: Supporto Elettrico", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Scintilla" }, { lv: 4, name: "Elettroshock" }, { lv: 6, name: "Fossa" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce",
        note: "Rianimazione è una delle mosse più forti del gioco: salva partite disperate. Usala sapientemente." },
      { name: "Build: Carry Elettrico", path: "Percorso Offensivo", moveLevels: [{ lv: 1, name: "Tuonoshock" }, { lv: 3, name: "Scintilla" }, { lv: 4, name: "Zuffa" }, { lv: 6, name: "Strofinamento" }],
        held: ["Fisico di Ferro", "Guanto del Campione", "Nocciola Enerbia"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "A", lane: "Corsia Inferiore / Corsia Superiore", strengths: "Kit ibrido unico (attacco e supporto), Rianimazione cambia le partite, buon danno misto, molto versatile in diversi ruoli", weaknesses: "Jack-of-all-trades: né il miglior attaccante né il miglior supporto, Rianimazione richiede posizionamento rischioso" },
  },

  10034: { // Mega Charizard X
    stats: { ps: 7700, atk: 462, def: 400, atksp: 115, defsp: 320, crit: "30%", cd: "0%", life: "15%" },
    passive: { name: "Fuoco Interiore", desc: "Mega Charizard X arde internamente con fuoco draconico. Ogni 6 attacchi base, il prossimo attacco infligge danni di fuoco bonus e aumenta temporaneamente le proprie statistiche." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Mega Charizard X soffia fuoco draconico infliggendo danni fisici massicci e bruciando il nemico.", dmgBase: "110% Atk + 9 x (Livello - 1) + 0", dmgBoost: "188% Atk + 24 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Fiammata", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "Danno"], desc: "Mega Charizard X si lancia verso il bersaglio con un volo draconico potente, infliggendo danni e rispingendo i nemici vicini." },
      { slot: 2, name: "Turbofuoco", level: "1 o 3", cd: "8.00s", tags: ["Area ravvicinata", "Bruciatura"], desc: "Colpisce l'area circostante con artigli infuocati, bruciando tutti i nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Lanciafiamme", level: 4, cd: "10.00s", tags: ["Auto-potenziamento"], desc: "Esegue la Drago Danza aumentando ATK e velocità di movimento del 40% per 7s. Lv.11: Bonus e durata aumentati." },
        { name: "Fuocopugno", level: 4, cd: "6.50s", tags: ["Scatto", "CC"], desc: "Mega Charizard X compie un dive dall'alto stordendo i nemici al punto di impatto. Lv.11: Danno e stordimento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Fuocobomba", level: 6, cd: "11.00s", tags: ["Cono", "Bruciatura"], desc: "Emette un vasto cono di fuoco draconico che brucia gravemente tutti i nemici colpiti. Lv.13: Cono e bruciatura aumentati." },
        { name: "Fuococarica", level: 6, cd: "12.00s", tags: ["Scudo", "Danno di ritorno"], desc: "Si avvolge in un'armatura draconica che assorbe danni e li ritorna ai nemici vicini. Lv.13: Scudo e danno aumentati." },
      ]},
    ],
    unite: { name: "Megaevoluzione", level: 9, desc: "Mega Charizard X compie un volo ad alta velocità attraverso l'intera area di gioco, travolgendo tutti i nemici con fuoco draconico e infliggendo danni catastrofici. Ottiene poi Drago Danza gratuita." },
    builds: [
      { name: "Build: Drago Devastante", path: "Percorso Draconico", moveLevels: [{ lv: 1, name: "Fiammata" }, { lv: 3, name: "Turbofuoco" }, { lv: 4, name: "Lanciafiamme" }, { lv: 6, name: "Fuocobomba" }],
        held: ["Fisico di Ferro", "Guanto del Campione", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Drago Danza prima dell'engage trasforma Mega Charizard X in un carry inarrestabile per 7s." },
      { name: "Build: Tanky Fuoco", path: "Percorso Resistente", moveLevels: [{ lv: 1, name: "Fiammata" }, { lv: 3, name: "Turbofuoco" }, { lv: 4, name: "Fuocopugno" }, { lv: 6, name: "Fuococarica" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore / Jungla", strengths: "PS e ATK altissimi, Drago Danza lo rende inarrestabile, ottimo dive sui carry, resistente grazie alle armature, devastante nei teamfight", weaknesses: "Richiede la Drago Danza per il massimo potenziale, vulnerabile ai CC pesanti durante la danza, meno efficace a distanza" },
  },

  10067: { // Mega Gyarados
    stats: { ps: 7000, atk: 400, def: 450, atksp: 115, defsp: 345, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Rabbia Oscura", desc: "Mega Gyarados canalizza energia oscura. Ogni CC subito carica la Rabbia (max 8 cariche). A cariche massime, guadagna immunità ai CC per 5s e aumenta l'ATK del 35%." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Mega Gyarados attacca con forza oscura infliggendo danni fisici massicci e riducendo la DEF nemica.", dmgBase: "109% Atk + 8 x (Livello - 1) + 0", dmgBoost: "183% Atk + 23 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Flagello", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "CC"], desc: "Mega Gyarados si lancia con energia oscura, rispingendo e stordendo i nemici colpiti." },
      { slot: 2, name: "Splash", level: "1 o 3", cd: "9.00s", tags: ["Area", "Risucchio"], desc: "Crea un vortice di energia oscura che attira i nemici verso il centro infliggendo danni continui." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Dragospiro", level: 4, cd: "8.00s", tags: ["Area", "Danno"], desc: "Scatena un'esplosione di energia oscura ad area. Lv.11: Area e danni enormemente potenziati." },
        { name: "Idrocoda", level: 4, cd: "7.00s", tags: ["Taunt", "Scudo"], desc: "Provoca i nemici vicini costringendoli ad attaccarlo e generando uno scudo proporzionale ai colpi subiti. Lv.11: Scudo e provocazione aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Cascata", level: 6, cd: "10.00s", tags: ["Scatto", "Danno massiccio"], desc: "Mega Gyarados morde il nemico con energia oscura, infliggendo danni enormi e riducendo la DEF al 50%. Lv.13: Riduzione DEF aumentata." },
        { name: "Rimbalzo", level: 6, cd: "13.00s", tags: ["Scudo", "Aura"], desc: "Crea un'aura oscura protettiva che riduce tutti i danni subiti del 35% per 6s. Lv.13: Riduzione danni aumentata." },
      ]},
    ],
    unite: { name: "Corrente Draconica", level: 9, desc: "Mega Gyarados scatena il suo potere oscuro totale, creando un vortice oscuro gigantesco che risucchia tutti i nemici vicini, infliggendo danni catastrofici e azzerandone la DEF per 5s." },
    builds: [
      { name: "Build: Mostro Oscuro", path: "Percorso Oscuro", moveLevels: [{ lv: 1, name: "Flagello" }, { lv: 3, name: "Splash" }, { lv: 4, name: "Dragospiro" }, { lv: 6, name: "Cascata" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Accumula cariche di Rabbia Oscura per l'immunità ai CC, poi sfonda con Fauci Oscure per burst enorme." },
      { name: "Build: Baluardo Oscuro", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Flagello" }, { lv: 3, name: "Splash" }, { lv: 4, name: "Idrocoda" }, { lv: 6, name: "Rimbalzo" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "PS massicci, passivo anti-CC molto potente, ottimo frontliner nei teamfight, Fauci Oscure devastanti, uno dei Versatili più resistenti", weaknesses: "Dipende dagli stack di Rabbia per l'immunità ai CC, meno carry puro rispetto ad altri S-tier, richiede PS alti per lo scudo di Sfida" },
  },

  10071: { // Mega Lucario
    stats: { ps: 7249, atk: 429, def: 390, atksp: 115, defsp: 300, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Aura Adattiva", desc: "Mega Lucario potenzia la propria aura in base alle statistiche dei nemici vicini. Contro nemici con alta DEF, aumenta il danno di penetrazione. Contro nemici con alta DEFsp, aumenta il danno speciale." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Mega Lucario sferra un pugno di aura potenziato che infligge danni misti (fisici + speciali) ad area davanti a sé.", dmgBase: "108% Atk + 8 x (Livello - 1) + 0", dmgBoost: "185% Atk + 22 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Attacco Rapido", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Danno"], desc: "Mega Lucario si lancia verso il nemico con un pugno di aura devastante che infligge danni ingenti." },
      { slot: 2, name: "Meteorpugno", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Lancia una potente sfera di aura ad inseguimento che colpisce il bersaglio designato." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Extrarapido", level: 4, cd: "7.00s", tags: ["Scatto", "Multiplo"], desc: "Mega Lucario esegue 3 dash rapidissimi verso il nemico infliggendo danni ad ogni impatto. Lv.11: Danni e velocità aumentati." },
        { name: "Crescipugno", level: 4, cd: "6.00s", tags: ["Scatto", "CC"], desc: "Colpisce il nemico con un uppercut di aura oscura che lo lancia in aria per 1.5s. Lv.11: Danno e durata stun aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Ossoraffiche", level: 6, cd: "9.00s", tags: ["Proiettile", "Penetrante"], desc: "Lancia una sfera di aura mega-potenziata che ignora completamente la DEF del bersaglio. Lv.13: Danno aumentato." },
        { name: "Zuffa", level: 6, cd: "10.00s", tags: ["Auto-potenziamento"], desc: "Mega Lucario combina la Danza Spada con l'energia aura, aumentando ATK e AttSp del 50% per 7s. Lv.13: Bonus aumentati." },
      ]},
    ],
    unite: { name: "Ondasfera Letale", level: 9, desc: "Mega Lucario scatena la propria aura al massimo, creando un'esplosione di energia che colpisce tutti i nemici nell'area con danno misto devastante, ignorando il 50% delle loro difese." },
    builds: [
      { name: "Build: Aura Pura", path: "Percorso Aura", moveLevels: [{ lv: 1, name: "Attacco Rapido" }, { lv: 3, name: "Meteorpugno" }, { lv: 4, name: "Extrarapido" }, { lv: 6, name: "Ossoraffiche" }],
        held: ["Fisico di Ferro", "Guanto del Campione", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Mega Velocità Estrema + Aura Sfera Mega: combo dash multipli + sfera penetrante per eliminare carry in 2s." },
      { name: "Build: Adattamento Totale", path: "Percorso Adattivo", moveLevels: [{ lv: 1, name: "Attacco Rapido" }, { lv: 3, name: "Meteorpugno" }, { lv: 4, name: "Crescipugno" }, { lv: 6, name: "Zuffa" }],
        held: ["Fisico di Ferro", "Amplienergia", "Nocciola Enerbia"], battle: "Pulsantescatto" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore / Jungla", strengths: "Passivo adattivo che bypassa le difese nemiche, danno misto che ignora la tipologia difensiva avversaria, mobilità eccellente, top pick in qualsiasi meta", weaknesses: "Richiede buona lettura del team nemico per sfruttare il passivo, meno efficace contro team bilanciati, costa Mega Evolution" },
  },

  10043: { // Mega Mewtwo X
    stats: { ps: 8200, atk: 520, def: 480, atksp: 115, defsp: 390, crit: "10%", cd: "0%", life: "10%" },
    passive: { name: "Potere Illimitato", desc: "Mega Mewtwo X attinge al proprio potere psichico per amplificare i danni fisici. Ogni 5 attacchi base, infligge il 200% di danno con il prossimo colpo. La propria aura intimidisce i nemici riducendone l'ATK del 10%." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Mega Mewtwo X usa la propria telecinesi per potenziare il colpo fisico, infliggendo danni misti enormi.", dmgBase: "112% Atk + 10 x (Livello - 1) + 0", dmgBoost: "195% Atk + 26 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Sbigottimento", level: "1 o 3", cd: "6.00s", tags: ["Scatto", "Stordimento"], desc: "Mega Mewtwo X usa la telecinesi per scagliarsi verso il nemico con forza devastante, stordendolo." },
      { slot: 2, name: "Graffio", level: "1 o 3", cd: "9.00s", tags: ["Area", "Danno"], desc: "Crea un'onda psichica potentissima ad area che respinge tutti i nemici vicini." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Carineria", level: 4, cd: "7.00s", tags: ["Scatto", "Danno massiccio"], desc: "Potenziamento: Mega Mewtwo X colpisce con forza psico-fisica da abbattere chiunque. Lv.11: Danno massiccio aumentato." },
        { name: "Ombrartigli", level: 4, cd: "6.00s", tags: ["Scatto", "Riduzione difese"], desc: "Attacca con un colpo che riduce tutte le difese del nemico del 40% per 5s. Lv.11: Riduzione difese aumentata." },
      ]},
      { slot: 2, choices: [
        { name: "Furtivombra", level: 6, cd: "11.00s", tags: ["Area", "Danno"], desc: "Mega Mewtwo X combina forza fisica e psichica per un attacco devastante ad area. Lv.13: Area e danni aumentati." },
        { name: "Dolcetto o Scherzetto", level: 6, cd: "12.00s", tags: ["Scudo", "Riflessione"], desc: "Crea una barriera psichica impenetrabile che riflette il 30% dei danni subiti per 5s. Lv.13: Scudo e riflessione aumentati." },
      ]},
    ],
    unite: { name: "Giochiamo Insieme?", level: 9, desc: "Mega Mewtwo X libera tutta la propria energia psico-fisica in un'esplosione che devasta l'area intera, infliggendo danni assoluti a tutti i nemici e stordendoli per 4s. Uno degli attacchi Unite più potenti del gioco." },
    builds: [
      { name: "Build: Dominio Fisico", path: "Percorso Fisico", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Graffio" }, { lv: 4, name: "Carineria" }, { lv: 6, name: "Furtivombra" }],
        held: ["Fisico di Ferro", "Guanto del Campione", "Nocciola Enerbia"], battle: "Pulsantescatto",
        note: "Il Versatile con più ATK nel gioco: ogni 5 attacchi il bonus x2 può eliminare istantaneamente i carry." },
      { name: "Build: Sfondamento Difensivo", path: "Percorso Penetrazione", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Graffio" }, { lv: 4, name: "Ombrartigli" }, { lv: 6, name: "Dolcetto o Scherzetto" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Nocciola Enerbia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "S", lane: "Corsia Superiore", strengths: "ATK più alto del roster, passivo devastante con bonus x2, intimidisce i nemici riducendone l'ATK, quasi impossibile da sfidare in 1vs1, ottimo engage", weaknesses: "Target prioritario per il team avversario, richiede protezione nella fase iniziale, meno efficace a distanza rispetto a Mega Mewtwo Y" },
  },

  781: { // Dhelmise
    stats: { ps: 8800, atk: 480, def: 540, atksp: 115, defsp: 410, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Presa dell'Ancora", desc: "Dhelmise rallenta automaticamente i nemici con cui è in contatto del 15%. Ogni 8s, la catena di Dhelmise si attiva automaticamente agganciando il nemico più vicino e attirandolo." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Dhelmise fa roteare l'ancora infliggendo danni fisici ad area davanti a sé.", dmgBase: "104% Atk + 5 x (Livello - 1) + 0", dmgBoost: "165% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Beccata", level: "1 o 3", cd: "7.00s", tags: ["Area", "Danno"], desc: "Dhelmise fa roteare la propria ancora in un ampio cerchio, infliggendo danni a tutti i nemici vicini." },
      { slot: 2, name: "Ancorata", level: "1 o 3", cd: "10.00s", tags: ["CC", "Rallentamento"], desc: "Lancia alghe marine che imprigionano i nemici nell'area, rallentandoli gravemente per 3s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Vigorcolpo", level: 4, cd: "8.00s", tags: ["Proiettile", "Stordimento"], desc: "Dhelmise lancia l'ancora verso un nemico lontano stordendolo e attraendolo verso di sé. Lv.11: Distanza e stordimento aumentati." },
        { name: "Spettrotuffo", level: 4, cd: "7.00s", tags: ["Area", "Danno massiccio"], desc: "Fa cadere l'ancora con forza devastante su un'area, infliggendo danni enormi. Lv.11: Area e danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Giroballa", level: 6, cd: "12.00s", tags: ["Area", "CC"], desc: "Fa crescere un'enorme foresta di alghe che intrappola tutti i nemici nell'area per 2s. Lv.13: Area e durata aumentati." },
        { name: "Pesobomba", level: 6, cd: "14.00s", tags: ["Scudo", "Rigenerazione"], desc: "Dhelmise crea uno scudo oceano attorno a sé che assorbe danni e lentamente rigenera i PS degli alleati vicini. Lv.13: Scudo e rigenerazione aumentati." },
      ]},
    ],
    unite: { name: "Ancoraggio Gigavolt", level: 9, desc: "Dhelmise scatena la propria forza spettrale in un'esplosione d'ancora gigantesca che intrappola tutti i nemici nell'area, li attira verso il centro e li sommerge con danni enormi." },
    builds: [
      { name: "Build: Ancora del Team", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Ancorata" }, { lv: 4, name: "Vigorcolpo" }, { lv: 6, name: "Giroballa" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce",
        note: "Lancio Ancora + Foresta Marina: combo di CC a catena che blocca l'intero team avversario nei teamfight." },
      { name: "Build: Muro Oceanico", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Beccata" }, { lv: 3, name: "Ancorata" }, { lv: 4, name: "Spettrotuffo" }, { lv: 6, name: "Pesobomba" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Kit di CC continuo unico (passivo di rallentamento + mosse), PS altissimi, ottimo per bloccare i nemici durante gli obiettivi, facile da giocare", weaknesses: "Quasi nessun danno offensivo, dipende dagli alleati per sfruttare il CC, lento e immobile" },
  },

  395: { // Empoleon
    stats: { ps: 8500, atk: 115, def: 520, atksp: 670, defsp: 400, crit: "20%", cd: "0%", life: "15%" },
    passive: { name: "Torrent", desc: "Quando i PS di Empoleon scendono sotto il 50%, il danno di tutte le sue mosse acquatiche aumenta del 25%. Il ghiaccio che genera con gli attacchi rallenta i nemici del 20% per 2s." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Empoleon colpisce con le pinne d'acciaio tagliente infliggendo danni fisici aumentati e congelando parzialmente il nemico.", dmgBase: "103% Atk + 5 x (Livello - 1) + 0", dmgBoost: "158% Atk + 16 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Surf", level: "1 o 3", cd: "7.00s", tags: ["Scatto", "Area"], desc: "Empoleon cavalca un'onda d'acqua verso i nemici, infliggendo danni a tutti quelli sul percorso." },
      { slot: 2, name: "Ghiacciolampo", level: "1 o 3", cd: "9.00s", tags: ["Proiettile", "Congelamento"], desc: "Lancia un proiettile di ghiaccio che congela il nemico colpito per 1.5s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Bolla d'Acciaio", level: 4, cd: "8.00s", tags: ["Scatto", "Scudo"], desc: "Empoleon si lancia verso i nemici coperto di acciaio acquatico, infliggendo danni e generando uno scudo. Lv.11: Scudo e danni aumentati." },
        { name: "Acqua Cannone", level: 4, cd: "7.00s", tags: ["Proiettile", "Respingimento"], desc: "Spara un potente getto d'acqua che rispinge i nemici colpiti lontano. Lv.11: Potenza e distanza di respingimento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Ghiacciostorm", level: 6, cd: "11.00s", tags: ["Area", "Congelamento"], desc: "Crea una tormenta di ghiaccio che congela tutti i nemici nell'area per 2s. Lv.13: Area e durata congelamento aumentati." },
        { name: "Difesa Acciaio", level: 6, cd: "13.00s", tags: ["Scudo", "Riduzione danni"], desc: "Empoleon si copre di acciaio e ghiaccio riducendo tutti i danni subiti del 40% per 5s. Lv.13: Riduzione danni aumentata." },
      ]},
    ],
    unite: { name: "Blizzard Imperiale", level: 9, desc: "Empoleon scatena un blizzard imperiale che congela l'intera area di gioco, blocca tutti i nemici per 3s e infligge danni enormi. Gli alleati vicini ottengono uno scudo di ghiaccio." },
    builds: [
      { name: "Build: Vanguard d'Acciaio", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Surf" }, { lv: 3, name: "Ghiacciolampo" }, { lv: 4, name: "Bolla d'Acciaio" }, { lv: 6, name: "Difesa Acciaio" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce",
        note: "Tank frontliner: Bolla d'Acciaio per engaging sicuro e Difesa Acciaio per resistere al danno in teamfight." },
      { name: "Build: Controllo Gelo", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Surf" }, { lv: 3, name: "Ghiacciolampo" }, { lv: 4, name: "Acqua Cannone" }, { lv: 6, name: "Ghiacciostorm" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "PS e difese altissime, ottimo engage con Surf, congelamento multiplo devastante, passivo che potenzia col danno ricevuto, buon frontliner per il team", weaknesses: "Bassa mobilità fuori dalla Surf, scarso danno offensivo, poco efficace in 1vs1 contro nemici con alto danno speciale" },
  },

  706: { // Goodra
    stats: { ps: 10300, atk: 300, def: 620, atksp: 450, defsp: 590, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Rivestimento Mucoso", desc: "Goodra è rivestita di un muco che riduce il 20% di tutti i danni subiti. Ogni mossa che infligge danni ha il 30% di probabilità di generare uno scudo temporaneo basato sui danni inflitti." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Goodra spara un proiettile di muco denso che infligge danni speciali e rallenta il nemico del 25% per 2s.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "38% AttSp + 10 x (Livello - 1) + 140" },
    moves: [
      { slot: 1, name: "Bolla", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Danno"], desc: "Goodra spara un soffio draconico a distanza che infligge danni speciali e rallenta i nemici colpiti." },
      { slot: 2, name: "Azione", level: "1 o 3", cd: "9.00s", tags: ["Area", "Veleno"], desc: "Goodra lancia una sfera di muco acido che avvelena e rallenta tutti i nemici nell'area." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fangonda", level: 4, cd: "7.00s", tags: ["Proiettile", "Danno massiccio"], desc: "Goodra carica e lancia un potente impulso draconico con danno speciale elevato. Lv.11: Danno e velocità aumentati." },
        { name: "Dragopulsar", level: 4, cd: "8.00s", tags: ["Area", "Rallentamento"], desc: "Spara un proiettile di muco che esplode all'impatto rallentando gravemente tutti nell'area. Lv.11: Area e rallentamento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Vigorcolpo", level: 6, cd: "12.00s", tags: ["Scudo", "Auto-potenziamento"], desc: "Goodra esegue una danza che genera uno scudo enorme e aumenta la DEFsp per 8s. Lv.13: Scudo e DEFsp aumentati." },
        { name: "Scudacidolo", level: 6, cd: "10.00s", tags: ["Area", "Danno continuo"], desc: "Crea una zona di muco che infligge danni continui e rallenta i nemici che vi entrano per 5s. Lv.13: Danni e durata aumentati." },
      ]},
    ],
    unite: { name: "Rigenerapioggia", level: 9, desc: "Goodra scatena un'ondata di muco draconico su tutta l'area, infliggendo danni speciali massicci, avvelenando e rallentando tutti i nemici, e generando uno scudo enorme per sé stessa." },
    builds: [
      { name: "Build: Scudo Draconico", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Bolla" }, { lv: 3, name: "Azione" }, { lv: 4, name: "Fangonda" }, { lv: 6, name: "Vigorcolpo" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Campanello Conchiglia"], battle: "Raggeloluce",
        note: "Goodra eccelle come Difensore a distanza: rallenta i nemici mentre il team li finisce, e si protegge con gli scudi." },
      { name: "Build: Controllo Muco", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Bolla" }, { lv: 3, name: "Azione" }, { lv: 4, name: "Dragopulsar" }, { lv: 6, name: "Scudacidolo" }],
        held: ["Fisico di Ferro", "Barrierlente", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Difensore a distanza unico, passivo di scudo automatico, resistentissima grazie al rivestimento, ottimo poke con rallentamento continuo, difficile da abbattere", weaknesses: "Scarso danno diretto, dipende dagli alleati per seguire up sul CC, meno efficace in duelli ravvicinati contro nemici con alta mobilità" },
  },

  245: { // Suicune
    stats: { ps: 6900, atk: 290, def: 290, atksp: 780, defsp: 230, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Acqua Purificante", desc: "Suicune purifica l'area circostante rimuovendo ogni 10s il debuff di status più recente dagli alleati vicini. Gli attacchi base di Suicune hanno il 20% di probabilità di congelare brevemente il nemico." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Suicune attacca con un soffio di vento polare che infligge danni speciali e crea una zona ghiacciata dove colpisce.", dmgBase: "100% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 130" },
    moves: [
      { slot: 1, name: "Bollabraggio", level: "1 o 3", cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Suicune spara un potente getto d'acqua che infligge danni speciali al primo nemico colpito." },
      { slot: 2, name: "Ventogelo", level: "1 o 3", cd: "9.00s", tags: ["Area", "Rallentamento"], desc: "Suicune soffia un vento polare che rallenta e danneggia tutti i nemici davanti a sé." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Idropompa", level: 4, cd: "8.00s", tags: ["Area", "CC"], desc: "Crea un vortice d'acqua che risucchia i nemici verso il centro e li rallenta gravemente. Lv.11: Raggio e rallentamento aumentati." },
        { name: "Purogelo", level: 4, cd: "7.00s", tags: ["Area", "Congelamento"], desc: "Scatena una tormenta gelata su un'area che congela i nemici per 2s. Lv.11: Area e durata congelamento aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Velaurora", level: 6, cd: "11.00s", tags: ["Area", "Scudo Alleati"], desc: "Crea una nebbia gelata che rallenta i nemici nell'area e genera uno scudo per gli alleati dentro. Lv.13: Scudo e rallentamento aumentati." },
        { name: "Specchiovelo", level: 6, cd: "12.00s", tags: ["Cura Alleati", "Velocità"], desc: "Invia un vento purificante che cura gli alleati vicini e aumenta la loro velocità di movimento per 4s. Lv.13: Cura e velocità aumentate." },
      ]},
    ],
    unite: { name: "Grazia del Vento del Nord", level: 9, desc: "Suicune scatena il suo potere acquatico leggendario, congelando l'intera area di gioco per 3s e infliggendo danni speciali massicci. Gli alleati nell'area ottengono uno scudo potente." },
    builds: [
      { name: "Build: Ghiaccio e Scudo", path: "Percorso Gelo", moveLevels: [{ lv: 1, name: "Bollabraggio" }, { lv: 3, name: "Ventogelo" }, { lv: 4, name: "Purogelo" }, { lv: 6, name: "Velaurora" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce",
        note: "Blizzard + Nebbia Artica: ottima combo di controllo e protezione alleati nei teamfight." },
      { name: "Build: Supporto Puro", path: "Percorso Purificazione", moveLevels: [{ lv: 1, name: "Bollabraggio" }, { lv: 3, name: "Ventogelo" }, { lv: 4, name: "Idropompa" }, { lv: 6, name: "Specchiovelo" }],
        held: ["Fisico di Ferro", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Superiore", strengths: "Passivo di rimozione debuff unico, ottimo controllo con congelamenti, buona resistenza, supporto discreto per gli alleati con Vento Sacro", weaknesses: "Basso danno offensivo, poco impatto diretto nei fight 1vs1, richiede coordinazione col team per sfruttare il CC" },
  },

  959: { // Tinkaton
    stats: { ps: 8400, atk: 460, def: 330, atksp: 115, defsp: 430, crit: "0%", cd: "0%", life: "15%" },
    passive: { name: "Martello da Fata", desc: "Il gigantesco martello di Tinkaton ha un peso colossale: ogni attacco base ha il 15% di probabilità di stordire brevemente il nemico. Ogni 5 attacchi, infligge il 150% di danni con il successivo colpo." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Tinkaton colpisce con tutto il peso del suo martello, infliggendo danni fisici enormi ad area davanti a sé.", dmgBase: "106% Atk + 7 x (Livello - 1) + 0", dmgBoost: "172% Atk + 19 x (Livello - 1) + 0" },
    moves: [
      { slot: 1, name: "Sbigottimento", level: "1 o 3", cd: "7.00s", tags: ["Area", "Danno"], desc: "Tinkaton sbatte il martello a terra con forza devastante, infliggendo danni ad area davanti a sé." },
      { slot: 2, name: "Martelfata", level: "1 o 3", cd: "10.00s", tags: ["Scudo", "Protezione"], desc: "Genera uno scudo fatato attorno a sé che assorbe danni ingenti per 4s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Martello Gigante", level: 4, cd: "8.00s", tags: ["Area ampia", "Stordimento"], desc: "Tinkaton porta il martello in alto e lo abbatte con forza su un'area enorme stordendo tutti i nemici colpiti. Lv.11: Area e stordimento aumentati." },
        { name: "Strisciacolpo", level: 4, cd: "7.00s", tags: ["Proiettile", "CC"], desc: "Lancia il martello verso un nemico lontano che lo colpisce e lo attira verso Tinkaton. Lv.11: Distanza e danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Cannone Flash", level: 6, cd: "13.00s", tags: ["Scudo grande", "Aura"], desc: "Tinkaton crea una fortezza magica che protegge tutti gli alleati vicini per 5s. Lv.13: Scudo e durata aumentati." },
        { name: "Privazione", level: 6, cd: "11.00s", tags: ["Scudo", "Danno di ritorno"], desc: "Crea uno scudo che riflette il 40% dei danni subiti verso i nemici. Lv.13: Scudo e riflessione aumentati." },
      ]},
    ],
    unite: { name: "Capriccio di Tinkaton", level: 9, desc: "Tinkaton raccoglie tutta la propria forza e abbatte il martello con un colpo leggendario che spezza il terreno, stordisce tutti i nemici per 4s e infligge danni catastrofici ad area enorme." },
    builds: [
      { name: "Build: Fortezza Fatata", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Martelfata" }, { lv: 4, name: "Martello Gigante" }, { lv: 6, name: "Cannone Flash" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Barrierlente"], battle: "Raggeloluce",
        note: "Gigantesco Martello stordisce l'intera squadra avversaria: usa la Unite Fortezza nell'immediato teamfight successivo." },
      { name: "Build: Difesa Attiva", path: "Percorso Riflesso", moveLevels: [{ lv: 1, name: "Sbigottimento" }, { lv: 3, name: "Martelfata" }, { lv: 4, name: "Strisciacolpo" }, { lv: 6, name: "Privazione" }],
        held: ["Fisico di Ferro", "Cookie Aeos", "Campanello Conchiglia"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Superiore", strengths: "Kit fantastico per i teamfight (stordimento ad area + protezione alleati), passivo di stordimento frequente, alta resistenza, ottimo frontliner", weaknesses: "Lenta e poco mobile, stordimento del passivo dipende dalla fortuna, meno efficace in engage lontano" },
  },

  869: { // Alcremie
    stats: { ps: 9000, atk: 280, def: 320, atksp: 696, defsp: 370, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Decorazione Dolce", desc: "Ogni volta che Alcremie usa una mossa di cura su un alleato, ottiene uno stack di Dolcezza (max 5). Ad ogni stack, la prossima cura è più potente del 10% per stack." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Alcremie lancia una crema speciale che cura leggermente il primo alleato vicino invece di danneggiare i nemici.", dmgBase: "95% Atk + 0 x (Livello - 1) + 0", dmgBoost: "Cura: 25% AttSp + 8 x (Livello - 1) + 100" },
    moves: [
      { slot: 1, name: "Profumino", level: "1 o 3", cd: "6.00s", tags: ["Area", "Rallentamento"], desc: "Alcremie rilascia un aroma dolcissimo che rallenta i nemici vicini e genera un piccolo scudo per gli alleati." },
      { slot: 2, name: "Decorazione", level: "1 o 3", cd: "10.00s", tags: ["Cura", "Area"], desc: "Crea una nebbia di energia fatata che cura tutti gli alleati nell'area per 4s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Magibrillio", level: 4, cd: "8.00s", tags: ["Proiettile", "CC"], desc: "Lancia una torta di crema esplosiva che stordisce il primo nemico colpito e sparge crema curativa sugli alleati vicini. Lv.11: Cura e stordimento aumentati." },
        { name: "Nebbia", level: 4, cd: "9.00s", tags: ["Scudo", "Protezione Alleati"], desc: "Ricopre un alleato designato di crema protettiva che genera uno scudo e riduce i danni subiti del 25% per 5s. Lv.11: Scudo e riduzione danni aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Scudacidolo", level: 6, cd: "12.00s", tags: ["Cura massiva", "Area"], desc: "Alcremie scatena una pioggia di panna su un'area ampia che cura ingentemente tutti gli alleati colpiti. Lv.13: Cura e area aumentate." },
        { name: "Aromaterapia", level: 6, cd: "10.00s", tags: ["CC", "Addormentamento"], desc: "Manda un bacio dolcissimo che addormenta il nemico bersaglio per 2s. Lv.13: Durata addormentamento aumentata." },
      ]},
    ],
    unite: { name: "Pioggia di Panna", level: 9, desc: "Alcremie si espande in una forma gigantesca e inonda l'area di crema fatata: cura enormemente tutti gli alleati, genera scudi per ognuno e addormenta tutti i nemici vicini per 3s." },
    builds: [
      { name: "Build: Dolcissimo Supporto", path: "Percorso Cura", moveLevels: [{ lv: 1, name: "Profumino" }, { lv: 3, name: "Decorazione" }, { lv: 4, name: "Magibrillio" }, { lv: 6, name: "Scudacidolo" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce",
        note: "Accumulare stack di Dolcezza prima dei teamfight potenzia enormemente la Pioggia di Panna successiva." },
      { name: "Build: Controllo e Cura", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Profumino" }, { lv: 3, name: "Decorazione" }, { lv: 4, name: "Nebbia" }, { lv: 6, name: "Aromaterapia" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Pietra Levitante"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Inferiore", strengths: "Cura continua potente, passivo che scala la cura, ottimo in coppia con carry dipendenti dalla sopravvivenza, G-Max forte nei teamfight", weaknesses: "Quasi nessun danno, vulnerabile agli assassini, meno impatto di altri supporti nei fight aggressivi" },
  },

  250: { // Ho-Oh
    stats: { ps: 9900, atk: 380, def: 540, atksp: 116, defsp: 420, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Rigenerazione Sacra", desc: "Ho-Oh rigenera i PS degli alleati vicini di 1% al secondo. Quando un alleato viene eliminato nei pressi di Ho-Oh, il proprio Attacco Unite si ricarica più velocemente." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Ho-Oh batte le ali sacre scagliando piume di fuoco sacro che curano leggermente gli alleati vicini.", dmgBase: "98% Atk + 0 x (Livello - 1) + 0", dmgBoost: "35% AttSp + 10 x (Livello - 1) + 120" },
    moves: [
      { slot: 1, name: "Appollaio", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Danno"], desc: "Ho-Oh lancia una piuma infuocata sacra verso il nemico infliggendo danni e lasciando fiamme a terra." },
      { slot: 2, name: "Raffica", level: "1 o 3", cd: "10.00s", tags: ["Scudo Alleati", "Cura"], desc: "Sparge un velo di energia sacra che cura e protegge tutti gli alleati nell'area per 5s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fuocobomba", level: 4, cd: "8.00s", tags: ["Area", "Bruciatura"], desc: "Ho-Oh scatena fiamme sacre su un'area che bruciano i nemici infliggendo danni nel tempo. Lv.11: Area e danni aumentati." },
        { name: "Magifuoco", level: 4, cd: "7.00s", tags: ["Scatto", "Danno"], desc: "Ho-Oh si lancia in avolo con ali arcobaleno infliggendo danni ai nemici nel percorso. Lv.11: Danni e lunghezza aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Aereattacco", level: 6, cd: "13.00s", tags: ["Cura massiva", "Resurrezione"], desc: "Ho-Oh guarisce completamente un alleato con pochi PS e rimuove tutti i debuff. Lv.13: Cura potenziata." },
        { name: "Volo", level: 6, cd: "11.00s", tags: ["Potenziamento Alleati", "Area"], desc: "Ho-Oh crea un arcobaleno sacro che potenzia le statistiche di tutti gli alleati nell'area per 6s. Lv.13: Bonus e durata aumentati." },
      ]},
    ],
    unite: { name: "Fiamma della Rinascita", level: 9, desc: "Ho-Oh spicca il volo e benedice l'intera squadra: cura tutti gli alleati del 40% dei PS massimi, genera scudi potenti e potenzia le statistiche di tutto il team per 8s." },
    builds: [
      { name: "Build: Angelo Protettore", path: "Percorso Cura", moveLevels: [{ lv: 1, name: "Appollaio" }, { lv: 3, name: "Raffica" }, { lv: 4, name: "Fuocobomba" }, { lv: 6, name: "Aereattacco" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce",
        note: "Cura Sacra salva i carry alla soglia della morte: usala nei momenti critici per invertire i teamfight." },
      { name: "Build: Benedizione Totale", path: "Percorso Potenziamento", moveLevels: [{ lv: 1, name: "Appollaio" }, { lv: 3, name: "Raffica" }, { lv: 4, name: "Magifuoco" }, { lv: 6, name: "Volo" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Pietra Levitante"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Inferiore", strengths: "Rigenerazione passiva eccellente, cura di emergenza potente, potenziamento dell'intero team, ottimo nelle partite lunghe dove il team si regge", weaknesses: "Basso impatto diretto nelle fight rapide, vulnerabile agli assassini, richiede buona lettura del momento per Cura Sacra" },
  },

  380: { // Latias
    stats: { ps: 8600, atk: 330, def: 300, atksp: 850, defsp: 320, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Levitate", desc: "Latias è immune agli effetti delle trappole a terra. Ogni mossa difensiva usata riduce il cooldown della successiva del 15%." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Latias lancia un raggio psico-dragoico che infligge danni speciali e rallenta il nemico.", dmgBase: "96% Atk + 0 x (Livello - 1) + 0", dmgBoost: "34% AttSp + 9 x (Livello - 1) + 110" },
    moves: [
      { slot: 1, name: "Foschisfera", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Danno"], desc: "Latias spara raggi lucenti verso i nemici infliggendo danni speciali." },
      { slot: 2, name: "Fascino", level: "1 o 3", cd: "9.00s", tags: ["Scudo Alleati", "Mobilità"], desc: "Latias crea un campo magnetico che scherma gli alleati vicini e aumenta la propria velocità." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Zuccata Zen", level: 4, cd: "10.00s", tags: ["Scudo", "Riflessione"], desc: "Latias genera una bolla psichica attorno a un alleato che assorbe danni e li riflette parzialmente. Lv.11: Scudo e riflessione aumentati." },
        { name: "Ripresa", level: 4, cd: "7.00s", tags: ["Proiettile", "Doppio"], desc: "Latias e la sua aura sparano due raggi simultanei verso i nemici. Lv.11: Danni e angolo aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Dragopulsar", level: 6, cd: "12.00s", tags: ["Mobilità", "Protezione Alleati"], desc: "Latias vola verso un alleato designato proteggendolo temporaneamente con la propria presenza (riduzione danni 30%). Lv.13: Riduzione danni e durata aumentati." },
        { name: "Riflesso", level: 6, cd: "11.00s", tags: ["Potenziamento Alleati", "Velocità"], desc: "Potenzia la velocità di attacco e movimento di tutti gli alleati vicini per 5s. Lv.13: Bonus aumentati." },
      ]},
    ],
    unite: { name: "Ali di Latias", level: 9, desc: "Latias e il suo gemello Latios uniscono le forze per proteggere l'intera squadra: tutti gli alleati ottengono uno scudo enorme, rigenerazione di PS e potenziamento delle statistiche per 7s." },
    builds: [
      { name: "Build: Scudo Psichico", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Foschisfera" }, { lv: 3, name: "Fascino" }, { lv: 4, name: "Zuccata Zen" }, { lv: 6, name: "Dragopulsar" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce",
        note: "Volo Galattico verso il carry nei momenti critici: proteggere il carry è la priorità assoluta." },
      { name: "Build: Potenziamento Gemello", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Foschisfera" }, { lv: 3, name: "Fascino" }, { lv: 4, name: "Ripresa" }, { lv: 6, name: "Riflesso" }],
        held: ["Cookie Aeos", "Pietra Levitante", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Inferiore", strengths: "Immunità ai terreni, eccellente protezione del carry con Volo Galattico, cooldown ridotti con il passivo, buon potenziamento del team", weaknesses: "Basso danno diretto, dipende dagli alleati, vulnerabile agli assassini che la isolano" },
  },

  54: { // Psyduck
    stats: { ps: 9000, atk: 320, def: 370, atksp: 650, defsp: 310, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Mal di Testa", desc: "Man mano che Psyduck subisce danni, il suo Mal di Testa si intensifica: al 30% di PS, le proprie mosse guadagnano un'aura psichica che stordisce automaticamente i nemici nelle vicinanze." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Psyduck rilascia un'ondata psichica che infligge danni speciali ad area davanti a sé.", dmgBase: "97% Atk + 0 x (Livello - 1) + 0", dmgBoost: "35% AttSp + 9 x (Livello - 1) + 100" },
    moves: [
      { slot: 1, name: "Pistolacqua", level: "1 o 3", cd: "7.00s", tags: ["Area", "CC"], desc: "Psyduck inonda l'area di energia psichica confondendo i nemici e riducendo la loro precisione." },
      { slot: 2, name: "Confusione", level: "1 o 3", cd: "8.00s", tags: ["Proiettile", "Danno"], desc: "Psyduck spara un potente getto d'acqua verso i nemici infliggendo danni speciali." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Surf", level: 4, cd: "8.00s", tags: ["Area", "Stordimento"], desc: "Psyduck scatena una potente ondata psichica che stordisce tutti i nemici nell'area. Lv.11: Area e stordimento aumentati." },
        { name: "Idropompa", level: 4, cd: "10.00s", tags: ["Auto-potenziamento", "Cura"], desc: "Psyduck dimentica il dolore, recuperando PS e aumentando il proprio AttSp per 6s. Lv.11: Cura e bonus aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Amnesia", level: 6, cd: "11.00s", tags: ["CC", "Sollevamento"], desc: "Psyduck solleva telecineticamente il nemico designato rendendolo vulnerabile per 3s e infliggendo danni. Lv.13: Durata e danni aumentati." },
        { name: "Psichico", level: 6, cd: "12.00s", tags: ["Scudo", "Riflessione"], desc: "Genera uno scudo psichico che blocca i danni e li riflette al 25% verso il nemico. Lv.13: Scudo e riflessione aumentati." },
      ]},
    ],
    unite: { name: "Panico da Emicrania", level: 9, desc: "Il terribile mal di testa di Psyduck esplode in un'onda psichica devastante ad area enorme, stordendo tutti i nemici per 4s e infliggendo danni enormi basati sui danni subiti in precedenza." },
    builds: [
      { name: "Build: Psichico Caotico", path: "Percorso Controllo", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Confusione" }, { lv: 4, name: "Surf" }, { lv: 6, name: "Amnesia" }],
        held: ["Cookie Aeos", "Amplienergia", "Barrierlente"], battle: "Raggeloluce",
        note: "Abbassati intenzionalmente ai PS per attivare il passivo: lo stordimento automatico è devastante nei teamfight." },
      { name: "Build: Supporto e Scudo", path: "Percorso Difensivo", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Confusione" }, { lv: 4, name: "Idropompa" }, { lv: 6, name: "Psichico" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Inferiore", strengths: "Passivo di stordimento unico (attivo a bassi PS), ottimo CC con Psichico, Esplosione Unite devastante, meccanica di gameplay intrigante e originale", weaknesses: "Sfruttare il passivo è rischioso (bisogna avere pochi PS), basse statistiche difensive, richiede molta pratica" },
  },

  10196: { // Rapidash (Galarian)
    stats: { ps: 7800, atk: 320, def: 330, atksp: 720, defsp: 361, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Misty Surge", desc: "Rapidash di Galar crea un terreno fatato attorno a sé che immunizza gli alleati vicini agli stati di status (paralisi, sonno, confusione) e aumenta la propria rigenerazione di PS." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Rapidash sfreccia verso il nemico con le criniere fatate accese, infliggendo danni speciali e rallentandolo.", dmgBase: "97% Atk + 0 x (Livello - 1) + 0", dmgBoost: "36% AttSp + 10 x (Livello - 1) + 115" },
    moves: [
      { slot: 1, name: "Confusione", level: "1 o 3", cd: "6.00s", tags: ["Area", "Rallentamento"], desc: "Rapidash soffia un vento fatato che rallenta i nemici e cura leggermente gli alleati davanti a sé." },
      { slot: 2, name: "Vento di Fata", level: "1 o 3", cd: "10.00s", tags: ["Cura", "Status"], desc: "Rapidash benedice l'alleato con meno PS curandolo e rimuovendo tutti i suoi debuff." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Psicotaglio", level: 4, cd: "8.00s", tags: ["Proiettile", "CC"], desc: "Rapidash lancia un raggio di energia fatata che stordisce il primo nemico colpito. Lv.11: Danni e stordimento aumentati." },
        { name: "Forza Equina", level: 4, cd: "9.00s", tags: ["Area", "Scudo Alleati"], desc: "Genera un campo mistico che genera scudi per tutti gli alleati nell'area. Lv.11: Scudo e area aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Ondasana", level: 6, cd: "13.00s", tags: ["Cura massiva", "Rimozione CC"], desc: "Rapidash cura massivamente sé stessa e un alleato vicino, rimuovendo tutti i CC attivi. Lv.13: Cura aumentata." },
        { name: "Agilità", level: 6, cd: "11.00s", tags: ["Scudo", "Zona"], desc: "Crea una zona di nebbia fatata che protegge tutti gli alleati al suo interno per 5s. Lv.13: Zona e protezione aumentati." },
      ]},
    ],
    unite: { name: "Carica Pastorale", level: 9, desc: "Rapidash di Galar galoppa attraverso il campo spargendo magia fatata, immunizzando l'intero team agli status per 6s, curando tutti gli alleati e generando scudi potenti." },
    builds: [
      { name: "Build: Nebbia Fatata", path: "Percorso Supporto", moveLevels: [{ lv: 1, name: "Confusione" }, { lv: 3, name: "Vento di Fata" }, { lv: 4, name: "Forza Equina" }, { lv: 6, name: "Ondasana" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce",
        note: "Il passivo Misty Surge è fondamentale: posizionati vicino ai carry per immunizzarli ai CC nemici." },
      { name: "Build: Cura e Controllo", path: "Percorso Ibrido", moveLevels: [{ lv: 1, name: "Confusione" }, { lv: 3, name: "Vento di Fata" }, { lv: 4, name: "Psicotaglio" }, { lv: 6, name: "Agilità" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Pietra Levitante"], battle: "Raggeloluce" },
    ],
    meta: { tier: "B", lane: "Corsia Inferiore", strengths: "Passivo di immunità ai CC per gli alleati eccezionale, buona cura e scudi, ottima contro team con molto CC, unico nel suo ruolo", weaknesses: "Basso danno, vulnerabile agli assassini, il passivo richiede vicinanza agli alleati che può essere rischiosa" },
  },

  134: { // Vaporeon
    stats: { ps: 10400, atk: 115, def: 610, atksp: 450, defsp: 580, crit: "0%", cd: "10%", life: "0%" },
    passive: { name: "Idratazione", desc: "Vaporeon rigenera i PS propri e degli alleati vicini del 2% al secondo quando è fuori dal combattimento attivo per almeno 3s. Questa rigenerazione si estende a qualsiasi alleato a contatto con l'acqua di Vaporeon." },
    basic: { name: "Attacco", desc: "Ogni terzo attacco diventa potenziato: Vaporeon si dissolve in acqua e riappare curando se stessa e l'alleato più vicino per un piccolo quantitativo.", dmgBase: "97% Atk + 0 x (Livello - 1) + 0", dmgBoost: "Cura: 28% AttSp + 9 x (Livello - 1) + 110" },
    moves: [
      { slot: 1, name: "Pistolacqua", level: "1 o 3", cd: "6.00s", tags: ["Proiettile", "Respingimento"], desc: "Vaporeon spara un potente getto d'acqua che rispinge i nemici e riduce la loro velocità." },
      { slot: 2, name: "Altruismo", level: "1 o 3", cd: "10.00s", tags: ["Cura", "Area"], desc: "Crea anelli d'acqua curativa intorno a sé che curano tutti gli alleati nell'area per 5s." },
    ],
    upgrades: [
      { slot: 1, choices: [
        { name: "Fangonda", level: 4, cd: "8.00s", tags: ["Scatto", "Cura"], desc: "Vaporeon cavalca un'onda verso un alleato, curandolo mentre passa e rispingendo i nemici sul percorso. Lv.11: Cura e distanza aumentate." },
        { name: "Idropompa", level: 4, cd: "7.00s", tags: ["Proiettile", "Danno"], desc: "Spara un getto d'acqua super potente con danno speciale elevato. Lv.11: Danni e portata aumentati." },
      ]},
      { slot: 2, choices: [
        { name: "Scudacidolo", level: 6, cd: "12.00s", tags: ["Invisibilità", "Cura"], desc: "Vaporeon si scioglie in acqua diventando invisibile per 3s e rigenerando i PS propri e degli alleati vicini. Lv.13: Durata e rigenerazione aumentate." },
        { name: "Acquaring", level: 6, cd: "14.00s", tags: ["Cura massiva", "Area"], desc: "Scatena un'ondata d'acqua curativa che guarisce ingentemente tutti gli alleati nell'area. Lv.13: Cura e area aumentate." },
      ]},
    ],
    unite: { name: "Vortice di Vaporeon", level: 9, desc: "Vaporeon si dissolve in un oceano di energia curativa che avvolge tutta l'area, rigenerando completamente i PS di tutti gli alleati vicini e generando scudi potenti per 8s." },
    builds: [
      { name: "Build: Acqua Guaritrice", path: "Percorso Cura", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Altruismo" }, { lv: 4, name: "Fangonda" }, { lv: 6, name: "Scudacidolo" }],
        held: ["Cookie Aeos", "Campanello Conchiglia", "Barrierlente"], battle: "Raggeloluce",
        note: "Surf Guaritrice è sia mobility che cura: usala per raggiungere carry in difficoltà durante i teamfight." },
      { name: "Build: Fantasma Liquido", path: "Percorso Furtivo", moveLevels: [{ lv: 1, name: "Pistolacqua" }, { lv: 3, name: "Altruismo" }, { lv: 4, name: "Idropompa" }, { lv: 6, name: "Acquaring" }],
        held: ["Cookie Aeos", "Amplienergia", "Barrierlente"], battle: "Raggeloluce" },
    ],
    meta: { tier: "A", lane: "Corsia Inferiore", strengths: "Rigenerazione passiva eccellente, cura continua tra i migliori del gioco, buona mobilità con Surf Guaritrice, ottimo in coppia con qualsiasi carry che necessita sopravvivenza", weaknesses: "Quasi nessun danno o CC, vulnerabile agli assassini, la rigenerazione passiva richiede di stare fuori dal fight per attivarsi" },
  },
};

export const HERO_POKEMON = [
  { id: 10067, name: "Mega Gyarados", winRate: 57.23, winRateChange: 0.9, type: "water", role: "Versatile" },
  { id: 10035, name: "Mega Charizard Y", winRate: 56.39, winRateChange: 0.73, type: "fire", role: "Attaccante" },
  { id: 10044, name: "Mega Mewtwo Y", winRate: 53.12, winRateChange: 0.84, type: "psychic", role: "Attaccante" },
  { id: 10071, name: "Mega Lucario", winRate: 53.03, winRateChange: 0.42, type: "fighting", role: "Versatile" },
  { id: 130, name: "Gyarados", winRate: 52.95, winRateChange: 0.28, type: "water", role: "Versatile" },
  { id: 134, name: "Vaporeon", winRate: 52.28, winRateChange: 0.3, type: "water", role: "Supporto" },
  { id: 54, name: "Psyduck", winRate: 52.03, winRateChange: -0.38, type: "water", role: "Supporto" },
  { id: 9, name: "Blastoise", winRate: 51.93, winRateChange: -0.19, type: "water", role: "Difensore" },
  { id: 937, name: "Ceruledge", winRate: 51.69, winRateChange: 0.29, type: "fire", role: "Velocista" },
  { id: 763, name: "Tsareena", winRate: 51.66, winRateChange: 1.23, type: "grass", role: "Versatile" },
];