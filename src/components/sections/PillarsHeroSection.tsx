"use client";
import { COLORS } from "@/lib/constants";

export default function PillarsHeroSection() {
  return (
    <section style={{
      minHeight: "60vh",
      background: COLORS.charcoal,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: "100px",
      paddingBottom: "80px",
      textAlign: "center",
    }}>
      <style>{`
        .pillars-hero-inner {
          position: relative;
          text-align: center;
          max-width: 900px;
          padding: 0 32px;
          z-index: 2;
        }
        .pillars-hero-title {
          font-size: clamp(36px, 5vw, 64px);
          color: #fff;
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
          font-weight: 800;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        .pillars-hero-title-gold { color: ${COLORS.gold}; }
        .pillars-hero-sub {
          font-size: clamp(16px, 2vw, 22px);
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-width: 650px;
          margin: 0 auto 32px;
          font-family: 'Fira Sans', Arial, sans-serif;
        }
        .pillars-hero-rule { width: 60px; height: 3px; background: ${COLORS.gold}; margin: 28px auto; }
        @media (max-width: 640px) {
          .pillars-hero-inner { padding: 0 12px; }
        }
      `}</style>

      {/* ── AGRICULTURE SVG ELEMENTS ── */}
      {/* Large wheat/grain — top left */}
      <svg className="hero-agri" style={{ top: "8%", left: "3%", width: "100px", position: "absolute" }} viewBox="0 0 100 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <line x1="50" y1="200" x2="50" y2="20"/>
        <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(-20 50 20)"/>
        <ellipse cx="50" cy="45" rx="8" ry="14" transform="rotate(20 50 45)"/>
        <ellipse cx="50" cy="65" rx="8" ry="14" transform="rotate(-20 50 65)"/>
        <ellipse cx="50" cy="85" rx="8" ry="14" transform="rotate(20 50 85)"/>
        <ellipse cx="50" cy="105" rx="8" ry="14" transform="rotate(-15 50 105)"/>
        <ellipse cx="50" cy="125" rx="8" ry="14" transform="rotate(15 50 125)"/>
      </svg>
      {/* Palm tree — top right */}
      <svg className="hero-agri" style={{ top: "5%", right: "4%", width: "90px", position: "absolute" }} viewBox="0 0 120 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M60 200 Q58 160 55 130 Q52 100 60 60"/>
        <path d="M60 80 Q40 50 10 55 Q30 70 60 80"/>
        <path d="M60 70 Q80 35 110 30 Q95 55 60 70"/>
        <path d="M60 95 Q30 75 5 85 Q28 98 60 95"/>
        <path d="M60 90 Q90 72 115 80 Q92 95 60 90"/>
        <circle cx="60" cy="120" r="5"/>
        <circle cx="65" cy="113" r="4"/>
        <circle cx="55" cy="115" r="4"/>
      </svg>
      {/* Leaf branch — bottom left */}
      <svg className="hero-agri" style={{ bottom: "12%", left: "5%", width: "80px", position: "absolute" }} viewBox="0 0 100 160" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M20 160 Q40 120 50 80 Q55 50 50 20"/>
        <path d="M50 60 Q70 40 85 20 Q65 35 50 60"/>
        <path d="M50 80 Q25 65 10 45 Q30 58 50 80"/>
        <path d="M50 100 Q72 88 88 68 Q68 80 50 100"/>
        <path d="M50 120 Q28 108 12 90 Q32 102 50 120"/>
      </svg>
      {/* Cocoa pod — bottom right */}
      <svg className="hero-agri" style={{ bottom: "15%", right: "5%", width: "70px", position: "absolute" }} viewBox="0 0 80 140" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <ellipse cx="40" cy="80" rx="22" ry="40"/>
        <path d="M40 40 Q40 20 40 10"/>
        <path d="M18 70 Q10 65 5 70 M62 70 Q70 65 75 70"/>
        <path d="M20 80 Q12 75 8 80 M60 80 Q68 75 72 80"/>
        <path d="M22 90 Q14 87 10 92 M58 90 Q66 87 70 92"/>
        <line x1="40" y1="40" x2="40" y2="120"/>
      </svg>
      {/* Subtle grid lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03, backgroundImage: `linear-gradient(${COLORS.gold} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      {/* Vertical gold accent lines */}
      <div style={{ position: "absolute", top: 0, right: "18%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(212,160,23,0.2), transparent)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: "22%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)`, pointerEvents: "none" }} />

      {/* ── CONTENT ── */}
      <div className="pillars-hero-inner">
        <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
          Our Framework
        </span>
        <h1 className="pillars-hero-title">
          6 <span className="pillars-hero-title-gold">Strategic</span> Pillars
        </h1>
        <div className="pillars-hero-rule" />
        <p className="pillars-hero-sub">
          Every TSA project is rooted in primary production and scaled through industrial processing, mechanization, and global trade strategy.
        </p>
      </div>
    </section>
  );
}
