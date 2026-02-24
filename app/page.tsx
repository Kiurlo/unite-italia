"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HeroSection } from "./components/HeroSection";
import { PatchNotesSection, PatchDetailPage } from "./components/PatchNotes";
import { MediaSection } from "./components/MediaSection";
import { PatchNote } from "./data/patches";

export default function HomePage() {
  const router = useRouter();
  const [patchDetail, setPatchDetail] = useState<PatchNote | null>(null);

  if (patchDetail) return <PatchDetailPage patch={patchDetail} onBack={() => setPatchDetail(null)} />;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "58px 20px 40px" }}>
      <HeroSection onSelect={(p) => router.push(`/pokemon/${p.id}`)} />
      <PatchNotesSection onOpenPatch={setPatchDetail} />
      <MediaSection />
    </div>
  );
}
