import { ImageResponse } from "next/og";

export const alt = "Supakorn Udomsintuwat — Full Stack Software Engineer";
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
          background: "#f2f0e8",
          color: "#18211d",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, letterSpacing: "-2px" }}>
            SU<span style={{ color: "#ff765e" }}>.</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18 }}>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: "#78bc37" }} />
            Chiang Mai, Thailand
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 78, lineHeight: 0.94, letterSpacing: "-5px", fontWeight: 700 }}>
            Software built to perform
          </div>
          <div style={{ display: "flex", fontSize: 78, lineHeight: 0.94, letterSpacing: "-5px", fontStyle: "italic" }}>
            under real pressure.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <span style={{ fontSize: 25, fontWeight: 700 }}>Supakorn Udomsintuwat</span>
            <span style={{ fontSize: 18, color: "#56605a" }}>Full Stack Software Engineer</span>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              ["100M+", "records"],
              ["<1 sec", "search"],
              ["10 wks", "to production"],
            ].map(([value, label]) => (
              <div key={value} style={{ display: "flex", flexDirection: "column", background: "#d9ff43", padding: "15px 20px", minWidth: 132 }}>
                <span style={{ fontSize: 25, fontWeight: 800 }}>{value}</span>
                <span style={{ fontSize: 11, textTransform: "uppercase", color: "#56605a" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
