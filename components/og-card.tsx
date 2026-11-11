import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function OgCard({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090b10",
          color: "#f6f1e6",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              border: "2px solid #d7b56a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d7b56a",
              fontSize: "28px",
              letterSpacing: "0.04em",
            }}
          >
            MB
          </div>
          <div style={{ display: "flex", fontSize: "28px", letterSpacing: "0.14em", color: "#d7b56a" }}>
            MODERNE BOUW
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", fontSize: "28px", color: "#d7b56a" }}>{eyebrow}</div>
          <div style={{ display: "flex", fontSize: "76px", lineHeight: 1, letterSpacing: "-0.03em", maxWidth: "980px" }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "28px", color: "#c9c2b2" }}>Emmen · Drenthe</div>
      </div>
    ),
    { ...ogSize },
  );
}
