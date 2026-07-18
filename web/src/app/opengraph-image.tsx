import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "株式会社MIRUS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#05070c",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at top right, rgba(110,207,245,0.28), transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: "#6ecff5",
          }}
        />
        <div style={{ display: "flex", fontSize: 72, letterSpacing: "0.18em", fontWeight: 600 }}>
          <span>MI</span>
          <span style={{ color: "#6ecff5" }}>RUS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 28, color: "#6ecff5", letterSpacing: "0.16em" }}>
            MIRUS Inc.
          </div>
          <div style={{ fontSize: 36, color: "rgba(255,255,255,0.82)", maxWidth: 900 }}>
            北海道を、見る・伝える・つなぐ。
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
