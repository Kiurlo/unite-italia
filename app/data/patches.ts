export interface PatchNote {
  id: string;
  date: string;
  title: string;
  tag: string;
  tagColor: string;
  summary: string;
  sections: { heading: string; content: string }[];
}

export const PATCH_NOTES: PatchNote[] = [
  {
    id: "patch-2026-01-27",
    date: "27 Gennaio 2026",
    title: "Patch di Stabilità e Bilanciamento",
    tag: "Stabilità",
    tagColor: "#22c55e",
    summary: "Miglioramenti alla stabilità del gioco, ripresa del Draft Pick e bilanciamento di Meowth.",
    sections: [
      {
        heading: "Miglioramenti alla Stabilità",
        content: "In questo aggiornamento sono state implementate correzioni per ottimizzare la logica di elaborazione e ridurre il carico nelle aree in cui il processamento dei dati superava la capacità di memoria del dispositivo. Sebbene siano stati osservati miglioramenti nelle prestazioni nell'ambiente di sviluppo, continueremo a monitorare attentamente l'ambiente live dopo questo aggiornamento."
      },
      {
        heading: "Ripresa del Draft Pick",
        content: "È prevista la ripresa del Draft Pick nelle Partite Classificate non appena verrà confermata la stabilità del gioco nell'ambiente live dopo questo aggiornamento."
      },
      {
        heading: "Consigli per un Gameplay più Fluido",
        content: "Le prestazioni del gioco possono rallentare in base all'utilizzo della memoria del dispositivo, in particolare durante sessioni di gioco prolungate o quando più app sono in esecuzione in background. Per garantire le migliori prestazioni, si consiglia di riavviare l'app periodicamente."
      },
      {
        heading: "Bilanciamento — Meowth",
        content: "Fintattacco: Danni ridotti del 26%–32%, effetto scudo ridotto del 18%–22%. Unghiaguzze: La riduzione del tempo di ricarica per Ripagamento e Fintattacco per colpo è passata dal 15% al 7.5%. Il danno e lo scudo di Fintattacco erano troppo alti, e combinati con la capacità di ridurre significativamente i tempi di ricarica tramite Unghiaguzze, il suo output di danni, mobilità e resistenza erano tutti eccessivi."
      },
      {
        heading: "Correzione Bug",
        content: "Corretto un bug per cui gli attacchi di Empoleon non colpivano Darkrai durante la Mossa Unite di Darkrai."
      },
    ],
  },
  {
    id: "patch-spirito-indomabile",
    date: "22 Gennaio 2026",
    title: "Spirito Indomabile — Grande Bilanciamento",
    tag: "Bilanciamento",
    tagColor: "#f59e0b",
    summary: "Patch massiccia: buff a Garchomp, Ceruledge, Tinkaton, Darkrai, Charizard e altri. Nerf a Mega Gyarados, Glaceon, Zacian, Vaporeon e altri.",
    sections: [
      {
        heading: "Potenziamenti (Buff)",
        content: "Garchomp: PS, Difesa, Dif. Sp. e Tasso Critico aumentati per migliorare la resistenza e la minaccia in mischia. Ceruledge: Danni di Abilità Armatura Debole (+33%), Forza Fantasma (+8%, ricarica 10s→9s) e Lama Amara (+10%) aumentati. Tinkaton: Attacco Potenziato cura +20%, Martelgelo danni +25% e rallentamento migliorato (50%→70%), Abbattimento velocità ridotta su se stesso (50%→30%). Trevenant: Martellegno ricarica 9s→8s, danni +10%. Darkrai: Vuotoscuro ricarica 6s→5s, Brutte Intenzioni danni +15%, Ombrartigli danni +10% durante Pulsoscuro, energia Unite ridotta del 10%. Psyduck: Sottomissione danni +15% con propagazione doppia, Psichico ricarica 7.5s→6.5s, riduzione danni Unite 25%→30%. Charizard: Lanciafiamme danni +12%, durata volo Unite 8s→10s. Rapidash di Galar: Magibrillio danni +7.5%, Agilità velocità iniziale aumentata (5%→20%). Comfey: Curaflorale recupero +6%–14%, Fogliamagica ricarica 10s→9s."
      },
      {
        heading: "Indebolimenti (Nerf)",
        content: "Zacian: Mossa Unite cambiata da Inarrestabile a Resistente alle Limitazioni. Blaziken: Surriscaldamento cambiato da Inarrestabile a Resistente alle Limitazioni. Mega Gyarados: Abilità Rompiforma attacco +25%→+10%, difese +30%→+10%, Cascata (Mega) riduzione ricarica su colpo 30%→10%. Mega Charizard Y: Scudo Unite 20%→10% PS max, velocità Unite 50%→30%. Mewtwo X: Attacco ridotto, Teletrasporto bonus danni 20%→10%, Divinazione danni subiti aumentati 20%→10%, ricarica 9s→10s. Glaceon: Geloscheggia ricarica 5s→6s, danni -8%, energia Unite +11%. Scizor: Difesa da attacchi potenziati 50%→40%, Danzaspada attacco 20%→15%. Vaporeon: Fanghiglia ricarica 8.5s→9s, danni -15%, Retromarcia danni e scudo -15%. Latias: Dragopulsar ricarica 6s→6.5s, recupero -10%."
      },
      {
        heading: "Correzione Bug",
        content: "Corretti vari bug riguardanti Vaporeon (statistiche al Lv.5 invece che al Lv.4), Mega Lucario (Centripugno utilizzabile dopo fine Mega Evoluzione), e diversi problemi con le mosse di Darkrai (Ombrartigli, Pulsoscuro)."
      },
    ],
  },
  {
    id: "patch-2026-01-15",
    date: "15 Gennaio 2026",
    title: "Aggiornamento Funzionalità di Gennaio",
    tag: "Nuove Funzioni",
    tagColor: "#8b5cf6",
    summary: "Nuova funzione 'Re-Unite' per rigiocare con la stessa squadra, Quick Chat in lobby, evento Super Magikarp Splash e ritorno della Pallavolo Electrode.",
    sections: [
      {
        heading: "Nuova Funzione: Re-Unite!",
        content: "Introdotta la funzione \"Re-Unite\" che permette di rigiocare con la stessa squadra. I compagni che premono il pulsante \"Rivincita con questa squadra\" nella schermata dei risultati verranno automaticamente raggruppati per la prossima battaglia. Nella schermata potrai vedere lo stato di ogni compagno: cerchio verde (sta rivedendo i risultati), spunta verde (ha premuto il pulsante), X rossa (è offline o in un'altra schermata)."
      },
      {
        heading: "Quick Chat in Lobby",
        content: "La Quick Chat è ora disponibile nella schermata lobby! Sono state aggiunte nuove frasi per complimentarsi con la squadra: \"Grazie a tutti! Abbiamo vinto!\", \"Ben giocato! Prendo appunti!\", \"Grazie per il supporto! Il vero MVP sei tu!\"."
      },
      {
        heading: "Inviti alla Chat Vocale",
        content: "Nelle Partite Classificate dal Grado Master in su, ora è possibile invitare i compagni abbinati a unirsi alla Chat Vocale usando il pulsante microfono nella schermata di selezione Pokémon."
      },
      {
        heading: "Super Magikarp Splash!",
        content: "Dal 15 al 28 gennaio, l'evento \"Super Magikarp Splash\" è disponibile nelle Lotte Casuali, dove si possono usare solo le licenze di Gyarados e Mega Gyarados. Gioca durante l'evento per ottenere Emblemi Oro!"
      },
      {
        heading: "Ritorno della Pallavolo Electrode!",
        content: "La Pallavolo Electrode è tornata! È stata aggiunta alle Lotte Rapide così che tutti possano godersi questa modalità in qualsiasi momento."
      },
      {
        heading: "Aggiornamento Modalità Draft",
        content: "Nella Modalità Draft, la visibilità è stata migliorata: ora è possibile verificare l'ordine di scelta (Prima Scelta / Seconda Scelta)."
      },
      {
        heading: "Stabilità del Gioco",
        content: "È stato confermato un problema di crash dell'app, principalmente prima dell'inizio delle battaglie in Modalità Draft. L'indagine ha determinato che il problema è causato da fattori complessi. In questo aggiornamento sono state implementate correzioni per migliorare la stabilità."
      },
      {
        heading: "Correzione Bug",
        content: "Corretti diversi bug: Pawmot (Tuffulmine utilizzabile anche se immobilizzato), icona lampadina Condividi Esp. non visualizzata, Gyarados (direzione Dragosoffio durante Cascata errata), punti bonus errati per giocatori Leggenda in partite con Master."
      },
    ],
  },
];