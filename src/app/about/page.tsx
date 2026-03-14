"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import CTASection from "@/components/CTASection";
import { COLORS } from "@/lib/constants";
import Link from "next/link";

const aboutStyles = `
  .about-hero {
    background: linear-gradient(135deg, #0d3d0d 0%, #1F6B1F 60%, #2d5a1b 100%);
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 40px 80px;
    position: relative;
    overflow: hidden;
  }
  .about-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(212,160,23,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,160,23,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .about-hero-eyebrow {
    color: #D4A017;
    font-size: 12px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: 'Fira Sans', Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 1;
  }
  .about-hero-eyebrow::before,
  .about-hero-eyebrow::after {
    content: '';
    width: 40px;
    height: 1px;
    background: #D4A017;
    opacity: 0.5;
  }
  .about-hero-title {
    font-size: clamp(38px, 7vw, 72px);
    color: #fff;
    font-family: 'Plus Jakarta Sans', Arial, sans-serif;
    font-weight: 800;
    line-height: 1.05;
    margin: 0 0 24px;
    letter-spacing: -1px;
    position: relative;
    z-index: 1;
  }
  .about-hero-subtitle {
    font-size: clamp(14px, 2vw, 18px);
    color: rgba(255,255,255,0.55);
    font-family: 'Fira Sans', Arial, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 40px;
    position: relative;
    z-index: 1;
  }
  .about-hero-breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: rgba(255,255,255,0.35);
    font-family: 'Fira Sans', Arial, sans-serif;
    position: relative;
    z-index: 1;
  }
  .about-hero-breadcrumb a { color: rgba(255,255,255,0.5); text-decoration: none; }
  .about-hero-breadcrumb a:hover { color: #D4A017; }

  .about-section { padding: 100px 40px; }
  .about-section-inner { max-width: 1200px; margin: 0 auto; }
  .about-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }

  .corp-card {
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.07);
    overflow: hidden;
  }
  .corp-card-header {
    background: #1F6B1F;
    padding: 32px 36px;
    position: relative;
    overflow: hidden;
  }
  .corp-card-header::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 100px; height: 100px;
    background: #D4A017;
    opacity: 0.1;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  .corp-card-body { padding: 32px 36px; }
  .corp-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
  }
  .corp-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

  .mission-text {
    font-size: clamp(16px, 1.9vw, 18px);
    line-height: 2.0;
    color: #4A5F6A;
    font-family: 'Fira Sans', Arial, sans-serif;
    margin: 0 0 22px;
  }
  .mission-highlight {
    background: #f8f5ec;
    border-left: 4px solid #D4A017;
    padding: 22px 26px;
    border-radius: 0 4px 4px 0;
    margin: 28px 0;
  }

  /* Values */
  .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 52px; }
  .value-card {
    background: #fff;
    border-radius: 4px;
    padding: 34px 28px;
    border-top: 3px solid #D4A017;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .value-card:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,0,0,0.09); }
  .value-icon {
    width: 52px;
    height: 52px;
    background: #f0f7f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  }

  /* Leadership */
  .leadership-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 48px; }
  .leader-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 36px 40px;
    text-align: center;
  }
  .leader-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  }

  /* Circular photo */
  .leader-photo-ring {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, #D4A017, #f0c840, #D4A017);
    margin-bottom: 8px;
    flex-shrink: 0;
  }
  .leader-photo-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    background: linear-gradient(135deg, #1F6B1F, #0d3d0d);
    position: relative;
  }
  .leader-photo-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }
  .leader-photo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .leader-photo-placeholder span {
    font-size: 48px;
    font-weight: 800;
    color: rgba(212,160,23,0.5);
    font-family: 'Plus Jakarta Sans', Arial, sans-serif;
    line-height: 1;
  }
  .leader-photo-placeholder small {
    font-size: 10px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Fira Sans', Arial, sans-serif;
    margin-top: 6px;
  }
  .leader-gold-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #D4A017;
    margin: 18px auto 22px;
  }
  .leader-body { width: 100%; }
  .leader-divider {
    width: 48px;
    height: 2px;
    background: #D4A017;
    margin: 16px auto 20px;
  }

  @media (max-width: 900px) {
    .about-section { padding: 72px 32px; }
    .about-grid-2 { grid-template-columns: 1fr; gap: 40px; }
    .values-grid { grid-template-columns: 1fr 1fr; }
    .leadership-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
    .corp-card-header { padding: 24px 28px; }
    .corp-card-body { padding: 24px 28px; }
  }
  @media (max-width: 600px) {
    .about-hero { padding: 100px 20px 60px; }
    .about-section { padding: 60px 20px; }
    .values-grid { grid-template-columns: 1fr; }
    .leader-photo-ring { width: 150px; height: 150px; }
    .leader-card { padding: 32px 24px 28px; }
  }
`;

const InnovationIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1F6B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
);
const PartnershipIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1F6B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IndustrializationIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1F6B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/>
    <line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
);

const leaders = [
  {
    name: "Ransford Aleke",
    role: "Founder & Chief Executive Officer",
    initial: "RA",
    image: "/about/ransford.jpeg",
    desc: "The progenitor and visionary behind Tru Seeds Africa. Ransford drives the strategic direction, industrial partnerships, and policy advocacy that positions TSA as a continent-wide agribusiness leader. His commitment to building Africa's industrial future is the cornerstone of TSA's mission.",
  },
  {
    name: "Nana Ama Hawkins",
    role: "Co-Founder",
    initial: "NH",
    image: "/about/nana-ama.png",
    desc: "A founding pillar of TSA, Nana Ama brings deep institutional networks and operational expertise that complement TSA's mission to industrialize African commodity value chains. Her leadership ensures TSA's frameworks translate into real-world impact across communities and markets.",
  },
];

const values = [
  {
    Icon: InnovationIcon,
    title: "Innovation",
    desc: "Applying cutting-edge Ag-Tech and circular economy principles to transform traditional farming into scalable industrial enterprise.",
  },
  {
    Icon: PartnershipIcon,
    title: "Partnership",
    desc: "Building strategic alliances with global trade bodies, institutional investors, and local farming communities for shared prosperity.",
  },
  {
    Icon: IndustrializationIcon,
    title: "Industrialization",
    desc: "Moving Africa beyond raw material export toward finished goods manufacturing, value-added processing, and global market competitiveness.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{aboutStyles}</style>

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-eyebrow">Who We Are</div>
        <h1 className="about-hero-title">
          About <span style={{ color: COLORS.gold }}>Tru Seeds Africa</span>
        </h1>
        <p className="about-hero-subtitle">Cultivating Wealth · Processing the Future</p>
        <div className="about-hero-breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>About</span>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom, transparent, rgba(13,61,13,0.4))", pointerEvents: "none" }} />
      </section>

      {/* ── MISSION ── */}
      <section className="about-section" style={{ background: COLORS.white }}>
        <div className="about-section-inner">
          <AnimatedSection>
            <div className="about-grid-2">
              {/* Left */}
              <div>
                <div style={{ color: COLORS.gold, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 16 }}>Our Mission</div>
                <h2 style={{ fontSize: "clamp(30px, 4vw, 46px)", color: COLORS.green, fontWeight: 800, margin: "0 0 28px", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1.15 }}>
                  Industrializing<br />African Agriculture
                </h2>
                <p className="mission-text">
                  TRU SEEDS AFRICA (TSA) is a premier industrial agribusiness and strategic consultancy firm based in Ghana. We bridge the gap between primary agricultural production and global industrial demand.
                </p>
                <p className="mission-text">
                  By integrating cutting-edge Ag-Tech, circular economy principles, and strategic value-chain architecture, TSA empowers African commodities — Cassava, Oil Palm, Coconut, and Cocoa — to compete on the global stage through high-value industrial transformation.
                </p>
                <div className="mission-highlight">
                  <p style={{ color: COLORS.charcoal, fontSize: "clamp(16px, 1.9vw, 18px)", fontFamily: "'Georgia', serif", fontStyle: "italic", lineHeight: 1.85, margin: 0 }}>
                    "Beyond Farming — We Are Building Industries. Our vision is to position Africa not just as a supplier of raw materials, but as a manufacturer, processor, and exporter of finished goods."
                  </p>
                  <div style={{ marginTop: 14, color: COLORS.gold, fontSize: 14, fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, letterSpacing: 1 }}>— Ransford Aleke, CEO</div>
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                  <Link href="/services" style={{ background: COLORS.green, color: "#fff", padding: "13px 28px", textDecoration: "none", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", borderRadius: "2px" }}>Our Services</Link>
                  <Link href="/pillars" style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, padding: "11px 24px", textDecoration: "none", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", borderRadius: "2px" }}>6 Pillars</Link>
                </div>
              </div>

              {/* Right: corporate card */}
              <div className="corp-card">
                <div className="corp-card-header">
                  <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 10 }}>Corporate Overview</div>
                  <h3 style={{ color: "#fff", fontSize: "clamp(20px, 3vw, 26px)", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: 0 }}>Company Profile</h3>
                </div>
                <div className="corp-card-body">
                  {[
                    ["Type", "Industrial Agribusiness & Strategic Consultancy"],
                    ["Registration", "Duly registered under the laws of Ghana"],
                    ["Headquarters", "#4 Terminalia Street, Dansoman, Accra"],
                    ["P.O. Box", "AN 16695, Accra North"],
                    ["Partner", "Chamber of Agribusiness Ghana (CAG)"],
                    ["Trade Framework", "AfCFTA Trade Facilitation"],
                    ["Core Commodities", "Cassava, Oil Palm, Coconut, Cocoa"],
                    ["Strategic Pillars", "6 Integrated Value-Chain Pillars"],
                  ].map(([label, value]) => (
                    <div key={label} className="corp-row">
                      <span style={{ color: COLORS.gold, fontWeight: 700, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif" }}>{label}</span>
                      <span style={{ color: COLORS.charcoal, fontSize: 16, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.6 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={100}>
            <div className="values-grid">
              {values.map(({ Icon, title, desc }) => (
                <div key={title} className="value-card">
                  <div className="value-icon">
                    <Icon />
                  </div>
                  <h4 style={{ color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: 20, margin: "0 0 12px" }}>{title}</h4>
                  <p style={{ color: COLORS.charcoalLight, fontSize: "clamp(15px, 1.7vw, 17px)", lineHeight: 1.9, margin: 0, fontFamily: "'Fira Sans', Arial, sans-serif" }}>{desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="about-section" style={{ background: COLORS.offWhite }}>
        <div className="about-section-inner">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Our Leadership"
              title="The Founders"
              subtitle="Visionary leaders driving Africa's agricultural industrialization forward."
            />
          </AnimatedSection>

          <div className="leadership-grid">
            {leaders.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 100}>
                <div className="leader-card">
                  <div className="leader-photo-ring">
                    <div className="leader-photo-inner">
                      <img
                        src={person.image}
                        alt={person.name}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = "flex";
                        }}
                      />
                      <div className="leader-photo-placeholder" style={{ display: "none", position: "absolute", inset: 0 }}>
                        <span>{person.initial}</span>
                        <small>Photo soon</small>
                      </div>
                    </div>
                  </div>

                  <div className="leader-gold-dot" />

                  <div className="leader-body">
                    <h3 style={{ color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 26px)", margin: "0 0 8px" }}>{person.name}</h3>
                    <p style={{ color: COLORS.gold, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, margin: 0 }}>{person.role}</p>
                    <div className="leader-divider" />
                    <p style={{ color: "#4A5F6A", fontSize: "clamp(15px, 1.7vw, 17px)", lineHeight: 1.95, fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0 }}>{person.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorSection />

      <CTASection
        theme="dark"
        agriElement={true}
        eyebrow="Partner With TSA"
        title="Ready to Build"
        highlight="Africa's Future?"
        subtitle="Join us in transforming African agriculture through innovation, integration, and industrialization."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
      />
    </>
  );
}