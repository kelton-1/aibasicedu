import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 45%, #2563eb 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.9, marginBottom: 20 }}>AI Learning Hub</div>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          Learn AI with clarity, structure, and confidence.
        </div>
        <div style={{ fontSize: 30, marginTop: 24, opacity: 0.9 }}>
          Tutorials · Companies · News · Prompting
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
