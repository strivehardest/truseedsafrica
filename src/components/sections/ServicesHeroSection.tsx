"use client";
import { COLORS } from "@/lib/constants";

export default function ServicesHeroSection() {
  return (
    <section style={{
      minHeight: "65vh",
      background: COLORS.charcoal,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "120px 40px 80px",
    }}>
      <style>{`
        .sh-inner { position: relative; z-index: 2; max-width: 1100px; width: 100%; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .sh-left { text-align: left; }
        .sh-right { display: flex; flex-direction: column; gap: 20px; }
        .sh-eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
        .sh-eyebrow-line { width: 44px; height: 2px; background: ${COLORS.gold}; }
        .sh-title { font-size: clamp(40px, 5vw, 68px); color: #fff; font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 800; line-height: 1.08; margin: 0 0 24px; letter-spacing: -1.5px; }
        .sh-title-gold { color: ${COLORS.gold}; }
        .sh-sub { font-size: 18px; color: rgba(255,255,255,0.6); line-height: 1.85; font-family: 'Fira Sans', Arial, sans-serif; margin: 0 0 36px; }
        .sh-rule { width: 50px; height: 3px; background: ${COLORS.gold}; margin-bottom: 36px; }
        .sh-stat { padding: 20px 24px; background: rgba(255,255,255,0.05); border-left: 3px solid ${COLORS.gold}; border-radius: 0 4px 4px 0; }
        .sh-stat-num { font-size: 28px; font-weight: 800; color: ${COLORS.gold}; font-family: 'Plus Jakarta Sans', Arial, sans-serif; line-height: 1; margin-bottom: 4px; }
        .sh-stat-label { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.45); font-family: 'Fira Sans', Arial, sans-serif; }
        @media (max-width: 900px) {
          .sh-inner { grid-template-columns: 1fr; gap: 40px; }
          .sh-right { flex-direction: row; flex-wrap: wrap; }
          .sh-stat { flex: 1; min-width: 140px; }
          .sh-left { text-align: center; }
          .sh-eyebrow { justify-content: center; }
          .sh-rule { margin: 0 auto 36px; }
        }
      `}</style>

      {/* Background textures */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: `linear-gradient(${COLORS.gold} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold} 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, right: "20%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(212,160,23,0.18), transparent)`, pointerEvents: "none" }} />

      {/* Agri SVG — gear/cog for services context, top right */}
      <svg style={{ position: "absolute", top: "10%", right: "3%", width: "160px", opacity: 0.06, pointerEvents: "none" }} viewBox="0 0 100 100" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <circle cx="50" cy="50" r="18"/>
        <circle cx="50" cy="50" r="32"/>
        {[0,45,90,135,180,225,270,315].map((deg, i) => {
          const r = Math.PI * deg / 180;
          const x1 = 50 + 32 * Math.cos(r), y1 = 50 + 32 * Math.sin(r);
          const x2 = 50 + 42 * Math.cos(r), y2 = 50 + 42 * Math.sin(r);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="5" strokeLinecap="round"/>;
        })}
      </svg>

      {/* Wheat — bottom left */}
      <svg style={{ position: "absolute", bottom: "5%", left: "3%", width: "100px", opacity: 0.06, pointerEvents: "none" }} viewBox="0 0 100 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <line x1="50" y1="200" x2="50" y2="20"/>
        <ellipse cx="50" cy="30"  rx="8" ry="14" transform="rotate(-20 50 30)"/>
        <ellipse cx="50" cy="55"  rx="8" ry="14" transform="rotate(20 50 55)"/>
        <ellipse cx="50" cy="78"  rx="8" ry="14" transform="rotate(-20 50 78)"/>
        <ellipse cx="50" cy="100" rx="8" ry="14" transform="rotate(20 50 100)"/>
      </svg>

      <div className="sh-inner">
        {/* LEFT — text */}
        <div className="sh-left">
          <div className="sh-eyebrow">
            <div className="sh-eyebrow-line" />
            <span style={{ color: COLORS.gold, fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>What We Do</span>
          </div>

          <h1 className="sh-title">
            Core Corporate<br />
            <span className="sh-title-gold">Service Portfolio</span>
          </h1>

          <div className="sh-rule" />

          <p className="sh-sub">
            End-to-end industrial agribusiness solutions — from technical due diligence
            and mechanization to global trade facilitation and ESG strategy.
          </p>

          {/* Purple double-border badge */}
          <div style={{ display: "inline-block", border: `2px solid ${COLORS.purple}`, padding: "2px" }}>
            <div style={{ border: `1px solid ${COLORS.purple}`, padding: "10px 22px" }}>
              <span style={{ color: COLORS.gold, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                6 Core Service Areas
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — stats */}
        <div className="sh-right">
          {[
            ["01", "Value-Chain Architecture"],
            ["02", "Mechanization-as-a-Service"],
            ["03", "Industrial Processing"],
            ["04", "Outgrower Management"],
            ["05", "Global Trade Facilitation"],
            ["06", "ESG & Market Intelligence"],
          ].map(([num, label]) => (
            <div key={num} className="sh-stat">
              <div className="sh-stat-num">{num}</div>
              <div className="sh-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
    </section>
  );
}