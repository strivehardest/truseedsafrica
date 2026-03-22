"use client";
import AnimatedSection from "@/components/AnimatedSection";
import PillarCard from "@/components/ui/PillarCard";
import { COLORS, PILLARS } from "@/lib/constants";
import PillarsHeroSection from "@/components/sections/PillarsHeroSection";
import CTASection from "@/components/CTASection";

const pillarsStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap');

  /* ── Intro band ── */
  .pillars-intro-band {
    background: #174F17;
    padding: 32px 40px;
    text-align: center;
  }

  /* ── Grid section ── */
  .pillars-grid-section {
    background: #F5F2EC;
    padding: 96px 40px;
  }
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 28px;
    align-items: start;
  }

  /* ── Integration section ── */
  .pillars-integration {
    background: #fff;
    padding: 100px 40px;
    text-align: center;
  }
  .pillars-integration-inner {
    max-width: 760px;
    margin: 0 auto;
  }

  /* ── Flow strip ── */
  .pillars-flow {
    background: #1F6B1F;
    padding: 72px 40px;
    position: relative;
    overflow: hidden;
  }
  .pillars-flow::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }
  .pillars-flow-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .pillars-flow-step {
    padding: 0 20px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.1);
    position: relative;
  }
  .pillars-flow-step:last-child { border-right: none; }
  .pillars-flow-arrow {
    position: absolute;
    top: 28px;
    right: -8px;
    color: rgba(212,160,23,0.5);
    font-size: 16px;
    z-index: 2;
  }
  .pillars-flow-step:last-child .pillars-flow-arrow { display: none; }

  /* ── Quote box ── */
  .pillars-quote-box {
    display: inline-block;
    border: 2px solid #660099;
    padding: 3px;
    margin-top: 40px;
  }
  .pillars-quote-inner {
    border: 1px solid #660099;
    padding: 18px 44px;
  }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .pillars-flow-grid { grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.08); }
    .pillars-flow-step { border-right: none; background: #1F6B1F; padding: 24px 16px; }
    .pillars-flow-arrow { display: none; }
  }
  @media (max-width: 700px) {
    .pillars-intro-band { padding: 24px 20px; }
    .pillars-grid-section { padding: 64px 20px; }
    .pillars-grid { grid-template-columns: 1fr; }
    .pillars-integration { padding: 72px 20px; }
    .pillars-flow { padding: 56px 20px; }
    .pillars-flow-grid { grid-template-columns: repeat(2, 1fr); }
    .pillars-quote-inner { padding: 16px 24px; }
  }
`;

const flowSteps = [
  { num: "01", label: "Cultivate", sub: "Primary Production" },
  { num: "02", label: "Process", sub: "Industrial Output" },
  { num: "03", label: "Mechanize", sub: "Ag-Tech & Equipment" },
  { num: "04", label: "Trade", sub: "Global Logistics" },
  { num: "05", label: "Consult", sub: "Strategic Advisory" },
  { num: "06", label: "Advocate", sub: "Policy & Research" },
];

export default function PillarsPage() {
  return (
    <>
      <style>{pillarsStyles}</style>

      {/* ── HERO ── */}
      <PillarsHeroSection />

      {/* ── INTRO BAND ── */}
      <div className="pillars-intro-band">
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(15px, 2vw, 17px)", fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0, lineHeight: 1.8 }}>
          Six vertically integrated pillars — each one a discipline, together an{" "}
          <strong style={{ color: COLORS.gold }}>unstoppable industrial engine</strong> for African agribusiness.
        </p>
      </div>

      {/* ── PILLARS GRID ── */}
      <section className="pillars-grid-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                Our Framework
              </span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: COLORS.green, fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 800, margin: "14px 0 16px", lineHeight: 1.1 }}>
                The 6 Strategic Pillars
              </h2>
              <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(15px, 1.8vw, 17px)", fontFamily: "'Fira Sans', Arial, sans-serif", maxWidth: 580, margin: "0 auto", lineHeight: 1.85 }}>
                Every pillar is rooted in primary production and scaled through industrial processing,
                mechanization, and global trade — forming a single, self-reinforcing value chain.
              </p>
            </div>
          </AnimatedSection>

          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <AnimatedSection key={p.num} delay={p.id * 80}>
                <PillarCard
                  num={p.num}
                  title={p.title}
                  description={p.description}
                  icon={p.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOW STRIP ── */}
      <section className="pillars-flow">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}>
            <span style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
              The Pipeline
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#fff", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 800, margin: "14px 0 0", lineHeight: 1.1 }}>
              From Seed to Global Market
            </h2>
          </div>
          <div className="pillars-flow-grid">
            {flowSteps.map((step) => (
              <div key={step.num} className="pillars-flow-step">
                <div className="pillars-flow-arrow">›</div>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(212,160,23,0.15)", border: "1.5px solid rgba(212,160,23,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <span style={{ color: COLORS.gold, fontWeight: 900, fontSize: 14, fontFamily: "'Fira Sans', Arial, sans-serif" }}>{step.num}</span>
                </div>
                <div style={{ color: "#fff", fontSize: "clamp(15px, 1.8vw, 17px)", fontWeight: 800, fontFamily: "'Fira Sans', Arial, sans-serif", marginBottom: 6 }}>{step.label}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(12px, 1.4vw, 13px)", fontFamily: "'Fira Sans', Arial, sans-serif", letterSpacing: 1, lineHeight: 1.5 }}>{step.sub}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── INTEGRATION NOTE ── */}
      <section className="pillars-integration">
        <AnimatedSection>
          <div className="pillars-integration-inner">
            <span style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
              How It Works
            </span>
            <h2 style={{ color: COLORS.green, fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.5vw, 42px)", margin: "16px 0 24px", lineHeight: 1.1 }}>
              All Six Pillars Work as One
            </h2>
            <div style={{ width: 56, height: 3, background: COLORS.gold, margin: "0 auto 28px", borderRadius: 2 }} />
            <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(16px, 1.9vw, 18px)", lineHeight: 2.0, fontFamily: "'Fira Sans', Arial, sans-serif", marginBottom: 20 }}>
              TSA does not merely farm — we industrialize. Our six pillars are integrated vertically,
              ensuring every commodity moves seamlessly from cultivation through processing,
              mechanization, logistics, consulting, and policy into a self-reinforcing industrial engine.
            </p>
            <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.95, fontFamily: "'Fira Sans', Arial, sans-serif", marginBottom: 40 }}>
              Whether you engage TSA at the farm gate or the factory floor, you gain access to the
              full depth of our integrated framework — from soil science to global trade desks.
            </p>

            {/* Purple double-border quote */}
            <div className="pillars-quote-box">
              <div className="pillars-quote-inner">
                <span style={{ color: COLORS.green, fontSize: "clamp(16px, 2vw, 19px)", fontStyle: "italic", fontFamily: "'Georgia', serif", fontWeight: 700, lineHeight: 1.6 }}>
                  &quot;Rooted in Production. Scaled Through Industrialization.&quot;
                </span>
              </div>
            </div>

            {/* Supporting facts row */}
            <div style={{ display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap", marginTop: 56, borderTop: "1px solid rgba(0,0,0,0.07)", paddingTop: 48 }}>
              {[
                ["6", "Integrated Pillars"],
                ["4", "Strategic Crops"],
                ["0%", "Waste Target"],
                ["AfCFTA", "Trade Framework"],
              ].map(([num, label]) => (
                <div key={label} style={{ flex: "1 0 120px", textAlign: "center", padding: "0 28px", borderRight: "1px solid rgba(0,0,0,0.07)" }}>
                  <div style={{ color: COLORS.green, fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1 }}>{num}</div>
                  <div style={{ color: COLORS.charcoalLight, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Work With Us"
        title="Ready to Industrialize"
        highlight="Your Agribusiness?"
        subtitle="Let's discuss how Tru Seeds Africa's 6 Strategic Pillars can transform your agricultural operations into a high-yield, industrial-grade enterprise."
        buttons={[
          { label: "Get In Touch", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
        theme="white"
        agriElement={false}
      />
    </>
  );
}