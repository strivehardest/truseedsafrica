"use client";

import Head from "next/head";
import AnimatedSection from "@/components/AnimatedSection";
import { COLORS, SERVICES } from "@/lib/constants";
import ServicesHeroSection from "@/components/sections/ServicesHeroSection";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const keyServices = [
  {
    title: "Strategic Agribusiness Consulting",
    desc: "Value-chain mapping, market entry strategies, and operational scaling for large-scale agricultural estates.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Outgrower Scheme Management",
    desc: "Designing and managing Nucleus-Outgrower models that link smallholder productivity to industrial factory demand.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/>
        <line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/>
      </svg>
    ),
  },
  {
    title: "Investment Due Diligence",
    desc: "Technical auditing and biological asset valuation for financial institutions and private equity firms.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="6 9 10 13 14 9 18 13"/>
      </svg>
    ),
  },
  {
    title: "Policy Advocacy & Market Intelligence",
    desc: "Empirical research and high-level engagement to influence pro-agricultural trade frameworks and industrial policies.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Tru Seeds Africa</title>
        <meta name="description" content="Tru Seeds Africa offers strategic agribusiness consulting, outgrower scheme management, due diligence, and market intelligence services for Africa's agricultural sector." />
        <meta name="keywords" content="Tru Seeds Africa, services, consulting, agribusiness, due diligence, market intelligence, Ghana, Africa, agriculture, value chain, industrial processing" />
      </Head>
      <style>{`
        .services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 28px; align-items: start; }
        .key-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .service-card { border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; padding: 44px 36px; background: rgba(255,255,255,0.05); transition: background 0.3s, border-color 0.3s; }
        .service-card:hover { background: rgba(212,160,23,0.09); border-color: rgba(212,160,23,0.35); }
        @media (max-width: 768px) {
          .key-services-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <ServicesHeroSection />

      {/* ── KEY SERVICES HIGHLIGHTS ── */}
      <section style={{ background: COLORS.white, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>What Sets TSA Apart</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "16px 0 0" }}>
                Key Corporate Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="key-services-grid">
            {keyServices.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80}>
                <div style={{
                  background: COLORS.offWhite, borderRadius: "4px",
                  padding: "40px 36px", borderTop: `4px solid ${i % 2 === 0 ? COLORS.green : COLORS.gold}`,
                  display: "flex", flexDirection: "column", gap: "16px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ color: i % 2 === 0 ? COLORS.green : COLORS.gold }}>{item.icon}</div>
                  <h3 style={{ color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: "20px", margin: 0, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: COLORS.charcoalLight, fontSize: "15px", lineHeight: 1.8, margin: 0, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL SERVICES PORTFOLIO ── */}
      <section style={{ background: COLORS.charcoal, padding: "100px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>Full Portfolio</span>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", color: COLORS.white, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "16px 0 0" }}>
                Core Corporate <span style={{ color: COLORS.gold }}>Service Portfolio</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="service-card">
                  {/* Number + divider */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                    <span style={{ color: COLORS.gold, fontWeight: 900, fontSize: "18px", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", letterSpacing: "2px", minWidth: "32px" }}>0{i + 1}</span>
                    <div style={{ flex: 1, height: "1px", background: "rgba(212,160,23,0.3)" }} />
                  </div>

                  <h3 style={{ fontSize: "19px", fontWeight: 800, color: COLORS.white, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1.3, margin: "0 0 20px" }}>
                    {s.title}
                  </h3>

                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {s.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "5px", flexShrink: 0 }}>
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

      {/* ── CTA SECTION ── */}
      <CTASection
        theme="green"
        eyebrow="Start Today"
        title="Ready to Scale"
        highlight="Your Farm?"
        subtitle=""
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          { label: "Learn More", href: "/about", variant: "outline" },
        ]}
        agriElement={true}
      />
    </>
  );
}