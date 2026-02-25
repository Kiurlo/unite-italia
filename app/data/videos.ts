export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
}

/*
  Per modificare i video, cambia titolo e descrizione qui sotto.
  Lo youtubeId è la parte dopo "watch?v=" nel link di YouTube.
*/
export const VIDEOS: Video[] = [
  {
    id: "video-1",
    youtubeId: "dbT9d_6-4m0",
    title: "5 YOUTUBER PROVANO A VINCERE SU POKEMON UNITE!",
    description: "Siamo pronti per le Ranked? - Pokemon Unite ITA Episodio 2 - in compagnia di @leo, @Grax, @FedericoFRZN e @Frake!",
  },
  {
    id: "video-2",
    youtubeId: "_fFwYc2819g",
    title: "100 KILL IN 2 PARTITE! 😤 - Pokemon UNITE ITA",
    description: "Dopo le 100 kill, direi che dai prossimi video si va in Ranked!",
  },
  {
    id: "video-3",
    youtubeId: "8-39exxuHJg",
    title: "2026 EUIC Day 2 - Aeos Cup Bracket Stage | Pokémon UNITE Championship Series",
    description: "The Aeos Cup is live at the 2026 Europe International Championships in London, England!",
  },
];