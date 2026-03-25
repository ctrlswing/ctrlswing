import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "CTRLSWING - Your entire marketing system. Built and running in days.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const antonFont = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/anton/v25/1Ptgg87GROyAm3K9-C8.ttf"
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#171e19",
          color: "#ffffff",
          fontFamily: "Anton",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          CTRLSWING
          <span style={{ color: "#ffe17c" }}>.</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              textTransform: "uppercase",
              lineHeight: 0.95,
              maxWidth: "900px",
            }}
          >
            YOUR ENTIRE MARKETING SYSTEM. BUILT AND RUNNING IN{" "}
            <span
              style={{
                color: "#171e19",
                backgroundColor: "#ffe17c",
                padding: "0 12px",
                transform: "rotate(2deg)",
              }}
            >
              DAYS
            </span>
            .
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#b7c6c2",
              fontFamily: "sans-serif",
              fontWeight: 400,
            }}
          >
            Website. Email. Ads. SEO. All of it. ctrlswing.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Anton",
          data: antonFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
