import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "CTRLSWING - Learn to build agent skills. Hands-on workshops.";
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
            I TEACH YOU HOW TO BUILD{" "}
            <span
              style={{
                color: "#171e19",
                backgroundColor: "#ffe17c",
                padding: "0 12px",
              }}
            >
              AGENT SKILLS
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
            Hands-on workshops for operators, business owners, and teams. ctrlswing.com
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
