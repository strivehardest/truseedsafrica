"use client";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/CTASection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import PillarCard from "@/components/ui/PillarCard";
import { COLORS, PILLARS, COMMODITIES } from "@/lib/constants";
import Link from "next/link";

// Commodity SVG icons
const CassavaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 6 6 10 8 14c1 2 3 4 4 8"/><path d="M12 2c4 4 6 8 4 12-1 2-3 4-4 8"/>
    <path d="M8 8c-3 1-5 3-4 6"/><path d="M16 8c3 1 5 3 4 6"/>
  </svg>
);
const PalmIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h11z"/>
    <path d="M13 8c0-2.76 2.46-5 5.5-5S24 5.24 24 8H13z"/>
    <path d="M13 8c0 5.5-4 8-4 14h8c0-6-4-8.5-4-14z"/>
  </svg>
);
const CoconutIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="7"/><path d="M12 6V2"/><path d="M8 4c1 1 2.5 2 4 2s3-1 4-2"/>
    <path d="M9 13c0 2 1.3 3.5 3 3.5S15 15 15 13"/>
  </svg>
);
const CocoaIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="5" ry="8"/><path d="M12 4V2"/><path d="M7 12H3"/><path d="M21 12h-4"/>
    <path d="M8 6.5C6 7 4.5 9 5 11"/><path d="M16 6.5c2 .5 3.5 2.5 3 4.5"/>
  </svg>
);

const commodityIcons = [CassavaIcon, PalmIcon, CoconutIcon, CocoaIcon];
const commodityAccents = ["#B8860B", "#1F6B1F", "#2C4A52", "#2D4A1E"];

// Responsive styles injected once at top level
const pageStyles = `
  .commodities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .home-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .commodities-grid { grid-template-columns: repeat(2, 1fr); }
    .home-about-grid { grid-template-columns: 1fr; gap: 48px; }
  }
  @media (max-width: 600px) {
    .commodities-grid { gap: 12px; }
    .home-about-grid { gap: 28px; }
  }
  @media (max-width: 480px) {
    .commodities-grid { grid-template-columns: 1fr; gap: 8px; }
    .home-about-grid { gap: 16px; }
    section, .commodities-grid > div, .home-about-grid > div {
      padding: 24px 8vw !important;
    }
  }
`;

export default function HomePage() {
  return (
    <>
      <style>{pageStyles}</style>
      <HeroSection />

      {/* ── ABOUT SNAPSHOT ── */}
      <section id="about" style={{ background: COLORS.white, padding: "120px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div className="home-about-grid">
              <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <div style={{ maxWidth: 700, width: "100%", margin: "0 auto", background: "#fff", borderRadius: 8, boxShadow: "0 2px 16px rgba(0,0,0,0.03)", padding: "48px 32px 40px" }}>
                  <div style={{ color: COLORS.gold, fontSize: 14, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>
                    Company Overview
                  </div>
                  <h2 style={{ fontSize: "clamp(32px, 6vw, 54px)", color: COLORS.green, fontWeight: 800, margin: 0, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif" }}>
                    Building Africa's <span style={{ color: COLORS.charcoal }}>Industrial</span> Future
                  </h2>
                  <p style={{ color: COLORS.charcoalLight, fontSize: 18, margin: "28px 0 0", lineHeight: 1.7, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                    TSA bridges the gap between primary agricultural production and global industrial demand — integrating Ag-Tech, circular economy principles, and strategic value-chain architecture.
                  </p>
                  <div style={{ margin: "40px 0 0" }}>
                    <div style={{ color: COLORS.gold, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>
                      Company Profile
                    </div>
                    <h3 style={{ fontSize: "clamp(18px,4vw,26px)", color: COLORS.green, fontWeight: 800, margin: 0, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif" }}>
                      Full Company Profile
                    </h3>
                    <p style={{ color: COLORS.charcoalLight, fontSize: 16, margin: "18px 0 0", lineHeight: 1.6, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                      Learn more about Tru Seeds Africa's mission, vision, and leadership.
                    </p>
                    <div style={{ display: "inline-block", border: `2px solid ${COLORS.purple}`, padding: "2px", margin: "32px 0 24px" }}>
                      <div style={{ border: `1px solid ${COLORS.purple}`, padding: "9px 24px" }}>
                        <span style={{ color: COLORS.gold, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>
                          Beyond Farming — We Are Building Industries
                        </span>
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <CTASection
                        theme="white"
                        title="Discover Tru Seeds Africa"
                        agriElement={false}
                        buttons={[
                          { label: "View About Page", href: "/about", variant: "primary" }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div style={{ position: "relative" }}>
                <div style={{
                  background: COLORS.greenDark,
                  borderRadius: "2px",
                  padding: "56px 48px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Decorative corner */}
                  <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: COLORS.gold, opacity: 0.15, clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, width: "60px", height: "3px", background: COLORS.gold }} />

                  <svg width="36" height="28" viewBox="0 0 36 28" fill={COLORS.gold} opacity={0.3} style={{ marginBottom: "20px" }}>
                    <path d="M0 28V16C0 7.163 5.163 1.6 15.489 0L16.8 2.8C11.2 4.2 8.4 7.233 8.4 11.9H14V28H0ZM22 28V16C22 7.163 27.163 1.6 37.489 0L38.8 2.8C33.2 4.2 30.4 7.233 30.4 11.9H36V28H22Z"/>
                  </svg>

                  <blockquote style={{ color: COLORS.white, fontSize: "clamp(18px, 2vw, 22px)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 32px", fontFamily: "'Georgia', serif" }}>
                    Beyond Farming — We Are Building Industries.
                  </blockquote>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "24px" }}>
                    <div style={{ color: COLORS.gold, fontWeight: 700, fontSize: "15px", fontFamily: "'Fira Sans', Arial, sans-serif" }}>Ransford Aleke</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", marginTop: "4px" }}>Founder & Chief Executive Officer</div>
                  </div>
                </div>

                {/* Gold tag */}
                <div style={{ position: "absolute", bottom: "-18px", left: "5vw", background: COLORS.gold, padding: "10px 12vw", borderRadius: "2px" }}>
                  <div style={{ color: COLORS.greenDark, fontWeight: 800, fontSize: "12px", fontFamily: "'Fira Sans', Arial, sans-serif", letterSpacing: "1px" }}>DANSOMAN, ACCRA · GHANA</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section id="pillars" style={{ background: COLORS.offWhite, padding: "120px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Framework"
              title="6 Strategic Pillars"
              subtitle="Every project is rooted in primary production and scaled through industrial processing, mechanization, and global trade strategy."
            />
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", alignItems: "start" }}>
            {PILLARS.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 60}>
                <PillarCard {...p} index={i} />
              </AnimatedSection>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "52px", position: "relative", zIndex: 1 }}>
            <Link href="/pillars" style={{
              border: `2px solid ${COLORS.green}`, color: COLORS.green,
              padding: "16px 44px", textDecoration: "none",
              fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700,
              fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
              borderRadius: "2px", display: "inline-block", background: COLORS.white,
            }}>Explore All Pillars →</Link>
          </div>
        </div>
      </section>

      {/* ── COMMODITIES ── */}
      <section style={{ background: COLORS.white, padding: "120px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader eyebrow="What We Grow" title="Strategic Commodities" />
          </AnimatedSection>

          <div className="commodities-grid">
            {COMMODITIES.map((c, i) => {
              const Icon = commodityIcons[i];
              return (
                <AnimatedSection key={c.name} delay={i * 80}>
                  <div style={{
                    background: commodityAccents[i],
                    borderRadius: "2px",
                    padding: "48px 28px 36px",
                    textAlign: "center",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    height: "100%",
                    boxSizing: "border-box",
                    position: "relative",
                    overflow: "hidden",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = "none";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* top gold line */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: COLORS.gold }} />

                    <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                      <Icon />
                    </div>
                    <h3 style={{ color: COLORS.white, fontSize: "clamp(15px,4vw,20px)", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 700, margin: "0 0 12px" }}>
                      {c.name}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(11px,3vw,13px)", lineHeight: 1.7, margin: 0, fontFamily: "Arial, sans-serif" }}>
                      {c.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "52px" }}>
            <Link href="/commodities" style={{
              border: `2px solid ${COLORS.green}`, color: COLORS.green,
              padding: "14px 40px", textDecoration: "none",
              fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700,
              fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
              borderRadius: "2px", display: "inline-block",
            }}>View All Commodities →</Link>
          </div>
        </div>
      </section>

      <DifferentiatorSection />
      <CTASection
        eyebrow="Work With Us"
        title="Ready to Industrialize"
        highlight="Your Agribusiness?"
        subtitle="Let's discuss how Tru Seeds Africa's 6 Strategic Pillars can transform your agricultural operations into a high-yield, industrial-grade enterprise."
        buttons={[
          { label: "Get In Touch", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
        theme="dark"
        agriElement={true}
      />
    </>
  );
}