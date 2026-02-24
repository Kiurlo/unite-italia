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
    title: "Video 1 — Titolo da aggiornare",
    description: "Descrizione del primo video da aggiornare.",
  },
  {
    id: "video-2",
    youtubeId: "_fFwYc2819g",
    title: "Video 2 — Titolo da aggiornare",
    description: "Descrizione del secondo video da aggiornare.",
  },
  {
    id: "video-3",
    youtubeId: "8-39exxuHJg",
    title: "Video 3 — Titolo da aggiornare",
    description: "Descrizione del terzo video da aggiornare.",
  },
];