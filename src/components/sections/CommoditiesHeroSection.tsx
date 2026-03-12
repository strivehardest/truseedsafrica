"use client";
import { COLORS } from "@/lib/constants";

export default function CommoditiesHeroSection() {
  return (
    <section style={{ minHeight: "60vh", background: COLORS.charcoal, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: "100px", paddingBottom: "80px", textAlign: "center" }}>
      <style>{`
        .ch-inner { position: relative; text-align: center; max-width: 900px; padding: 0 32px; z-index: 2; }
        .ch-title { font-size: clamp(36px, 5vw, 64px); color: #fff; font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-weight: 800; margin: 0 0 16px; letter-spacing: -1px; }
        .ch-title-gold { color: ${COLORS.gold}; }
        .ch-sub { font-size: clamp(16px, 2vw, 20px); color: rgba(255,255,255,0.65); line-height: 1.75; max-width: 620px; margin: 0 auto 32px; font-family: 'Fira Sans', Arial, sans-serif; }
        .ch-rule { width: 60px; height: 3px; background: ${COLORS.gold}; margin: 24px auto; }
        .hero-agri { position: absolute; pointer-events: none; opacity: 0.07; }
      `}</style>

      {/* Agri decorations */}
      <svg className="hero-agri" style={{ top: "8%", left: "3%", width: "100px" }} viewBox="0 0 100 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <line x1="50" y1="200" x2="50" y2="20"/>
        <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(-20 50 20)"/>
        <ellipse cx="50" cy="45" rx="8" ry="14" transform="rotate(20 50 45)"/>
        <ellipse cx="50" cy="65" rx="8" ry="14" transform="rotate(-20 50 65)"/>
        <ellipse cx="50" cy="85" rx="8" ry="14" transform="rotate(20 50 85)"/>
        <ellipse cx="50" cy="105" rx="8" ry="14" transform="rotate(-15 50 105)"/>
        <ellipse cx="50" cy="125" rx="8" ry="14" transform="rotate(15 50 125)"/>
      </svg>
      <svg className="hero-agri" style={{ top: "5%", right: "4%", width: "90px" }} viewBox="0 0 120 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M60 200 Q58 160 55 130 Q52 100 60 60"/>
        <path d="M60 80 Q40 50 10 55 Q30 70 60 80"/>
        <path d="M60 70 Q80 35 110 30 Q95 55 60 70"/>
        <path d="M60 95 Q30 75 5 85 Q28 98 60 95"/>
        <path d="M60 90 Q90 72 115 80 Q92 95 60 90"/>
      </svg>
      <svg className="hero-agri" style={{ bottom: "12%", left: "5%", width: "80px" }} viewBox="0 0 100 160" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M20 160 Q40 120 50 80 Q55 50 50 20"/>
        <path d="M50 60 Q70 40 85 20 Q65 35 50 60"/>
        <path d="M50 80 Q25 65 10 45 Q30 58 50 80"/>
        <path d="M50 100 Q72 88 88 68 Q68 80 50 100"/>
        <path d="M50 120 Q28 108 12 90 Q32 102 50 120"/>
      </svg>
      <svg className="hero-agri" style={{ bottom: "15%", right: "5%", width: "70px" }} viewBox="0 0 80 140" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <ellipse cx="40" cy="80" rx="22" ry="40"/>
        <path d="M40 40 Q40 20 40 10"/>
        <line x1="40" y1="40" x2="40" y2="120"/>
      </svg>

      {/* Grid + accent lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03, backgroundImage: `linear-gradient(${COLORS.gold} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", top: 0, right: "18%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(212,160,23,0.2), transparent)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 0, left: "22%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)`, pointerEvents: "none" }} />

      {/* Purple badge */}
      <div style={{ display: "inline-block", border: `2px solid ${COLORS.purple}`, padding: "2px", marginBottom: "28px", position: "relative", zIndex: 2 }}>
        <div style={{ border: `1px solid ${COLORS.purple}`, padding: "8px 20px" }}>
          <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>What We Grow</span>
        </div>
      </div>

      <div className="ch-inner">
        <h1 className="ch-title">
          Strategic <span className="ch-title-gold">Commodities</span>
        </h1>
        <div className="ch-rule" />
        <p className="ch-sub">
          Africa&apos;s most powerful crops — industrially transformed for continental and global markets.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
    </section>
  );
}