"use client";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/CTASection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import PillarCard from "@/components/ui/PillarCard";
import { COLORS, PILLARS, COMMODITIES } from "@/lib/constants";
import Link from "next/link";
import HomeSectionDots from "@/components/HomeSectionDots";

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

const pageStyles = `
  .section-pad { padding: 120px 40px; }
  .home-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .commodities-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .quote-card { padding: 56px 48px; }
  .gold-tag { position: absolute; bottom: -18px; left: 5vw; background: #D4A017; padding: 10px 40px; border-radius: 2px; }
  .about-card { width: 100%; background: #fff; border-radius: 8px; box-shadow: 0 2px 24px rgba(0,0,0,0.06); overflow: hidden; }
  .about-card-header { background: #1F6B1F; padding: 32px 36px; }
  .about-card-body { padding: 36px; }
  .about-divider { height: 1px; background: #f0f0f0; margin: 28px 0; }
  .about-tag { display: inline-flex; align-items: center; gap: 8px; background: #f8f5ec; border-left: 3px solid #D4A017; padding: 10px 16px; border-radius: 0 4px 4px 0; margin-top: 20px; }
  .about-cta-row { display: flex; align-items: center; gap: 16px; margin-top: 28px; flex-wrap: wrap; }

  @media (max-width: 900px) {
    .section-pad { padding: 80px 32px; }
    .home-about-grid { grid-template-columns: 1fr; gap: 48px; }
    .commodities-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .quote-card { padding: 40px 32px; }
    .about-card-header { padding: 28px; }
    .about-card-body { padding: 28px; }
  }
  @media (max-width: 600px) {
    .section-pad { padding: 60px 20px; }
    .commodities-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .quote-card { padding: 32px 24px; }
    .gold-tag { padding: 10px 24px; left: 50%; transform: translateX(-50%); white-space: nowrap; }
    .about-card-header { padding: 24px 20px; }
    .about-card-body { padding: 24px 20px; }
  }
  @media (max-width: 400px) {
    .section-pad { padding: 48px 16px; }
    .commodities-grid { grid-template-columns: 1fr; gap: 8px; }
  }
`;

export default function HomePage() {
  return (
    <>
      <style>{pageStyles}</style>
      <HomeSectionDots />
      <div id="hero">
        <HeroSection />
      </div>

      {/* ── ABOUT SNAPSHOT ── */}
      <section id="about" className="section-pad" style={{ background: COLORS.offWhite }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader
              eyebrow="Who We Are"
              title="About Tru Seeds Africa"
              subtitle="A premier industrial agribusiness and strategic consultancy firm dedicated to transforming African agriculture."
            />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="home-about-grid">

              {/* Left: structured company overview card */}
              <div className="about-card">
                <div className="about-card-header">
                  <div style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 12 }}>
                    Company Overview
                  </div>
                  <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", color: "#fff", fontWeight: 800, margin: 0, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1.2 }}>
                    Building Africa's <span style={{ color: COLORS.gold }}>Industrial</span> Future
                  </h2>
                </div>

                <div className="about-card-body">
                  <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.9, margin: 0, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                    TSA bridges the gap between primary agricultural production and global industrial demand — integrating Ag-Tech, circular economy principles, and strategic value-chain architecture to create lasting economic impact across Africa.
                  </p>

                  <div className="about-divider" />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: 24 }}>
                    {[
                      { label: "Headquarters", value: "Accra, Ghana" },
                      { label: "Focus", value: "Industrial Agribusiness" },
                      { label: "Commodities", value: "4 Core Crops" },
                      { label: "Framework", value: "6 Strategic Pillars" },
                    ].map(({ label, value }) => (
                      <div key={label} style={{ padding: "12px 16px", background: COLORS.offWhite, borderRadius: 4 }}>
                        <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 4 }}>{label}</div>
                        <div style={{ color: COLORS.green, fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif" }}>{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="about-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ color: COLORS.charcoal, fontSize: "clamp(13px, 1.5vw, 15px)", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 600, letterSpacing: 1 }}>
                      Beyond Farming — We Are Building Industries
                    </span>
                  </div>

                  <div className="about-cta-row">
                    <Link href="/about" style={{
                      background: COLORS.green, color: "#fff",
                      padding: "13px 28px", textDecoration: "none",
                      fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700,
                      fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
                      borderRadius: "2px", display: "inline-block",
                    }}>
                      View Full Profile
                    </Link>
                    <Link href="/pillars" style={{
                      border: `2px solid ${COLORS.green}`, color: COLORS.green,
                      padding: "11px 24px", textDecoration: "none",
                      fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700,
                      fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
                      borderRadius: "2px", display: "inline-block",
                    }}>
                      Our Pillars
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: quote card */}
              <div style={{ position: "relative", paddingBottom: "32px" }}>
                <div className="quote-card" style={{ background: COLORS.greenDark, borderRadius: "2px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: COLORS.gold, opacity: 0.15, clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, width: "60px", height: "3px", background: COLORS.gold }} />
                  <svg width="36" height="28" viewBox="0 0 36 28" fill={COLORS.gold} opacity={0.3} style={{ marginBottom: "20px" }}>
                    <path d="M0 28V16C0 7.163 5.163 1.6 15.489 0L16.8 2.8C11.2 4.2 8.4 7.233 8.4 11.9H14V28H0ZM22 28V16C22 7.163 27.163 1.6 37.489 0L38.8 2.8C33.2 4.2 30.4 7.233 30.4 11.9H36V28H22Z"/>
                  </svg>
                  <blockquote style={{ color: COLORS.white, fontSize: "clamp(17px, 2.5vw, 23px)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 24px", fontFamily: "'Georgia', serif" }}>
                    Beyond Farming — We Are Building Industries.
                  </blockquote>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.85, margin: "0 0 32px", fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                    Our vision is to position Africa as a global industrial agribusiness powerhouse — not just a supplier of raw materials, but a manufacturer, processor, and exporter of finished goods.
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "24px" }}>
                    <div style={{ color: COLORS.gold, fontWeight: 700, fontSize: "17px", fontFamily: "'Fira Sans', Arial, sans-serif" }}>Ransford Aleke</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", marginTop: "4px" }}>Founder & Chief Executive Officer</div>
                  </div>
                </div>
                <div className="gold-tag">
                  <div style={{ color: COLORS.greenDark, fontWeight: 800, fontSize: "13px", fontFamily: "'Fira Sans', Arial, sans-serif", letterSpacing: "1px" }}>DANSOMAN, ACCRA · GHANA</div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section id="pillars" className="section-pad" style={{ background: COLORS.white }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Framework"
              title="6 Strategic Pillars"
              subtitle="Every project is rooted in primary production and scaled through industrial processing, mechanization, and global trade strategy."
            />
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))", gap: "24px", alignItems: "start" }}>
            {PILLARS.map((p, i) => (
              <AnimatedSection key={p.num} delay={i * 60}>
                <PillarCard
  num={p.num}
  title={p.title}
  description={p.description}
  icon={p.icon}
/>
              </AnimatedSection>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "52px", position: "relative", zIndex: 1 }}>
            <Link href="/pillars" style={{
              border: `2px solid ${COLORS.green}`, color: COLORS.green,
              padding: "16px 44px", textDecoration: "none",
              fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700,
              fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase",
              borderRadius: "2px", display: "inline-block", background: COLORS.white,
            }}>Explore All Pillars →</Link>
          </div>
        </div>
      </section>

      {/* ── COMMODITIES ── */}
      <section id="commodities" className="section-pad" style={{ background: COLORS.offWhite }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <SectionHeader eyebrow="What We Grow" title="Strategic Commodities" />
          </AnimatedSection>
          <div className="commodities-grid">
            {COMMODITIES.map((c, i) => {
              const Icon = commodityIcons[i];
              return (
                <AnimatedSection key={c.name} delay={i * 80}>
                  <div
                    style={{
                      background: commodityAccents[i], borderRadius: "2px",
                      padding: "clamp(24px, 4vw, 48px) clamp(16px, 3vw, 28px) clamp(20px, 3vw, 36px)",
                      textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s",
                      height: "100%", boxSizing: "border-box", position: "relative", overflow: "hidden",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                  >
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: COLORS.gold }} />
                    <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}><Icon /></div>
                    <h3 style={{ color: COLORS.white, fontSize: "clamp(16px, 3vw, 21px)", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 700, margin: "0 0 12px" }}>{c.name}</h3>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, margin: 0, fontFamily: "'Fira Sans', Arial, sans-serif" }}>{c.desc}</p>
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
              fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase",
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
        theme="white"
        agriElement={false}
      />
    </>
  );
}