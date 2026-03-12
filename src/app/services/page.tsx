"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { COLORS, SERVICES } from "@/lib/constants";
import ServicesHeroSection from "@/components/sections/ServicesHeroSection";
import CTASection from "@/components/CTASection";

const keyServices = [
  {
    title: "Strategic Agribusiness Consulting",
    desc: "Value-chain mapping, market entry strategies, and operational scaling for large-scale agricultural estates and emerging agribusinesses across Africa.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Outgrower Scheme Management",
    desc: "Designing and managing Nucleus-Outgrower models that bridge smallholder productivity to industrial factory demand with digital supply chain oversight.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/>
        <line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/>
      </svg>
    ),
  },
  {
    title: "Investment Due Diligence",
    desc: "Technical auditing, biological asset valuation, and investment readiness blueprints for financial institutions, private equity, and greenfield agribusiness startups.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="6 9 10 13 14 9 18 13"/>
      </svg>
    ),
  },
  {
    title: "Policy Advocacy & Market Intelligence",
    desc: "Empirical research and high-level engagement to influence pro-agricultural trade frameworks, import substitution, and AfCFTA industrial policies.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Mechanization-as-a-Service",
    desc: "Full fleet management, equipment procurement, leasing, and operator training — from automated palm oil mills to precision cassava harvesting machinery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
  },
  {
    title: "Global Commodity Trade & Logistics",
    desc: "Farm-to-shelf logistics, standardized post-harvest handling, AfCFTA-compliant export facilitation, and strategic commodity brokerage on international markets.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

const styles = `
  /* ── Hero ── */
  .srv-hero {
    background: linear-gradient(135deg, #0d3d0d 0%, #1F6B1F 55%, #174F17 100%);
    padding: 120px 40px 90px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .srv-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(212,160,23,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,160,23,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* ── Key services ── */
  .key-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .key-card {
    background: #fff;
    border-radius: 6px;
    padding: 36px 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 3px solid transparent;
    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    cursor: default;
  }
  .key-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
  }
  .key-card.green-top { border-top-color: #1F6B1F; }
  .key-card.gold-top  { border-top-color: #D4A017; }

  /* ── Process strip ── */
  .process-strip {
    background: #1F6B1F;
    padding: 72px 40px;
    position: relative;
    overflow: hidden;
  }
  .process-strip::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }
  .process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
    z-index: 1;
  }
  .process-step {
    padding: 0 32px;
    border-right: 1px solid rgba(255,255,255,0.1);
    text-align: center;
  }
  .process-step:last-child { border-right: none; }

  /* ── Portfolio cards ── */
  .portfolio-section { background: #36454F; padding: 100px 40px; }
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
  }
  .portfolio-card {
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 6px;
    padding: 40px 36px;
    background: rgba(255,255,255,0.04);
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
  }
  .portfolio-card:hover {
    background: rgba(212,160,23,0.07);
    border-color: rgba(212,160,23,0.3);
    transform: translateY(-3px);
  }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .key-grid { grid-template-columns: repeat(2, 1fr); }
    .process-grid { grid-template-columns: repeat(2, 1fr); gap: 1px; background: rgba(255,255,255,0.1); }
    .process-step { border-right: none; background: #1F6B1F; padding: 28px 24px; }
  }
  @media (max-width: 700px) {
    .key-grid { grid-template-columns: 1fr; }
    .process-grid { grid-template-columns: 1fr; }
    .portfolio-grid { grid-template-columns: 1fr; }
    .srv-hero { padding: 100px 20px 72px; }
    .process-strip { padding: 56px 20px; }
    .portfolio-section { padding: 72px 20px; }
    .srv-cta { padding: 72px 20px; }
  }
`;

export default function ServicesPage() {
  return (
    <>
      <style>{styles}</style>

      <ServicesHeroSection />

      {/* ── INTRO BAND ── */}
      <div style={{ background: COLORS.greenDark, padding: "30px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2vw, 17px)", fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0, lineHeight: 1.8 }}>
            TSA delivers end-to-end agribusiness solutions across <strong style={{ color: COLORS.gold }}>6 integrated service pillars</strong> — from primary cultivation through industrial processing, mechanization, global trade, consulting, and policy advocacy.
          </p>
        </div>
      </div>

      {/* ── KEY SERVICES ── */}
      <section style={{ background: COLORS.offWhite, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                What Sets TSA Apart
              </span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "16px 0 16px", lineHeight: 1.1 }}>
                Key Corporate Services
              </h2>
              <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(15px, 2vw, 17px)", fontFamily: "'Fira Sans', Arial, sans-serif", maxWidth: 620, margin: "0 auto", lineHeight: 1.8 }}>
                Each service is built around TSA's 6 Strategic Pillars — engineered for scale, industrial impact, and measurable returns.
              </p>
            </div>
          </AnimatedSection>

          <div className="key-grid">
            {keyServices.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 70}>
                <div className={`key-card ${i % 2 === 0 ? "green-top" : "gold-top"}`}>
                  {/* Number + icon row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ color: "rgba(0,0,0,0.08)", fontSize: 48, fontWeight: 900, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: i % 2 === 0 ? "rgba(31,107,31,0.08)" : "rgba(212,160,23,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: i % 2 === 0 ? COLORS.green : COLORS.gold }}>
                      {item.icon}
                    </div>
                  </div>

                  <h3 style={{ color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: "clamp(16px, 2vw, 19px)", margin: 0, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(14px, 1.6vw, 16px)", lineHeight: 1.85, margin: 0, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                    {item.desc}
                  </p>

                  {/* Bottom accent */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                    <div style={{ width: 24, height: 2, background: i % 2 === 0 ? COLORS.green : COLORS.gold, borderRadius: 1 }} />
                    <span style={{ color: i % 2 === 0 ? COLORS.green : COLORS.gold, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                      TSA Service
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK STRIP ── */}
      <section className="process-strip">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <span style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                Our Approach
              </span>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#fff", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "14px 0 0", lineHeight: 1.1 }}>
                How We Deliver Results
              </h2>
            </div>
          </AnimatedSection>
          <div className="process-grid">
            {[
              { num: "01", label: "Assess", desc: "Comprehensive asset audit and value-chain mapping to establish baselines and opportunity gaps." },
              { num: "02", label: "Architect", desc: "Custom strategic blueprint tailored to your commodity, market, and investment horizon." },
              { num: "03", label: "Implement", desc: "End-to-end execution — mechanization deployment, processing setup, outgrower integration." },
              { num: "04", label: "Scale", desc: "Performance monitoring, trade facilitation, and continuous optimization for industrial growth." },
            ].map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 80}>
                <div className="process-step">
                  <div style={{ color: COLORS.gold, fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1, marginBottom: 10 }}>{step.num}</div>
                  <div style={{ color: "#fff", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 800, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", marginBottom: 12 }}>{step.label}</div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(13px, 1.6vw, 15px)", fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL PORTFOLIO ── */}
      <section className="portfolio-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                Full Portfolio
              </span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "#fff", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "16px 0 16px", lineHeight: 1.1 }}>
                Core Service <span style={{ color: COLORS.gold }}>Portfolio</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(14px, 2vw, 16px)", fontFamily: "'Fira Sans', Arial, sans-serif", maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
                Six fully integrated service areas designed to move agribusinesses from raw production to global industrial output.
              </p>
            </div>
          </AnimatedSection>

          <div className="portfolio-grid">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="portfolio-card">
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(212,160,23,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: COLORS.gold, fontWeight: 900, fontSize: 15, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div style={{ flex: 1, height: 1, background: "rgba(212,160,23,0.2)" }} />
                  </div>

                  <h3 style={{ fontSize: "clamp(16px, 2vw, 19px)", fontWeight: 800, color: "#fff", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1.3, margin: "0 0 20px" }}>
                    {s.title}
                  </h3>

                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                    {s.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "clamp(13px, 1.6vw, 15px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 5, flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start Today"
        title="Ready to Scale"
        highlight="Your Agribusiness?"
        subtitle="Whether you're launching a greenfield operation, scaling an existing estate, or seeking investment readiness — TSA's 6 Strategic Pillars provide the complete framework for industrial agribusiness success."
        buttons={[
          { label: "Get In Touch", href: "/contact", variant: "primary" },
          { label: "About TSA", href: "/about", variant: "outline" },
        ]}
        theme="white"
        agriElement={false}
      />
    </>
  );
}