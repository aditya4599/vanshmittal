import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1c2c4a",
          color: "#f4efe6",
          fontSize: 11,
          letterSpacing: -0.4,
          fontFamily: "Georgia, serif",
        }}
      >
        VM
      </div>
    ),
    size,
  );
}
