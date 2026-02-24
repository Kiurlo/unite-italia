"use client";

import { useState } from "react";
import { VIDEOS, Video } from "../data/videos";

const VideoCard = ({ video }: { video: Video }) => {
  const [hov, setHov] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
        borderRadius: 16,
        border: `1px solid ${hov ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)"}`,
        overflow: "hidden",
        transition: "all 0.3s",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 10px 30px rgba(139,92,246,0.15)" : "none",
      }}
    >
      {/* Thumbnail con play button */}
      <a
        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", position: "relative", aspectRatio: "16/9", overflow: "hidden" }}
      >
        <img
          src={thumb}
          alt={video.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          loading="lazy"
        />
        {/* Overlay scuro */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s",
        }}>
          {/* Play button */}
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "rgba(139,92,246,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 20px rgba(139,92,246,0.5)",
            transition: "transform 0.3s",
            transform: hov ? "scale(1.1)" : "scale(1)",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" fill="#fff" />
            </svg>
          </div>
        </div>
        {/* Badge YouTube */}
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: "rgba(255,0,0,0.85)", color: "#fff",
          fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
        }}>YouTube</div>
      </a>

      {/* Info */}
      <div style={{ padding: "14px 16px 18px" }}>
        <h3 style={{ color: "#f1f5f9", fontSize: 15, fontWeight: 700, margin: "0 0 6px", lineHeight: 1.4 }}>{video.title}</h3>
        <p style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5, margin: 0 }}>{video.description}</p>
      </div>
    </div>
  );
};

export const MediaSection = () => (
  <section style={{ padding: "0 0 48px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
      <h2 style={{ color: "#f8fafc", fontSize: 22, fontWeight: 800, margin: 0, whiteSpace: "nowrap" }}>Media</h2>
      <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 18 }}>
      {VIDEOS.map(v => <VideoCard key={v.id} video={v} />)}
    </div>
  </section>
);