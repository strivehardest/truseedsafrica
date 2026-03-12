"use client";
import { COLORS } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";

export default function DifferentiatorSection() {
  return (
    <section style={{
      background: COLORS.charcoal,
      padding: "120px 40px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Agriculture SVG — background wheat left */}
      <svg style={{ position: "absolute", left: "3%", top: "50%", transform: "translateY(-50%)", opacity: 0.05, width: "160px", pointerEvents: "none" }} viewBox="0 0 100 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <line x1="50" y1="200" x2="50" y2="20"/>
        <ellipse cx="50" cy="20" rx="8" ry="14" transform="rotate(-20 50 20)"/>
        <ellipse cx="50" cy="45" rx="8" ry="14" transform="rotate(20 50 45)"/>
        <ellipse cx="50" cy="65" rx="8" ry="14" transform="rotate(-20 50 65)"/>
        <ellipse cx="50" cy="85" rx="8" ry="14" transform="rotate(20 50 85)"/>
        <ellipse cx="50" cy="105" rx="8" ry="14" transform="rotate(-15 50 105)"/>
        <ellipse cx="50" cy="125" rx="8" ry="14" transform="rotate(15 50 125)"/>
      </svg>

      {/* Agriculture SVG — background palm right */}
      <svg style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", opacity: 0.05, width: "140px", pointerEvents: "none" }} viewBox="0 0 120 200" fill="none" stroke={COLORS.gold} strokeWidth="1.2">
        <path d="M60 200 Q58 160 55 130 Q52 100 60 60"/>
        <path d="M60 80 Q40 50 10 55 Q30 70 60 80"/>
        <path d="M60 70 Q80 35 110 30 Q95 55 60 70"/>
        <path d="M60 95 Q30 75 5 85 Q28 98 60 95"/>
        <path d="M60 90 Q90 72 115 80 Q92 95 60 90"/>
      </svg>

      {/* Top gold line */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80px", height: "3px", background: COLORS.gold }} />

      <AnimatedSection>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            color: COLORS.gold, fontSize: "11px", letterSpacing: "4px",
            textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif", fontWeight: 700,
          }}>The TSA Differentiator</span>

          <h2 style={{
            fontSize: "clamp(28px, 5vw, 56px)",
            color: COLORS.white,
            fontFamily: "'Plus Jakarta Sans', Arial, Helvetica, sans-serif",
            fontWeight: 800, lineHeight: 1.15, margin: "20px 0 28px",
          }}>
            We Don&apos;t Just Farm.
            <br />
            <span style={{ color: COLORS.gold }}>We Industrialize.</span>
          </h2>

          <p style={{
            fontSize: "18px", color: "rgba(255,255,255,0.65)", lineHeight: 1.9,
            marginBottom: "52px", fontFamily: "'Fira Sans', Arial, Helvetica, sans-serif",
          }}>
            Our competitive edge lies in our 6 Strategic Pillars which ensure that every
            project is rooted in primary production and scaled through industrial processing,
            mechanization, and global trade strategy.
          </p>

          {/* 3 feature chips */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "52px" }}>
            {["Primary Production", "Industrial Processing", "Global Trade"].map((chip) => (
              <span key={chip} style={{
                border: `1px solid rgba(212,160,23,0.4)`,
                color: COLORS.gold, padding: "8px 20px",
                fontFamily: "'Fira Sans', Arial, sans-serif",
                fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600,
                borderRadius: "2px", background: "rgba(212,160,23,0.06)",
              }}>{chip}</span>
            ))}
          </div>

          {/* Purple double-border quote */}
          <div style={{ display: "inline-block", border: `2px solid ${COLORS.purple}`, padding: "3px" }}>
            <div style={{ border: `1px solid ${COLORS.purple}`, padding: "18px 48px" }}>
              <span style={{ color: COLORS.gold, fontSize: "18px", fontStyle: "italic", fontFamily: "'Georgia', serif" }}>
                &quot;Beyond Farming — We Are Building Industries.&quot;
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}