import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4efe6",
          color: "#161513",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase" }}>
          Bloomington, Indiana
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>Vansh Mittal</div>
          <div style={{ fontSize: 30, maxWidth: 820, color: "#6a655c" }}>
            Finance × Accounting × Informatics
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#1c2c4a" }}>
          Indiana University · Kelley + Luddy
        </div>
      </div>
    ),
    size,
  );
}
