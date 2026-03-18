import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function TwitterImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo-square.png"))
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #000000 0%, #0a0a0a 50%, #111111 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={140} height={140} style={{ marginBottom: 32 }} />
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            background: "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          AI Learning Hub
        </div>
        <div style={{ fontSize: 26, color: "#a3a3a3", maxWidth: 700, textAlign: "center" }}>
          Learn AI with clarity, structure, and confidence.
        </div>
        <div style={{ fontSize: 18, color: "#737373", marginTop: 24, letterSpacing: "0.15em" }}>
          TUTORIALS · COMPANIES · NEWS · PROMPTING
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
