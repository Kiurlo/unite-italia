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
    id: "patch-2026-02-20",
    date: "20 Febbraio 2026",
    title: "30° Anniversario — Leggende di Kanto e Grandi Novità",
    tag: "Aggiornamento Maggiore",
    tagColor: "#ef4444",
    summary: "Articuno, Zapdos e Moltres arrivano sull'Isola di Aeos! Nuova Modalità Solo, cambiamenti al sistema mosse, Groudon torna nelle Ranked e molto altro per il 30° anniversario di Pokémon.",
    sections: [
      {
        heading: "Le Leggende Originali Arrivano sull'Isola di Aeos",
        content: "Per il 30° anniversario di Pokémon, i Leggendari di Kanto — Articuno, Zapdos e Moltres — faranno la loro comparsa nelle Unite Battle. Articuno (Difensore): crea un dominio impenetrabile con la sua bufera di neve; la Mossa Unite congela persino la speranza di vittoria avversaria. Zapdos (Attaccante): domina il campo con potenti scariche elettriche amplificate; la Mossa Unite sfonda la difesa avversaria con fulmini devastanti. Moltres (Versatile): grazie a un'incredibile capacità rigenerativa, travolge gli avversari con fiamme intense; la Mossa Unite emette un bagliore cremisi che non lascia scappare nemmeno i nemici nascosti. I tre Pokémon saranno ottenibili tramite eventi sequenziali."
      },
      {
        heading: "Ottimizzazione dei Percorsi Mosse e Prezzi Licenze",
        content: "A partire da Zapdos (27 febbraio), i nuovi Pokémon avranno un solo percorso mosse per rendere il gioco più accessibile ai principianti. Il prezzo delle nuove Licenze Unite sarà fisso a 590 Gemme. I Pokémon esistenti mantengono i due percorsi mosse come prima. Nel 2026 verranno rilasciati nuovi Pokémon al ritmo di due al mese."
      },
      {
        heading: "Modifiche al Sistema di Apprendimento Mosse in Battaglia",
        content: "Dal 26 febbraio, le mosse non si scelgono più durante i passaggi di livello in battaglia, ma si impostano in anticipo nella schermata Lista Pokémon o nella Schermata di Preparazione prima della battaglia. Questo evita errori accidentali durante i momenti caotici e migliora il ritmo di gioco."
      },
      {
        heading: "Nuova Modalità Solo",
        content: "Dal 26 febbraio è disponibile la Modalità Solo, pensata per chi vuole esercitarsi contro la CPU senza la pressione del PvP. Si avanza completando stage in ordine, con composizioni di squadra predefinite. Completando gli stage si ottengono Punti Licenza, Potenziatori Oggetti e Licenze in Prestito. Le ricompense ripetibili (Punti Sparaeos) sono ottenibili fino a 3 volte al giorno. Utile sia per i principianti che per i veterani che vogliono prepararsi alle Ranked!"
      },
      {
        heading: "Groudon Torna nelle Ranked",
        content: "Dal 26 febbraio lo scenario delle Ranked passerà a Rovine del Cielo di Theia (Groudon). In futuro le Ranked ruoteranno regolarmente tra tre mappe: Rayquaza, Groudon e Kyogre, ognuna con tattiche e selezioni di Pokémon diverse."
      },
      {
        heading: "Super Panic Parade per i 30 Anni di Pokémon",
        content: "Dal 27 febbraio torna la modalità Parata del Panico in versione potenziata con Pokémon della regione di Kanto: Gengar, Zapdos, Mewtwo e altri si scaglieranno contro Tinkaton! Partecipando si ottengono Icone Allenatore dei Leggendari Articuno, Zapdos e Moltres."
      },
      {
        heading: "Aggiornamenti al Viaggio Licenze",
        content: "I Punti Licenza Unite sono ora ottenibili anche come ricompense nella Modalità Solo. Sono in arrivo ottimizzazioni ai metodi di distribuzione giornalieri e un aumento delle Selezioni Speciali per scegliere i Pokémon più liberamente dopo un certo progresso."
      },
      {
        heading: "PUACL 2026 Finals",
        content: "Il 28 e 29 marzo si terrà a Yokohama la PUACL2026 FINALS (Pokémon UNITE Asia Champions League), con 16 top team che si sfideranno davanti a oltre 5.000 spettatori. Il team vincitore si qualificherà per i WCS2026 di San Francisco ad agosto. L'evento sarà disponibile anche in live streaming sul canale ufficiale."
      },
    ],
  },
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
];